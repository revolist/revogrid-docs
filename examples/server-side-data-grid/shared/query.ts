export const columns = ['id', 'customer', 'status', 'totalCents', 'createdAt'] as const
export const statuses = ['pending', 'paid', 'shipped', 'cancelled'] as const
export type Field = (typeof columns)[number]
export type Status = (typeof statuses)[number]
export type Order = {
  id: string
  customer: string
  status: Status
  totalCents: number | null
  createdAt: string
}
export type Condition = {
  kind: 'condition'
  field: Field
  op: 'eq' | 'contains' | 'gte' | 'lt' | 'lte' | 'isNull'
  value?: string | number
}
export type Filter = Condition | { kind: 'group'; logic: 'and' | 'or'; children: Filter[] }
export type Query = {
  offset: number
  limit: number
  sort: { field: Field; order: 'asc' | 'desc' }[]
  filter: Filter | null
  search: string
}
export type Page = { rows: Order[]; total: number }
export const initialQuery = (): Query => ({
  offset: 0,
  limit: 10,
  sort: [],
  filter: null,
  search: '',
})
export class InvalidQuery extends Error {
  path: string
  constructor(path: string, message: string) {
    super(message)
    this.path = path
  }
}
const invalid = (path: string, message: string): never => {
  throw new InvalidQuery(path, message)
}
export function exactKeys(
  value: unknown,
  keys: readonly string[],
): value is Record<string, unknown> {
  return (
    !!value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    Object.keys(value).length === keys.length &&
    keys.every(key => Object.hasOwn(value, key))
  )
}
export const isUtc = (value: unknown): value is string =>
  typeof value === 'string' &&
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value) &&
  Number.isFinite(Date.parse(value)) &&
  new Date(value).toISOString() === value
const isField = (value: unknown): value is Field => columns.includes(value as Field)
const isStatus = (value: unknown): value is Status => statuses.includes(value as Status)
export function validateQuery(value: unknown): Query {
  if (!exactKeys(value, ['offset', 'limit', 'sort', 'filter', 'search']))
    return invalid('$', 'Expected offset, limit, sort, filter, and search only.')
  if (!Number.isSafeInteger(value.offset) || Number(value.offset) < 0)
    return invalid('offset', 'Offset must be a nonnegative safe integer.')
  if (!Number.isSafeInteger(value.limit) || Number(value.limit) < 1 || Number(value.limit) > 100)
    return invalid('limit', 'Limit must be an integer from 1 to 100.')
  if (typeof value.search !== 'string' || value.search.length > 80)
    return invalid('search', 'Search must contain at most 80 characters.')
  if (!Array.isArray(value.sort) || value.sort.length > 3)
    return invalid('sort', 'Use at most three sort fields.')
  const seen = new Set<string>()
  for (const term of value.sort) {
    if (
      !exactKeys(term, ['field', 'order']) ||
      !isField(term.field) ||
      !['asc', 'desc'].includes(String(term.order)) ||
      seen.has(term.field)
    )
      return invalid('sort', 'Use distinct allowed fields and asc or desc.')
    seen.add(term.field)
  }
  let nodes = 0,
    leaves = 0
  function filter(node: unknown, depth = 1): Filter {
    if (++nodes > 20 || depth > 3)
      return invalid('filter', 'Filter exceeds the depth or node limit.')
    if (exactKeys(node, ['kind', 'logic', 'children']) && node.kind === 'group') {
      if (
        !['and', 'or'].includes(String(node.logic)) ||
        !Array.isArray(node.children) ||
        !node.children.length
      )
        return invalid('filter', 'Use a nonempty AND or OR group.')
      return {
        kind: 'group',
        logic: node.logic as 'and' | 'or',
        children: node.children.map(child => filter(child, depth + 1)),
      }
    }
    if (++leaves > 12) return invalid('filter', 'Use at most twelve conditions.')
    if (
      exactKeys(node, ['kind', 'field', 'op']) &&
      node.kind === 'condition' &&
      node.field === 'totalCents' &&
      node.op === 'isNull'
    )
      return { kind: 'condition', field: 'totalCents', op: 'isNull' }
    if (
      !exactKeys(node, ['kind', 'field', 'op', 'value']) ||
      node.kind !== 'condition' ||
      !isField(node.field)
    )
      return invalid('filter', 'Invalid condition shape or field.')
    const { field, op } = node
    if (field === 'totalCents') {
      if (
        !['eq', 'gte', 'lte'].includes(String(op)) ||
        typeof node.value !== 'number' ||
        !Number.isSafeInteger(node.value) ||
        node.value < 0
      )
        return invalid('filter', 'Total conditions need a nonnegative integer number of cents.')
    } else if (field === 'createdAt') {
      if (!['gte', 'lt'].includes(String(op)) || !isUtc(node.value))
        return invalid('filter', 'Date conditions need a canonical UTC timestamp and gte or lt.')
    } else if (field === 'status') {
      if (op !== 'eq' || !isStatus(node.value))
        return invalid('filter', 'Choose a valid status with eq.')
    } else if (
      !['eq', 'contains'].includes(String(op)) ||
      typeof node.value !== 'string' ||
      !node.value.length ||
      node.value.length > 80
    )
      return invalid('filter', 'Text conditions need eq or contains and 1–80 characters.')
    return {
      kind: 'condition',
      field,
      op: op as Condition['op'],
      value: node.value as string | number,
    }
  }
  return {
    offset: Number(value.offset),
    limit: Number(value.limit),
    search: value.search.trim(),
    sort: structuredClone(value.sort) as Query['sort'],
    filter: value.filter === null ? null : filter(value.filter),
  }
}
export function validatePage(value: unknown, query: Query): Page {
  if (
    !exactKeys(value, ['rows', 'total']) ||
    !Number.isSafeInteger(value.total) ||
    Number(value.total) < 0 ||
    !Array.isArray(value.rows) ||
    value.rows.length > query.limit ||
    value.rows.length > Number(value.total)
  )
    throw new Error('Invalid page response')
  const ids = new Set<string>()
  for (const row of value.rows) {
    if (
      !exactKeys(row, columns) ||
      typeof row.id !== 'string' ||
      !row.id ||
      ids.has(row.id) ||
      typeof row.customer !== 'string' ||
      !isStatus(row.status) ||
      !isUtc(row.createdAt) ||
      !(
        row.totalCents === null ||
        (typeof row.totalCents === 'number' &&
          Number.isSafeInteger(row.totalCents) &&
          row.totalCents >= 0)
      )
    )
      throw new Error('Invalid order response')
    ids.add(row.id)
  }
  return structuredClone(value) as Page
}
export function amountToCents(value: string): number | null {
  if (!value.trim()) return null
  if (!/^\d+(?:\.\d{1,2})?$/.test(value.trim()))
    throw new Error('Enter a nonnegative amount with up to two decimal places.')
  const [whole, fraction = ''] = value.trim().split('.')
  const n = Number(whole) * 100 + Number(fraction.padEnd(2, '0'))
  if (!Number.isSafeInteger(n)) throw new Error('Amount is too large.')
  return n
}
