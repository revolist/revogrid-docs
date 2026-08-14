import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const hero = readFileSync(new URL('./HomeHeroSection.vue', import.meta.url), 'utf8')

test('places linked jsDelivr, GitHub, and feedback badges below the grid preview', () => {
  assert.ok(hero.indexOf('<HomeHero') < hero.indexOf('class="rg-hero-proof-badges"'))
  assert.match(hero, /https:\/\/data\.jsdelivr\.com\/v1\/package\/npm\/@revolist\/revogrid\/badge/)
  assert.match(hero, /https:\/\/www\.jsdelivr\.com\/package\/npm\/@revolist\/revogrid/)
  assert.match(hero, /https:\/\/github\.com\/revolist\/revogrid/)
  assert.match(hero, />3\.4K stars</)
  assert.match(hero, /href="#feedback"/)
  assert.match(hero, />Loved by builders</)
  assert.match(hero, /aria-label="Read what RevoGrid users say"/)
  assert.match(hero, /alt="jsDelivr downloads for @revolist\/revogrid"/)
  assert.equal((hero.match(/rel="noopener noreferrer"/g) ?? []).length, 2)
})

test('keeps the badge row contained and mobile-centered', () => {
  assert.match(hero, /\.rg-hero-proof-badges\s*\{[\s\S]*?flex-wrap: wrap;/)
  assert.match(hero, /@media \(max-width: 640px\)[\s\S]*?\.rg-hero-proof-badges\s*\{[\s\S]*?justify-content: center;/)
})
