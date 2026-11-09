import { expect, test } from '@playwright/test'

for (const width of [390, 768, 1024, 1440]) {
  test(`GitHub count stays in navigation at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.addInitScript(() => {
      if (!localStorage.getItem('vitepress-theme-appearance')) {
        localStorage.setItem('vitepress-theme-appearance', 'light')
      }
    })
    await page.route('https://api.github.com/repos/revolist/revogrid', route =>
      route.fulfill({ json: { stargazers_count: 4567 } }),
    )
    await page.goto('/')
    const header = page.locator('.VPNavBar')
    const link = header.getByRole('link', { name: 'GitHub · 4,567 ★' })
    if (width < 768) {
      await expect(link).toBeHidden()
      await header.getByRole('button', { name: 'Menu', exact: true }).click()
      await expect(
        page.locator('.VPNavScreen').getByRole('link', { name: 'GitHub · 4,567 ★' }),
      ).toBeVisible()
    } else {
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', 'https://github.com/revolist/revogrid')
      await expect(link.locator('svg')).toBeVisible()
      const bounds = await link.boundingBox()
      expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width)
      await page.evaluate(() => localStorage.setItem('vitepress-theme-appearance', 'dark'))
      await page.reload()
      await expect(page.locator('html')).toHaveClass(/dark/)
      await expect(link).toBeVisible()
      await link.focus()
      await expect(link).toBeFocused()
    }
    await expect(page.locator('.rg-hero-proof-badges a[href*="github.com"]')).toHaveCount(0)
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
      width,
    )
  })
}

test('GitHub stars use a fresh cache without requesting the API', async ({ page }) => {
  let requests = 0
  await page.route('https://api.github.com/repos/revolist/revogrid', route => {
    requests++
    return route.fulfill({ json: { stargazers_count: 9999 } })
  })
  await page.addInitScript(() => {
    localStorage.setItem(
      'revogrid:github-stars',
      JSON.stringify({ count: 7654, updatedAt: Date.now() }),
    )
  })
  await page.goto('/')
  await expect(page.locator('.VPNavBar .header-github')).toHaveAccessibleName('GitHub · 7,654 ★')
  await expect(page.locator('.VPNavBar .header-github-count')).toContainText('7.7K')
  expect(requests).toBe(0)
})

test('GitHub stars refresh stale cache and share the result with the mobile menu', async ({
  page,
}) => {
  let requests = 0
  await page.setViewportSize({ width: 390, height: 900 })
  await page.addInitScript(() => {
    localStorage.setItem('revogrid:github-stars', JSON.stringify({ count: 3000, updatedAt: 1 }))
  })
  await page.route('https://api.github.com/repos/revolist/revogrid', route => {
    requests++
    return route.fulfill({ json: { stargazers_count: 8765 } })
  })
  await page.goto('/')
  await expect(page.locator('.VPNavBar .header-github')).toHaveAttribute(
    'aria-label',
    'GitHub · 8,765 ★',
  )
  await page.getByRole('button', { name: 'Menu', exact: true }).click()
  await expect(page.locator('.VPNavScreen .header-github')).toHaveAccessibleName('GitHub · 8,765 ★')
  expect(requests).toBe(1)
  expect(
    await page.evaluate(() => JSON.parse(localStorage.getItem('revogrid:github-stars')!).count),
  ).toBe(8765)
})

for (const failure of ['rate-limit', 'invalid-response', 'storage-blocked']) {
  test(`GitHub stars degrade gracefully: ${failure}`, async ({ page }) => {
    await page.addInitScript(blocked => {
      if (blocked) {
        const getItem = Storage.prototype.getItem
        Storage.prototype.getItem = function (key) {
          if (key === 'revogrid:github-stars') throw new Error('Storage blocked')
          return getItem.call(this, key)
        }
      } else {
        localStorage.setItem('revogrid:github-stars', JSON.stringify({ count: 4321, updatedAt: 1 }))
      }
    }, failure === 'storage-blocked')
    await page.route('https://api.github.com/repos/revolist/revogrid', route =>
      route.fulfill(
        failure === 'rate-limit'
          ? { status: 403, json: {} }
          : { json: { stargazers_count: 'invalid' } },
      ),
    )
    await page.goto('/')
    const link = page.locator('.VPNavBar .header-github')
    await expect(link).toBeVisible()
    await expect(link).toHaveAccessibleName(
      failure === 'storage-blocked' ? 'GitHub' : 'GitHub · 4,321 ★',
    )
    if (failure === 'storage-blocked')
      await expect(link.locator('.header-github-count')).toHaveCount(0)
  })
}
