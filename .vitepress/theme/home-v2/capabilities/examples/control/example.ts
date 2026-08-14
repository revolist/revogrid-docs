import type { ColumnRegular } from '@revolist/revogrid'
import { customerRows, ownerOptions, statusOptions } from '../../shared/customerData'
import { ownerColumn } from '../../shared/columns'
import { defineCapabilityExample } from '../../shared/defineExample'

export const controlColumns: ColumnRegular[] = [
  { name: 'Customer', prop: 'company', size: 164, sortable: true },
  { ...ownerColumn, size: 156, columnType: 'ownerSelect', source: ownerOptions, labelKey: 'owner', valueKey: 'owner' },
  { name: 'Growth %', prop: 'growth', size: 112, sortable: true, order: 'desc', columnType: 'growthNumber' },
  { name: 'Status', prop: 'health', size: 116, sortable: true, columnType: 'select', source: statusOptions },
]

export const controlExample = defineCapabilityExample({
  id: 'control',
  code: [
    { text: 'const columns = [' },
    { text: "  { prop: 'owner', columnType: 'select' },", accent: true },
    { text: "  { prop: 'health', name: 'Status', columnType: 'select' },", accent: true },
    { text: "  { prop: 'growth', columnType: 'number', order: 'desc' }", accent: true },
    { text: ']' },
    { text: '<RevoGrid source={rows} columns={columns} canMoveColumns />', accent: true },
  ],
  source: customerRows,
  columns: controlColumns,
  canMoveColumns: true,
  rowSize: 32,
  height: 224,
  theme: (isDark) => isDark ? 'darkCompact' : 'compact',
})
