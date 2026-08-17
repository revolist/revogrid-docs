import type { CellTemplate, ColumnRegular } from '@revolist/revogrid'
import {
  AdvanceFilterPlugin,
  DATA_GRID_BUILT_IN_ADVANCED_FORMATS,
  DataGridContextMenuPlugin,
  DataGridFormattingPlugin,
  FIlTER_SELECTION,
  FIlTER_SLIDER,
  FilterHeaderPlugin,
  formatDataGridValue,
  heatmapRenderer,
  type DataGridFormattingConfig,
} from '@revolist/revogrid-pro'
import { customerRows, ownerOptions, statusOptions } from '../../shared/customerData'
import { ownerColumn, statusColumn } from '../../shared/columns'
import { defineCapabilityExample } from '../../shared/defineExample'
import { createFilterConfig } from '../../shared/filterConfig'
import { heatmapOptions } from '../../shared/presentation'
import type { CustomerRow } from '../../types'

const controlRows: CustomerRow[] = customerRows.map(row => ({
  ...row,
  growth: row.growth / 100,
}))

const controlHeatmapOptions = {
  ...heatmapOptions,
  minValue: heatmapOptions.minValue / 100,
  midValue: heatmapOptions.midValue / 100,
  maxValue: heatmapOptions.maxValue / 100,
}

const growthPercentFormat = { preset: 'percent', decimalPlaces: 1 } as const
const builtInHeatmap = DATA_GRID_BUILT_IN_ADVANCED_FORMATS.find(({ id }) => id === 'heatmap')!
const percentageHeatmapRenderer: CellTemplate = (h, props, additionalData) => heatmapRenderer!(
  ((tag, data) => h(tag, data, formatDataGridValue(props.value, growthPercentFormat))) as typeof h,
  props,
  additionalData,
)

export const controlColumns: ColumnRegular[] = [
  { name: 'Customer', prop: 'company', size: 164, sortable: true, filter: 'string' },
  { ...ownerColumn, size: 156, columnType: 'ownerSelect', source: ownerOptions, labelKey: 'owner', valueKey: 'owner', filter: [FIlTER_SELECTION] },
  { name: 'Growth %', prop: 'growth', size: 112, sortable: true, order: 'desc', columnType: 'growthNumber', filter: ['number', FIlTER_SLIDER] },
  { ...statusColumn, size: 116, columnType: 'select', source: statusOptions, filter: [FIlTER_SELECTION] },
]

const formattingConfig: DataGridFormattingConfig<CustomerRow> = {
  rowKeyProp: 'id',
  columns: [
    {
      prop: 'growth',
      format: {
        value: growthPercentFormat,
        presentation: { id: 'heatmap', options: controlHeatmapOptions },
      },
    },
  ],
}

export const controlExample = defineCapabilityExample({
  id: 'control',
  code: `const columns = [
  { prop: 'owner', columnType: 'select', filter: 'selection' },
  { prop: 'health', columnType: 'select', filter: 'selection' },
  { prop: 'growth', order: 'desc', filter: ['number', 'slider'] }
]

const formatting = { columns: [{ prop: 'growth',
  format: { value: { preset: 'percent' } } }] }

<RevoGrid source={rows} columns={columns} filter
  dataGridFormatting={formatting} canMoveColumns />`,
  source: controlRows,
  columns: controlColumns,
  plugins: [AdvanceFilterPlugin, FilterHeaderPlugin, DataGridContextMenuPlugin, DataGridFormattingPlugin],
  filter: createFilterConfig({ applyGrowthFilter: true, syncCellTemplate: true }),
  formatting: formattingConfig,
  contextMenu: {
    formatting: {
      advancedFormats: {
        customFormats: [{ ...builtInHeatmap, cellTemplate: percentageHeatmapRenderer }],
      },
    },
  },
  canMoveColumns: true,
  rowSize: 32,
  height: 224,
  theme: (isDark) => isDark ? 'darkCompact' : 'compact',
  syncFilterColumns: true,
})
