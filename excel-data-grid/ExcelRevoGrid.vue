<template>
  <ClientOnly>
    <VGrid
      ref="gridRef"
      v-bind="attrs"
      class="excel-live-grid"
      :theme="resolvedTheme"
      :source="source"
      :columns="columns"
      :column-types="columnTypes"
      :filter.prop="filter"
      :readonly="readonly && !dataReadonly"
      :plugins="resolvedPlugins"
      :data-grid-formatting.prop="resolvedFormatting"
      :data-grid-formatting-panel.prop="dataGridFormattingPanel"
      :infinity-scroll.prop="infinityScroll"
      :tree.prop="tree"
      :grouping.prop="grouping"
      :column-group-panel.prop="columnGroupPanel"
      :row-headers="rowHeaders"
      :resize-row.prop="rowResize"
      :row-order.prop="rowOrder"
      :multi-range-selection.prop="multiRangeSelection"
      :data-grid-context-menu.prop="resolvedContextMenu"
      hide-attribution
      @aftergridinit="onGridInit"
      @aftergridrender="onAfterGridRender"
      @afterfocus="scheduleSelectionChange"
      @afterfilterapply="emitFilterChange"
      @afteranysource="emitSourceChange"
      @columngroupingchange="emitGroupingChange"
      @viewportscroll="scheduleRenderStats"
    />
    <template #fallback>
      <div class="excel-grid-loading" aria-label="Loading RevoGrid example">Loading RevoGrid example…</div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, useAttrs, watch } from 'vue'
import { useData } from 'vitepress'
import VGrid from '@revolist/vue3-datagrid'
import type { ColumnProp, ColumnTypes, GridPlugin, GroupingOptions, RowHeaders } from '@revolist/revogrid'
import type {
  ColumnGroupPanelConfig,
  DataGridContextMenuConfig,
  InfinityScrollConfig,
  MultiRangeSelectionConfig,
  RowOrderPluginConfig,
  TreeConfig,
} from '@revolist/revogrid-pro'
import { withExcelFormattingPlugins } from './excelFormattingPlugins'
import { resolveExcelContextMenu } from './excelContextMenu'
import { useExcelGridInitialState, type ExcelGridInitialEdit, type ExcelGridInitialRange } from './useExcelGridInitialState'
import { useExcelGridRenderStats, type ExcelGridRenderStats } from './useExcelGridRenderStats'
import { useExcelGridSelection, type ExcelGridSelectionPayload } from './useExcelGridSelection'
import { useExcelGridFormattingSurface } from './useExcelGridFormattingSurface'
import { useExcelGridDataReadonly } from './useExcelGridDataReadonly'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  source: Record<string, unknown>[]
  columns: Record<string, unknown>[]
  columnTypes?: ColumnTypes
  themeMode?: 'site' | 'dark' | 'light'
  initialRange?: ExcelGridInitialRange
  initialEdit?: ExcelGridInitialEdit
  trackStats?: boolean
  readonly?: boolean
  /** Keep source values immutable while still allowing Pro presentation formatting. */
  dataReadonly?: boolean
  filter?: boolean | Record<string, unknown>
  plugins?: GridPlugin[]
  dataGridFormatting?: Record<string, unknown>
  dataGridFormattingPanel?: boolean | Record<string, unknown>
  infinityScroll?: Partial<InfinityScrollConfig>
  tree?: TreeConfig
  grouping?: GroupingOptions
  columnGroupPanel?: ColumnGroupPanelConfig
  rowHeaders?: RowHeaders | boolean
  rowOrder?: RowOrderPluginConfig | false
  multiRangeSelection?: MultiRangeSelectionConfig
  dataGridContextMenu?: DataGridContextMenuConfig
}>(), {
  themeMode: 'site',
  trackStats: false,
  readonly: false,
  dataReadonly: false,
})

const emit = defineEmits<{
  gridReady: []
  selectionChange: [payload: ExcelGridSelectionPayload]
  renderStats: [payload: ExcelGridRenderStats]
  filterChange: [payload: {
    visibleSource: Record<string, unknown>[]
    filterItems: Record<string, unknown[]>
  }]
  sourceChange: [payload: {
    type: string
    source: Record<string, unknown>[]
  }]
  groupingChange: [payload: { props: ColumnProp[]; grouping: GroupingOptions }]
}>()

