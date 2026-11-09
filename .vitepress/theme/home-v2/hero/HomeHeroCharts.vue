<template>
  <div class="hero-chart-gallery">
    <article v-for="card in cards" :key="card.id" class="hero-chart-card">
      <h3>
        {{ card.title }}<span>{{ card.unit }}</span>
      </h3>
      <LiveChart :type="card.type" :example="card.example" eager />
    </article>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import LiveChart from '../../../../charts/LiveChart.vue'
import type { HomeV2Record } from '../homeV2Utils'
import { createHeroChartCards } from './chartExamples'
import type { HeroProject } from './portfolio'

const props = defineProps<{ rows: HeroProject[]; labels: HomeV2Record }>()
const cards = computed(() => createHeroChartCards(props.rows, props.labels))
</script>
<style scoped>
.hero-chart-gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding: 16px 0 0;
}
.hero-chart-card {
  min-width: 0;
  border: 1px solid var(--rg-border);
  border-radius: 10px;
  padding: 16px 12px 8px;
}
h3 {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin: 0 0 12px;
  font-size: 13px;
  font-weight: 600;
}
h3 span {
  color: var(--rg-text-2);
  font-size: 10px;
  font-weight: 400;
}
.live-chart {
  height: 310px;
}
@media (max-width: 800px) {
  .hero-chart-gallery {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
