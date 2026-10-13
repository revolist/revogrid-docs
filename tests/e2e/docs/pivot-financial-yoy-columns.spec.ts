import { expect, test } from '@playwright/test'

test('year over year shows both years of revenue and the 2025 change', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem('revogrid:pivot-showcase:v1')
    localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
  })
  await page.goto('/demo/pivot-financial')
  await page.getByRole('tab', { name: 'Year over year' }).click()

  const grid = page.locator('.financial-pivot-showcase revo-grid').first()
  await expect(grid.getByRole('columnheader', { name: 'Product', exact: true })).toHaveCSS('width', '275px')
  const changeHeader = grid.getByRole('columnheader', { name: 'YoY change', exact: true }).first()
  await expect(changeHeader).toBeVisible()
  await expect.poll(() => changeHeader.evaluate(element => {
    const label = element.querySelector('.header-content') || element
    return label.scrollWidth - label.clientWidth
  })).toBeLessThanOrEqual(1)

  await expect(grid.locator('revogr-header .rgHeaderCell').filter({ hasText: '2024' }).first()).toBeVisible()
  await expect(grid.locator('revogr-header .rgHeaderCell').filter({ hasText: '2025' }).first()).toBeVisible()
  await expect(grid.locator('revogr-data .rgCell').filter({ hasText: '$21,400.50' }).first()).toBeVisible()
  await expect(grid.locator('revogr-data .rgCell').filter({ hasText: '$6,072.00' }).first()).toBeVisible()
  await expect(grid.locator('revogr-data .rgCell').filter({ hasText: '-72%' }).first()).toBeVisible()
})
