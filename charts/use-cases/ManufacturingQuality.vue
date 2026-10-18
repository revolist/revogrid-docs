<template>
  <section class="manufacturing-story" data-story="manufacturing">
    <h3>Is a machine creating the defective tail?</h3>
    <p>
      Follow the same measured parts from a diameter distribution to temperature, machine spread and
      batch drift.
    </p>
    <div class="story-controls" aria-label="Manufacturing filters">
      <label
        >Machine
        <select v-model="machine" aria-label="Machine">
          <option value="all">All machines</option>
          <option v-for="item in MACHINES" :key="item">{{ item }}</option>
        </select></label
      >
      <label
        >Batch
        <select v-model="batch" aria-label="Batch">
          <option value="all">All batches</option>
          <option v-for="item in BATCHES" :key="item">{{ item }}</option>
        </select></label
      >
      <button type="button" @click="reset">Reset filters</button>
      <button type="button" @click="inspectTail">Inspect highest-diameter part</button>
    </div>
    <p class="story-summary" role="status">
      {{ story.count }} measured parts · {{ story.defective }} outside 19.94–20.06 mm ·
      {{ story.bins.reduce((sum, bin) => sum + bin.count, 0) }} parts in complete fixed bins.
    </p>
    <div class="story-grid">
      <article class="story-card">
        <h4>Measured distribution + reference</h4>
        <p>
          Eight complete bins, 0.05 mm wide. The violet curve is an authored count reference, scaled
          to the selected part count.
        </p>
        <div class="story-chart">
          <LiveChart
            :key="`histogram-${generation}`"
            type="columnLine"
            eager
            :example="story.histogram"
          />
        </div>
      </article>
      <article class="story-card">
        <h4>Temperature versus diameter</h4>
        <p>
          Each dot retains its genuine part ID. Click or use keyboard inspection to open a part
          below.
        </p>
        <div class="story-chart">
          <LiveChart
            :key="`scatter-${generation}`"
            type="scatter"
            eager
            :example="story.scatter"
            @activate="inspect"
          />
        </div>
      </article>
      <article class="story-card">
        <h4>Spread by machine</h4>
        <p>
          Boxes use every eligible part’s actual diameter sample. A box is a machine aggregate, not
          one part.
        </p>
        <div class="story-chart">
          <LiveChart :key="`box-${generation}`" type="boxPlot" eager :example="story.box" />
        </div>
      </article>
      <article class="story-card">
        <h4>Batch mean versus specification</h4>
        <p>
          Means are calculated from the selected parts in each batch. Dashed limits are authored
          specifications.
        </p>
        <div class="story-chart">
          <LiveChart :key="`trend-${generation}`" type="line" eager :example="story.trend" />
        </div>
      </article>
    </div>
    <p class="story-summary" role="status" aria-live="polite" data-manufacturing-inspection>
      {{
        inspected
          ? `${inspected.partId} · ${inspected.machineId} · ${inspected.batchId} · ${inspected.diameterMm} mm · ${inspected.temperatureC} °C · measured ${new Date(inspected.measuredAt).toISOString()} · ${inspected.scrapCost > 0 ? 'outside specification' : 'within specification'}`
          : 'Select a temperature/diameter dot or inspect the highest-diameter part to see its original record.'
      }}
    </p>
    <p class="story-note">
      Try Lathe C and Batch 4 to see how drift appears across all four views.
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { ChartNodeClick } from '@revolist/charts'
import LiveChart from '../LiveChart.vue'
import {
  BATCHES,
  MACHINES,
  buildManufacturingStory,
  partFromActivation,
  selectParts,
  type Part,
} from './manufacturing-data'
const machine = ref('all')
const batch = ref('all')
const generation = ref(0)
const inspected = ref<Part>()
const parts = computed(() => selectParts(machine.value, batch.value))
const story = computed(() => buildManufacturingStory(parts.value))
watch([machine, batch], () => {
  inspected.value = undefined
  generation.value++
})
function reset() {
  machine.value = 'all'
  batch.value = 'all'
  inspected.value = undefined
  generation.value++
}
function inspect(detail: ChartNodeClick) {
  inspected.value = partFromActivation(detail, parts.value)
}
function inspectTail() {
  inspected.value = [...parts.value].sort((a, b) => b.diameterMm - a.diameterMm)[0]
}
</script>
