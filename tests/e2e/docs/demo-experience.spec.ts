import { expect, test } from '@playwright/test'
import { PRODUCT_CATALOG } from '../../../commercial/productCatalog'

const canonicalDemos = Object.values(PRODUCT_CATALOG.demos)

test('every catalog demo mounts in the shared docs shell', async ({ page }) => {
  for (const demo of canonicalDemos) {
    await page.goto(demo.pageUrl)
    await expect(page.locator('.demo-page-layout')).toHaveAttribute('data-demo-id', demo.id)
    await expect(page.locator('.demo-page-workspace')).toBeVisible()
  }
})

test('compatibility routes resolve to the canonical demo identity', async ({ page }) => {
  for (const [path, demoId] of [['/demo/planning', 'planning'], ['/demo/hr', 'grid-at-scale']] as const) {
    await page.goto(path)
    await expect(page.locator('.demo-page-layout')).toHaveAttribute('data-demo-id', demoId)
  }
})

test('navigation search filters examples without changing the route', async ({ page }) => {
  await page.goto('/demo/')
  await expect(page.locator('.demo-nav a[href="/demo/"]')).toHaveClass(/active/)
  const search = page.getByPlaceholder('Find a demo…')
  await search.fill('kanban')
  await expect(page).toHaveURL(/\/demo\/$/)
  await expect(page.locator('.demo-nav nav a')).toHaveCount(3)
  await expect(page.locator('.demo-nav nav')).toContainText('Kanban')
})

test('demo pages do not render guided steps', async ({ page }) => {
  for (const demo of canonicalDemos) {
    await page.goto(demo.pageUrl)
    await expect(page.locator('[class*="demo-page-guide"]')).toHaveCount(0)
    await expect(page.getByRole('button', { name: 'Show guide' })).toHaveCount(0)
  }
})

test('source panel uses real files and preserves the live workspace', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 })
  await page.goto('/demo/')
  const taskSearch = page.getByPlaceholder('Search tasks…')
  await taskSearch.fill('Maya')
  await expect(page.getByText(/of 100 tasks/)).toBeVisible()

  await page.getByRole('button', { name: 'Code' }).click()
  await expect(page.getByRole('dialog', { name: 'Use this example' })).toBeVisible()
  const sourceGeometry = await page.evaluate(() => {
    const stage = document.querySelector('.demo-page-stage')!.getBoundingClientRect()
    const workspace = document.querySelector('.demo-page-workspace')!.getBoundingClientRect()
    const source = document.querySelector('.demo-source')!.getBoundingClientRect()
    return { stage, workspace, source }
  })
  expect(sourceGeometry.source.left).toBeGreaterThan(sourceGeometry.stage.left)
  expect(sourceGeometry.source.right).toBeLessThanOrEqual(sourceGeometry.stage.right + 1)
  expect(sourceGeometry.workspace.left).toBe(sourceGeometry.stage.left)
  expect(sourceGeometry.workspace.right).toBeLessThan(sourceGeometry.source.left)
  await expect(page.getByLabel('File')).toHaveValue('0')
  await expect(page.getByLabel('File')).toContainText('planning.vue')
  await page.getByRole('tab', { name: 'React' }).click()
  await expect(page.getByLabel('File')).toContainText('planning.react.tsx')
  await page.keyboard.press('Escape')

  await expect(taskSearch).toHaveValue('Maya')
  await expect(page.getByRole('button', { name: 'Code' })).toBeFocused()
})

test('clipboard errors are visible and do not close the source panel', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: () => Promise.reject(new Error('denied')) },
    })
  })
  await page.goto('/demo/')
  await page.getByRole('button', { name: 'Code' }).click()
  await page.getByRole('button', { name: 'Copy', exact: true }).click()
  await expect(page.getByRole('button', { name: 'Copy failed' })).toBeVisible()
  await expect(page.getByRole('dialog', { name: 'Use this example' })).toBeVisible()
})

