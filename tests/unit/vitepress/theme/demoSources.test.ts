import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'
import { PRODUCT_CATALOG } from '../../../../commercial/productCatalog'
import {
  DEMO_SOURCE_REGISTRY,
  getRegisteredDemoSourcePaths,
} from '../../../../.vitepress/theme/demoSources'

test('registers four real framework entries for every docs demo', () => {
  assert.deepEqual(Object.keys(DEMO_SOURCE_REGISTRY).sort(), Object.keys(PRODUCT_CATALOG.demos).sort())
  for (const [demoId, frameworks] of Object.entries(DEMO_SOURCE_REGISTRY)) {
    assert.deepEqual(Object.keys(frameworks), ['vue', 'ts', 'react', 'angular'], demoId)
    for (const [framework, entry] of Object.entries(frameworks)) {
      assert.ok(entry.files.length >= 1, `${demoId}/${framework} needs an entry file`)
      assert.match(entry.command, new RegExp(`dev:${framework}$`))
      assert.match(entry.documentationUrl, /^\//)
    }
  }
})

test('points every source panel file at an existing local source file', () => {
  for (const sourcePath of getRegisteredDemoSourcePaths()) {
    assert.equal(
      existsSync(new URL(`../../../../revogrid-demos/${sourcePath}`, import.meta.url)),
      true,
      sourcePath,
    )
  }
})

test('keeps the source panel and demo navigation at their specified breakpoints', () => {
  const sourcePanel = readFileSync(new URL('../../../../.vitepress/theme/DemoSourcePanel.vue', import.meta.url), 'utf8')
  const navigation = readFileSync(new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url), 'utf8')
  assert.match(sourcePanel, /width:420px;min-width:420px/)
  assert.match(sourcePanel, /@media\(max-width:1279px\)/)
  assert.match(navigation, /--demo-sidebar-width,256px/)
  assert.match(navigation, /background:#dff1e8/)
  assert.match(readFileSync(new URL('../../../../.vitepress/theme/style.scss', import.meta.url), 'utf8'), /\.dark \.demo-page-class \.demo-nav/)
  assert.match(navigation, /@media\(max-width:1099px\)/)
})

test('keeps open-source demos unbadged and labels the scale demo Performance', () => {
  const navigation = readFileSync(new URL('../../../../.vitepress/theme/DemoNavigation.vue', import.meta.url), 'utf8')
  assert.match(navigation, /<small v-if="item\.plan">/)
  assert.match(navigation, /planId === 'open-source' \? null/)
  assert.match(navigation, /item\('grid-at-scale','Performance','\/demo\/grid-at-scale','grid'\)/)
})
