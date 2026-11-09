import { expect, test } from '@playwright/test'

// The Fields editor publishes partial configurations through this public event.
async function configure(page: import('@playwright/test').Page, detail: Record<string, unknown>) {
  await page.locator('.pivot-dashboard revo-grid').evaluate((grid, next) => {
    grid.dispatchEvent(new CustomEvent('pivot-config-update', { detail: next, bubbles: true }))
  }, detail)
}

test('Charts controls reflect cleared and custom Fields filters and preserve unrelated configuration', async ({ page }) => {
  await page.goto('/demo/pivot-charts')
  await expect(page.locator('.pivot-dashboard')).toHaveAttribute('data-chart-stage', 'ready')
  const year = page.getByRole('combobox', { name: 'Year', exact: true })
  const brand = page.getByRole('combobox', { name: 'Brand', exact: true })
  const summary = page.locator('.dashboard-summary')

  await configure(page, { filterSelections: {} })
  await expect(year).toHaveAttribute('data-value', '')
  await expect(summary).toContainText('all years · all brands')
  await configure(page, { rows: ['Quarter'], columns: ['Category'], filterSelections: {
    Year: [2024, 2025], Brand: { mode: 'exclude', values: ['Contoso'] }, Country: ['Australia'],
  } })
  await expect(year).toHaveAttribute('data-value', '__custom__')
  await expect(brand).toHaveAttribute('data-value', '__custom__')
  await expect(summary).toContainText('2024, 2025 · excluding Contoso')
  await expect(page.locator('[aria-label="Quarterly revenue chart"]')).toContainText('Report series side by side for each report row.')
  await expect(page.getByRole('radio', { name: 'Countries', exact: true })).not.toBeChecked()
  await expect(page.getByRole('radio', { name: 'Categories', exact: true })).not.toBeChecked()
  await year.click()
  await page.getByRole('option', { name: '2024', exact: true }).click()
  await expect.poll(() => page.locator('.pivot-dashboard revo-grid').evaluate((element: any) => ({
    rows: element.pivot.rows, columns: element.pivot.columns, filters: element.pivot.filterSelections,
  }))).toEqual({ rows: ['Quarter'], columns: ['Category'], filters: {
    Year: [2024], Brand: { mode: 'exclude', values: ['Contoso'] }, Country: ['Australia'],
  } })
  await brand.click()
  await page.getByRole('option', { name: 'Fabrikam', exact: true }).click()
  await expect(summary).toContainText('2024 · Fabrikam')
  await year.click()
  await page.getByRole('option', { name: 'All years', exact: true }).click()
  await expect(summary).toContainText('all years · Fabrikam')
  await expect.poll(() => page.locator('.pivot-dashboard revo-grid').evaluate((element: any) => element.pivot.filterSelections.Year)).toBeUndefined()
  await configure(page, { filterSelections: { Year: { mode: 'exclude', values: [2024] }, Brand: ['Contoso', 'Fabrikam'] } })
  await expect(summary).toContainText('excluding 2024 · Contoso, Fabrikam')
  await page.getByRole('radio', { name: 'Countries', exact: true }).click()
  await expect.poll(() => page.locator('.pivot-dashboard revo-grid').evaluate((element: any) => element.pivot.filterSelections)).toEqual({ Year: { mode: 'exclude', values: [2024] }, Brand: ['Contoso', 'Fabrikam'] })
})
