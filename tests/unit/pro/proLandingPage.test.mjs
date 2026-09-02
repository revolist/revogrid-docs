import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const pageSource = readFileSync(new URL('../../../pro/index.md', import.meta.url), 'utf8')
const highlightsSource = readFileSync(new URL('../../../pro/landing/ProFeatureHighlights.vue', import.meta.url), 'utf8')
const heroSource = readFileSync(new URL('../../../pro/landing/ProHeroSection.vue', import.meta.url), 'utf8')

test('presents Kanban as a Pro Advanced tool teams do not have to build', () => {
  const featureSection = pageSource.match(/  features:\n([\s\S]*?)\n  serverSide:/)?.[1] ?? ''

  assert.match(featureSection, /prefix: Tools you/)
  assert.match(featureSection, /highlight: don't have to build\./)
  assert.match(featureSection, /- type: kanban/)
  assert.match(featureSection, /tier: Pro Advanced/)
  assert.match(featureSection, /title: Kanban/)
  assert.match(featureSection, /JavaScript Kanban board component/)
  assert.match(featureSection, /demoUrl: \/demo\/kanban/)
  assert.match(featureSection, /wide: true/)

  assert.match(highlightsSource, /feature\.type === 'kanban'/)
  assert.match(highlightsSource, /kanban: '\/video\/kanban-demo\.mp4'/)
  assert.match(highlightsSource, /kanban: '\/blog\/kanban-product-development-polished\.png'/)
  assert.ok(existsSync(new URL('../../../public/video/kanban-demo.mp4', import.meta.url)))
  assert.ok(existsSync(new URL('../../../public/blog/kanban-product-development-polished.png', import.meta.url)))
})

test('introduces Kanban workflows in the canonical Pro page metadata and hero', () => {
  assert.match(pageSource, /^description: JavaScript Kanban, Pivot, Gantt, Scheduling,/m)
  assert.match(pageSource, /^    subtitle: .*Kanban workflows/m)
})

test('includes Kanban and Scheduler in the 90-second Pro demo playlist', () => {
  const expectedDemos = [
    ['/video/pivot.mp4', 'Pivot Table & Reporting'],
    ['/video/demo-color.mp4', 'Data Visualization'],
    ['/video/spreadhsheet.mp4', 'Spreadsheet'],
    ['/video/al-demo.mp4', 'Audit History'],
    ['/video/kanban-demo.mp4', 'Kanban'],
    ['/video/event-scheduler.mp4', 'Scheduler'],
  ]

  assert.match(pageSource, /label: Watch 90s demo/)
  for (const [src, label] of expectedDemos) {
    assert.match(heroSource, new RegExp(`src: '${src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}', label: '${label}'`))
    assert.ok(existsSync(new URL(`../../../public${src}`, import.meta.url)))
  }
  assert.equal(heroSource.match(/\{ src: '\/video\//g)?.length, expectedDemos.length)
  assert.match(heroSource, /@ended="nextDemo"/)
  assert.match(heroSource, /const next = \(currentIndex\.value \+ 1\) % demos\.length/)
})
