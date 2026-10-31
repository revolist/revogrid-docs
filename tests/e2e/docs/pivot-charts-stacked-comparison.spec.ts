import { expect, test } from '@playwright/test'

test('Pivot Charts compares quarterly values and stacks the same values into annual totals', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto('/demo/pivot-charts')

  const quarter = page.locator('[data-testid="quarter-chart"]')
  const comparison = page.locator('[data-testid="comparison-chart"]')
  const marks = comparison.locator('[data-pivot-chart-datum][data-category-index="0"]')
  await expect(quarter.getByRole('button', { name: /United States, Q1.*\$1,051,956\.10/ })).toBeVisible()
  await expect(marks).toHaveCount(4)
  await expect(page.getByRole('row', { name: /United States.*\$3,399,757\.52/ })).toBeVisible()

  const segments = await marks.evaluateAll(elements => elements.map(element => {
    const rect = element as SVGRectElement
    return { x: Number(rect.getAttribute('x')), y: Number(rect.getAttribute('y')), width: Number(rect.getAttribute('width')) }
  }))
  expect(new Set(segments.map(segment => segment.y)).size).toBe(1)
  for (let index = 1; index < segments.length; index += 1) {
    expect(Math.abs(segments[index].x - segments[index - 1].x - segments[index - 1].width)).toBeLessThan(0.01)
  }

  await page.getByRole('combobox', { name: 'Year' }).selectOption('2024')
  await page.getByRole('combobox', { name: 'Brand' }).selectOption('Contoso')
  await page.getByRole('radio', { name: 'Categories' }).check()
  await expect(page.getByRole('heading', { name: 'Quarterly revenue by category' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Category comparison' })).toBeVisible()
  await expect(page.locator('.dashboard-summary')).toContainText('2024 · Contoso')
  await expect(comparison.locator('[data-pivot-chart-datum]').first()).toBeVisible()
  await expect(page.locator('.pivot-dashboard .pivot-summary-panel')).toHaveCount(0)

  await page.setViewportSize({ width: 390, height: 844 })
  const mobileChart = page.locator('[data-testid="quarter-chart"] [data-pivot-chart-category-scroll] > div')
  await expect(mobileChart).toBeVisible()
  const overflow = await mobileChart.evaluate(element => element.scrollWidth - element.clientWidth)
  expect(overflow).toBeGreaterThan(200)
  await mobileChart.press('ArrowRight')
  await expect.poll(() => mobileChart.evaluate(element => element.scrollLeft)).toBeGreaterThan(0)
})

test('Pivot Charts cards and controls follow the docs appearance switch', async ({ page }) => {
  await page.goto('/demo/pivot-charts')
  const appearance = page.getByRole('switch', { name: 'Appearance' })
  if (!(await page.locator('html').evaluate(element => element.classList.contains('dark')))) await appearance.click()
  const dashboard = page.locator('.pivot-dashboard')
  await expect(dashboard).toHaveClass(/is-dark/)
  const card = dashboard.locator('.dashboard-charts .dashboard-card').first()
  const select = dashboard.getByRole('combobox', { name: 'Year' })
  expect(await card.evaluate(element => getComputedStyle(element).backgroundColor)).toBe('rgb(36, 36, 36)')
  expect(await select.evaluate(element => getComputedStyle(element).color)).toBe('rgb(232, 232, 232)')
  await expect(dashboard.locator('[data-testid="comparison-chart"] svg')).toBeVisible()
  await appearance.click()
  await expect(dashboard).not.toHaveClass(/is-dark/)
})
