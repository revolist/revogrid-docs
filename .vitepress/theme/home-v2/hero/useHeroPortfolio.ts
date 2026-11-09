import { computed, ref, shallowRef } from 'vue'
import type { AdvancedFilterConfig, FilterAst } from '@revolist/revogrid-pro'
import {
  applyHeroDependencyEdit,
  applyHeroEdit,
  createHeroProjects,
  heroDependencies,
  type HeroEdit,
} from './portfolio'
import { hasHeroBudgetPreset, toggleHeroBudgetPreset } from './portfolioFilters'

/** Authored records and shared native-filter results for every hero product. */
export function useHeroPortfolio() {
  const projects = ref(createHeroProjects())
  const authoredDependencies = shallowRef(heroDependencies(projects.value))
  const visibleIds = shallowRef<Set<string> | null>(null)
  const filterAst = shallowRef<FilterAst>()
  const gridFilterConfig = shallowRef<AdvancedFilterConfig>({
    predefinedFilters: true,
    multiFilterItems: {},
    selection: { syncCellTemplate: true, sourceRowTypes: ['rgRow'] },
  })
  const visibleRows = computed(() =>
    visibleIds.value ? projects.value.filter(row => visibleIds.value!.has(row.id)) : projects.value,
  )
  const dependencies = computed(() =>
    visibleIds.value
      ? authoredDependencies.value.filter(
          link =>
            visibleIds.value!.has(link.predecessorTaskId) &&
            visibleIds.value!.has(link.successorTaskId),
        )
      : authoredDependencies.value,
  )
  const hasFilters = computed(() => !!filterAst.value)
  const largeOnly = computed(() => hasHeroBudgetPreset(filterAst.value))

  function rememberVisibleIds(ids: string[]) {
    const previous = visibleIds.value
    if (previous?.size === ids.length && ids.every(id => previous.has(id))) return
    visibleIds.value = new Set(ids)
  }
  function rememberFilter(ast: FilterAst | undefined) {
    filterAst.value = ast
    // Keep the config reference unchanged: the mounted native grid applied this itself.
    gridFilterConfig.value.filterAst = ast
  }
  function applyFilter(ast: FilterAst | undefined) {
    filterAst.value = ast
    gridFilterConfig.value = { ...gridFilterConfig.value, filterAst: ast }
  }
  function applyEdit(detail: HeroEdit) {
    authoredDependencies.value = applyHeroDependencyEdit(authoredDependencies.value, detail)
    projects.value = applyHeroEdit(projects.value, detail)
    if (detail.source && visibleIds.value) {
      const ids = new Set(visibleIds.value)
      detail.source.ids.forEach(id => ids.delete(id))
      detail.source.rows.forEach(row => ids.add(row.id))
      visibleIds.value = ids
    }
  }
  return {
    projects,
    dependencies,
    visibleRows,
    gridFilterConfig,
    hasFilters,
    largeOnly,
    rememberVisibleIds,
    rememberFilter,
    applyEdit,
    clearFilters: () => applyFilter(undefined),
    toggleBudgetFilter: () => applyFilter(toggleHeroBudgetPreset(filterAst.value)),
  }
}
