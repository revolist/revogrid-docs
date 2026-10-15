<template>
  <div class="live-chart" :data-chart-type="type" :data-status="status">
    <div ref="host" class="live-chart-host" :aria-label="`${definition.label} live example`"></div>
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
import { createChart, type ChartRef } from '@revolist/charts'
import { chartCatalog, type GalleryChartType } from './catalog'

const props = withDefaults(
  defineProps<{
    type: GalleryChartType
    eager?: boolean
    labels?: boolean
  }>(),
  { eager: false, labels: false },
)
const emit = defineEmits<{ ready: []; error: [] }>()
const { isDark } = useData()
const host = ref<HTMLElement>()
const status = ref('loading')
const definition = computed(() => chartCatalog.find(chart => chart.type === props.type)!)
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
    const instance = await createChart({
      container: host.value,
      signal: controller.signal,
      chartType: props.type,
      dataset: structuredClone(preview.dataset),
      bindings: structuredClone(preview.bindings),
      chartOptions: structuredClone(options.defaults),
      presentation: { ...preview.presentation, dataLabels: props.labels },
      theme: isDark.value ? 'dark' : 'light',
      localeText: {
        renderer: { chartAriaLabel: () => `${definition.value.label} live example` },
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
      presentation: { ...preview.presentation, dataLabels: props.labels },
    })
    if (version !== generation) return
    status.value = 'ready'
    emit('ready')
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
  () => props.type,
  () => {
    if (visible) void mount()
  },
)
watch([isDark, () => props.labels], async () => {
  if (!chart) return
  try {
    await chart.update({
      theme: isDark.value ? 'dark' : 'light',
      presentation: { ...definition.value.preview.presentation, dataLabels: props.labels },
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
