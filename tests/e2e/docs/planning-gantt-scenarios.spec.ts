import { expect, test } from '@playwright/test'

const docsErrors = (page: import('@playwright/test').Page) => {
  const errors: string[] = []
  page.on('pageerror', error => {
    // CookieYes rejects localhost URLs before the demo code runs. It is an
    // external banner error, not a docs-demo runtime failure.
    if (
      error.message !== 'Script error.' &&
      !error.message.includes('Looks like your website URL has changed.')
    ) {
      errors.push(error.message)
    }
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
    const gridStage = workspace.locator('.planning-demo__grid-stage')
    await expect
      .poll(() => gridStage.evaluate(element => element.clientHeight))
      .toBeGreaterThan(120)
    await expect(workspace.getByText('API integration', { exact: true })).toBeVisible({
      timeout: 15_000,
    })
    await expect(footer).toContainText('100 of 100 tasks')

    await page.getByRole('button', { name: 'Active tasks', exact: true }).click()
    await expect(footer).toContainText('60 of 100 tasks')
    await expect(workspace.getByText('Define requirements', { exact: true })).toHaveCount(0)
    await page.getByRole('button', { name: 'Reset', exact: true }).click()
    await expect(footer).toContainText('100 of 100 tasks')
    await expect(workspace.getByText('Define requirements', { exact: true })).toBeVisible()

    const search = page.getByRole('searchbox', { name: 'Quick search tasks' })
    await search.fill('Maya')
    await expect(footer).toContainText('20 of 100 tasks')

    for (const name of ['kanban', 'gantt', 'scheduler', 'calendar'] as const) {
      const tab = page.getByRole('tab', { name, exact: true })
      await tab.click()
      await expect(tab).toHaveAttribute('aria-selected', 'true')
      await expect(workspace.locator('revo-grid:visible')).toBeVisible()
      await expect(footer).toContainText('20 of 100 tasks')
    }

    await page.getByRole('tab', { name: 'grid', exact: true }).click()
    await search.fill('zz-no-task-qa-2026')
    await expect(footer).toContainText('0 of 100 tasks')
    await search.fill('')
    await expect(footer).toContainText('100 of 100 tasks')
    expect(errors).toEqual([])
  })

  test('PLAN-04/09: selection indicators, quick filtering, and fullscreen are reversible', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/')

    const workspace = page.locator('.planning-demo')
    const footer = workspace.locator('.planning-demo__footer')
    const selection = workspace.locator('.row-select-checkbox')
    await expect(selection.nth(1)).toBeVisible()
    await selection.nth(1).click()
    await expect(footer).toContainText('1 selected')

    const search = page.getByRole('searchbox', { name: 'Quick search tasks' })
    await search.fill('Maya')
    await expect(footer).toContainText('20 of 100 tasks')
    await search.fill('')
    await expect(footer).toContainText('100 of 100 tasks')

    const fullscreen = page.getByRole('button', { name: 'Full screen', exact: true })
    await fullscreen.click()
    await expect(page.locator('.planning-demo:fullscreen')).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.locator('.planning-demo:fullscreen')).toHaveCount(0)
    expect(errors).toEqual([])
  })

  test('PLAN-03: a committed task-name edit follows the stable task identity into Kanban', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/')

    const workspace = page.locator('.planning-demo')
    const search = page.getByRole('searchbox', { name: 'Quick search tasks' })
    await search.fill('API integration')
    const task = workspace.getByRole('gridcell', { name: 'API integration', exact: true })
    await expect(task).toBeVisible()
    await task.dblclick()
    const editor = workspace.getByRole('textbox')
    await expect(editor).toBeVisible()
    await editor.fill('API integration QA')
    await editor.press('Enter')
    await expect(workspace.getByText('API integration QA', { exact: true })).toBeVisible()

    await page.getByRole('tab', { name: 'kanban', exact: true }).click()
    const card = workspace.locator('[data-kanban-card-id="task-003"]')
    await expect(card).toContainText('API integration QA')
    await expect(card).toContainText('Noah')

    await page.getByRole('button', { name: 'Reset', exact: true }).click()
    await page.getByRole('tab', { name: 'grid', exact: true }).click()
    await expect(workspace.getByText('API integration', { exact: true })).toBeVisible()
    await expect(workspace.getByText('API integration QA', { exact: true })).toHaveCount(0)
    expect(errors).toEqual([])
  })

  test('PLAN-06: moving a Kanban card changes the same task status in Grid', async ({ page }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/')

    const workspace = page.locator('.planning-demo')
    await page.getByRole('searchbox', { name: 'Quick search tasks' }).fill('API integration')
    await page.getByRole('tab', { name: 'kanban', exact: true }).click()
    const card = workspace.locator('[data-kanban-card-id="task-003"]')
    const blocked = workspace.locator('[data-kanban-stack][aria-label="Blocked, Cards"]')
    await expect(card).toBeVisible()
    await expect(blocked).toBeVisible()
    await card.dragTo(blocked)
    await expect(blocked.locator('[data-kanban-card-id="task-003"]')).toBeVisible()

    await page.getByRole('tab', { name: 'grid', exact: true }).click()
    const taskRow = workspace.locator('.rgRow').filter({ hasText: 'API integration' })
    await expect(taskRow).toBeVisible()
    await expect(workspace.getByText('Blocked', { exact: true })).toBeVisible()
    expect(errors).toEqual([])
  })

  test('PLAN-10: a context-menu deletion removes the filtered task and reset restores it', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/')

    const workspace = page.locator('.planning-demo')
    const footer = workspace.locator('.planning-demo__footer')
    await page.getByRole('searchbox', { name: 'Quick search tasks' }).fill('API integration')
    const task = workspace.getByRole('gridcell', { name: 'API integration', exact: true })
    await task.click({ button: 'right' })
    await page.getByRole('menuitem', { name: 'Rows', exact: true }).hover()
    const remove = page.getByRole('menuitem', { name: /delete/i })
    await expect(remove).toBeVisible()
    await remove.click()
    await expect(workspace.getByText('API integration', { exact: true })).toHaveCount(0)
    await expect(footer).toContainText('0 of 99 tasks')
    await page.getByRole('button', { name: 'Reset', exact: true }).click()
    await expect(footer).toContainText('100 of 100 tasks')
    await expect(workspace.getByText('API integration', { exact: true })).toBeVisible()
    expect(errors).toEqual([])
  })

  test('PLAN-07: moving and resizing the Gantt task keeps the task visible in both scheduler views', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/')

    const workspace = page.locator('.planning-demo')
    await page.getByRole('searchbox', { name: 'Quick search tasks' }).fill('API integration')
    await page.getByRole('tab', { name: 'gantt', exact: true }).click()
    const gantt = workspace.locator('revo-grid:visible')
    const bar = gantt.locator('.gantt-bar[data-gantt-task-id="task-003"]')
    await expect(bar).toBeVisible()
    const initial = await bar.evaluate(element => ({
      left: getComputedStyle(element).getPropertyValue('--gantt-bar-left'),
      width: getComputedStyle(element).getPropertyValue('--gantt-bar-width'),
    }))
    const barBox = await bar.boundingBox()
    expect(barBox).not.toBeNull()
    await page.mouse.move(barBox!.x + barBox!.width / 2, barBox!.y + barBox!.height / 2)
    await page.mouse.down()
    await page.mouse.move(barBox!.x + barBox!.width / 2 + 100, barBox!.y + barBox!.height / 2, {
      steps: 10,
    })
    await page.mouse.up()
    await expect
      .poll(() =>
        bar.evaluate(element => getComputedStyle(element).getPropertyValue('--gantt-bar-left')),
      )
      .not.toBe(initial.left)
    await expect
      .poll(() =>
        bar.evaluate(element => getComputedStyle(element).getPropertyValue('--gantt-bar-width')),
      )
      .toBe(initial.width)

    const resizeEnd = bar.locator('.gantt-bar__resize-handle--end')
    await resizeEnd.scrollIntoViewIfNeeded()
    const resizeBox = await resizeEnd.boundingBox()
    expect(resizeBox).not.toBeNull()
    await page.mouse.move(resizeBox!.x + resizeBox!.width / 2, resizeBox!.y + resizeBox!.height / 2)
    await page.mouse.down()
    await page.mouse.move(
      resizeBox!.x + resizeBox!.width / 2 + 100,
      resizeBox!.y + resizeBox!.height / 2,
      {
        steps: 10,
      },
    )
    await page.mouse.up()
    await expect
      .poll(() =>
        bar.evaluate(element => getComputedStyle(element).getPropertyValue('--gantt-bar-width')),
      )
      .not.toBe(initial.width)
    const committed = await bar.evaluate(element => ({
      left: getComputedStyle(element).getPropertyValue('--gantt-bar-left'),
      width: getComputedStyle(element).getPropertyValue('--gantt-bar-width'),
    }))

    for (const view of ['scheduler', 'calendar'] as const) {
      await page.getByRole('tab', { name: view, exact: true }).click()
      await expect(workspace.locator('[data-event-scheduler-event-id="task-003"]')).toBeVisible()
    }
    await page.getByRole('tab', { name: 'gantt', exact: true }).click()
    const restoredBar = workspace.locator('.gantt-bar[data-gantt-task-id="task-003"]')
    await expect
      .poll(() =>
        restoredBar.evaluate(element => ({
          left: getComputedStyle(element).getPropertyValue('--gantt-bar-left'),
          width: getComputedStyle(element).getPropertyValue('--gantt-bar-width'),
        })),
      )
      .toEqual(committed)
    expect(errors).toEqual([])
  })

  test('PLAN-08: moving the Scheduler event keeps the stable task visible in Calendar', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/')

    const workspace = page.locator('.planning-demo')
    await page.getByRole('searchbox', { name: 'Quick search tasks' }).fill('API integration')
    await page.getByRole('tab', { name: 'scheduler', exact: true }).click()
    const event = workspace.locator('[data-event-scheduler-event-id="task-003"]')
    await expect(event).toBeVisible()
    const initialStartSlot = await event.getAttribute('data-event-scheduler-start-slot')
    const eventBox = await event.boundingBox()
    expect(eventBox).not.toBeNull()
    await page.mouse.move(eventBox!.x + 80, eventBox!.y + eventBox!.height / 2)
    await page.mouse.down()
    await page.mouse.move(eventBox!.x + 160, eventBox!.y + eventBox!.height / 2, { steps: 10 })
    await page.mouse.up()
    await expect
      .poll(() => event.getAttribute('data-event-scheduler-start-slot'))
      .not.toBe(initialStartSlot)
    const movedStartSlot = await event.getAttribute('data-event-scheduler-start-slot')

    await page.getByRole('tab', { name: 'calendar', exact: true }).click()
    await expect(workspace.locator('[data-event-scheduler-event-id="task-003"]')).toBeVisible()
    await page.getByRole('tab', { name: 'scheduler', exact: true }).click()
    await expect(workspace.locator('[data-event-scheduler-event-id="task-003"]')).toHaveAttribute(
      'data-event-scheduler-start-slot',
      movedStartSlot!,
    )
    expect(errors).toEqual([])
  })

  test('GANTT-01/02: showcase mounts, switches timeline scale, and renders its task hierarchy', async ({
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

  test('GANTT-04: moving and resizing Design updates the visible Gantt bar', async ({ page }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/gantt')

    const grid = page.locator('revo-grid.gantt-showcase-grid')
    const bar = grid.locator('.gantt-bar[data-gantt-task-id="design"]')
    await expect(bar).toBeVisible()
    const initial = await bar.evaluate(element => ({
      left: getComputedStyle(element).getPropertyValue('--gantt-bar-left'),
      width: getComputedStyle(element).getPropertyValue('--gantt-bar-width'),
    }))
    const box = await bar.boundingBox()
    expect(box).not.toBeNull()
    await page.mouse.move(box!.x + box!.width / 2, box!.y + box!.height / 2)
    await page.mouse.down()
    await page.mouse.move(box!.x + box!.width / 2 + 100, box!.y + box!.height / 2, { steps: 10 })
    await page.mouse.up()
    await expect
      .poll(() =>
        bar.evaluate(element => getComputedStyle(element).getPropertyValue('--gantt-bar-left')),
      )
      .not.toBe(initial.left)

    const resizeEnd = bar.locator('.gantt-bar__resize-handle--end')
    await resizeEnd.scrollIntoViewIfNeeded()
    const resizeBox = await resizeEnd.boundingBox()
    expect(resizeBox).not.toBeNull()
    await page.mouse.move(resizeBox!.x + resizeBox!.width / 2, resizeBox!.y + resizeBox!.height / 2)
    await page.mouse.down()
    await page.mouse.move(
      resizeBox!.x + resizeBox!.width / 2 + 100,
      resizeBox!.y + resizeBox!.height / 2,
      {
        steps: 10,
      },
    )
    await page.mouse.up()
    await expect
      .poll(() =>
        bar.evaluate(element => getComputedStyle(element).getPropertyValue('--gantt-bar-width')),
      )
      .not.toBe(initial.width)
    expect(errors).toEqual([])
  })

  test('GANTT-03: the Design task editor saves a name and Escape preserves the saved value', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/gantt')

    const grid = page.locator('revo-grid.gantt-showcase-grid')
    const bar = grid.locator('.gantt-bar[data-gantt-task-id="design"]')
    await expect(bar).toBeVisible()
    await bar.dblclick()
    const editor = page.locator('.gantt-task-editor-dialog')
    await expect(editor).toBeVisible()
    const name = editor
      .locator('.gantt-task-editor-field')
      .filter({ hasText: 'Name' })
      .locator('input')
    await name.fill('Design QA review')
    await editor.locator('button[type="submit"]').click()
    await expect(editor).toBeHidden()
    await expect(bar).toContainText('Design QA review')

    await bar.dblclick()
    await expect(editor).toBeVisible()
    await name.fill('Discard this name')
    await page.keyboard.press('Escape')
    await expect(editor).toBeHidden()
    await expect(bar).toContainText('Design QA review')
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

  test('GANTT10K-03: horizontal timeline navigation preserves the task pane', async ({ page }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/gantt-big-data')

    const grid = page.locator('revo-grid.gantt-big-data-grid')
    const task = grid.getByText('Task 1', { exact: true }).first()
    const timeline = grid.locator('revogr-viewport-scroll.colPinEnd')
    await expect(task).toBeVisible({ timeout: 20_000 })
    await expect(timeline).toBeVisible()
    const initialScrollLeft = await timeline.evaluate(element => element.scrollLeft)
    await timeline.hover()
    await page.mouse.wheel(2_000, 0)
    await expect(task).toBeVisible()
    await expect
      .poll(() => timeline.evaluate(element => element.scrollLeft))
      .toBeGreaterThan(initialScrollLeft)
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

  test('GANTT20Y-02: virtual scrolling replaces the initial task rows with later records', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/gantt-horizontal-big-data')

    const grid = page.locator('revo-grid.gantt-horizontal-big-data-grid')
    const firstTask = grid.getByText('Program task 001', { exact: true }).first()
    await expect(firstTask).toBeVisible({ timeout: 20_000 })
    await firstTask.click()
    await page.keyboard.press('PageDown')
    await expect
      .poll(async () => grid.locator('.rgRow').allTextContents())
      .not.toContain('Program task 001')
    await expect(grid.locator('.gantt-bar').first()).toBeVisible()
    expect(errors).toEqual([])
  })

  test('SCHED-01: the weekly Scheduler initial state exposes its stable controls and fixtures', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/event-scheduler')

    const workspaces = page.getByRole('tablist', { name: 'Scheduler workspace' })
    await expect(workspaces).toBeVisible()
    await expect(page.getByRole('group', { name: 'Scheduler view' })).toBeVisible()
    await expect(page.getByRole('combobox', { name: 'Calendar preset' })).toHaveValue('weekday')
    await expect(page.locator('revo-grid.event-scheduler-shift-week-grid')).toBeVisible()
    const scheduler = page.locator('.event-scheduler-shift-week-demo')
    await expect(
      scheduler.locator('[data-event-scheduler-event-id="shift-sam-locked"]'),
    ).toHaveAttribute('data-event-scheduler-locked', 'true')
    await expect(
      scheduler.locator('[data-event-scheduler-event-id="shift-alex-mon-conflict"]'),
    ).toHaveAttribute('data-event-scheduler-conflict', 'true')
    expect(errors).toEqual([])
  })

  test('SCHED-02: Calendar, Resource, and read-only Table expose the generated schedule', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/event-scheduler')

    const resource = page.getByRole('tab', { name: 'Resource', exact: true })
    await resource.click()
    await expect(resource).toHaveAttribute('aria-selected', 'true')
    await expect(page.getByText('Jamie Chen', { exact: true })).toBeVisible()

    const table = page.getByRole('tab', { name: 'Table', exact: true })
    await table.click()
    await expect(table).toHaveAttribute('aria-selected', 'true')
    await expect(page.locator('revo-grid.event-scheduler-shift-week-table')).toBeVisible()
    await expect(page.getByText('Onboarding Session', { exact: true })).toBeVisible()

    const calendar = page.getByRole('tab', { name: 'Calendar', exact: true })
    await calendar.click()
    await expect(calendar).toHaveAttribute('aria-selected', 'true')
    await expect(page.locator('revo-grid.event-scheduler-shift-week-grid')).toBeVisible()
    expect(errors).toEqual([])
  })

  test('SCHED-03: period controls expose Day, Week, Month, Year, and Today states', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/event-scheduler')

    const header = page.locator('revogr-scheduler-header')
    const heading = header.locator('.event-scheduler-shift-week-toolbar__heading')
    const views = page.getByRole('group', { name: 'Scheduler view' })
    await expect(heading).toBeVisible()
    await expect
      .poll(async () => {
        const [headingBox, viewsBox] = await Promise.all([
          heading.boundingBox(),
          views.boundingBox(),
        ])
        if (!headingBox || !viewsBox) return false
        return (
          headingBox.right <= viewsBox.x ||
          viewsBox.x + viewsBox.width <= headingBox.x ||
          headingBox.y + headingBox.height <= viewsBox.y ||
          viewsBox.y + viewsBox.height <= headingBox.y
        )
      })
      .toBe(true)

    await page.getByRole('button', { name: 'Day', exact: true }).click()
    await expect(page.getByRole('button', { name: 'Day', exact: true })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    await page.getByRole('button', { name: 'Week', exact: true }).click()
    await expect(page.getByRole('button', { name: 'Week', exact: true })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    await page.getByRole('button', { name: 'Year', exact: true }).click()
    await expect(heading).toContainText('January 2026')
    await expect(heading).toContainText('Calendar month · year navigation')
    await page.getByRole('button', { name: 'Month', exact: true }).click()
    await expect(page.getByRole('button', { name: 'Month', exact: true })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    await page.getByRole('button', { name: 'Today', exact: true }).click()
    await expect(page.locator('revo-grid.event-scheduler-shift-week-grid')).toBeVisible()
    expect(errors).toEqual([])
  })

  test('SCHED-04: calendar presets preserve the selected workspace and restore Weekday', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/event-scheduler')

    const scheduler = page.locator('.event-scheduler-shift-week-demo')
    const preset = page.getByRole('combobox', { name: 'Calendar preset' })
    const resource = page.getByRole('tab', { name: 'Resource', exact: true })
    const calendar = page.getByRole('tab', { name: 'Calendar', exact: true })

    await preset.selectOption('open')
    await expect(preset).toHaveValue('open')
    await expect(scheduler.locator('revo-grid.event-scheduler-shift-week-grid')).toBeVisible()

    await resource.click()
    await expect(resource).toHaveAttribute('aria-selected', 'true')
    await preset.selectOption('training')
    await expect(preset).toHaveValue('training')
    await expect(resource).toHaveAttribute('aria-selected', 'true')

    await preset.selectOption('weekday')
    await expect(preset).toHaveValue('weekday')
    await calendar.click()
    await expect(calendar).toHaveAttribute('aria-selected', 'true')
    await expect(scheduler.locator('revo-grid.event-scheduler-shift-week-grid')).toBeVisible()
    expect(errors).toEqual([])
  })

  test('SCHED-05: the event editor saves a title and Table projects the same event', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/event-scheduler')

    const scheduler = page.locator('.event-scheduler-shift-week-demo')
    const event = scheduler.locator('[data-event-scheduler-event-id="shift-alex-mon-morning"]')
    await expect(event).toBeVisible()
    await event.dblclick()
    const editor = page.locator('[data-event-scheduler-editor]')
    await expect(editor).toBeVisible()
    const title = editor.locator('[data-event-scheduler-editor-field="title"]')
    await title.fill('Scheduler QA appointment')
    await editor.locator('[data-event-scheduler-editor-action="save"]').click()
    await expect(editor).toBeHidden()
    await expect(event).toContainText('Scheduler QA appointment')

    const table = page.getByRole('tab', { name: 'Table', exact: true })
    await table.click()
    await expect(page.locator('revo-grid.event-scheduler-shift-week-table')).toBeVisible()
    await expect(page.getByText('Scheduler QA appointment', { exact: true })).toBeVisible()
    expect(errors).toEqual([])
  })

  test('SCHED-06: editable events move and resize while locked events remain unchanged', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/event-scheduler')
    await page.getByRole('tab', { name: 'Resource', exact: true }).click()

    const scheduler = page.locator('.event-scheduler-shift-week-demo')
    const editable = scheduler.locator('[data-event-scheduler-event-id="shift-alex-mon-morning"]')
    await expect(editable).toBeVisible()
    const initialStartSlot = await editable.getAttribute('data-event-scheduler-start-slot')
    const moveButton = editable.locator('.event-scheduler-event__button')
    const editableBox = await moveButton.boundingBox()
    expect(editableBox).not.toBeNull()
    await page.mouse.move(
      editableBox!.x + editableBox!.width / 2,
      editableBox!.y + editableBox!.height / 2,
    )
    await page.mouse.down()
    await page.mouse.move(
      editableBox!.x + editableBox!.width / 2 + 80,
      editableBox!.y + editableBox!.height / 2,
      {
        steps: 10,
      },
    )
    await page.mouse.up()
    await expect
      .poll(() => editable.getAttribute('data-event-scheduler-start-slot'))
      .not.toBe(initialStartSlot)

    const initialEndSlot = await editable.getAttribute('data-event-scheduler-end-slot')
    const resizeEnd = editable.locator('.event-scheduler-event__resize--timeline-end')
    const resizeBox = await resizeEnd.boundingBox()
    expect(resizeBox).not.toBeNull()
    await page.mouse.move(resizeBox!.x + resizeBox!.width / 2, resizeBox!.y + resizeBox!.height / 2)
    await page.mouse.down()
    await page.mouse.move(
      resizeBox!.x + resizeBox!.width / 2 + 80,
      resizeBox!.y + resizeBox!.height / 2,
      {
        steps: 10,
      },
    )
    await page.mouse.up()
    await expect
      .poll(() => editable.getAttribute('data-event-scheduler-end-slot'))
      .not.toBe(initialEndSlot)

    const locked = scheduler.locator('[data-event-scheduler-event-id="shift-sam-locked"]')
    await expect(locked).toBeVisible()
    const lockedInterval = await locked.evaluate(element => ({
      startDay: element.getAttribute('data-event-scheduler-start-day'),
      startSlot: element.getAttribute('data-event-scheduler-start-slot'),
      endDay: element.getAttribute('data-event-scheduler-end-day'),
      endSlot: element.getAttribute('data-event-scheduler-end-slot'),
    }))
    const lockedBox = await locked.boundingBox()
    expect(lockedBox).not.toBeNull()
    await page.mouse.move(lockedBox!.x + lockedBox!.width / 2, lockedBox!.y + lockedBox!.height / 2)
    await page.mouse.down()
    await page.mouse.move(
      lockedBox!.x + lockedBox!.width / 2 + 80,
      lockedBox!.y + lockedBox!.height / 2,
      {
        steps: 10,
      },
    )
    await page.mouse.up()
    await expect(locked).toEvaluate(
      (element, expected) => ({
        startDay: element.getAttribute('data-event-scheduler-start-day'),
        startSlot: element.getAttribute('data-event-scheduler-start-slot'),
        endDay: element.getAttribute('data-event-scheduler-end-day'),
        endSlot: element.getAttribute('data-event-scheduler-end-slot'),
      }),
      lockedInterval,
    )
    expect(errors).toEqual([])
  })

  test('SCHED-07: an available Resource slot creates, cancels, and deletes a draft event', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/event-scheduler')
    await page.getByRole('tab', { name: 'Resource', exact: true }).click()

    const scheduler = page.locator('.event-scheduler-shift-week-demo')
    const availableSlot = scheduler
      .locator(
        '[data-event-scheduler-slot][data-event-scheduler-resource="alex"]:not([data-event-scheduler-non-working]):not([data-event-scheduler-slot-selectable="false"])',
      )
      .first()
    const editor = page.locator('[data-event-scheduler-editor]')
    const created = scheduler.locator('[data-event-scheduler-event-id^="created-event-"]')
    await expect(availableSlot).toBeVisible()
    await expect(created).toHaveCount(0)

    await availableSlot.click()
    await expect(editor).toBeVisible()
    await editor.locator('[data-event-scheduler-editor-action="cancel"]').click()
    await expect(editor).toBeHidden()
    await expect(created).toHaveCount(0)

    await availableSlot.click()
    await expect(editor).toBeVisible()
    await editor
      .locator('[data-event-scheduler-editor-field="title"]')
      .fill('SCHED-07 created event')
    await editor.locator('[data-event-scheduler-editor-action="save"]').click()
    await expect(editor).toBeHidden()
    await expect(created).toHaveCount(1)
    await expect(created).toContainText('SCHED-07 created event')

    await created.dblclick()
    await expect(editor).toBeVisible()
    await editor.locator('[data-event-scheduler-editor-action="delete"]').click()
    await expect(editor).toBeHidden()
    await expect(created).toHaveCount(0)
    expect(errors).toEqual([])
  })

  test('SCHED-08: conflict events expose selection state for single and multiple selection', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.goto('/demo/event-scheduler')

    const scheduler = page.locator('.event-scheduler-shift-week-demo')
    const conflict = scheduler.locator('[data-event-scheduler-event-id="shift-alex-mon-conflict"]')
    const second = scheduler.locator('[data-event-scheduler-event-id="shift-mina-tue"]')
    await expect(conflict).toHaveAttribute('data-event-scheduler-conflict', 'true')
    await conflict.click()
    await expect(conflict).toHaveAttribute('data-event-scheduler-selected', 'true')
    await second.click({ modifiers: ['Meta'] })
    await expect(second).toHaveAttribute('data-event-scheduler-selected', 'true')
    await expect(conflict).toHaveAttribute('data-event-scheduler-selected', 'true')
    expect(errors).toEqual([])
  })

  test('SCHED-09: narrow dark-mode workspaces remain reachable without page overflow', async ({
    page,
  }) => {
    const errors = docsErrors(page)
    await page.setViewportSize({ width: 390, height: 844 })
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/demo/event-scheduler')

    const scheduler = page.locator('.event-scheduler-shift-week-demo')
    for (const workspace of ['Resource', 'Table', 'Calendar'] as const) {
      const tab = page.getByRole('tab', { name: workspace, exact: true })
      await tab.click()
      await expect(tab).toHaveAttribute('aria-selected', 'true')
      await expect(scheduler.locator('revo-grid:visible')).toBeVisible()
    }
    await expect
      .poll(() =>
        page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        ),
      )
      .toBeLessThanOrEqual(1)
    expect(errors).toEqual([])
  })
})
