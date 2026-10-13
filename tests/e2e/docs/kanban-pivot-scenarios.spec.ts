import { expect, test } from '@playwright/test'
import { readFile } from 'node:fs/promises'

async function openDemo(page: import('@playwright/test').Page, demoId: string) {
  await page.goto(`/demo/${demoId}`)
  await expect(page.locator('.demo-page-layout')).toHaveAttribute('data-demo-id', demoId)
  await expect(page.locator('.demo-page-workspace revo-grid').first()).toBeVisible({
    timeout: 20_000,
  })
}

async function openPivotDemo(page: import('@playwright/test').Page) {
  await page.goto('/demo/pivot')
  await expect(page.locator('.demo-page-layout')).toHaveAttribute('data-demo-id', 'pivot')
  await expect(page.locator('.financial-pivot-showcase')).toBeVisible({ timeout: 20_000 })
}

function workflowCounts(board: import('@playwright/test').Locator) {
  return board.locator('.kanban-column-header__count')
}

async function renderedCardIds(board: import('@playwright/test').Locator) {
  return board
    .locator('[data-kanban-card-id]')
    .evaluateAll(elements =>
      elements
        .map(element => element.getAttribute('data-kanban-card-id'))
        .filter((id): id is string => Boolean(id)),
    )
}

test.describe('Kanban and Pivot documented scenarios', () => {
  test('task board loads its lanes, workflow and stable cards', async ({ page }) => {
    await openDemo(page, 'kanban')

    const board = page.locator('.kanban-showcase__grid')
    await expect(board.locator('[data-kanban-card-id="KAN-101"]')).toBeVisible()
    await expect(board.locator('[data-kanban-card-id="KAN-101"]')).toContainText(
      'Customer interview synthesis',
    )
    await expect(board.locator('.kanban-column-header__title')).toHaveText([
      'Backlog',
      'In progress',
      'Review',
      'Done',
    ])
    await expect(board.locator('.kanban-column-header__count')).toHaveText([
      '3 cards',
      '3 cards',
      '2 cards',
      '2 cards',
    ])
    await expect(
      board.locator('.kanban-swimlane-header[data-kanban-swimlane-id="Product"]').first(),
    ).toBeVisible()
    await expect(
      board.locator('.kanban-swimlane-header[data-kanban-swimlane-id="Platform"]').first(),
    ).toBeVisible()

    const research = board.locator('[data-kanban-card-id="KAN-101"]')
    await expect(research).toContainText('High')
    await expect(research).toContainText('Research')
    await expect(research).toContainText('Due Aug 12')
    await expect(research).toContainText('20%')
    await expect(research.locator('.kanban-showcase-avatar-stack')).toContainText('MA')
    await expect(research.locator('.kanban-showcase-progress__bar')).toHaveAttribute(
      'style',
      /width:\s*20%/,
    )
    await expect(board.locator('[data-kanban-card-id="KAN-105"]')).toContainText('100%')
    await expect(board.locator('[data-kanban-card-id="KAN-201"]')).toContainText(
      'Persist fractional ranks',
    )
  })

  test('task board moves a card into the configured WIP warning state', async ({ page }) => {
    await openDemo(page, 'kanban')
    const board = page.locator('.kanban-showcase__grid')
    const card = board.locator('[data-kanban-card-id="KAN-101"]')
    await expect(card).toBeVisible()

    await card.focus()
    await page.keyboard.press('Space')
    await page.keyboard.press('ArrowRight')
    await page.keyboard.press('ArrowRight')
    await page.keyboard.press('ArrowRight')
    await page.keyboard.press('Space')
    await expect(workflowCounts(board)).toHaveText(['2 cards', '4 cards', '2 cards', '2 cards'])
    await expect(
      board.getByRole('group', { name: 'In progress, Product team' }).first(),
    ).toContainText('Customer interview synthesis')
    await expect(
      board.getByRole('columnheader', { name: /In progress 4 cards 4 of 4 WIP/ }),
    ).toBeVisible()
  })

  test('task board cancels a keyboard pickup without moving the card', async ({ page }) => {
    await openDemo(page, 'kanban')
    const board = page.locator('.kanban-showcase__grid')
    const card = board.locator('[data-kanban-card-id="KAN-101"]')
    await expect(card).toBeVisible()

    await card.focus()
    await page.keyboard.press('Space')
    await page.keyboard.press('ArrowRight')
    await page.keyboard.press('Escape')
    await expect(workflowCounts(board)).toHaveText(['3 cards', '3 cards', '2 cards', '2 cards'])
    await expect(board.getByRole('group', { name: 'Backlog, Product team' }).first()).toContainText(
      'Customer interview synthesis',
    )
  })

  test('task board collapses and restores lanes, labels, and a workflow column', async ({
    page,
  }) => {
    await openDemo(page, 'kanban')
    const board = page.locator('.kanban-showcase__grid')
    const card = board.locator('[data-kanban-card-id="KAN-101"]')
    await expect(card).toBeVisible()

    const productLane = board
      .locator('.kanban-swimlane-header[data-kanban-swimlane-id="Product"]')
      .first()
    await productLane.getByRole('button', { name: 'Collapse swimlane: Product team' }).click()
    const expandProduct = board
      .getByRole('button', { name: 'Expand swimlane: Product team' })
      .first()
    await expect(expandProduct).toHaveAttribute('aria-expanded', 'false')
    await expect(card).toBeHidden()
    await expect(board.locator('[data-kanban-card-id="KAN-201"]')).toBeVisible()
    await expandProduct.click()
    await expect(card).toBeVisible()

    await board.getByRole('button', { name: 'Collapse swimlane labels: Swimlanes' }).click()
    await expect(
      board.getByRole('button', { name: 'Expand swimlane labels: Swimlanes' }),
    ).toBeVisible()
    await board.getByRole('button', { name: 'Expand swimlane labels: Swimlanes' }).click()

    await board.getByRole('button', { name: 'Collapse column: Backlog' }).click()
    await expect(board.getByRole('button', { name: 'Expand column: Backlog' })).toBeVisible()
    await board.getByRole('button', { name: 'Expand column: Backlog' }).click()
    await expect(card).toBeVisible()
  })

  test('50K Kanban keeps initial rendering bounded and validates a saved editor update', async ({
    page,
  }) => {
    await openDemo(page, 'kanban-performance')

    const board = page.locator('.kanban-board__grid')
    const card = board.locator('[data-kanban-card-id="KAN-101"]')
    await expect(card).toBeVisible({ timeout: 20_000 })
    await expect(board.locator('.kanban-column-header__count').first()).toHaveText('5000 cards')
    expect(await board.locator('[data-kanban-card-id]').count()).toBeLessThan(100)

    await card.dblclick()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    const points = dialog.getByLabel('Story points')
    await expect(points).toHaveValue('5')
    await points.fill('-1')
    await dialog.getByRole('button', { name: /^Save$/ }).click()
    await expect(dialog.getByRole('alert')).toContainText('Story points cannot be negative.')
    await expect(dialog).toBeVisible()

    await points.fill('13')
    await dialog.locator('.kanban-card-editor__title-input').fill('E2E research updated')
    await dialog.getByRole('button', { name: /^Save$/ }).click()
    await expect(dialog).toBeHidden()
    await expect(card).toContainText('E2E research updated')
  })

  test('50K Kanban cancels an editor change and reopens the unchanged card', async ({ page }) => {
    await openDemo(page, 'kanban-performance')

    const board = page.locator('.kanban-board__grid')
    const card = board.locator('[data-kanban-card-id="KAN-101"]')
    await expect(card).toBeVisible({ timeout: 20_000 })

    await card.dblclick()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    await expect(dialog.getByLabel('Story points')).toHaveValue('5')
    await expect(dialog.locator('.kanban-card-editor__title-input')).toHaveValue(
      'Customer interview synthesis',
    )
    await dialog.locator('.kanban-card-editor__title-input').fill('Do not save')
    await dialog.getByRole('button', { name: /^Cancel$/ }).click()
    await expect(dialog).toBeHidden()
    await expect(card).toContainText('Customer interview synthesis')

    await card.dblclick()
    await expect(dialog.getByLabel('Story points')).toHaveValue('5')
    await expect(dialog.locator('.kanban-card-editor__title-input')).toHaveValue(
      'Customer interview synthesis',
    )
    await dialog.getByRole('button', { name: /^Cancel$/ }).click()
  })

  test('50K Kanban virtual scrolling replaces rendered cards and returns to stable IDs', async ({
    page,
  }) => {
    await openDemo(page, 'kanban-performance')
    const board = page.locator('.kanban-board__grid')
    const firstIds = await renderedCardIds(board)
    expect(firstIds).toContain('KAN-101')
    expect(firstIds.length).toBeGreaterThan(0)
    expect(firstIds.length).toBeLessThan(100)

    const rowScroller = board.locator('revogr-scroll-virtual').first()
    await expect(rowScroller).toBeVisible()
    await rowScroller.hover()
    for (let index = 0; index < 4; index += 1) {
      await page.mouse.wheel(0, 1_200)
    }
    await expect
      .poll(async () => {
        const currentIds = await renderedCardIds(board)
        return currentIds.some(id => !firstIds.includes(id))
      })
      .toBe(true)

    const deepIds = await renderedCardIds(board)
    expect(deepIds.length).toBeLessThan(100)
    expect(new Set(deepIds).size).toBe(deepIds.length)
    await expect(workflowCounts(board)).toHaveText(Array(4).fill('5000 cards'))

    for (let index = 0; index < 4; index += 1) {
      await page.mouse.wheel(0, -1_200)
    }
    await expect(board.locator('[data-kanban-card-id="KAN-101"]')).toBeVisible()
  })

  test('50K Kanban handles a disposable create/delete workflow and narrow layout', async ({
    page,
  }) => {
    await openDemo(page, 'kanban-performance')
    const board = page.locator('.kanban-board__grid')
    const seed = board.locator('[data-kanban-card-id="KAN-101"]')
    await expect(seed).toBeVisible({ timeout: 20_000 })

    await seed.click({ button: 'right' })
    const menu = page.getByRole('menu', { name: 'Kanban card actions' })
    await expect(menu).toBeVisible()
    await menu.getByRole('menuitem', { name: 'Add card here' }).click()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    await dialog.locator('.kanban-card-editor__title-input').fill('E2E disposable card')
    await dialog.getByLabel('Story points').fill('2')
    await dialog.getByRole('button', { name: /^Save$/ }).click()
    await expect(workflowCounts(board).first()).toHaveText('5001 cards')
    const recentCard = page.getByRole('status').filter({ hasText: 'E2E disposable card' })
    await expect(recentCard).toBeVisible()
    await recentCard.getByRole('button', { name: 'Delete recently created card' }).click()
    await expect(recentCard).toBeHidden()
    await expect(workflowCounts(board).first()).toHaveText('5000 cards')

    await page.setViewportSize({ width: 390, height: 844 })
    await expect(board).toBeVisible()
    const pageOverflow = await page
      .locator('html')
      .evaluate(element => element.scrollWidth > element.clientWidth)
    expect(pageOverflow).toBe(false)
  })

  test('50K Kanban moves and restores a virtualized card without changing total counts', async ({
    page,
  }) => {
    await openDemo(page, 'kanban-performance')
    const board = page.locator('.kanban-board__grid')
    const card = board.locator('.kanban-card[data-kanban-card-id="KAN-101"]')
    await expect(card).toBeVisible({ timeout: 20_000 })

    await card.click({ button: 'right' })
    const menu = page.getByRole('menu', { name: 'Kanban card actions' })
    await expect(menu).toBeVisible()
    await menu.getByRole('menuitem', { name: 'Move card' }).hover()
    await page.getByRole('menuitemradio', { name: 'Triage', exact: true }).click()
    await expect(workflowCounts(board).nth(0)).toHaveText('4999 cards')
    await expect(workflowCounts(board).nth(1)).toHaveText('5001 cards')

    const movedCard = page.getByRole('status').filter({ hasText: 'Moved card:' })
    await expect(movedCard).toContainText('Customer interview synthesis')
    await movedCard.getByRole('button', { name: 'Return recently moved card' }).click()
    await expect(movedCard).toBeHidden()
    await expect(workflowCounts(board).nth(0)).toHaveText('5000 cards')
    await expect(workflowCounts(board).nth(1)).toHaveText('5000 cards')

    const productLane = board.locator('.kanban-swimlane-header[data-kanban-swimlane-id="Product"]')
    await productLane.getByRole('button', { name: 'Collapse swimlane: Product team' }).click()
    await expect(card).toBeHidden()
    await board.getByRole('button', { name: 'Expand swimlane: Product team' }).first().click()
    await expect(card).toBeVisible()
  })

  test('server-loaded Kanban resolves real cards and retains logical totals', async ({ page }) => {
    await openDemo(page, 'kanban-server-loading')

    const board = page.locator('.kanban-server-loading__grid')
    const status = page.locator('.kanban-server-loading__notice')
    await expect(status).toContainText('Loaded from server:', { timeout: 20_000 })
    await expect(status).toContainText('of 100,000 cards.')
    await expect(board.locator('[data-kanban-card-id="server-1"]')).toContainText('Server card 1')
    await expect(board.locator('.kanban-column-header__title')).toHaveText([
      'To do',
      'Doing',
      'Review',
      'Done',
    ])
    await expect(board.locator('.kanban-column-header__count')).toHaveText([
      '47500 cards',
      '34000 cards',
      '16000 cards',
      '2500 cards',
    ])
  })

  test('server-loaded Kanban requests another range as its virtual board scrolls', async ({
    page,
  }) => {
    await openDemo(page, 'kanban-server-loading')
    const board = page.locator('.kanban-server-loading__grid')
    const status = page.locator('.kanban-server-loading__notice')
    await expect(status).toContainText('Loaded from server:', { timeout: 20_000 })
    const initial = await status.textContent()

    await board.hover()
    for (let index = 0; index < 6; index += 1) {
      await page.mouse.wheel(0, 1_200)
    }
    await expect
      .poll(
        async () => {
          const text = await status.textContent()
          return (
            text && text !== initial && /Loaded from server: [\d,]+ of 100,000 cards\./.test(text)
          )
        },
        { timeout: 20_000 },
      )
      .toBe(true)
    await expect(
      board
        .locator('[data-kanban-card-id]')
        .filter({ hasText: /Server card \d+/ })
        .first(),
    ).toBeVisible()
    await expect(workflowCounts(board)).toHaveText([
      '47500 cards',
      '34000 cards',
      '16000 cards',
      '2500 cards',
    ])
  })

  test('server-loaded Kanban replaces placeholders, survives route teardown, and remounts cleanly', async ({
    page,
  }) => {
    await page.goto('/demo/kanban-server-loading')
    const status = page.locator('.kanban-server-loading__notice')
    await expect(status).toHaveAttribute('role', 'status')
    await expect(status).toHaveAttribute('aria-live', 'polite')

    const board = page.locator('.kanban-server-loading__grid')
    await expect(status).toContainText('Loaded from server:', { timeout: 20_000 })
    const firstCard = board.locator('[data-kanban-card-id="server-1"]')
    await expect(firstCard).toContainText('Server card 1')

    await page.goto('/demo/kanban')
    await expect(page.locator('.kanban-showcase__grid')).toBeVisible()
    await expect(page.locator('.kanban-server-loading__notice')).toHaveCount(0)

    await openDemo(page, 'kanban-server-loading')
    await expect(page.locator('.kanban-server-loading__notice')).toContainText(
      'Loaded from server:',
      {
        timeout: 20_000,
      },
    )
    await expect(
      page.locator('.kanban-server-loading__grid [data-kanban-card-id="server-1"]'),
    ).toContainText('Server card 1')
  })

  test('Pivot entry point is readable at two desktop sizes and has keyboard-operable reports', async ({ page }) => {
    for (const viewport of [{ width: 1280, height: 800 }, { width: 1440, height: 900 }]) {
      await page.setViewportSize(viewport)
      await openPivotDemo(page)
      const report = page.locator('.financial-pivot-showcase')
      await expect(report).toContainText('$7,776,899.28')
      await expect(page.getByRole('navigation', { name: 'Pivot demo collection' })).toHaveCount(0)
      await expect(page.getByRole('button', { name: 'Fields' })).toBeVisible()
      await expect(page.getByRole('button', { name: 'Chart' })).toBeVisible()
      await expect(page.getByRole('button', { name: 'Export CSV' })).toBeVisible()
      const tabs = page.getByRole('tablist', { name: 'Financial report presets' })
      await tabs.getByRole('tab', { name: 'Sales Overview' }).focus()
      await page.keyboard.press('ArrowRight')
      await expect(tabs.getByRole('tab', { name: 'Profitability' })).toHaveAttribute('aria-selected', 'true')
      await page.getByRole('button', { name: 'Reset' }).click()
      await expect(tabs.getByRole('tab', { name: 'Sales Overview' })).toHaveAttribute('aria-selected', 'true')
      await expect(report).toContainText('$7,776,899.28')
    }
  })

  test('Pivot demos use the sidebar and a single visible title', async ({ page }) => {
    const routes = [
      ['pivot', '.financial-pivot-showcase', null, 'financial-pivot-header'],
      ['pivot-charts', '.pivot-dashboard', '.dashboard-header', '.dashboard-controls'],
      ['pivot-financial', '.financial-pivot-showcase', null, 'financial-pivot-header'],
      ['pivot-operations', '.operations-demo', '.operations-demo > .page-header', '.controls'],
      ['pivot-scale', '.scale-demo', '.scale-demo > .scale-header', '.scale-controls'],
    ] as const
    const sidebar = page.getByRole('complementary', { name: 'Demo examples' })
    for (const [route, demoRoot, embeddedHeader, controls] of routes) {
      await page.goto(`/demo/${route}`)
      await expect(page.locator(demoRoot)).toBeVisible()
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
      await expect(page.getByRole('navigation', { name: 'Pivot demo collection' })).toHaveCount(0)
      await expect(sidebar.getByRole('link', { name: 'Charts dashboard Advanced' })).toBeVisible()
      await expect(page.locator(demoRoot).locator(controls)).toBeVisible()
      if (embeddedHeader) {
        await expect(page.locator(embeddedHeader)).toBeHidden()
      }
    }
    const charts = sidebar.getByRole('link', { name: 'Charts dashboard Advanced' })
    await charts.focus()
    await expect(charts).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(/\/demo\/pivot-charts\/?$/)
  })

  test('Pivot source viewer loads the overview and focused demo files', async ({ page }) => {
    for (const [route, sourceText] of [
      ['pivot', 'financial-pivot-showcase'],
      ['pivot-charts', 'pivot-dashboard'],
    ]) {
      await page.goto(`/demo/${route}`)
      await page.getByRole('button', { name: 'Code' }).click()
      const source = page.getByRole('dialog', { name: 'Example source code' })
      await expect(source.locator('.demo-source__code')).toContainText(sourceText)
      await expect(source).not.toContainText('Source could not be loaded.')
    }
  })

  test('Pivot report saves explicitly, restores and exports the current result', async ({ page }) => {
    await openPivotDemo(page)
    const tabs = page.getByRole('tablist', { name: 'Financial report presets' })
    await tabs.getByRole('tab', { name: 'Profitability' }).click()
    await expect(page.locator('.financial-pivot-showcase')).toContainText('$7,776,899.28')
    await page.locator('financial-pivot-header summary').click()
    await page.getByRole('button', { name: 'Save this report' }).click()
    await tabs.getByRole('tab', { name: 'Sales Overview' }).click()
    await page.locator('financial-pivot-header summary').click()
    await page.getByRole('button', { name: 'Restore saved report' }).click()
    await expect(tabs.getByRole('tab', { name: 'Profitability' })).toHaveAttribute('aria-selected', 'true')
    const download = page.waitForEvent('download')
    await page.getByRole('button', { name: 'Export CSV' }).click()
    const csvDownload = await download
    await expect(csvDownload.suggestedFilename()).toMatch(/\.csv$/)
    const csv = await readFile(await csvDownload.path(), 'utf8')
    expect(csv).toContain('Grand Total')
    expect(csv.replace(/[,$"]/g, '')).toContain('7776899.28')
    await page.locator('financial-pivot-header summary').click()
    const xlsxDownload = page.waitForEvent('download')
    await page.getByRole('button', { name: 'Export XLSX (visible result)' }).click()
    expect((await xlsxDownload).suggestedFilename()).toMatch(/\.xlsx$/)
    await page.getByRole('button', { name: 'Chart' }).click()
    await expect(page.locator('.financial-pivot-chart')).toBeVisible()
  })

  test('Pivot charts follow the year and comparison layout', async ({ page }) => {
    await page.goto('/demo/pivot-charts')
    await expect(page.locator('.pivot-dashboard')).toBeVisible({ timeout: 20_000 })
    await expect(page.locator('[data-testid="quarter-chart"]')).toBeVisible()
    const summary = page.locator('.dashboard-summary')
    await expect(summary).toContainText('2025 · all brands')
    await page.getByRole('combobox', { name: 'Year' }).selectOption('2024')
    await expect(summary).toContainText('2024 · all brands')
    await page.getByRole('radio', { name: 'Categories' }).check()
    await expect(page.getByRole('heading', { name: 'Category comparison' })).toBeVisible()
    await page.getByRole('button', { name: 'Reset report' }).click()
    await expect(summary).toContainText('2025 · all brands')
  })

  test('Financial analysis exposes calculated reports', async ({ page }) => {
    await page.goto('/demo/pivot-financial')
    const tabs = page.getByRole('tablist', { name: 'Financial report presets' })
    await expect(tabs.getByRole('tab', { name: 'Profit', exact: true })).toHaveAttribute('aria-selected', 'true')
    for (const label of ['Contribution', 'Running total', 'Year over year', 'Ranking']) {
      await tabs.getByRole('tab', { name: label }).click()
      await expect(tabs.getByRole('tab', { name: label })).toHaveAttribute('aria-selected', 'true')
    }
  })

  test('Operations scope and source records agree', async ({ page }) => {
    await page.goto('/demo/pivot-operations')
    const demo = page.locator('.operations-demo')
    const ticketCount = demo.locator('.metric').filter({ hasText: 'Tickets in scope' }).locator('strong')
    await expect(ticketCount).toHaveText('480')
    const pivot = demo.locator('.pivot-panel')
    for (const priority of ['Critical', 'High', 'Normal', 'Low']) {
      const header = pivot.locator(`.rgHeaderCell:has(button[aria-label="Expand ${priority}"])`)
      await expect(header.locator('.column-collapse-group-label')).toContainText(`${priority}(3)`)
      await expect.poll(() => header.locator('.header-text').evaluate(element => element.clientWidth - element.scrollWidth)).toBeGreaterThanOrEqual(0)
    }
    await pivot.getByRole('button', { name: 'Expand Critical' }).click()
    await expect(pivot.getByRole('button', { name: 'Collapse Critical' })).toBeVisible()
    await expect(pivot.getByRole('columnheader', { name: /Resolution Hours/ }).first()).toBeVisible()
    await expect(pivot.locator('.rgHeaderCell[multi-row-header-group-span]:has(button[aria-label="Expand High"])')).toContainText('High')
    await pivot.getByRole('button', { name: 'Collapse Critical' }).click()
    await page.setViewportSize({ width: 390, height: 844 })
    const narrowLabel = pivot.locator('.rgHeaderCell:has(button[aria-label="Expand Critical"]) .header-text')
    await expect.poll(() => narrowLabel.evaluate(element => element.clientWidth - element.scrollWidth)).toBeGreaterThanOrEqual(0)
    await page.setViewportSize({ width: 1800, height: 900 })
    const detailGrid = demo.locator('revo-grid.ticket-grid')
    await expect(detailGrid).toBeVisible()
    const pager = detailGrid.locator('.rv-pagination-panel')
    await expect(pager).toBeVisible()
    await demo.getByRole('combobox', { name: 'Team' }).selectOption({ index: 1 })
    await expect(ticketCount).toHaveText('120')
    await demo.getByRole('button', { name: 'Reset scope' }).click()
    await expect(ticketCount).toHaveText('480')
    await expect(detailGrid).toBeVisible()
    const detailScroll = detailGrid.locator('.vertical-inner')
    await expect.poll(() => detailScroll.evaluate(element => element.scrollHeight - element.clientHeight)).toBeGreaterThan(0)
    await detailScroll.evaluate(element => { element.scrollTop = element.scrollHeight })
    await expect.poll(() => detailScroll.evaluate(element => element.scrollTop)).toBeGreaterThan(0)
    await demo.getByRole('button', { name: 'Next' }).click()
    await expect(detailGrid).toContainText('SUP-00016')
    await demo.getByRole('button', { name: 'Previous' }).click()
    await demo.getByRole('combobox', { name: 'Team' }).selectOption('Platform')
    await demo.getByRole('combobox', { name: 'Priority' }).selectOption('Critical')
    await expect(ticketCount).toHaveText('40')
    await expect(detailGrid).toContainText('SUP-00001')
    const focusedValue = demo.locator('.pivot-panel .rgCell[data-rgcol="1"][data-rgrow="0"]').first()
    await focusedValue.click()
    await expect(demo.getByRole('button', { name: 'Inspect focused cell' })).toBeEnabled()
    await demo.getByRole('button', { name: 'Inspect focused cell' }).click()
    await expect(demo.locator('.detail-page-info')).toContainText('of 40')
    await expect(demo.getByRole('button', { name: 'Show selected scope' })).toBeVisible()
    await expect(detailGrid).toContainText('SUP-00001')
    await page.setViewportSize({ width: 390, height: 844 })
    const workspace = page.locator('.demo-page-workspace')
    await workspace.evaluate(element => { element.scrollTop = element.scrollHeight })
    await expect(pager).toBeInViewport()
  })

  test('Scale demo labels workload, browser and timing method', async ({ page }) => {
    await page.setViewportSize({ width: 1240, height: 795 })
    await page.goto('/demo/pivot-scale')
    const demo = page.locator('.scale-demo')
    await expect(demo).toContainText('10,000 rows ready', { timeout: 30_000 })
    const pivotHeaders = demo.locator('.scale-grid .rgHeaderCell')
    await expect.poll(() => pivotHeaders.evaluateAll(cells => cells.map(cell => Math.round(cell.getBoundingClientRect().width)))).toEqual([240, 200, 200, 200])
    await expect.poll(() => pivotHeaders.first().locator('.header-content').evaluate(cell => getComputedStyle(cell).paddingLeft)).toBe('12px')
    await expect.poll(() => demo.locator('.scale-grid revogr-data .rgCell').first().evaluate(cell => getComputedStyle(cell).paddingRight)).toBe('12px')
    expect(await demo.locator('#status').evaluate(status => status.parentElement?.classList.contains('scale-controls'))).toBe(true)
    const performance = demo.getByRole('region', { name: 'Browser performance metrics' })
    await expect(performance).toBeVisible()
    await expect(performance).toContainText('Performance')
    await expect(performance).toContainText('Measured live in this browser')
    await expect(performance).toContainText('10,000 client rows')
    expect((await performance.boundingBox())?.height).toBeLessThan(120)
    const panelBounds = await performance.boundingBox()
    expect(panelBounds && panelBounds.y + panelBounds.height).toBeLessThanOrEqual(795)
    expect(panelBounds && panelBounds.y + panelBounds.height).toBeGreaterThanOrEqual(745)
    expect((await demo.locator('#grid-host').boundingBox())?.height).toBeGreaterThan(160)
    const configurator = demo.locator('.pivot-config')
    await expect.poll(() => configurator.evaluate(element => element.scrollWidth - element.clientWidth)).toBeLessThanOrEqual(1)
    await expect.poll(() => configurator.evaluate(element => [...element.querySelectorAll('.panel-card')].every(card => card.scrollHeight <= card.clientHeight + 1))).toBe(true)
    const gridFrame = await demo.locator('#grid-host').evaluate(host => {
      const style = getComputedStyle(host)
      return {
        border: style.borderTopWidth,
        padding: style.paddingTop,
        radius: style.borderTopLeftRadius,
      }
    })
    expect(gridFrame).toEqual({ border: '0px', padding: '0px', radius: '0px' })
    expect(await performance.evaluate(panel => panel.previousElementSibling?.previousElementSibling?.id)).toBe('grid-host')
    await expect(demo.getByRole('button', { name: 'Remote adapter' })).toHaveCount(0)
    await expect(demo.locator('#aggregation')).toContainText('ms')
    const pivotHelp = performance.getByRole('button', { name: 'About Pivot apply' })
    await pivotHelp.hover()
    await expect(demo.locator('#scale-aggregation-tooltip')).toContainText('not a pure aggregation benchmark')
    await expect.poll(() => demo.locator('#scale-aggregation-tooltip').evaluate(tooltip => {
      const bounds = tooltip.getBoundingClientRect()
      return document.elementFromPoint(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2) === tooltip
    })).toBe(true)
    await pivotHelp.focus()
    await expect(demo.locator('#scale-aggregation-tooltip')).toBeVisible()
    await page.setViewportSize({ width: 1984, height: 1279 })
    const sidebar = demo.locator('.pivot-config')
    await expect.poll(() => sidebar.evaluate(element => element.scrollHeight - element.clientHeight)).toBeLessThanOrEqual(1)
    await expect.poll(() => sidebar.evaluate(element => element.scrollWidth - element.clientWidth)).toBeLessThanOrEqual(1)
    await expect.poll(() => sidebar.evaluate(element => element.getBoundingClientRect().width)).toBeGreaterThanOrEqual(340)
    await expect.poll(() => sidebar.evaluate(element => [...element.querySelectorAll('.panel-card button')].some(button => getComputedStyle(button).borderTopWidth === '0px'))).toBe(true)
    await page.setViewportSize({ width: 390, height: 844 })
    await expect(performance).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390)
    console.log('PIVOT_SCALE_EVIDENCE', {
      workload: (await demo.locator('#workload').textContent())?.trim(),
      pivotApply: (await demo.locator('#aggregation').textContent())?.trim(),
    })
  })

})
