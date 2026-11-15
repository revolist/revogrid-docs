import { expect, test } from '@playwright/test'

test('scheduler Table fills its workspace and exposes the grid configurator', async ({ page }) => {
  await page.goto('/demo/event-scheduler')
  await page.getByRole('tab', { name: 'Table', exact: true }).click()
  const grid = page.locator('revo-grid.event-scheduler-shift-week-table')
  await expect(grid).toBeVisible()
  await expect.poll(() => grid.evaluate(el => {
    const headers = [...el.querySelectorAll('[role="columnheader"]')]
    const first = headers[0]?.getBoundingClientRect()
    const last = headers.at(-1)?.getBoundingClientRect()
    return first && last ? (last.right - first.left) / el.clientWidth : 0
  })).toBeGreaterThan(0.95)
  const configurator = page.getByRole('region', { name: 'Grid configurator', exact: true })
  await expect(configurator).toBeVisible()
  await configurator.getByRole('button', { name: 'Columns (6)', exact: true }).click()
  await expect(configurator.getByRole('checkbox', { name: 'Show Assignee', exact: true })).toBeVisible()
  await configurator.getByRole('checkbox', { name: 'Show Assignee', exact: true }).uncheck()
  await expect(grid.getByRole('columnheader', { name: 'Assignee', exact: true })).toHaveCount(0)
  await page.getByRole('tab', { name: 'Resource', exact: true }).click()
  await expect(configurator).toHaveCount(0)
  await page.getByRole('tab', { name: 'Table', exact: true }).click()
  await expect(configurator).toHaveCount(1)
})
