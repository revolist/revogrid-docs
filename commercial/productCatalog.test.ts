import assert from 'node:assert/strict'
import test from 'node:test'
import { createStructuredDataHead } from '../.vitepress/configs/structuredData'
import {
  PRODUCT_CATALOG,
  SUMMER_SALE_CUTOFF,
  getDemoBadge,
  getFeature,
  getPlan,
  getPlanChain,
  getPricingDifferenceRows,
  getPricingEvaluationFacts,
  getProduct,
  planIncludesFeature,
  resolveCommercialFaqs,
  resolvePlanPrice,
} from './productCatalog'

test('resolves base and promotional prices at the UTC cutoff', () => {
  const beforeCutoff = resolvePlanPrice('pro-lite', '2026-08-31T23:59:59.999Z')
  const atCutoff = resolvePlanPrice('pro-lite', SUMMER_SALE_CUTOFF)

  assert.equal(beforeCutoff.year.USD, 149)
  assert.equal(beforeCutoff.year.EUR, 170)
  assert.equal(beforeCutoff.compareAtYear?.USD, 199)
  assert.equal(beforeCutoff.promotion?.priceValidUntil, '2026-08-31')
  assert.equal(atCutoff.year.USD, 199)
  assert.equal(atCutoff.year.EUR, 170)
  assert.equal(atCutoff.promotion, undefined)
})

test('resolves currencies and checkout destinations from the catalog', () => {
  const lite = resolvePlanPrice('pro-lite', SUMMER_SALE_CUTOFF)
  const advanced = resolvePlanPrice('pro-advanced', SUMMER_SALE_CUTOFF)

  assert.deepEqual(lite.year, { EUR: 170, USD: 199 })
  assert.deepEqual(advanced.year, { EUR: 430, USD: 499 })
  assert.equal(lite.link, getPlan('pro-lite').buyUrl)
  assert.equal(advanced.link, getPlan('pro-advanced').buyUrl)
})

test('preserves plan inheritance and feature ownership', () => {
  assert.deepEqual(getPlanChain('enterprise'), ['open-source', 'pro-lite', 'pro-advanced', 'enterprise'])
  assert.equal(planIncludesFeature('pro-lite', 'pivot'), false)
  assert.equal(planIncludesFeature('pro-advanced', 'pivot'), true)
  assert.equal(planIncludesFeature('enterprise', 'pivot'), true)
  assert.equal(planIncludesFeature('open-source', 'charts'), false)
})

test('propagates stable, beta, and preview-capable statuses', () => {
  for (const productId of ['pivot', 'gantt', 'scheduler', 'event-scheduler'] as const) {
    assert.equal(getProduct(productId).status, 'stable')
  }
  assert.equal(getFeature('collaborative-editing')?.status, 'beta')
  assert.equal(getFeature('revogrid-mcp')?.status, 'beta')

  const statuses: Array<'stable' | 'beta' | 'preview'> = ['stable', 'beta', 'preview']
  assert.deepEqual(statuses, ['stable', 'beta', 'preview'])
})

test('defines the approved private npm trial lifecycle', () => {
  for (const planId of ['pro-lite', 'pro-advanced'] as const) {
    const trial = getPlan(planId).trial
    assert.equal(trial.available, true)
    assert.equal(trial.durationDays, 14)
    assert.equal(trial.delivery, 'private-npm')
    assert.equal(trial.requestUrl, '/trial')
    assert.match(trial.note!, /boilerplate/i)
  }

  assert.equal(getPlan('open-source').trial.delivery, 'none')
  assert.equal(getPlan('enterprise').trial.delivery, 'sales-assisted')
})

test('generates commercial FAQs, demo badges, and pricing view facts', () => {
  const [trialFaq] = resolveCommercialFaqs(['trial'])
  const pivotBadge = getDemoBadge('pivot')
  const evaluation = getPricingEvaluationFacts()
  const differences = getPricingDifferenceRows()

  assert.match(trialFaq.a, /14-day trial/)
  assert.match(trialFaq.a, /boilerplate/)
  assert.deepEqual(pivotBadge, {
    label: 'Pivot Analytics',
    badge: 'Adv',
    className: 'pro-advanced',
    title: 'Pro Advanced',
    status: 'stable',
  })
  assert.equal(evaluation.options[0].heading, 'Start with the free core')
  assert.match(evaluation.options[0].description, /Free for commercial use/)
  assert.match(evaluation.options[0].description, /not a Pro trial/)
  assert.equal(evaluation.options[0].action.label, 'Explore open source')
  assert.equal(
    evaluation.options[1].description,
    'Test Pro functionality in your own project before purchasing. Access is provided on request.',
  )
  assert.equal(evaluation.options[1].action.label, 'Request Pro Trial')
  assert.equal(evaluation.options[1].action.href, '/trial')
  assert.match(evaluation.options[1].features[0], /14-day private npm/)
  assert.equal(differences.length, 5)
  assert.ok(differences.some((row) =>
    typeof row.feature !== 'string' && row.feature.text === 'Priority support'))
  assert.equal(differences.at(-1)?.enterprise.kind, 'included')
})

test('generates route-aware structured-data offers', () => {
  const head = createStructuredDataHead({
    siteUrl: 'https://rv-grid.com',
    relativePath: 'pivot/index.md',
    title: 'RevoGrid Pivot',
    faq: { items: resolveCommercialFaqs(['trial']) },
  })
  const softwareEntry = head.find(([, attrs]) => attrs?.id === 'software-application-json-ld')
  const faqEntry = head.find(([, attrs]) => attrs?.id === 'faq-json-ld')

  assert.ok(softwareEntry)
  assert.ok(faqEntry)

  const software = JSON.parse(String(softwareEntry[2]))
  assert.equal(software.name, 'RevoGrid Pivot')
  assert.deepEqual(software.offers.map((offer: { price: number, priceCurrency: string }) => ({
    price: offer.price,
    currency: offer.priceCurrency,
  })), [{ price: 499, currency: 'USD' }])
  assert.equal(software.offers[0].url, 'https://rv-grid.com/pricing')
})

test('keeps catalog object IDs aligned with their keys', () => {
  for (const [id, plan] of Object.entries(PRODUCT_CATALOG.plans)) assert.equal(plan.id, id)
  for (const [id, product] of Object.entries(PRODUCT_CATALOG.products)) assert.equal(product.id, id)
  for (const [id, demo] of Object.entries(PRODUCT_CATALOG.demos)) assert.equal(demo.id, id)
})
