import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const pageSource = readFileSync(new URL('../gantt.md', import.meta.url), 'utf8')
const componentSource = readFileSync(new URL('../pro/ProFeatureGrid.vue', import.meta.url), 'utf8')
const pageLayoutSource = readFileSync(new URL('./GanttPageLayout.vue', import.meta.url), 'utf8')
const configSource = readFileSync(new URL('./ganttLanding.ts', import.meta.url), 'utf8')
const featureSection = pageSource.match(/  features:\n([\s\S]*?)\n  positioning:/)?.[1] ?? ''
const integrationsSection = pageSource.match(/  integrations:\n([\s\S]*?)\n  featureComparison:/)?.[1] ?? ''

test('presents ten real Gantt workflows with visual media and live examples', () => {
  assert.equal(featureSection.match(/^      - icon: '\d{2}'$/gm)?.length, 10)
  assert.equal(featureSection.match(/^        media: /gm)?.length, 10)
  assert.equal(featureSection.match(/^        href: https:\/\/demo\.rv-grid\.com\//gm)?.length, 10)

  for (const capability of [
    'Dependencies with lead and lag',
    'Critical path and total slack',
    'Baselines and variance',
    'Resources, capacity, and cost',
    'Constraints and deadlines',
    'Progress, actuals, and effort modes',
    'Split-task scheduling',
    'Production task editor',
    'Product controls and export',
  ]) {
    assert.match(featureSection, new RegExp(capability.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
})

test('keeps every local Gantt feature asset available from VitePress public', () => {
  const localMedia = [...featureSection.matchAll(/^        (?:media|poster): (\/(?:img|video)\/[^\n]+)$/gm)]
    .map(([, path]) => path)

  assert.ok(localMedia.length >= 11)
  for (const mediaPath of localMedia) {
    const filePath = mediaPath.split('?')[0]
    assert.ok(
      existsSync(new URL(`../public${filePath}`, import.meta.url)),
      `Missing public asset: ${mediaPath}`,
    )
  }
})

test('renders optional feature media without changing the text-only contract', () => {
  assert.match(componentSource, /feature-grid--visual/)
  assert.match(componentSource, /feature\.mediaKind === 'video'/)
  assert.match(componentSource, /feature\.mediaAspect/)
  assert.match(componentSource, /aspectRatio: feature\.mediaAspect/)
  assert.match(componentSource, /loading="lazy"/)
  assert.match(componentSource, /v-if="feature\.href" class="feature-link"/)
  assert.match(configSource, /media\?: string/)
  assert.match(configSource, /featured\?: boolean/)
  assert.match(pageLayoutSource, /<ProFeatureGrid :features="page\.features\.items" :show-icons="false" \/>/)
})

test('uses the shared framework SVG assets in Gantt integration cards', () => {
  for (const asset of ['js.svg', 'react.svg', 'vuejs.svg', 'angular.svg', 'svelte.svg']) {
    assert.ok(existsSync(new URL(`../public/${asset}`, import.meta.url)))
    assert.match(integrationsSection, new RegExp(`iconSrc: /${asset.replace('.', '\\.')}`))
  }
})
