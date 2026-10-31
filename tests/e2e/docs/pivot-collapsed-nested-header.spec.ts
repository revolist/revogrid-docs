import { expect, test } from '@playwright/test'

test('collapsed quarter headers use one row beneath an expanded year', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem('revogrid:pivot-showcase:v1')
    localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
  })
  await page.goto('/demo/pivot')
  await page.getByRole('tab', { name: 'Product Performance' }).click()
  await page.getByRole('button', { name: 'Expand 2025' }).first().click()

  const grid = page.locator('.financial-pivot-showcase revo-grid').first()
  const year = grid.locator('.rgHeaderCell').filter({
    has: page.getByRole('button', { name: 'Collapse 2025' }).first(),
  }).first()
  const quarter = grid.locator('.rgHeaderCell').filter({
    has: page.getByRole('button', { name: 'Expand Q1' }).first(),
  }).first()
  await expect(quarter).toBeVisible()
  await expect(quarter.locator('.column-icon')).toHaveCount(1)
  await expect(quarter.locator('.column-collapse-group-hint')).toHaveText('(2)')

  const [yearBox, quarterBox] = await Promise.all([year.boundingBox(), quarter.boundingBox()])
  expect(yearBox && quarterBox).toBeTruthy()
  expect(quarterBox!.height).toBeLessThanOrEqual(yearBox!.height + 1)

  await page.getByRole('button', { name: 'Expand Q1' }).first().click()
  await expect(page.getByRole('button', { name: 'Collapse Q1' }).first()).toBeVisible()
  await expect(grid.locator('.rgHeaderCell').filter({ hasText: 'Revenue (USD)' }).first()).toBeVisible()
  await page.getByRole('button', { name: 'Collapse Q1' }).first().click()
  await expect(quarter).toBeVisible()
  await expect.poll(async () => (await quarter.boundingBox())?.height).toBeLessThanOrEqual(yearBox!.height + 1)
})
