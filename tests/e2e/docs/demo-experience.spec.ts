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
  const search = page.getByPlaceholder('Find a demo…')
  await search.fill('kanban')
  await expect(page).toHaveURL(/\/demo\/$/)
  await expect(page.locator('.demo-nav nav a')).toHaveCount(3)
  await expect(page.locator('.demo-nav nav')).toContainText('Kanban')
})

test('source panel uses real files and preserves the live workspace', async ({ page }) => {
  await page.goto('/demo/')
  const taskSearch = page.getByPlaceholder('Search tasks…')
  await taskSearch.fill('Maya')
  await expect(page.getByText(/of 50 tasks/)).toBeVisible()

  await page.getByRole('button', { name: 'Code' }).click()
  await expect(page.getByRole('dialog', { name: 'Use this example' })).toBeVisible()
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
    if (viewport.width < 1100) {
      await expect(page.getByRole('button', { name: 'Examples', exact: true })).toBeVisible()
    } else {
      await expect(page.locator('.demo-nav')).toBeVisible()
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
