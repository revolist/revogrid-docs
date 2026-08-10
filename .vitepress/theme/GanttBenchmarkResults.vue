<template>
  <div v-if="result" class="gantt-results">
    <section class="gantt-results__environment">
      <div><span>Browser</span><strong>{{ result.environment.browser }}</strong></div>
      <div><span>Hardware</span><strong>{{ result.environment.machine.model }} · {{ result.environment.machine.chip }} · {{ result.environment.machine.memory }}</strong></div>
      <div><span>Operating system</span><strong>{{ result.environment.machine.os }} ({{ result.environment.machine.osBuild }})</strong></div>
      <div><span>RevoGrid</span><strong>Core {{ result.environment.revogrid.core }} · Pro/Enterprise {{ result.environment.revogrid.enterprise }}</strong></div>
    </section>

    <h2>Initial load, memory, and DOM</h2>
    <div class="gantt-results__table-wrap">
      <table>
        <thead><tr><th>Tasks</th><th>Density</th><th>Dependencies</th><th>Apply → interactive</th><th>Navigation → interactive</th><th>Initial heap</th><th>Interaction heap</th><th>Rows / cells / bars / links</th></tr></thead>
        <tbody>
          <tr v-for="entry in rows" :key="`${entry.caseId}-initial`">
            <td>{{ formatInteger(entry.taskCount) }}</td><td>{{ entry.density }}</td><td>{{ formatInteger(entry.dependencyCount) }}</td>
            <td>{{ milliseconds(entry.initial, 'applyToInteractiveMs') }}</td><td>{{ milliseconds(entry.initial, 'navigationToInteractiveMs') }}</td>
            <td>{{ mebibytes(entry.memory, 'heapInitialMedianBytes') }}</td><td>{{ mebibytes(entry.memory, 'heapAfterInteractionMedianBytes') }}</td>
            <td>{{ count(entry.initial, 'dom.uniqueMountedRows') }} / {{ count(entry.initial, 'dom.mountedCells') }} / {{ count(entry.initial, 'dom.taskBars') }} / {{ count(entry.initial, 'dom.dependencyElements') }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Navigation</h2>
    <div class="gantt-results__table-wrap">
      <table>
        <thead><tr><th>Tasks</th><th>Density</th><th>Vertical FPS</th><th>Vertical long tasks</th><th>Horizontal FPS</th><th>Horizontal long tasks</th><th>Horizontal p95 frame</th></tr></thead>
        <tbody>
          <tr v-for="entry in rows" :key="`${entry.caseId}-navigation`">
            <td>{{ formatInteger(entry.taskCount) }}</td><td>{{ entry.density }}</td>
            <td>{{ number(entry.vertical, 'displayCappedFps') }}</td><td>{{ count(entry.vertical, 'longTaskCount') }}</td>
            <td>{{ number(entry.horizontal, 'displayCappedFps') }}</td><td>{{ count(entry.horizontal, 'longTaskCount') }}</td><td>{{ milliseconds(entry.horizontal, 'frameTimeP95Ms') }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Editing and scheduling</h2>
    <div class="gantt-results__table-wrap">
      <table>
        <thead><tr><th>Tasks</th><th>Density</th><th>Move preview / commit</th><th>Resize preview / commit</th><th>Dependency update</th><th>Collapse / expand</th></tr></thead>
        <tbody>
          <tr v-for="entry in rows" :key="`${entry.caseId}-interaction`">
            <td>{{ formatInteger(entry.taskCount) }}</td><td>{{ entry.density }}</td>
            <td>{{ milliseconds(entry.move, 'previewMs') }} / {{ milliseconds(entry.move, 'commitToPaintMs') }}</td>
            <td>{{ milliseconds(entry.resize, 'previewMs') }} / {{ milliseconds(entry.resize, 'commitToPaintMs') }}</td>
            <td>{{ milliseconds(entry.dependency, 'latencyMs') }}</td>
            <td>{{ milliseconds(entry.hierarchy, 'collapseMs') }} / {{ milliseconds(entry.hierarchy, 'expandMs') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <p v-else-if="loadError" class="gantt-results__notice">The live result table could not be loaded. The raw JSON and CSV links above remain available.</p>
  <p v-else class="gantt-results__notice" role="status">Loading the published benchmark results…</p>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

type Metric = { median: number; p95: number; samples: number[] }
type BenchmarkCase = { id: string; taskCount: number; density: string; dependencyTarget: number }
type Aggregate = { caseId: string; taskCount: number; density: string; timelineSpan: string; scenario: string; metrics: Record<string, Metric> }
type Result = {
  environment: { browser: string; machine: { model: string; chip: string; memory: string; os: string; osBuild: string }; revogrid: { core: string; enterprise: string } };
  cases: BenchmarkCase[];
  aggregates: Aggregate[];
}
const result = ref<Result | null>(null)
const loadError = ref(false)

onMounted(async () => {
  try {
    const response = await fetch('https://gantt.rv-grid.com/benchmarks/latest.json')
    if (!response.ok) throw new Error(`Benchmark result returned ${response.status}`)
    result.value = await response.json() as Result
  } catch {
    loadError.value = true
  }
})

const aggregate = (caseId: string, scenario: string, timelineSpan = 'quarter') => result.value?.aggregates.find((entry) => entry.caseId === caseId && entry.scenario === scenario && entry.timelineSpan === timelineSpan)
const rows = computed(() => (result.value?.cases ?? []).map((benchmarkCase) => ({
  ...benchmarkCase,
  initial: aggregate(benchmarkCase.id, 'initial'),
  vertical: aggregate(benchmarkCase.id, 'vertical'),
  horizontal: aggregate(benchmarkCase.id, 'horizontal', 'twenty-year'),
  move: aggregate(benchmarkCase.id, 'move'),
  resize: aggregate(benchmarkCase.id, 'resize'),
  dependency: aggregate(benchmarkCase.id, 'dependency'),
  hierarchy: aggregate(benchmarkCase.id, 'hierarchy'),
  memory: aggregate(benchmarkCase.id, 'memory-dom'),
})))

const metric = (entry: Aggregate | undefined, key: string) => entry?.metrics[key]?.median
const number = (entry: Aggregate | undefined, key: string) => metric(entry, key)?.toFixed(2) ?? 'N/A'
const milliseconds = (entry: Aggregate | undefined, key: string) => {
  const value = metric(entry, key)
  return value == null ? 'N/A' : `${value.toFixed(2)} ms`
}
const count = (entry: Aggregate | undefined, key: string) => {
  const value = metric(entry, key)
  return value == null ? 'N/A' : formatInteger(Math.round(value))
}
const mebibytes = (entry: Aggregate | undefined, key: string) => {
  const value = metric(entry, key)
  return value == null ? 'N/A' : `${(value / 1024 / 1024).toFixed(2)} MiB`
}
const formatInteger = (value: number) => value.toLocaleString('en-US')
</script>

<style scoped>
.gantt-results { margin: 28px 0; }
.gantt-results__notice { margin: 28px 0; color: var(--vp-c-text-2); }
.gantt-results__environment { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-bottom: 30px; }
.gantt-results__environment div { display: grid; gap: 4px; padding: 14px 16px; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); }
.gantt-results__environment span { color: var(--vp-c-text-2); font-size: 12px; font-weight: 700; text-transform: uppercase; }
.gantt-results__environment strong { font-size: 14px; }
.gantt-results__table-wrap { width: 100%; overflow-x: auto; }
table { min-width: 980px; font-size: 13px; }
th, td { white-space: nowrap; font-variant-numeric: tabular-nums; }
td:nth-child(2) { text-transform: capitalize; }
@media (max-width: 700px) { .gantt-results__environment { grid-template-columns: 1fr; } }
</style>
