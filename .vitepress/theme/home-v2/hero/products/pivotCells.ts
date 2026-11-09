import type { ColumnRegular } from '@revolist/revogrid'
import { renderBadgeValue, renderProgressLineValue } from '@revolist/ui/cell-visuals'

type CellRenderer = NonNullable<ColumnRegular['cellTemplate']>
const budgetFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

function numericValue(value: unknown): number | undefined {
  if (value == null || value === '') return undefined
  const number = Number(value)
  return Number.isFinite(number) ? number : undefined
}

/** Each amount remains currency; the decorative bar shows its visible-portfolio share. */
export function createPivotBudgetRenderer(total: number): CellRenderer {
  const maximum = Number.isFinite(total) && total > 0 ? total : 1
  return (h, { value }) => {
    const amount = numericValue(value)
    if (amount === undefined) return String(value ?? '')
    return renderProgressLineValue(h, {
      percent: Math.max(0, Math.min(100, (amount / maximum) * 100)),
      label: budgetFormat.format(amount),
    })
  }
}

export function pivotProgressPresentation(value: unknown) {
  const percent = numericValue(value)
  if (percent === undefined) return undefined
  const color =
    percent >= 85 ? '#059669' : percent >= 65 ? '#6647f0' : percent >= 35 ? '#d97706' : '#e11d48'
  return { label: `${Math.round(percent)}%`, color }
}

export const pivotProgressRenderer: CellRenderer = (h, { value }) => {
  const presentation = pivotProgressPresentation(value)
  if (!presentation) return String(value ?? '')
  return renderBadgeValue(h, {
    value: presentation.label,
    backgroundColor: `color-mix(in srgb, ${presentation.color} 14%, transparent)`,
    color: `color-mix(in srgb, ${presentation.color} 75%, var(--rg-text))`,
  })
}
