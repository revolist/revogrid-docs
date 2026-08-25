import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const groupingSection = readFileSync(new URL('./ExcelGroupingSection.vue', import.meta.url), 'utf8')
const styles = readFileSync(new URL('./excelLanding.scss', import.meta.url), 'utf8')

test('indents grouping leaf rows by the active grouping depth', () => {
  assert.match(groupingSection, /const leafIndent = `calc\(\$\{groupingProps\.value\.length\} \* 24px\)`/)
  assert.match(groupingSection, /class: 'excel-group-leaf-value',[\s\S]*?'--excel-group-leaf-indent': leafIndent/)
  assert.match(groupingSection, /prop: 'region',[\s\S]*?cellTemplate: groupLeafCellTemplate/)
  assert.match(styles, /\.excel-group-leaf-value \{[^}]*display: block;[^}]*margin-inline-start: var\(--excel-group-leaf-indent, 0\);/)
})

test('keeps fixed grouping without the editable group panel', () => {
  assert.doesNotMatch(groupingSection, /ColumnGroupPanelPlugin|column-group-panel|grouping-change|onGroupingChange/)
  assert.doesNotMatch(groupingSection, /Drag any column header|drag keys to reorder|× removes/)
  assert.match(groupingSection, /groupingProps = ref<ColumnProp\[\]>\(\['region', 'department'\]\)/)
  assert.match(groupingSection, /<span>Region → Department<\/span>/)
  assert.match(groupingSection, /Collapse all/)
  assert.match(groupingSection, /Expand all/)
  assert.doesNotMatch(styles, /\.excel-live-grid--grouping \.group-panel|\.excel-live-grid--grouping \.group-item/)
  assert.match(styles, /\.excel-group-actions \{[^}]*justify-content: flex-end;/)
})
