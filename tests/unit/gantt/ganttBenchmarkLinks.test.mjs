import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const pageSource = readFileSync(new URL('../../../gantt.md', import.meta.url), 'utf8')
const layoutSource = readFileSync(new URL('../../../gantt/GanttPageLayout.vue', import.meta.url), 'utf8')
const configSource = readFileSync(new URL('../../../gantt/ganttLanding.ts', import.meta.url), 'utf8')

test('the Gantt scale section links every benchmark evidence layer', () => {
  assert.match(configSource, /actions\?: GanttLandingAction\[\]/)
  assert.match(layoutSource, /page\.positioning\.actions\?\.length/)
  assert.match(layoutSource, /v-for="action in page\.positioning\.actions"/)
  assert.match(pageSource, /label: Open 10,000-task demo\n\s+href: \/demo\/gantt-big-data/)
  assert.match(pageSource, /label: Run browser benchmark\n\s+href: https:\/\/gantt\.rv-grid\.com\/\?example=benchmark/)
  assert.match(pageSource, /label: View methodology and results\n\s+href: \/benchmarks\/gantt/)
})
