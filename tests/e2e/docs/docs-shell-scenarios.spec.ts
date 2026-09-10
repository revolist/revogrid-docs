import { expect, test } from '@playwright/test'
import { PRODUCT_CATALOG, type DemoId } from '../../../commercial/productCatalog'

/**
 * Shell release gates deliberately exercise the docs host around the embedded
 * examples. Demo-specific behavior belongs in the feature suites; these tests
 * make sure that navigation, source inspection, state isolation, responsive
 * layout, and fullscreen do not replace or corrupt a running example.
 */
const demoReadiness: Record<DemoId, string> = {
  'grid-at-scale': '.hr-scale-grid',
  'ai-prompt-library': '.prompt-grid',
  'project-portfolio': '.portfolio-grid',
  'project-tracker': '.project-tracker-grid',
  'audit-history': '.audit-grid',
  'column-collapse': '.column-collapse-grid',
  'context-menu': '.data-grid-context-menu-grid',
  filtering: '.order-explorer revo-grid',
  'infinity-scroll': '.infinity-status',
  'row-master': '.row-master-grid',
  'tree-data': '.tree-grid',
  excel: '.spreadsheet-grid',
  pivot: '.financial-pivot-showcase',
  gantt: 'revo-grid.gantt-showcase-grid',
  'gantt-big-data': 'revo-grid.gantt-big-data-grid',
  'gantt-horizontal-big-data': 'revo-grid.gantt-horizontal-big-data-grid',
  kanban: '.kanban-showcase__grid',
  'kanban-performance': '.kanban-board__grid',
  'kanban-server-loading': '.kanban-server-loading__grid',
  'event-scheduler': '.event-scheduler-shift-week-demo',
  planning: '.planning-demo',
}

const canonicalDemos = Object.values(PRODUCT_CATALOG.demos)

async function openPlanningSource(page: import('@playwright/test').Page) {
  await page.goto('/demo/')
  const workspace = page.locator('.planning-demo')
  await expect(workspace).toBeVisible()
  await page.getByRole('button', { name: 'Code', exact: true }).click()
  const panel = page.getByRole('dialog', { name: 'Example source code' })
  await expect(panel).toBeVisible()
  await expect(panel.locator('.demo-source__code')).toContainText(/\S/)
  return { panel, workspace }
}

