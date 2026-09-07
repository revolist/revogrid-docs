import assert from 'node:assert/strict'
import test from 'node:test'
import { firstEntryDemoHref, firstEntryScenarios, firstEntryTrialHref, firstEntryWorkspaceClasses, getFirstEntryContext, isOrderFirstEntry, isOrderFirstEntryLanding } from '../../../../.vitepress/theme/demoFirstEntry'
import { createFirstEntryRows, REVIEW_STATUSES } from '../../../../revogrid-demos/pro-filtering/src/first-entry.data'

test('the order workflow is canonical while explicit experiment matching stays exact', () => {
  for (const search of ['', '?experiment_variant=other', '?scenario=performance']) assert.equal(isOrderFirstEntry(search), false)
  assert.equal(isOrderFirstEntry('?experiment_variant=order-first-entry'), true)
  assert.equal(isOrderFirstEntryLanding(''), true)
  assert.equal(isOrderFirstEntryLanding('?campaign=demo'), true)
  assert.equal(isOrderFirstEntryLanding('?experiment_variant=order-first-entry'), true)
  assert.equal(isOrderFirstEntryLanding('?experiment_variant=other'), false)
  assert.equal(isOrderFirstEntryLanding('?scenario=performance'), false)
  assert.equal(firstEntryDemoHref('grid-at-scale'), '/demo/?experiment_variant=order-first-entry&scenario=performance')
  assert.equal(firstEntryDemoHref('filtering'), '/demo/')
  assert.deepEqual(firstEntryWorkspaceClasses('filtering'), ['order-first-entry-workspace', 'order-first-entry-workspace--filtering'])
})

test('every scenario has real catalog routes, source, appropriate plan, and trial context', () => {
  const plans = ['Pro Lite', 'Pro Lite', 'Pro Advanced', 'Core']
  firstEntryScenarios.forEach((scenario, index) => {
    const context = getFirstEntryContext(scenario.demoId)!
    assert.equal(context.planLabel, plans[index])
    assert.match(context.implementationUrl, /^https:\/\/github.com\//)
    assert.equal(context.returnHref, firstEntryDemoHref(scenario.demoId))
    const trial = new URL(firstEntryTrialHref(scenario.demoId), 'https://rv-grid.com')
    assert.equal(trial.pathname, '/trial')
    assert.equal(trial.searchParams.get('demo_id'), scenario.demoId)
    assert.equal(trial.searchParams.get('experiment_variant'), 'order-first-entry')
    assert.equal(trial.searchParams.has('query'), false)
  })
  assert.equal(getFirstEntryContext('unknown'), undefined)
  assert.equal(getFirstEntryContext(undefined), undefined)
  const filtering = getFirstEntryContext('filtering')!
  assert.equal(filtering.description, 'Find Northstar orders that need review and total at least $1,000.')
  assert.deepEqual(filtering.featureBadges.map(feature => feature.label), ['Advanced filters', 'Quick search'])
})

test('fixed operational snapshot supports 120 → 24 → 6 → 2 and coherent geography', () => {
  const rows = createFirstEntryRows()
  assert.equal(rows.length, 120)
  assert.equal(new Set(rows.map(row => row.orderNumber)).size, 120)
  const review = rows.filter(row => REVIEW_STATUSES.some(status => status === row.status))
  const northstar = review.filter(row => row.customer.includes('Northstar'))
  assert.equal(review.length, 24)
  assert.equal(northstar.length, 6)
  assert.equal(northstar.filter(row => row.total >= 1000).length, 2)
  assert.equal(northstar.filter(row => row.status === 'Payment Hold').length, 2)
  const geography = { Lisbon: 'Europe', Berlin: 'Europe', Toronto: 'North America', Sydney: 'Asia Pacific' }
  for (const row of rows) {
    assert.equal(row.region, geography[row.city as keyof typeof geography])
    assert.ok(row.total > 0)
    assert.match(row.orderDate, /^2026-08-(1\d|2\d)$/)
  }
  rows[0].total = 0
  assert.notEqual(createFirstEntryRows()[0].total, 0)
})
