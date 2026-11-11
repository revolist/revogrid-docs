import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem('vitepress-theme-appearance'))
      localStorage.setItem('vitepress-theme-appearance', 'light')
  })
})

test('hero loops continuously without hover controls inside the rounded container', async ({
  page,
}) => {
  await page.goto('/')
  const hero = page.locator('.rg-hero')
  const film = hero.locator('video')
  await film.scrollIntoViewIfNeeded()
  await expect(film).toHaveAccessibleName(
    'RevoGrid — Data Grid, Pivot, Charts, Gantt, Scheduler, and Kanban',
  )
  await expect
    .poll(() => film.evaluate((video: HTMLVideoElement) => video.currentTime))
    .toBeGreaterThan(0)
  await film.hover()
  expect(
    await film.evaluate((video: HTMLVideoElement) => ({
      controls: video.controls,
      autoplay: video.autoplay,
      muted: video.muted,
      loop: video.loop,
      width: video.videoWidth,
      height: video.videoHeight,
      duration: video.duration,
    })),
  ).toEqual({
    controls: false,
    autoplay: true,
    muted: true,
    loop: true,
    width: 1920,
    height: 628,
    duration: 34.7,
  })
  await expect(film).not.toHaveAttribute('controls')
  await expect(hero.locator('.rg-hero-visual--film')).toHaveCSS('border-radius', '20px')
  await expect(hero.locator('.rg-hero-visual--film')).toHaveCSS('overflow', 'hidden')
  await expect(film).toHaveCSS('border-radius', '0px')
  await film.evaluate(async (video: HTMLVideoElement) => {
    video.currentTime = video.duration - 0.2
    await video.play()
  })
  await expect
    .poll(() => film.evaluate((video: HTMLVideoElement) => video.currentTime < 2 && !video.paused))
    .toBe(true)
  await expect(hero.locator('.rg-hero-product-label')).toHaveText('Data Grid')
  await expect(hero.getByRole('link', { name: 'Try live demo', exact: true })).toHaveAttribute(
    'href',
    '/demo/',
  )
})

test('ambient playback remains enabled with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const film = page.locator('.rg-product-film')
  await film.scrollIntoViewIfNeeded()
  await expect(film).toHaveAttribute('poster', '/video/revogrid-product-film-1830b8ae80c4.jpg')
  await expect
    .poll(() => film.evaluate((video: HTMLVideoElement) => video.currentTime > 0 && !video.paused))
    .toBe(true)
})

test('mobile film fits the viewport and keeps playing after scrolling away', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const film = page.locator('.rg-product-film')
  await film.scrollIntoViewIfNeeded()
  await expect
    .poll(() => film.evaluate((video: HTMLVideoElement) => video.currentTime))
    .toBeGreaterThan(0)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  const bounds = await film.boundingBox()
  expect(bounds!.width / bounds!.height).toBeCloseTo(480 / 157, 1)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  const previousTime = await film.evaluate((video: HTMLVideoElement) => video.currentTime)
  await expect
    .poll(() => film.evaluate((video: HTMLVideoElement) => video.currentTime))
    .toBeGreaterThan(previousTime)
  expect(await film.evaluate((video: HTMLVideoElement) => video.paused)).toBe(false)
})

