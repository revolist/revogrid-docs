import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const pageSource = readFileSync(new URL('../index.md', import.meta.url), 'utf8')
const fallbackSource = readFileSync(new URL('./pivotPageConfig.ts', import.meta.url), 'utf8')

test('keeps the Pivot H1 suffix synchronized with the concise Web copy', () => {
  assert.match(pageSource, /^\s+titleSuffix: component for Web$/m)
  assert.match(fallbackSource, /titleSuffix: 'component for Web'/)
})
