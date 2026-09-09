import { expect, test } from '@playwright/test'

const docsErrors = (page: import('@playwright/test').Page) => {
  const errors: string[] = []
  page.on('pageerror', error => {
    // CookieYes rejects localhost URLs before the demo code runs. It is an
    // external banner error, not a docs-demo runtime failure.
    if (error.message !== 'Script error.') errors.push(error.message)
  })
  return errors
}

test.describe('docs planning, Gantt and scheduler scenarios', () => {
  test('PLAN-01/02: workspace loads its filtered model and keeps search results across views', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/')

    const workspace = page.locator('.planning-demo')
    const footer = workspace.locator('.planning-demo__footer')
    await expect(workspace.locator('.planning-demo__grid')).toBeVisible()
    await expect(footer).toContainText('100 of 100 tasks')

    const search = page.getByRole('searchbox', { name: 'Quick search tasks' })
    await search.fill('Maya')
    await expect(footer).toContainText('20 of 100 tasks')

    for (const name of ['Kanban', 'Gantt', 'Scheduler', 'Calendar'] as const) {
      const tab = page.getByRole('tab', { name, exact: true })
      await tab.click()
      await expect(tab).toHaveAttribute('aria-selected', 'true')
      await expect(workspace.locator('revo-grid')).toBeVisible()
      await expect(footer).toContainText('20 of 100 tasks')
    }

    await page.getByRole('tab', { name: 'Grid', exact: true }).click()
    await search.fill('zz-no-task-qa-2026')
    await expect(footer).toContainText('0 of 100 tasks')
    await search.fill('')
    await expect(footer).toContainText('100 of 100 tasks')
    expect(errors).toEqual([])
  })

  test('GANTT-01/02: showcase mounts, switches timeline scale, and collapses a summary', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/gantt')

    const grid = page.locator('revo-grid.gantt-showcase-grid')
    await expect(grid).toBeVisible()
    await expect(grid.getByText('Launch SaaS Product', { exact: true })).toBeVisible()
    await expect(grid.locator('.gantt-bar').first()).toBeVisible()

    const month = page.getByRole('button', { name: 'Month', exact: true })
    await month.click()
    await expect(month).toHaveAttribute('aria-pressed', 'true')
    await page.getByRole('button', { name: 'Week', exact: true }).click()

    const testPlan = grid.locator('.gantt-showcase-task-name', { hasText: 'Test Plan' })
    await expect(
      grid.locator('.gantt-showcase-task-name', { hasText: 'Launch SaaS Product' }),
    ).toBeVisible()
    await expect(testPlan).toBeVisible()
    expect(errors).toEqual([])
  })

  test('GANTT10K-01/02: 10K Gantt mounts and virtual scrolling renders later task identities', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/gantt-big-data')

    const grid = page.locator('revo-grid.gantt-big-data-grid')
    await expect(grid).toBeVisible({ timeout: 20_000 })
    await expect(grid.getByText('Task 1', { exact: true })).toBeVisible({ timeout: 20_000 })
    await expect(grid.locator('.gantt-bar').first()).toBeVisible()

    await grid.getByText('Task 1', { exact: true }).click()
    await page.keyboard.press('PageDown')
    await expect.poll(async () => grid.locator('.rgRow').allTextContents()).not.toContain('Task 1')
    await expect(grid.locator('.gantt-bar').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('GANTT20Y-01/03: twenty-year Gantt keeps the task pane while its timeline moves', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/gantt-horizontal-big-data')

    const grid = page.locator('revo-grid.gantt-horizontal-big-data-grid')
    await expect(grid).toBeVisible({ timeout: 20_000 })
    await expect(grid.getByText('Program task 001', { exact: true })).toBeVisible({
      timeout: 20_000,
    })
    await expect(grid.locator('.gantt-bar').first()).toBeVisible()

    const timeline = grid.locator('.gantt-timeline').first()
    await timeline.hover()
    await page.mouse.wheel(4_000, 0)
    await expect(grid.getByText('Program task 001', { exact: true })).toBeVisible()
    await expect
      .poll(() => grid.locator('.gantt-timeline-header').allTextContents())
      .not.toEqual([])
    expect(errors).toEqual([])
  })

  test('SCHED-01/02/03: scheduler workspaces and period controls render current data', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/event-scheduler')

    const workspaces = page.getByRole('tablist', { name: 'Scheduler workspace' })
    await expect(workspaces).toBeVisible()
    await expect(page.getByRole('group', { name: 'Scheduler view' })).toBeVisible()
    await expect(page.getByRole('combobox', { name: 'Calendar preset' })).toHaveValue('weekday')
    await expect(page.locator('revo-grid.event-scheduler-shift-week-grid')).toBeVisible()

    const resource = page.getByRole('tab', { name: 'Resource', exact: true })
    await resource.click()
    await expect(resource).toHaveAttribute('aria-selected', 'true')
    await expect(page.getByText('Jamie Chen', { exact: true })).toBeVisible()

    const table = page.getByRole('tab', { name: 'Table', exact: true })
    await table.click()
    await expect(table).toHaveAttribute('aria-selected', 'true')
    await expect(page.locator('revo-grid.event-scheduler-shift-week-table')).toBeVisible()
    await expect(page.getByText('Onboarding', { exact: true })).toBeVisible()

    const calendar = page.getByRole('tab', { name: 'Calendar', exact: true })
    await calendar.click()
    await expect(calendar).toHaveAttribute('aria-selected', 'true')
    await page.getByRole('button', { name: 'Month', exact: true }).click()
    await expect(page.getByRole('button', { name: 'Month', exact: true })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    await page.getByRole('button', { name: 'Today', exact: true }).click()
    await expect(page.locator('revo-grid.event-scheduler-shift-week-grid')).toBeVisible()
    expect(errors).toEqual([])
  })
})
