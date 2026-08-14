import type { ColumnRegular } from '@revolist/revogrid'
import {
  DataGridFormattingPlugin,
  progressLineRenderer,
} from '@revolist/revogrid-pro'
import { ownerColumn } from '../../shared/columns'
import { defineCapabilityExample } from '../../shared/defineExample'
import { formattingRows } from './data'
import { projectFormattingConfig } from './formatting'

export const formattingColumns: ColumnRegular[] = [
  { name: 'Project', prop: 'project', size: 176, sortable: true, order: 'asc' },
  { ...ownerColumn, size: 146 },
  { name: 'Progress', prop: 'progress', size: 126, sortable: true, columnType: 'progressNumber', minValue: 0, maxValue: 100, cellTemplate: progressLineRenderer },
  { name: 'Budget', prop: 'budget', size: 104, sortable: true, columnType: 'budgetCurrency' },
]

export const formattingExample = defineCapabilityExample({
  id: 'formatting',
  code: [
    { text: 'const formatting = {' },
    { text: "  progress: { presentation: 'progress-line' },", accent: true },
    { text: "  budget: { preset: 'currency', currency: 'USD' }", accent: true },
    { text: '}' },
    { text: '<RevoGrid source={projects} columns={columns}', accent: true },
    { text: '  dataGridFormatting={formatting} />', accent: true },
  ],
  source: formattingRows,
  columns: formattingColumns,
  plugins: [DataGridFormattingPlugin],
  formatting: projectFormattingConfig,
  contextMenu: {},
  rowSize: 40,
  height: 272,
  theme: (isDark) => isDark ? 'darkMaterial' : 'material',
})
