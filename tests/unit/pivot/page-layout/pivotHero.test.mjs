import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const pageSource = readFileSync(new URL('../../../../pivot/index.md', import.meta.url), 'utf8')
const fallbackSource = readFileSync(
  new URL('../../../../pivot/page-layout/pivotPageConfig.ts', import.meta.url),
  'utf8',
)

test('uses the shared Pivot hero config when the page has no override', () => {
  assert.match(pageSource, /<PivotPageLayout \/>/)
  assert.doesNotMatch(pageSource, /^pivotLanding:/m)
  assert.match(fallbackSource, /titleSuffix: 'Pivot Table'/)
})
