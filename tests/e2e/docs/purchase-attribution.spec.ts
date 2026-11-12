import { expect, test } from '@playwright/test'

// Keep these application tests isolated from live GA4 and CookieYes state.
test.beforeEach(async ({ context }) => {
  await context.route('https://www.googletagmanager.com/**', route => route.abort())
})

const reference = 'rg_12345678-1234-4234-8234-123456789abc'
test('checkout links retain context before a new-tab click and drop identity when consent is revoked', async ({
  page,
  context,
}) => {
  const base = process.env.DOCS_E2E_BASE_URL || 'http://127.0.0.1:49321'
  await context.addCookies([
    { name: 'cookieyes-consent', value: 'consent:yes,analytics:yes', url: base },
    { name: '_ga', value: 'GA1.1.123.456', url: base },
    { name: '_ga_894M8FYLZF', value: 'GS2.1.s1794480000$o1$g1', url: base },
  ])
  const contexts: Record<string, unknown>[] = []
  await context.route('https://pro.rv-grid.com/analytics/checkout', async route => {
    contexts.push(route.request().postDataJSON())
    await route.fulfill({ json: { reference } })
  })
  await context.route('https://buy.stripe.com/**', route =>
    route.fulfill({ body: 'Checkout intercepted' }),
  )
  await page.goto(`${base}/pricing`, { waitUntil: 'domcontentloaded' })
  const buy = page.getByRole('link', { name: 'Buy Pro Lite', exact: true }).first()
  await expect(buy).toHaveAttribute('href', new RegExp(reference))
  // Explicit new-tab targets avoid platform-specific modifier behavior in headless browsers.
  await buy.evaluate(link => link.setAttribute('target', '_blank'))
  const popup = context.waitForEvent('page')
  await buy.click()
  const checkout = await popup
  expect(checkout.url()).toContain(reference)
  await expect(page).toHaveURL(/\/pricing$/)
  const events = await page.evaluate(() =>
    (window as any).dataLayer.filter((e: any) => e.event === 'checkout_start'),
  )
  expect(events).toHaveLength(1)
  expect(events[0]).toMatchObject({
    source_page: '/pricing',
    screen_type: 'pricing',
    plan: 'pro-lite',
  })
  expect(contexts[0]).toMatchObject({
    source_page: '/pricing',
    client_id: '123.456',
    session_id: '1794480000',
  })
  await context.addCookies([
    { name: 'cookieyes-consent', value: 'consent:yes,analytics:no', url: base },
  ])
  await page.evaluate(() => document.dispatchEvent(new Event('cookieyes_consent_update')))
  await expect(buy).not.toHaveAttribute('href', /client_reference_id/)
  await checkout.close()
})

test('analytics failure preserves checkout and retains available GA session identity', async ({
  page,
  context,
}) => {
  const base = process.env.DOCS_E2E_BASE_URL || 'http://127.0.0.1:49321'
  await context.addCookies([
    { name: 'cookieyes-consent', value: 'consent:yes,analytics:yes', url: base },
    { name: '_ga', value: 'GA1.1.123.456', url: base },
    { name: '_ga_894M8FYLZF', value: 'GS1.1.1794480000.1.0.0', url: base },
  ])
  await context.route('https://pro.rv-grid.com/analytics/checkout', route =>
    route.fulfill({ status: 503 }),
  )
  await page.goto(`${base}/pricing`, { waitUntil: 'domcontentloaded' })
  await expect(
    page.getByRole('link', { name: 'Buy Pro Lite', exact: true }).first(),
  ).toHaveAttribute('href', /client_reference_id=rg2_123_456_1794480000/)
})

test('master-detail requests and completed column expansion use canonical feature IDs once per visit', async ({
  page,
  context,
}) => {
  const base = process.env.DOCS_E2E_BASE_URL || 'http://127.0.0.1:49321'
  await context.addCookies([
    { name: 'cookieyes-consent', value: 'consent:yes,analytics:yes', url: base },
  ])
  await page.goto(`${base}/demo/row-master`, { waitUntil: 'domcontentloaded' })
  const master = page.locator('revo-grid button.expand-button').first()
  await expect(master).toBeVisible()
  await master.click()
  await master.click()
  let events = await page.evaluate(() =>
    (window as any).dataLayer.filter(
      (e: any) => e.event === 'feature_interest' && e.feature_id === 'master-detail',
    ),
  )
  expect(events).toHaveLength(1)
  expect(events[0]).toMatchObject({
    interest_category: 'grid_feature',
    interest_stage: 'interact',
    action_status: 'requested',
  })
  expect(events[0]).not.toHaveProperty('detail')
  await page.goto(`${base}/demo/column-collapse`, { waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: 'Expand Personal Information', exact: true }).click()
  events = await page.evaluate(() =>
    (window as any).dataLayer.filter(
      (e: any) => e.event === 'feature_interest' && e.action_id === 'expand_columns',
    ),
  )
  expect(events).toHaveLength(1)
  expect(events[0]).toMatchObject({ feature_id: 'column-drill-down', action_status: 'completed' })
})
