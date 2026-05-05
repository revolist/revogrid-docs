<template>
  <section id="demo" class="demo-section">
    <div class="demo-inner">
      <div class="demo-head">
        <div class="section-label centered">Interactive Demo</div>
        <h2>Pivot. Group. Aggregate. <span>Instantly.</span></h2>
        <p>Switch aggregation mode - all cells recalculate in real time, client-side. Hover rows to inspect.</p>
      </div>

      <div class="demo-frame">
        <div class="demo-bar">
          <div class="window-dots"><span class="red"></span><span class="yellow"></span><span class="green"></span></div>
          <span class="zone-label">Rows</span>
          <span class="field-tag blue">Region</span>
          <span class="field-tag blue">Product</span>
          <span class="zone-label">Columns</span>
          <span class="field-tag green">Quarter</span>
          <span class="zone-label">Values</span>
          <span class="field-tag amber">Revenue</span>
          <div class="agg-tabs">
            <button v-for="mode in AGG_MODES" :key="mode" type="button" :class="{ on: agg === mode }" @click="agg = mode">
              {{ mode.toUpperCase() }}
            </button>
          </div>
        </div>
        <div class="table-wrap">
          <ClientOnly>
            <RevoGrid
              class="demo-grid cell-border"
              hide-attribution
              readonly
              resize
              range
              :source="RAW"
              :pivot.prop="pivotConfig"
              :plugins="plugins"
              :column-types="columnTypes"
              :theme="'compact'"
            />
            <template #fallback>
              <div class="demo-grid-fallback">Loading pivot...</div>
            </template>
          </ClientOnly>
        </div>
        <div class="demo-foot">
          <span>Aggregating <strong>{{ RAW.length }} rows</strong> -> <strong>{{ agg.toUpperCase() }}</strong></span>
          <span class="powered">Powered by RevoGrid</span>
        </div>
      </div>
      <div class="demo-caption">Real-time client-side pivoting · RevoGrid Pro pivot plugin</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import NumberColumnType from '@revolist/revogrid-column-numeral'
import RevoGrid, { type GridPlugin } from '@revolist/vue3-datagrid'
import { AGG_MODES, RAW, REGIONS, type AggMode } from './pivotLandingData'
import { PivotPlugin, type PivotConfig } from '../../.vitepress/revogrid-enterprise-pivot-shim'
import { commonAggregators } from '../../.vitepress/revogrid-pro-shim'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'

const agg = ref<AggMode>('sum')
const plugins: GridPlugin[] = [PivotPlugin]

const columnTypes = {
  currency: new NumberColumnType('$0,0.0a'),
  integer: new NumberColumnType('0,0'),
}

const pivotConfig = computed(() => ({
  dimensions: [
    { prop: 'region', name: 'Region', sortable: true },
    { prop: 'product', name: 'Product', sortable: true },
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
    grandTotalLabel: 'Grand Total',
  },
} satisfies PivotConfig))
</script>
