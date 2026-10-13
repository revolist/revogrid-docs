import { expect, test } from '@playwright/test'

test('Pivot support panels fill the workspace with scrolling inside the tables', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 })
  await page.goto('/demo/pivot-operations')

  const workspace = page.locator('.demo-page-workspace')
  const demo = page.locator('.operations-demo')
  const panels = demo.locator('.workspace')
  const pivotHost = demo.locator('.pivot-panel > :is(.pivot-grid, .pivot-plugin)')
  const pivotGrid = demo.locator('.pivot-panel revo-grid')
  const detailGrid = demo.locator('revo-grid.ticket-grid')
  await expect(pivotGrid).toBeVisible()
  await expect(detailGrid).toBeVisible()

  expect(await workspace.evaluate(element => element.scrollHeight - element.clientHeight)).toBeLessThanOrEqual(2)
  expect(await pivotHost.evaluate(element => element.scrollWidth - element.clientWidth)).toBeLessThanOrEqual(2)
  expect(await pivotHost.evaluate(element => element.scrollHeight - element.clientHeight)).toBeLessThanOrEqual(2)

  const [panelBox, pivotBox, detailBox, gridBox, pivotGridBox, pivotHostBox, controlsBox, demoBox] = await Promise.all([
    panels.boundingBox(),
    demo.locator('.pivot-panel').boundingBox(),
    demo.locator('.detail-panel').boundingBox(),
    detailGrid.boundingBox(),
    pivotGrid.boundingBox(),
    pivotHost.boundingBox(),
    demo.locator('.controls').boundingBox(),
    demo.boundingBox(),
  ])
  expect(Math.abs(controlsBox!.width - demoBox!.width)).toBeLessThanOrEqual(2)
  expect(Math.abs(pivotBox!.height - detailBox!.height)).toBeLessThanOrEqual(2)
  expect(Math.abs(pivotBox!.y + pivotBox!.height - panelBox!.y - panelBox!.height)).toBeLessThanOrEqual(2)
  expect(Math.abs(pivotGridBox!.width - pivotHostBox!.width)).toBeLessThanOrEqual(2)
  expect(Math.abs(gridBox!.width - detailBox!.width)).toBeLessThanOrEqual(2)
  expect(gridBox!.height).toBeGreaterThan(400)
  expect(gridBox!.height).toBeLessThan(detailBox!.height)
  expect(await detailGrid.locator('.vertical-inner').evaluate(element => element.scrollHeight - element.clientHeight)).toBeGreaterThan(0)
})

test('support scope, focused-cell records, paging, and reset stay in sync', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 1000 })
  await page.goto('/demo/pivot-operations')
  const demo = page.locator('.operations-demo')

  await expect(demo.locator('.detail-page-info')).toHaveText('Showing 1–15 of 480')
  await demo.getByLabel('Team').selectOption('Platform')
  await demo.getByLabel('Priority').selectOption('Critical')
  await expect(demo.locator('.detail-page-info')).toHaveText('Showing 1–15 of 40')

  await demo.locator('.pivot-panel revo-grid').getByText('40', { exact: true }).first().click()
  const inspect = demo.getByRole('button', { name: 'Inspect focused cell' })
  await expect(inspect).toBeEnabled()
  await inspect.click()
  await expect(demo.locator('.detail-scope')).toContainText('Platform · Critical')
  await demo.getByRole('button', { name: 'Next', exact: true }).click()
  await expect(demo.locator('.detail-page-info')).toHaveText('Showing 16–30 of 40')
  await demo.getByRole('button', { name: 'Show selected scope' }).click()
  await expect(demo.locator('.detail-page-info')).toHaveText('Showing 1–15 of 40')

  await demo.getByRole('button', { name: 'Reset scope' }).click()
  await expect(demo.locator('.detail-page-info')).toHaveText('Showing 1–15 of 480')
})

test('mobile workspace scrolls to the ticket records without page-level horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/demo/pivot-operations')
  const workspace = page.locator('.demo-page-workspace')
  const details = page.locator('.operations-demo .detail-panel')
  await expect(details).toBeVisible()
  expect(await workspace.evaluate(element => element.scrollHeight > element.clientHeight)).toBe(true)
  await details.scrollIntoViewIfNeeded()
  expect(await workspace.evaluate(element => element.scrollTop)).toBeGreaterThan(0)
  expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0)
})

test('average and breach value cells drill into their contributing records', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 1000 })
  await page.goto('/demo/pivot-operations')
  const demo = page.locator('.operations-demo')
  await demo.getByLabel('Team').selectOption('Platform')
  await demo.getByLabel('Priority').selectOption('Critical')
  const grid = demo.locator('.pivot-panel revo-grid')

  // 2,940 resolution hours / 36 resolved tickets; four open tickets are excluded.
  await grid.getByText('81.67', { exact: true }).first().click()
  await demo.getByRole('button', { name: 'Inspect focused cell' }).click()
  await expect(demo.locator('.detail-scope')).toContainText('Platform · Critical · Resolution Hours')
  await expect(demo.locator('.detail-page-info')).toHaveText('Showing 1–15 of 36')
  await expect(demo.locator('.detail-description')).toContainText('Resolved tickets')

  await demo.getByRole('button', { name: 'Show selected scope' }).click()
  await grid.getByText('36', { exact: true }).first().click()
  await demo.getByRole('button', { name: 'Inspect focused cell' }).click()
  await expect(demo.locator('.detail-scope')).toContainText('Platform · Critical · SLA Breach Count')
  await expect(demo.locator('.detail-page-info')).toHaveText('Showing 1–15 of 36')
  await expect(demo.locator('.detail-description')).toContainText('SLA breach count')
})

test('Operations panels and both grids follow docs theme changes', async ({ page }) => {
  await page.goto('/demo/pivot-operations')
  const demo = page.locator('.operations-demo')
  const grids = demo.locator('revo-grid')
  await page.evaluate(() => {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
    document.documentElement.dataset.theme = 'dark'
  })
  await expect(demo).toHaveClass(/is-dark/)
  await expect(grids.first()).toHaveJSProperty('theme', 'darkCompact')
  await expect(grids.last()).toHaveJSProperty('theme', 'darkCompact')
  expect(await demo.locator('.pivot-panel').evaluate(element => getComputedStyle(element).backgroundColor)).toBe('rgba(0, 0, 0, 0)')

  await page.evaluate(() => {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    document.documentElement.dataset.theme = 'light'
  })
  await expect(demo).not.toHaveClass(/is-dark/)
  await expect(grids.first()).toHaveJSProperty('theme', 'compact')
  await expect(grids.last()).toHaveJSProperty('theme', 'compact')
  expect(await demo.locator('.pivot-panel').evaluate(element => getComputedStyle(element).backgroundColor)).toBe('rgba(0, 0, 0, 0)')
})
