import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { openStore } from '../server/store.ts'
import { toDraft, validateDraft, reapply, isDirty, messages } from '../shared/order-model.ts'

test('raw drafts preserve invalid input, normalize only on validation, and accept zero cents', () => {
  const db = openStore(':memory:')
  try {
    const baseline = db.read('OL-0001')!
    assert.equal(Object.getPrototypeOf(db.list()[0]), Object.prototype)
    assert.equal(Object.getPrototypeOf(baseline), Object.prototype)
    const draft = toDraft(baseline)
    for (const quantity of ['', '0', '-1', '1.5', '1e3', '10000', 'NaN'])
      assert.ok(validateDraft({ ...draft, quantity }).errors.quantity, quantity)
    assert.equal(
      validateDraft({ ...draft, quantity: '0015', unitPriceCents: '0', sku: ' washer-m6 ' }).changes
        ?.quantity,
      15,
    )
    assert.equal(validateDraft({ ...draft, unitPriceCents: '0' }).changes?.unitPriceCents, 0)
    assert.equal(isDirty({ ...draft, sku: ' washer-m6 ' }, baseline), false)
    assert.ok(
      validateDraft({ ...draft, quantity: '0' }, { ...messages, quantity: 'Quantidade inválida' })
        .errors.quantity === 'Quantidade inválida',
    )
    assert.equal(draft.quantity, '12')
  } finally {
    db.close()
  }
})

test('server strictly validates envelopes, types and values without altering canonical rows', () => {
  const db = openStore(':memory:')
  try {
    const row = db.read('OL-0001')!
    const changes = {
      sku: row.sku,
      quantity: row.quantity,
      unitPriceCents: row.unitPriceCents,
      status: row.status,
    }
    for (const body of [
      null,
      {},
      { expectedVersion: 1, changes, workspace: 'other' },
      { expectedVersion: '1', changes },
      { expectedVersion: 1, changes: { ...changes, quantity: '15' } },
      { expectedVersion: 1, changes: { ...changes, id: 'hack' } },
    ])
      assert.equal(db.save(row.id, body).status, 400)
    for (const patch of [
      { quantity: 0 },
      { quantity: 1.5 },
      { unitPriceCents: -1 },
      { status: 'unknown' },
      { sku: '' },
    ])
      assert.equal(
        db.save(row.id, { expectedVersion: 1, changes: { ...changes, ...patch } }).status,
        422,
      )
    assert.deepEqual(db.read(row.id), row)
    assert.equal(db.save('missing', { expectedVersion: 1, changes }).status, 404)
  } finally {
    db.close()
  }
})

test('conditional save, two connections, explicit field reapply, lost response retry and durable restart', () => {
  const directory = mkdtempSync(join(tmpdir(), 'revogrid-orders-'))
  const file = join(directory, 'orders.sqlite')
  let a = openStore(file),
    b = openStore(file)
  try {
    const original = { ...a.read('OL-0003')! }
    const local = { ...toDraft(original), quantity: '8' }
    const remote = {
      sku: original.sku,
      quantity: 9,
      unitPriceCents: original.unitPriceCents,
      status: 'confirmed',
    }
    assert.equal(a.save(original.id, { expectedVersion: 4, changes: remote }).status, 200)
    const stale = b.save(original.id, { expectedVersion: 4, changes: validateDraft(local).changes })
    assert.equal(stale.status, 409)
    const latest = b.read(original.id)!
    const merged = reapply(local, original, latest)
    assert.equal(merged.quantity, '8')
    assert.equal(merged.status, 'confirmed')
    assert.equal(merged.version, 5)
    const request = { expectedVersion: 5, changes: validateDraft(merged).changes }
    assert.equal(b.save(original.id, request).status, 200)
    assert.equal(b.save(original.id, request).status, 409) // response was lost; same version cannot write twice
    assert.equal(b.read(original.id)!.version, 6)
    a.close()
    b.close()
    a = openStore(file)
    b = openStore(file)
    assert.equal(a.read(original.id)!.quantity, 8)
    assert.equal(a.read(original.id)!.version, 6)
    b.reset()
    assert.equal(a.read(original.id)!.version, 4)
    assert.equal(a.list().length, 20)
    assert.equal(
      a.list().some(row => 'workspace' in row),
      false,
    )
  } finally {
    a.close()
    b.close()
    rmSync(directory, { recursive: true, force: true })
  }
})

test('origin follows the incoming Host and reset queues after an outstanding mutation', async () => {
  const { sameOrigin } = await import('../server/request-origin.ts')
  assert.equal(
    sameOrigin(
      new Request('http://localhost:49302/api/orders', {
        headers: { Host: '127.0.0.1:49302', Origin: 'http://127.0.0.1:49302' },
      }),
    ),
    true,
  )
  assert.equal(
    sameOrigin(
      new Request('http://localhost:49302/api/orders', {
        headers: { Host: '127.0.0.1:49302', Origin: 'https://external.example' },
      }),
    ),
    false,
  )
  const db = openStore(':memory:')
  let release!: () => void
  const gate = new Promise<void>(resolve => {
    release = resolve
  })
  const trace: string[] = []
  try {
    const write = db.serialize(async () => {
      await gate
      const row = db.read('OL-0001')!
      db.save(row.id, {
        expectedVersion: row.version,
        changes: {
          sku: row.sku,
          quantity: 15,
          unitPriceCents: row.unitPriceCents,
          status: row.status,
        },
      })
      trace.push('write')
    })
    const reset = db.serialize(() => {
      db.reset()
      trace.push('reset')
    })
    release()
    await Promise.all([write, reset])
    assert.deepEqual(trace, ['write', 'reset'])
    assert.equal(db.read('OL-0001')!.quantity, 12)
    assert.equal(db.read('OL-0001')!.version, 1)
  } finally {
    db.close()
  }
})
