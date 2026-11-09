import { expect, test } from '@playwright/test'

test('demo pages keep the logo inside the sidebar and search in the content header', async ({
  page,
}) => {
  for (const width of [1280, 1920]) {
    await page.setViewportSize({ width, height: 720 })
    await page.goto('/demo/')
    await expect(page.locator('.demo-nav')).toBeVisible()
    await expect(page.locator('.VPNavBarTitle .title')).toBeVisible()
    await expect(page.locator('.VPNavBarSearchButton')).toBeVisible()

    const geometry = await page.evaluate(() => {
      const bounds = (selector: string) => document.querySelector(selector)!.getBoundingClientRect()
      const sidebar = bounds('.demo-nav')
      const logo = bounds('.VPNavBarTitle .logo')
      const search = bounds('.VPNavBarSearchButton')
      const divider = bounds('.VPNavBar .divider-line')
      const title = document.querySelector('.VPNavBarTitle .title')!
      return {
        sidebar: { left: sidebar.left, right: sidebar.right },
        logo: { left: logo.left, right: logo.right },
        search: { left: search.left },
        divider: { left: divider.left, width: divider.width },
        titleBorderWidth: getComputedStyle(title).borderBottomWidth,
      }
    })

    expect(geometry.logo.left).toBeGreaterThanOrEqual(geometry.sidebar.left)
    expect(geometry.logo.right).toBeLessThanOrEqual(geometry.sidebar.right)
    expect(geometry.logo.left - geometry.sidebar.left).toBe(32)
    expect(geometry.search.left).toBeGreaterThanOrEqual(geometry.sidebar.right)
    expect(geometry.divider.left).toBe(0)
    expect(geometry.divider.width).toBe(width)
    expect(geometry.titleBorderWidth).toBe('0px')
  }
})
