<template>
  <div data-story="fulfilment">
    <p class="story-note">
      Where are shipments delayed: a busy route, or a warehouse with consistently slow deliveries?
    </p>
    <div class="story-controls" aria-label="Fulfilment filters">
      <label
        >Warehouse<select v-model="filters.warehouse" aria-label="Warehouse">
          <option value="">All warehouses</option>
          <option v-for="warehouse in warehouses" :key="warehouse">{{ warehouse }}</option>
        </select></label
      >
      <label
        >Carrier<select v-model="filters.carrier" aria-label="Carrier">
          <option value="">All carriers</option>
          <option v-for="carrier in carriers" :key="carrier">{{ carrier }}</option>
        </select></label
      >
      <label
        >Destination<select v-model="filters.region" aria-label="Destination">
          <option value="">All regions</option>
          <option v-for="region in destinationRegions" :key="region">{{ region }}</option>
        </select></label
      >
      <label
        >Dispatch period<select v-model="filters.period" aria-label="Dispatch period">
          <option value="all">Oct 15–18 · UTC</option>
          <option value="recent">Oct 17–18 · UTC</option>
        </select></label
      >
      <button type="button" @click="reset">Reset filters</button>
    </div>
    <p class="story-summary" role="status">
      {{ story.selected.length }} eligible shipments · {{ onTimeCount }} on time ·
      {{ story.selected.length - onTimeCount }} late.
    </p>
    <div class="story-grid">
      <article class="story-card">
        <h4>1. Follow the route volume</h4>
        <p>See how shipment volume moves from warehouses through carriers to destinations.</p>
        <LiveChart class="story-chart" type="sankey" eager :example="story.flow" />
      </article>
      <article class="story-card">
        <h4>2. Compare warehouse outcomes</h4>
        <p>Counts make the biggest late-shipment workload visible.</p>
        <LiveChart class="story-chart" type="groupedBar" eager :example="story.ranking" />
      </article>
      <article class="story-card">
        <h4>3. Separate the tail from a general slowdown</h4>
        <p>Boxes use actual elapsed-hour samples, not averages of warehouse totals.</p>
        <LiveChart class="story-chart" type="boxPlot" eager :example="story.duration" />
      </article>
      <article class="story-card">
        <h4>4. Check the daily direction</h4>
        <p>Columns show dispatch counts; the line uses its own 0–100% value axis.</p>
        <LiveChart class="story-chart" type="columnLine" eager :example="story.daily" />
      </article>
    </div>
    <p class="story-note">
      Compare late-shipment counts with delivery spread to find which warehouses need attention. For
      record-level investigation, try the <a href="/demo/pivot-charts">Pivot Charts example</a>.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import LiveChart from '../LiveChart.vue'
import {
  buildFulfilmentStory,
  carriers,
  destinationRegions,
  shipmentIsOnTime,
  warehouses,
  type FulfilmentFilters,
} from './fulfilment-data'

const filters = reactive<FulfilmentFilters>({
  warehouse: '',
  carrier: '',
  region: '',
  period: 'all',
})
const story = computed(() => buildFulfilmentStory(filters))
const onTimeCount = computed(() => story.value.selected.filter(shipmentIsOnTime).length)
function reset() {
  Object.assign(filters, { warehouse: '', carrier: '', region: '', period: 'all' })
}
</script>
