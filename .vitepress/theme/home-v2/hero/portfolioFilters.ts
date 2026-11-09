import type { FilterAst } from '@revolist/revogrid-pro'

const budgetThreshold = 100000

export function hasHeroBudgetPreset(ast: FilterAst | undefined): boolean {
  if (!ast) return false
  if (ast.type === 'condition') {
    return ast.field === 'budget' && ast.operator === 'greaterThan' && ast.value === budgetThreshold
  }
  return ast.type === 'group' && ast.operator === 'and' && ast.children.some(hasHeroBudgetPreset)
}

function withoutBudget(ast: FilterAst | undefined): FilterAst | undefined {
  if (!ast) return undefined
  if (ast.type === 'condition') return ast.field === 'budget' ? undefined : ast
  if (ast.type === 'not') {
    const child = withoutBudget(ast.child)
    return child ? { ...ast, child } : undefined
  }
  const children = ast.children.map(withoutBudget).filter((node): node is FilterAst => !!node)
  return children.length ? { ...ast, children } : undefined
}

/** Toggle the authored budget preset while retaining the other column filters. */
export function toggleHeroBudgetPreset(ast: FilterAst | undefined): FilterAst | undefined {
  const remaining = withoutBudget(ast)
  if (hasHeroBudgetPreset(ast)) return remaining
  const budget: FilterAst = {
    type: 'condition',
    field: 'budget',
    operator: 'greaterThan',
    valueType: 'number',
    value: budgetThreshold,
  }
  return remaining ? { type: 'group', operator: 'and', children: [remaining, budget] } : budget
}
