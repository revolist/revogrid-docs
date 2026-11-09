import { exportChartToCsv } from '@revolist/charts/core'
import type { PivotChartRef, PivotChartsPlugin } from '@revolist/pivot'

/** Export the active analytical scope without relying on image-renderer formats. */
export async function salesChartCsv(
  charts: Pick<PivotChartsPlugin, 'getChartData'>,
  chart: Pick<PivotChartRef, 'model' | 'getDrillState'>,
) {
  const { model } = chart
  const { active } = chart.getDrillState()
  const dataset = await charts.getChartData({
    chartType: model.chartType,
    totals: model.totals,
    seriesIds: model.seriesIds,
    categoryMeasure: model.categoryMeasure,
    bindings: model.bindings,
    scope: { rowPath: active.row.path, columnPath: active.column.path },
  })
  return exportChartToCsv(dataset, {}, { bom: true, escapeFormulas: true, dataScope: 'all' })
}
