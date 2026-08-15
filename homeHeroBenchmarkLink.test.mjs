import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const homeSource = readFileSync(new URL('./index.md', import.meta.url), 'utf8')
const heroSource = readFileSync(new URL('./.vitepress/theme/home-v2/HomeHeroSection.vue', import.meta.url), 'utf8')

test('homepage performance claim links to the benchmarks page', () => {
  assert.match(homeSource, /The world's fastest JavaScript data grid\. 60fps, 3x less memory\./)
  assert.match(heroSource, /const performanceClaim = '60fps, 3x less memory\.'/)
  assert.match(heroSource, /linkOf\('\/benchmarks'\)/)
  assert.match(heroSource, /class="rg-product-link"/)
  assert.match(heroSource, /escapeHtml\(performanceClaim\)/)
})
