import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const layoutSource = await readFile(new URL('../../../../.vitepress/theme/DemoPageLayout.vue', import.meta.url), 'utf8')

test('omits the guided-action subtitle from every shared demo page', () => {
  assert.doesNotMatch(layoutSource, /Complete a few actions in the workspace/)
  assert.doesNotMatch(layoutSource, /\.demo-page-guide-intro small\s*\{/)
})
