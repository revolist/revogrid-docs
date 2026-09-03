import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const schedulerPage = readFileSync(new URL('../../../jsscheduler.md', import.meta.url), 'utf8')
const integrationsComponent = readFileSync(new URL('../../../gantt/GanttIntegrations.vue', import.meta.url), 'utf8')
const integrationsSection = schedulerPage.match(/  integrations:\n([\s\S]*?)\n  advancedCallout:/)?.[1] ?? ''

test('uses the shared framework SVG assets in Scheduler integration cards', () => {
  for (const asset of ['js.svg', 'vuejs.svg', 'react.svg', 'angular.svg', 'svelte.svg']) {
    assert.ok(existsSync(new URL(`../../../public/${asset}`, import.meta.url)))
    assert.match(integrationsSection, new RegExp(`iconSrc: /${asset.replace('.', '\\.')}`))
  }
})

test('renders SVG-backed framework icons without a background tile', () => {
  assert.match(integrationsComponent, /'integration-icon--image': integration\.iconSrc/)
  assert.match(integrationsComponent, /&--image\s*\{\s*background: transparent;/)
})
