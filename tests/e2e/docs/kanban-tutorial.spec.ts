import { expect, test } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

for (const viewport of [
  { width: 1440, height: 1000 },
  { width: 390, height: 844 },
]) {
  test.describe(`shipped Kanban tutorial at ${viewport.width}px`, () => {
    test.use({ viewport })
    test('renders verified APIs, one FAQ schema and an accessible shared FAQ', async ({ page }) => {
      await page.goto('/blog/react-kanban-board-tutorial')
      await expect(page.getByRole('heading', { level: 1 })).toContainText(
        'React Kanban Board Tutorial',
      )
      const snippets = await page.locator('.vp-doc pre').allTextContents()
      expect(snippets.join('\n')).toContain("from '@revolist/kanban'")
      expect(snippets.join('\n')).toContain("count === 1 ? 'card' : 'cards'")
      expect(snippets.join('\n')).not.toMatch(
        /PlanningPlugin|createPlanningModel|rv-enterprise-trial/,
      )
      const schemas = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes =>
        nodes.flatMap(node => {
          const data = JSON.parse(node.textContent || '{}')
          return Array.isArray(data) ? data : [data]
        }),
      )
      expect(schemas.filter(schema => schema['@type'] === 'FAQPage')).toHaveLength(1)
      expect(schemas.find(schema => schema['@type'] === 'TechArticle')?.dateModified).toBe(
        '2026-10-22',
      )
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        /rv-grid.com\/blog\/react-kanban-board-tutorial/,
      )
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1),
      ).toBe(true)
      const output = resolve('output/kanban-tutorial')
      await mkdir(output, { recursive: true })
      await page.screenshot({ path: resolve(output, `article-${viewport.width}.png`) })
      const trigger = page.getByRole('button', {
        name: 'Does the example need a Planning model?',
        exact: true,
      })
      await trigger.scrollIntoViewIfNeeded()
      await trigger.focus()
      await page.keyboard.press('Enter')
      await expect(trigger).toHaveAttribute('aria-expanded', 'true')
      await expect(page.locator(`#${await trigger.getAttribute('aria-controls')}`)).toContainText(
        'shipped standalone KanbanPlugin',
      )
      await page.screenshot({ path: resolve(output, `article-faq-${viewport.width}.png`) })
    })
  })
}
