import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const filteringSection = readFileSync(new URL('../../../excel-data-grid/ExcelFilteringSection.vue', import.meta.url), 'utf8')

test('renders active selection filters as selected-over-total count badges', () => {
  assert.doesNotMatch(filteringSection, /FilterHeaderTemplateFunc|selectionCountFilterHeader|selectionFilterHeader/)
  assert.match(filteringSection, /prop: 'region',[^\n]*filter: \[FIlTER_SELECTION\]/)
  assert.match(filteringSection, /prop: 'status',[^\n]*filter: \[FIlTER_SELECTION\]/)
  assert.doesNotMatch(filteringSection, /\.\.\.emptyFilterHeader, prop: '(?:region|segment|status)'/)
})
