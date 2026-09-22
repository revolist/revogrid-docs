import { expect, test } from '@playwright/test'

const frameworks = [
  {
    name: 'React',
    landing: '/react-data-grid',
    article: '/blog/top-5-react-datagrid-libraries-2026',
    demo: '/guide/demos/react/react-datagrid',
    guide: '/guide/react/',
  },
  {
    name: 'Angular',
    landing: '/angular-data-grid',
    article: '/blog/top-5-angular-data-grid-libraries-2026',
    demo: '/guide/demos/angular/angular-datagrid',
    guide: '/guide/angular/',
  },
  {
    name: 'Vue',
    landing: '/vue-data-grid',
    article: '/blog/top-5-vue-data-grid-libraries-2026',
    demo: '/guide/demos/vue/vue3-datagrid',
    guide: '/guide/vue3/',
  },
] as const

for (const framework of frameworks) {
  test(`${framework.name} product and comparison pages render and cross-link`, async ({ page }) => {
    await page.goto(framework.landing)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      `${framework.name} Data Grid`,
    )
    await expect(page.locator('.rg-comparison-action')).toHaveAttribute('href', framework.article)
    await expect(
      page.getByRole('link', { name: `Explore ${framework.name} demo` }),
    ).toHaveAttribute('href', framework.demo)

    await page.getByRole('link', { name: `Explore ${framework.name} demo` }).click()
    await expect(page).toHaveURL(new RegExp(`${framework.demo}$`))
    await expect(page.getByRole('heading', { level: 1 })).toContainText(framework.name)

    await page.goto(framework.landing)
    await page
      .getByRole('link', { name: `Read ${framework.name} docs` })
      .first()
      .click()
    await expect(page).toHaveURL(new RegExp(`${framework.guide}$`))
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: new RegExp(`${framework.name}(?: 3)? Data Grid: Installation and Getting Started`),
      }),
    ).toBeVisible()

    await page.goto(framework.article)
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      `Best ${framework.name} Data Grids in 2026`,
    )
    await expect(
      page.getByRole('link', { name: `${framework.name} Data Grid`, exact: true }).first(),
    ).toHaveAttribute('href', framework.landing)
  })
}

test('mobile pages remain within viewport in light and dark themes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  for (const colorScheme of ['light', 'dark'] as const) {
    await page.goto(frameworks[0].landing)
    await page.evaluate(
      theme => localStorage.setItem('vitepress-theme-appearance', theme),
      colorScheme,
    )
    for (const framework of frameworks) {
      for (const path of [framework.landing, framework.article]) {
        await page.goto(path)
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
        await expect(page.locator('html')).toHaveClass(
          colorScheme === 'dark' ? /dark/ : /^(?!.*dark)/,
        )
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - window.innerWidth,
        )
        expect(overflow, `${path} overflows at 390px in ${colorScheme}`).toBeLessThanOrEqual(1)
      }
    }
  }
})
