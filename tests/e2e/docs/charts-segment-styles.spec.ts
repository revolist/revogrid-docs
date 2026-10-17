import { expect, test } from '@playwright/test'

test('segment styling examples expose native previews and source in both themes and narrow layouts', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  await page.goto('/charts/')
  const section = page.locator('#segment-styling')
  await section.scrollIntoViewIfNeeded()
  await expect(section.getByRole('heading', { name: 'Give individual moments their own style.' })).toBeVisible()
  for (const article of await section.locator('article').all()) {
    const image = article.locator('img:visible')
    await expect(image).toBeVisible()
    await expect.poll(() => image.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true)
    await article.locator('summary').click()
    await expect(article.locator('code')).toContainText('segments:')
    await expect(article.locator('code')).toContainText('dataset.categories')
  }
  await page.screenshot({ path: test.info().outputPath('segments-light.png') })
  await page.getByRole('switch', { name: 'Appearance', exact: true }).click()
  await expect(section.locator('.preview-dark').first()).toBeVisible()
  await page.setViewportSize({ width: 390, height: 844 })
  await section.scrollIntoViewIfNeeded()
  await expect(section.getByRole('link', { name: /Explore datum/ })).toBeVisible()
  expect(await section.evaluate(node => node.getBoundingClientRect().right)).toBeLessThanOrEqual(391)
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390)
  await page.screenshot({ path: test.info().outputPath('segments-dark-narrow.png') })
})
