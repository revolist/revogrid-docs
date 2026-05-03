<template>
  <div class="pivot-page">
    <section class="pivot-hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <div class="eyebrow fade-up">
            <span class="eyebrow-dot"></span>
            RevoGrid Pro / Pivot
          </div>
          <h1 class="hero-title fade-up-2">
            <span>Multidimensional</span><br />
            analytics, embedded.
          </h1>
          <p class="hero-sub fade-up-3">
            Drag-and-drop pivot tables for web apps. Slice any dataset by rows,
            columns, aggregations, and filters without leaving the page.
          </p>
          <div class="hero-actions fade-up-4">
            <ProDocButton href="/demo/pivot" arrow>Try live demo</ProDocButton>
            <ProDocButton href="https://pro.rv-grid.com/guides/pivot/" variant="secondary" target="_blank" rel="noopener">
              Read docs
            </ProDocButton>
          </div>
          <div class="hero-badges fade-up-4">
            <span v-for="badge in HERO_BADGES" :key="badge">{{ badge }}</span>
          </div>
        </div>

        <div class="fade-up-3">
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
                    :theme="isDark ? 'darkCompact' : 'compact'"
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
        </div>
      </div>
    </section>

    <ProStatsBar :items="STATS" aria-label="Pivot product stats" />

    <section id="features" class="features-section">
      <div class="container">
        <div class="section-head">
          <div class="section-tag">Features</div>
          <h2 class="section-title">Everything a production<br />pivot table needs.</h2>
          <p class="section-sub">
            Not a summary view bolted on top. A full-featured pivot engine built
            on RevoGrid's high-performance rendering core.
          </p>
        </div>

        <ProFeatureGrid :features="FEATURES" />
      </div>
    </section>

    <section id="usecases" class="usecases-section">
      <div class="container">
        <div class="section-tag">Use Cases</div>
        <h2 class="section-title">What teams build with it.</h2>
        <p class="section-sub">
          RevoGrid Pivot ships inside BI dashboards, analytics products,
          financial reporting tools, and data-heavy internal apps.
        </p>

        <div class="usecase-grid">
          <article v-for="useCase in USE_CASES" :key="useCase.number" class="usecase-card">
            <div class="usecase-num">{{ useCase.number }}</div>
            <h3 class="usecase-title">{{ useCase.title }}</h3>
            <p class="usecase-desc">{{ useCase.description }}</p>
            <div class="usecase-features">
              <div v-for="feature in useCase.features" :key="feature" class="usecase-feature">
                <span class="usecase-dot"></span>
                <span>{{ feature }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <ProAdvancedCallout title="Pivot is part of the Pro Advanced bundle." />

    <ProCtaBanner
      title="Embed pivot analytics&#10;in your product."
      description="Client-side pivot tables for React, Vue, Angular, Svelte, and vanilla JS. Included in Pro Advanced."
      primary-href="/demo/pivot"
      primary-label="Try live demo"
      secondary-href="/pro/prices"
      secondary-label="View Pro pricing"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import NumberColumnType from '@revolist/revogrid-column-numeral'
import RevoGrid, { type DataType, type GridPlugin } from '@revolist/vue3-datagrid'
import { PivotPlugin, type PivotConfig } from './.vitepress/revogrid-enterprise-pivot-shim'
import { AdvanceFilterPlugin, RowOddPlugin, commonAggregators } from './.vitepress/revogrid-pro-shim'
import ProAdvancedCallout from './pro/ProAdvancedCallout.vue'
import ProCtaBanner from './pro/ProCtaBanner.vue'
import ProDocButton from './pro/ProDocButton.vue'
import ProFeatureGrid from './pro/ProFeatureGrid.vue'
import ProStatsBar from './pro/ProStatsBar.vue'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'

const { isDark } = useData()

const HERO_BADGES = [
  'Drag-and-drop dimensions',
  'Multi-level aggregation',
  'Heatmap cell rendering',
  'Client-side on 350K+ rows',
]

const STATS = [
  { value: '350K+', label: 'rows client-side' },
  { value: 'Any', label: 'dimension combination' },
  { value: '8', label: 'aggregation types' },
  { value: '0', label: 'server round-trips' },
]

const FEATURES = [
  {
    icon: 'DnD',
    title: 'Drag-and-Drop Dimensions',
    description: 'Move fields between Rows, Columns, Data, and Filters slots at runtime. The pivot table updates instantly.',
    tags: ['Drag fields', 'Runtime pivot', 'Zero reload'],
  },
  {
    icon: 'SUM',
    title: 'Multi-Level Aggregation',
    description: 'Sum, average, count, min/max, median, or bring your own aggregation function. Use multiple aggregations on the same field.',
    tags: ['SUM / AVG / CNT', 'Custom agg fn', 'Multi-agg'],
  },
  {
    icon: 'MAP',
    title: 'Heatmap Cell Rendering',
    description: 'Built-in value-based color coding with configurable thresholds and custom color scales for fast outlier detection.',
    tags: ['Heatmap cells', 'Color scales', 'Threshold config'],
  },
  {
    icon: 'ROW',
    title: 'Row & Column Grouping',
    description: 'Drag any dimension field to Rows or Columns. Subtotals and grand totals are computed automatically at every group level.',
    tags: ['Subtotals', 'Grand total', 'Nested groups'],
  },
  {
    icon: 'CPU',
    title: 'Client-Side at Scale',
    description: 'No server round-trip on pivot operations. Bind the pivot config directly and run aggregations against the grid source.',
    tags: ['350K rows', 'In-memory', 'PivotPlugin'],
    codeExample: 'pivot',
  },
  {
    icon: 'CSV',
    title: 'Export to Excel / CSV',
    description: 'Export pivot tables with headers, subtotals, and formatted values. Works with filtered or fully pivoted views.',
    tags: ['XLSX export', 'CSV export', 'Formatted values'],
  },
] as const

const USE_CASES = [
  {
    number: '01',
    title: 'Revenue Analytics',
    description: 'Slice revenue by segment, region, channel, and time period. Drill from quarterly to weekly with nested row grouping.',
    features: ['Revenue by segment and channel', 'Drill-down grouping', 'YoY comparison columns', 'SUM / percent change / growth agg'],
  },
  {
    number: '02',
    title: 'Customer Analytics',
    description: 'Pivot customer data by membership, spend, and behavioral metrics. Heatmap ratings across segments for instant insight.',
    features: ['Membership tier by city pivot', 'Avg rating heatmap', 'Spend distribution', 'Filter by discount applied'],
  },
  {
    number: '03',
    title: 'Financial Reporting',
    description: 'P&L, cost center analysis, and budget vs actuals in a live, filterable pivot table embedded in your app.',
    features: ['Budget vs actual', 'Cost center by department', 'Multi-currency aggregation', 'Export to Excel for finance teams'],
  },
]

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
  fieldPanel: {
    visible: false,
    allowFieldDragging: true,
    allowFieldRemoving: true,
    showDataFields: true,
    showRowFields: true,
    showColumnFields: true,
    showFilterFields: true,
  },
  totals: {
    subtotals: false,
    grandTotal: true,
    subtotalLabel: 'Subtotal',
    grandTotalLabel: 'Grand Total',
  },
} satisfies PivotConfig))
</script>

