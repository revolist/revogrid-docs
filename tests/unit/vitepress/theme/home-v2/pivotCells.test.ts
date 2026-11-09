import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createPivotBudgetRenderer,
  pivotProgressPresentation,
} from '../../../../../.vitepress/theme/home-v2/hero/products/pivotCells.ts'

const h = (tag: string, props: Record<string, any>, children: any) => ({ tag, props, children })
function budgetCell(value: unknown, total: number) {
  return createPivotBudgetRenderer(total)(h as any, { value } as any) as any
}

test('budget bars retain currency and rescale to the visible portfolio', () => {
  const initial = budgetCell(180000, 870000)
  assert.equal(initial.children[0].children, '$180,000')
  assert.ok(
    Math.abs(parseFloat(initial.children[1].props.style.width) - (180000 / 870000) * 100) < 0.001,
  )
  const filtered = budgetCell(180000, 690000)
  assert.equal(filtered.children[0].children, '$180,000')
  assert.ok(
    parseFloat(filtered.children[1].props.style.width) >
      parseFloat(initial.children[1].props.style.width),
  )
  assert.equal(budgetCell(870000, 870000).children[1].props.style.width, '100%')
  assert.equal(budgetCell(0, 0).children[1].props.style.width, '0%')
})

test('progress badges distinguish thresholds and format aggregated averages', () => {
  assert.equal(pivotProgressPresentation(49.5)?.label, '50%')
  assert.equal(
    new Set([0, 35, 65, 85].map(value => pivotProgressPresentation(value)?.color)).size,
    4,
  )
  assert.equal(pivotProgressPresentation(100)?.label, '100%')
  assert.equal(pivotProgressPresentation(null), undefined)
  assert.equal(pivotProgressPresentation('invalid'), undefined)
  assert.equal(budgetCell(null, 0), '')
})
