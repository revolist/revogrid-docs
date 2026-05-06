<template>
  <div class="mock-window">
    <div class="mock-titlebar">
      <div class="window-dots"><span class="red"></span><span class="yellow"></span><span class="green"></span></div>
      <span class="mock-title">Sales Pivot · RevoGrid</span>
      <span class="live-pill">Live</span>
    </div>
    <div class="mock-fields">
      <span class="field-tag blue">Region</span>
      <span class="field-tag blue">Product</span>
      <span class="field-tag green">Quarter</span>
      <span class="field-tag amber">Revenue</span>
      <div class="agg-tabs mini">
        <button
          v-for="mode in AGG_MODES"
          :key="mode"
          type="button"
          :class="{ on: agg === mode }"
          @click="agg = mode"
        >
          {{ mode.toUpperCase() }}
        </button>
      </div>
    </div>
    <div class="table-wrap">
      <ClientOnly>
        <RevoGrid
          class="mock-grid cell-border"
          hide-attribution
          readonly
          resize
          range
          :can-focus="false"
          :source="RAW"
          :pivot.prop="pivotConfig"
          :hide-columns="['region']"
          :plugins="plugins"
          :column-types="columnTypes"
          :theme="gridTheme"
        />
        <template #fallback>
          <div class="mock-grid-fallback">Loading pivot...</div>
        </template>
      </ClientOnly>
    </div>
    <div class="mock-foot">
      <span>{{ RAW.length }} rows -> {{ agg.toUpperCase() }} aggregation</span>
      <span class="powered">Powered by RevoGrid</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import NumberColumnType from '@revolist/revogrid-column-numeral'
import RevoGrid, { type GridPlugin } from '@revolist/vue3-datagrid'
import { ColumnHidePlugin } from '@revolist/revogrid-pro'
import { AGG_MODES, RAW, REGIONS, type AggMode } from './pivotLandingData'
import { PivotPlugin, type PivotConfig } from '../../.vitepress/revogrid-enterprise-pivot-shim'
import { commonAggregators } from '../../.vitepress/revogrid-pro-shim'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'

const agg = ref<AggMode>('sum')
const plugins: GridPlugin[] = [PivotPlugin, ColumnHidePlugin]
const props = defineProps<{
  theme: 'light' | 'dark'
}>()
const gridTheme = computed(() => (props.theme === 'dark' ? 'darkCompact' : 'compact'))

const columnTypes = {
  currency: new NumberColumnType('$0,0.0a'),
  integer: new NumberColumnType('0,0'),
}

const pivotConfig = computed(() => ({
  dimensions: [
    { prop: 'region', name: 'Region', sortable: true },
    { prop: 'product', name: 'Product', sortable: true, size: 150 },
    { prop: 'quarter', name: 'Quarter', sortable: true },
    {
      prop: 'rev',
      name: 'Revenue',
      sortable: true,
      columnType: agg.value === 'count' ? 'integer' : 'currency',
      aggregators: {
        sum: commonAggregators.sum,
        avg: commonAggregators.avg,
        count: commonAggregators.count,
      },
    },
  ],
  rows: ['region', 'product'],
  columns: ['quarter'],
  values: [{ prop: 'rev', aggregator: agg.value }],
  collapsed: true,
  expanded: Object.fromEntries(REGIONS.map((region) => [region, true])),
  groupAggregations: true,
  groupLabelColumn: 'firstVisible',
  mergeValueHeaders: true,
  totals: {
    subtotals: false,
    grandTotal: true,
    subtotalLabel: 'Subtotal',
    grandTotalLabel: 'Grand Total',
  },
} satisfies PivotConfig))
</script>
