import assert from 'node:assert/strict'
import test from 'node:test'
import type { FilterAst } from '@revolist/revogrid-pro'
import {
  hasHeroBudgetPreset,
  toggleHeroBudgetPreset,
} from '../../../../../.vitepress/theme/home-v2/hero/portfolioFilters.ts'

const budget: FilterAst = {
  type: 'condition',
  field: 'budget',
  operator: 'greaterThan',
  valueType: 'number',
  value: 100000,
}
const owner: FilterAst = {
  type: 'condition',
  field: 'owner',
  operator: 'equals',
  valueType: 'string',
  value: 'Alex Nguyen',
}

test('budget shortcut adds a strict threshold and can remove it again', () => {
  assert.deepEqual(toggleHeroBudgetPreset(undefined), budget)
  assert.equal(hasHeroBudgetPreset(budget), true)
  assert.equal(toggleHeroBudgetPreset(budget), undefined)
  assert.equal(hasHeroBudgetPreset({ ...budget, operator: 'greaterThanOrEqual' }), false)
})

test('shortcut preserves other-column filters and does not mutate the authored tree', () => {
  const ast: FilterAst = { type: 'group', operator: 'and', children: [owner, budget] }
  const before = structuredClone(ast)
  const cleared = toggleHeroBudgetPreset(ast)
  assert.deepEqual(cleared, { type: 'group', operator: 'and', children: [owner] })
  assert.deepEqual(ast, before)
  assert.equal(hasHeroBudgetPreset(cleared), false)
  assert.equal(hasHeroBudgetPreset(toggleHeroBudgetPreset(cleared)), true)
})

test('a budget condition inside OR or NOT is not an active shortcut', () => {
  assert.equal(
    hasHeroBudgetPreset({ type: 'group', operator: 'or', children: [budget, owner] }),
    false,
  )
  assert.equal(hasHeroBudgetPreset({ type: 'not', child: budget }), false)
  assert.equal(
    hasHeroBudgetPreset({
      type: 'group',
      operator: 'and',
      children: [owner, { type: 'group', operator: 'and', children: [budget] }],
    }),
    true,
  )
})

test('shortcut replaces budget-specific rules while retaining neighboring constraints', () => {
  const ast: FilterAst = {
    type: 'group',
    operator: 'and',
    children: [owner, { type: 'not', child: { ...budget, operator: 'lessThan', value: 200000 } }],
  }
  assert.deepEqual(toggleHeroBudgetPreset(ast), {
    type: 'group',
    operator: 'and',
    children: [{ type: 'group', operator: 'and', children: [owner] }, budget],
  })
})
