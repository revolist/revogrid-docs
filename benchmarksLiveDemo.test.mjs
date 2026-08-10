import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const pageSource = readFileSync(new URL('./benchmarks.md', import.meta.url), 'utf8')
const runnerSource = readFileSync(new URL('./scripts/run-benchmark.mjs', import.meta.url), 'utf8')
const themeSource = readFileSync(new URL('./.vitepress/theme/style.scss', import.meta.url), 'utf8')
const componentUrl = new URL('./.vitepress/theme/BenchmarkLiveDemo.vue', import.meta.url)

test('benchmarks page mounts the shared Grid at Scale demo for browser-local measurements', () => {
  assert.match(pageSource, /import BenchmarkLiveDemo from '\.\/\.vitepress\/theme\/BenchmarkLiveDemo\.vue'/)
  assert.match(pageSource, /<ClientOnly>[\s\S]*<BenchmarkLiveDemo \/>[\s\S]*<\/ClientOnly>/)
  assert.match(pageSource, /Measure performance in your browser/)
  assert.doesNotMatch(pageSource, /select a dataset and theme, then scroll and edit the grid/i)
  assert.doesNotMatch(pageSource, /page-wide JavaScript heap/i)
  assert.match(pageSource, /^pageClass: benchmarks-page$/m)
  assert.match(pageSource, /^aside: false$/m)
  assert.match(pageSource, /^outline: false$/m)
  assert.match(themeSource, /\.benchmarks-page \.VPDoc:not\(\.has-sidebar\) \.container/)
  assert.match(themeSource, /\.benchmarks-page \.VPDoc:not\(\.has-sidebar\) \.content/)
})

test('live benchmark wrapper reuses the HR demo and keeps automated runs isolated', () => {
  const componentSource = readFileSync(componentUrl, 'utf8')

  assert.match(componentSource, /import\('@revogrid-demos\/core-free\/src\/hr\.vue'\)/)
  assert.match(componentSource, /URLSearchParams\(window\.location\.search\)/)
  assert.match(componentSource, /has\('automated'\)/)
  assert.match(componentSource, /class="benchmark-live-demo"/)
  assert.match(componentSource, /width: min\(1024px, calc\(100vw - 48px\)\)/)
  assert.match(componentSource, /<HRDemo v-if="shouldRender" \/>/)
  assert.match(runnerSource, /127\.0\.0\.1:5173\/benchmarks\?automated=1/)
})
