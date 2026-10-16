import { defineCustomElements } from '@revolist/revogrid/loader'
import {
  PivotPlugin,
  PivotChartsPlugin,
  createPivotChartsRenderer,
  type PivotChartRef,
  type PivotConfig,
} from '@revolist/pivot'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/pivot/styles.css'
import { sales } from './sales'

export const pivotConfig: PivotConfig = {
  dimensions: [
    { prop: 'region', name: 'Region' },
    { prop: 'product', name: 'Product' },
    { prop: 'month', name: 'Month' },
    { prop: 'revenue', name: 'Revenue (USD)' },
  ],
  rows: ['region', 'product'],
  columns: ['month'],
  values: [{ id: 'revenue', prop: 'revenue', aggregator: 'sum' }],
  collapsed: true,
  groupAggregations: true,
  totals: { grandTotal: true },
}

/** Plain JavaScript DOM integration; Vue only supplies the article's mounting container. */
export async function mountSalesExample(host: HTMLElement) {
  defineCustomElements()
  await customElements.whenDefined('revo-grid')
  const grid = document.createElement('revo-grid')
  grid.style.height = '225px'
  grid.theme = 'compact'
  grid.hideAttribution = true
  grid.readonly = true
  grid.resize = true
  grid.colSize = 240
  grid.setAttribute('aria-label', 'Sales Pivot table')
  grid.source = sales.map(row => ({ ...row }))
  grid.pivot = pivotConfig
  grid.pivotCharts = {
    renderer: createPivotChartsRenderer({
      palette: ['#4f46e5', '#0f9d8a'],
      labels: { styles: { data: { fontWeight: 600 } } },
    }),
  }
  grid.plugins = [PivotPlugin, PivotChartsPlugin]
  const chartHost = document.createElement('div')
  chartHost.className = 'article-pivot-chart'
  const table = document.createElement('div')
  table.className = 'article-pivot-table'
  table.append(grid)
  host.append(chartHost, table)
  let disposed = false
  let chart: PivotChartRef | undefined
  let charts: PivotChartsPlugin | undefined
  let opening: Promise<void> | undefined
  const changed = () => {
    host.dispatchEvent(
      new CustomEvent('sales-chart-change', {
        detail: { path: chart?.getDrillState().active.row.path ?? [] },
      }),
    )
  }
  const start = () => {
    if (disposed || chart || opening) return
    opening = (async () => {
      const plugins = await grid.getPlugins()
      charts = plugins.find(plugin => plugin instanceof PivotChartsPlugin) as
        PivotChartsPlugin | undefined
      if (!charts || disposed) return
      chart = await charts.createChart({
        container: chartHost,
        chartType: 'groupedColumn',
        linked: true,
        totals: 'none',
        drillSyncMode: 'chart',
        underlyingRecords: true,
        interaction: { mode: 'drill' },
        presentation: {
          title: 'Monthly revenue',
          subtitle: 'January and February · USD',
          yAxisTitle: 'Revenue (USD)',
          legendPosition: 'bottom',
          dataLabels: true,
        },
      })
      if (disposed) chart.destroy()
      else {
        host.dataset.ready = 'true'
        changed()
      }
    })()
      .catch(error => {
        host.dispatchEvent(new CustomEvent('sales-chart-error', { detail: String(error) }))
      })
      .finally(() => {
        opening = undefined
      })
  }
  const drilled = () => {
    if (!disposed) changed()
  }
  grid.addEventListener('pivot-model-changed', start)
  grid.addEventListener('pivot-chart-drilled', drilled)
  // The first model can commit before getPlugins resolves; also check the current snapshot.
  const plugins = await grid.getPlugins()
  const pivot = plugins.find(plugin => plugin instanceof PivotPlugin) as PivotPlugin | undefined
  if (pivot?.getRuntimeSnapshot()?.revision) start()
  return {
    async exploreEurope() {
      if (!chart || !charts) return
      await chart.resetDrill()
      const dataset = await charts.getChartData({
        chartType: 'groupedColumn',
        scope: { rowPath: [] },
      })
      const europe = dataset.categories.find(
        category => category.path.length === 1 && category.path[0] === 'Europe',
      )
      if (europe && chart.canDrillDown(europe)) await chart.drillDown(europe)
    },
    async reset() {
      await chart?.resetDrill()
      await drilled()
    },
    async showFebruary(only: boolean) {
      if (!chart) return
      grid.pivot = { ...pivotConfig, filterSelections: only ? { month: ['Feb'] } : {} }
      await chart.update({
        presentation: { subtitle: only ? 'February · USD' : 'January and February · USD' },
      })
      await chart.resetDrill()
    },
    async exportCsv() {
      if (chart && charts)
        await charts.downloadChart(chart.id, { fileFormat: 'csv', fileName: 'sales-chart.csv' })
    },
    destroy() {
      disposed = true
      grid.removeEventListener('pivot-model-changed', start)
      grid.removeEventListener('pivot-chart-drilled', drilled)
      chart?.destroy()
      host.replaceChildren()
    },
  }
}
