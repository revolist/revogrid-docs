import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const articleUrl = new URL('../../../kanban/workflow-columns.md', import.meta.url)
const referringPages = [
  new URL('../../../kanban/use-cases/sales-onboarding.md', import.meta.url),
  new URL('../../../kanban/use-cases/internal-workflows.md', import.meta.url),
]

test('publishes the workflow columns guide linked by Kanban use cases', () => {
  assert.ok(existsSync(articleUrl), 'kanban/workflow-columns.md should exist')

  const article = readFileSync(articleUrl, 'utf8')
  assert.match(article, /^title: .*Kanban Workflow Columns/m)
  assert.match(article, /^description: .*JavaScript Kanban/m)
  assert.match(article, /rel: canonical\s*\n\s+href: https:\/\/rv-grid\.com\/kanban\/workflow-columns/)
  assert.match(article, /KanbanConfig/)
  assert.match(article, /wipLimit/)
  assert.match(article, /\/demo\/kanban/)

  for (const pageUrl of referringPages) {
    assert.match(readFileSync(pageUrl, 'utf8'), /\[workflow columns\]\(\/kanban\/workflow-columns\)/)
  }
})
