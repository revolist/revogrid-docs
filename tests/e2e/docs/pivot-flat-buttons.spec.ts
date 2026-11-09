import { expect, test, type Locator } from '@playwright/test'

async function expectFlatButtons(scope: Locator) {
  const raised = await scope.locator('button:visible').evaluateAll(buttons => buttons
    .filter(button => !button.matches(':focus-visible'))
    .map(button => ({ name: button.textContent?.trim() || button.getAttribute('aria-label'), shadow: getComputedStyle(button).boxShadow }))
    .filter(button => button.shadow !== 'none'))
  expect(raised).toEqual([])
}

for (const dark of [false, true]) {
  test(`Pivot demo buttons stay flat in ${dark ? 'dark' : 'light'} mode`, async ({ page }) => {
    await page.addInitScript(theme => localStorage.setItem('vitepress-theme-appearance', theme), dark ? 'dark' : 'light')
    for (const route of ['pivot', 'pivot-financial', 'pivot-charts', 'pivot-operations', 'pivot-scale']) {
      await page.goto(`/demo/${route}`)
      const workspace = page.locator('.demo-page-workspace')
      await expect(workspace.locator('revo-grid').first()).toBeVisible()
      await expectFlatButtons(workspace)
      const fields = workspace.getByRole('button', { name: 'Fields', exact: true })
      if (await fields.count()) {
        await fields.click()
        const inspector = page.locator('.pivot-config:visible').first()
        await expect(inspector).toBeVisible()
        await page.mouse.move(0, 0)
        await expectFlatButtons(inspector)
        const layout = inspector.getByRole('tab', { name: 'Layout', exact: true })
        if (await layout.count()) {
          await layout.hover()
          await expectFlatButtons(inspector)
        }
        await page.keyboard.press('Escape')
      }
    }
  })
}
