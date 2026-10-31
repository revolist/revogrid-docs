import { expect, test, type Locator, type Page } from '@playwright/test'

async function chooseStory(page: Page, name: string) {
  const button = page.getByRole('button', { name, exact: false })
  if (test.info().project.name === 'mobile') await button.tap()
  else await button.click()
}
async function highlightedSource(story: Locator, token: string) {
  const id = await story.getAttribute('data-story')
  const block = story
    .page()
    .locator(`[data-source-for="${id}"] .vp-doc .language-ts`)
    .filter({ hasText: token })
    .first()
  await expect(block).toBeVisible()
  expect(await block.locator('code span[style]').count()).toBeGreaterThan(10)
  const copy = block.locator('button.copy')
  await copy.click()
  await expect(copy).toHaveClass(/copied/)
}

const storyRegion = (page: Page, id: string) => page.locator(`[data-story="${id}"]`)
async function ready(story: Locator) {
  await expect(story.locator('.live-chart[data-status="ready"]')).toHaveCount(4)
  await expect(story.locator('.live-chart-host svg')).toHaveCount(4)
  await expect(story.locator('.live-chart[data-status="error"]')).toHaveCount(0)
}
async function fits(page: Page, story: Locator) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  )
  for (const card of await story.locator('.story-card').all()) {
    const box = await card.boundingBox()
    expect(box!.width).toBeGreaterThan(200)
    expect(box!.x).toBeGreaterThanOrEqual(0)
    expect(box!.x + box!.width).toBeLessThanOrEqual((await page.viewportSize())!.width + 1)
  }
}

test.beforeEach(async ({ page }, testInfo) => {
  await page.addInitScript(
    theme => localStorage.setItem('vitepress-theme-appearance', theme),
    testInfo.project.name === 'desktop' ? 'light' : 'dark',
  )
  await page.goto('/charts/#chart-use-cases', { waitUntil: 'domcontentloaded' })
  await expect(page.getByRole('heading', { name: 'From one chart to a decision.' })).toBeVisible()
})

test('reliability filters reconcile charts, raw activation and an explicit aggregate action', async ({
  page,
}) => {
  const story = storyRegion(page, 'reliability')
  await ready(story)
  await expect(story.locator('.story-summary').first()).toContainText('272 requests')
  await story.getByLabel('Service', { exact: true }).selectOption('Checkout')
  await story.getByLabel('Region', { exact: true }).selectOption('Europe')
  await ready(story)
  await expect(story.locator('.story-summary').first()).toContainText('48 requests')
  const scatter = story.locator('[data-chart-type="scatter"]')
  await scatter.getByRole('button', { name: /req-/ }).first().press('Enter')
  await expect(story.locator('.story-summary').last()).toContainText('Raw request req-')
  const beforeZoom = await scatter.getByRole('button', { name: /req-/ }).count()
  await story
    .locator('[data-chart-type="columnLine"]')
    .getByRole('button', { name: 'Zoom in', exact: true })
    .click()
  await expect
    .poll(() => scatter.getByRole('button', { name: /req-/ }).count())
    .toBeLessThan(beforeZoom)
  await story.getByRole('button', { name: 'Reset filters', exact: true }).click()
  await ready(story)
  await expect(story.locator('.story-summary').first()).toContainText('272 requests')
  const heatmap = story.locator('[data-chart-type="heatmap"]')
  await heatmap
    .getByRole('button', { name: /Checkout/ })
    .first()
    .press('Enter')
  const action = story.getByRole('button', { name: /^Use Checkout and/ })
  await expect(action).toBeVisible()
  await action.click()
  await ready(story)
  await expect(story.locator('.story-summary').first()).toContainText('16 requests')
  await expect(story.locator('.story-summary').first()).toContainText('Bucket 0–5 minutes')
  await story.getByRole('button', { name: 'Reset filters', exact: true }).click()
  await ready(story)
  await page.getByText('Runnable source and aggregation policy', { exact: true }).click()
  await highlightedSource(story, 'reliabilityExamples')
  await fits(page, story)
  await story.locator('.story-grid').screenshot({ path: test.info().outputPath('dashboard.png') })
})

test('fulfilment keeps the chart-focused view simple while filters update all panels', async ({
  page,
}) => {
  await chooseStory(page, 'Fulfilment bottlenecks')
  const story = storyRegion(page, 'fulfilment')
  await ready(story)
  await expect(story.getByRole('status')).toContainText('65 eligible shipments')
  await story.getByLabel('Warehouse', { exact: true }).selectOption('South')
  await story.getByLabel('Carrier', { exact: true }).selectOption('SwiftPost')
  await ready(story)
  await expect(story.getByRole('status')).not.toContainText('65 eligible shipments')
  await expect(story.getByLabel('Inspect a real shipment')).toHaveCount(0)
  await expect(story.getByLabel('Shipment details')).toHaveCount(0)
  await story.getByRole('button', { name: 'Reset filters', exact: true }).click()
  await ready(story)
  await expect(story.getByRole('status')).toContainText('65 eligible shipments')
  await page.getByText('View runnable data and chart configurations', { exact: true }).click()
  await highlightedSource(story, 'shipmentLegs')
  await fits(page, story)
  await story.locator('.story-grid').screenshot({ path: test.info().outputPath('dashboard.png') })
})

test('manufacturing preserves complete bins, part identity and host filter/reset behavior', async ({
  page,
}) => {
  await chooseStory(page, 'Manufacturing quality')
  const story = storyRegion(page, 'manufacturing')
  await ready(story)
  await expect(story.getByRole('status').first()).toContainText('144 measured parts')
  await story.getByLabel('Machine', { exact: true }).selectOption('Lathe C')
  await story.getByLabel('Batch', { exact: true }).selectOption('Batch 4')
  await ready(story)
  await expect(story.getByRole('status').first()).toContainText('12 parts in complete fixed bins')
  await story.getByRole('button', { name: 'Inspect highest-diameter part' }).click()
  await expect(story.locator('[data-manufacturing-inspection]')).toContainText('PART-3-4-')
  await expect(story.locator('[data-manufacturing-inspection]')).toContainText(
    'outside specification',
  )
  await story
    .locator('[data-chart-type="scatter"]')
    .getByRole('button', { name: /PART-/ })
    .first()
    .press('Enter')
  await expect(story.locator('[data-manufacturing-inspection]')).toContainText('PART-3-4-01')
  await story.getByRole('button', { name: 'Reset filters', exact: true }).click()
  await ready(story)
  await expect(story.getByRole('status').first()).toContainText('144 parts in complete fixed bins')
  await page
    .getByText('View runnable manufacturing data and chart configuration', { exact: true })
    .click()
  await highlightedSource(story, 'REFERENCE-')
  await fits(page, story)
  await story.locator('.story-grid').screenshot({ path: test.info().outputPath('dashboard.png') })
})

test('rapid story replacement keeps only the active chart owners and keyboard controls usable', async ({
  page,
}) => {
  for (const name of ['Manufacturing quality', 'Fulfilment bottlenecks', 'Service reliability']) {
    await chooseStory(page, name)
  }
  const story = storyRegion(page, 'reliability')
  await ready(story)
  await expect(page.locator('[data-story]')).toHaveCount(1)
  await story.getByLabel('Service', { exact: true }).press('Tab')
  await expect(story.getByLabel('Region', { exact: true })).toBeFocused()
  await page.setViewportSize({ width: 600, height: 900 })
  await ready(story)
  await fits(page, story)
})
