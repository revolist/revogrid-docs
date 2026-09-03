import type { DataGridFormattingPresetState } from '@revolist/revogrid-pro'

export const budgetValueFormat = {
  kind: 'preset',
  preset: 'currency',
  currency: 'USD',
  decimalPlaces: 0,
} as const

export const projectFormattingConfig: DataGridFormattingPresetState = {
  columns: [
    {
      column: 2,
      format: {
        presentation: { id: 'progress-line', options: { minValue: 0, maxValue: 100 } },
      },
    },
    {
      column: 3,
      format: {
        value: budgetValueFormat,
      },
    },
  ],
  cells: [
    { range: { start: { row: 0, column: 0 } }, format: { appearance: { bold: true } } },
    { range: { start: { row: 1, column: 0 } }, format: { appearance: { italic: true } } },
    { range: { start: { row: 2, column: 0 } }, format: { appearance: { bold: true, underline: true } } },
    { range: { start: { row: 3, column: 0 } }, format: { appearance: { strike: true, textColor: '#64748b' } } },
    { range: { start: { row: 4, column: 0 } }, format: { appearance: { bold: true, italic: true } } },

    { range: { start: { row: 0, column: 2 } }, format: { presentation: { id: 'progress-line', options: { minValue: 0, maxValue: 100 } } } },
    { range: { start: { row: 1, column: 2 } }, format: { presentation: { id: 'circular-progress', options: { minValue: 0, maxValue: 100, showValue: true } } } },
    { range: { start: { row: 2, column: 2 } }, format: { presentation: { id: 'rating', options: { maxStars: 5 } } } },
    { range: { start: { row: 3, column: 2 } }, format: { presentation: { id: 'change' } } },
    { range: { start: { row: 4, column: 2 } }, format: { presentation: { id: 'progress-line-value', options: { minValue: 0, maxValue: 100 } } } },

    { range: { start: { row: 0, column: 3 } }, format: { value: budgetValueFormat, appearance: { textColor: '#2563eb' } } },
    { range: { start: { row: 1, column: 3 } }, format: { value: budgetValueFormat, appearance: { textColor: '#059669' } } },
    { range: { start: { row: 2, column: 3 } }, format: { value: budgetValueFormat, appearance: { bold: true, textColor: '#dc2626' } } },
    { range: { start: { row: 3, column: 3 } }, format: { value: budgetValueFormat, appearance: { textColor: '#d97706' } } },
    { range: { start: { row: 4, column: 3 } }, format: { value: budgetValueFormat, appearance: { textColor: '#7c3aed' } } },
  ],
}