test('grid selection controls show clear unchecked, checked and mixed states', async ({ page }) => {
  await page.goto('/demo/')
  const checkboxes = page.locator('.row-select-checkbox')
  await expect(checkboxes.nth(1)).toBeVisible()

  const unchecked = await checkboxes.nth(1).evaluate(element => ({
    appearance: getComputedStyle(element).appearance,
    borderWidth: getComputedStyle(element).borderWidth,
    background: getComputedStyle(element).backgroundColor,
    size: element.getBoundingClientRect().width,
    availableWidth: element.parentElement?.parentElement?.getBoundingClientRect().width,
  }))
  await checkboxes.nth(1).click()
  const selected = await checkboxes.nth(1).evaluate(element => ({
    checked: (element as HTMLInputElement).checked,
    background: getComputedStyle(element).backgroundColor,
  }))
  const mixed = await checkboxes.nth(0).evaluate(element => ({
    indeterminate: (element as HTMLInputElement).indeterminate,
  }))

  expect(selected.checked).toBe(true)
  expect(selected.background).toBe('rgb(19, 138, 91)')
  expect(unchecked.size).toBe(17)
  expect(unchecked.availableWidth).toBeGreaterThanOrEqual(16)
  expect(unchecked.appearance).toBe('none')
  expect(unchecked.borderWidth).toBe('2px')
  expect(unchecked.background).not.toBe(selected.background)
  expect(mixed.indeterminate).toBe(true)

  await expect(page.locator('.rgHeaderCell.cell-checkbox .header-controls')).toBeHidden()
  await checkboxes.nth(0).click()
  await expect(checkboxes.nth(0)).toBeChecked()
  await expect(checkboxes.nth(1)).toBeChecked()
  await expect(page.locator('.planning-demo__footer')).toContainText('60 selected')

  await checkboxes.nth(0).click()
  await expect(checkboxes.nth(0)).not.toBeChecked()
  await expect(checkboxes.nth(1)).not.toBeChecked()
  await expect(page.locator('.planning-demo__footer')).not.toContainText('selected')
})

test('grid and Kanban content stays aligned inside its cells', async ({ page }) => {
  await page.goto('/demo/')
  await expect(page.locator('.planning-demo__grid')).toBeVisible()
  await expect(page.locator('.avatar-cell__image').first()).toBeVisible()

  const gridMetrics = await page.evaluate(() => {
    const avatar = document.querySelector('.avatar-cell__image') as HTMLElement
    const readonlyCells = Array.from(document.querySelectorAll('revogr-data .rgCell.disabled')) as HTMLElement[]
    return {
      avatarSize: avatar?.getBoundingClientRect().height,
      avatarMargin: avatar ? getComputedStyle(avatar).margin : null,
      readonlyBackgrounds: readonlyCells.map(cell => getComputedStyle(cell).backgroundColor),
    }
  })
  expect(gridMetrics.avatarSize).toBe(20)
  expect(gridMetrics.avatarMargin).toBe('0px')
  expect(gridMetrics.readonlyBackgrounds.every(color => color === 'rgba(0, 0, 0, 0)')).toBe(true)

  await page.getByRole('tab', { name: 'Kanban' }).click()
  await expect(page.locator('.kanban-card').first()).toBeVisible()
  const kanbanMetrics = await page.evaluate(() => ({
    columns: Array.from(document.querySelectorAll('.kanban-column-header-cell')).map(column => column.getBoundingClientRect().width),
    cards: Array.from(document.querySelectorAll('.kanban-card')).slice(0, 4).map(card => card.getBoundingClientRect().width),
  }))
  expect(kanbanMetrics.columns).toEqual([228, 228, 228, 228])
  expect(kanbanMetrics.cards.every(width => width >= 190)).toBe(true)
})

