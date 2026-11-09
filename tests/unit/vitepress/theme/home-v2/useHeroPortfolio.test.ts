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
