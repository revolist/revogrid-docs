import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { openDatabase } from '../server/database.ts'
import { createOrdersServer } from '../server/http.ts'
import {
  initialQuery,
  validateQuery,
  validatePage,
  amountToCents,
  type Filter,
} from '../shared/query.ts'
import { createOrdersLoader } from '../src/load-orders.ts'

const ids = (rows: { id: string }[]) => rows.map(row => row.id)
const c = (
  field: 'customer' | 'status' | 'totalCents' | 'createdAt',
  op: 'eq' | 'contains' | 'gte' | 'lt' | 'isNull',
  value?: string | number,
): Filter => ({ kind: 'condition', field, op, ...(value === undefined ? {} : { value }) })
test('SQLite pages, scoped count, literal search, compound predicates, null/zero, dates and stable sort', () => {
  const db = openDatabase(':memory:')
  try {
    assert.equal(db.query(initialQuery()).total, 980)
    assert.deepEqual(
      ids(db.query(initialQuery()).rows),
      Array.from({ length: 10 }, (_, i) => `ORD-${String(i + 1).padStart(4, '0')}`),
    )
    assert.equal(db.query({ ...initialQuery(), offset: 10 }).rows[0].id, 'ORD-0011')
    assert.deepEqual(ids(db.query({ ...initialQuery(), search: ' NEEDLE ' }).rows), [
      'ORD-0501',
      'ORD-0777',
    ])
    assert.deepEqual(ids(db.query({ ...initialQuery(), search: 'Needle' }, 'demo-b').rows), [
      'ORD-0991',
    ])
    assert.equal(db.query({ ...initialQuery(), search: '100% Parts_Kit' }).rows[0].id, 'ORD-0042')
    const filter: Filter = {
      kind: 'group',
      logic: 'and',
      children: [
        {
          kind: 'group',
          logic: 'or',
          children: [c('status', 'eq', 'paid'), c('status', 'eq', 'shipped')],
        },
        c('totalCents', 'gte', 100000),
        c('customer', 'contains', 'needle'),
      ],
    }
    assert.equal(db.query({ ...initialQuery(), filter }).total, 2)
    assert.equal(db.query({ ...initialQuery(), filter: c('totalCents', 'isNull') }).total, 51)
    assert.deepEqual(ids(db.query({ ...initialQuery(), filter: c('totalCents', 'eq', 0) }).rows), [
      'ORD-0041',
    ])
    assert.deepEqual(
      ids(
        db.query({
          ...initialQuery(),
          filter: {
            kind: 'group',
            logic: 'and',
            children: [
              c('createdAt', 'gte', '2026-02-01T00:00:00.000Z'),
              c('createdAt', 'lt', '2026-03-01T00:00:00.000Z'),
            ],
          },
        }).rows,
      ),
      ['ORD-0901', 'ORD-0902'],
    )
    assert.equal(
      db.query({
        ...initialQuery(),
        search: 'Needle',
        limit: 1,
        offset: 1,
        sort: [{ field: 'totalCents', order: 'desc' }],
      }).rows[0].id,
      'ORD-0777',
    )
    assert.deepEqual(
      ids(
        db.query({
          ...initialQuery(),
          search: 'Needle',
          sort: [
            { field: 'status', order: 'desc' },
            { field: 'createdAt', order: 'asc' },
          ],
        }).rows,
      ),
      ['ORD-0777', 'ORD-0501'],
    )
    assert.deepEqual(db.query({ ...initialQuery(), offset: 990 }), { rows: [], total: 980 })
    assert.equal(db.query({ ...initialQuery(), search: "' OR 1=1 --" }).total, 0)
    assert.equal(
      db.query(initialQuery()).rows.some(row => 'accountId' in row),
      false,
    )
  } finally {
    db.close()
  }
})
test('bounded protocol and malformed responses reject unsupported input', () => {
  for (const patch of [
    { accountId: 'demo-b' },
    { offset: -1 },
    { limit: 101 },
    { limit: '10' },
    { search: 'x'.repeat(81) },
    { sort: [{ field: 'id;DROP TABLE orders', order: 'asc' }] },
    {
      sort: [
        { field: 'id', order: 'asc' },
        { field: 'id', order: 'desc' },
      ],
    },
    { filter: c('createdAt', 'gte', '2026-02-30T00:00:00.000Z') },
    { filter: c('totalCents', 'eq', '0') },
    { filter: { kind: 'group', logic: 'or', children: [] } },
  ])
    assert.throws(() => validateQuery({ ...initialQuery(), ...patch }))
  let tree: Filter = c('status', 'eq', 'paid')
  for (let n = 0; n < 4; n++) tree = { kind: 'group', logic: 'and', children: [tree] }
  assert.throws(() => validateQuery({ ...initialQuery(), filter: tree }))
  assert.throws(() =>
    validateQuery({
      ...initialQuery(),
      filter: {
        kind: 'group',
        logic: 'and',
        children: Array.from({ length: 13 }, () => c('status', 'eq', 'paid')),
      },
    }),
  )
  assert.throws(() => validatePage({ rows: [], total: -1 }, initialQuery()))
  assert.throws(() => validatePage({ rows: [{ id: 'x' }], total: 1 }, initialQuery()))
  assert.equal(amountToCents('1.25'), 125)
  assert.equal(amountToCents('0'), 0)
  assert.throws(() => amountToCents('1.234'))
})
test('count and rows stay on one SQLite snapshot while another connection writes', () => {
  const directory = mkdtempSync(join(tmpdir(), 'revogrid-query-')),
    filename = join(directory, 'orders.sqlite')
  const db = openDatabase(filename),
    writer = new DatabaseSync(filename)
  try {
    const page = db.query(initialQuery(), 'demo-a', () =>
      writer.prepare('DELETE FROM orders WHERE id=?').run('ORD-0001'),
    )
    assert.equal(page.total, 980)
    assert.equal(page.rows[0].id, 'ORD-0001')
    assert.equal(db.query(initialQuery()).total, 979)
  } finally {
    db.close()
    writer.close()
    rmSync(directory, { recursive: true, force: true })
  }
})
test('real HTTP endpoint limits bodies and returns only a page with fixed server account scope', async () => {
  const db = openDatabase(':memory:'),
    server = createOrdersServer(db)
  await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve))
  const address = server.address()
  if (!address || typeof address === 'string') throw Error('No address')
  const url = `http://127.0.0.1:${address.port}/api/orders/query`
  try {
    const post = (body: unknown) => fetch(url, { method: 'POST', body: JSON.stringify(body) })
    const response = await post(initialQuery()),
      data = await response.json()
    assert.equal(response.status, 200)
    assert.equal(data.rows.length, 10)
    assert.equal(data.total, 980)
    assert.equal((await post({ ...initialQuery(), accountId: 'demo-b' })).status, 400)
    assert.equal((await post({ ...initialQuery(), search: 'x'.repeat(9000) })).status, 400)
  } finally {
    await new Promise<void>(resolve => server.close(() => resolve()))
    db.close()
  }
})
test('Pro loader maps skip/take, forwards cancellation, validates the response and detaches query metadata', async () => {
  const base = { search: 'Needle', sort: [], filter: null }
  const signal = new AbortController().signal
  const db = openDatabase(':memory:')
  let observed: unknown
  try {
    const loader = createOrdersLoader(base, async (query, receivedSignal) => {
      assert.equal(receivedSignal, signal)
      observed = structuredClone(query)
      return db.query(query)
    })
    base.search = 'Changed after construction'
    const result = await loader(
      1,
      1,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      { signal },
    )
    assert.ok(!Array.isArray(result))
    assert.deepEqual(ids(result.data), ['ORD-0777'])
    assert.equal(result.total, 2)
    assert.deepEqual(observed, { offset: 1, limit: 1, search: 'Needle', sort: [], filter: null })
    const invalid = createOrdersLoader({ search: '', sort: [], filter: null }, async () => ({
      rows: [{ id: 'invalid' }],
      total: 1,
    }))
    await assert.rejects(() => invalid(0, 10))
  } finally {
    db.close()
  }
})