test.describe('shared docs shell scenarios', () => {
  test('SHELL-01: every canonical docs demo mounts exactly its own ready fixture', async ({
    page,
  }) => {
    test.setTimeout(180_000)

    for (const demo of canonicalDemos) {
      await page.goto(demo.pageUrl)
      const layout = page.locator('.demo-page-layout')
      await expect(layout).toHaveAttribute('data-demo-id', demo.id)
      await expect(layout.getByRole('heading', { level: 1 })).not.toBeEmpty()
      await expect(page.locator(demoReadiness[demo.id])).toBeVisible()
      await expect(layout.getByRole('button', { name: 'Code', exact: true })).toBeVisible()
      await expect(layout.locator('.demo-page-github')).toHaveAttribute('href', /github\.com/)
      await expect(layout.getByRole('link', { name: /Try in your app/ })).toHaveAttribute(
        'href',
        /\S+/,
      )
      await expect(page.locator('.demo-page-layout')).toHaveCount(1)
    }
  })

  test('SHELL-02: aliases keep their canonical identity, active navigation, and history', async ({
    page,
  }) => {
    await page.goto('/demo/planning')
    await expect(page.locator('.demo-page-layout')).toHaveAttribute('data-demo-id', 'planning')
    await expect(page.locator('.planning-demo__footer')).toContainText('100 of 100 tasks')
    await expect(page.locator('.demo-nav a.active')).toContainText('Project workspace')
    await page.locator('.demo-nav a[href="/demo/"]').click()
    await expect(page).toHaveURL(/\/demo\/$/)
    await expect(page.locator('.demo-page-layout')).toHaveAttribute('data-demo-id', 'planning')
    await page.goBack()
    await expect(page).toHaveURL(/\/demo\/planning$/)
    await expect(page.locator('.planning-demo')).toBeVisible()

    await page.goto('/demo/hr')
    await expect(page.locator('.demo-page-layout')).toHaveAttribute('data-demo-id', 'grid-at-scale')
    await expect(page.getByText('Avery Chen', { exact: true })).toBeVisible()
    await expect(page.locator('.demo-nav a.active')).toContainText('Performance')
    await page.locator('.demo-nav a[href="/demo/grid-at-scale"]').click()
    await expect(page).toHaveURL(/\/demo\/grid-at-scale$/)
    await expect(page.locator('.hr-scale-grid')).toBeVisible()
    await page.goBack()
    await expect(page).toHaveURL(/\/demo\/hr$/)
    await expect(page.locator('.demo-page-layout')).toHaveAttribute('data-demo-id', 'grid-at-scale')
  })

  test('SHELL-03: navigation search is reversible and leaves the active workspace alone', async ({
    page,
  }) => {
    await page.goto('/demo/')
    const taskSearch = page.getByRole('searchbox', { name: 'Quick search tasks' })
    const demoSearch = page.getByPlaceholder('Find a demo…')
    await taskSearch.fill('Maya')
    await expect(page.locator('.planning-demo__footer')).toContainText('20 of 100 tasks')

    const visibleDemoLinks = page.locator('.demo-nav nav a:visible')
    await demoSearch.fill('kanban')
    await expect(page).toHaveURL(/\/demo\/$/)
    await expect(visibleDemoLinks).toHaveCount(3)
    await expect(visibleDemoLinks).toContainText(['Task board', '50K cards', 'Server loading'])
    await expect(taskSearch).toHaveValue('Maya')

    await demoSearch.fill('zz-no-demo-qa')
    await expect(page.getByText('No matching demos', { exact: true })).toBeVisible()
    await expect(taskSearch).toHaveValue('Maya')

    await demoSearch.fill('  KANBAN  ')
    await expect(visibleDemoLinks).toHaveCount(3)
    await demoSearch.fill('')
    await expect(visibleDemoLinks).toHaveCount(11)
    await page.locator('.demo-nav a[href="/demo/filtering"]').click()
    await expect(page).toHaveURL(/\/demo\/filtering$/)
    await expect(page.locator('.order-explorer__count')).toContainText('217 of 10,000')
  })

  test('SHELL-04: framework/file selection persists without replacing the live workspace', async ({
    page,
  }) => {
    await page.context().clearCookies()
    await page.goto('/demo/')
    await page.evaluate(() => sessionStorage.removeItem('revogrid-demo-source-framework'))
    await page.reload()
    const taskSearch = page.getByRole('searchbox', { name: 'Quick search tasks' })
    await taskSearch.fill('Maya')
    await expect(page.locator('.planning-demo__footer')).toContainText('20 of 100 tasks')

    await page.getByRole('button', { name: 'Code', exact: true }).click()
    const panel = page.getByRole('dialog', { name: 'Example source code' })
    const file = panel.getByLabel('File')
    await expect(panel.getByRole('tab', { name: 'Vue' })).toHaveAttribute('aria-selected', 'true')
    await expect(file).toContainText('planning.vue')

    await panel.getByRole('tab', { name: 'React' }).click()
    await expect(panel.getByRole('tab', { name: 'React' })).toHaveAttribute('aria-selected', 'true')
    await expect(file).toHaveValue('0')
    await expect(file).toContainText('planning.react.tsx')
    const code = panel.locator('.demo-source__code')
    await expect(code).toContainText("from 'react'")
    await file.selectOption({ index: 1 })
    await expect(file).toHaveValue('1')
    await expect(code).toContainText('PLANNING_TIP_STORAGE_KEY')

    await panel.getByRole('tab', { name: 'Angular' }).click()
    await expect(file).toHaveValue('0')
    await expect(file).toContainText('planning.angular.ts')
    await panel.getByRole('tab', { name: 'JavaScript' }).click()
    await expect(file).toHaveValue('0')
    await expect(file).toContainText('planning.ts')
    await panel.getByRole('button', { name: 'Back to demo' }).click()
    await expect(taskSearch).toHaveValue('Maya')
    await expect(page.locator('.planning-demo__footer')).toContainText('20 of 100 tasks')

    await page.getByRole('button', { name: 'Code', exact: true }).click()
    await expect(panel.getByRole('tab', { name: 'JavaScript' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    await expect(file).toHaveValue('0')
    await panel.getByRole('button', { name: 'Back to demo' }).click()
    await page.goto('/demo/excel')
    await expect(page.locator('.spreadsheet-grid')).toBeVisible()
    await page.getByRole('button', { name: 'Code', exact: true }).click()
    await expect(page.getByRole('tab', { name: 'JavaScript' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    await expect(page.getByLabel('File')).toContainText('excel.ts')
  })

  test('SHELL-05: source dialog traps focus and restores the Code trigger at desktop and mobile widths', async ({
    page,
  }) => {
    const { panel } = await openPlanningSource(page)
    const first = panel.getByRole('tab', { name: 'Vue' })
    const copy = panel.getByRole('button', { name: 'Copy file' })
    await first.focus()
    await page.keyboard.press('Shift+Tab')
    await expect(copy).toBeFocused()
    await page.keyboard.press('Tab')
    await expect(first).toBeFocused()
    await page.keyboard.press('Escape')
    await expect(panel).toBeHidden()
    await expect(page.getByRole('button', { name: 'Code', exact: true })).toBeFocused()

    await page.setViewportSize({ width: 390, height: 844 })
    await page.getByRole('button', { name: 'Code', exact: true }).click()
    await expect(panel.getByRole('button', { name: 'Back to demo' })).toBeVisible()
    await panel.getByRole('button', { name: 'Back to demo' }).click()
    await expect(panel).toBeHidden()
    await expect(page.locator('.planning-demo')).toBeVisible()
  })

  test('SHELL-06: source copying reports both success and clipboard failure without losing the panel', async ({
    page,
    context,
  }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])
    const { panel } = await openPlanningSource(page)
    const code = panel.locator('.demo-source__code')
    const rawBeforeCopy = await code.innerText()
    await panel.getByRole('button', { name: 'Copy file' }).click()
    await expect(panel.getByRole('button', { name: 'Copied' })).toBeVisible()
    await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe(rawBeforeCopy)
    await panel.getByRole('tab', { name: 'React' }).click()
    await expect(panel.getByLabel('File')).toContainText('planning.react.tsx')
    const reactRaw = await code.innerText()
    await expect(reactRaw).not.toBe(rawBeforeCopy)

    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: { writeText: () => Promise.reject(new Error('denied')) },
      })
    })
    await page.reload()
    await page.getByRole('button', { name: 'Code', exact: true }).click()
    await page.getByRole('button', { name: 'Copy file' }).click()
    await expect(page.getByRole('button', { name: 'Copy failed' })).toBeVisible()
    await expect(page.getByRole('dialog', { name: 'Example source code' })).toBeVisible()
  })

  test('SHELL-07/08: responsive theme changes and route lifecycle do not leak a Planning query', async ({
    page,
  }) => {
    test.setTimeout(75_000)
    await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'dark'))
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/demo/')
    await expect(page.locator('html')).toHaveClass(/dark/)
    await expect(page.locator('.planning-demo')).toBeVisible({ timeout: 45_000 })

    for (const viewport of [
      { width: 1440, height: 900 },
      { width: 1280, height: 720 },
      { width: 960, height: 800 },
      { width: 390, height: 844 },
    ]) {
      await page.setViewportSize(viewport)
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
        ),
      ).toBe(true)
      if (viewport.width < 1100) {
        await expect(
          page.locator('.VPLocalNav .menu:visible, button[aria-label="extra navigation"]:visible'),
        ).toHaveCount(1)
      } else {
        await expect(page.locator('.demo-nav')).toBeVisible()
      }
    }

    const taskSearch = page.getByRole('searchbox', { name: 'Quick search tasks' })
    await taskSearch.fill('Maya')
    await expect(page.locator('.planning-demo__footer')).toContainText('20 of 100 tasks')
    await page.goto('/demo/filtering')
    await expect(page.locator('.order-explorer__count')).toContainText('217 of 10,000')
    await page.goto('/demo/')
    await expect(page.getByRole('searchbox', { name: 'Quick search tasks' })).toHaveValue('')
    await expect(page.locator('html')).toHaveClass(/dark/)
    await page.evaluate(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  })

  test('SHELL-09: source fullscreen retains its selected file through exit and Escape', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    const { panel } = await openPlanningSource(page)
    await panel.getByRole('tab', { name: 'React' }).click()
    await expect(panel.getByLabel('File')).toContainText('planning.react.tsx')
    await panel.getByRole('button', { name: 'Full screen code' }).click()
    await expect
      .poll(() =>
        page.evaluate(() => document.fullscreenElement?.classList.contains('demo-source')),
      )
      .toBe(true)
    await expect(panel.getByRole('button', { name: 'Exit full screen code' })).toBeVisible()
    await page.keyboard.press('Escape')
    const escapedFullscreen = await page
      .waitForFunction(() => document.fullscreenElement === null, undefined, { timeout: 1_000 })
      .then(() => true)
      .catch(() => false)
    if (!escapedFullscreen) {
      await panel.getByRole('button', { name: 'Exit full screen code' }).click()
      await expect.poll(() => page.evaluate(() => document.fullscreenElement)).toBeNull()
    }
    await expect(panel).toBeVisible()
    await expect(panel.getByLabel('File')).toContainText('planning.react.tsx')
    await page.keyboard.press('Escape')
    await expect(panel).toBeHidden()
    await expect(page.getByRole('button', { name: 'Code', exact: true })).toBeFocused()

    await page.setViewportSize({ width: 390, height: 844 })
    await page.evaluate(() => localStorage.setItem('vitepress-theme-appearance', 'dark'))
    await page.reload()
    await expect(page.locator('html')).toHaveClass(/dark/)
    await page.getByRole('button', { name: 'Code', exact: true }).click()
    const mobilePanel = page.getByRole('dialog', { name: 'Example source code' })
    await mobilePanel.getByRole('tab', { name: 'React' }).click()
    await expect(mobilePanel.getByLabel('File')).toContainText('planning.react.tsx')
    await mobilePanel.getByRole('button', { name: 'Full screen code' }).click()
    await expect
      .poll(() =>
        page.evaluate(() => document.fullscreenElement?.classList.contains('demo-source')),
      )
      .toBe(true)
    await mobilePanel.getByRole('button', { name: 'Exit full screen code' }).click()
    await expect.poll(() => page.evaluate(() => document.fullscreenElement)).toBeNull()
    await mobilePanel.getByRole('button', { name: 'Back to demo' }).click()
    await expect(mobilePanel).toBeHidden()
    await page.evaluate(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  })
})
