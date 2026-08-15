import type { ColumnRegular } from '@revolist/revogrid'
import {
  AdvanceFilterPlugin,
  DataGridContextMenuPlugin,
  FIlTER_SELECTION,
  FIlTER_SLIDER,
  FilterHeaderPlugin,
  type DataGridFormattingConfig,
} from '@revolist/revogrid-pro'
import { customerRows } from '../../shared/customerData'
import { ownerColumn } from '../../shared/columns'
import { defineCapabilityExample } from '../../shared/defineExample'
import { createFilterConfig } from '../../shared/filterConfig'
import { heatmapOptions, statusBadgeStyles } from '../../shared/presentation'
import type { CustomerRow } from '../../types'

export const filteringColumns: ColumnRegular[] = [
  { name: 'Customer', prop: 'company', size: 166, sortable: true, filter: 'string' },
  { ...ownerColumn, size: 150, filter: [FIlTER_SELECTION] },
  { name: 'Growth %', prop: 'growth', size: 112, sortable: true, filter: ['number', FIlTER_SLIDER] },
  { name: 'Status', prop: 'health', size: 114, sortable: true, filter: [FIlTER_SELECTION] },
]

const formattingConfig: DataGridFormattingConfig<CustomerRow> = {
  rowKeyProp: 'id',
  columns: [
    {
      prop: 'growth',
      format: {
        presentation: { id: 'heatmap', options: heatmapOptions },
      },
    },
    {
      prop: 'health',
      format: {
        presentation: { id: 'badge', options: { badgeStyles: statusBadgeStyles } },
      },
    },
  ],
}

export const filteringExample = defineCapabilityExample({
  id: 'filtering',
  code: [
    { text: 'const columns = [' },
    { text: "  { prop: 'owner', filter: 'selection' },", accent: true },
    { text: "  { prop: 'growth', filter: ['number', 'slider'] }", accent: true },
    { text: ']' },
    { text: '<RevoGrid source={rows} columns={columns} filter />', accent: true },
  ],
  source: customerRows,
  columns: filteringColumns,
  plugins: [AdvanceFilterPlugin, FilterHeaderPlugin, DataGridContextMenuPlugin],
  filter: createFilterConfig(true),
  formatting: formattingConfig,
  contextMenu: {},
  rowSize: 40,
  height: 304,
  theme: (isDark) => isDark ? 'darkMaterial' : 'material',
  syncFilterColumns: true,
})
