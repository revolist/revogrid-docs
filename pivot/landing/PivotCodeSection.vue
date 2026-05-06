<template>
  <section id="code" class="section">
    <div class="section-label">Code</div>
    <h2>Up in minutes, <span>not days</span></h2>
    <p class="section-copy">Install RevoGrid, register the pivot plugin, configure your fields. No separate pivot server, no extra build pipeline.</p>
    <div class="code-card">
      <div class="code-bar">
        <div class="window-dots"><span class="red"></span><span class="yellow"></span><span class="green"></span></div>
        <span>SalesAnalytics.tsx</span>
        <button type="button" @click="copyCode">{{ copied ? 'Copied!' : 'Copy' }}</button>
      </div>
      <pre><code ref="codeEl">import { RevoGrid } from '@revolist/react-datagrid';
import {
  PivotPlugin,
  commonAggregators,
  type PivotConfig,
} from '@revolist/revogrid-enterprise';

const pivot: PivotConfig = {
  dimensions: [
    { prop: 'region', name: 'Region' },
    { prop: 'product', name: 'Product' },
    { prop: 'quarter', name: 'Quarter' },
    {
      prop: 'revenue',
      name: 'Revenue',
      aggregators: {
        ...commonAggregators,
      },
    },
  ],
  rows: ['region', 'product'],
  columns: ['quarter'],
  values: [{
    prop: 'revenue',
    aggregator: 'sum',
  }],
  totals: { grandTotal: true, subtotals: true },
};

export function SalesAnalytics({ data }) {
  return (
    &lt;RevoGrid
      source={data}
      plugins={[PivotPlugin]}
      pivot={pivot}
      theme="default"
    /&gt;
  );
}</code></pre>
      <div class="code-note">Pivot is available via the <a :href="revoGridProUrl" target="_blank" rel="noopener">RevoGrid Pro plugin</a>. The MIT open-source core includes grouping, sorting, and virtual rendering.</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RV_GRID_BASE_URL } from './pivotLandingData'

const copied = ref(false)
const codeEl = ref<HTMLElement>()
const revoGridProUrl = `${RV_GRID_BASE_URL}/pro/`

const copyCode = async () => {
  if (!codeEl.value) return
  await navigator.clipboard.writeText(codeEl.value.innerText)
  copied.value = true
  window.setTimeout(() => { copied.value = false }, 1800)
}
</script>
