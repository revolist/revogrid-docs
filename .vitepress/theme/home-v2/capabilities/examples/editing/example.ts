import type { ColumnRegular } from '@revolist/revogrid'
import { defineCapabilityExample } from '../../shared/defineExample'
import { spreadsheetRows } from './data'

export const editingColumns: ColumnRegular[] = [
  { name: 'Item', prop: 'item', size: 176, cellProperties: ({ model }) => model.id === 'SHEET-00002' ? { style: { backgroundColor: '#fef3c7' } } : undefined },
  { name: 'Region', prop: 'region', size: 112, cellProperties: ({ model }) => model.id === 'SHEET-00006' ? { style: { backgroundColor: '#ede9fe' } } : undefined },
  { name: 'Units', prop: 'units', size: 92, cellProperties: ({ model }) => model.id === 'SHEET-00004' ? { style: { backgroundColor: '#dcfce7' } } : undefined },
  { name: 'Revenue', prop: 'revenue', size: 124, cellProperties: ({ model }) => model.id === 'SHEET-00003' ? { style: { backgroundColor: '#dbeafe' } } : undefined },
]

export const editingExample = defineCapabilityExample({
  id: 'editing',
  code: [
    { text: '<RevoGrid' },
    { text: '  source={rows} columns={columns}', accent: true },
    { text: '  range resize rowHeaders', accent: true },
    { text: '/>' },
  ],
  source: spreadsheetRows,
  columns: editingColumns,
  rowHeaders: true,
  rowSize: 32,
  height: 224,
  surface: 'spreadsheet',
  theme: () => 'default',
})
