import assert from 'node:assert/strict'
import { readFile, writeFile, mkdir, mkdtemp, rm } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath, pathToFileURL } from 'node:url'

const docs = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const consumerOption = process.argv.find(arg => arg.startsWith('--consumer='))
const consumer = resolve(
  consumerOption?.slice('--consumer='.length) ??
    resolve(docs, '../../examples/revogrid-demos/pro-advanced-kanban'),
)
const requireConsumer = createRequire(resolve(consumer, 'package.json'))
const ts = requireConsumer('typescript')
const article = await readFile(resolve(docs, 'blog/react-kanban-board-tutorial.md'), 'utf8')
const files = [
  ...article.matchAll(/<!-- kanban-tutorial:([\w./-]+) -->\s*```(?:tsx|ts|css)\n([\s\S]*?)\n```/g),
]
assert.deepEqual(
  files.map(([, name]) => name).sort(),
  [
    'src/App.tsx',
    'src/kanban-props.ts',
    'src/main.tsx',
    'src/persistence.ts',
    'src/styles.css',
  ].sort(),
  'Extract only the complete tutorial modules.',
)
assert.equal(
  (article.match(/```(?:tsx|ts)\n/g) ?? []).length,
  4,
  'TypeScript snippets must be complete extracted modules.',
)
for (const [id, expected] of Object.entries({
  '@revolist/kanban': '3.0.12',
  '@revolist/revogrid-pro': '3.0.12',
  '@revolist/revogrid': '4.29.0',
  '@revolist/react-datagrid': '4.29.0',
})) {
  const pkg = JSON.parse(
    await readFile(resolve(consumer, 'node_modules', id, 'package.json'), 'utf8'),
  )
  assert.equal(pkg.version, expected, `${id}: restore the pinned dependencies before checking`)
  console.log(`${pkg.name}@${pkg.version}`)
}
for (const style of ['@revolist/kanban/styles.css', '@revolist/revogrid-pro/styles.css'])
  requireConsumer.resolve(style)
const fixture = await mkdtemp(resolve(consumer, '.tutorial-check-'))
let server
let browser
try {
  const sourceFiles = []
  for (const [, name, source] of files) {
    const file = resolve(fixture, name)
    await mkdir(dirname(file), { recursive: true })
    await writeFile(file, source)
    if (/\.tsx?$/.test(name)) sourceFiles.push(file)
  }
  const options = {
    strict: true,
    noEmit: true,
    skipLibCheck: true,
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    jsx: ts.JsxEmit.ReactJSX,
    types: ['vite/client'],
    typeRoots: [resolve(consumer, 'node_modules/@types'), resolve(consumer, 'node_modules')],
  }
  const diagnostics = ts.getPreEmitDiagnostics(ts.createProgram(sourceFiles, options))
  if (diagnostics.length)
    throw new Error(
      ts.formatDiagnosticsWithColorAndContext(diagnostics, {
        getCurrentDirectory: () => fixture,
        getCanonicalFileName: path => path,
        getNewLine: () => '\n',
      }),
    )
  console.log(
    'All four TypeScript modules passed strict published-package checks; CSS exports resolved.',
  )

  const persistence = files.find(([, name]) => name === 'src/persistence.ts')[2]
  const js = ts.transpileModule(persistence, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
  }).outputText
  const { persistMove } = await import(
    `data:text/javascript;base64,${Buffer.from(js).toString('base64')}`
  )
  const fetchOriginal = globalThis.fetch
  try {
    let status = 200
    const changedCards = [
      { id: 'moved', order: 1 },
      { id: 'neighbor', order: 2 },
    ]
    globalThis.fetch = async (url, request) => {
      assert.equal(url, '/api/cards/move')
      assert.equal(request.headers['If-Match'], 'version-1')
      assert.deepEqual(JSON.parse(request.body), {
        operationId: 'operation-1',
        cards: changedCards,
      })
      return new Response(JSON.stringify({ version: 'version-2' }), { status })
    }
    assert.deepEqual(await persistMove({ changedCards }, 'operation-1', 'version-1'), {
      version: 'version-2',
    })
    for (status of [409, 412, 503])
      await assert.rejects(persistMove({ changedCards }, 'operation-1', 'version-1'))
  } finally {
    globalThis.fetch = fetchOriginal
  }
  console.log(
    'Optional API serializer includes all changed cards and rejects conflict/error responses.',
  )

  await writeFile(
    resolve(fixture, 'index.html'),
    '<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body></html>',
  )
  await writeFile(resolve(fixture, 'package.json'), '{"type":"module"}')
  const vite = await import(pathToFileURL(requireConsumer.resolve('vite')).href)
  const { default: react } = await import(
    pathToFileURL(requireConsumer.resolve('@vitejs/plugin-react')).href
  )
  const config = {
    root: fixture,
    configFile: false,
    plugins: [react()],
    logLevel: 'warn',
    build: { outDir: resolve(fixture, 'dist') },
  }
  await vite.build(config)
  console.log('Extracted React application production build passed.')
  if (process.argv.includes('--browser')) {
    const { chromium } = requireConsumer('playwright')
    const { expect } = requireConsumer('@playwright/test')
    server = await vite.preview({
      ...config,
      preview: { host: '127.0.0.1', port: 0, strictPort: false },
    })
    const port = server.httpServer.address().port
    browser = await chromium.launch({ headless: true })
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1000 },
      timezoneId: 'America/New_York',
    })
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    const url = `http://127.0.0.1:${port}/`
    const key = 'revogrid-react-kanban-cards-v3'
    const card = id => page.locator(`[data-kanban-card-id="${id}"]`)
    const dialog = page.locator('[data-kanban-card-editor]')
    const save = () => dialog.locator('[data-kanban-card-editor-action="save"]').click()
    const stored = () => page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? '[]'), key)
    await page.goto(url)
    await expect(page.getByRole('button', { name: 'Add card', exact: true })).toBeEnabled()
    await expect(card('TASK-101')).toContainText('Aug 14, 2026')
    await card('TASK-101').click()
    await page.getByRole('button', { name: 'Edit selected', exact: true }).click()
    await expect(dialog.locator('[data-kanban-card-editor-row="dueDate"] input')).toHaveValue(
      '2026-08-14',
    )
    await dialog
      .locator('[data-kanban-card-editor-field="title"]')
      .fill('Edited onboarding metrics')
    await dialog.locator('[data-kanban-card-editor-row="tags"] input').fill('Edited tag')
    await save()
    await expect(card('TASK-101')).toContainText('Edited tag')
    assert.equal((await stored()).length, 4)
    assert.ok(
      (await stored()).every(
        card => typeof card.id === 'string' && !Object.hasOwn(card, '__kanbanLaneRowIndex'),
      ),
    )
    await page.reload()
    await expect(card('TASK-101')).toContainText('Edited onboarding metrics')
    await page.getByRole('button', { name: 'Add card', exact: true }).click()
    await dialog.locator('[data-kanban-card-editor-field="title"]').fill('Created from tutorial')
    await save()
    await expect(
      page.locator('.kanban-demo__toolbar').getByText('5 cards', { exact: true }),
    ).toBeVisible()
    const created = page
      .locator('[data-kanban-card-id]')
      .filter({ hasText: 'Created from tutorial' })
    await created.click()
    page.once('dialog', dialog => dialog.accept())
    await page.getByRole('button', { name: 'Delete selected', exact: true }).click()
    await expect(created).toHaveCount(0)
    await expect(
      page.locator('.kanban-demo__toolbar').getByText('4 cards', { exact: true }),
    ).toBeVisible()

    const moveToDoing = async id => {
      await card(id).focus()
      await card(id).press('Space')
      for (let step = 0; step < 20; step++) {
        await card(id).press('ArrowRight')
        if ((await page.locator('.kanban-live-region').textContent()).includes('In progress')) break
      }
      await expect(page.locator('.kanban-live-region')).toContainText('In progress')
      await card(id).press('Space')
    }
    await moveToDoing('TASK-101')
    await expect
      .poll(async () => (await stored()).find(card => card.id === 'TASK-101').status)
      .toBe('doing')
    await moveToDoing('TASK-102')
    await expect(page.locator('.kanban-live-region')).toContainText('limit')
    assert.equal((await stored()).find(card => card.id === 'TASK-102').status, 'backlog')
    await page.keyboard.press('Escape')

    await page.evaluate(() => {
      window.__storageSet = Storage.prototype.setItem
      Storage.prototype.setItem = () => {
        throw new Error('quota')
      }
    })
    await card('TASK-101').dblclick()
    await dialog.locator('[data-kanban-card-editor-field="title"]').fill('Unsaved then retried')
    await save()
    await expect(page.locator('.kanban-demo > [role="status"]')).toContainText('saving failed')
    await expect(card('TASK-101')).toContainText('Unsaved then retried')
    await page.evaluate(() => {
      Storage.prototype.setItem = window.__storageSet
    })
    await page.getByRole('button', { name: 'Save again', exact: true }).click()
    await page.reload()
    await expect(card('TASK-101')).toContainText('Unsaved then retried')
    const output = resolve(docs, 'output/kanban-tutorial')
    await mkdir(output, { recursive: true })
    await page.screenshot({ path: resolve(output, 'app-desktop.png'), fullPage: true })
    await page.setViewportSize({ width: 390, height: 844 })
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1))
    await page.screenshot({ path: resolve(output, 'app-narrow.png'), fullPage: true })
    await page.evaluate(key => localStorage.setItem(key, '[]'), key)
    await page.reload()
    await expect(
      page.locator('.kanban-demo__toolbar').getByText('0 cards', { exact: true }),
    ).toBeVisible()
    await page.getByRole('button', { name: 'Add card', exact: true }).click()
    await dialog.locator('[data-kanban-card-editor-field="title"]').fill('First card')
    await save()
    await expect(
      page.locator('.kanban-demo__toolbar').getByText('1 card', { exact: true }),
    ).toBeVisible()
    await page.evaluate(key => localStorage.setItem(key, '{bad json'), key)
    await page.reload()
    await expect(page.locator('.kanban-demo > [role="status"]')).toContainText(
      'could not be loaded',
    )
    assert.deepEqual(errors, [])
    console.log(
      'Chromium passed: StrictMode, date display, edit/tags, create/delete, keyboard move, WIP block, local reload, save error/retry, empty source, malformed storage and narrow layout.',
    )
  }
} finally {
  await browser?.close()
  if (server) await new Promise(resolve => server.httpServer.close(resolve))
  await rm(fixture, { recursive: true, force: true })
}
