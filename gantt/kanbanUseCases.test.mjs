import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const pageSource = readFileSync(new URL('../kanban.md', import.meta.url), 'utf8')
const ganttSource = readFileSync(new URL('../gantt.md', import.meta.url), 'utf8')
const componentSource = readFileSync(new URL('./GanttPageLayout.vue', import.meta.url), 'utf8')
const configSource = readFileSync(new URL('./ganttLanding.ts', import.meta.url), 'utf8')
const useCasesSection = pageSource.match(/  useCases:\n([\s\S]*?)\n  faq:/)?.[1] ?? ''

const useCaseIds = [
  'product-delivery',
  'support-operations',
  'sales-onboarding',
  'content-approvals',
  'quality-manufacturing',
  'internal-workflows',
]

const polishedImages = {
  'product-delivery': 'kanban-product-development-polished.png',
  'support-operations': 'kanban-support-operations-polished.png',
  'sales-onboarding': 'kanban-sales-pipeline-polished.png',
  'content-approvals': 'kanban-editorial-calendar-polished.png',
  'quality-manufacturing': 'kanban-manufacturing-quality-polished.png',
  'internal-workflows': 'kanban-internal-workflow-polished.png',
}

const useCasePages = useCaseIds.map((id) => ({
  id,
  source: readFileSync(new URL(`../kanban/use-cases/${id}.md`, import.meta.url), 'utf8'),
}))

test('presents six linked Kanban use cases with the supplied polished images', () => {
  assert.equal(useCasesSection.match(/^      - title: /gm)?.length, useCaseIds.length)
  assert.equal(useCasesSection.match(/^        media: \/blog\/kanban-.*-polished\.png$/gm)?.length, useCaseIds.length)
  assert.equal(useCasesSection.match(/^        mediaKind: image$/gm)?.length, useCaseIds.length)
  assert.equal(useCasesSection.match(/^        poster: \/blog\/kanban-.*-polished\.png$/gm)?.length, useCaseIds.length)
  assert.equal(useCasesSection.match(/^        mediaAlt: /gm)?.length, useCaseIds.length)
  assert.equal(useCasesSection.match(/^        theme: /gm)?.length, useCaseIds.length)
  assert.equal(useCasesSection.match(/^        href: \/kanban\/use-cases\//gm)?.length, useCaseIds.length)
  assert.equal(useCasesSection.match(/^        cta: /gm)?.length, useCaseIds.length)

  for (const id of useCaseIds) {
    const image = polishedImages[id]
    assert.match(useCasesSection, new RegExp(`media: /blog/${image.replace('.', '\\.')}`))
    assert.match(useCasesSection, new RegExp(`poster: /blog/${image.replace('.', '\\.')}`))
    assert.match(useCasesSection, new RegExp(`theme: ${id}`))
    assert.match(useCasesSection, new RegExp(`href: /kanban/use-cases/${id}`))
    assert.ok(existsSync(new URL(`../public/blog/${image}`, import.meta.url)))
    assert.ok(existsSync(new URL(`../kanban/use-cases/${id}.md`, import.meta.url)))
  }
})

test('renders autoplaying clips with an accessible reduced-motion poster fallback', () => {
  assert.match(componentSource, /<video[\s\S]*muted[\s\S]*autoplay[\s\S]*loop[\s\S]*playsinline/)
  assert.match(componentSource, /:poster="item\.poster"/)
  assert.match(componentSource, /item\.mediaKind !== 'video' \|\| item\.poster/)
  assert.match(componentSource, /@media \(prefers-reduced-motion: reduce\)/)
  assert.match(componentSource, /\.use-case-media__video\s*\{\s*display: none !important;/)
  assert.match(componentSource, /\.use-case-media__poster\s*\{\s*display: block !important;/)
  assert.match(configSource, /mediaKind\?: 'image' \| 'video'/)
  assert.match(configSource, /poster\?: string/)
  assert.match(configSource, /theme\?: string/)
})

test('keeps the human-centered Gantt benefits article linked from the Gantt landing page', () => {
  assert.ok(existsSync(new URL('./benefits-of-gantt-chart.md', import.meta.url)))
  assert.match(ganttSource, /href: \/gantt\/benefits-of-gantt-chart/)
})

test('uses Gantt-style articles with shared board-only Kanban media', () => {
  const mediaComponent = readFileSync(new URL('../kanban/use-cases/KanbanUseCaseMedia.vue', import.meta.url), 'utf8')

  assert.doesNotMatch(mediaComponent, /<video/)
  assert.doesNotMatch(mediaComponent, /\/video\/kanban-use-cases\//)
  assert.match(mediaComponent, /Open the interactive board/)
  assert.match(mediaComponent, /const polishedImages/)

  for (const { id, source } of useCasePages) {
    const image = polishedImages[id]
    assert.match(source, new RegExp(`image: /blog/${image.replace('.', '\\.')}`))
    assert.match(source, /import KanbanUseCaseMedia from '.\/KanbanUseCaseMedia\.vue'/)
    assert.match(source, new RegExp(`<KanbanUseCaseMedia[\\s\\S]*slug="${id}"`))
    assert.match(source, /## /)
    assert.doesNotMatch(source, /KanbanUseCaseArticle/)
    assert.doesNotMatch(source, /defineAsyncComponent/)
    assert.doesNotMatch(source, /@revogrid-demos\/pro-advanced-kanban/)
    assert.doesNotMatch(source, /<video/)
  }
})

test('records published use-case media from board-only capture mode', () => {
  const recorder = readFileSync(new URL('../revogrid-demos/pro-advanced-kanban/scripts/record-use-case-media.mjs', import.meta.url), 'utf8')
  const demoMain = readFileSync(new URL('../revogrid-demos/pro-advanced-kanban/src/main.ts', import.meta.url), 'utf8')
  const hostStyles = readFileSync(new URL('../revogrid-demos/pro-advanced-kanban/demo-host.css', import.meta.url), 'utf8')

  assert.match(recorder, /capture=board/)
  assert.match(recorder, /locator\('revo-grid'\)/)
  assert.match(demoMain, /captureMode/)
  assert.match(demoMain, /dataset\.capture/)
  assert.match(hostStyles, /data-capture=['"]board['"]/)
})
