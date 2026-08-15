import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const demoSource = readFileSync(new URL('../../pro/PivotDemo.vue', import.meta.url), 'utf8')

test('uses readable discount groups and wide Pivot columns in the hero preview', () => {
  assert.match(demoSource, /:col-size="190"/)
  assert.match(demoSource, /'Discount Applied': 'Discount Applied'/)
  assert.match(demoSource, /'Discount Applied': 'No Discount'/)
  assert.doesNotMatch(demoSource, /'Discount Applied': (?:true|false)/)
})

test('keeps the Total Spend sum visible without removing discount group controls', () => {
  assert.match(demoSource, /prop: 'Total Spend',[\s\S]*?aggregators: \{[\s\S]*?sum: commonAggregators\.sum/)
  assert.match(demoSource, /prop: 'Average Spend',[\s\S]*?aggregators: \{[\s\S]*?avg: commonAggregators\.avg/)
  assert.match(demoSource, /\{ prop: 'Total Spend', aggregator: 'sum' \}/)
  assert.match(demoSource, /\{ prop: 'Average Spend', aggregator: 'avg' \}/)
  assert.doesNotMatch(demoSource, /\{ prop: 'Total Spend', aggregator: 'avg' \}/)
  assert.match(demoSource, /columnCollapse: \{\s*enabled: true,\s*collapsed: true,\s*\}/)
  assert.doesNotMatch(demoSource, /sealed: true/)
})
