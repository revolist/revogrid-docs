import type { DataGridFormattingPresetState } from '@revolist/revogrid-pro'

export const spreadsheetFormatting: DataGridFormattingPresetState = {
  rowKeyProp: 'id',
  cells: [
    { rowKey: 'SHEET-00002', prop: 'item', format: { appearance: { fillColor: '#fef3c7' } } },
    { rowKey: 'SHEET-00006', prop: 'region', format: { appearance: { fillColor: '#ede9fe' } } },
    { rowKey: 'SHEET-00004', prop: 'units', format: { appearance: { fillColor: '#dcfce7' } } },
    { rowKey: 'SHEET-00003', prop: 'formula', format: { appearance: { fillColor: '#dbeafe' } } },
  ],
} satisfies DataGridFormattingPresetState
