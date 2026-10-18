import { expect, test } from '@playwright/test'

test('bars and donut animate their geometry while all cards remain visible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.addInitScript(() => {
    const observations: Record<string, { frames: string[]; start: number; elapsed: number }> = {}
    ;(window as any).__chartMotion = observations
    const deadline = performance.now() + 20_000
    function sample() {
      for (const host of document.querySelectorAll<HTMLElement>('.chart-host[data-testid]')) {
        const svg = host.querySelector('svg[data-chart-transitioning]')
        if (!svg) continue
        const entry = observations[host.dataset.testid!] ??= { frames: [], start: performance.now(), elapsed: 0 }
        entry.elapsed = performance.now() - entry.start
        const geometry = Array.from(svg.querySelectorAll('[data-category-index][data-series-index]'))
          .map(mark => ['x', 'y', 'width', 'height', 'd', 'transform'].map(attr => mark.getAttribute(attr)))
        const frame = JSON.stringify(geometry)
        if (!entry.frames.includes(frame) && entry.frames.length < 5) entry.frames.push(frame)
      }
      if (performance.now() < deadline) requestAnimationFrame(sample)
    }
    requestAnimationFrame(sample)
  })
  await page.goto('/demo/pivot-charts')
  await expect(page.locator('.pivot-dashboard')).toHaveAttribute('data-chart-stage', 'ready')
  for (const id of ['quarter-chart', 'comparison-chart', 'share-chart']) {
    await expect.poll(() => page.evaluate(id => (window as any).__chartMotion[id]?.elapsed ?? 0, id)).toBeGreaterThan(600)
    expect(await page.evaluate(id => (window as any).__chartMotion[id].frames.length, id)).toBeGreaterThan(1)
    await expect(page.getByTestId(id).locator('svg')).not.toHaveAttribute('data-chart-transitioning')
  }
  for (const card of await page.locator('.dashboard-charts .dashboard-card').all()) {
    expect(await card.evaluate(element => ({ opacity: getComputedStyle(element).opacity, animation: getComputedStyle(element).animationName })))
      .toEqual({ opacity: '1', animation: 'none' })
  }
  await page.getByRole('radio', { name: 'Categories' }).check()
  await expect(page.getByRole('heading', { name: 'Quarterly revenue by category' })).toBeVisible()
})

test('reduced motion renders charts without geometry or card animations', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/demo/pivot-charts')
  await expect(page.locator('.pivot-dashboard')).toHaveAttribute('data-chart-stage', 'ready')
  for (const card of await page.locator('.dashboard-charts .dashboard-card').all()) {
    await expect(card.locator('svg')).toBeVisible()
    await expect(card.locator('svg')).not.toHaveAttribute('data-chart-transitioning')
    expect(await card.evaluate(element => ({ opacity: getComputedStyle(element).opacity, animation: getComputedStyle(element).animationName })))
      .toEqual({ opacity: '1', animation: 'none' })
  }
})
