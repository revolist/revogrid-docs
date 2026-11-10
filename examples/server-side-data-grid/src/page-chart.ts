import { createPivotController, PIVOT_REPORT_KIND } from '@revolist/pivot/headless'
import {
  createStandalonePivotChart,
  createStandalonePivotChartDataset,
  createPivotChartsRenderer,
} from '@revolist/pivot/charts'
import { CHART_THEME_DARK, CHART_THEME_LIGHT } from '@revolist/ui/color-palette/chart-palettes'
import { statuses, type Order } from '../shared/query.ts'
import { statusColors, type StatusLabels } from './status-badges.ts'

type Captions = {
  chartMeasure: string
  chartCount: string
  chartCountOne: string
  chartUnavailable: string
  empty: string
}
/** Native Pivot aggregates only the accepted page. There is no second data fetch. */
export function mountPageChart(
  host: HTMLElement,
  summary: HTMLElement,
  t: Captions,
  labels: StatusLabels,
) {
  const pivot = createPivotController({
    report: {
      kind: PIVOT_REPORT_KIND,
      version: 1,
      fields: [
        { id: 'status', sourceProp: 'status' },
        { id: 'id', sourceProp: 'id' },
      ],
      rows: ['status'],
      columns: [],
      filters: [],
      measures: [{ id: 'orders', fieldId: 'id', aggregator: 'count', label: t.chartMeasure }],
    },
    source: [],
    historyLimit: 0,
  })
  let disposed = false
  let dark = matchMedia('(prefers-color-scheme: dark)').matches
  const dataset = () => {
    const data = pivot.getExportData()
    const measure = data.columns.find(column => 'prop' in column && column.prop !== 'status')
    if (!measure || !('prop' in measure)) throw new Error('Pivot count measure unavailable')
    const field = String(measure.prop)
    return createStandalonePivotChartDataset(
      (data.source ?? []).map(row => ({
        ...row,
        statusLabel: labels[String(row.status) as keyof StatusLabels],
      })),
      {
        category: { field: 'status', label: 'statusLabel' },
        series: [{ field, id: 'orders', label: t.chartMeasure }],
      },
    )
  }
  const ready = createStandalonePivotChart({
    container: host,
    chartType: 'donut',
    dataset: createStandalonePivotChartDataset([], {
      category: { field: 'status' },
      series: [{ field: 'orders', label: t.chartMeasure }],
    }),
    renderer: createPivotChartsRenderer({
      palette: Object.values(statusColors),
      theme: () => (dark ? CHART_THEME_DARK : CHART_THEME_LIGHT),
      transitions: { duration: 0 },
    }),
    colors: {
      members: statuses.map(status => ({
        axis: 'row',
        path: [{ field: 'status', value: status }],
        color: statusColors[status],
      })),
    },
    presentation: { legendPosition: 'bottom' },
    interaction: { mode: 'event' },
    onError: () => {
      if (!disposed) summary.textContent = t.chartUnavailable
    },
  })
  // Source IDs stay canonical for semantic color identity; only labels are translated.
  const unsubscribe = pivot.subscribe(() => {
    const snapshot = pivot.getSnapshot()
    if (snapshot.status !== 'ready') return
    const next = dataset()
    void ready
      .then(chart => {
        if (!disposed) return chart.update({ dataset: next })
      })
      .catch(() => {
        if (!disposed) summary.textContent = t.chartUnavailable
      })
  })
  void ready.catch(() => {
    if (!disposed) summary.textContent = t.chartUnavailable
  })
  return {
    clear() {
      host.hidden = true
      summary.textContent = ''
    },
    setRows(rows: Order[]) {
      host.hidden = rows.length === 0
      summary.textContent =
        rows.length === 1
          ? t.chartCountOne
          : rows.length
            ? t.chartCount.replace('{total}', String(rows.length))
            : t.empty
      void pivot.replaceSource(rows).catch(() => {
        if (!disposed) summary.textContent = t.chartUnavailable
      })
    },
    setTheme(value: boolean) {
      dark = value
      void ready
        .then(chart => {
          if (!disposed) return chart.update({ theme: dark ? 'dark' : 'light' })
        })
        .catch(() => {})
    },
    destroy() {
      disposed = true
      unsubscribe()
      pivot.dispose()
      void ready.then(chart => chart.destroy()).catch(() => {})
    },
  }
}
