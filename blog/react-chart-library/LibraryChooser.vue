<script setup lang="ts">
import { computed, ref } from 'vue'

const selected = ref('all')
const workflows = [
  { id: 'all', label: 'All seven' },
  { id: 'product', label: 'Product dashboard' },
  { id: 'analysis', label: 'Specialized analysis' },
  { id: 'reporting', label: 'Grid-connected reporting' },
  { id: 'material', label: 'Material UI app' },
]
const libraries = [
  {
    id: 'recharts',
    name: 'Recharts',
    tag: 'React composition',
    license: 'MIT',
    groups: ['product'],
    color: '#0f766e',
    fit: 'Build familiar business charts with JSX and SVG.',
    boundary: 'Your app owns queries, filters, and the detail table.',
    demo: 'https://recharts.github.io/en-US/examples/',
    action: 'Try synchronized charts and brushes.',
  },
  {
    id: 'chartjs',
    name: 'Chart.js',
    tag: 'Canvas charts',
    license: 'MIT',
    groups: ['product'],
    color: '#be3455',
    fit: 'Supply datasets and options through react-chartjs-2.',
    boundary: 'Plan accessible alternatives for Canvas content.',
    demo: 'https://www.chartjs.org/docs/latest/samples/bar/vertical.html',
    action: 'Add a dataset, randomize values, and compare updates.',
  },
  {
    id: 'echarts',
    name: 'Apache ECharts',
    tag: 'Visualization toolkit',
    license: 'Apache-2.0',
    groups: ['analysis'],
    color: '#4055ba',
    fit: 'Explore varied chart types, datasets, and transforms.',
    boundary: 'Choose a React lifecycle integration or adapter.',
    demo: 'https://echarts.apache.org/examples/en/index.html',
    action: 'Open a chart and edit its configuration.',
  },
  {
    id: 'highcharts',
    name: 'Highcharts',
    tag: 'Commercial ecosystem',
    license: 'Commercial for business use',
    groups: ['reporting'],
    color: '#7550ad',
    fit: 'Evaluate chart modules alongside its dashboard stack.',
    boundary: 'Check the required products and license coverage.',
    demo: 'https://www.highcharts.com/demo',
    action: 'Inspect tooltips, legends, and navigation.',
  },
  {
    id: 'plotly',
    name: 'Plotly.js',
    tag: 'Analytical depth',
    license: 'MIT engine',
    groups: ['analysis'],
    color: '#2563b5',
    fit: 'Investigate distributions and multidimensional data.',
    boundary: 'Measure the required traces and renderer together.',
    demo: 'https://plotly.com/javascript/',
    action: 'Explore statistical and scientific examples.',
  },
  {
    id: 'mui',
    name: 'MUI X Charts',
    tag: 'Material UI integration',
    license: 'MIT Community; paid tiers',
    groups: ['material', 'reporting'],
    color: '#006bb7',
    fit: 'Keep charts aligned with an existing MUI application.',
    boundary: 'Grid integration requires Premium packages.',
    demo: 'https://mui.com/x/react-charts/overview/',
    action: 'Explore live examples and their React source.',
  },
  {
    id: 'revogrid',
    name: 'RevoGrid Charts',
    tag: 'Standalone → Pivot',
    license: 'Commercial',
    groups: ['reporting'],
    color: '#6554c0',
    fit: 'Start with charts, then connect configurable reports.',
    boundary: 'Use a DOM lifecycle integration; verify wrapper availability.',
    demo: '/charts/#chart-gallery',
    action: 'Switch chart types in the live gallery.',
  },
]
const shortlist = computed(() =>
  libraries.filter(item => selected.value === 'all' || item.groups.includes(selected.value)),
)
</script>

<template>
  <section class="library-chooser" aria-label="Interactive React chart library shortlist">
    <p class="chooser-eyebrow">START WITH YOUR WORKFLOW</p>
    <p class="chooser-title">What are you building?</p>
    <div class="chooser-filters" role="group" aria-label="Dashboard requirements">
      <button
        v-for="workflow in workflows"
        :key="workflow.id"
        type="button"
        :aria-pressed="selected === workflow.id"
        @click="selected = workflow.id"
      >
        {{ workflow.label }}
      </button>
    </div>
    <p class="chooser-count" role="status">
      {{ shortlist.length }} {{ shortlist.length === 1 ? 'candidate' : 'candidates' }} to evaluate ·
      editorial shortlist, not a capability limit
    </p>
    <div class="chooser-grid">
      <article
        v-for="library in shortlist"
        :key="library.id"
        class="library-card"
        :style="{ '--library-accent': library.color }"
      >
        <div class="card-heading">
          <svg viewBox="0 0 72 40" width="72" height="40" aria-hidden="true">
            <path d="M2 35H70" fill="none" stroke="currentColor" opacity=".2" />
            <rect x="5" y="23" width="9" height="12" rx="2" fill="currentColor" opacity=".25" />
            <rect x="22" y="15" width="9" height="20" rx="2" fill="currentColor" opacity=".4" />
            <rect x="39" y="20" width="9" height="15" rx="2" fill="currentColor" opacity=".55" />
            <rect x="56" y="5" width="9" height="30" rx="2" fill="currentColor" />
            <path d="M9 18L26 10L43 14L60 2" fill="none" stroke="currentColor" stroke-width="2" />
          </svg>
          <span>{{ library.tag }}</span>
        </div>
        <h3>{{ library.name }}</h3>
        <p class="card-license">{{ library.license }}</p>
        <p>{{ library.fit }}</p>
        <p class="card-boundary"><strong>Plan for:</strong> {{ library.boundary }}</p>
        <a :href="`#${library.id}`">Read the evaluation →</a>
        <a :href="library.demo" :aria-label="`Explore ${library.name} interactive examples`"
          >Interactive examples ↗</a
        >
        <p class="card-task">{{ library.action }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.library-chooser {
  margin: 28px 0;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}
.chooser-eyebrow {
  margin: 0 !important;
  color: var(--vp-c-brand-1);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
}
.chooser-title {
  margin: 8px 0 16px !important;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.03em;
}
.chooser-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chooser-filters button {
  padding: 7px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}
.chooser-filters button[aria-pressed='true'] {
  background: #087348;
  color: #fff;
  border-color: #087348;
}
.chooser-filters button:focus-visible,
.library-card a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
}
.chooser-count {
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.6;
}
.chooser-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.library-card {
  min-width: 0;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
}
.card-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--library-accent);
}
.card-heading svg {
  flex-shrink: 0;
}
.card-heading span {
  color: var(--vp-c-text-2);
  font-size: 11px;
  line-height: 1.5;
}
.library-card h3 {
  margin: 12px 0 4px;
  font-size: 20px;
}
.library-card p {
  margin: 10px 0;
  font-size: 13px;
  line-height: 1.7;
}
.library-card .card-license {
  margin: 0 0 12px;
  color: var(--vp-c-text-2);
  font-size: 11px;
}
.card-boundary {
  color: var(--vp-c-text-2);
}
.library-card a {
  display: block;
  margin-top: 10px;
  font-size: 13px;
}
.library-card .card-task {
  color: var(--vp-c-text-2);
  font-size: 11px;
}
@media (max-width: 600px) {
  .library-chooser {
    padding: 16px;
  }
  .chooser-grid {
    grid-template-columns: 1fr;
  }
}
</style>
