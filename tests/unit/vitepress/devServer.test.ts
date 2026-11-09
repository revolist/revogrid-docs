import assert from 'node:assert/strict'
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { glob } from 'tinyglobby'
import { createLogger, createServer } from 'vite'
import unoConfig from '../../../uno.config.ts'

const docsRoot = new URL('../../../', import.meta.url).pathname

test('UnoCSS scans workspace sources without traversing nested dependencies', async t => {
  const fixture = await mkdtemp(path.join(tmpdir(), 'docs-content-'))
  t.after(() => rm(fixture, { recursive: true, force: true }))
  const root = path.join(fixture, 'revogrid/docs')
  const sources = [
    'guide/example.md',
    '../../examples/components/src/components/ai-assistant/backend.ts',
    '../../packages/pro/plugins/filter/filter.ts',
    '../../packages/enterprise/plugins/gantt/gantt.ts',
  ]
  const dependencies = [
    'node_modules/dependency/index.ts',
    '../../examples/components/src/components/ai-assistant/backend/node_modules/@revolist/examples/node_modules/plugin/test.ts',
    '../../packages/pro/plugins/filter/node_modules/dependency/index.ts',
    '../../packages/enterprise/plugins/gantt/node_modules/dependency/index.ts',
  ]
  for (const file of [...sources, ...dependencies]) {
    const target = path.resolve(root, file)
    await mkdir(path.dirname(target), { recursive: true })
    await writeFile(target, 'fixture')
  }
  const files = await glob(unoConfig.content!.filesystem!, { cwd: root, expandDirectories: false })
  assert.deepEqual(files.sort(), sources.sort())
})

test('Vite loads supporting demo source as raw text', async t => {
  const warnings: string[] = []
  const server = await createServer({
    customLogger: {
      ...createLogger(),
      warn(message) {
        warnings.push(message)
      },
    },
    root: docsRoot,
    configFile: false,
    server: { middlewareMode: true, watch: null, ws: false },
    optimizeDeps: { noDiscovery: true, include: [] },
  })
  t.after(() => server.close())
  const { DEMO_SOURCE_REGISTRY } = await server.ssrLoadModule('/.vitepress/theme/demoSources.ts')
  const selections = [
    ['project-tracker', 'pro-project-table/src/project-tracker.shared.ts'],
    ['project-tracker', 'pro-project-table/src/project-tracker.scss'],
    ['audit-history', 'composables/useRandomData.ts'],
    ['excel', 'pro-excel/src/spreadsheet/models.ts'],
    ['pivot', 'pro-advanced-pivot/src/financial-pivot-header/financial-pivot-header.scss'],
  ]
  for (const [demoId, sourcePath] of selections) {
    const file = DEMO_SOURCE_REGISTRY[demoId].vue.files.find(
      (file: { path: string }) => file.path === sourcePath,
    )
    assert.ok(file, `${demoId} registers ${sourcePath}`)
    assert.equal(
      await file.load(),
      await readFile(path.join(docsRoot, 'revogrid-demos', sourcePath), 'utf8'),
    )
  }
  assert.deepEqual(warnings, [])
})