const attrs = useAttrs(), defaultFormattingState = {}
const rowResize = { minHeight: 28, maxHeight: 160, fullRow: true }
const gridRef = ref<{ $el?: HTMLRevoGridElement } | HTMLRevoGridElement | null>(null)
const { isDark } = useData()
const resolvedPlugins = computed(() => withExcelFormattingPlugins(props.plugins)), resolvedFormatting = computed(() => props.dataGridFormatting ?? defaultFormattingState)
const resolvedContextMenu = computed(() => resolveExcelContextMenu(
  props.dataGridContextMenu,
  props.dataReadonly,
))
const resolvedTheme = computed(() => {
  if (props.themeMode === 'dark') return 'darkCompact'
  if (props.themeMode === 'light') return 'compact'
  return isDark.value ? 'darkCompact' : 'compact'
})

function getGridElement() {
  return ('$el' in (gridRef.value ?? {}) ? gridRef.value?.$el : gridRef.value) as HTMLRevoGridElement | undefined
}

const { emitSelectionChange, scheduleSelectionChange, selectRange, startSelectionTracking } = useExcelGridSelection(
  getGridElement,
  (payload) => emit('selectionChange', payload),
)

const { applyInitialState, resetInitialState, startInitialRangeObserver } = useExcelGridInitialState({
  getGridElement,
  getInitialRange: () => props.initialRange,
  getInitialEdit: () => props.initialEdit,
  afterRangeApplied: emitSelectionChange,
})

const { scheduleRenderStats, startStatsTracking } = useExcelGridRenderStats({
  getGridElement,
  isEnabled: () => props.trackStats,
  getRowCount: () => props.source.length,
  getColumnCount: () => props.columns.length,
  onStats: (payload) => emit('renderStats', payload),
})
const { connectFormattingSurface } = useExcelGridFormattingSurface(getGridElement)
const { connectDataReadonly } = useExcelGridDataReadonly(
  getGridElement,
  () => props.dataReadonly,
)

async function emitFilterChange(event: CustomEvent<{
  multiFilterItems?: Record<string, unknown[]>
}>) {
  const grid = getGridElement()
  if (!grid?.getVisibleSource) return
  emit('filterChange', {
    visibleSource: await grid.getVisibleSource() as Record<string, unknown>[],
    filterItems: event.detail?.multiFilterItems ?? {},
  })
}

function emitSourceChange(event: CustomEvent<{
  type: string
  source: Record<string, unknown>[]
}>) {
  if (event.detail?.type !== 'rgRow') return
  emit('sourceChange', event.detail)
}

function emitGroupingChange(event: CustomEvent<{ props: ColumnProp[]; grouping: GroupingOptions }>) {
  emit('groupingChange', event.detail)
}
async function applyFilterItems(filterItems: Record<string, unknown[]>) {
  const grid = getGridElement()
  if (!grid?.getPlugins) return
  const plugins = await grid.getPlugins()
  const filterPlugin = plugins.find((plugin) => (
    'getSelectionList' in plugin && typeof (plugin as { onFilterChange?: unknown }).onFilterChange === 'function'
  )) as { onFilterChange?: (items: Record<string, unknown[]>) => Promise<void> } | undefined
  await filterPlugin?.onFilterChange?.(filterItems)
}

defineExpose({ applyFilterItems, selectRange })

async function onGridInit() {
  const grid = getGridElement()
  if (grid) {
    grid.resizeRow = rowResize
    // Vue's custom-element bridge can serialize object props when the grid is
    // mounted through ClientOnly. Keep the filter configuration on the DOM
    // property so the core filter plugin receives its full object config.
    if (props.filter !== undefined) {
      const filterConfig = typeof props.filter === 'object' ? { ...props.filter } : props.filter
      grid.filter = filterConfig
      // The Vue wrapper may assign the same object before Stencil's watcher is
      // connected. Emit the public configuration event once the grid is ready
      // so panel behavior (for example save-on-submit filters) is deterministic.
      grid.dispatchEvent(new CustomEvent('filterconfigchanged', { detail: filterConfig }))
    }
  }
  emit('gridReady')
  startSelectionTracking()
  startInitialRangeObserver()
  connectDataReadonly()
  connectFormattingSurface()
}

async function onAfterGridRender() {
  startSelectionTracking()
  startInitialRangeObserver()
  connectDataReadonly()
  connectFormattingSurface()
  await applyInitialState()
  await nextTick()
  startStatsTracking()
  scheduleRenderStats()
}

watch(resolvedTheme, async () => {
  resetInitialState()
  await nextTick()
  await applyInitialState()
  scheduleRenderStats()
})

watch(() => [props.source.length, props.columns.length], scheduleRenderStats)
</script>
