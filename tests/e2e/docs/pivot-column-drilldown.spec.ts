import { expect, test } from '@playwright/test'

test('Sales Overview expands Year and Quarter independently after adding Year', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem('revogrid:pivot-showcase:v1')
    localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
  })
  await page.goto('/demo/pivot')
  await page.getByRole('tab', { name: 'Sales Overview' }).click()
  const grid = page.locator('.financial-pivot-showcase revo-grid').first()
  await expect(grid.getByRole('button', { name: 'Expand Q1', exact: true })).toBeVisible()
  // Apply the same config update emitted by the field configurator, preserving
  // the preset's collapse policy while inserting Year above Quarter and Month.
  await grid.evaluate((element: HTMLElement & { pivot?: Record<string, unknown> }) => {
    element.dispatchEvent(new CustomEvent('pivot-config-update', {
      detail: { ...element.pivot, columns: ['Year', 'Quarter', 'Month'] },
      bubbles: true,
    }))
  })
  await grid.getByRole('button', { name: 'Expand 2025', exact: true }).click()
  await expect(grid.getByRole('button', { name: 'Expand Q1', exact: true })).toBeVisible()
  await expect(grid.getByRole('button', { name: 'Collapse Q1', exact: true })).toHaveCount(0)
  await expect(grid.locator('.rgHeaderCell').filter({ hasText: 'January' })).toHaveCount(0)

  await grid.getByRole('button', { name: 'Expand Q1', exact: true }).click()
  await expect(grid.getByRole('button', { name: 'Collapse Q1', exact: true })).toBeVisible()
  await expect(grid.locator('.rgHeaderCell').filter({ hasText: 'January' }).first()).toBeVisible()
  await expect(grid.getByRole('button', { name: 'Expand Q2', exact: true })).toBeVisible()
  await expect(grid.locator('.rgHeaderCell').filter({ hasText: 'April' })).toHaveCount(0)

  await grid.getByRole('button', { name: 'Collapse 2025', exact: true }).click()
  await grid.getByRole('button', { name: 'Expand 2025', exact: true }).click()
  await expect(grid.getByRole('button', { name: 'Collapse Q1', exact: true })).toBeVisible()
  await expect(grid.getByRole('button', { name: 'Expand Q2', exact: true })).toBeVisible()
  await grid.getByRole('button', { name: 'Collapse Q1', exact: true }).click()
  await expect(grid.getByRole('button', { name: 'Expand Q1', exact: true })).toBeVisible()
  await expect(grid.locator('.rgHeaderCell').filter({ hasText: 'January' })).toHaveCount(0)
})
