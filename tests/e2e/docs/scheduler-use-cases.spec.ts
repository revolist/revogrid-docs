import { expect, test } from '@playwright/test'

for (const width of [1440, 390]) {
  test(`Scheduler use cases at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 })
    await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
    await page.goto('/jsscheduler')
    const section = page.locator('#scheduler-use-cases')
    await section.scrollIntoViewIfNeeded()
    await expect(section.getByRole('heading', { level: 2 })).toHaveText('Where teams embed RevoGrid Scheduler.')
    const cards = section.locator('.use-case-card')
    await expect(cards).toHaveCount(2)
    for (const [index, route] of ['/demo/event-scheduler', '/demo/property-booking'].entries()) {
      await expect(cards.nth(index)).toHaveAttribute('href', route)
      const image = cards.nth(index).locator('img')
      await expect(image).toHaveAttribute('alt', /RevoGrid/)
      await expect.poll(() => image.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBe(1200)
    }
    const boxes = await cards.evaluateAll(nodes => nodes.map(node => {
      const { x, y, width } = node.getBoundingClientRect()
      return { x, y, width }
    }))
    if (width > 640) {
      expect(boxes[0].y).toBe(boxes[1].y)
      expect(boxes[1].x).toBeGreaterThan(boxes[0].x + boxes[0].width)
    } else {
      expect(boxes[1].y).toBeGreaterThan(boxes[0].y)
      expect(boxes[0].x).toBeGreaterThanOrEqual(16)
      expect(boxes[0].x + boxes[0].width).toBeLessThanOrEqual(width - 16)
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await section.screenshot({ path: `output/property-booking/scheduler-use-cases-${width}-light.png` })
    await page.evaluate(() => document.documentElement.classList.add('dark'))
    await section.screenshot({ path: `output/property-booking/scheduler-use-cases-${width}-dark.png` })
    await cards.nth(1).click()
    await expect(page).toHaveURL(/\/demo\/property-booking$/)
  })
}

test('Gantt retains its six use cases and three-column layout', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto('/gantt')
  const cards = page.locator('#gantt-use-cases .use-case-card')
  await expect(cards).toHaveCount(6)
  const tops = await cards.evaluateAll(nodes => nodes.map(node => node.getBoundingClientRect().y))
  expect(tops[0]).toBe(tops[2])
  expect(tops[3]).toBeGreaterThan(tops[0])
})
