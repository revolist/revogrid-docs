import assert from 'node:assert/strict'
import test from 'node:test'
import { liveChartOptions, needsLiveChartRemount } from '../../charts/liveChartOptions.ts'

const dataset = {
  categories: [{ id: 'a', label: 'A' }],
  series: [{ id: 'budget', label: 'Budget' }],
  values: [[10]],
}
const preview = { dataset, bindings: {}, presentation: { description: 'Default chart' } }

test('chart create and update options use the same defaults without owning caller data', () => {
  const options = liveChartOptions(undefined, preview, {}, false, false)
  assert.deepEqual(options.dataset, dataset)
  assert.notEqual(options.dataset, dataset)
  assert.equal(options.theme, 'light')
  assert.equal(options.presentation.description, 'Default chart')
  assert.equal(options.presentation.dataLabels, false)
})

test('removed authored options require reconstruction because native updates ignore undefined', () => {
  for (const key of [
    'axes',
    'seriesOverrides',
    'annotations',
    'navigation',
    'viewport',
    'interaction',
    'rangeSelection',
  ] as const) {
    assert.equal(needsLiveChartRemount({ [key]: {} }, undefined), true, key)
    assert.equal(needsLiveChartRemount({ [key]: {} }, { [key]: {} }), false, key)
  }
  assert.equal(
    needsLiveChartRemount({ dataset }, { dataset: { ...dataset, values: [[20]] } }),
    false,
  )
  assert.equal(needsLiveChartRemount(undefined, { axes: { y: { min: 0 } } }), false)
})

test('renderer callbacks stay outside serializable chart settings', () => {
  const rendererOptions = { onRender: () => undefined }
  const next = liveChartOptions(
    { rendererOptions, presentation: { description: 'Custom chart' } },
    preview,
    {},
    false,
    false,
  )
  assert.equal(Object.hasOwn(next, 'rendererOptions'), false)
  assert.equal(needsLiveChartRemount({ rendererOptions }, {}), true)
  assert.equal(next.presentation.description, 'Custom chart')
})
