import assert from 'node:assert/strict'
import { existsSync, readFileSync, statSync } from 'node:fs'
import test from 'node:test'

const reportSource = readFileSync(new URL('../../../benchmarks/gantt.md', import.meta.url), 'utf8')
const componentSource = readFileSync(new URL('../../../.vitepress/theme/GanttBenchmarkResults.vue', import.meta.url), 'utf8')
const publicDirectory = new URL('../../../public/benchmarks/gantt/', import.meta.url)

test('the Gantt benchmark report owns all result and media assets', () => {
  assert.doesNotMatch(reportSource, /https:\/\/gantt\.rv-grid\.com\/benchmarks\//)
  assert.doesNotMatch(componentSource, /https:\/\/gantt\.rv-grid\.com\/benchmarks\//)
  assert.match(componentSource, /formatInteger\(entry\.dependencyTarget\)/)
  assert.doesNotMatch(componentSource, /formatInteger\(entry\.dependencyCount\)/)

  for (const name of ['latest.json', 'latest.csv', 'reference-2026-08-10.json', 'reference-2026-08-10.csv', 'gantt-benchmark-reference.png', 'gantt-benchmark-walkthrough.webm']) {
    const file = new URL(name, publicDirectory)
    assert.equal(existsSync(file), true, `${name} must be deployed with the docs site`)
    assert.ok(statSync(file).size > 1_000, `${name} must not be empty`)
  }

  const result = JSON.parse(readFileSync(new URL('latest.json', publicDirectory), 'utf8'))
  assert.equal(result.cases.length, 12)
  assert.equal(result.samples.length, 576)
  assert.equal(result.aggregates.length, 96)
  assert.deepEqual(readFileSync(new URL('gantt-benchmark-reference.png', publicDirectory)).subarray(0, 8), Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
  assert.equal(readFileSync(new URL('gantt-benchmark-walkthrough.webm', publicDirectory)).subarray(0, 4).toString('hex'), '1a45dfa3')
})
