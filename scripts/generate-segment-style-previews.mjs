// Run with Node 22 after building the Charts workspace:
// node scripts/generate-segment-style-previews.mjs /absolute/path/to/revogrid-pro
import { resolve, join } from 'node:path'
import { pathToFileURL, fileURLToPath } from 'node:url'
import { writeFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { segmentStyleExamples } from '../charts/segment-style-examples.mjs'
const workspace = resolve(process.argv[2] || fileURLToPath(new URL('../../../', import.meta.url)))
const { createChartDataset } = await import(pathToFileURL(join(workspace, 'packages/charts/dist/index.js')))
const { renderChartToSVG } = await import(pathToFileURL(join(workspace, 'packages/charts/dist/server/index.js')))
for (const example of segmentStyleExamples) {
  const dataset = createChartDataset(example.values.map((score, i) => ({ month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i], score })), {
    category: { field: 'month' }, series: [{ field: 'score' }],
  })
  for (const theme of ['light', 'dark']) {
    const { svg } = await renderChartToSVG({
      width: 580, height: 290, chartType: 'line', chartId: `segment-${example.id}-${theme}`,
      dataset, theme, presentation: { legendPosition: 'none', dataLabels: false },
      seriesOverrides: { score: { encoding: example.encoding(dataset.categories.map(category => category.id)) } },
    })
    assert.match(svg, /data-chart-segment/)
    assert(!/NaN|Infinity/.test(svg))
    writeFileSync(fileURLToPath(new URL(`../public/charts/segments/${example.id}-${theme}.svg`, import.meta.url)), svg)
  }
}
console.log('Generated four native segment-style SVG previews.')
