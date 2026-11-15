import { expect, test } from '@playwright/test'

for (const theme of ['light', 'dark']) {
  test(`overview portraits fill their avatar frames in ${theme} theme`, async ({ page }) => {
    await page.addInitScript(
      theme => localStorage.setItem('vitepress-theme-appearance', theme),
      theme,
    )
    await page.route('https://randomuser.me/api/portraits/**', route =>
      route.fulfill({
        contentType: 'image/svg+xml',
        body: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><rect width="128" height="128" fill="teal"/></svg>',
      }),
    )
    await page.goto('/guide/overview')
    const portraits = page.locator('.example revo-grid .avatar img')
    await expect(portraits.first()).toBeVisible()
    await expect
      .poll(() => portraits.first().evaluate(image => (image as HTMLImageElement).naturalWidth))
      .toBeGreaterThan(0)
    const assertPortraitsFit = async () => {
      const geometry = await portraits.evaluateAll(images =>
        images.map(image => {
          const frame = image.parentElement!.getBoundingClientRect()
          const rect = image.getBoundingClientRect()
          const cell = image.closest('.rgCell')!.getBoundingClientRect()
          return {
            fillsFrame:
              Math.abs(rect.x - frame.x) < 1 &&
              Math.abs(rect.y - frame.y) < 1 &&
              Math.abs(rect.width - frame.width) < 1 &&
              Math.abs(rect.height - frame.height) < 1,
            insideCell: frame.top >= cell.top && frame.bottom <= cell.bottom,
          }
        }),
      )
      expect(geometry.length).toBeGreaterThan(0)
      for (const portrait of geometry) {
        expect(portrait.fillsFrame, 'portrait must fill its circular frame without clipping').toBe(
          true,
        )
        expect(portrait.insideCell, 'avatar frame must fit inside its row').toBe(true)
      }
    }
    await assertPortraitsFit()
    const firstName = await page
      .locator('.example revo-grid .avatar')
      .first()
      .locator('..')
      .textContent()
    await portraits.first().hover()
    await page.mouse.wheel(0, 420)
    await expect
      .poll(() => page.locator('.example revo-grid .avatar').first().locator('..').textContent())
      .not.toBe(firstName)
    await assertPortraitsFit()
  })
}
