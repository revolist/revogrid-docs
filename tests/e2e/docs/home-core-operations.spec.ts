import { expect, test, type Locator, type Page } from '@playwright/test'

async function openView(page: Page, name: string) {
  await page.setViewportSize({ width: 1800, height: 1000 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  await expect(hero.locator('.live-chart')).toHaveAttribute('data-status', 'ready')
  await hero.getByRole('tab', { name, exact: true }).click()
  const grid = hero.locator(
    `[data-hero-view="${name === 'Data grid' ? 'grid' : name.toLowerCase()}"] revo-grid`,
  )
  await expect(grid).toBeVisible()
  return { hero, grid }
}

async function drag(page: Page, target: Locator, dx: number, dy = 0, top = false) {
  await target.hover()
  const box = (await target.boundingBox())!
  const x = box.x + box.width / 2
  const y = top ? box.y + 3 : box.y + box.height / 2
  await page.mouse.move(x, y)
  await page.mouse.down()
  await page.mouse.move(x + dx, y + dy, { steps: 3 })
  await page.mouse.up()
}

async function observe(grid: Locator, config: string) {
  await grid.evaluate((el: any, key) => {
    const initial = el[key]
    const plugins = el.getPlugins()
    ;(window as any).__nativeOperation = { initial, plugins, resets: 0 }
    el.addEventListener('beforesourceset', () => (window as any).__nativeOperation.resets++)
  }, config)
}
async function expectStable(grid: Locator, config: string) {
  expect(
    await grid.evaluate(async (el: any, key) => {
      const state = (window as any).__nativeOperation
      const plugins = await el.getPlugins()
      const original = await state.plugins
      return {
        sameConfig: el[key] === state.initial,
        samePlugins: original.every((plugin: any) => plugins.includes(plugin)),
        resets: state.resets,
      }
    }, config),
  ).toEqual({ sameConfig: true, samePlugins: true, resets: 0 })
}
async function ganttTask(grid: Locator) {
  return grid.evaluate(async (el: any) => {
    const plugin = (await el.getPlugins()).find((p: any) => p.getProjectSnapshot)
    const row = plugin.getProjectSnapshot().tasks.find((r: any) => r.id === 'hero-project-1')
    return { start: row.startDate, end: row.endDate, progress: row.progressPercent }
  })
}
async function schedulerEvent(grid: Locator) {
  return grid.evaluate(async (el: any) => {
    const plugin = (await el.getPlugins()).find((p: any) => p.getProjection)
    const row = plugin.getProjection().events.find((r: any) => r.id === 'hero-project-1')
    return { start: row.startDateTime, end: row.endDateTime, resource: row.resourceId }
  })
}

for (const operation of ['move', 'resize', 'progress']) {
  test(`Gantt ${operation} preserves history and authored values without resets`, async ({
    page,
  }) => {
    const { hero, grid } = await openView(page, 'Gantt')
    const bar = grid.locator('.gantt-bar[data-gantt-task-id="hero-project-1"]')
    await expect(bar).toBeVisible()
    await grid.getByRole('gridcell', { name: 'Commerce API', exact: true }).first().click()
    const before = await ganttTask(grid)
    await observe(grid, 'gantt')
    await bar.hover()
    const target =
      operation === 'move'
        ? bar
        : bar.locator(
            operation === 'resize'
              ? '[data-gantt-resize-edge="end"]'
              : '.gantt-bar__progress-handle',
          )
    await drag(page, target, operation === 'progress' ? -40 : 60, 0, operation === 'progress')
    await expect.poll(() => ganttTask(grid)).not.toEqual(before)
    const after = await ganttTask(grid)
    await expectStable(grid, 'gantt')
    await page.keyboard.press('ControlOrMeta+z')
    await expect.poll(() => ganttTask(grid)).toEqual(before)
    await page.keyboard.press('ControlOrMeta+Shift+z')
    await expect.poll(() => ganttTask(grid)).toEqual(after)
    await expectStable(grid, 'gantt')
    await hero.getByRole('tab', { name: 'Data grid', exact: true }).click()
    await hero.getByRole('tab', { name: 'Gantt', exact: true }).click()
    await expect.poll(() => ganttTask(grid)).toEqual(after)
  })
}

for (const operation of ['move', 'resize']) {
  test(`Scheduler ${operation} preserves history and authored values without resets`, async ({
    page,
  }) => {
    const { hero, grid } = await openView(page, 'Scheduler')
    const bar = grid.locator('[data-event-scheduler-event-id="hero-project-1"]')
    await expect(bar).toBeVisible()
    const before = await schedulerEvent(grid)
    await observe(grid, 'eventScheduler')
    await drag(
      page,
      bar.locator(
        operation === 'move'
          ? '.event-scheduler-event__button'
          : '.event-scheduler-event__resize--timeline-end',
      ),
      72,
    )
    await expect.poll(() => schedulerEvent(grid)).not.toEqual(before)
    const after = await schedulerEvent(grid)
    await page.keyboard.press('ControlOrMeta+z')
    await expect.poll(() => schedulerEvent(grid)).toEqual(before)
    await page.keyboard.press('ControlOrMeta+Shift+z')
    await expect.poll(() => schedulerEvent(grid)).toEqual(after)
    await expectStable(grid, 'eventScheduler')
    await hero.getByRole('tab', { name: 'Data grid', exact: true }).click()
    await hero.getByRole('tab', { name: 'Scheduler', exact: true }).click()
    await expect.poll(() => schedulerEvent(grid)).toEqual(after)
  })
}

test('Kanban moves preserve history, column placement and shared status without resets', async ({
  page,
}) => {
  const { hero, grid } = await openView(page, 'Kanban')
  const card = grid.locator('[data-kanban-card-id="hero-project-1"]')
  await expect(card).toBeVisible()
  const stack = (status: string) =>
    grid.locator(`[data-kanban-stack][data-kanban-column-prop="${status}"]`)
  await observe(grid, 'kanban')
  const from = (await card.boundingBox())!
  const to = (await stack('blocked').last().boundingBox())!
  await page.mouse.move(from.x + from.width / 2, from.y + 18)
  await page.mouse.down()
  await page.mouse.move(to.x + to.width / 2, to.y + Math.min(80, to.height / 2), { steps: 12 })
  await page.mouse.up()
  await expect(stack('blocked').locator('[data-kanban-card-id="hero-project-1"]')).toBeVisible()
  await page.keyboard.press('ControlOrMeta+z')
  await expect(stack('in-progress').locator('[data-kanban-card-id="hero-project-1"]')).toBeVisible()
  await card.focus()
  await page.keyboard.press('ControlOrMeta+Shift+z')
  await expect(stack('blocked').locator('[data-kanban-card-id="hero-project-1"]')).toBeVisible()
  await expectStable(grid, 'kanban')
  await hero.getByRole('tab', { name: 'Data grid', exact: true }).click()
  await expect(
    hero.getByRole('combobox', { name: 'Status for Commerce API', exact: true }),
  ).toContainText('Blocked')
  await hero.getByRole('tab', { name: 'Kanban', exact: true }).click()
  await expect(stack('blocked').locator('[data-kanban-card-id="hero-project-1"]')).toBeVisible()
})

test('Gantt dependency deletion supports undo and redo without losing other task changes', async ({
  page,
}) => {
  const { hero, grid } = await openView(page, 'Gantt')
  const link = grid.locator('[data-dependency-id="hero-research-design"] .gantt-dependency__hit')
  await expect(link).toBeVisible()
  await observe(grid, 'gantt')
  await link.focus()
  await link.press('Enter')
  await page.keyboard.press('Delete')
  await expect(grid.locator('.gantt-dependency')).toHaveCount(0)
  const replay = (method: 'undo' | 'redo') =>
    grid.evaluate(async (el: any, method) => {
      const history = (await el.getPlugins()).find((p: any) => typeof p.undo === 'function')
      history[method]()
    }, method)
  await replay('undo')
  await expect(grid.locator('.gantt-dependency')).toHaveCount(1)
  await replay('redo')
  await expect(grid.locator('.gantt-dependency')).toHaveCount(0)
  await replay('undo')
  await expect(grid.locator('.gantt-dependency')).toHaveCount(1)
  await expectStable(grid, 'gantt')
  await hero.getByRole('tab', { name: 'Data grid', exact: true }).click()
  await hero.getByRole('tab', { name: 'Gantt', exact: true }).click()
  await expect(grid.locator('.gantt-dependency')).toHaveCount(1)
})

test('Gantt selection and pointer-cancelled resize preserve task dates', async ({ page }) => {
  const { grid } = await openView(page, 'Gantt')
  const bar = grid.locator('.gantt-bar[data-gantt-task-id="hero-project-1"]')
  await expect(bar).toBeVisible()
  const before = await ganttTask(grid)
  await bar.click()
  await expect.poll(() => ganttTask(grid)).toEqual(before)
  await bar.hover()
  const box = (await bar.locator('[data-gantt-resize-edge="end"]').boundingBox())!
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
  await page.mouse.down()
  await page.mouse.move(box.x + box.width / 2 + 60, box.y + box.height / 2, { steps: 3 })
  await bar.dispatchEvent('pointercancel', { pointerId: 1, pointerType: 'mouse', bubbles: true })
  await page.mouse.up()
  await expect.poll(() => ganttTask(grid)).toEqual(before)
})

test('Gantt native task deletion stays deleted across views and restores custom data on undo', async ({
  page,
}) => {
  const { hero, grid } = await openView(page, 'Gantt')
  const bar = grid.locator('.gantt-bar[data-gantt-task-id="hero-project-1"]')
  await expect(bar).toBeVisible()
  await bar.click({ button: 'right' })
  await grid.locator('.rv-context-menu').getByText('Delete', { exact: true }).click()
  await expect(bar).toHaveCount(0)
  await expect(hero.locator('.hero-demo-footer').getByRole('status')).toHaveText('5 / 5 projects')
  await grid.evaluate(async (el: any) =>
    (await el.getPlugins()).find((p: any) => typeof p.undo === 'function').undo(),
  )
  await expect(bar).toBeVisible()
  await hero.getByRole('tab', { name: 'Data grid', exact: true }).click()
  await expect(
    hero
      .getByRole('row', { name: /^Commerce API/ })
      .getByRole('gridcell', { name: '$180,000', exact: true }),
  ).toBeVisible()
  await hero.getByRole('tab', { name: 'Gantt', exact: true }).click()
  await expect(bar).toBeVisible()
})

test('Scheduler reassignment keeps owner and dates in the shared portfolio', async ({ page }) => {
  const { hero, grid } = await openView(page, 'Scheduler')
  const bar = grid.locator(
    '[data-event-scheduler-event-id="hero-project-1"] .event-scheduler-event__button',
  )
  await expect(bar).toBeVisible()
  const before = await schedulerEvent(grid)
  const destination = grid
    .locator('[data-event-scheduler-resource="Sofia Garcia"][data-event-scheduler-slot]')
    .first()
  const to = (await destination.boundingBox())!
  const from = (await bar.boundingBox())!
  await observe(grid, 'eventScheduler')
  await drag(page, bar, 72, to.y + to.height / 2 - (from.y + from.height / 2))
  await expect.poll(() => schedulerEvent(grid)).toMatchObject({ resource: 'Sofia Garcia' })
  const after = await schedulerEvent(grid)
  expect(after.start).not.toBe(before.start)
  await expectStable(grid, 'eventScheduler')
  await hero.getByRole('tab', { name: 'Data grid', exact: true }).click()
  await expect(
    hero.getByRole('combobox', { name: 'Owner for Commerce API', exact: true }),
  ).toContainText('Sofia Garcia')
  await hero.getByRole('tab', { name: 'Scheduler', exact: true }).click()
  await expect.poll(() => schedulerEvent(grid)).toEqual(after)
})

test('sorting before editing preserves the correct project and subsequent edits', async ({
  page,
}) => {
  const { hero, grid } = await openView(page, 'Data grid')
  await grid.getByRole('columnheader', { name: 'Project', exact: true }).click()
  const row = grid.getByRole('row', { name: /^Research/ })
  await row.getByRole('gridcell', { name: '$100,000', exact: true }).dblclick()
  const editor = grid.locator('revogr-edit').getByRole('textbox')
  await editor.fill('110000')
  await editor.press('Enter')
  await expect(row.getByRole('gridcell', { name: '$110,000', exact: true })).toBeVisible()
  await row.getByRole('slider', { name: 'Progress', exact: true }).focus()
  await page.keyboard.press('Home')
  await expect(row.getByRole('slider', { name: 'Progress', exact: true })).toHaveValue('0')
  await hero.getByRole('tab', { name: 'Gantt', exact: true }).click()
  await hero.getByRole('tab', { name: 'Data grid', exact: true }).click()
  await expect(row.getByRole('gridcell', { name: '$110,000', exact: true })).toBeVisible()
  await expect(row.getByRole('slider', { name: 'Progress', exact: true })).toHaveValue('0')
  await expect(
    grid
      .getByRole('row', { name: /^Commerce API/ })
      .getByRole('gridcell', { name: '$180,000', exact: true }),
  ).toBeVisible()
})
