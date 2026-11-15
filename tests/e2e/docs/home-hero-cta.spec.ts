import { expect, test } from '@playwright/test'

for (const width of [390, 1440]) {
  test(`hero offers demo and trial actions at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    const hero = page.locator('.rg-hero')
    const trial = hero.getByRole('link', { name: 'Start free trial', exact: true })
    const core = hero.getByRole('link', { name: 'Get the free open-source grid →', exact: true })
    await expect(trial).toHaveAttribute('href', '/trial')
    await expect(core).toHaveCount(0)
    await expect(hero.getByRole('link', { name: 'Try live demo', exact: true })).toHaveAttribute('href', '/demo/')

  })
}
