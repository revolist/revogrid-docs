import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'

const articleSource = readFileSync(new URL('./ag-grid-alternative.md', import.meta.url), 'utf8')
const ctaSource = readFileSync(new URL('./CompareCta.vue', import.meta.url), 'utf8')
const heroSource = readFileSync(new URL('./CompareHero.vue', import.meta.url), 'utf8')
const productVisualsSource = readFileSync(new URL('./CompareProductVisuals.vue', import.meta.url), 'utf8')
const commercialFaqSource = readFileSync(new URL('../pro/CommercialFaq.vue', import.meta.url), 'utf8')
const featureTableHeader = '| Feature | RevoGrid | AG Grid Community | AG Grid Enterprise / Bundle | Notes |'

function parseFeatureTables(source) {
  const lines = source.split('\n')
  const tables = []

  for (let index = 0; index < lines.length; index++) {
    if (lines[index] !== featureTableHeader) continue

    const rows = []
    index += 2
    while (lines[index]?.startsWith('|')) {
      const [feature, revoGrid, agGridCommunity, agGridEnterprise, notes] = lines[index]
        .split('|')
        .slice(1, -1)
        .map(cell => cell.trim())

      rows.push({ feature, revoGrid, agGridCommunity, agGridEnterprise, notes })
      index++
    }
    tables.push(rows)
  }

  return tables
}

function advantageTier(row) {
  if (!row.revoGrid.startsWith('✅')) return 4
  if (row.agGridEnterprise.startsWith('—')) return 0
  if (row.agGridEnterprise.startsWith('⚠️')) return 1
  if (row.agGridCommunity.startsWith('—') || row.agGridCommunity.startsWith('⚠️')) return 2
  return 3
}

