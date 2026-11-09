import { expect, test } from '@playwright/test'

for (const route of ['pivot', 'pivot-financial']) {
  test(`${route} keeps the report directly below the toolbar`, async ({ page }) => {
    await page.goto(`/demo/${route}`)
    const header = page.locator('financial-pivot-header')
    await expect(header.getByRole('tab').first()).toBeVisible()
    await expect(header.getByText('Report focus', { exact: true })).toHaveCount(0)
    await expect(page.locator('revo-grid').filter({ visible: true }).first().locator('revogr-data .rgCell').first()).toBeVisible()
    await header.getByRole('tab').last().click()
    await expect(header.getByRole('tab').last()).toHaveAttribute('aria-selected', 'true')
    await expect(header.locator('.financial-pivot-header__guidance')).toHaveCount(0)
    await page.screenshot({ path: `output/playwright/${route}-compact-toolbar.png`, fullPage: true })
  })
}
