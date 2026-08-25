import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const heroSection = readFileSync(new URL('./ExcelHeroSection.vue', import.meta.url), 'utf8')
const filteringSection = readFileSync(new URL('./ExcelFilteringSection.vue', import.meta.url), 'utf8')

test('keeps the hero grid filter-free without changing the filtering example', () => {
  assert.doesNotMatch(heroSection, /AdvanceFilterPlugin|heroFilterConfig|:filter=|\bfilter:/)
  assert.match(heroSection, /const heroPlugins = \[FormulaPlugin\]/)
  assert.match(filteringSection, /AdvanceFilterPlugin/)
  assert.match(filteringSection, /FilterHeaderPlugin/)
})
