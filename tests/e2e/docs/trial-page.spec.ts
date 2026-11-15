import { expect, test } from '@playwright/test'

test('the public trial page copies package-aware setup commands without a form', async ({
  page,
  context,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/trial?product=gantt')

  await expect(page.getByRole('heading', { name: 'Install Gantt Trial' })).toBeVisible()
  await expect(page.getByText('No login or token is needed.')).toBeVisible()
  await expect(page.locator('.command-block').nth(1).getByRole('button', { name: 'Copy', exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'How can we help?' })).toBeVisible()
  const contact = page.getByRole('button', { name: 'Contact Us', exact: true })
  await expect(contact).toHaveAttribute('type', 'submit')
  await expect(contact).toHaveClass(/VPButton/)
  await expect(contact.locator('svg')).toHaveCount(0)

  await page.locator('.command-block').nth(1).getByRole('button', { name: 'Copy', exact: true }).focus()
  await expect(page.locator('.command-block').nth(1).getByRole('button', { name: 'Copy', exact: true })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('.copy-status')).toHaveCount(0)
  await expect
    .poll(() => page.evaluate(() => navigator.clipboard.readText()))
    .toContain('pnpm i @revolist/gantt-trial')
  const packageBlock = page.locator('.command-block').nth(1)
  await expect(packageBlock.locator('.copy-confirmation')).toHaveText('Copied')
  await expect(packageBlock.getByRole('button', { name: 'Copy', exact: true })).toHaveClass(/rv-btn/)
  await packageBlock.getByRole('button', { name: 'Copy', exact: true }).click()
  await expect(packageBlock.locator('.copy-confirmation')).toBeVisible()
  await page.locator('.command-block').first().getByRole('button', { name: 'Copy', exact: true }).click()
  await expect(page.locator('.command-block').first().locator('.copy-confirmation')).toBeVisible()
  await expect(packageBlock.locator('.copy-confirmation')).toHaveCount(0)

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

  await page.locator('.command-block').first().getByRole('button', { name: 'Copy', exact: true }).click()
  await expect(
    page.getByText('Copy is unavailable in this browser. Select the command and copy it manually.'),
  ).toBeVisible()
  await expect(page.locator('.copy-confirmation')).toHaveCount(0)
})
