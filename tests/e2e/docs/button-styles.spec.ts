import { expect, test } from '@playwright/test'

for (const theme of ['light', 'dark']) {
  test(`format dialog secondary actions stay outlined in ${theme} theme`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 })
    await page.addInitScript(theme => localStorage.setItem('vitepress-theme-appearance', theme), theme)
    await page.goto('/demo/context-menu')
    await page.getByRole('gridcell', { name: 'GH Grace Hopper', exact: true }).click()
    await page.getByRole('button', { name: 'More formatting options', exact: true }).click()
    await page.locator('button').filter({ hasText: 'Format cells…' }).click()
    const dialog = page.locator('.rv-data-grid-format-dialog')
    await expect(dialog).toBeVisible()
    for (const name of ['Clear formatting', 'Cancel']) {
      const button = dialog.getByRole('button', { name, exact: true })
      await expect(button).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
      await expect(button).not.toHaveCSS('border-top-color', 'rgba(0, 0, 0, 0)')
      await button.hover()
      await expect.poll(() => button.evaluate(element => {
        const style = getComputedStyle(element)
        const probe = document.createElement('span')
        probe.style.backgroundColor = 'var(--rv-ui-btn-outline-bg-hover)'
        element.append(probe)
        const expected = getComputedStyle(probe).backgroundColor
        probe.remove()
        return style.backgroundColor === expected
      })).toBe(true)
      await page.mouse.move(0, 0)
    }
    await expect(dialog.getByRole('button', { name: 'Apply', exact: true }))
      .toHaveCSS('background-color', 'rgb(37, 99, 235)')
  })
}
