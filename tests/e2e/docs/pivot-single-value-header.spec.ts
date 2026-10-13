import { expect, test } from '@playwright/test'

test('financial Pivot merges a single value into month headers', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem('revogrid:pivot-showcase:v1')
    localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
  })
  await page.goto('/demo/pivot')
  const grid = page.locator('.financial-pivot-showcase revo-grid').first()
  await page.getByRole('button', { name: 'Expand Q1' }).first().click()

  await expect(grid.locator('.header-rgRow.actual-rgRow').filter({ hasText: 'January' })).toHaveCount(1)
  await expect(page.getByLabel('Pivot summary')).toContainText('Revenue (USD)')
  await expect(grid.getByText('$43,590.43', { exact: true }).first()).toBeVisible()

  await page.getByRole('tab', { name: 'Product Performance' }).click()
  await expect(grid.locator('revogr-header .rgHeaderCell').filter({ hasText: 'Revenue (USD)' }).first()).toBeVisible()
  await expect(grid.locator('revogr-header .rgHeaderCell').filter({ hasText: 'Quantity' }).first()).toBeVisible()
})
