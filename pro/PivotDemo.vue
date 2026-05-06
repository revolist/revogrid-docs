<template>
  <div class="pivot-demo-wrap">
    <div class="pd-toolbar">
      <span class="pd-traffic traffic-red"></span>
      <span class="pd-traffic traffic-yellow"></span>
      <span class="pd-traffic traffic-green"></span>
      <span class="pd-title">pivot-analytics.revogrid.ts</span>
    </div>

    <div class="pivot-layout">
      <div class="pivot-grid-wrap">
        <ClientOnly>
          <RevoGrid
            class="pivot-grid cell-border"
            hide-attribution
            range
            resize
            filter
            readonly
            :col-size="132"
            :source="pivotRows"
            :pivot.prop="pivotConfig"
            :theme="isDark ? 'darkMaterial' : 'material'"
            :plugins="plugins"
            :column-types="columnTypes"
          />
          <template #fallback>
            <div class="pivot-grid-fallback">Loading pivot grid...</div>
          </template>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import NumberColumnType from '@revolist/revogrid-column-numeral'
import RevoGrid, { type DataType, type GridPlugin } from '@revolist/vue3-datagrid'
import { PivotPlugin, type PivotConfig } from '../.vitepress/revogrid-enterprise-pivot-shim'
import { AdvanceFilterPlugin, RowOddPlugin, commonAggregators } from '../.vitepress/revogrid-pro-shim'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'

const { isDark } = useData()

const plugins: GridPlugin[] = [PivotPlugin, AdvanceFilterPlugin, RowOddPlugin]
const columnTypes = ref({
  currency: new NumberColumnType('$0,0.00'),
  decimal: new NumberColumnType('0.00'),
})

const pivotRows = ref<DataType[]>([
  { City: 'Chicago', 'Membership Type': 'Bronze', 'Discount Applied': true, 'Total Spend': 507.83, 'Average Rating': 3.5 },
  { City: 'Houston', 'Membership Type': 'Bronze', 'Discount Applied': false, 'Total Spend': 440.7, 'Average Rating': 3.17 },
  { City: 'Los Angeles', 'Membership Type': 'Silver', 'Discount Applied': false, 'Total Spend': 0, 'Average Rating': undefined },
  { City: 'Miami', 'Membership Type': 'Silver', 'Discount Applied': true, 'Total Spend': 695.6, 'Average Rating': 3.8 },
  { City: 'New York', 'Membership Type': 'Gold', 'Discount Applied': true, 'Total Spend': 1160.58, 'Average Rating': 4.42 },
  { City: 'San Francisco', 'Membership Type': 'Gold', 'Discount Applied': false, 'Total Spend': 1457.17, 'Average Rating': 4.73 },
])

const pivotConfig = computed(() => ({
  dimensions: [
    { prop: 'City', sortable: true, filter: ['string', 'selection'] },
    { prop: 'Membership Type', sortable: true, filter: ['string', 'selection'] },
    { prop: 'Discount Applied', sortable: true, filter: ['selection'] },
    {
      prop: 'Total Spend',
      columnType: 'currency',
      sortable: true,
      aggregators: {
        sum: commonAggregators.sum,
        avg: commonAggregators.avg,
      },
      cellProperties: ({ value }) => ({
        class: {
          'pivot-heat-high': Number(value) >= 1000,
          'pivot-heat-mid': Number(value) >= 600 && Number(value) < 1000,
          'pivot-heat-low': Number(value) > 0 && Number(value) < 600,
        },
      }),
    },
    {
      name: 'Average Rating',
      prop: 'Average Rating',
      columnType: 'decimal',
      sortable: true,
      aggregators: {
        avg: commonAggregators.avg,
      },
      cellProperties: ({ value }) => ({
        class: {
          'pivot-heat-high': Number(value) >= 4.2,
          'pivot-heat-mid': Number(value) >= 3.5 && Number(value) < 4.2,
          'pivot-heat-low': Number(value) > 0 && Number(value) < 3.5,
        },
      }),
    },
  ],
  rows: ['City', 'Membership Type'],
  columns: ['Discount Applied'],
  values: [
    { prop: 'Total Spend', aggregator: 'sum' },
    { prop: 'Total Spend', aggregator: 'avg' },
    { prop: 'Average Rating', aggregator: 'avg' },
  ],
  filters: ['Membership Type'],
  totals: {
    subtotals: true,
    grandTotal: true,
    subtotalLabel: 'Subtotal',
    grandTotalLabel: 'Grand Total',
  },
} satisfies PivotConfig))
</script>

<style lang="scss" scoped>
.pivot-demo-wrap {
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  box-shadow: var(--pro-doc-shadow-lg);

  &::before {
    content: '';
    display: block;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, var(--pivot-accent) 35%, var(--pivot-accent-vivid) 65%, transparent 100%);
  }
}

.pd-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  min-height: 42px;
  padding: 9px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.pd-traffic {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex: 0 0 auto;
}

.traffic-red { background: #ff5f57; }
.traffic-yellow { background: #febc2e; }
.traffic-green { background: #28c840; }

.pd-title {
  flex: 1 1 auto;
  min-width: 0;
  margin-left: 4px;
  overflow: hidden;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pivot-layout {
  display: flex;
  background: var(--vp-c-bg);
}

.pivot-grid-wrap {
  overflow: auto;
  min-width: 0;
  height: clamp(520px, 58vh, 640px);
  background: var(--vp-c-bg);
}

.pivot-grid {
  display: block;
  width: 100%;
  min-width: 0;
  height: 100%;
  --revo-grid-border-color: var(--vp-c-divider);
}

.pivot-grid-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: clamp(520px, 58vh, 640px);
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
}

:global(.pivot-grid .pivot-heat-high) {
  background: #dcfce7 !important;
  color: #14532d !important;
}

:global(.pivot-grid .pivot-heat-mid) {
  background: #fef9c3 !important;
  color: #713f12 !important;
}

:global(.pivot-grid .pivot-heat-low) {
  background: #fce7f3 !important;
  color: #831843 !important;
}

:global(.dark .pivot-grid .pivot-heat-high) {
  background: rgba(20, 83, 45, 0.42) !important;
  color: #86efac !important;
}

:global(.dark .pivot-grid .pivot-heat-mid) {
  background: rgba(113, 63, 18, 0.42) !important;
  color: #fde68a !important;
}

:global(.dark .pivot-grid .pivot-heat-low) {
  background: rgba(131, 24, 67, 0.42) !important;
  color: #fbcfe8 !important;
}

@media (max-width: 620px) {
  .pivot-grid-wrap,
  .pivot-grid-fallback {
    height: 480px;
  }
}
</style>
