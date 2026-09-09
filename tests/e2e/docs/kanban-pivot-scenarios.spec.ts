import { expect, test } from '@playwright/test'

async function openDemo(page: import('@playwright/test').Page, demoId: string) {
  await page.goto(`/demo/${demoId}`)
  await expect(page.locator('.demo-page-layout')).toHaveAttribute('data-demo-id', demoId)
  await expect(page.locator('.demo-page-workspace revo-grid').first()).toBeVisible({
    timeout: 20_000,
  })
}

function workflowCounts(board: import('@playwright/test').Locator) {
  return board.locator('.kanban-column-header__count')
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
    await expect(board.locator('[data-kanban-swimlane-id="Product"]')).toBeVisible()
    await expect(board.locator('[data-kanban-swimlane-id="Platform"]')).toBeVisible()
  })

  test('task board moves, warns, cancels and restores collapsed lanes', async ({ page }) => {
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
    await expect(board.locator('[data-kanban-column-prop="progress"]')).toContainText(
      'Customer interview synthesis',
    )
    await expect(board.locator('[data-kanban-column-prop="progress"]')).toContainText('4 of 4 WIP')

    await card.focus()
    await page.keyboard.press('Space')
    await page.keyboard.press('ArrowRight')
    await page.keyboard.press('Escape')
    await expect(workflowCounts(board)).toHaveText(['2 cards', '4 cards', '2 cards', '2 cards'])

    const productLane = board.locator('.kanban-swimlane-header[data-kanban-swimlane-id="Product"]')
    await productLane.getByRole('button', { name: 'Collapse swimlane: Product team' }).click()
    await expect(productLane.getByRole('button')).toHaveAttribute('aria-expanded', 'false')
    await expect(board.locator('[data-kanban-card-id="KAN-101"]')).toBeHidden()
    await expect(board.locator('[data-kanban-card-id="KAN-201"]')).toBeVisible()
    await productLane.getByRole('button', { name: 'Expand swimlane: Product team' }).click()
    await expect(board.locator('[data-kanban-card-id="KAN-101"]')).toBeVisible()
  })

  test('50K Kanban keeps initial rendering bounded and validates the editor', async ({ page }) => {
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
    await expect(dialog.getByText('Story points cannot be negative.')).toBeVisible()
    await expect(dialog).toBeVisible()

    await points.fill('13')
    await dialog.getByRole('button', { name: /^Save$/ }).click()
    await expect(dialog).toBeHidden()
    await card.dblclick()
    await expect(dialog.getByLabel('Story points')).toHaveValue('13')
    await dialog.getByRole('button', { name: /^Cancel$/ }).click()
    await expect(dialog).toBeHidden()
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
    const created = board.getByText('E2E disposable card', { exact: true })
    await expect(created).toBeVisible()

    await created.click({ button: 'right' })
    await expect(menu).toBeVisible()
    await menu.getByRole('menuitem', { name: 'Delete card' }).click()
    await expect(created).toBeHidden()

    await page.setViewportSize({ width: 390, height: 844 })
    await expect(board).toBeVisible()
    const pageOverflow = await page
      .locator('html')
      .evaluate(element => element.scrollWidth > element.clientWidth)
    expect(pageOverflow).toBe(false)
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

  test('Pivot presets, configuration visibility and expanded workspace work', async ({ page }) => {
    await openDemo(page, 'pivot')

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
    await page.addInitScript(() => {
      localStorage.removeItem('revogrid:pivot-showcase:v1')
      localStorage.removeItem('revogrid:pivot-showcase:preset:v1')
    })
    await openDemo(page, 'pivot')
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

  test('server retry is unavailable in the deterministic demo fixture', async () => {
    test.skip(
      true,
      'The simulated callback always resolves and the demo exposes no error/retry control.',
    )
  })
})
