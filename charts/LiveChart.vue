<template>
  <div class="live-chart" :data-chart-type="type" :data-status="status">
    <div
      ref="host"
      class="live-chart-host"
      :aria-label="example?.presentation?.description ?? `${definition.label} live example`"
    ></div>
    <p v-if="status === 'loading'" class="chart-message">Loading live chart…</p>
    <div v-if="status === 'error'" class="chart-message" role="alert">
      <p>This chart could not load.</p>
      <button type="button" @click="mount">Try again</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { createChart, type ChartRef, type ChartNodeClick } from '@revolist/charts'
import { chartCatalog, type GalleryChartType } from './catalog'
import type { StoryChartOptions } from './use-cases/types'

const props = withDefaults(
  defineProps<{
    type: GalleryChartType
    eager?: boolean
    labels?: boolean
    example?: StoryChartOptions
  }>(),
  { eager: false, labels: false },
)
const emit = defineEmits<{
  ready: [chart: ChartRef]
  error: []
  activate: [detail: ChartNodeClick]
}>()
const { isDark } = useData()
const host = ref<HTMLElement>()
const status = ref('loading')
const definition = computed(() => chartCatalog.find(chart => chart.type === props.type)!)
const presentation = computed(() => ({
  ...(props.example?.presentation ?? definition.value.preview.presentation),
  dataLabels: props.labels,
}))
let chart: ChartRef | undefined
let observer: IntersectionObserver | undefined
let controller: AbortController | undefined
let generation = 0
let visible = false

async function mount() {
  if (!host.value) return
  const version = ++generation
  controller?.abort()
  chart?.destroy()
  chart = undefined
  controller = new AbortController()
  status.value = 'loading'
  try {
    const { preview, options } = definition.value
    const { rendererOptions, ...example } = props.example ?? {}
    const instance = await createChart({
      container: host.value,
      signal: controller.signal,
      chartType: props.type,
      ...structuredClone(example),
      rendererOptions,
      dataset: structuredClone(props.example?.dataset ?? preview.dataset),
      bindings: structuredClone(props.example?.bindings ?? preview.bindings),
      chartOptions: structuredClone(props.example?.chartOptions ?? options.defaults),
      presentation: { ...presentation.value },
      theme: isDark.value ? 'dark' : 'light',
      onNodeClick: detail => emit('activate', detail),
      localeText: {
        renderer: {
          chartAriaLabel: () =>
            props.example?.presentation?.description ?? `${definition.value.label} live example`,
        },
      },
    })
    if (version !== generation) {
      instance.destroy()
      return
    }
    chart = instance
    // Reconcile appearance changes made while the initial render was pending.
    await chart.update({
      theme: isDark.value ? 'dark' : 'light',
      presentation: { ...presentation.value },
    })
    if (version !== generation) return
    status.value = 'ready'
    emit('ready', instance)
  } catch (error) {
    if (version !== generation) return
    chart?.destroy()
    chart = undefined
    status.value = 'error'
    console.error(`Charts gallery: ${props.type}`, error)
    emit('error')
  }
}
watch(
  () => [props.type, props.example],
  () => {
    if (visible) void mount()
  },
)
watch([isDark, () => props.labels], async () => {
  if (!chart) return
  try {
    await chart.update({
      theme: isDark.value ? 'dark' : 'light',
      presentation: { ...presentation.value },
    })
  } catch {
    status.value = 'error'
    emit('error')
  }
})
onMounted(() => {
  if (props.eager || !('IntersectionObserver' in window)) {
    visible = true
    void mount()
    return
  }
  observer = new IntersectionObserver(
    entries => {
      if (!entries.some(entry => entry.isIntersecting)) return
      observer?.disconnect()
      visible = true
      void mount()
    },
    { rootMargin: '180px' },
  )
  if (host.value) observer.observe(host.value)
})
onBeforeUnmount(() => {
  generation++
  observer?.disconnect()
  controller?.abort()
  chart?.destroy()
})
defineExpose({
  download: () => chart?.download({ fileFormat: 'svg', fileName: `revogrid-${props.type}` }),
})
</script>

<style scoped>
.live-chart {
  position: relative;
  min-width: 0;
  height: 100%;
}
.live-chart-host {
  width: 100%;
  height: 100%;
  min-height: 230px;
}
.chart-message {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 13px;
}
.chart-message button {
  text-decoration: underline;
}
</style>
