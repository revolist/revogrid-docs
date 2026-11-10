import type { PaginationLoadData, PaginationLoadDataResult } from '@revolist/revogrid-pro'
import { validatePage, validateQuery, type Order, type Query } from '../shared/query.ts'

export type LoadedOrders = PaginationLoadDataResult<Order> & { request: Query }
export type OrdersTransport = (query: Query, signal?: AbortSignal) => Promise<unknown>
export const httpOrders: OrdersTransport = async (query, signal) => {
  const response = await fetch('/api/orders/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
    signal,
  })
  if (!response.ok) throw new Error('HTTP load failed')
  return response.json()
}

/** Translate the public Pro loader contract to the application-owned SQL API.
 * Cancellation, acceptance, paging and source updates remain plugin-owned. */
export function createOrdersLoader(
  input: Pick<Query, 'search' | 'sort' | 'filter'>,
  transport: OrdersTransport = httpOrders,
  onRequest?: (query: Query) => void,
): PaginationLoadData<Order> {
  const base = structuredClone(input)
  return async (
    skip,
    take,
    _order,
    _single,
    _multi,
    _quick,
    _temporal,
    _ast,
    _execution,
    context,
  ): Promise<LoadedOrders> => {
    const request = validateQuery({ ...base, offset: skip, limit: take })
    onRequest?.(structuredClone(request))
    const page = validatePage(await transport(structuredClone(request), context?.signal), request)
    return { data: page.rows, total: page.total, request: structuredClone(request) }
  }
}
