import { mkdir } from 'node:fs/promises'
import { expect, test, type Page } from '@playwright/test'

const demos = [
  ['pivot', '.financial-pivot-showcase', 'Fields'],
  ['pivot-financial', '.financial-pivot-showcase', 'Fields'],
  ['pivot-charts', '.pivot-dashboard', 'Reset report'],
  ['pivot-operations', '.operations-demo', 'Reset scope'],
  ['pivot-scale', '.scale-client-demo', 'Switch row hierarchy'],
] as const
const output = 'output/playwright/pivot-themes'

async function prepare(page: Page) {
  await expect(page.locator('.demo-page-workspace revo-grid').filter({ visible: true }).first()).toBeVisible()
  await expect(page.locator('.demo-page-workspace revo-grid').filter({ visible: true }).first().locator('revogr-data .rgCell').first()).toBeVisible()
}

async function toggleAppearance(page: Page, width: number) {
  if (width < 768) await page.getByLabel('Menu', { exact: true }).click()
  await page.getByRole('switch', { name: 'Appearance', exact: true }).filter({ visible: true }).click()
  if (width < 768) {
    await page.getByLabel('Menu', { exact: true }).click()
    await expect(page.locator('.VPNavScreen')).toBeHidden()
  }
}

for (const [route, selector, action] of demos) {
  for (const width of [1440, 390]) {
    test(`${route} keeps light and dark surfaces and controls readable at ${width}px`, async ({ page }) => {
      await mkdir(output, { recursive: true })
      await page.setViewportSize({ width, height: 900 })
      await page.goto(`/demo/${route}`)
      await page.evaluate(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
      await page.reload()
      await prepare(page)
      const demo = page.locator(selector)
      const grids = demo.locator('revo-grid')
      for (const dark of [false, true]) {
        if (dark) await toggleAppearance(page, width)
        const theme = dark ? 'dark' : 'light'
        for (const grid of await grids.all()) await expect(grid).toHaveJSProperty('theme', dark ? 'darkCompact' : 'compact')
        if (route.startsWith('pivot-scale')) {
          await expect(demo).toHaveClass(dark ? /is-dark/ : /^(?!.*is-dark)/)
        }
        if (route === 'pivot' || route === 'pivot-financial') {
          const canvas = await page.locator('body').evaluate(element => getComputedStyle(element).backgroundColor)
          await expect(demo.locator('.financial-pivot-header__surface')).toHaveCSS('background-color', canvas)
          await expect(demo.locator('.pivot-summary-panel')).toHaveCSS('background-color', canvas)
        }
        if (action) {
          const contrast = await demo.getByRole('button', { name: action, exact: true }).evaluate(button => {
            const rgb = (value: string) => value.match(/[\d.]+/g)!.map(Number)
            const foreground = rgb(getComputedStyle(button).color)
            let background = [255, 255, 255]
            const ancestors: Element[] = []
            for (let element: Element | null = button; element; element = element.parentElement) ancestors.unshift(element)
            for (const element of ancestors) {
              const color = rgb(getComputedStyle(element).backgroundColor)
              const alpha = color[3] ?? 1
              background = background.map((channel, index) => color[index] * alpha + channel * (1 - alpha))
            }
            const luminance = (color: number[]) => color.slice(0, 3).map(channel => {
              const value = channel / 255
              return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
            }).reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0)
            const values = [luminance(foreground), luminance(background)].sort((a, b) => a - b)
            return (values[1] + 0.05) / (values[0] + 0.05)
          })
          expect(contrast, `${route} ${theme} primary action contrast`).toBeGreaterThanOrEqual(4.5)
        }
        // Capture from the top so fixed navigation stays in place.
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
        // Finish CSS theme transitions before judging foreground/background contrast.
        await page.screenshot({ path: `${output}/${route}-${width}-${theme}.png`, fullPage: true, animations: 'disabled' })
      }
      // Persisted dark preference must also initialize newly created report grids.
      await page.reload()
      await prepare(page)
      for (const grid of await demo.locator('revo-grid').all()) await expect(grid).toHaveJSProperty('theme', 'darkCompact')
      await toggleAppearance(page, width)
      for (const grid of await demo.locator('revo-grid').all()) await expect(grid).toHaveJSProperty('theme', 'compact')
    })
  }
}
