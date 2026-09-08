import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const pageSource = readFileSync(new URL('../../../gantt.md', import.meta.url), 'utf8')
const componentSource = readFileSync(new URL('../../../gantt/GanttPageLayout.vue', import.meta.url), 'utf8')
const configSource = readFileSync(new URL('../../../gantt/ganttLanding.ts', import.meta.url), 'utf8')
const libraryPageSource = readFileSync(new URL('../../../gantt/GanttUseCasesPage.vue', import.meta.url), 'utf8')
const libraryRouteSource = readFileSync(new URL('../../../gantt/use-cases.md', import.meta.url), 'utf8')
const useCasesSection = pageSource.match(/  useCases:\n([\s\S]*?)\n  faq:/)?.[1] ?? ''

const slugs = [
  'erp',
  'professional-services',
  'construction',
  'manufacturing',
  'resource-planning',
  'internal-tools',
]

test('presents six linked Gantt use cases with accessible visual previews', () => {
  assert.equal(useCasesSection.match(/^      - title: /gm)?.length, 6)
  assert.equal(useCasesSection.match(/^        media: \/img\/gantt-use-cases\//gm)?.length, 6)
  assert.doesNotMatch(useCasesSection, /\/video\/gantt-use-cases\//)
  assert.doesNotMatch(useCasesSection, /^        mediaKind: video$/m)
  assert.doesNotMatch(useCasesSection, /^        poster:/m)
  assert.equal(useCasesSection.match(/^        mediaAlt: /gm)?.length, 6)
  assert.equal(useCasesSection.match(/^        href: \/gantt\//gm)?.length, 6)
  assert.equal(useCasesSection.match(/^        cta: /gm)?.length, 6)

  const mediaPaths = [...useCasesSection.matchAll(/^        media: (\/img\/gantt-use-cases\/[^\n]+)$/gm)]
    .map(([, path]) => path)
  for (const mediaPath of mediaPaths) {
    const filePath = mediaPath.split('?')[0]
    assert.ok(
      existsSync(new URL(`../../../public${filePath}`, import.meta.url)),
      `Missing use-case preview: ${mediaPath}`,
    )
  }

  const articleLinks = [...useCasesSection.matchAll(/^        href: (\/gantt\/[^\n]+)$/gm)]
    .map(([, href]) => href)
  for (const href of articleLinks) {
    const slug = href.replace('/gantt/', '')
    assert.ok(
      existsSync(new URL(`../../../gantt/${slug}.md`, import.meta.url)),
      `Missing use-case guide: ${href}`,
    )
  }
})

test('keeps the customer use-case library separate from demo routes', () => {
  assert.match(useCasesSection, /benefits:\n      label: .+\n      href: \/gantt\/use-cases/)
  assert.match(libraryRouteSource, /<GanttUseCasesPage \/>/)
  assert.doesNotMatch(libraryRouteSource, /\/demo\//)
  assert.equal(libraryPageSource.match(/image: '\/img\/gantt-use-cases\//g)?.length, 6)
  assert.doesNotMatch(libraryPageSource, /\/video\/gantt-use-cases\//)
  assert.doesNotMatch(libraryPageSource, /<video/)
  assert.equal(libraryPageSource.match(/\?use-case=industry-/g)?.length, 6)
  assert.doesNotMatch(libraryPageSource, /\?example=industry-/)
  assert.match(libraryPageSource, /not conceptual mockups/)
  assert.match(libraryPageSource, /\/gantt\/benefits-of-gantt-chart/)
  assert.ok(existsSync(new URL('../../../gantt/benefits-of-gantt-chart.md', import.meta.url)))
})

test('uses the canonical Gantt content width without repeated screenshot badges', () => {
  assert.match(libraryRouteSource, /pageClass: gantt-use-cases-doc no-x-padding/)
  assert.match(libraryPageSource, /\.Layout\.gantt-use-cases-doc/)
  assert.match(libraryPageSource, /max-width: none !important/)
  assert.match(libraryPageSource, /width: min\(1200px, calc\(100% - 48px\)\)/)
  assert.doesNotMatch(libraryPageSource, /real-demo-badge|Real RevoGrid Gantt/)
})

test('keeps use-case screenshots wider than copy on both alternating card layouts', () => {
  assert.match(
    libraryPageSource,
    /\.use-case-panel:nth-child\(even\)\s*\{[^}]*grid-template-columns:\s*minmax\(330px,\s*\.58fr\)\s+minmax\(0,\s*1\.42fr\)/s,
  )
  assert.match(
    libraryPageSource,
    /@media \(max-width: 980px\)[\s\S]*?\.use-case-panel:nth-child\(even\)\s*\{\s*grid-template-columns:\s*1fr;/,
  )
})

test('reuses the canonical Pro Advanced pricing module instead of a custom closing CTA', () => {
  assert.match(libraryPageSource, /import ProAdvancedCallout from '\.\.\/pro\/ProAdvancedCallout\.vue'/)
  assert.match(
    libraryPageSource,
    /<ProAdvancedCallout\s+title="RevoGrid Gantt is part of the Pro Advanced bundle\."\s+product-id="gantt"\s*\/>/,
  )
  assert.doesNotMatch(libraryPageSource, /closing-cta|Start with one real plan|Get Pro Trial/)
})

test('keeps the custom use-case hero balanced at laptop widths', () => {
  assert.match(libraryRouteSource, /^breadcrumbs: false$/m)
  assert.match(
    libraryPageSource,
    /\.gantt-use-cases-doc \.VPDoc\)\s*\{[^}]*padding-top:\s*0\s*!important/s,
  )
  assert.match(
    libraryPageSource,
    /@media \(max-width: 1400px\)[\s\S]*?\.use-cases-hero h1\s*\{\s*font-size:\s*clamp\(52px,\s*6vw,\s*76px\);/,
  )
})

test('uses only the real screenshot in every human-oriented article', () => {
  const articles = {
    erp: { path: './erp-gantt.md', useCase: 'industry-erp' },
    'professional-services': { path: './professional-services-gantt.md', useCase: 'industry-professional-services' },
    construction: { path: './construction-gantt.md', useCase: 'industry-construction' },
    manufacturing: { path: './manufacturing-gantt.md', useCase: 'industry-manufacturing' },
    'resource-planning': { path: './resource-planning.md', useCase: 'industry-resource-planning' },
    'internal-tools': { path: './internal-tools-gantt.md', useCase: 'industry-internal-tools' },
  }

  for (const slug of slugs) {
    const article = articles[slug]
    const articleSource = readFileSync(new URL(article.path, new URL('../../../gantt/', import.meta.url)), 'utf8')
    assert.match(articleSource, new RegExp(`image: /img/gantt-use-cases/${slug}\\.webp(?:\\?v=[^\\s]+)?`))
    assert.match(articleSource, /import GanttUseCaseMedia from '\.\/GanttUseCaseMedia\.vue'/)
    assert.match(articleSource, new RegExp(`slug="${slug}"`))
    assert.match(
      articleSource,
      new RegExp(`live-href="https://gantt\\.rv-grid\\.com/\\?use-case=${article.useCase}"`),
    )
    assert.doesNotMatch(articleSource, /\/video\/gantt-use-cases\//)
    assert.doesNotMatch(articleSource, /\?example=industry-/)
    assert.doesNotMatch(articleSource, /Conceptual|conceptual product preview|conceptual planning view/)
  }
})

test('renders visual use-case cards as lazy, focusable links with a text fallback', () => {
  assert.match(componentSource, /:is="item\.href \? 'a' : 'article'"/)
  assert.match(componentSource, /:alt="item\.mediaAlt \|\| ''"/)
  assert.match(componentSource, /width="1200"/)
  assert.match(componentSource, /height="675"/)
  assert.match(componentSource, /loading="lazy"/)
  assert.doesNotMatch(useCasesSection, /mediaKind: video/)
  assert.match(componentSource, /\.use-case-card/)
  assert.match(componentSource, /\[href\]:focus-visible/)
  assert.match(configSource, /mediaAlt\?: string/)
  assert.match(configSource, /mediaKind\?: 'image' \| 'video'/)
  assert.match(configSource, /poster\?: string/)
  assert.match(configSource, /benefits\?: \{ label: string, href: string \}/)
})

test('keeps the shared Gantt article media component image-only', () => {
  const articleMediaSource = readFileSync(new URL('../../../gantt/GanttUseCaseMedia.vue', import.meta.url), 'utf8')

  assert.match(articleMediaSource, /\/img\/gantt-use-cases\/\$\{slug\}\.webp/)
  assert.match(articleMediaSource, /mediaRevisions\[slug\]/)
  assert.match(articleMediaSource, /liveHref: string/)
  assert.match(articleMediaSource, /<a :href="liveHref" target="_blank" rel="noopener noreferrer">Open the interactive plan ↗<\/a>/)
  assert.match(articleMediaSource, /&:focus-visible/)
  assert.match(articleMediaSource, /@media \(max-width: 620px\)/)
  assert.doesNotMatch(articleMediaSource, /<video|\/video\/gantt-use-cases\//)
})

test('cross-links capacity-oriented Gantt guides to the canonical Scheduler page', () => {
  for (const article of [
    './resource-planning.md',
    './resource-scheduling.md',
    './professional-services-gantt.md',
    './manufacturing-gantt.md',
    './construction-gantt.md',
  ]) {
    const source = readFileSync(new URL(article, new URL('../../../gantt/', import.meta.url)), 'utf8')
    assert.match(source, /\[JavaScript Scheduler[^\]]*\]\(\/jsscheduler\)/, `${article} should link to /jsscheduler`)
  }
})