test('workspace popovers close after actions, outside clicks and Escape', async ({ page }) => {
  await page.goto('/demo/')
  const more = page.locator('.planning-demo__actions details')
  await more.locator('summary').click()
  await expect(more).toHaveAttribute('open', '')
  await more.getByRole('button', { name: 'Reset' }).click()
  await expect(more).not.toHaveAttribute('open', '')

  await page.getByRole('button', { name: 'Filter', exact: true }).click()
  await expect(page.locator('.planning-demo__filter-popover')).toBeVisible()
  await page.getByRole('heading', { name: 'Project workspace' }).click()
  await expect(page.locator('.planning-demo__filter-popover')).toBeHidden()

  await page.getByRole('button', { name: 'Filter', exact: true }).click()
  await page.keyboard.press('Escape')
  await expect(page.locator('.planning-demo__filter-popover')).toBeHidden()
})

test('planning layout stays usable at the target viewports', async ({ page }) => {
  for (const viewport of [
    { width: 1440, height: 900 },
    { width: 1280, height: 720 },
    { width: 960, height: 800 },
    { width: 390, height: 844 },
  ]) {
    await page.setViewportSize(viewport)
    await page.goto('/demo/')
    await expect(page.locator('body')).toBeVisible()
    await expect(page.locator('.planning-demo__grid')).toBeVisible()
    const pageOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    expect(pageOverflow).toBeLessThanOrEqual(1)
    const edgeAlignment = await page.evaluate(() => {
      const header = document.querySelector('.demo-page-header')!.getBoundingClientRect()
      const grid = document.querySelector('.planning-demo__grid')!.getBoundingClientRect()
      return {
        left: Math.abs(grid.left - header.left),
        right: Math.abs(grid.right - header.right),
      }
    })
    expect(edgeAlignment.left).toBeLessThanOrEqual(1)
    expect(edgeAlignment.right).toBeLessThanOrEqual(1)
    if (viewport.width < 1100) {
      await expect(page.getByRole('button', { name: 'Examples', exact: true })).toBeVisible()
    } else {
      await expect(page.locator('.demo-nav')).toBeVisible()
      const shellGeometry = await page.evaluate(() => {
        const sidebar = document.querySelector('.demo-nav')!.getBoundingClientRect()
        const scrollArea = document.querySelector('.demo-nav nav')!.getBoundingClientRect()
        const layout = document.querySelector('.demo-page-layout')!.getBoundingClientRect()
        const divider = document.querySelector('.VPNavBar .divider-line')!.getBoundingClientRect()
        const title = document.querySelector('.VPNavBarTitle .title')!
        const primaryAction = document.querySelector('.demo-page-button--primary')!.getBoundingClientRect()
        const githubAction = document.querySelector('.demo-page-github')!.getBoundingClientRect()
        const stage = document.querySelector('.demo-page-stage')!
        const grid = document.querySelector('.planning-demo__grid')!
        return {
          sidebarWidth: sidebar.width,
          scrollbarEdge: sidebar.right - scrollArea.right,
          layoutLeft: layout.left,
          dividerLeft: divider.left,
          dividerWidth: divider.width,
          titleBorderWidth: getComputedStyle(title).borderBottomWidth,
          actionOffset: Math.abs(primaryAction.top - githubAction.top),
          stageBorderWidth: getComputedStyle(stage).borderWidth,
          gridBorderWidth: getComputedStyle(grid).borderWidth,
          sidebarTitleCount: document.querySelectorAll('.demo-nav header strong').length,
        }
      })
      expect(shellGeometry.sidebarWidth).toBe(256)
      expect(shellGeometry.scrollbarEdge).toBeLessThanOrEqual(1)
      expect(shellGeometry.layoutLeft).toBe(256)
      expect(shellGeometry.dividerLeft).toBe(0)
      expect(shellGeometry.dividerWidth).toBe(viewport.width)
      expect(shellGeometry.titleBorderWidth).toBe('0px')
      expect(shellGeometry.actionOffset).toBeLessThanOrEqual(1)
      expect(shellGeometry.stageBorderWidth).toBe('0px')
      expect(shellGeometry.gridBorderWidth).toBe('1px')
      expect(shellGeometry.sidebarTitleCount).toBe(0)
    }

    if (viewport.width === 1280) {
      const gridMetrics = await page.evaluate(() => {
        const grid = document.querySelector('.planning-demo__grid')
        if (!grid) return null

        const bounds = grid.getBoundingClientRect()
        const completeRows = Array.from(grid.querySelectorAll('.rgRow')).filter(row => {
          const rowBounds = row.getBoundingClientRect()
          return rowBounds.top >= bounds.top && rowBounds.bottom <= bounds.bottom
        }).length

        return { top: bounds.top, completeRows }
      })

      expect(gridMetrics).not.toBeNull()
      expect(gridMetrics!.top).toBeLessThanOrEqual(280)
      expect(gridMetrics!.completeRows).toBeGreaterThanOrEqual(9)
    }
  }
})

