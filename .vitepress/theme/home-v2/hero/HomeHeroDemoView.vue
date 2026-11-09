<template>
  <div
    class="hero-view"
    :class="{
      'hero-view--grid': view === 'grid',
      'hero-view--charts': view === 'charts',
      'hero-view--pivot': view === 'pivot',
    }"
    :data-hero-view="view"
  >
    <HeroPivotControls
      v-if="view === 'pivot' && productState === 'ready'"
      v-model="pivotGrouping"
      :labels="labels"
    />
    <p v-if="productState === 'loading'" class="hero-product-message" role="status">
      {{ labels.loading }}
    </p>
    <div v-else-if="productState === 'error'" class="hero-product-message" role="alert">
      <p>{{ labels.loadError }}</p>
      <button v-rv-control class="rv-btn" type="button" @click="loadProduct">
        {{ labels.retry }}
      </button>
    </div>
    <HomeHeroCharts v-else-if="view === 'charts'" :rows="rows" :labels="labels" />
    <RevoGrid
      v-else
      :key="`${view}-${isDark}`"
      class="hero-native-grid"
      hide-attribution
      :theme="isDark ? 'darkCompact' : 'compact'"
      :source="source"
      :columns="columns"
      :plugins="plugins"
      :column-types="columnTypes"
      :filter.prop="view === 'grid' ? filterConfig : undefined"
      :row-size="46"
      :stretch.prop="view === 'kanban' || view === 'pivot' || view === 'grid' ? 'all' : false"
      :resize="true"
      :range="view === 'grid'"
      :readonly="view === 'pivot'"
      :gantt.prop="productConfig?.gantt"
      :gantt-dependencies.prop="productConfig?.dependencies"
      :event-scheduler.prop="productConfig?.scheduler"
      :event-scheduler-resources.prop="resources"
      :kanban.prop="productConfig?.kanban"
      :pivot.prop="productConfig?.pivot"
      @filterastchange="
        $event.detail.origin === 'ui' && emit('filter-change', $event.detail.filterAst)
      "
      @aftergridrender="product?.afterGridRender?.($event)"
      @beforecolumnsset="product?.beforeColumnsSet?.($event)"
      @afterfilterapply="syncVisibleProjects"
      @gridedit="emit('edit', $event.detail)"
    />
    <HeroBudgetChart v-if="view === 'grid'" :rows="chartRows" :labels="labels" />
  </div>
</template>
<script setup lang="ts">
import { computed, onBeforeUnmount, shallowRef, watch } from 'vue'
import { useData } from 'vitepress'
import { vRvControl } from '@revolist/ui/vue-control'
import RevoGrid from '@revolist/vue3-datagrid'
import {
  EventManagerPlugin,
  AdvanceFilterPlugin,
  FilterHeaderPlugin,
  ColumnStretchPlugin,
  type AdvancedFilterConfig,
  type FilterAst,
  type EventManagerEvent,
} from '@revolist/revogrid-pro'
import type { HomeV2Record } from '../homeV2Utils'
import type { HeroProject, HeroView } from './portfolio'
import { createHeroGridColumns, createHeroColumnTypes } from './gridColumns'
import { useHeroProduct } from './useHeroProduct'
import HomeHeroCharts from './HomeHeroCharts.vue'
import HeroBudgetChart from './HeroBudgetChart.vue'
import HeroPivotControls from './HeroPivotControls.vue'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'

const props = defineProps<{
  view: HeroView
  rows: HeroProject[]
  labels: HomeV2Record
  filterConfig: AdvancedFilterConfig
}>()
const emit = defineEmits<{
  edit: [detail: Pick<EventManagerEvent, 'data' | 'models'>]
  'filter-change': [filter: FilterAst | undefined]
  'visible-ids': [ids: string[]]
}>()
const { isDark } = useData()
const columnTypes = createHeroColumnTypes()
const {
  product,
  state: productState,
  config: productConfig,
  resources,
  pivotGrouping,
  load: loadProduct,
} = useHeroProduct(props)
const columns = computed(() => productConfig.value?.columns ?? createHeroGridColumns(props.labels))
const plugins = computed(() => [
  EventManagerPlugin,
  ...(props.view === 'grid'
    ? [AdvanceFilterPlugin, FilterHeaderPlugin, ColumnStretchPlugin]
    : (product.value?.plugins ?? [])),
])

// Plugins receive their own snapshots; authored edits are reconciled by ID in the parent.
function snapshot(rows: HeroProject[]) {
  return rows.map(row => ({
    ...row,
    workflowStatus:
      props.view === 'pivot'
        ? (props.labels.statuses[row.workflowStatus] ?? row.workflowStatus)
        : row.workflowStatus,
  }))
}
const source = shallowRef(snapshot(props.rows))
watch(
  () => props.rows,
  rows => {
    source.value = snapshot(rows)
  },
)

// Only the canonical grid resolves visible IDs. Other views consume the parent's result.
const visibleIds = shallowRef<Set<string> | null>(null)
let filterReadVersion = 0
async function syncVisibleProjects(event: Event) {
  if (props.view !== 'grid') return
  const version = ++filterReadVersion
  const visible = await (event.target as HTMLRevoGridElement).getVisibleSource()
  if (version !== filterReadVersion) return
  visibleIds.value = new Set(visible.map(row => String(row.id)))
  emit('visible-ids', [...visibleIds.value])
}
onBeforeUnmount(() => {
  filterReadVersion++
})
const chartRows = computed(() =>
  visibleIds.value ? props.rows.filter(row => visibleIds.value!.has(row.id)) : props.rows,
)
</script>
<style scoped lang="scss" src="./gridColumns.scss"></style>
<style scoped lang="scss">
.hero-view {
  min-width: 0;
  height: 390px;
  overflow: hidden;
}
.hero-view--grid {
  --hero-grid-height: 366px;
  height: var(--hero-grid-height);
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
}
.hero-view--grid .hero-native-grid {
  height: var(--hero-grid-height);
}
.hero-view--charts {
  height: auto;
  overflow: visible;
}
.hero-view--pivot {
  display: flex;
  flex-direction: column;
}
.hero-view--pivot .hero-native-grid {
  flex: 1;
  height: 0;
  min-height: 0;
}
.hero-product-message {
  display: grid;
  place-content: center;
  height: 390px;
  text-align: center;
  color: var(--rg-text-2);
}
.hero-native-grid {
  width: 100%;
  height: 390px;
  min-width: 0;
  border: 0;
  display: block;
}
[data-hero-view='scheduler']
  :deep(.event-scheduler-event--conflict .event-scheduler-event__button) {
  border-color: var(
    --event-scheduler-event-border,
    color-mix(
      in srgb,
      var(--event-scheduler-event-color) 72%,
      var(--event-scheduler-surface-raised, var(--rg-bg)) 28%
    )
  );
  border-left-color: var(--event-scheduler-event-color);
}
@media (max-width: 1199px) {
  .hero-view--grid {
    // Leave room for the native horizontal gutter when the fields need it.
    --hero-grid-height: 390px;
  }
}
@media (max-width: 800px) {
  .hero-view--grid {
    grid-template-columns: minmax(0, 1fr);
    height: auto;
  }
}
</style>
