import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const sources = [
  '../revogrid-demos/pro-advanced-pivot/src/pivot.vue',
  '../revogrid-demos/pro-advanced-pivot/src/pivot.react.tsx',
  '../revogrid-demos/pro-advanced-pivot/src/pivot.angular.ts',
  '../revogrid-demos/pro-advanced-pivot/src/pivot.ts',
  '../revogrid-demos/pro-advanced-pivot/src/financial.analytics.ts',
  '../revogrid-demos/pro-advanced-pivot/demo-host.css',
].map((path) => [path, readFileSync(new URL(path, import.meta.url), 'utf8')])

test('does not render the analytics toolbar in any Pivot demo framework', () => {
  for (const [path, source] of sources) {
    assert.doesNotMatch(source, /pivot-analytics-(?:toolbar|button|status)/, path)
    assert.doesNotMatch(
      source,
      /Vue analytics:|Open linked chart|Export CSV for Excel|layout saved locally/,
      path,
    )
  }
})
