<template>
  <section class="transition-examples" aria-labelledby="transition-heading" :data-status="status">
    <h2 id="transition-heading">See your data change.</h2>
    <p>
      Line, grouped column and grouped bar charts animate data updates for 180 ms with ease-out by
      default. Compare the same update with motion switched off. Initial rendering is immediate;
      your device’s reduced-motion preference is respected.
    </p>
    <button type="button" :disabled="status !== 'ready' || updating" @click="updateData">
      Change data
    </button>
    <span role="status">{{
      status === 'error' ? 'Unable to load this example.' : `Dataset ${revision + 1}`
    }}</span>
    <div class="transition-pair">
      <article>
        <h3>Default animation</h3>
        <div
          ref="animatedHost"
          class="transition-chart"
          aria-label="Default animated sales chart"
        ></div>
        <ChartsCodeExample label="View animated chart code"
          ><TransitionAnimatedSource
        /></ChartsCodeExample>
      </article>
      <article>
        <h3>Explicit opt-out</h3>
        <div ref="immediateHost" class="transition-chart" aria-label="Immediate sales chart"></div>
        <ChartsCodeExample label="View immediate chart code"
          ><TransitionImmediateSource
        /></ChartsCodeExample>
      </article>
    </div>
    <p class="transition-note">
      Override timing with <code>transitions: { duration: 300, easing: 'linear' }</code> in
      rendererOptions. Other chart families, batched SVG and WebGL remain immediate. Resize cancels
      motion; image and vector exports settle to committed data.
    </p>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { createChart, type ChartRef } from '@revolist/charts'
import ChartsCodeExample from './ChartsCodeExample.vue'
import TransitionAnimatedSource from '../.vitepress/theme/components/charts/TransitionAnimatedSource.md'
import TransitionImmediateSource from '../.vitepress/theme/components/charts/TransitionImmediateSource.md'

const { isDark } = useData()
const animatedHost = ref<HTMLElement>()
const immediateHost = ref<HTMLElement>()
const status = ref('loading')
const updating = ref(false)
const revision = ref(0)
const charts: ChartRef[] = []
const controller = new AbortController()
const samples = [
  [25, 65, 40, 85],
  [80, 30, 75, 20],
  [45, 90, 20, 60],
]
const rows = () =>
  samples[revision.value].map((sales, index) => ({
    region: ['North', 'South', 'East', 'West'][index],
    sales,
  }))

onMounted(async () => {
  try {
    for (const [index, container] of [animatedHost.value, immediateHost.value].entries()) {
      if (controller.signal.aborted || !container) return
      const chart = await createChart({
        container,
        signal: controller.signal,
        chartType: 'groupedColumn',
        data: rows(),
        mapping: { category: { field: 'region' }, series: [{ field: 'sales' }] },
        axes: { y: { min: 0, max: 100 } },
        presentation: { legendPosition: 'none' },
        theme: isDark.value ? 'dark' : 'light',
        ...(index === 1 ? { rendererOptions: { transitions: false as const } } : {}),
      })
      if (controller.signal.aborted) {
        chart.destroy()
        return
      }
      charts.push(chart)
    }
    status.value = 'ready'
  } catch {
    charts.splice(0).forEach(chart => chart.destroy())
    if (!controller.signal.aborted) status.value = 'error'
  }
})
async function updateData() {
  updating.value = true
  revision.value = (revision.value + 1) % samples.length
  try {
    await Promise.all(charts.map(chart => chart.update({ data: rows() })))
  } catch {
    status.value = 'error'
  } finally {
    updating.value = false
  }
}
watch(isDark, async () => {
  try {
    await Promise.all(charts.map(chart => chart.update({ theme: isDark.value ? 'dark' : 'light' })))
  } catch {
    if (!controller.signal.aborted) status.value = 'error'
  }
})
onBeforeUnmount(() => {
  controller.abort()
  charts.splice(0).forEach(chart => chart.destroy())
})
</script>

<style scoped>
.transition-examples {
  padding-block: 48px;
}
h2 {
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.2;
}
p {
  max-width: 850px;
  color: var(--vp-c-text-2);
  margin-block: 16px;
}
button {
  padding: 10px 18px;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  font-weight: 600;
}
button:disabled {
  opacity: 0.6;
}
button:focus-visible {
  outline: 2px solid var(--vp-c-text-1);
  outline-offset: 3px;
}
[role='status'] {
  margin-inline-start: 16px;
  font-size: 14px;
}
.transition-pair {
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
.transition-chart {
  height: 260px;
  width: 100%;
}
.transition-note {
  font-size: 14px;
}
@media (max-width: 700px) {
  .transition-pair {
    grid-template-columns: 1fr;
  }
}
</style>
