import { expect, test } from '@playwright/test'

for (const failHighlighting of [false, true]) {
  test(`integration examples remain readable with highlighting ${failHighlighting ? 'unavailable' : 'available'}`, async ({ page }) => {
    if (failHighlighting) {
      await page.route(/\/[^/]*wasm[^/]*\.(?:js|mjs)(?:\?|$)/, route => route.abort())
    }
    await page.goto('/excel-data-grid#developers')
    const section = page.locator('#developers')
    const sample = section.locator('.excel-code-panel__sample')
    await expect(sample).toContainText("from '@revolist/react-datagrid'")
    for (const [framework, packageName] of [
      ['Vue', '@revolist/vue3-datagrid'],
      ['Angular', '@revolist/angular-datagrid'],
      ['JavaScript', '@revolist/revogrid'],
      ['TypeScript', '@revolist/revogrid'],
      ['React', '@revolist/react-datagrid'],
    ]) {
      await section.getByRole('tab', { name: framework, exact: true }).click()
      await expect(sample).toContainText(framework === 'Angular' ? 'WorkbookComponent' : packageName)
      await expect(section.locator('.excel-install-line')).toHaveText(`pnpm add ${packageName}`)
    }
    if (!failHighlighting) await expect(sample.locator('.shiki .line span').first()).toBeVisible()
  })
}
