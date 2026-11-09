import { expect, test } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const output = resolve('output/playwright/blog-design-review-20261015/updated')
const article = '/blog/react-spreadsheet-copy-paste-validation-undo-redo'

test('blog search and topic controls compose, clear, and support the keyboard', async ({
  page,
}) => {
  test.setTimeout(90_000)
  await page.goto('/blog/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Build betterdata-heavy applications.',
    { timeout: 60_000 },
  )
  await expect(page.getByRole('main')).toHaveCount(1)
  await expect(page.locator('.blog-card--featured .blog-card__link')).toHaveAttribute(
    'href',
    '/blog/javascript-charts-for-dashboards',
  )
  await expect(page.locator('.blog-card--featured')).toContainText('Featured article')
  await expect
    .poll(() =>
      page
        .locator('.blog-card--featured img')
        .evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0),
    )
    .toBe(true)
  const allLinks = await page
    .locator('.blog-card__link')
    .evaluateAll(links => links.map(link => link.getAttribute('href')))
  expect(new Set(allLinks).size).toBe(allLinks.length)
  expect(allLinks.some(link => link?.includes('_feature'))).toBe(false)
  await page.getByRole('button', { name: 'Pivot', exact: true }).focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('button', { name: 'Pivot', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await expect(page.locator('.blog-card--featured')).toHaveCount(0)
  await expect(page.locator('.blog-grid .blog-card')).not.toHaveCount(0)
  const topics = await page.locator('.blog-grid .blog-card__eyebrow').allTextContents()
  expect(topics.every(topic => topic.trim() === 'Pivot')).toBe(true)
  await page.getByRole('searchbox', { name: 'Search blog articles' }).fill('React')
  await expect(page.locator('.blog-grid .blog-card')).toHaveCount(1)
  await page
    .getByRole('searchbox', { name: 'Search blog articles' })
    .fill('no-article-matches-this-query')
  await expect(page.getByRole('heading', { name: 'No articles found' })).toBeVisible()
  await page.getByRole('button', { name: 'Clear filters' }).click()
  await expect(page.getByRole('searchbox', { name: 'Search blog articles' })).toHaveValue('')
  await expect(page.getByRole('button', { name: 'All', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await expect(page.locator('.blog-card--featured')).toBeVisible()
})

for (const theme of ['light', 'dark'] as const) {
  test(`blog and article layouts retain balanced gutters in ${theme}`, async ({ page }) => {
    await mkdir(output, { recursive: true })
    await page.addInitScript(
      theme => localStorage.setItem('vitepress-theme-appearance', theme),
      theme,
    )
    for (const width of [360, 390, 430, 768, 1280]) {
      await page.setViewportSize({ width, height: width === 1280 ? 900 : 844 })
      await page.goto('/blog/')
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
      await expect(page.locator('html')).toHaveClass(theme === 'dark' ? /dark/ : /^(?!.*dark)/)
      const layout = await page.locator('.blog-index').evaluate(el => {
        const rect = el.getBoundingClientRect()
        return {
          left: rect.left,
          right: innerWidth - rect.right,
          overflow: document.documentElement.scrollWidth - innerWidth,
        }
      })
      expect(layout.overflow).toBeLessThanOrEqual(1)
      expect(layout.left).toBeGreaterThanOrEqual(20)
      expect(Math.abs(layout.left - layout.right)).toBeLessThanOrEqual(17)
      if ([390, 1280].includes(width)) {
        await page.screenshot({ path: resolve(output, `blog-${width}-${theme}.png`) })
        await page
          .getByRole('heading', { name: 'Latest articles', exact: true })
          .scrollIntoViewIfNeeded()
        await page.screenshot({ path: resolve(output, `library-${width}-${theme}.png`) })
      }
      await page.goto(article)
      await expect(page.locator('.blog-article-meta')).toContainText('RevoGrid Team')
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth - innerWidth),
      ).toBeLessThanOrEqual(1)
      if ([390, 1280].includes(width))
        await page.screenshot({ path: resolve(output, `article-${width}-${theme}.png`) })
    }
  })
}

test('article navigation exposes real demo, related reading and consistent metadata', async ({
  page,
}) => {
  await page.goto('/blog/')
  await page
    .getByRole('link', { name: 'Build an Excel-like spreadsheet in React', exact: true })
    .click()
  await expect(page).toHaveURL(new RegExp(article + '$'))
  await expect(page.locator('.blog-article-meta time').first()).toHaveAttribute(
    'datetime',
    '2026-09-18',
  )
  await expect(page.locator('.blog-article-meta')).toContainText('13 min read')
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  await page.getByRole('link', { name: 'Open demo ↗', exact: true }).click()
  await expect(page.locator('#react-inventory-demo revo-grid')).toBeVisible()
  await expect(page.locator('.blog-related .blog-card__link')).toHaveCount(2)
  await expect(page.locator('.VPDocAsideOutline')).not.toContainText('Continue reading')
  const target = await page.locator('.blog-related .blog-card__link').first().getAttribute('href')
  await page.locator('.blog-related .blog-card__link').first().click()
  await expect(page).toHaveURL(new RegExp(target + '$'))
  await expect(page.locator('.blog-article-meta')).toBeVisible()
})

test('shared blog slots leave documentation pages unchanged', async ({ page }) => {
  await page.goto('/guide/')
  await expect(
    page.getByRole('heading', { level: 1, name: /JavaScript Data Grid Quick Start/ }),
  ).toBeVisible()
  await expect(page.locator('.blog-article-meta')).toHaveCount(0)
  await expect(page.locator('.blog-related')).toHaveCount(0)
  await expect(page.getByRole('main')).toHaveCount(1)
})
