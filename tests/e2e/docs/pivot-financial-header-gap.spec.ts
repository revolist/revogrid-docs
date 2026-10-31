import { expect, test } from '@playwright/test'

for (const width of [1280, 390]) {
  test(`financial analysis removes obsolete header tiers at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.addInitScript(() => {
      localStorage.removeItem('revogrid:pivot-showcase:v1')
      localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
    })
    await page.goto('/demo/pivot-financial')
    const grid = page.locator('.financial-pivot-showcase revo-grid').first()
    await expect(grid.locator('revogr-data .rgCell').first()).toBeVisible()

    for (const mode of ['Running total', 'Contribution', 'Ranking', 'Year over year', 'Running total', 'Profit', 'Ranking']) {
      await page.getByRole('tab', { name: mode, exact: true }).click()
      await expect(page.getByRole('tab', { name: mode, exact: true })).toHaveAttribute('aria-selected', 'true')
      if (mode === 'Running total') {
        await expect(grid.locator('revogr-header .rgHeaderCell').filter({ hasText: 'January' }).first()).toBeVisible()
      } else if (mode === 'Contribution' || mode === 'Ranking') {
        const measure = mode === 'Contribution' ? 'Profit share' : 'Profit rank'
        await expect(grid.locator('revogr-header .rgHeaderCell').filter({ hasText: measure }).first()).toBeVisible()
      } else if (mode === 'Profit') {
        await expect(grid.getByRole('button', { name: 'Expand 2024' }).first()).toBeVisible()
      }
      if (mode === 'Year over year') {
        await expect(grid.locator('revogr-header .rgHeaderCell').filter({ hasText: 'YoY change' }).first()).toBeVisible()
        continue
      }
      await expect.poll(() => grid.evaluate(element => {
        const header = element.querySelector('revogr-header')
        const leaf = header?.querySelector('.header-rgRow.actual-rgRow')
        if (!header || !leaf) return Infinity
        return leaf.getBoundingClientRect().top - header.getBoundingClientRect().top
      }), { message: `${mode} should start with its visible column headers` }).toBeLessThanOrEqual(1)
      if (mode === 'Running total') {
        await expect(grid.getByText('$43,590.43', { exact: true }).first()).toBeVisible()
      }
    }
  })
}
