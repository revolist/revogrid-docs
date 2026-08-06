import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const pageSource = readFileSync(new URL('../index.md', import.meta.url), 'utf8')
const fallbackSource = readFileSync(new URL('./pivotPageConfig.ts', import.meta.url), 'utf8')

test('keeps the Pivot H1 suffix free of orphan punctuation', () => {
  assert.match(pageSource, /^\s+titleSuffix: component$/m)
  assert.match(fallbackSource, /titleSuffix: 'component'/)
})
