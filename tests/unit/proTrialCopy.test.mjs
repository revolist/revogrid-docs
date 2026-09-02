import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { extname, join, relative } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const ignoredDirectories = new Set([
  '.git',
  'cache',
  'dist',
  'node_modules',
  'reports',
  'revogrid-demos',
])
const sourceExtensions = new Set(['.md', '.mjs', '.mts', '.ts', '.vue'])
const obsoleteTrialCopy = new RegExp([
  'request(?:ing)?\\s+(?:a\\s+|the\\s+)?(?:revoGrid\\s+)?(?:pro(?:\\s+advanced)?\\s+)?trial',
  'trial[^\\n]{0,50}(?:available\\s+(?:on|by)|granted\\s+upon)\\s+request',
  '(?:access|packages?)[^\\n]{0,50}(?:provided|available|delivered)[^\\n]{0,20}request',
  'private\\s+npm\\s+trial',
  'request\\s+approved\\s+private\\s+npm',
].join('|'), 'i')

function collectSourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      return ignoredDirectories.has(entry.name) ? [] : collectSourceFiles(path)
    }
    if (!sourceExtensions.has(extname(entry.name)) || entry.name.includes('.test.')) {
      return []
    }
    return [path]
  })
}

test('public docs never describe the Pro trial as a request workflow', () => {
  const staleFiles = collectSourceFiles(root)
    .filter(path => obsoleteTrialCopy.test(readFileSync(path, 'utf8')))
    .map(path => relative(root, path))

  assert.deepEqual(staleFiles, [])
})

test('Excel landing uses the install-accurate Pro trial CTA and preserves its route', () => {
  for (const file of [
    'excel-data-grid/ExcelHeroSection.vue',
    'excel-data-grid/ExcelClosingSection.vue',
  ]) {
    const source = readFileSync(join(root, file), 'utf8')
    assert.match(source, /href="\/trial"[^>]*>Get Pro Trial<\/ProDocButton>/)
    assert.doesNotMatch(source, /Request\s+Pro\s+Trial/)
  }
})
