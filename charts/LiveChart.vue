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
import { liveChartOptions, needsLiveChartRemount } from './liveChartOptions'

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
const options = () =>
  liveChartOptions(
    props.example,
    definition.value.preview,
    definition.value.options.defaults,
    isDark.value,
    props.labels,
  )
let chart: ChartRef | undefined
let observer: IntersectionObserver | undefined
let controller: AbortController | undefined
let generation = 0
let updateRequest = 0
let pendingExampleUpdates = 0
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
    const instance = await createChart({
      container: host.value,
      signal: controller.signal,
      chartType: props.type,
      ...options(),
      rendererOptions: props.example?.rendererOptions,
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
    // Reconcile props changed while the initial render was pending.
    await update(false)
  } catch (error) {
    if (version !== generation) return
    chart?.destroy()
    chart = undefined
    status.value = 'error'
    console.error(`Charts gallery: ${props.type}`, error)
    emit('error')
  }
}
async function update(appearanceOnly: boolean) {
  const instance = chart
  const version = generation
  const request = ++updateRequest
  const isCurrent = () => version === generation && chart === instance && request === updateRequest
  if (!instance) return
  // A theme update must not mask a failed example queued immediately before it.
  const reconcileExample = !appearanceOnly || pendingExampleUpdates > 0
  if (reconcileExample) pendingExampleUpdates++
  try {
    const settings = options()
    await instance.update(
      reconcileExample ? settings : { theme: settings.theme, presentation: settings.presentation },
    )
    if (!isCurrent()) return
    const firstRender = status.value === 'loading'
    status.value = 'ready'
    if (firstRender) emit('ready', instance)
  } catch (error) {
    if (!isCurrent()) return
    status.value = 'error'
    console.error(`Charts gallery: ${props.type}`, error)
    emit('error')
  } finally {
    if (reconcileExample) pendingExampleUpdates--
  }
}

watch(
  () => [props.type, props.example, isDark.value, props.labels] as const,
  (_, previous) => {
    if (!visible) return
    const recreate =
      !chart ||
      status.value === 'error' ||
      props.type !== previous?.[0] ||
      needsLiveChartRemount(previous?.[1], props.example)
    if (recreate) void mount()
    else void update(props.example === previous?.[1])
  },
)
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
