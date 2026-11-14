import { expect, test } from '@playwright/test'

test.setTimeout(120_000)

for (const theme of ['light', 'dark']) {
  test(`property booking exposes a usable vertical scrollbar in ${theme}`, async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.addInitScript(
      value => localStorage.setItem('vitepress-theme-appearance', value),
      theme,
    )
    await page.goto('/demo/property-booking', { waitUntil: 'domcontentloaded' })
    const demo = page.locator('.property-booking-demo')
    await expect(demo.getByRole('button', { name: 'New booking', exact: true })).toBeEnabled({
      timeout: 90_000,
    })
    const grid = demo.locator('revo-grid')
    const scrollbar = grid.locator('revogr-scroll-virtual.vertical')
    await expect
      .poll(() => scrollbar.evaluate(element => element.scrollHeight > element.clientHeight))
      .toBe(true)
    // Native overlay controls may have no gutter; hovering must expose their hit area.
    await scrollbar.hover()
    const gridBox = await grid.boundingBox()
    const barBox = await scrollbar.boundingBox()
    expect(barBox!.width).toBeGreaterThan(0)
    expect(barBox!.x + barBox!.width).toBeLessThanOrEqual(gridBox!.x + gridBox!.width + 1)
    await scrollbar.hover()
    await page.mouse.wheel(0, 2000)
    await expect(
      demo.getByRole('checkbox', { name: 'Include Garden Retreat in totals', exact: true }),
    ).toBeInViewport()
    await expect.poll(() => scrollbar.evaluate(element => element.scrollTop)).toBeGreaterThan(0)
    const horizontal = grid.locator('.rv-panel-horizontal-scroll--grid')
    await grid.locator('revogr-viewport-scroll.rgCol .vertical-inner').hover()
    await page.mouse.wheel(1000, 0)
    await expect.poll(() => horizontal.evaluate(element => element.scrollLeft)).toBeGreaterThan(0)
    await page.screenshot({ path: test.info().outputPath(`booking-scroll-${theme}.png`) })
  })
}
