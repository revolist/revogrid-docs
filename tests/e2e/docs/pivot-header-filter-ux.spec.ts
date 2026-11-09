import { expect, test } from '@playwright/test'

test('financial Pivot keeps filters in menus instead of header search rows', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem('revogrid:pivot-showcase:v1')
    localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
  })
  await page.goto('/demo/pivot')
  const grid = page.locator('.financial-pivot-showcase revo-grid').first()

  for (const preset of ['Profitability', 'Sales Overview']) {
    await page.getByRole('tab', { name: preset }).click()
    await expect(grid.locator('revogr-header .rgHeaderCell').first()).toBeVisible()
    await expect(grid.locator('revogr-header input[type="text"]')).toHaveCount(0)

    const rows = grid.locator('revogr-header .rgHeaderCell').filter({ hasText: 'Rows' }).first()
    await rows.locator('.rv-filter:not(.filter-header-selection-trigger)').first().click()
    await expect(page.getByRole('dialog', { name: 'Filter… Rows' })).toBeVisible()
    await page.keyboard.press('Escape')

    const grandTotal = grid.locator('revogr-header .rgHeaderCell').filter({ hasText: 'Grand Total' }).last()
    await expect(grandTotal.locator('.rv-filter')).toHaveCount(0)
  }

  await page.getByRole('button', { name: 'Fields' }).click()
  await expect(page.getByRole('dialog', { name: 'Pivot fields' })).toBeVisible()
})
