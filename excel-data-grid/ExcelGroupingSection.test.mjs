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
