import type { DataGridFormattingPresetState } from '@revolist/revogrid-pro'
const unitsNumberFormat = {
  value: { preset: 'number' },
  appearance: { horizontal: 'right' },
} as const

export const spreadsheetFormatting: DataGridFormattingPresetState = {
  rowKeyProp: 'id',
  columns: [
    { prop: 'units', format: unitsNumberFormat },
  ],
  cells: [
    {
      rowKey: 'SHEET-00004',
      prop: 'units',
      format: {
        ...unitsNumberFormat,
        appearance: { horizontal: 'right', fillColor: '#dcfce7' },
      },
    },
    { rowKey: 'SHEET-00002', prop: 'item', format: { appearance: { fillColor: '#fef3c7' } } },
    { rowKey: 'SHEET-00006', prop: 'region', format: { appearance: { fillColor: '#ede9fe' } } },
    { rowKey: 'SHEET-00003', prop: 'formula', format: { appearance: { fillColor: '#dbeafe' } } },
  ],
} satisfies DataGridFormattingPresetState
