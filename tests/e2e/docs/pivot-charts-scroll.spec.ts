import { expect, test } from '@playwright/test'

for (const width of [1920, 1440, 390]) {
  test(`Pivot Charts places three charts above the full-width report at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 1080 })
    await page.goto('/demo/pivot-charts')
    const dashboard = page.locator('.pivot-dashboard')
    await expect(dashboard).toHaveAttribute('data-chart-stage', 'ready')
    const cards = dashboard.locator('.dashboard-charts .dashboard-card')
    await expect(cards).toHaveCount(3)
    const boxes = await Promise.all((await cards.all()).map(card => card.boundingBox()))
    const report = await dashboard.locator('.dashboard-report').boundingBox()
    const layout = await dashboard.locator('.dashboard-layout').boundingBox()
    for (const box of boxes) expect(box!.y + box!.height).toBeLessThan(report!.y)
    expect(Math.abs(report!.width - layout!.width)).toBeLessThanOrEqual(2)
    if (width >= 1440) {
      expect(Math.max(...boxes.map(box => box!.y)) - Math.min(...boxes.map(box => box!.y))).toBeLessThanOrEqual(1)
      expect(boxes[1]!.x).toBeGreaterThan(boxes[0]!.x)
      expect(boxes[2]!.x).toBeGreaterThan(boxes[1]!.x)
    } else {
      expect(boxes[1]!.y).toBeGreaterThan(boxes[0]!.y + boxes[0]!.height)
      expect(boxes[2]!.y).toBeGreaterThan(boxes[1]!.y + boxes[1]!.height)
    }
    expect(await dashboard.evaluate(element => element.scrollWidth - element.clientWidth)).toBeLessThanOrEqual(1)
    if (width === 1920) await page.screenshot({ path: testInfo.outputPath('charts-row.png') })
    await dashboard.locator('.dashboard-report').scrollIntoViewIfNeeded()
    await expect(dashboard.locator('.dashboard-grid > revo-grid')).toBeVisible()
  })
}
