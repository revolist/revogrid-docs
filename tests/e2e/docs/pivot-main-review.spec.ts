import { mkdir } from 'node:fs/promises'
import { expect, test } from '@playwright/test'

const output = 'output/playwright/pivot-review'

test.beforeEach(async () => { await mkdir(output, { recursive: true }) })

test('main Pivot first-use journey and desktop screenshot', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/demo/pivot')
  await page.evaluate(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  await page.reload()
  await expect(page.getByRole('tab', { name: 'Sales Overview' })).toHaveAttribute('aria-selected', 'true')
  await expect(page.locator('.financial-pivot-grid-view revo-grid')).toBeVisible()
  await expect(page.getByRole('row', { name: /Australia/ }).first()).toBeVisible()
  await page.screenshot({ path: `${output}/main-desktop-light.png`, fullPage: true })
  await page.getByRole('tab', { name: 'Product Performance' }).click()
  await expect(page.getByRole('tab', { name: 'Product Performance' })).toHaveAttribute('aria-selected', 'true')
  await page.getByRole('button', { name: 'Fields' }).click()
  await expect(page.locator('.financial-pivot-header__button[data-action="fields"]')).toHaveAttribute('aria-pressed', 'true')
  await page.getByRole('button', { name: 'Close fields' }).click()
  await page.getByRole('button', { name: 'Chart', exact: true }).click()
  const chartType = page.getByRole('button', { name: 'Grouped column', exact: true })
  if (await chartType.isVisible()) await chartType.click()
  await expect(page.locator('.financial-pivot-chart')).toBeVisible()
  await page.getByRole('button', { name: 'Pivot', exact: true }).click()
  await expect(page.locator('.financial-pivot-grid-view')).toBeVisible()
  const csv = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Export CSV' }).click()
  expect((await csv).suggestedFilename()).toMatch(/\.csv$/)
  await page.locator('summary[aria-label="Report actions"]').click()
  const xlsx = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Export XLSX (visible result)' }).click()
  expect((await xlsx).suggestedFilename()).toBe('pivot-visible-report.xlsx')
  await page.getByRole('button', { name: 'Reset' }).click()
  await expect(page.getByRole('tab', { name: 'Sales Overview' })).toHaveAttribute('aria-selected', 'true')
  await page.evaluate(() => localStorage.setItem('vitepress-theme-appearance', 'dark'))
  await page.reload()
  await expect(page.locator('html')).toHaveClass(/dark/)
  await expect(page.locator('.financial-pivot-grid-view revo-grid')).toBeVisible()
  await page.screenshot({ path: `${output}/main-desktop-dark.png`, fullPage: true })
})

test('main Pivot mobile control reachability in light and dark', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/demo/pivot')
  await page.evaluate(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  await page.reload()
  await expect(page.getByRole('tab', { name: 'Sales Overview' })).toBeVisible()
  await expect(page.getByRole('row', { name: /Australia/ }).first()).toBeVisible()
  await page.screenshot({ path: `${output}/main-mobile-light.png`, fullPage: true })
  // Leave room for a complete amount beside the pinned row labels on mobile.
  expect((await page.locator('.financial-pivot-grid-view revogr-header .rgHeaderCell').first().boundingBox())!.width).toBeLessThanOrEqual(180)
  const horizontalScroll = page.locator('.financial-pivot-grid-view revogr-viewport-scroll.rgCol').first()
  await expect.poll(() => horizontalScroll.evaluate(element => element.scrollWidth - element.clientWidth)).toBeGreaterThan(0)
  await horizontalScroll.evaluate(element => { element.scrollLeft = element.scrollWidth })
  await expect.poll(() => horizontalScroll.evaluate(element => element.scrollLeft)).toBeGreaterThan(0)
  for (const action of ['Fields', 'Chart', 'Export CSV', 'Report actions', 'Reset']) {
    const control = action === 'Report actions'
      ? page.locator('summary[aria-label="Report actions"]')
      : page.getByRole('button', { name: action, exact: true })
    await expect(control).toBeVisible()
    const rect = await control.boundingBox()
    expect(rect).not.toBeNull()
    expect(rect!.x).toBeGreaterThanOrEqual(0)
    expect(rect!.x + rect!.width).toBeLessThanOrEqual(391)
  }
  await page.evaluate(() => localStorage.setItem('vitepress-theme-appearance', 'dark'))
  await page.reload()
  await expect(page.locator('html')).toHaveClass(/dark/)
  await expect(page.locator('.financial-pivot-grid-view revo-grid')).toBeVisible()
  await expect(page.getByRole('tab', { name: 'Sales Overview' })).toBeVisible()
  await page.screenshot({ path: `${output}/main-mobile-dark.png`, fullPage: true })
})

test('manual feedback stays outside the Pivot report on desktop and mobile', async ({ page }) => {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(viewport)
    await page.goto('/demo/pivot')
    const grid = page.locator('.financial-pivot-grid-view revo-grid')
    const trigger = page.getByRole('button', { name: 'Feedback', exact: true })
    await expect(grid).toBeVisible()
    await expect(trigger).toBeVisible()
    const gridRect = await grid.boundingBox()
    const triggerRect = await trigger.boundingBox()
    expect(gridRect).not.toBeNull()
    expect(triggerRect).not.toBeNull()
    const overlaps = triggerRect!.x < gridRect!.x + gridRect!.width &&
      triggerRect!.x + triggerRect!.width > gridRect!.x &&
      triggerRect!.y < gridRect!.y + gridRect!.height &&
      triggerRect!.y + triggerRect!.height > gridRect!.y
    expect(overlaps, `Feedback must not cover Pivot data at ${viewport.width}px`).toBe(false)
    await trigger.click()
    await expect(page.locator('.demo-feedback-card')).toBeVisible()
    await page.locator('.demo-feedback-card-close').click()
  }
})
