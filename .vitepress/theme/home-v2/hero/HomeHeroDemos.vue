<template>
  <div id="hero-demos" class="hero-demos">
    <HeroDemoTabs v-model:active="active" :tabs="tabs" :label="labels.viewsLabel" />
    <div
      :id="`hero-panel-${active}`"
      class="hero-demo-panel"
      role="tabpanel"
      :aria-labelledby="`hero-tab-${active}`"
      tabindex="0"
    >
      <ClientOnly>
        <HeroView
          v-show="active === 'grid'"
          view="grid"
          :rows="projects"
          :labels="labels"
          :filter-config="gridFilterConfig"
          @filter-change="rememberFilter"
          @visible-ids="rememberVisibleIds"
          @edit="applyEdit"
        />
        <HeroView
          v-if="active !== 'grid'"
          :key="active"
          :view="active"
          :rows="visibleRows"
          :labels="labels"
          :filter-config="gridFilterConfig"
          @edit="applyEdit"
        />
        <template #fallback
          ><p class="hero-demo-loading">{{ labels.loading }}</p></template
        >
      </ClientOnly>
    </div>
    <HeroDemoFooter
      :labels="labels"
      :visible-count="visibleRows.length"
      :total-count="projects.length"
      :has-filters="hasFilters"
      :large-only="largeOnly"
      :trial-link="activeTab.trialLink"
      @clear="clearFilters"
      @toggle-budget="toggleBudgetFilter"
      @trial="trackDemo('hero_demo_next_step', 'trial')"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent, h, ref, watch } from 'vue'
import type { FilterAst, EventManagerEvent } from '@revolist/revogrid-pro'
import type { HomeV2Record } from '../homeV2Utils'
import { getAnalyticsExperimentVariant, trackSiteAnalytics } from '../../siteAnalytics'
import type { HeroView as View } from './portfolio'
import { useHeroPortfolio } from './useHeroPortfolio'
import HeroDemoTabs from './HeroDemoTabs.vue'
import HeroDemoFooter from './HeroDemoFooter.vue'

const props = defineProps<{ labels: HomeV2Record; tabs: HomeV2Record[] }>()
const HeroView = defineAsyncComponent({
  loader: () => import('./HomeHeroDemoView.vue'),
  loadingComponent: {
    render: () => h('p', { class: 'hero-demo-loading', role: 'status' }, props.labels.loading),
  },
  delay: 0,
})
const portfolio = useHeroPortfolio()
const {
  projects,
  visibleRows,
  gridFilterConfig,
  hasFilters,
  largeOnly,
  rememberVisibleIds,
  clearFilters,
} = portfolio
const active = ref<View>('grid')
const activeTab = computed(() => props.tabs.find(tab => tab.id === active.value) ?? {})

function trackDemo(event: string, action: string) {
  trackSiteAnalytics(
    event,
    {
      demo_id: 'home-hero',
      demo_name: active.value,
      demo_layout_version: 'connected-v2',
      placement: 'hero',
      action_id: action,
      experiment_variant:
        typeof window === 'undefined' ? undefined : getAnalyticsExperimentVariant(window.location),
    },
    `${event}:home-hero:${active.value}:${action}`,
  )
}
watch(active, () => trackDemo('hero_demo_view', 'switch_view'))
function rememberFilter(ast: FilterAst | undefined) {
  portfolio.rememberFilter(ast)
  trackDemo('hero_demo_interaction', 'filter')
}
function applyEdit(detail: Pick<EventManagerEvent, 'data' | 'models'>) {
  portfolio.applyEdit(detail)
  trackDemo('hero_demo_interaction', 'edit')
}
function toggleBudgetFilter() {
  portfolio.toggleBudgetFilter()
  trackDemo('hero_demo_interaction', 'budget_filter')
}
</script>
<style scoped>
.hero-demos {
  min-width: 0;
  scroll-margin-top: 90px;
}
.hero-demo-panel {
  background: var(--rg-bg);
}
.hero-demo-loading {
  min-height: 390px;
  display: grid;
  place-content: center;
  color: var(--rg-text-2);
}
[role='tabpanel']:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -2px;
}
</style>
