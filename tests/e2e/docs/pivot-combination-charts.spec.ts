import { expect, test } from '@playwright/test'

test('main Pivot exposes combination charts without changing the report', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/demo/pivot')
  const grid = page.locator('.financial-pivot-grid-view revo-grid')
  await expect(page.getByRole('row', { name: /Australia/ }).first()).toBeVisible()
  const report = await grid.evaluate((element: any) => JSON.stringify({
    rows: element.pivot.rows, columns: element.pivot.columns,
    values: element.pivot.values, filterSelections: element.pivot.filterSelections,
  }))
  await page.getByRole('button', { name: 'Chart', exact: true }).click()
  const chart = page.locator('.financial-pivot-chart')
  const sidebar = chart.locator('.rv-pivot-chart-dialog__gallery-shell')
  const note = sidebar.getByRole('note')
  await expect(note).toBeVisible()
  await expect(note).toContainText('secondary axis')
  await note.getByRole('button', { name: 'Use combination chart', exact: true }).click()
  await expect(chart.locator('[data-pivot-chart-combination-mark="column"]').first()).toBeVisible()
  await expect(chart.locator('[data-pivot-chart-combination-line]').first()).toBeVisible()
  await expect(chart.getByRole('tab', { name: 'Customize', exact: true })).toHaveAttribute('aria-selected', 'true')
  await chart.getByRole('tab', { name: 'Chart', exact: true }).click()
  await expect(note).toBeVisible()
  await page.screenshot({ path: 'output/playwright/pivot-combination-desktop.png' })
  await page.getByRole('button', { name: 'Pivot', exact: true }).click()
  await expect(grid).toBeVisible()
  expect(await grid.evaluate((element: any) => JSON.stringify({
    rows: element.pivot.rows, columns: element.pivot.columns,
    values: element.pivot.values, filterSelections: element.pivot.filterSelections,
  }))).toBe(report)
  await page.getByRole('button', { name: 'Chart', exact: true }).click()
  await expect(sidebar.getByRole('note')).toHaveCount(1)
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(page.locator('.demo-nav')).not.toBeInViewport()
  const action = note.getByRole('button', { name: 'Use combination chart', exact: true })
  await action.scrollIntoViewIfNeeded()
  await expect(action).toBeVisible()
  await action.click({ trial: true })
  const box = await action.boundingBox()
  expect(box!.x).toBeGreaterThanOrEqual(0)
  expect(box!.x + box!.width).toBeLessThanOrEqual(390)
  await page.screenshot({ path: 'output/playwright/pivot-combination-mobile.png' })
})
