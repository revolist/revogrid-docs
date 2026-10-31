import { expect, test } from '@playwright/test'

test('calendar badges remain legible on pale and filled events in both themes', async ({ page }) => {
  await page.setViewportSize({ width: 1680, height: 1200 })
  await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  await page.goto('/demo/event-scheduler')
  const grid = page.locator('revo-grid.event-scheduler-shift-week-grid')
  await expect(grid).toBeVisible({ timeout: 45000 })
  await page.getByRole('tab', { name: 'Calendar', exact: true }).click()
  await page.getByRole('button', { name: 'Week', exact: true }).click()
  for (const theme of ['light', 'dark']) {
    await page.evaluate(theme => {
      document.documentElement.classList.toggle('dark', theme === 'dark')
      document.documentElement.dataset.theme = theme
    }, theme)
    await expect(grid).toHaveAttribute('theme', theme === 'dark' ? 'darkMaterial' : 'material')
    const icons = grid.locator('.event-scheduler-event__chip-icon, .event-scheduler-event__state-icon')
    await expect(icons.first()).toBeVisible()
    const contrasts = await icons.evaluateAll(elements => elements.filter(el => el.getBoundingClientRect().width > 0).map(el => {
      const canvas = document.createElement('canvas')
      canvas.width = canvas.height = 1
      const context = canvas.getContext('2d')!
      const pixel = () => Array.from(context.getImageData(0, 0, 1, 1).data).slice(0, 3)
      context.fillStyle = '#fff'; context.fillRect(0, 0, 1, 1)
      const ancestors: Element[] = []
      for (let node: Element | null = el; node; node = node.parentElement) ancestors.unshift(node)
      for (const node of ancestors) {
        context.fillStyle = getComputedStyle(node).backgroundColor
        context.fillRect(0, 0, 1, 1)
      }
      const background = pixel()
      context.fillStyle = getComputedStyle(el, '::before').backgroundColor
      context.fillRect(0, 0, 1, 1)
      const foreground = pixel()
      const luminance = (rgb: number[]) => rgb.map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4).reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0)
      const a = luminance(background), b = luminance(foreground)
      return { event: el.closest('[data-event-scheduler-event-id]')?.getAttribute('data-event-scheduler-event-id'), icon: el.className, contrast: (Math.max(a, b) + .05) / (Math.min(a, b) + .05) }
    }))
    expect(contrasts.length).toBeGreaterThan(0)
    expect(contrasts.filter(item => item.contrast < 3), `${theme} badge contrast`).toEqual([])
    await grid.screenshot({ path: `output/property-booking/scheduler-icons-${theme}.png` })
    // The fix must retain consumer overrides for either badge type.
    for (const kind of ['chip', 'state']) {
      const icon = grid.locator(`.event-scheduler-event__${kind}-icon`).first()
      const result = await icon.evaluate((element, kind) => {
        const variable = `--event-scheduler-event-${kind}-icon-color`
        const node = element as HTMLElement
        node.style.setProperty(variable, '#123456')
        const color = getComputedStyle(node, '::before').backgroundColor
        node.style.removeProperty(variable)
        return color
      }, kind)
      expect(result).toBe('rgb(18, 52, 86)')
    }
  }
})
