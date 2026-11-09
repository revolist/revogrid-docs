import { expect, test } from '@playwright/test'

const pages = [
  ['/', '.rg-final-cta'],
  ['/pro/', '.final-cta'],
  ['/pivot/', '.pro-cta'],
  ['/charts/', '.pro-cta'],
  ['/gantt', '.pro-cta'],
  ['/jsscheduler', '.pro-cta'],
  ['/kanban', '.pro-cta'],
  ['/excel-data-grid', '.excel-final-cta'],
] as const

for (const [route, finalCta] of pages) {
  test(`Revo UI sits before the final product decision on ${route}`, async ({ page }) => {
    await page.goto(route)
    const section = page.locator('[data-ui-library]')
    await expect(section).toHaveCount(1)
    await section.scrollIntoViewIfNeeded()
    await expect(section.getByRole('heading', { level: 2 })).toHaveText(
      'Build the interface around your data.',
    )
    await expect(
      section.getByRole('link', { name: 'Explore Revo UI', exact: true }),
    ).toHaveAttribute('href', 'https://ui.rv-grid.com/')
    await expect(
      section.getByRole('link', { name: 'View on GitHub', exact: true }),
    ).toHaveAttribute('href', 'https://github.com/revolist/revo-ui')
    await expect(section.getByText('Free · MIT licensed', { exact: true })).toBeVisible()
    expect(
      await section.evaluate((element, selector) => {
        const next = element.nextElementSibling
        return !!next && (next.matches(selector) || !!next.querySelector(selector))
      }, finalCta),
    ).toBe(true)
  })
}

test('Revo UI preview controls work on desktop and mobile in both themes', async ({
  page,
}, testInfo) => {
  await page.addInitScript(() => localStorage.setItem('vitepress-theme-appearance', 'light'))
  await page.goto('/gantt')
  const section = page.locator('[data-ui-library]')
  await section.scrollIntoViewIfNeeded()
  await section.getByRole('textbox', { name: 'Workspace name', exact: true }).fill('Launch plan')
  const slider = section.getByRole('slider', { name: 'Progress', exact: true })
  await slider.focus()
  await page.keyboard.press('ArrowRight')
  await expect(slider).toHaveValue('65')
  await section.getByRole('switch', { name: 'Notify the team', exact: true }).click()
  await section.getByRole('button', { name: 'Save changes', exact: true }).click()
  await expect(section.locator('.revo-ui-preview footer').getByRole('status')).toHaveText(
    'Changes saved for Launch plan.',
  )
  await section.screenshot({ path: testInfo.outputPath('revo-ui-desktop.png') })
  await page.getByRole('switch', { name: 'Appearance', exact: true }).click()
  await section.screenshot({ path: testInfo.outputPath('revo-ui-dark.png') })
  await page.setViewportSize({ width: 390, height: 844 })
  await section.getByRole('textbox', { name: 'Workspace name', exact: true }).fill('Mobile plan')
  await section.getByRole('button', { name: 'Save changes', exact: true }).click()
  await expect(section.locator('.revo-ui-preview footer').getByRole('status')).toHaveText(
    'Changes saved for Mobile plan.',
  )
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
    .toBe(true)
  await section.screenshot({ path: testInfo.outputPath('revo-ui-mobile.png') })
})
