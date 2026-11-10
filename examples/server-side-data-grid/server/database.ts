import { DatabaseSync, type SQLInputValue } from 'node:sqlite'
import { mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fixture } from './fixture.ts'
import { validateQuery, type Filter, type Page, type Query } from '../shared/query.ts'

// Identifiers/directions come only from these module-owned maps.
const identifiers = {
  id: 'id',
  customer: 'customer',
  status: 'status',
  totalCents: 'totalCents',
  createdAt: 'createdAt',
} as const
export function compile(query: Query, accountId: string) {
  const values: SQLInputValue[] = [accountId]
  const condition = (node: Filter): string => {
    if (node.kind === 'group')
      return `(${node.children.map(condition).join(node.logic === 'and' ? ' AND ' : ' OR ')})`
    const field = identifiers[node.field]
    if (node.op === 'isNull') return `${field} IS NULL`
    values.push(node.value!)
    if (node.op === 'contains') return `instr(lower(${field}),lower(?)) > 0`
    const operators = { eq: '=', gte: '>=', lte: '<=', lt: '<' }
    return `${field}${['id', 'customer'].includes(node.field) ? ' COLLATE NOCASE' : ''} ${operators[node.op]} ?`
  }
  const where = ['accountId = ?']
  if (query.filter) where.push(condition(query.filter))
  if (query.search) {
    where.push('(instr(lower(id),lower(?)) > 0 OR instr(lower(customer),lower(?)) > 0)')
    values.push(query.search, query.search)
  }
  const sort = [...query.sort]
  if (!sort.some(term => term.field === 'id')) sort.push({ field: 'id', order: 'asc' })
  const order = sort
    .flatMap(term => [
      ...(term.field === 'totalCents' ? ['(totalCents IS NULL) ASC'] : []),
      `${identifiers[term.field]}${['id', 'customer'].includes(term.field) ? ' COLLATE NOCASE' : ''} ${term.order === 'desc' ? 'DESC' : 'ASC'}`,
    ])
    .join(', ')
  return { where: where.join(' AND '), values, order }
}
export function openDatabase(filename = process.env.ORDERS_DB ?? resolve('.data/orders.sqlite')) {
  if (filename !== ':memory:') mkdirSync(dirname(filename), { recursive: true })
  const db = new DatabaseSync(filename)
  db.exec(`PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;
    CREATE TABLE IF NOT EXISTS orders (id TEXT PRIMARY KEY, accountId TEXT NOT NULL, customer TEXT NOT NULL,
      status TEXT NOT NULL CHECK(status IN ('pending','paid','shipped','cancelled')), totalCents INTEGER CHECK(totalCents >= 0), createdAt TEXT NOT NULL);
    CREATE INDEX IF NOT EXISTS orders_account_id ON orders(accountId,id);`)
  function reset() {
    db.exec('BEGIN IMMEDIATE')
    try {
      db.exec('DELETE FROM orders')
      const insert = db.prepare('INSERT INTO orders VALUES (?, ?, ?, ?, ?, ?)')
      for (const row of fixture())
        insert.run(row.id, row.accountId, row.customer, row.status, row.totalCents, row.createdAt)
      db.exec('COMMIT')
    } catch (error) {
      db.exec('ROLLBACK')
      throw error
    }
  }
  if (!db.prepare('SELECT COUNT(*) AS n FROM orders').get()!.n) reset()
  function query(input: unknown, accountId = 'demo-a', betweenReads?: () => void): Page {
    const q = validateQuery(input)
    const sql = compile(q, accountId)
    db.exec('BEGIN')
    try {
      const total = Number(
        db.prepare(`SELECT COUNT(*) AS n FROM orders WHERE ${sql.where}`).get(...sql.values)!.n,
      )
      betweenReads?.()
      const rows = db
        .prepare(
          `SELECT id,customer,status,totalCents,createdAt FROM orders WHERE ${sql.where} ORDER BY ${sql.order} LIMIT ? OFFSET ?`,
        )
        .all(...sql.values, q.limit, q.offset) as Page['rows']
      db.exec('COMMIT')
      return { rows, total }
    } catch (error) {
      db.exec('ROLLBACK')
      throw error
    }
  }
  return { query, reset, close: () => db.close() }
}
