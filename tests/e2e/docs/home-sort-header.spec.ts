import { expect, test } from '@playwright/test'

test('capability sorting reserves space beside the header label', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto('/')
  await page.locator('#rg-showcase-tab-tree').click()
  const grid = page.locator('#rg-showcase-panel-tree revo-grid')
  const header = grid.locator('.rgHeaderCell').filter({ hasText: 'Growth %' })
  await header.click()
  await expect(header.locator('.sort-indicator')).toBeVisible()
  const layout = await header.evaluate(el => {
    const content = el.querySelector('.filter-header-content')!
    const controls = el.querySelector('.sort-indicator')!
    const label = el.querySelector('.filter-header-label')!;
    const a = label.getBoundingClientRect(), b = controls.getBoundingClientRect()
    return { textRight: a.right, controlsLeft: b.left, contentStyle: getComputedStyle(content).position, controlsStyle: getComputedStyle(controls).position, labelDisplay: getComputedStyle(label).display, labelWidth: label.clientWidth, padding: getComputedStyle(content).padding, box: getComputedStyle(content).boxSizing }
  })
  expect(layout.textRight, JSON.stringify(layout)).toBeLessThanOrEqual(layout.controlsLeft)
})
