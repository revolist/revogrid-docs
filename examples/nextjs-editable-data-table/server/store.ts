import { DatabaseSync } from 'node:sqlite'
import { mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import {
  exactKeys,
  fields,
  toDraft,
  validateDraft,
  type OrderLine,
  type SaveRequest,
} from '../shared/order-model.ts'

const workspace = 'local-tutorial'
// Fixtures were reconstructed from the retained draft; rows 1–3 and zero-price row
// retain the documented walkthrough. The original JSON source was unavailable.
export const seedRows: OrderLine[] = Array.from({ length: 20 }, (_, i) => ({
  id: `OL-${String(i + 1).padStart(4, '0')}`,
  sku: `PART-${String(i + 1).padStart(3, '0')}`,
  quantity: i + 1,
  unitPriceCents: i === 19 ? 0 : (i + 1) * 125,
  status: 'draft',
  version: 1,
}))
Object.assign(seedRows[0], { sku: 'WASHER-M6', quantity: 12, unitPriceCents: 125 })
Object.assign(seedRows[1], {
  sku: 'BOLT-M8',
  quantity: 40,
  unitPriceCents: 89,
  status: 'confirmed',
  version: 2,
})
Object.assign(seedRows[2], { sku: 'BRACKET-90', quantity: 6, unitPriceCents: 1495, version: 4 })

export function openStore(filename = process.env.ORDERS_DB ?? resolve('.data/orders.sqlite')) {
  if (filename !== ':memory:') mkdirSync(dirname(filename), { recursive: true })
  const db = new DatabaseSync(filename)
  db.exec(`PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;
    CREATE TABLE IF NOT EXISTS order_lines (
      workspace TEXT NOT NULL, id TEXT NOT NULL, sku TEXT NOT NULL,
      quantity INTEGER NOT NULL CHECK(quantity BETWEEN 1 AND 9999),
      unitPriceCents INTEGER NOT NULL CHECK(unitPriceCents BETWEEN 0 AND 99999999),
      status TEXT NOT NULL CHECK(status IN ('draft','confirmed','shipped')),
      version INTEGER NOT NULL CHECK(version > 0), PRIMARY KEY(workspace,id));`)
  const columns = 'id, sku, quantity, unitPriceCents, status, version'
  const list = () =>
    db
      .prepare(`SELECT ${columns} FROM order_lines WHERE workspace=? ORDER BY id`)
      .all(workspace)
      .map(row => ({ ...row })) as OrderLine[]
  const read = (id: string): OrderLine | undefined => {
    const row = db
      .prepare(`SELECT ${columns} FROM order_lines WHERE workspace=? AND id=?`)
      .get(workspace, id)
    return row ? ({ ...row } as OrderLine) : undefined
  }
  const transaction = <T>(run: () => T): T => {
    db.exec('BEGIN IMMEDIATE')
    try {
      const value = run()
      db.exec('COMMIT')
      return value
    } catch (error) {
      db.exec('ROLLBACK')
      throw error
    }
  }
  const reset = () =>
    transaction(() => {
      db.prepare('DELETE FROM order_lines WHERE workspace=?').run(workspace)
      const insert = db.prepare('INSERT INTO order_lines VALUES (?, ?, ?, ?, ?, ?, ?)')
      for (const r of seedRows)
        insert.run(workspace, r.id, r.sku, r.quantity, r.unitPriceCents, r.status, r.version)
      return list()
    })
  // Only a new database is seeded; restarting never discards a saved change.
  db.exec('CREATE TABLE IF NOT EXISTS tutorial_metadata (workspace TEXT PRIMARY KEY)')
  transaction(() => {
    if (!db.prepare('SELECT workspace FROM tutorial_metadata WHERE workspace=?').get(workspace)) {
      const insert = db.prepare('INSERT INTO order_lines VALUES (?, ?, ?, ?, ?, ?, ?)')
      for (const r of seedRows)
        insert.run(workspace, r.id, r.sku, r.quantity, r.unitPriceCents, r.status, r.version)
      db.prepare('INSERT INTO tutorial_metadata VALUES (?)').run(workspace)
    }
  })
  function save(id: string, input: unknown) {
    if (
      !exactKeys(input, ['expectedVersion', 'changes']) ||
      !Number.isSafeInteger(input.expectedVersion) ||
      Number(input.expectedVersion) < 1 ||
      !exactKeys(input.changes, fields) ||
      typeof input.changes.quantity !== 'number' ||
      typeof input.changes.unitPriceCents !== 'number' ||
      typeof input.changes.sku !== 'string' ||
      typeof input.changes.status !== 'string'
    )
      return {
        status: 400,
        body: {
          code: 'INVALID_REQUEST',
          message: 'This save request could not be accepted. Your draft is preserved.',
        },
      }
    const request = input as unknown as SaveRequest
    const validated = validateDraft(
      toDraft({ id, version: request.expectedVersion, ...request.changes }),
    )
    if (!validated.changes)
      return {
        status: 422,
        body: {
          code: 'VALIDATION_FAILED',
          message: 'The server rejected one or more fields.',
          fields: validated.errors,
        },
      }
    const c = validated.changes
    return transaction(() => {
      const row = db
        .prepare(
          `UPDATE order_lines SET sku=?,quantity=?,unitPriceCents=?,status=?,version=version+1
        WHERE workspace=? AND id=? AND version=? RETURNING ${columns}`,
        )
        .get(
          c.sku,
          c.quantity,
          c.unitPriceCents,
          c.status,
          workspace,
          id,
          request.expectedVersion,
        ) as OrderLine | undefined
      if (row) return { status: 200, body: { row } }
      const current = read(id)
      return current
        ? {
            status: 409,
            body: { code: 'VERSION_CONFLICT', message: 'This row changed on the server.', current },
          }
        : {
            status: 404,
            body: { code: 'NOT_FOUND', message: 'This order line is no longer available.' },
          }
    })
  }
  let tail: Promise<unknown> = Promise.resolve()
  function serialize<T>(operation: () => T | Promise<T>): Promise<T> {
    const result = tail.then(operation)
    tail = result.catch(() => undefined)
    return result
  }
  return { list, read, save, reset, serialize, close: () => db.close() }
}
// Route modules share one local runtime, including body-read/reset ordering.
const runtime = globalThis as typeof globalThis & {
  tutorialOrderStore?: ReturnType<typeof openStore>
}
export const store = () => (runtime.tutorialOrderStore ??= openStore())
