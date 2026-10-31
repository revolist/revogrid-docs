import { expect, test } from '@playwright/test'

test('Pivot Charts shows charts above the full-width report on desktop and narrow screens', async ({
  page,
}) => {
  await page.setViewportSize({ width: 2420, height: 1408 })
  await page.goto('/demo/pivot-charts')

  const report = page.locator('.dashboard-report')
  const charts = page.locator('.dashboard-charts')
  await expect(report).toBeVisible()
  await expect(charts).toBeVisible()
  await expect(page.locator('.dashboard-summary')).toContainText('filtered lines')
  await expect(page.locator('[data-testid="quarter-chart"] svg')).toBeVisible()
  await expect(
    page.locator('.dashboard-grid').getByRole('row', { name: /Australia/ }),
  ).toBeVisible()
  const desktopReport = await report.boundingBox()
  const desktopCharts = await charts.boundingBox()
  expect(desktopReport).not.toBeNull()
  expect(desktopCharts).not.toBeNull()
  expect(desktopCharts!.y + desktopCharts!.height).toBeLessThanOrEqual(desktopReport!.y)
  expect(Math.abs(desktopReport!.x - desktopCharts!.x)).toBeLessThanOrEqual(1)
  expect(Math.abs(desktopReport!.width - desktopCharts!.width)).toBeLessThanOrEqual(1)

  const comparisonHeading = page.getByRole('heading', { name: 'Country comparison' })
  await comparisonHeading.scrollIntoViewIfNeeded()
  const comparisonHeadingIsClear = await comparisonHeading.evaluate(heading => {
    const bounds = heading.getBoundingClientRect()
    const hit = document.elementFromPoint(bounds.left + 10, bounds.top + bounds.height / 2)
    return !!hit && !!heading.closest('.dashboard-card')?.contains(hit)
  })
  expect(comparisonHeadingIsClear).toBe(true)

  await page.setViewportSize({ width: 390, height: 844 })
  const narrowReport = await report.boundingBox()
  const narrowCharts = await charts.boundingBox()
  expect(narrowReport).not.toBeNull()
  expect(narrowCharts).not.toBeNull()
  expect(narrowCharts!.y + narrowCharts!.height).toBeLessThanOrEqual(narrowReport!.y)
  expect(narrowReport!.width).toBeLessThanOrEqual(390)
})
