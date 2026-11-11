import { expect, test } from '@playwright/test'

for (const returnVia of ['history', 'sidebar'] as const) {
  test(`GANTT: contains horizontal history gestures after returning via ${returnVia}`, async ({
    page,
  }) => {
    await page.goto('/demo/gantt')
    const root = page.locator('html')
    const grid = page.locator('.gantt-showcase-grid')
    const timeline = grid.locator('revogr-viewport-scroll.colPinEnd')
    await expect(grid.getByRole('button', { name: 'Backend Setup', exact: true })).toBeVisible()

    // Leave the demo through the SPA router, creating real browser history.
    await page.locator('.VPNavBar').getByRole('link', { name: 'Docs', exact: true }).click()
    await expect(page.locator('.demo-page-class')).toHaveCount(0)
    await expect(root).toHaveCSS('overscroll-behavior-x', 'auto')
    if (returnVia === 'history') {
      await page.goBack()
    } else {
      await page.locator('.VPNavBar').getByRole('link', { name: 'Demos', exact: true }).click()
      await page.getByRole('button', { name: 'Gantt', exact: true }).click()
      await page.getByRole('link', { name: 'Gantt chart', exact: false }).click()
    }

    await expect(grid.getByRole('button', { name: 'Backend Setup', exact: true })).toBeVisible()
    // The native history gesture belongs to the document viewport. Gantt's
    // overlay is outside the native Core scroll containers protected in 4.31.5.
    await expect(root).toHaveCSS('overscroll-behavior-x', 'contain')
    await expect(root).toHaveCSS('overscroll-behavior-y', 'auto')
    const initial = await timeline.evaluate(element => element.scrollLeft)
    await grid.getByRole('button', { name: 'Backend Setup', exact: true }).hover()
    await page.mouse.wheel(160, 0)
    await expect
      .poll(() => timeline.evaluate(element => element.scrollLeft))
      .toBeGreaterThan(initial)
    const afterRight = await timeline.evaluate(element => element.scrollLeft)
    await timeline.locator('.vertical-inner').hover()
    await page.mouse.wheel(-80, 0)
    await expect
      .poll(() => timeline.evaluate(element => element.scrollLeft))
      .toBeLessThan(afterRight)
    await expect(page).toHaveURL(/\/demo\/gantt$/)
  })
}
