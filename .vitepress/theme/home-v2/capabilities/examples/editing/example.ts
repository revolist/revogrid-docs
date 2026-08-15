import type { ColumnRegular } from '@revolist/revogrid'
import {
  DataGridFormattingPlugin,
  EventManagerPlugin,
  FormulaPlugin,
  HistoryPlugin,
  MultiRangeSelectionPlugin,
} from '@revolist/revogrid-pro'
import { defineCapabilityExample } from '../../shared/defineExample'
import { spreadsheetRows } from './data'
import { spreadsheetFormatting } from './formatting'

export const editingColumns: ColumnRegular[] = [
  { name: 'Item', prop: 'item', size: 176 },
  { name: 'Region', prop: 'region', size: 112 },
  { name: 'Units', prop: 'units', size: 92 },
  { name: 'Formula', prop: 'formula', size: 124 },
]

export const editingExample = defineCapabilityExample({
  id: 'editing',
  code: [
    { text: 'const plugins = [' },
    { text: '  EventManagerPlugin, FormulaPlugin, HistoryPlugin,', accent: true },
    { text: '  MultiRangeSelectionPlugin, DataGridFormattingPlugin', accent: true },
    { text: ']' },
    { text: "rows[0].formula = '=C1*124'", accent: true },
    { text: "const formatting = { rowKeyProp: 'id', cells: [", accent: true },
    { text: "  { rowKey: 'SHEET-00002', prop: 'item',", accent: true },
    { text: "    format: { appearance: { fillColor: '#fef3c7' } } }", accent: true },
    { text: '] }', accent: true },
    { text: '<RevoGrid source={rows} columns={columns}', accent: true },
    { text: '  plugins={plugins} dataGridFormatting={formatting}', accent: true },
    { text: '  dataGridContextMenu={{}} />', accent: true },
  ],
  source: spreadsheetRows,
  columns: editingColumns,
  plugins: [EventManagerPlugin, FormulaPlugin, HistoryPlugin, MultiRangeSelectionPlugin, DataGridFormattingPlugin],
  eventManager: { applyEventsToSource: true },
  formatting: spreadsheetFormatting,
  contextMenu: {},
  rowSize: 32,
  height: 224,
  surface: 'spreadsheet',
  theme: () => 'default',
})