function parseH2Headings(source) {
  return source
    .split('\n')
    .filter(line => line.startsWith('## '))
    .map(line => line.slice(3).replace(/\s+\{#[^}]+\}$/, ''))
}

test('opens the AG Grid comparison with a clear search and decision promise', () => {
  assert.match(articleSource, /^title: "AG Grid Alternative: RevoGrid vs AG Grid \(2026\)"$/m)
  assert.match(articleSource, /^description: Compare RevoGrid vs AG Grid on licensing, pricing,/m)
  assert.match(articleSource, /rel: canonical\n\s+href: https:\/\/rv-grid\.com\/compare\/ag-grid-alternative/)
  assert.match(articleSource, /"@id": "https:\/\/rv-grid\.com\/compare\/ag-grid-alternative"/)
  assert.match(articleSource, /"dateModified": "2026-08-13"/)
  assert.match(articleSource, /^# AG Grid Alternative: RevoGrid vs AG Grid \(2026\)$/m)
  assert.match(
    articleSource,
    /^## Short answer: which grid fits\? \{#AG-Grid-vs-RevoGrid-the-short-answer\}$/m,
  )
  assert.match(articleSource, /\| Choose RevoGrid when you need \| Choose AG Grid when you need \|/)
})

test('preserves the indexed URL, search coverage, and long-form comparison', () => {
  assert.doesNotMatch(articleSource, /noindex/i)
  assert.ok(articleSource.split(/\s+/).length > 9_000)

  for (const heading of [
    '## Advanced feature support matrix',
    '## 1. Open-source licensing and upgrade path',
    '## 10. When AG Grid is the right choice',
    '## 15. Decision framework',
  ]) {
    assert.ok(articleSource.includes(heading), `Missing protected section: ${heading}`)
  }

  for (const path of [
    '../demo/index.md',
    '../blog/migrating-from-ag-grid-to-revogrid.md',
    '../guide/licensing.md',
    '../pricing.md',
    '../trial.md',
  ]) {
    assert.ok(existsSync(new URL(path, import.meta.url)), `Missing linked destination: ${path}`)
  }
})

test('routes research-stage visitors to a useful next action before purchase', () => {
  assert.match(articleSource, /primary-cta-label="Explore Live Demos"/)
  assert.match(articleSource, /secondary-cta-label="View Migration Guide"/)
  assert.match(articleSource, /^### Start with your goal$/m)
  assert.match(articleSource, /\[Explore the live demos\]\(\/demo\/\)/)
  assert.match(articleSource, /\[Follow the AG Grid migration guide\]/)
  assert.match(articleSource, /\[Review RevoGrid licensing\]\(\/guide\/licensing\)/)

  const goalRouterIndex = articleSource.indexOf('### Start with your goal')
  const featureMatrixIndex = articleSource.indexOf('## Advanced feature support matrix')

  assert.ok(goalRouterIndex > -1)
  assert.ok(featureMatrixIndex > goalRouterIndex)
})

test('shows real RevoGrid and AG Grid interfaces with accessible reusable figures', () => {
  assert.match(articleSource, /import CompareProductVisuals from '\.\/CompareProductVisuals\.vue'/)
  assert.match(articleSource, /<CompareProductVisuals\n\s+id="ag-grid-revogrid-interface-examples"/)
  assert.match(articleSource, /heading="See both product interfaces"/)
  assert.match(articleSource, /src: '\/img\/pro-demo\.png'/)
  assert.match(articleSource, /src: '\/blog\/aggrid-demo\.png'/)
  assert.match(articleSource, /alt: 'RevoGrid data grid showing grouped project rows,/)
  assert.match(articleSource, /alt: 'AG Grid interface showing grouped participant rows,/)
  assert.match(articleSource, /width: 2738,\n\s+height: 1330,/)
  assert.match(articleSource, /width: 1490,\n\s+height: 669,/)
  assert.ok(existsSync(new URL('../public/img/pro-demo.png', import.meta.url)))
  assert.ok(existsSync(new URL('../public/blog/aggrid-demo.png', import.meta.url)))

  const visualIndex = articleSource.indexOf('<CompareProductVisuals')
  assert.ok(visualIndex > articleSource.indexOf('### Start with your goal'))
  assert.ok(visualIndex < articleSource.indexOf('## Quick comparison'))

  assert.match(productVisualsSource, /<figure\n\s+v-for="product in products"/)
  assert.match(productVisualsSource, /<figcaption>/)
  assert.match(productVisualsSource, /:alt="product\.alt"/)
  assert.match(productVisualsSource, /:width="product\.width"/)
  assert.match(productVisualsSource, /:height="product\.height"/)
  assert.match(productVisualsSource, /loading="lazy"/)
  assert.match(productVisualsSource, /decoding="async"/)
  assert.match(productVisualsSource, /'noopener noreferrer'/)
  assert.match(productVisualsSource, /@container \(min-width: 760px\)/)
})

test('uses reader-focused section labels while preserving every legacy fragment', () => {
  const headings = new Map([
    ['Short answer: which grid fits?', 'AG-Grid-vs-RevoGrid-the-short-answer'],
    ['Quick comparison', 'AG-Grid-vs-RevoGrid-quick-comparison'],
    ['Why teams evaluate AG Grid alternatives', 'Why-teams-compare-AG-Grid-alternatives'],
    ['Advanced feature support matrix', 'AG-Grid-vs-RevoGrid-Advanced-Feature-Support-Matrix'],
    ['1. Open-source licensing and upgrade path', '_1-RevoGrid-starts-with-an-MIT-licensed-core'],
    ['2. Framework portability', '_2-RevoGrid-works-across-modern-frontend-frameworks'],
    ['3. Large-dataset performance', '_3-RevoGrid-is-built-for-large-datasets'],
    ['4. Spreadsheet-like editing and workflows', '_4-RevoGrid-gives-users-spreadsheet-like-UX-inside-your-app'],
    ['5. Deployment and licensing model', '_5-RevoGrid-avoids-deployment-counting-friction'],
    ['6. Implementation complexity', '_6-RevoGrid-is-simpler-for-product-teams'],
    ['7. SaaS product fit', '_7-RevoGrid-is-a-practical-AG-Grid-alternative-for-SaaS'],
    ['8. Value beyond the license price', '_8-RevoGrid-is-not-just-a-cheaper-AG-Grid-alternative'],
    ['9. Best-fit product use cases', '_9-Use-RevoGrid-when-the-grid-is-part-of-your-product'],
    ['10. When AG Grid is the right choice', '_10-When-AG-Grid-may-still-be-the-right-choice'],
    ['11. When to choose RevoGrid', '_11-When-RevoGrid-is-the-better-AG-Grid-alternative'],
    ['12. Migration checklist', '_12-Migration-checklist-evaluating-RevoGrid-as-an-AG-Grid-replacement'],
    ['13. Build vs buy', '_13-RevoGrid-vs-building-your-own-data-grid'],
    ['14. AI-assisted development', '_14-RevoGrid-as-an-AG-Grid-alternative-for-AI-assisted-development'],
    ['15. Decision framework', '_15-Recommended-decision-framework'],
  ])

  for (const [label, id] of headings) {
    assert.ok(articleSource.includes(`## ${label} {#${id}}`), `Missing preserved heading ID: ${id}`)
  }

  const visibleHeadings = parseH2Headings(articleSource)
  assert.equal(visibleHeadings.filter(heading => /^(?:\d+\.\s+)?RevoGrid\b/.test(heading)).length, 0)
  assert.doesNotMatch(visibleHeadings.join('\n'), /RevoGrid (starts|works|is built|gives|avoids|is simpler)/)
  assert.match(articleSource, /\[Jump to the feature matrix\]\(#AG-Grid-vs-RevoGrid-Advanced-Feature-Support-Matrix\)/)
})

test('keeps shared commercial CTA defaults for other comparison pages', () => {
  assert.match(ctaSource, /primaryLabel: 'Request Pro Trial'/)
  assert.match(ctaSource, /secondaryLabel: 'Buy Pro'/)
  assert.match(ctaSource, /role="group"/)
  assert.match(ctaSource, /aria-label="Comparison actions"/)
  assert.match(heroSource, /:primary-label="primaryCtaLabel"/)
  assert.match(heroSource, /:secondary-label="secondaryCtaLabel"/)
})

test('uses the standard trial and blog FAQ component with one content source', () => {
  assert.match(articleSource, /import CommercialFaq from '\.\.\/pro\/CommercialFaq\.vue'/)
  assert.match(articleSource, /<CommercialFaq id="ag-grid-alternative-faq" \/>/)
  assert.match(articleSource, /^faq:\n\s+heading: AG Grid alternative FAQ$/m)
  assert.equal((articleSource.match(/^\s+- q: /gm) ?? []).length, 10)
  assert.equal((articleSource.match(/^\s+a: /gm) ?? []).length, 10)
  assert.doesNotMatch(articleSource, /^## FAQ$/m)
  assert.doesNotMatch(articleSource, /"@type": "FAQPage"/)

  assert.match(commercialFaqSource, /v-for="\(item, index\) in faq\.items"/)
  assert.match(commercialFaqSource, /:aria-expanded="openItem === index"/)
  assert.match(commercialFaqSource, /role="region"/)
  assert.match(commercialFaqSource, /const openItem = ref<number \| null>\(0\)/)
})

test('labels the MIT license as a Core capability', () => {
  assert.match(articleSource, /\| MIT-licensed core \| ✅ Core \| ✅ \| — Commercial EULA \|/)
})

test('puts RevoGrid advantages before shared baseline features in every comparison block', () => {
  const tables = parseFeatureTables(articleSource)

  assert.equal(tables.length, 20)
  assert.equal(tables.flat().length, 292)

  for (const rows of tables) {
    const tiers = rows.map(advantageTier)
    assert.deepEqual(tiers, [...tiers].sort((left, right) => left - right))
  }
})

test('marks and prioritizes performance caching and mini filtering', () => {
  const tables = parseFeatureTables(articleSource)
  const performanceRows = tables.find(rows => rows.some(row => row.feature === 'Value cache / performance cache'))
  const filteringRows = tables.find(rows => rows.some(row => row.feature === 'Mini filter'))

  assert.ok(performanceRows)
  assert.ok(filteringRows)
  assert.deepEqual(performanceRows.slice(0, 3).map(row => row.feature), [
    'Trimmed rows',
    'Infinite scroll',
    'Value cache / performance cache',
  ])
  assert.deepEqual(filteringRows.slice(0, 3).map(row => row.feature), [
    'Selection filter cascade',
    'Advanced slider filtering',
    'Mini filter',
  ])
  assert.equal(performanceRows.find(row => row.feature === 'Value cache / performance cache').revoGrid, '✅ Core')
  assert.equal(filteringRows.find(row => row.feature === 'Mini filter').revoGrid, '✅ Pro')
})

test('distinguishes Core last-column stretch from Advanced Column Stretching', () => {
  assert.match(
    articleSource,
    /\| Column stretch \/ last column stretch \| ✅ Core \| ✅ Column sizing \| ✅ Column sizing \|/,
  )
  assert.match(articleSource, /\[Core last-column stretch option\]\(\/guide\/column\/stretch\)/)
  assert.match(
    articleSource,
    /\| Advanced column stretching \| ✅ Pro \| ⚠️ Sizing APIs \| ⚠️ Sizing APIs \|/,
  )
})

test('cross-links each major evaluation topic to a relevant internal resource', () => {
  const sectionLinks = new Map([
    ['## 1. Open-source licensing and upgrade path', ['/pro/feature-table']],
    ['## 2. Framework portability', ['/guide/data-sync']],
    ['## 3. Large-dataset performance', ['/guide/performance']],
    ['## 4. Spreadsheet-like editing and workflows', [
      '/guide/editing',
      '/guide/clipboard',
      '/guide/data-grid-export-excel',
    ]],
    ['## 7. SaaS product fit', ['/blog/building-enterprise-dashboards']],
    ['## 8. Value beyond the license price', ['/guide/patterns']],
    ['## 9. Best-fit product use cases', [
      '/guide/realtime-updates',
      '/guide/filters',
      '/guide/server-side-data',
      '/demo/pivot',
      '/demo/gantt',
    ]],
    ['## 10. When AG Grid is the right choice', ['/blog/best-js-datagrid-in-2026']],
    ['## 14. AI-assisted development', [
      '/guide/mcp',
      '/demo/ai-prompts',
    ]],
  ])

  for (const [heading, links] of sectionLinks) {
    const sectionStart = articleSource.indexOf(heading)
    const nextSection = articleSource.indexOf('\n## ', sectionStart + heading.length)
    const section = articleSource.slice(sectionStart, nextSection === -1 ? undefined : nextSection)

    assert.ok(sectionStart > -1, `Missing linked section: ${heading}`)
    for (const href of links) {
      assert.ok(section.includes(`](${href})`), `Missing ${href} from ${heading}`)
    }
  }

  const internalLinks = [...articleSource.matchAll(/\[([^\]]+)\]\((\/[^)]+)\)/g)]
  assert.equal(internalLinks.length, 22)
  assert.equal(new Set(internalLinks.map(match => match[2])).size, 22)
  assert.doesNotMatch(articleSource, /\[(click here|read more|learn more)\]\(/i)
})

test('keeps every contextual internal-link destination backed by a local page', () => {
  for (const path of [
    '../pro/feature-table.md',
    '../guide/data-sync.md',
    '../guide/column/stretch.md',
    '../guide/performance.md',
    '../guide/editing.md',
    '../guide/clipboard.md',
    '../guide/data-grid-export-excel.md',
    '../blog/building-enterprise-dashboards.md',
    '../guide/patterns.md',
    '../guide/realtime-updates.md',
    '../guide/filters.md',
    '../guide/server-side-data.md',
    '../demo/pivot.md',
    '../demo/gantt.md',
    '../blog/best-js-datagrid-in-2026.md',
    '../guide/mcp.md',
    '../demo/ai-prompts.md',
  ]) {
    assert.ok(existsSync(new URL(path, import.meta.url)), `Missing linked page: ${path}`)
  }
})
