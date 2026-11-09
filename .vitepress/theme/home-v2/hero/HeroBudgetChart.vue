<template>
  <aside id="hero-budget-chart" class="hero-budget-chart" tabindex="-1">
    <h3>{{ labels.chartTitle }}<span>USD</span></h3>
    <LiveChart type="groupedBar" :example="example" :style="chartStyle" eager />
  </aside>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import LiveChart from '../../../../charts/LiveChart.vue'
import type { HomeV2Record } from '../homeV2Utils'
import { createHeroBudgetDataset, createHeroBudgetExample } from './chartExamples'
import { heroBudgetRows, heroStatusColor, type HeroBudgetRow, type HeroProject } from './portfolio'

const props = defineProps<{ rows: HeroProject[]; labels: HomeV2Record }>()
// Stable projections stop owner/progress edits from updating an unrelated chart.
const budgetRows = computed<HeroBudgetRow[]>(previous => heroBudgetRows(props.rows, previous))
const colors = computed<string[]>(previous => {
  const next = props.rows.map(row => heroStatusColor(row.workflowStatus))
  return previous?.length === next.length && next.every((color, index) => color === previous[index])
    ? previous
    : next
})
const dataset = computed(() => createHeroBudgetDataset(budgetRows.value, props.labels.budget))
const example = computed(() =>
  createHeroBudgetExample(dataset.value, colors.value, props.labels.chartTitle),
)
const chartStyle = computed(() => ({
  maxHeight: `${Math.max(240, budgetRows.value.length * 38 + 60)}px`,
}))
</script>
<style scoped>
.hero-budget-chart {
  scroll-margin-top: 96px;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 16px 12px;
  border-left: 1px solid var(--rg-border);
  border-bottom: 1px solid var(--rg-border);
}
h3 {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin: 0;
  font-size: 12px;
  font-weight: 600;
}
h3 span {
  font-size: 10px;
  font-weight: 400;
  color: var(--rg-text-2);
}
.live-chart {
  flex: 1;
  min-height: 0;
  margin-block: auto;
}
:deep(.live-chart-host) {
  min-height: 240px;
}
@media (max-width: 800px) {
  .hero-budget-chart {
    height: 320px;
    border-left: 0;
    border-top: 1px solid var(--rg-border);
  }
}
</style>
