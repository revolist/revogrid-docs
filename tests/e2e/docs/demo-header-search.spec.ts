import { expect, test } from '@playwright/test'

test('demo pages keep the global logo and search aligned with ordinary site headers', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 720 })

  await page.goto('/')
  const siteSearch = await page.locator('.VPNavBarSearch').evaluate(element => {
    const bounds = element.getBoundingClientRect()
    return { x: bounds.x }
  })
  const siteLogo = await page.locator('.VPNavBarTitle .title').evaluate(element => {
    const bounds = element.getBoundingClientRect()
    return { x: bounds.x }
  })

  await page.goto('/demo/')
  const demoSearch = await page.locator('.VPNavBarSearch').evaluate(element => {
    const bounds = element.getBoundingClientRect()
    return { x: bounds.x }
  })
  const demoLogo = await page.locator('.VPNavBarTitle .title').evaluate(element => {
    const bounds = element.getBoundingClientRect()
    return { x: bounds.x }
  })

  expect(Math.abs(demoSearch.x - siteSearch.x)).toBeLessThanOrEqual(8)
  expect(Math.abs(demoLogo.x - siteLogo.x)).toBeLessThanOrEqual(8)
})