<style lang="scss" scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-up { animation: fadeUp 0.6s ease both; }
.fade-up-2 { animation: fadeUp 0.6s 0.08s ease both; }
.fade-up-3 { animation: fadeUp 0.6s 0.16s ease both; }
.fade-up-4 { animation: fadeUp 0.6s 0.24s ease both; }

:global(.pivot-page-doc .VPDoc) {
  padding-top: 0;
}

:global(.pivot-page-doc .vp-doc h1),
:global(.pivot-page-doc .vp-doc h2),
:global(.pivot-page-doc .vp-doc h3),
:global(.pivot-page-doc .vp-doc p) {
  margin: 0;
}

.pivot-page {
  --pivot-accent: #0f766e;
  --pivot-accent-mid: #0d9488;
  --pivot-accent-vivid: #10b981;
  --pivot-accent-soft: rgba(15, 118, 110, 0.09);
  --pivot-accent-border: rgba(15, 118, 110, 0.22);
  --pro-doc-accent: var(--pivot-accent);
  --pro-doc-accent-2: var(--pivot-accent-vivid);
  --pro-doc-soft: var(--pivot-accent-soft);
  --pro-doc-accent-border: var(--pivot-accent-border);
  --pivot-blue: #1d4ed8;
  --pivot-green: #047857;
  --pivot-orange: #b45309;
  --pivot-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  --pivot-shadow-lg: 0 18px 48px rgba(0, 0, 0, 0.1), 0 6px 18px rgba(0, 0, 0, 0.06);
  --pro-doc-shadow-sm: var(--pivot-shadow-sm);
  --pro-doc-shadow-lg: var(--pivot-shadow-lg);

  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}

:global(.dark) .pivot-page {
  --pivot-accent: oklch(0.72 0.18 185);
  --pivot-accent-mid: oklch(0.76 0.18 185);
  --pivot-accent-vivid: oklch(0.78 0.18 175);
  --pivot-accent-soft: oklch(0.72 0.18 185 / 0.14);
  --pivot-accent-border: oklch(0.72 0.18 185 / 0.28);
  --pivot-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.32);
  --pivot-shadow-lg: 0 26px 80px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.28);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

