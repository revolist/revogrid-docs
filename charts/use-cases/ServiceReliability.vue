<template>
  <div class="service-reliability" data-story="reliability">
    <p>Did a deployment worsen latency everywhere, or only for one service and region?</p>
    <div class="story-controls">
      <label
        >Service
        <select v-model="service" aria-label="Service" @change="clearInspection">
          <option value="all">All services</option>
          <option v-for="item in services" :key="item">{{ item }}</option>
        </select></label
      >
      <label
        >Region
        <select v-model="region" aria-label="Region" @change="clearInspection">
          <option value="all">All regions</option>
          <option v-for="item in regions" :key="item">{{ item }}</option>
        </select></label
      >
      <button type="button" @click="reset">Reset filters</button>
    </div>
    <p class="story-summary" aria-live="polite">
      {{ summary.count }} requests · {{ summary.errors }} errors / {{ summary.count }} requests ·
      {{ percent(summary.errorPercent) }} errors · raw p95 {{ summary.p95 ?? '—' }} ms.
      {{
        bucket === null
          ? 'Full 30-minute period.'
          : `Bucket ${bucket * 5}–${bucket * 5 + 5} minutes.`
      }}
    </p>
    <p class="story-note">
      Fictional requests, 18 October 2026, 12:00–12:30 UTC. Release B starts at 12:15. Filter by
      service and region to isolate the change. Trend and request charts share a time window.
    </p>
    <div class="story-grid">
      <section class="story-card">
        <h4>When did errors increase?</h4>
        <p>Count columns and error-percent line use separate named value axes.</p>
        <div class="story-chart">
          <LiveChart
            :key="`trend-${revision}`"
            type="columnLine"
            :example="examples.trend"
            eager
            @ready="connect('trend', $event)"
            @activate="aggregateTrend"
          />
        </div>
      </section>
      <section class="story-card">
        <h4>What does the latency tail hide?</h4>
        <p>
          Fixed 0, 100, 200, 400, 800, 1600, 3200 ms edges. Every selected request belongs to
          exactly one bin.
        </p>
        <div class="story-chart">
          <LiveChart
            type="histogram"
            :example="examples.histogram"
            eager
            @activate="histogramInspection"
          />
        </div>
      </section>
      <section class="story-card">
        <h4>Which service and bucket?</h4>
        <p>
          Pick a populated cell to focus its service and five-minute window. Empty buckets have no
          requests.
        </p>
        <div class="story-chart">
          <LiveChart type="heatmap" :example="examples.heatmap" eager @activate="inspectCell" />
        </div>
        <button v-if="cell" class="story-action" type="button" @click="applyCell">
          Use {{ cell.service }} and {{ cell.bucket * 5 }}–{{ cell.bucket * 5 + 5 }} min
        </button>
      </section>
      <section class="story-card">
        <h4>Inspect a real request</h4>
        <p>Each point retains its request ID. Click, tap, or focus a point and activate it.</p>
        <div class="story-chart">
          <LiveChart
            :key="`scatter-${revision}`"
            type="scatter"
            :example="examples.scatter"
            eager
            @ready="connect('scatter', $event)"
            @activate="inspectRequest"
          />
        </div>
      </section>
    </div>
    <p class="story-summary" aria-live="polite">{{ inspection }}</p>
    <details v-if="selectedRequest" open class="story-source">
      <summary>Request {{ selectedRequest.requestId }}</summary>
      <dl>
        <dt>Service / region</dt>
        <dd>{{ selectedRequest.service }} / {{ selectedRequest.region }}</dd>
        <dt>UTC instant</dt>
        <dd>{{ new Date(selectedRequest.startedAt).toISOString() }}</dd>
        <dt>Latency / response</dt>
        <dd>{{ selectedRequest.durationMs }} ms / HTTP {{ selectedRequest.statusCode }}</dd>
        <dt>Deployment</dt>
        <dd>{{ selectedRequest.deploymentId }}</dd>
      </dl>
    </details>
  </div>
</template>
<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { createChartSyncGroup, type ChartRef, type ChartNodeClick } from '@revolist/charts'
import LiveChart from '../LiveChart.vue'
import {
  services,
  regions,
  requests,
  selectRequests,
  reliabilitySummary,
  reliabilityExamples,
  type RequestFact,
} from './reliability-data'
const service = ref('all'),
  region = ref('all'),
  bucket = ref<number | null>(null),
  revision = ref(0)
const selected = computed(() => selectRequests(service.value, region.value, bucket.value))
const summary = computed(() => reliabilitySummary(selected.value))
const examples = computed(() => reliabilityExamples(selected.value))
const selectedRequest = ref<RequestFact>()
const cell = ref<{ service: string; bucket: number }>()
const inspection = ref(
  'Activate a scatter request for raw details, or a heatmap cell for an explicit aggregate filter.',
)
const percent = (value: number | null) => (value === null ? '—' : `${value.toFixed(1)}%`)
let sync = createChartSyncGroup({ viewport: 'x', domain: false, hover: false })
const disconnect = new Map<string, () => void>()
function connect(key: string, chart: ChartRef) {
  disconnect.get(key)?.()
  disconnect.set(key, sync.connect(chart))
}
function clearInspection() {
  selectedRequest.value = undefined
  cell.value = undefined
  inspection.value = 'Host filters updated; inspect a request or an aggregate.'
}
function reset() {
  service.value = 'all'
  region.value = 'all'
  bucket.value = null
  revision.value++
  clearInspection()
}
function inspectRequest(detail: ChartNodeClick) {
  const request = requests.find(row => row.requestId === detail.category.path[0])
  if (!request || !selected.value.includes(request)) return
  selectedRequest.value = request
  inspection.value = `Raw request ${request.requestId}: ${request.durationMs} ms, HTTP ${request.statusCode}, ${request.service}, ${request.region}.`
}
function inspectCell(detail: ChartNodeClick) {
  const index = Number(detail.series.id.replace('bucket-', ''))
  const selectedService = String(detail.category.path[0])
  if (
    !services.includes(selectedService as (typeof services)[number]) ||
    !Number.isInteger(index) ||
    index < 0 ||
    index > 5
  )
    return
  selectedRequest.value = undefined
  cell.value = { service: selectedService, bucket: index }
  inspection.value = `Aggregate: ${selectedService}, ${index * 5}–${index * 5 + 5} min, ${percent(detail.value)} errors. Apply the explicit filter below the heatmap.`
}
function applyCell() {
  if (!cell.value) return
  service.value = cell.value.service
  bucket.value = cell.value.bucket
  clearInspection()
}
function aggregateTrend() {
  selectedRequest.value = undefined
  inspection.value =
    'Five-minute aggregate: count and error percentage use the selected requests. This mark is not an individual request.'
}
function histogramInspection() {
  selectedRequest.value = undefined
  inspection.value =
    'Latency bin: an aggregate over the selected raw requests. Use the scatter to inspect individual requests.'
}
watch(
  selected,
  () => {
    disconnect.forEach(stop => stop())
    disconnect.clear()
    sync.destroy()
    sync = createChartSyncGroup({ viewport: 'x', domain: false, hover: false })
  },
  { flush: 'sync' },
)
onBeforeUnmount(() => {
  disconnect.forEach(stop => stop())
  sync.destroy()
})
</script>
