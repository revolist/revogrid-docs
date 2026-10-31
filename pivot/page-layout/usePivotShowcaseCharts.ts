import { nextTick, onBeforeUnmount, ref, watch, type Ref } from 'vue'
import {
  PivotChartsPlugin,
  PivotPlugin,
  type PivotChartRef,
  type PivotChartDataOptions,
} from '@revolist/pivot'

export const SHOWCASE_COLORS = ['#6c4de6', '#f28a42', '#2697dc', '#d650aa']
export const SHOWCASE_QUARTERS = ['Q1', 'Q2', 'Q3', 'Q4']

export function usePivotShowcaseCharts(isDark: Ref<boolean>) {
  const columnHost = ref<HTMLElement>()
  const comparisonHost = ref<HTMLElement>()
  const shareHost = ref<HTMLElement>()
  const status = ref('loading')
  const error = ref('')
  const filterContext = ref('Current report')
  let charts: PivotChartRef[] = []
  let mounting = false
  let disposed = false

  async function mountCharts(event: Event) {
    if (disposed) return
    const grid = event.target as HTMLRevoGridElement
    if (typeof grid.getPlugins !== 'function') return
    const plugins = await grid.getPlugins()
    if (disposed) return
    const pivot = plugins.find(plugin => plugin instanceof PivotPlugin) as PivotPlugin | undefined
    const plugin = plugins.find(plugin => plugin instanceof PivotChartsPlugin) as
      PivotChartsPlugin | undefined
    const snapshot = pivot?.getRuntimeSnapshot()
    if (!snapshot || !plugin) return
    const filters = Object.entries(snapshot.config.filterSelections ?? {}).flatMap(
      ([field, selection]) => {
        if (!selection) return []
        const values = Array.isArray(selection) ? selection : selection.values
        return values.length
          ? [
              `${field}: ${Array.isArray(selection) || selection.mode !== 'exclude' ? '' : 'excluding '}${values.join(', ')}`,
            ]
          : []
      },
    )
    filterContext.value = filters.join(' · ') || 'All records'
    if (mounting || charts.length) return
    mounting = true
    try {
      await nextTick()
      if (disposed || !columnHost.value || !comparisonHost.value || !shareHost.value) return
      const measures = [{ prop: 'Revenue', aggregator: 'sum' }]
      const comparison: PivotChartDataOptions['query'] = {
        slice: { rows: ['Country'], columns: ['Quarter'], measures },
      }
      const comparisonData = await plugin.getChartData({ query: comparison, totals: 'none' })
      const quarterSeriesColors = Object.fromEntries(
        comparisonData.series.flatMap(series => {
          const quarterIndex = SHOWCASE_QUARTERS.indexOf(String(series.columnPath[0]))
          return quarterIndex < 0 ? [] : [[series.id, { color: SHOWCASE_COLORS[quarterIndex] }]]
        }),
      )
      const hosts = [columnHost.value, comparisonHost.value, shareHost.value]
      const types = ['groupedColumn', 'stackedBar', 'donut'] as const
      for (let index = 0; index < hosts.length; index++) {
        const chart = await plugin.createChart({
          container: hosts[index],
          chartType: types[index],
          linked: true,
          totals: 'none',
          query: index === 2 ? { slice: { rows: ['Quarter'], columns: [], measures } } : comparison,
          theme: isDark.value ? 'dark' : 'light',
          presentation: { legendPosition: 'none' },
          seriesOverrides: index === 1 ? quarterSeriesColors : undefined,
          colors:
            index === 1
              ? undefined
              : {
                  members: SHOWCASE_QUARTERS.map((quarter, quarterIndex) => ({
                    axis: index === 2 ? ('row' as const) : ('column' as const),
                    path: [{ field: 'Quarter', value: quarter }],
                    color: SHOWCASE_COLORS[quarterIndex],
                  })),
                },
        })
        if (disposed) {
          chart.destroy()
          return
        }
        charts.push(chart)
      }
      status.value = 'ready'
      error.value = ''
    } catch (cause) {
      console.error('Pivot showcase chart initialization failed', cause)
      charts.forEach(chart => chart.destroy())
      charts = []
      if (!disposed) {
        status.value = 'error'
        error.value =
          'Charts could not load. You can still explore the report or open the full charts demo.'
      }
    } finally {
      mounting = false
    }
  }

  watch(isDark, async dark => {
    try {
      await Promise.all(charts.map(chart => chart.update({ theme: dark ? 'dark' : 'light' })))
    } catch {
      if (!disposed) error.value = 'The chart appearance could not update. Reload to try again.'
    }
  })
  onBeforeUnmount(() => {
    disposed = true
    charts.forEach(chart => chart.destroy())
    charts = []
  })
  return { columnHost, comparisonHost, shareHost, status, error, filterContext, mountCharts }
}
