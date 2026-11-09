<template>
  <section id="chart-use-cases" class="use-case-examples" aria-labelledby="use-cases-heading">
    <header class="stories-heading">
      <p class="eyebrow">See the whole story</p>
      <h2 id="use-cases-heading">From one chart to a decision.</h2>
      <p>
        Explore three runnable dashboards. Each uses one fictional source dataset, with explicit
        filters that update complementary views. Choose a story, change a filter and inspect the
        data.
      </p>
    </header>
    <nav class="story-picker" aria-label="Choose a chart use case">
      <button
        v-for="story in stories"
        :key="story.id"
        type="button"
        :aria-pressed="selected === story.id"
        aria-controls="active-chart-story"
        @click="selected = story.id"
      >
        <span>{{ story.label }}</span>
        <small>{{ story.hint }}</small>
      </button>
    </nav>
    <div id="active-chart-story" :data-active-story="selected">
      <component :is="active.component" :key="active.id" />
    </div>
    <!-- Keep source fragments server-rendered: VitePress lean chunks omit static code HTML. -->
    <div
      v-for="story in stories"
      v-show="selected === story.id"
      :key="story.id"
      :data-source-for="story.id"
    >
      <details class="story-source">
        <summary>{{ story.sourceSummary }}</summary>
        <p class="story-note">{{ story.sourceNote }}</p>
        <div class="vp-doc"><component :is="story.source" /></div>
      </details>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ServiceReliability from './use-cases/ServiceReliability.vue'
import FulfilmentBottlenecks from './use-cases/FulfilmentBottlenecks.vue'
import ManufacturingQuality from './use-cases/ManufacturingQuality.vue'
import ReliabilitySource from '../.vitepress/theme/components/chart-stories/ReliabilitySource.md'
import FulfilmentSource from '../.vitepress/theme/components/chart-stories/FulfilmentSource.md'
import ManufacturingSource from '../.vitepress/theme/components/chart-stories/ManufacturingSource.md'

const stories = [
  {
    id: 'reliability',
    label: 'Service reliability',
    hint: 'Trends, tails and failures',
    component: ServiceReliability,
    source: ReliabilitySource,
    sourceSummary: 'Runnable source and aggregation policy',
    sourceNote:
      'All observations are loaded locally. Error percentage uses selected 5xx requests / selected requests; p95 uses nearest rank over raw durations. The host owns shared filters, and only the compatible elapsed-time axes are linked.',
  },
  {
    id: 'fulfilment',
    label: 'Fulfilment bottlenecks',
    hint: 'Flows, delays and delivery',
    component: FulfilmentBottlenecks,
    source: FulfilmentSource,
    sourceSummary: 'View runnable data and chart configurations',
    sourceNote:
      'Fictional complete source: 72 shipments, with 7 cancellations excluded everywhere. Each shipment contributes once per route stage. Late means delivery after the promised instant; duration uses elapsed hours. Boxes and flows are aggregates.',
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing quality',
    hint: 'Tolerance, drift and outliers',
    component: ManufacturingQuality,
    source: ManufacturingSource,
    sourceSummary: 'View runnable manufacturing data and chart configuration',
    sourceNote:
      'Histogram totals and box samples use all selected measured parts. Fixed 0.05 mm bins retain their edges. The separate reference is N × bin width × an authored normal density (mean 20 mm, standard deviation 0.04 mm), not fitted measurements. Only scatter points open part records.',
  },
] as const
const selected = ref<(typeof stories)[number]['id']>('reliability')
const active = computed(() => stories.find(story => story.id === selected.value)!)
</script>

<style scoped>
.use-case-examples {
  margin-block: 64px 80px;
  scroll-margin-top: 96px;
}
.stories-heading {
  max-width: 780px;
}
.stories-heading h2 {
  margin-block: 14px;
  font-size: clamp(28px, 3.5vw, 42px);
  letter-spacing: -1px;
  line-height: 1.15;
}
.stories-heading > p:last-child {
  color: var(--vp-c-text-2);
  line-height: 1.7;
}
.story-picker {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-block: 28px;
}
.story-picker button {
  min-height: 76px;
  padding: 14px 18px;
  text-align: left;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
}
.story-picker button[aria-pressed='true'] {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.story-picker span {
  display: block;
  font-weight: 650;
}
.story-picker small {
  display: block;
  margin-top: 4px;
  color: var(--vp-c-text-2);
  font-size: 12px;
}
:deep(.story-controls) {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 20px;
  align-items: end;
  margin-block: 22px 16px;
}
:deep(.story-controls label) {
  display: grid;
  gap: 6px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}
:deep(.story-controls select),
:deep(.story-controls button),
:deep(.story-action) {
  min-height: 44px;
  padding: 9px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
}
:deep(.story-controls select) {
  min-width: 150px;
}
:deep(.story-summary),
:deep(.story-note) {
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.7;
  margin-block: 12px 20px;
}
:deep(.story-grid) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}
:deep(.story-card) {
  min-width: 0;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
}
:deep(.story-card h4),
:deep(.story-card h3) {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 6px;
}
:deep(.story-card > p) {
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.6;
}
:deep(.story-chart) {
  height: 290px;
  min-width: 0;
  margin-top: 14px;
}
:deep(.story-source) {
  margin-top: 22px;
  padding: 16px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
}
:deep(.story-source summary) {
  cursor: pointer;
  min-height: 28px;
  font-weight: 600;
}
:deep(.story-source pre) {
  max-height: 460px;
  overflow: auto;
}
:deep(.story-source a),
:deep(.story-note a) {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}
:deep(.story-inspection) {
  padding: 14px 18px;
  margin-block: 16px;
  border-left: 3px solid var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  font-size: 13px;
  line-height: 1.7;
  overflow-wrap: anywhere;
}
@media (max-width: 760px) {
  .story-picker {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .story-picker button {
    min-height: 62px;
    padding: 10px 14px;
  }
  :deep(.story-grid) {
    grid-template-columns: 1fr;
  }
  :deep(.story-card) {
    padding: 14px 10px;
  }
  :deep(.story-chart) {
    height: 290px;
  }
  :deep(.story-controls label) {
    flex: 1 1 130px;
    min-width: 0;
  }
  :deep(.story-controls select) {
    width: 100%;
    min-width: 0;
  }
  :deep(.story-controls button) {
    width: 100%;
  }
}
</style>
