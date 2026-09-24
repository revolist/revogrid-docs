import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'

const read = path => readFileSync(new URL(path, import.meta.url), 'utf8')
const base = '../../../revogrid-demos/pro-advanced-pivot/src/'

test('the primary Pivot demo exposes report, reset, charts and export actions', () => {
  const header = read(`${base}financial-pivot-header/financial-pivot-header.ts`)
  for (const label of ['Fields', 'Chart', 'Export CSV', 'Report', 'Reset', 'Expand workspace']) {
    assert.ok(header.includes(label), label)
  }
  assert.match(header, /Restore saved report/)
  assert.match(header, /Export XLSX \(visible result\)/)
  assert.match(header, /Print \/ Save PDF \(visible result\)/)
})

test('the primary URL links the five focused Pivot demos', () => {
  const page = read('../../../demo/pivot.md')
  for (const id of ['pivot-charts', 'pivot-financial', 'pivot-operations', 'pivot-scale', 'pivot-import']) {
    assert.match(page, new RegExp(`/demo/${id}`))
    assert.ok(existsSync(new URL(`../../../demo/${id}.md`, import.meta.url)), id)
  }
})
