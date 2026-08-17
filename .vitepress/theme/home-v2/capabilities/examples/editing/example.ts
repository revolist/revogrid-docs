import type { ColumnRegular } from '@revolist/revogrid'
import {
  DataGridFormattingPlugin,
  FormulaPlugin,
  HistoryPlugin,
  MultiRangeSelectionPlugin,
} from '@revolist/revogrid-pro'
import { defineCapabilityExample } from '../../shared/defineExample'
import { spreadsheetRows } from './data'
import { spreadsheetFormatting } from './formatting'

export const editingColumns: ColumnRegular[] = [
  { name: 'A', prop: 'item', size: 176 },
  { name: 'B', prop: 'region', size: 112 },
  { name: 'C', prop: 'units', size: 92 },
  {
    name: 'D',
    prop: 'formula',
    size: 124,
    cellProperties: () => ({
      style: { fontWeight: '700', textAlign: 'right' },
    }),
  },
]

export const editingExample = defineCapabilityExample({
  id: 'editing',
  code: `const plugins = [
  FormulaPlugin, HistoryPlugin,
  MultiRangeSelectionPlugin, DataGridFormattingPlugin
]

rows[0].formula = '=C1*124'

const formatting = {
  rowKeyProp: 'id',
  columns: [
    {
      prop: 'units',
      format: {
        value: { preset: 'number' },
        appearance: { horizontal: 'right' }
      }
    }
  ],
  cells: [
    {
      rowKey: 'SHEET-00002',
      prop: 'item',
      format: {
        appearance: { fillColor: '#fef3c7' }
      }
    }
  ]
}

<RevoGrid source={rows} columns={columns}
  plugins={plugins}
  dataGridFormatting={formatting}
  dataGridContextMenu={{}}
  rowHeaders
/>`,
  source: spreadsheetRows,
  columns: editingColumns,
  plugins: [
    FormulaPlugin,
    HistoryPlugin,
    MultiRangeSelectionPlugin,
    DataGridFormattingPlugin,
  ],
  eventManager: { applyEventsToSource: true },
  formatting: spreadsheetFormatting,
  contextMenu: {},
  rowHeaders: true,
  rowSize: 32,
  height: 224,
  surface: 'spreadsheet',
  theme: () => 'default',
})
