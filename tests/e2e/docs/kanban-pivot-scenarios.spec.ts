import { expect, test } from '@playwright/test'

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

async function setPivotStorage(
  page: import('@playwright/test').Page,
  value: { config: string | null; preset: string | null },
) {
  await page.goto('/demo/kanban')
  await page.evaluate(({ config, preset }) => {
    const configKey = 'revogrid:pivot-showcase:v1'
    const presetKey = 'revogrid:pivot-showcase:preset:v1'
    if (config === null) localStorage.removeItem(configKey)
    else localStorage.setItem(configKey, config)
    if (preset === null) localStorage.removeItem(presetKey)
    else localStorage.setItem(presetKey, preset)
  }, value)
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

  test('Pivot presets, configuration visibility and expanded workspace work', async ({ page }) => {
    await openPivotDemo(page)

    const report = page.locator('.financial-pivot-showcase')
    const presets = page.getByRole('tablist', { name: 'Financial report presets' })
    await expect(presets).toBeVisible()
    await expect(presets.getByRole('tab', { name: 'Sales Overview' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    const fields = page.getByRole('button', { name: 'Hide fields' })
    await expect(fields).toBeVisible()
    await fields.click()
    await expect(page.getByRole('button', { name: 'Configure' })).toBeVisible()
    await expect(report.locator('revo-grid')).toBeVisible()
    await page.getByRole('button', { name: 'Configure' }).click()
    await expect(page.getByRole('button', { name: 'Hide fields' })).toBeVisible()

    await presets.getByRole('tab', { name: 'Profitability' }).click()
    await expect(presets.getByRole('tab', { name: 'Profitability' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    await expect(report).toContainText('Profit')

    await page.getByRole('button', { name: 'Expand workspace' }).click()
    await expect(page.getByRole('button', { name: 'Exit expanded workspace' })).toBeVisible()
    await expect(report).toHaveCSS('position', 'fixed')
    await page.getByRole('button', { name: 'Exit expanded workspace' }).click()
    await expect(page.getByRole('button', { name: 'Expand workspace' })).toBeVisible()
  })

  test('Pivot presets render their documented grand totals and persist selection', async ({
    page,
  }) => {
    await setPivotStorage(page, { config: null, preset: null })
    await openPivotDemo(page)
    const report = page.locator('.financial-pivot-showcase')
    const presets = page.getByRole('tablist', { name: 'Financial report presets' })

    await expect(report).toContainText('$129,319,628.28')
    await expect(report).toContainText('$42,766,659.96')
    await expect(report).toContainText('750,367')

    await presets.getByRole('tab', { name: 'Profitability' }).click()
    await expect(report).toContainText('$51,791,074.03')
    await expect(report).toContainText('$141,041,425.25')
    await expect(report).toContainText('$89,250,351.22')

    await presets.getByRole('tab', { name: 'Product Performance' }).click()
    await expect(report).toContainText('$50,345,536.34')
    await expect(report).toContainText('256,808')
    await expect(report).toContainText('$2,778,114.04')
    await expect
      .poll(() => page.evaluate(() => localStorage.getItem('revogrid:pivot-showcase:preset:v1')))
      .toBe('product')
    await page.reload()
    await expect(presets.getByRole('tab', { name: 'Product Performance' })).toHaveAttribute(
      'aria-selected',
      'true',
    )

    await page.setViewportSize({ width: 390, height: 844 })
    await page.reload()
    await expect(page.getByRole('button', { name: 'Configure' })).toBeVisible()
    await expect(report.locator('revo-grid')).toBeVisible()
  })

  test('Pivot configurator changes Discount Band and restores the Sales baseline', async ({
    page,
  }) => {
    await setPivotStorage(page, { config: null, preset: null })
    await openPivotDemo(page)
    const report = page.locator('.financial-pivot-showcase')
    const configurator = page.locator('.pivot-config')
    await expect(configurator).toBeVisible()

    const discountBand = configurator.getByRole('combobox', {
      name: 'Discount Band filter value',
    })
    await expect(discountBand).toContainText('High')
    await discountBand.selectOption({ label: 'Medium' })
    await expect(discountBand).toContainText('Medium')
    await expect(report).toContainText('$141,041,425.25')
    await expect(report).toContainText('$51,791,074.03')
    await expect(report).toContainText('776,029')

    await discountBand.selectOption({ label: 'High' })
    await expect(discountBand).toContainText('High')
    await expect(report).toContainText('$129,319,628.28')
  })

  test('Pivot Product member filter refines and clears the current Discount Band subset', async ({
    page,
  }) => {
    await setPivotStorage(page, { config: null, preset: null })
    await openPivotDemo(page)
    const report = page.locator('.financial-pivot-showcase')
    const configurator = page.locator('.pivot-config')
    const discountBand = configurator.getByRole('combobox', {
      name: 'Discount Band filter value',
    })
    const product = configurator.getByRole('combobox', { name: 'Product filter value' })

    await discountBand.selectOption({ label: 'Medium' })
    await expect(report).toContainText('$141,041,425.25')
    await product.selectOption({ label: 'Apex Suite' })
    await expect(product).toContainText('Apex Suite')
    await expect(report).not.toContainText('$141,041,425.25')

    await product.selectOption({ label: 'All' })
    await expect(product).toContainText('All')
    await expect(report).toContainText('$141,041,425.25')
  })

  test('Pivot configurator changes row fields and the Sales aggregation', async ({ page }) => {
    await setPivotStorage(page, { config: null, preset: null })
    await openPivotDemo(page)
    const configurator = page.locator('.pivot-config')
    const rowsZone = configurator
      .locator('.zone-title', { hasText: 'Rows' })
      .locator('..')
      .locator('ul')
    const dimensionFields = configurator.locator('.pivot-dimensions-panel')
    await expect(rowsZone).toContainText('Country')
    await expect(rowsZone).toContainText('Segment')

    await rowsZone.getByRole('button', { name: 'Remove' }).nth(1).click()
    await expect(rowsZone).not.toContainText('Segment')
    await dimensionFields.getByRole('button', { name: 'Drag Product' }).dragTo(rowsZone)
    await expect(rowsZone).toContainText('Country')
    await expect(rowsZone).toContainText('Product')

    const salesAggregation = configurator.locator('.pivot-value-selector').first()
    await salesAggregation.selectOption('avg')
    await expect(salesAggregation).toHaveValue('avg')
    await expect(page.locator('.financial-pivot-showcase')).toContainText('Sales')

    await page.reload()
    await expect(
      page.locator('.pivot-config .zone-title', { hasText: 'Rows' }).locator('..').locator('ul'),
    ).toContainText('Product')
    await expect(page.locator('.pivot-config .pivot-value-selector').first()).toHaveValue('avg')
  })

  test('Pivot collapses and restores the Canada row group without changing the grand total', async ({
    page,
  }) => {
    await setPivotStorage(page, { config: null, preset: null })
    await openPivotDemo(page)
    const report = page.locator('.financial-pivot-showcase')
    const grid = report.locator('revo-grid')
    const groupRows = grid.locator('.rgRow.groupingRow')
    const canada = groupRows.filter({ hasText: /^Canada$/ })

    await expect(canada).toBeVisible()
    await expect(report).toContainText('$129,319,628.28')
    await canada.locator('.group-expand').click()
    await expect(canada.locator('.group-expand svg')).toHaveAttribute('style', /rotate\(-90deg\)/)
    await expect(report).toContainText('$129,319,628.28')

    await canada.locator('.group-expand').click()
    await expect(canada.locator('.group-expand svg')).toHaveAttribute('style', /rotate\(0deg\)/)
  })

  test('Pivot invalid saved state falls back to the documented Sales Overview', async ({
    page,
  }) => {
    await setPivotStorage(page, { config: '{invalid-json', preset: 'unknown-preset' })
    await openPivotDemo(page)
    const presets = page.getByRole('tablist', { name: 'Financial report presets' })
    await expect(presets.getByRole('tab', { name: 'Sales Overview' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    await expect(page.locator('.financial-pivot-showcase')).toContainText('$129,319,628.28')
  })

  test('Pivot remains readonly and remounts one persisted report after navigation', async ({
    page,
  }) => {
    await setPivotStorage(page, { config: null, preset: null })
    await openPivotDemo(page)
    const report = page.locator('.financial-pivot-showcase')
    const presets = page.getByRole('tablist', { name: 'Financial report presets' })
    await presets.getByRole('tab', { name: 'Product Performance' }).click()
    await expect(presets.getByRole('tab', { name: 'Product Performance' })).toHaveAttribute(
      'aria-selected',
      'true',
    )

    await page.goto('/demo/kanban')
    await expect(page.locator('.kanban-showcase__grid')).toBeVisible()

    await openPivotDemo(page)
    await expect(page.getByRole('tab', { name: 'Product Performance' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    await expect(report.locator('financial-pivot-header')).toHaveCount(1)
    await expect(report.locator('revo-grid')).toHaveCount(1)
    await expect(report.locator('revo-grid')).toHaveJSProperty('readonly', true)
  })
})
