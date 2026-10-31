import { expect, test } from '@playwright/test'

test('expanded financial year identifies both measure columns', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem('revogrid:pivot-showcase:v1')
    localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
  })
  await page.goto('/demo/pivot-financial')
  await page.getByRole('tab', { name: 'Profit' }).click()

  await page.getByRole('button', { name: 'Expand 2024' }).first().click()
  const grid = page.locator('.financial-pivot-showcase revo-grid').first()
  const measureHeaders = grid.locator('revogr-header .header-rgRow.actual-rgRow .rgHeaderCell')
  const profit = measureHeaders.filter({ hasText: 'Gross Profit' }).first()
  const revenue = measureHeaders.filter({ hasText: 'Revenue' }).first()
  const year = grid.locator('revogr-header .rgHeaderCell').filter({
    has: page.getByRole('button', { name: 'Collapse 2024' }).first(),
  }).first()
  await expect(profit).toBeVisible()
  await expect(revenue).toBeVisible()
  await expect.poll(async () => {
    const [yearBox, profitBox, revenueBox] = await Promise.all([
      year.boundingBox(), profit.boundingBox(), revenue.boundingBox(),
    ])
    return !!(yearBox && profitBox && revenueBox &&
      profitBox.x >= yearBox.x &&
      revenueBox.x >= profitBox.x + profitBox.width &&
      revenueBox.x + revenueBox.width <= yearBox.x + yearBox.width + 1)
  }, { message: 'both measure headers should settle inside the expanded 2024 group' }).toBe(true)

  await page.getByRole('button', { name: 'Collapse 2024' }).first().click()
  await expect(page.getByRole('button', { name: 'Expand 2024' }).first()).toBeVisible()
})
