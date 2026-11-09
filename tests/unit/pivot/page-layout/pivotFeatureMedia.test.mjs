import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'

import { mergePivotPageConfig } from '../../../../pivot/page-layout/pivotPageConfig.ts'
const features = mergePivotPageConfig({}).features.items
const fallbackSource = readFileSync(
  new URL('../../../../pivot/page-layout/pivotPageConfig.ts', import.meta.url),
  'utf8',
)
const componentSource = readFileSync(
  new URL('../../../../pivot/page-layout/PivotFeaturesSection.vue', import.meta.url),
  'utf8',
)
const heroSource = readFileSync(
  new URL('../../../../pivot/page-layout/PivotHeroSection.vue', import.meta.url),
  'utf8',
)
const layoutSource = readFileSync(
  new URL('../../../../pivot/PivotPageLayout.vue', import.meta.url),
  'utf8',
)
const stylesSource = readFileSync(
  new URL('../../../../pivot/page-layout/pivot-page-layout.scss', import.meta.url),
  'utf8',
)
const sharedGridSource = readFileSync(
  new URL('../../../../pro/ProFeatureGrid.vue', import.meta.url),
  'utf8',
)

const expectedMedia = [
  '/img/pivot-features/fields-panel.png',
  '/img/pivot-feature.png',
  '/img/pivot-features/linked-chart.png',
  '/img/pivot-preview.jpg',
  '/img/react-pivot-table-large-datasets.webp',
  '/img/pivot-features/export-state.png',
]

test('provides product media for all six Pivot feature stories', () => {
  assert.equal(features.length, expectedMedia.length)
  assert.equal(fallbackSource.match(/^\s+media: \{$/gm)?.length, expectedMedia.length)

  for (const mediaPath of expectedMedia) {
    assert.ok(
      features.some(feature => feature.media?.src === mediaPath),
      `${mediaPath} is missing from the page config`,
    )
    assert.ok(
      fallbackSource.includes(`src: '${mediaPath}'`),
      `${mediaPath} is missing from the fallback config`,
    )
    assert.ok(
      existsSync(new URL(`../../../../public${mediaPath}`, import.meta.url)),
      `${mediaPath} does not exist`,
    )
  }
})

test('adapts Pivot screenshots to the shared Gantt feature grid', () => {
  assert.match(componentSource, /import ProFeatureGrid from/)
  assert.match(componentSource, /<ProFeatureGrid :features="featureCards"/)
  assert.match(componentSource, /mediaAlt: feature\.media\?\.alt/)
  assert.match(componentSource, /mediaWidth: feature\.media\?\.width/)
  assert.match(componentSource, /mediaHeight: feature\.media\?\.height/)
  assert.match(componentSource, /mediaFit: feature\.media \? \(?'contain'/)
  assert.match(sharedGridSource, /:alt="feature\.mediaAlt \|\| feature\.title"/)
  assert.match(sharedGridSource, /:width="feature\.mediaWidth"/)
  assert.match(sharedGridSource, /:height="feature\.mediaHeight"/)
  assert.match(sharedGridSource, /loading="lazy"/)
  assert.match(sharedGridSource, /decoding="async"/)
  assert.ok(features.every(feature => feature.media?.alt))
})

test('links every visual card to a working Pivot example', () => {
  for (const feature of features) {
    assert.ok(feature.href && feature.cta, feature.title)
    if (feature.href.startsWith('/')) {
      assert.ok(existsSync(new URL(`../../../../${feature.href.slice(1)}.md`, import.meta.url)))
    } else {
      assert.equal(new URL(feature.href).protocol, 'https:')
    }
  }
  assert.ok(features.some(feature => feature.featured))
})

test('uses the centered product hero and integrations format from Gantt and Scheduler', () => {
  assert.match(heroSource, /class="hero-preview fade-up-3"/)
  assert.doesNotMatch(heroSource, /hero-frameworks/)
  assert.match(
    stylesSource,
    /\.pivot-page \.hero-inner \{[\s\S]*flex-direction: column;[\s\S]*text-align: center;/,
  )
  assert.match(stylesSource, /\.pivot-page \.features-section \{\n {2}padding: 96px 0;/)
  assert.match(layoutSource, /<GanttIntegrations/)
  assert.match(layoutSource, /:integrations="page\.integrations"/)
})

test('lets the Pivot page inherit the surrounding theme canvas', () => {
  const pageRule = stylesSource.match(/\.pivot-page \{([\s\S]*?)\n\}/)?.[1] ?? ''

  assert.match(pageRule, /background: transparent;/)
  assert.doesNotMatch(pageRule, /background: var\(--rg-bg\);/)
})
