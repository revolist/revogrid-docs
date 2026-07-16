import {
  PRODUCT_CATALOG,
  getCatalogProFeatures,
  getPlan,
  type PlanId,
} from '../commercial/productCatalog'

const errors: string[] = []
const fail = (message: string) => errors.push(message)

const assertUnique = (label: string, ids: string[]) => {
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index)
  if (duplicates.length) fail(`${label} contains duplicate IDs: ${[...new Set(duplicates)].join(', ')}`)
  if (ids.some((id) => !id.trim())) fail(`${label} contains an empty ID`)
}

const planIds = Object.keys(PRODUCT_CATALOG.plans) as PlanId[]
assertUnique('Plans', planIds)
assertUnique('Features', PRODUCT_CATALOG.features.map(({ id }) => id))
assertUnique('Products', Object.keys(PRODUCT_CATALOG.products))
assertUnique('Demos', Object.keys(PRODUCT_CATALOG.demos))

for (const [key, plan] of Object.entries(PRODUCT_CATALOG.plans)) {
  if (plan.id !== key) fail(`Plan key "${key}" does not match id "${plan.id}"`)
  if (plan.minimumPlan && !planIds.includes(plan.minimumPlan)) {
    fail(`Plan "${plan.id}" inherits invalid plan "${plan.minimumPlan}"`)
  }
}

for (const feature of PRODUCT_CATALOG.features) {
  if (!planIds.includes(feature.minimumPlan)) {
    fail(`Feature "${feature.id}" references invalid plan "${feature.minimumPlan}"`)
  }
  if (!['stable', 'beta', 'preview'].includes(feature.status)) {
    fail(`Feature "${feature.id}" lacks a valid status`)
  }
}

for (const product of Object.values(PRODUCT_CATALOG.products)) {
  if (!planIds.includes(product.minimumPlan)) {
    fail(`Product "${product.id}" references invalid plan "${product.minimumPlan}"`)
  }
  if (product.featureId && !PRODUCT_CATALOG.features.some(({ id }) => id === product.featureId)) {
    fail(`Product "${product.id}" references missing feature "${product.featureId}"`)
  }
}

for (const demo of Object.values(PRODUCT_CATALOG.demos)) {
  if (!planIds.includes(demo.planId)) fail(`Demo "${demo.id}" references invalid plan "${demo.planId}"`)
  if (!['stable', 'beta', 'preview'].includes(demo.status)) fail(`Demo "${demo.id}" lacks a valid status`)
}

for (const planId of ['pro-lite', 'pro-advanced'] as const) {
  const plan = getPlan(planId)
  if (plan.yearlyPrice === 'custom' || !Number.isFinite(plan.yearlyPrice.EUR) || !Number.isFinite(plan.yearlyPrice.USD)) {
    fail(`Purchasable plan "${planId}" must define EUR and USD prices`)
  }
  if (!plan.buyUrl?.startsWith('https://buy.stripe.com/')) {
    fail(`Purchasable plan "${planId}" must define a Stripe checkout URL`)
  }
  if (plan.trial.durationDays !== 14
    || plan.trial.requestUrl !== PRODUCT_CATALOG.urls.trialRequest
    || plan.trial.delivery !== 'private-npm') {
    fail(`Trial-enabled plan "${planId}" must use the 14-day private npm trial`)
  }
}

const enterprise = getPlan('enterprise')
if (enterprise.trial.delivery !== 'sales-assisted' || enterprise.trial.requestUrl !== PRODUCT_CATALOG.urls.contactSales) {
  fail('Enterprise evaluation must route to sales')
}
if (getPlan('open-source').trial.available || getPlan('open-source').trial.delivery !== 'none') {
  fail('Open Source must not require a trial')
}

try {
  getCatalogProFeatures()
} catch (error) {
  fail(error instanceof Error ? error.message : String(error))
}

if (errors.length) {
  console.error(`Commercial catalog validation failed:\n${errors.map((error) => `- ${error}`).join('\n')}`)
  process.exit(1)
}

console.log(`Commercial catalog validation passed (${planIds.length} plans, ${PRODUCT_CATALOG.features.length} features, ${PRODUCT_CATALOG.demos ? Object.keys(PRODUCT_CATALOG.demos).length : 0} demos).`)