test('film follows site theme and preserves position in both directions', async ({ page }) => {
  await page.goto('/')
  const film = page.locator('.rg-product-film')
  await film.scrollIntoViewIfNeeded()
  await expect
    .poll(() => film.evaluate((video: HTMLVideoElement) => video.readyState))
    .toBeGreaterThanOrEqual(2)
  const toggle = page.getByRole('switch', { name: 'Appearance', exact: true }).first()
  await film.evaluate((video: HTMLVideoElement) => {
    video.pause()
    video.currentTime = 7
  })
  await toggle.click()
  await expect(film).toHaveAttribute('src', '/video/revogrid-product-film-dark-84e3ca74a4ea.mp4')
  await expect(film).toHaveAttribute('poster', '/video/revogrid-product-film-dark-84e3ca74a4ea.jpg')
  await expect
    .poll(() =>
      film.evaluate(
        (video: HTMLVideoElement) =>
          video.currentTime >= 7 &&
          video.currentTime < 10 &&
          !video.paused &&
          video.readyState >= 2,
      ),
    )
    .toBe(true)
  await film.scrollIntoViewIfNeeded()
  await page
    .locator('.rg-hero-visual--film')
    .screenshot({ path: 'output/playwright/product-film-dark.png' })
  await page.reload()
  await expect(film).toHaveAttribute('src', '/video/revogrid-product-film-dark-84e3ca74a4ea.mp4')
  await expect
    .poll(() => film.evaluate((video: HTMLVideoElement) => video.readyState))
    .toBeGreaterThanOrEqual(2)
  await film.evaluate((video: HTMLVideoElement) => {
    video.pause()
    video.currentTime = 30
  })
  await toggle.click()
  await expect(film).toHaveAttribute('src', '/video/revogrid-product-film-1830b8ae80c4.mp4')
  await expect
    .poll(() =>
      film.evaluate(
        (video: HTMLVideoElement) =>
          video.currentTime >= 30 &&
          video.currentTime < 32 &&
          !video.paused &&
          video.readyState >= 2,
      ),
    )
    .toBe(true)
  await film.scrollIntoViewIfNeeded()
  await page
    .locator('.rg-hero-visual--film')
    .screenshot({ path: 'output/playwright/product-film-kanban.png' })
  expect(await film.evaluate((video: HTMLVideoElement) => video.controls)).toBe(false)
})

test('film aligns with the shared page content without stretching', async ({ page }) => {
  for (const width of [1920, 900, 390]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    const dimensions = await page.evaluate(() => {
      const video = document.querySelector('.rg-product-film')!.getBoundingClientRect()
      const section =
        document.querySelector('.rg-home > section:not(.rg-hero) .rg-container') ??
        [...document.querySelectorAll('.rg-home .rg-container')].find(
          element => !element.closest('.rg-hero'),
        )!
      const bounds = section.getBoundingClientRect()
      const style = getComputedStyle(section)
      return {
        video: { left: video.left, right: video.right, width: video.width, height: video.height },
        contentLeft: bounds.left + parseFloat(style.paddingLeft),
        contentRight: bounds.right - parseFloat(style.paddingRight),
        overflow: document.documentElement.scrollWidth > innerWidth,
      }
    })
    expect(Math.abs(dimensions.video.left - dimensions.contentLeft)).toBeLessThanOrEqual(1)
    expect(Math.abs(dimensions.video.right - dimensions.contentRight)).toBeLessThanOrEqual(1)
    expect(dimensions.video.width).toBeLessThanOrEqual(1152)
    expect(dimensions.video.width / dimensions.video.height).toBeCloseTo(480 / 157, 1)
    expect(dimensions.overflow).toBe(false)
  }
})

test('headline follows the film order through seeks, pauses, hover, and playback', async ({
  page,
}) => {
  await page.goto('/')
  const film = page.locator('.rg-product-film')
  const badge = page.locator('.rg-hero-product-label')
  await expect
    .poll(() => film.evaluate((video: HTMLVideoElement) => video.readyState))
    .toBeGreaterThanOrEqual(2)
  await film.evaluate((video: HTMLVideoElement) => video.pause())
  await page.locator('.rg-hero-title').hover()
  await page.getByRole('link', { name: 'Try live demo', exact: true }).focus()
  for (const [time, label] of [
    [2, 'Data Grid'],
    [7, 'Pivot'],
    [12, 'Charts'],
    [18, 'Gantt'],
    [24, 'Scheduler'],
    [30, 'Kanban'],
    [0, 'Data Grid'],
  ] as const) {
    await film.evaluate((video: HTMLVideoElement, time) => {
      video.currentTime = time
    }, time)
    await expect(badge).toHaveText(label)
  }
  await film.evaluate((video: HTMLVideoElement) => {
    video.currentTime = 7
  })
  await expect(badge).toHaveText('Pivot')
  await page.waitForTimeout(3300)
  await expect(badge).toHaveText('Pivot')
  await film.evaluate((video: HTMLVideoElement) => {
    video.currentTime = 4.9
  })
  await expect(badge).toHaveText('Data Grid')
  await film.evaluate((video: HTMLVideoElement) => video.play())
  await expect(badge).toHaveText('Pivot')
  await film.evaluate((video: HTMLVideoElement) => {
    video.pause()
    video.currentTime = 7
  })
  await page
    .locator('.rg-hero')
    .screenshot({ path: 'output/playwright/product-film-pivot-synced.png' })
})
