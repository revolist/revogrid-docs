export type OrderStatus = 'draft' | 'confirmed' | 'shipped'
export type OrderLine = {
  id: string
  sku: string
  quantity: number
  unitPriceCents: number
  status: OrderStatus
  version: number
}
export const fields = ['sku', 'quantity', 'unitPriceCents', 'status'] as const
export type Field = (typeof fields)[number]
export type Editable = Pick<OrderLine, Field>
export type DraftRow = { id: string; version: number } & Record<Field, string>
export type SaveRequest = { expectedVersion: number; changes: Editable }
export type FieldErrors = Partial<Record<Field, string>>

export const messages = {
  heading: 'Order line editor',
  save: 'Save row',
  cancel: 'Cancel changes',
  reset: 'Reset example',
  clean: 'No unsaved changes',
  dirty: 'Unsaved changes',
  finish: 'Finish the cell edit with Enter or Escape.',
  invalid: 'Fix the highlighted fields before saving.',
  failed: 'Could not confirm the save for {id}. Your draft is preserved.',
  saved: 'Saved {id}. Version {version}.',
  sku: 'Use 1–32 letters, numbers, dots, underscores, or hyphens; start with a letter or number.',
  quantity: 'Quantity must be a whole number from 1 to 9,999.',
  unitPriceCents: 'Enter a whole number of USD cents from 0 to 99,999,999.',
  status: 'Choose draft, confirmed, or shipped.',
}
export type Messages = typeof messages
export function format(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? key))
}
export const toDraft = (row: OrderLine): DraftRow => ({
  ...row,
  quantity: String(row.quantity),
  unitPriceCents: String(row.unitPriceCents),
})
export function parseBoundedInteger(raw: string, minimum: number, maximum: number): number | null {
  const text = raw.trim()
  if (!/^\d+$/.test(text)) return null
  const value = Number(text)
  return Number.isSafeInteger(value) && value >= minimum && value <= maximum ? value : null
}
export function validateDraft(
  row: DraftRow,
  text: Messages = messages,
): { changes?: Editable; errors: FieldErrors } {
  const errors: FieldErrors = {}
  const sku = row.sku.trim().toUpperCase()
  if (!/^[A-Z0-9][A-Z0-9._-]{0,31}$/.test(sku)) errors.sku = text.sku
  const integer = (field: 'quantity' | 'unitPriceCents', min: number, max: number) => {
    const n = parseBoundedInteger(row[field], min, max)
    if (n === null) errors[field] = text[field]
    return n ?? 0
  }
  const quantity = integer('quantity', 1, 9999)
  const unitPriceCents = integer('unitPriceCents', 0, 99999999)
  if (!['draft', 'confirmed', 'shipped'].includes(row.status)) errors.status = text.status
  return {
    errors,
    ...(Object.keys(errors).length
      ? {}
      : { changes: { sku, quantity, unitPriceCents, status: row.status as OrderStatus } }),
  }
}
export function isDirty(draft: DraftRow, baseline: OrderLine) {
  const { changes } = validateDraft(draft)
  return !changes || fields.some(field => changes[field] !== baseline[field])
}
export function reapply(draft: DraftRow, original: OrderLine, latest: OrderLine): DraftRow {
  const changes = validateDraft(draft).changes
  if (!changes) throw new Error('Review invalid fields before reapplying.')
  const next = toDraft(latest)
  for (const field of fields)
    if (changes[field] !== original[field]) next[field] = String(changes[field])
  return next
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
export function isOrder(value: unknown): value is OrderLine {
  if (!exactKeys(value, ['id', 'version', ...fields])) return false
  return (
    typeof value.id === 'string' &&
    Number.isSafeInteger(value.version) &&
    Number(value.version) > 0 &&
    typeof value.quantity === 'number' &&
    typeof value.unitPriceCents === 'number' &&
    typeof value.sku === 'string' &&
    typeof value.status === 'string' &&
    !!validateDraft(toDraft(value as OrderLine)).changes
  )
}
