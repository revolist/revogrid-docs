import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const hero = readFileSync(
  new URL('../../../../../.vitepress/theme/home-v2/HomeHeroSection.vue', import.meta.url),
  'utf8',
)

test('keeps the hero eyebrow without promotional badges', () => {
  assert.match(hero, /class="rg-hero-eyebrow"/)
  assert.doesNotMatch(hero, /HomeHeroProof|Loved by builders|jsdelivr/i)
})
