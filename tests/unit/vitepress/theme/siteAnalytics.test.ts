import assert from 'node:assert/strict'
import test from 'node:test'
import {
  getAnalyticsExperimentVariant,
  resetSiteAnalyticsForTests,
  trackSiteAnalytics,
} from '../../../../.vitepress/theme/siteAnalytics'

const target = (search = '') => ({
  location: { search },
  dataLayer: [] as Array<Record<string, unknown>>,
}) as unknown as Window & { dataLayer: Array<Record<string, unknown>> }

test('writes safe Google Tag Manager dataLayer events only once per lifecycle key', () => {
  resetSiteAnalyticsForTests()
  const windowTarget = target()

  assert.equal(trackSiteAnalytics('demo_view', { demo_id: 'filtering' }, 'demo_view:filtering', windowTarget), true)
  assert.equal(trackSiteAnalytics('demo_view', { demo_id: 'filtering' }, 'demo_view:filtering', windowTarget), false)
  assert.deepEqual(windowTarget.dataLayer, [{ event: 'demo_view', demo_id: 'filtering' }])
})

test('keeps the declared event authoritative and drops undeclared or sensitive properties', () => {
  resetSiteAnalyticsForTests()
  const windowTarget = target()

  trackSiteAnalytics('demo_action', {
    event: 'overridden',
    demo_id: 'filtering',
    action_id: 'search',
    search_query: 'private query',
    email: 'person@example.com',
  }, 'safe-payload', windowTarget)

  assert.deepEqual(windowTarget.dataLayer, [{
    event: 'demo_action',
    demo_id: 'filtering',
    action_id: 'search',
  }])
})

test('accepts only a constrained experiment variant', () => {
  assert.equal(getAnalyticsExperimentVariant(target('?experiment_variant=pricing_a').location), 'pricing_a')
  assert.equal(getAnalyticsExperimentVariant(target('?experiment_variant=<email@example.com>').location), undefined)
})

test('exposes the same safe payload in explicit analytics debug mode', () => {
  resetSiteAnalyticsForTests()
  const windowTarget = target('?analytics_debug=1')
  const debug = console.debug
  const calls: unknown[][] = []
  console.debug = (...args: unknown[]) => calls.push(args)
  try {
    trackSiteAnalytics('trial_install_click', { placement: 'hero_install' }, 'trial-install', windowTarget)
  } finally {
    console.debug = debug
  }
  assert.deepEqual(calls, [[
    '[analytics]',
    JSON.stringify({ placement: 'hero_install', event: 'trial_install_click' }),
  ]])
})
