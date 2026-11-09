import assert from 'node:assert/strict'
import test from 'node:test'
import { salesChartCsv } from '../../../blog/interactive-pivot-charts/csv.ts'

const dataset = {
  revision: 1,
  source: 'client',
  categories: [{ id: 'chairs', label: 'Chairs', labels: ['Europe', 'Chairs'] }],
  series: [{ id: 'feb', label: 'Feb › revenue (sum)' }],
  values: [[20000]],
}
const chart = {
  model: {
    chartType: 'groupedColumn',
    totals: 'none',
    seriesIds: ['feb'],
    categoryMeasure: { prop: 'revenue', aggregator: 'sum' },
    bindings: { value: ['revenue'] },
  },
  getDrillState: () => ({ active: { row: { path: ['Europe'] }, column: { path: [] } } }),
}

test('article CSV exports the drilled, filtered chart data without invoking an image renderer', async () => {
  let query
  const csv = await salesChartCsv(
    {
      getChartData: async options => {
        query = options
        return dataset
      },
    },
    chart,
  )
  assert.deepEqual(query, {
    ...chart.model,
    scope: { rowPath: ['Europe'], columnPath: [] },
  })
  assert.equal(csv, '\uFEFF"Category","Feb › revenue (sum)"\r\nEurope › Chairs,20000')
  assert.doesNotMatch(csv, /Jan|Grand Total|Americas/)
})

test('article CSV preserves null cells and escapes quoted and formula-like labels', async () => {
  const csv = await salesChartCsv(
    {
      getChartData: async () => ({
        ...dataset,
        categories: [
          { id: 'quoted', label: '=SUM(1,2)', labels: [] },
          { id: 'empty', label: 'Office "A"', labels: [] },
        ],
        values: [[0], [null]],
      }),
    },
    chart,
  )
  assert.equal(csv, '\uFEFF"Category","Feb › revenue (sum)"\r\n"\'=SUM(1,2)",0\r\n"Office ""A""",')
})

test('failed chart projection cannot produce a misleading CSV', async () => {
  await assert.rejects(
    salesChartCsv(
      {
        getChartData: async () => {
          throw new Error('Report unavailable')
        },
      },
      chart,
    ),
    /Report unavailable/,
  )
})
