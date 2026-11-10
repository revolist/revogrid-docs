import type { Order } from '../shared/query.ts'
export type StoredOrder = Order & { accountId: string }
// Deterministic reconstruction from the retained handoff, not a claim that the
// missing original JSON was restored byte for byte.
export function fixture(): StoredOrder[] {
  return Array.from({ length: 1000 }, (_, i) => {
    const n = i + 1
    const row: StoredOrder = {
      id: `ORD-${String(n).padStart(4, '0')}`,
      accountId: n <= 980 ? 'demo-a' : 'demo-b',
      customer: `Synthetic Company ${String(n % 97).padStart(2, '0')}`,
      status: (['pending', 'paid', 'shipped', 'cancelled'] as const)[i % 4],
      totalCents: n % 19 === 0 ? null : n * 125,
      createdAt: `2026-${n % 2 ? '01' : '03'}-${String((n % 27) + 1).padStart(2, '0')}T12:00:00.000Z`,
    }
    if ([501, 777, 991].includes(n))
      Object.assign(row, {
        customer: 'Needle Supply',
        totalCents: 125000,
        status: n === 777 ? 'shipped' : 'paid',
        createdAt: n === 777 ? '2026-03-03T00:00:00.000Z' : '2026-01-03T00:00:00.000Z',
      })
    if ([121, 242, 363, 484].includes(n)) row.customer = 'Boundary Labs'
    if (n === 41) row.totalCents = 0
    if (n === 42) row.customer = '100% Parts_Kit'
    if (n >= 900 && n <= 903)
      row.createdAt = [
        '2026-01-31T23:59:59.999Z',
        '2026-02-01T00:00:00.000Z',
        '2026-02-28T23:59:59.999Z',
        '2026-03-01T00:00:00.000Z',
      ][n - 900]
    return row
  })
}
