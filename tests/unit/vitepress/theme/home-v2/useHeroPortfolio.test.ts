import assert from 'node:assert/strict'
import test from 'node:test'
import { useHeroPortfolio } from '../../../../../.vitepress/theme/home-v2/hero/useHeroPortfolio.ts'

const dependency = {
  id: 'mobile-data',
  predecessorTaskId: 'hero-project-2',
  successorTaskId: 'hero-project-3',
  type: 'finish-to-start' as const,
  lagDays: 0,
}

test('portfolio retains dependency edits alongside task edits and hidden endpoints', () => {
  const portfolio = useHeroPortfolio()
  portfolio.applyEdit({
    data: {},
    models: {},
    domainChanges: [
      {
        type: 'gantt-dependency',
        detail: {
          action: 'create',
          dependencyId: dependency.id,
          dependency,
          previousDependency: null,
        },
      },
    ],
  })
  const links = portfolio.dependencies.value
  assert.ok(links.some(link => link.id === dependency.id))
  const row = portfolio.projects.value[1]
  portfolio.applyEdit({
    data: { 1: { startDate: '2026-11-11T09:00:00.000Z' } },
    models: { 1: row },
  })
  assert.equal(portfolio.dependencies.value, links)
  portfolio.rememberVisibleIds(['hero-project-2'])
  assert.equal(portfolio.dependencies.value.length, 0)
  portfolio.rememberVisibleIds(portfolio.projects.value.map(row => row.id))
  assert.ok(portfolio.dependencies.value.some(link => link.id === dependency.id))
  const edited = { ...dependency, lagDays: 2 }
  portfolio.applyEdit({
    data: {},
    models: {},
    domainChanges: [
      {
        type: 'gantt-dependency',
        detail: {
          action: 'edit',
          dependencyId: dependency.id,
          dependency: edited,
          previousDependency: dependency,
        },
      },
    ],
  })
  assert.equal(portfolio.dependencies.value.find(link => link.id === dependency.id)?.lagDays, 2)
  portfolio.applyEdit({
    data: {},
    models: {},
    domainChanges: [
      {
        type: 'gantt-dependency',
        detail: {
          action: 'delete',
          dependencyId: dependency.id,
          dependency: null,
          previousDependency: edited,
        },
      },
    ],
  })
  assert.ok(!portfolio.dependencies.value.some(link => link.id === dependency.id))
  portfolio.applyEdit({ data: { 1: { percentDone: 20 } }, models: { 1: row } })
  assert.ok(!portfolio.dependencies.value.some(link => link.id === dependency.id))
})

test('native replay restores visible projects and dependencies without discarding hidden links', () => {
  const portfolio = useHeroPortfolio()
  const rows = portfolio.projects.value
  const links = portfolio.dependencies.value
  portfolio.rememberVisibleIds(rows.map(row => row.id))
  portfolio.applyEdit({
    data: {},
    models: {},
    source: {
      ids: rows.map(row => row.id),
      rows: rows.slice(1),
      dependencyIds: [],
      dependencies: [],
    },
  })
  assert.equal(portfolio.visibleRows.value.length, 5)
  assert.equal(portfolio.dependencies.value.length, 1)
  portfolio.applyEdit({
    data: {},
    models: {},
    source: {
      ids: rows.slice(1).map(row => row.id),
      rows,
      dependencyIds: links.map(link => link.id),
      dependencies: [],
    },
  })
  assert.equal(portfolio.visibleRows.value.length, 6)
  assert.equal(portfolio.dependencies.value.length, 0)
  portfolio.applyEdit({
    data: {},
    models: {},
    source: {
      ids: rows.map(row => row.id),
      rows,
      dependencyIds: [],
      dependencies: links,
    },
  })
  assert.equal(portfolio.dependencies.value.length, 1)
})
