import assert from 'node:assert/strict'
import { readFileSync, statSync } from 'node:fs'
import test from 'node:test'

const results = JSON.parse(
  readFileSync(new URL('../../public/benchmarks/result.json', import.meta.url), 'utf8'),
)
const page = readFileSync(new URL('../../benchmarks.md', import.meta.url), 'utf8')
const normalizedPage = page
  .split('\n')
  .map(line =>
    line.includes('|')
      ? line
          .split('|')
          .map(cell => cell.trim())
          .join('|')
      : line,
  )
  .join('\n')
const normalizeTableRow = row =>
  row
    .split('|')
    .map(cell => cell.trim())
    .join('|')
const median = values =>
  [...values].sort((left, right) => left - right)[Math.floor(values.length / 2)]

test('published benchmark contains five measured runs for each documented workload', () => {
  assert.deepEqual(
    results.results.map(({ id, rowCount, columnCount }) => [id, rowCount, columnCount]),
    [
      ['1k', 1_000, 100],
      ['10k', 10_000, 100],
      ['100k', 100_000, 100],
      ['1m', 1_000_000, 100],
    ],
  )
  assert.match(results.browser, /^Chromium /)
  assert.ok(results.machine.model)
  assert.equal(results.runCount, 5)

  for (const scenario of results.results) {
    const { metrics, statistics, runs, rowCount, columnCount, assets } = scenario
    assert.equal(scenario.totalLogicalCells, rowCount * columnCount)
    assert.equal(runs.length, results.runCount)
    assert.deepEqual(
      runs.map(({ run }) => run),
      [1, 2, 3, 4, 5],
    )
    for (const { metrics: run } of runs) {
      assert.equal(run.firstRowVisible, true)
      assert.equal(run.prepareAndPaintMs, run.dataPreparationMs + run.initialRenderMs)
      assert.equal(run.heapAfterWarmupSamplesBytes.length, 5)
      assert.equal(run.heapAfterInteractionSamplesBytes.length, 5)
      assert.equal(run.heapAfterWarmupBytes, median(run.heapAfterWarmupSamplesBytes))
      assert.equal(run.heapAfterInteractionBytes, median(run.heapAfterInteractionSamplesBytes))
    }
    for (const [key, statistic] of Object.entries(statistics)) {
      const values = runs.map(({ metrics: run }) => run[key])
      assert.equal(metrics[key], median(values))
      assert.equal(statistic.median, median(values))
      assert.equal(statistic.mean, values.reduce((sum, value) => sum + value, 0) / values.length)
      assert.equal(statistic.min, Math.min(...values))
      assert.equal(statistic.max, Math.max(...values))
    }
    assert.equal(metrics.scrollingFpsDisplayCap, Math.min(60, metrics.rawHeadlessScrollFps))
    assert.ok(metrics.initialRenderMs > 0)
    assert.ok(metrics.renderedRows > 0)
    assert.ok(metrics.renderedCells > 0)

    const range = (key, divisor = 1) =>
      `${(statistics[key].median / divisor).toFixed(2)} (${(statistics[key].min / divisor).toFixed(2)}–${(statistics[key].max / divisor).toFixed(2)})`
    const timingSummary = `| ${rowCount.toLocaleString('en-US')} × ${columnCount.toLocaleString('en-US')} | ${range('dataPreparationMs')} | ${range('initialRenderMs')} | ${range('prepareAndPaintMs')} |`
    const workloadLabel = {
      '1k': '1K × 100',
      '10k': '10K × 100',
      '100k': '100K × 100',
      '1m': '1M × 100',
    }[scenario.id]
    const resourceSummary = `| ${workloadLabel} | ${range('rawHeadlessScrollFps')} | ${range('heapAfterWarmupBytes', 1048576)} | ${range('heapAfterInteractionBytes', 1048576)} |`
    assert.ok(
      normalizedPage.includes(normalizeTableRow(timingSummary)),
      `Missing or stale timing documentation for ${scenario.id}`,
    )
    assert.ok(
      normalizedPage.includes(normalizeTableRow(resourceSummary)),
      `Missing or stale resource documentation for ${scenario.id}`,
    )

    for (const [asset, signature] of [
      [assets.screenshot, Buffer.from('89504e470d0a1a0a', 'hex')],
      [assets.video, Buffer.from('1a45dfa3', 'hex')],
    ]) {
      assert.ok(page.includes(`](${asset})`), `Missing link to ${asset}`)
      const file = new URL(`../../public${asset}`, import.meta.url)
      assert.ok(statSync(file).size > 1_000, `Empty benchmark asset: ${asset}`)
      assert.ok(readFileSync(file).subarray(0, signature.length).equals(signature))
    }
  }
})
