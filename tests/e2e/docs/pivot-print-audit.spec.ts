import { expect, test } from '@playwright/test'

test('Product Performance prints display formats, labels and totals without changing raw exports', async ({ page }) => {
  await page.goto('/demo/pivot')
  await page.getByRole('tab', { name: 'Product Performance', exact: true }).click()
  const grid = page.locator('.financial-pivot-showcase revo-grid').first()
  await expect(grid.getByRole('columnheader').filter({ hasText: 'Grand Total Revenue' }).first()).toBeVisible()
  const result = await grid.evaluate(async (element: any) => {
    const plugins = await element.getPlugins()
    const pivot = plugins.find((plugin: any) => typeof plugin.buildPrintTable === 'function')
    return { html: pivot.buildPrintTable(), csv: pivot.exportCsv() }
  })
  expect(result.html).toContain('Grand Total')
  expect(result.html).toContain('Audio')
  expect(result.html).toContain('$7,776,899.28')
  expect(result.html).not.toMatch(/\d\.\d{3,}/)
  // CSV remains a numeric export rather than adopting print currency strings.
  expect(result.csv).not.toContain('$7,776,899.28')
  expect(result.csv).toMatch(/7776899\.28/)
})
