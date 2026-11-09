import { expect, test } from '@playwright/test'

for (const dark of [false, true]) {
  for (const route of ['pivot', 'pivot-financial']) {
    test(`${route} Report actions fit wrapped toolbars in ${dark ? 'dark' : 'light'} mode`, async ({ page }) => {
      await page.addInitScript(theme => localStorage.setItem('vitepress-theme-appearance', theme), dark ? 'dark' : 'light')
      await page.setViewportSize({ width: 390, height: 844 })
      await page.goto(`/demo/${route}`)
      const header = page.locator('financial-pivot-header')
      await expect(header).toBeVisible()
      const report = header.getByText('Report', { exact: true })
      const menu = header.locator('.financial-pivot-header__menu-items')
      for (const width of [390, 640, 900, 1440]) {
        await page.setViewportSize({ width, height: 844 })
        await report.click()
        await expect(menu).toBeVisible()
        const bounds = await menu.boundingBox()
        expect(bounds).not.toBeNull()
        expect(bounds!.x).toBeGreaterThanOrEqual(0)
        expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width)
        expect(bounds!.y).toBeGreaterThanOrEqual(0)
        expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(844)
        const title = menu.locator('.financial-pivot-header__menu-title')
        await title.scrollIntoViewIfNeeded()
        await expect.poll(() => title.evaluate(element => {
          const box = element.getBoundingClientRect()
          return document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2) === element
        })).toBe(true)
        if (width === 390) await page.screenshot({ path: `output/playwright/pivot-full-audit/main/fixed-${route}-report-${dark ? 'dark' : 'light'}.png` })
        const first = menu.getByRole('button', { name: 'Save this report', exact: false })
        await first.scrollIntoViewIfNeeded()
        await expect.poll(() => first.evaluate(button => {
          const box = button.getBoundingClientRect()
          return document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2)?.closest('button') === button
        })).toBe(true)
        const last = menu.getByRole('button', { name: 'Import report JSON' })
        await last.scrollIntoViewIfNeeded()
        await expect(last).toBeInViewport({ ratio: 1 })
        await expect.poll(() => last.evaluate(button => {
          const box = button.getBoundingClientRect()
          return document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2)?.closest('button') === button
        })).toBe(true)
        await page.keyboard.press('Escape')
        await expect(menu).not.toBeVisible()
        await expect(report).toBeFocused()
      }
      await page.setViewportSize({ width: 390, height: 600 })
      await report.click()
      // Resize while open too: the anchor can move to a different wrapped row.
      await page.setViewportSize({ width: 640, height: 480 })
      await expect.poll(async () => {
        const box = await menu.boundingBox()
        return !!box && box.x >= 0 && box.x + box.width <= 640 && box.y >= 0 && box.y + box.height <= 480
      }).toBe(true)
      await page.keyboard.press('Escape')
    })
  }
}

test('report view switch keeps a green fallback and honors the public accent', async ({ page }) => {
  await page.goto('/demo/pivot')
  const header = page.locator('financial-pivot-header')
  const pivot = header.getByRole('button', { name: 'Pivot', exact: true })
  await expect(pivot).toHaveAttribute('aria-pressed', 'true')
  const background = await pivot.evaluate(button => getComputedStyle(button).backgroundColor)
  const channels = background.match(/[\d.]+/g)!.map(Number)
  expect(channels[1]).toBeGreaterThan(channels[2])
  await header.evaluate(element => element.style.setProperty('--rv-ui-accent', '#9b3521'))
  await expect(pivot).toHaveCSS('background-color', 'rgb(155, 53, 33)')
  await header.getByRole('button', { name: 'Chart', exact: true }).click()
  await expect(header.getByRole('button', { name: 'Chart', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await expect(pivot).toHaveAttribute('aria-pressed', 'false')
})
