import { expect, test } from '@playwright/test'

test('the public trial page copies package-aware setup commands without a form', async ({
  page,
  context,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/trial?product=gantt')

  await expect(page.getByRole('heading', { name: 'Install Gantt Trial' })).toBeVisible()
  await expect(page.getByText('No login or token is needed.')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Copy commands' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'How can we help?' })).toBeVisible()

  await page.getByRole('button', { name: 'Copy commands' }).focus()
  await expect(page.getByRole('button', { name: 'Copy commands' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.getByText('Install commands copied.')).toBeVisible()
  await expect
    .poll(() => page.evaluate(() => navigator.clipboard.readText()))
    .toContain('pnpm i @revolist/gantt-trial')
})

test('the trial setup stays usable on a narrow viewport when clipboard access is unavailable', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: () => Promise.reject(new Error('denied')) },
    })
  })
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/trial')

  const quickStart = page.locator('.quick-start-panel')
  await expect(quickStart).toBeVisible()
  expect((await quickStart.boundingBox())!.width).toBeLessThanOrEqual(390)

  await page.getByRole('button', { name: 'Copy command', exact: true }).click()
  await expect(
    page.getByText('Copy is unavailable in this browser. Select the command and copy it manually.'),
  ).toBeVisible()
})
