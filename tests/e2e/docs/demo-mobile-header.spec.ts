import { expect, test } from '@playwright/test'

for (const width of [390, 495, 1440]) {
  test(`Calendar demo header at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/demo/calendar')
    const title = page.getByRole('heading', { name: 'Calendar Demo', exact: true })
    const badge = page.locator('.demo-page-plan')
    await expect(badge).toHaveText('Advanced')
    const actions = page.locator('.demo-page-header-actions')
    const code = actions.getByRole('button', { name: 'Code', exact: true })
    const github = actions.getByRole('link', { name: 'GitHub', exact: true })
    const feedback = actions.getByRole('button', { name: 'Feedback', exact: true })
    await expect(feedback).toBeVisible()
    if (width <= 700) {
      const boxes = await Promise.all([code, github, feedback].map(el => el.boundingBox()))
      expect(Math.max(...boxes.map(b => b!.y)) - Math.min(...boxes.map(b => b!.y))).toBeLessThan(2)
      const titleBox = (await title.boundingBox())!
      const badgeBox = (await badge.boundingBox())!
      expect(badgeBox.y).toBeLessThan(titleBox.y + titleBox.height)
      expect(badgeBox.x).toBeGreaterThan(titleBox.x + titleBox.width)
      const cta = (await actions.getByRole('link', { name: 'Try in your app', exact: true }).boundingBox())!
      expect(cta.y).toBeGreaterThan(boxes[0]!.y)
      expect(cta.width).toBeGreaterThan(width - 70)
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    }
  })
}