.pivot-hero {
  position: relative;
  padding: 112px 0 88px;
}

.pivot-hero .container {
  max-width: 1400px;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(400px, 0.85fr) minmax(720px, 1.65fr);
  gap: 36px;
  align-items: center;

  @media (max-width: 1160px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.hero-copy {
  min-width: 0;
}

.hero-inner > .fade-up-3 {
  min-width: 0;
}

.eyebrow,
.section-tag,
.section-kicker,
.callout-eyebrow {
  color: var(--pivot-accent);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 13px;
  margin-bottom: 22px;
  border: 1px solid var(--pivot-accent-border);
  border-radius: 999px;
  background: var(--pivot-accent-soft);
}

.eyebrow-dot,
.usecase-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--pivot-accent);
  flex: 0 0 auto;
}

.hero-title {
  max-width: 680px;
  color: var(--vp-c-text-1);
  font-size: clamp(40px, 5.2vw, 68px);
  font-weight: 760;
  letter-spacing: -2px;
  line-height: 1.04;
  margin: 0 0 22px;

  span {
    background: linear-gradient(105deg, var(--pivot-accent) 0%, var(--pivot-accent-vivid) 44%, #0891b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.hero-sub,
.section-sub {
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.75;
}

.hero-sub {
  max-width: 600px;
  margin: 0 0 32px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-actions {
  margin-bottom: 0;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 26px;
}

.hero-badges span {
  padding: 7px 11px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  font-size: 12px;
  font-weight: 600;
}

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

.pivot-field-panel {
  padding: 12px;
  border-right: 1px solid var(--vp-c-divider);

  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    border-right: 0;
    border-bottom: 1px solid var(--vp-c-divider);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
}

.pfp-section {
  margin-bottom: 14px;

  @media (max-width: 720px) {
    margin-bottom: 0;
  }
}

.pfp-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  span {
    padding: 1px 5px;
    border-radius: 3px;
    color: var(--pivot-accent);
    background: var(--pivot-accent-soft);
  }
}

.pfp-field,
.slot-row {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 6px;
  padding: 4px 7px;
  border-radius: 5px;
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.pfp-field.checked {
  color: var(--vp-c-text-1);
}

.pfp-field:hover {
  background: var(--vp-c-bg-soft);
}

.pfp-drag {
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 10px;
}

.pfp-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 3px;
  color: white;
  font-size: 9px;
  line-height: 1;

  &.on {
    border-color: var(--pivot-accent);
    background: var(--pivot-accent);
  }
}

.slot-row {
  margin-bottom: 4px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.slot-chip {
  overflow: hidden;
  padding: 3px 7px;
  border: 1px solid var(--pivot-accent-border);
  border-radius: 4px;
  color: var(--pivot-accent);
  background: var(--pivot-accent-soft);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 650;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.slot-x {
  margin-left: auto;
  color: var(--vp-c-text-3);
  font-size: 10px;
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

.features-section,
.usecases-section {
  padding: 92px 0;
}

.features-section {
  border-top: 1px solid var(--vp-c-divider);
}

.section-head {
  margin-bottom: 52px;
}

.section-title {
  max-width: 660px;
  margin: 12px 0 14px;
  color: var(--vp-c-text-1);
  font-size: clamp(30px, 3.6vw, 46px);
  font-weight: 760;
  letter-spacing: -1.4px;
  line-height: 1.08;
}

.section-sub {
  max-width: 560px;
  margin: 0 0 48px;
}

.usecase-title {
  color: var(--vp-c-text-1);
  font-size: 17px;
  font-weight: 750;
  letter-spacing: -0.2px;
  line-height: 1.25;
}

.usecase-desc {
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.7;
}

.usecases-section {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.usecase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.usecase-card {
  padding: 30px 26px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  box-shadow: var(--pro-doc-shadow-sm);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    border-color: var(--pivot-accent-border);
    box-shadow: var(--pro-doc-shadow-lg);
    transform: translateY(-4px);
  }
}

.usecase-num {
  margin-bottom: 6px;
  color: rgba(15, 118, 110, 0.18);
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1;
}

:global(.dark) .usecase-num {
  color: oklch(0.72 0.18 185 / 0.2);
}

.usecase-title {
  margin-bottom: 10px;
}

.usecase-features {
  display: grid;
  gap: 7px;
  margin-top: 16px;
}

.usecase-feature {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.45;
}

.usecase-dot {
  margin-top: 7px;
}

@media (max-width: 620px) {
  .pivot-hero {
    padding-top: 76px;
  }

  .pivot-grid-wrap,
  .pivot-grid-fallback {
    height: 480px;
  }
}
</style>
