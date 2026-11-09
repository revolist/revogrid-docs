import { expect, test } from '@playwright/test'

for (const reducedMotion of ['no-preference', 'reduce'] as const) {
  test(`chart page data update examples (${reducedMotion})`, async ({ page }, info) => {
    await page.emulateMedia({
      reducedMotion,
      colorScheme: reducedMotion === 'reduce' ? 'dark' : 'light',
    })
    const theme = reducedMotion === 'reduce' ? 'dark' : 'light'
    await page.addInitScript(
      theme => localStorage.setItem('vitepress-theme-appearance', theme),
      theme,
    )
    await page.goto('/charts/')
    expect(await page.locator('html').evaluate(node => node.classList.contains('dark'))).toBe(
      theme === 'dark',
    )
    const examples = page.locator('.transition-examples')
    await examples.scrollIntoViewIfNeeded()
    await expect(examples).toHaveAttribute('data-status', 'ready')
    const animated = examples.locator('article').nth(0).locator('svg.rv-pivot-chart')
    const immediate = examples.locator('article').nth(1).locator('svg.rv-pivot-chart')
    await expect(animated).not.toHaveAttribute('data-chart-transitioning')
    const original = await animated
      .locator('rect[data-category-index="0"]')
      .first()
      .getAttribute('height')
    await page.clock.install()
    await page.clock.pauseAt(new Date(Date.now() + 1000))
    await examples.getByRole('button', { name: 'Change data' }).click()
    await expect(examples.getByRole('status')).toHaveText('Dataset 2')
    await expect(immediate).not.toHaveAttribute('data-chart-transitioning')
    if (reducedMotion === 'no-preference') {
      await expect(animated).toHaveAttribute('data-chart-transitioning')
      await page.clock.runFor(200)
    }
    await expect(animated).not.toHaveAttribute('data-chart-transitioning')
    expect(
      await animated.locator('rect[data-category-index="0"]').first().getAttribute('height'),
    ).not.toBe(original)
    await examples.screenshot({ path: info.outputPath('desktop.png') })
    await page.setViewportSize({ width: 390, height: 844 })
    await page.clock.runFor(100)
    expect(await examples.evaluate(node => node.scrollWidth <= node.clientWidth)).toBe(true)
    await examples.getByRole('button', { name: 'Change data' }).click()
    await expect(examples.getByRole('status')).toHaveText('Dataset 3')
    await expect(immediate).not.toHaveAttribute('data-chart-transitioning')
    if (reducedMotion === 'no-preference') {
      await expect(animated).toHaveAttribute('data-chart-transitioning')
      await page.clock.runFor(200)
    }
    await expect(animated).not.toHaveAttribute('data-chart-transitioning')
    await examples.screenshot({ path: info.outputPath('mobile.png') })
  })
}
