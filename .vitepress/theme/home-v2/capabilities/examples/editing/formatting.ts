import type { DataGridFormattingPresetState } from '@revolist/revogrid-pro'
const unitsNumberFormat = {
  value: { kind: 'preset', preset: 'number' },
  appearance: { horizontal: 'right' },
} as const

export const spreadsheetFormatting: DataGridFormattingPresetState = {
  columns: [
    { column: 2, format: unitsNumberFormat },
  ],
  cells: [
    {
      range: { start: { row: 3, column: 2 } },
      format: {
        ...unitsNumberFormat,
        appearance: { horizontal: 'right', fillColor: '#dcfce7' },
      },
    },
    { range: { start: { row: 1, column: 0 } }, format: { appearance: { fillColor: '#fef3c7' } } },
    { range: { start: { row: 5, column: 1 } }, format: { appearance: { fillColor: '#ede9fe' } } },
    { range: { start: { row: 2, column: 3 } }, format: { appearance: { fillColor: '#dbeafe' } } },
  ],
} satisfies DataGridFormattingPresetState
