import assert from 'node:assert/strict'
import test from 'node:test'
import { hasAnalyticsConsent } from '../../../../.vitepress/theme/analyticsConsent'
import { readGaIdentity } from '../../../../.vitepress/theme/checkoutAnalytics'
import {
  classifyInterestScreen,
  publicScreenPath,
} from '../../../../.vitepress/theme/interestTaxonomy'
import { featureFromPreviewId } from '../../../../.vitepress/theme/interestAnalytics'

test('analytics requires an explicit consent, not the existence of old GA cookies', () => {
  assert.equal(hasAnalyticsConsent('_ga=GA1.1.123.456'), false)
  assert.equal(
    hasAnalyticsConsent('cookieyes-consent=consent:yes,analytics:no,advertisement:yes'),
    false,
  )
  assert.equal(
    hasAnalyticsConsent('cookieyes-consent=consent:yes,analytics:yes,advertisement:no'),
    true,
  )
  assert.equal(hasAnalyticsConsent('cookieyes-consent=%invalid'), false)
})
test('reads both GA session cookie formats and rejects malformed client IDs', () => {
  assert.deepEqual(readGaIdentity('_ga=GA1.1.123.456; _ga_894M8FYLZF=GS1.1.123456.1.0.0'), {
    client_id: '123.456',
    session_id: '123456',
  })
  assert.deepEqual(readGaIdentity('_ga=GA1.1.123.456; _ga_894M8FYLZF=GS2.1.s123456$o3$g1'), {
    client_id: '123.456',
    session_id: '123456',
  })
  assert.deepEqual(readGaIdentity('_ga=GA1.1.email.invalid'), { client_id: '', session_id: '' })
})
test('separates product interest, grid capabilities and generic screens', () => {
  assert.equal(classifyInterestScreen('/demo/pivot-financial').product_id, 'pivot')
  assert.equal(classifyInterestScreen('/blog/best-js-scheduler-in-2026').product_id, 'scheduler')
  assert.equal(classifyInterestScreen('/demo/row-master').feature_id, 'master-detail')
  assert.equal(classifyInterestScreen('/guide/row/master.pro').feature_id, 'master-detail')
  assert.equal(classifyInterestScreen('/demo/column-collapse').interest_category, 'grid_feature')
  assert.equal(classifyInterestScreen('/pricing').screen_type, 'pricing')
  assert.equal(publicScreenPath('/demo/row-master?email=private#secret'), '/demo/row-master')
  assert.equal(
    featureFromPreviewId('advanced-data-structures-hierarchical-data-view')?.id,
    'hierarchical-data-view',
  )
  assert.equal(featureFromPreviewId('column-collapse-expand-drill-down')?.id, 'column-drill-down')
})

test('acquisition captures campaign taxonomy and referrer domain without query or personal data', async () => {
  const { captureAcquisitionContext } =
    await import('../../../../.vitepress/theme/acquisitionContext')
  const location = {
    href: 'https://rv-grid.com/gantt?utm_source=google&utm_medium=cpc&utm_campaign=q4_gantt&email=private',
    search: '?utm_source=google&utm_medium=cpc&utm_campaign=q4_gantt&email=private',
    hostname: 'rv-grid.com',
  } as Location
  assert.deepEqual(
    captureAcquisitionContext(location, 'https://search.example/path?private=value'),
    {
      landing_page: '/gantt',
      acquisition_source: 'google',
      acquisition_medium: 'cpc',
      acquisition_campaign: 'q4_gantt',
      referrer_domain: 'search.example',
    },
  )
  assert.equal(
    captureAcquisitionContext(
      { ...location, search: '?utm_campaign=person@example.com' } as Location,
      '',
    ).acquisition_campaign,
    undefined,
  )
})
