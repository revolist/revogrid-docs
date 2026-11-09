import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const hero = readFileSync(
  new URL('../../../../../.vitepress/theme/home-v2/HomeHeroSection.vue', import.meta.url),
  'utf8',
)

const proof = readFileSync(
  new URL('../../../../../.vitepress/theme/home-v2/hero/HomeHeroProof.vue', import.meta.url),
  'utf8',
)

test('places linked jsDelivr, GitHub, and feedback badges below the grid preview', () => {
  const previewPosition = hero.indexOf('<HomeHero\n')
  assert.ok(previewPosition >= 0 && hero.indexOf('<HomeHeroProof') > previewPosition)
  assert.match(proof, /https:\/\/data\.jsdelivr\.com\/v1\/package\/npm\/@revolist\/revogrid\/badge/)
  assert.match(proof, /https:\/\/www\.jsdelivr\.com\/package\/npm\/@revolist\/revogrid/)
  assert.match(proof, /https:\/\/github\.com\/revolist\/revogrid/)
  assert.match(proof, />3\.4K stars</)
  assert.match(proof, /href="#feedback"/)
  assert.match(proof, />Loved by builders</)
  assert.match(proof, /aria-label="Read what RevoGrid users say"/)
  assert.match(proof, /alt="jsDelivr downloads for @revolist\/revogrid"/)
  assert.equal((proof.match(/rel="noopener noreferrer"/g) ?? []).length, 2)
})

test('keeps the badge row contained and mobile-centered', () => {
  assert.match(proof, /\.rg-hero-proof-badges\s*\{[\s\S]*?flex-wrap: wrap;/)
  assert.match(
    proof,
    /@media \(max-width: 640px\)[\s\S]*?\.rg-hero-proof-badges\s*\{[\s\S]*?justify-content: center;/,
  )
})