test('demo surfaces stay transparent while controls and grid borders retain contrast', async ({ page }) => {
  const readSurfaces = () => page.evaluate(() => {
    const color = (selector: string, property: 'backgroundColor' | 'borderColor' = 'backgroundColor') =>
      getComputedStyle(document.querySelector(selector) as Element)[property]
    return {
      canvas: color('.demo-page-layout'),
      sidebar: color('.demo-nav'),
      stage: color('.demo-page-stage'),
      grid: color('.planning-demo__grid'),
      gridHeader: color('.planning-demo__grid revogr-header .rgHeaderCell'),
      controlBorder: color('.planning-demo__search', 'borderColor'),
      gridBorder: color('.planning-demo__grid', 'borderColor'),
    }
  })

  await page.goto('/demo/')
  await page.evaluate(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  await page.reload()
  await expect(page.locator('.planning-demo__grid')).toBeVisible()
  expect(await readSurfaces()).toEqual({
    canvas: 'rgba(0, 0, 0, 0)',
    sidebar: 'rgba(0, 0, 0, 0)',
    stage: 'rgba(0, 0, 0, 0)',
    grid: 'rgba(0, 0, 0, 0)',
    gridHeader: 'rgba(0, 0, 0, 0)',
    controlBorder: 'rgb(184, 194, 190)',
    gridBorder: 'rgb(184, 194, 190)',
  })

  await page.evaluate(() => localStorage.setItem('vitepress-theme-appearance', 'dark'))
  await page.reload()
  await expect(page.locator('html')).toHaveClass(/dark/)
  await expect(page.locator('.planning-demo__grid')).toBeVisible()
  expect(await readSurfaces()).toEqual({
    canvas: 'rgba(0, 0, 0, 0)',
    sidebar: 'rgba(0, 0, 0, 0)',
    stage: 'rgba(0, 0, 0, 0)',
    grid: 'rgba(0, 0, 0, 0)',
    gridHeader: 'rgba(0, 0, 0, 0)',
    controlBorder: 'rgb(80, 91, 86)',
    gridBorder: 'rgb(80, 91, 86)',
  })
})

test('planning Gantt uses varied schedules and aligns the Today marker', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/demo/')
  const ganttTab = page.locator('.planning-demo__switch button').filter({ hasText: 'gantt' })
  await expect(ganttTab).toBeVisible()
  await ganttTab.click()
  await expect(page.locator('.gantt-header-flag-cap--today')).toBeVisible()
  await expect(page.locator('.gantt-bar--task').first()).toBeVisible()

  const timeline = await page.evaluate(() => {
    const cap = document.querySelector('.gantt-header-flag-cap--today')!.getBoundingClientRect()
    const line = document.querySelector('.gantt-background__flag-line--today')!.getBoundingClientRect()
    const widths = Array.from(document.querySelectorAll('.gantt-bar--task'))
      .map(bar => bar.getBoundingClientRect().width)
      .filter(width => width > 0)
    return { markerOffset: Math.abs(cap.left - line.left), widths }
  })

  expect(timeline.markerOffset).toBeLessThanOrEqual(1)
  expect(timeline.widths.length).toBeGreaterThanOrEqual(9)
  expect(Math.max(...timeline.widths) - Math.min(...timeline.widths)).toBeGreaterThan(30)
})
