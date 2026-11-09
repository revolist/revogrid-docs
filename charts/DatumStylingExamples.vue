<template>
  <section class="datum-styling-examples" aria-labelledby="datum-styling-heading">
    <h2 id="datum-styling-heading">Give a moment in your data its own style.</h2>
    <p>
      Highlight a decline, a recovery or an unusual observation with authored segment and datum
      styles. The values and source identities stay the same. Toggle the styles to compare.
    </p>
    <label class="style-switch"
      ><input v-model="enabled" type="checkbox" /> Show authored styles</label
    >
    <div class="styling-pair">
      <article>
        <h3>A dashed decline. A gradient recovery.</h3>
        <p>
          A diamond marks March; directed segment rules style February → March and March → April.
        </p>
        <div class="styling-canvas"><LiveChart type="line" eager :example="lineExample" /></div>
        <ChartsCodeExample label="View line styling code"><DatumLineSource /></ChartsCodeExample>
      </article>
      <article>
        <h3>One observation, a different finish.</h3>
        <p>March uses a diagonal pattern; June uses a gradient. Every bar retains its raw value.</p>
        <div class="styling-canvas">
          <LiveChart type="groupedColumn" eager :example="barExample" />
        </div>
        <ChartsCodeExample label="View column styling code"><DatumBarSource /></ChartsCodeExample>
      </article>
    </div>
    <p class="styling-note">
      Rules use actual dataset IDs and are saved with the chart. Segment rules apply to line and
      area outlines; marker policies apply to supported line and scatter glyphs. Custom datum
      encoding uses individual SVG marks, with an explicit fallback from batched SVG or WebGL.
      <a href="https://pro.rv-grid.com/guides/charts/tools/datum-styling/"
        >Explore styling options</a
      >.
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { createChartDataset, type ChartOptions, type ChartDatumEncoding } from '@revolist/charts'
import LiveChart from './LiveChart.vue'
import ChartsCodeExample from './ChartsCodeExample.vue'
import DatumLineSource from '../.vitepress/theme/components/charts/DatumLineSource.md'
import DatumBarSource from '../.vitepress/theme/components/charts/DatumBarSource.md'

const enabled = ref(true)
const dataset = createChartDataset(
  [40, 65, 50, 82, 75, 105].map((revenue, index) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index],
    revenue,
  })),
  { category: { field: 'month' }, series: [{ field: 'revenue' }] },
)
const ids = dataset.categories.map(category => category.id)
const recovery = {
  type: 'linearGradient' as const,
  direction: 'horizontal' as const,
  stops: [
    { offset: 0, color: '#0f766e' },
    { offset: 1, color: '#22c55e' },
  ],
}
const lineEncoding: ChartDatumEncoding = {
  style: { stroke: '#6647f0', strokeWidth: 3, marker: 'circle', markerSize: 5 },
  datums: [{ categoryId: ids[2], style: { marker: 'diamond', markerSize: 9, fill: '#c2410c' } }],
  segments: [
    {
      from: ids[1],
      to: ids[2],
      style: { stroke: '#c2410c', strokeWidth: 4, strokeDasharray: '6 4' },
    },
    { from: ids[2], to: ids[3], style: { stroke: recovery, strokeWidth: 5 } },
  ],
}
const barEncoding: ChartDatumEncoding = {
  datums: [
    {
      categoryId: ids[2],
      style: {
        fill: { type: 'pattern', pattern: 'diagonal', color: '#7c3aed', size: 8 },
        stroke: '#7c3aed',
        strokeWidth: 2,
      },
    },
    {
      categoryId: ids[5],
      style: {
        fill: {
          type: 'linearGradient',
          stops: [
            { offset: 0, color: '#c4b5fd' },
            { offset: 1, color: '#6d28d9' },
          ],
        },
      },
    },
  ],
}
function example(
  encoding: ChartDatumEncoding,
): Pick<ChartOptions, 'dataset' | 'seriesOverrides' | 'axes' | 'presentation'> {
  return {
    dataset,
    axes: { y: { min: 0, max: 120 } },
    presentation: { legendPosition: 'none' },
    seriesOverrides: enabled.value ? { revenue: { encoding } } : {},
  }
}
const lineExample = computed(() => example(lineEncoding))
const barExample = computed(() => example(barEncoding))
</script>

<style scoped>
.datum-styling-examples {
  padding-block: 48px;
}
h2 {
  scroll-margin-top: 96px;
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.2;
}
p {
  max-width: 850px;
  color: var(--vp-c-text-2);
  margin-block: 16px;
}
.style-switch {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}
.style-switch input {
  width: 18px;
  height: 18px;
  accent-color: var(--vp-c-brand-1);
}
.styling-pair {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-top: 24px;
}
article {
  min-width: 0;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
}
h3 {
  font-size: 18px;
  font-weight: 600;
}
article p,
.styling-note {
  font-size: 14px;
}
.styling-canvas {
  height: 280px;
}
a {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}
@media (max-width: 700px) {
  .styling-pair {
    grid-template-columns: 1fr;
  }
}
</style>
