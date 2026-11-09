import { expect, test } from '@playwright/test'

const screenshotStyle = '.VPNav { visibility: hidden !important; }'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
})

test('landing embeds the Pivot table and linked charts', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => {
    if (!error.message.includes('CookieYes')) errors.push(error.message)
  })
  await page.goto('/pivot/')
  const workspace = page.locator('.pivot-product-workspace')
  const grid = workspace.locator('revo-grid')
  await expect(page.locator('.pivot-showcase')).toHaveAttribute('data-chart-stage', 'ready')
  await expect(grid.getByRole('row', { name: /Australia/ }).first()).toBeVisible()
  await expect(page.locator('.showcase-chart svg')).toHaveCount(3)
  await page
    .locator('#pivot-playground')
    .screenshot({ style: screenshotStyle, path: 'output/playwright/pivot-landing-report.png' })
  await page
    .locator('#pivot-charts')
    .screenshot({ style: screenshotStyle, path: 'output/playwright/pivot-landing-charts.png' })

  const before = await page
    .locator('[aria-label="Revenue share by quarter"] [role="button"]')
    .evaluateAll(nodes => nodes.map(node => node.getAttribute('aria-label')))
  // Exercise the public configuration event consumed by the shared workspace.
  await grid.evaluate(element => {
    element.dispatchEvent(
      new CustomEvent('pivot-config-update', {
        detail: {
          ...(element as HTMLRevoGridElement & { pivot: object }).pivot,
          filterSelections: { Year: [2024], Country: ['Canada'] },
        },
        bubbles: true,
      }),
    )
  })
  await expect(page.locator('.chart-context')).toContainText('2024')
  await expect(page.locator('.chart-context')).toContainText('Canada')
  await expect
    .poll(() =>
      page
        .locator('[aria-label="Revenue share by quarter"] [role="button"]')
        .evaluateAll(nodes => nodes.map(node => node.getAttribute('aria-label'))),
    )
    .not.toEqual(before)
  await expect(
    page.locator('[aria-label="Stacked revenue by country"] [role="button"]'),
  ).toHaveCount(4)
  await page.getByRole('switch', { name: 'Appearance' }).click()
  await expect(grid).toHaveAttribute('theme', 'darkCompact')
  await page
    .locator('#pivot-playground')
    .screenshot({ style: screenshotStyle, path: 'output/playwright/pivot-report-dark.png' })
  expect(errors).toEqual([])
})

test('real workspace and charts fit mobile and survive navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/pivot/')
  await expect(page.locator('.pivot-showcase')).toHaveAttribute('data-chart-stage', 'ready')
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth),
  ).toBeLessThanOrEqual(1)
  await page
    .locator('#pivot-playground')
    .screenshot({ style: screenshotStyle, path: 'output/playwright/pivot-report-mobile.png' })
  await page
    .locator('#pivot-charts')
    .screenshot({ style: screenshotStyle, path: 'output/playwright/pivot-landing-mobile.png' })
  await page.getByRole('link', { name: 'RevoGrid home', exact: true }).click()
  await page.goBack()
  await expect(page.locator('.pivot-showcase')).toHaveAttribute('data-chart-stage', 'ready')
  await expect(page.locator('.showcase-chart svg')).toHaveCount(3)
})
