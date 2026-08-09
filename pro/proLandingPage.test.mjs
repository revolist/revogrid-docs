import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const pageSource = readFileSync(new URL('./index.md', import.meta.url), 'utf8')
const highlightsSource = readFileSync(new URL('./landing/ProFeatureHighlights.vue', import.meta.url), 'utf8')

test('presents RevoKanban as a Pro Advanced tool teams do not have to build', () => {
  const featureSection = pageSource.match(/  features:\n([\s\S]*?)\n  serverSide:/)?.[1] ?? ''

  assert.match(featureSection, /prefix: Tools you/)
  assert.match(featureSection, /highlight: don't have to build\./)
  assert.match(featureSection, /- type: kanban/)
  assert.match(featureSection, /tier: Pro Advanced/)
  assert.match(featureSection, /title: RevoKanban/)
  assert.match(featureSection, /JavaScript Kanban board component/)
  assert.match(featureSection, /demoUrl: \/demo\/kanban/)
  assert.match(featureSection, /wide: true/)

  assert.match(highlightsSource, /feature\.type === 'kanban'/)
  assert.match(highlightsSource, /kanban: '\/video\/kanban-demo\.mp4'/)
  assert.match(highlightsSource, /kanban: '\/blog\/kanban-product-development-polished\.png'/)
  assert.ok(existsSync(new URL('../public/video/kanban-demo.mp4', import.meta.url)))
  assert.ok(existsSync(new URL('../public/blog/kanban-product-development-polished.png', import.meta.url)))
})

test('introduces Kanban workflows in the canonical Pro page metadata and hero', () => {
  assert.match(pageSource, /^description: .*RevoKanban.*JavaScript Kanban/m)
  assert.match(pageSource, /^    subtitle: .*Kanban workflows/m)
})
