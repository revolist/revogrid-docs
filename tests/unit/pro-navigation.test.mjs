import assert from 'node:assert/strict'
import test from 'node:test'
import { readFile, mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { pathToFileURL } from 'node:url'
import { validateProNavigation, syncProNavigation } from '../../scripts/sync-pro-navigation.mjs'

const snapshot = JSON.parse(
  await readFile(new URL('../../.vitepress/configs/sidebar/pro-navigation.json', import.meta.url)),
)
test('snapshot contains all products and nested grid and Gantt features', () => {
  validateProNavigation(snapshot)
  assert.deepEqual(
    new Set(snapshot.items.map(item => item.label)),
    new Set(['Data Grid', 'Gantt', 'Kanban', 'Scheduler', 'Pivot', 'Pivot Charts', 'Charts']),
  )
  for (const name of ['Data Grid', 'Gantt']) {
    const product = snapshot.items.find(item => item.label === name)
    assert.ok(product.items.some(item => item.items?.some(child => child.href)))
  }
})
test('rejects unsupported schemas, HTML, empty groups and external or unsafe URLs', () => {
  for (const value of [
    { version: 2, items: snapshot.items },
    { version: 1, items: [] },
    ...['javascript:alert(1)', '//evil.example/test', 'https://evil.example'].map(href => ({
      version: 1,
      items: [{ label: 'Link', href }],
    })),
    { version: 1, items: [{ label: '<img src=x>', href: '/guides/' }] },
    { version: 1, items: [{ label: 'Empty', items: [] }] },
  ])
    assert.throws(() => validateProNavigation(value))
})
test('preserves the previous snapshot when synchronization fails validation', async () => {
  const directory = await mkdtemp(`${tmpdir()}/pro-navigation-`)
  const destination = pathToFileURL(`${directory}/navigation.json`)
  const originalFetch = globalThis.fetch
  try {
    globalThis.fetch = async () => new Response(JSON.stringify(snapshot))
    await syncProNavigation('https://pro.rv-grid.com/navigation.json', destination)
    const before = await readFile(destination, 'utf8')
    globalThis.fetch = async () => new Response('<html>Login</html>')
    await assert.rejects(syncProNavigation('https://pro.rv-grid.com/navigation.json', destination))
    assert.equal(await readFile(destination, 'utf8'), before)
  } finally {
    globalThis.fetch = originalFetch
    await rm(directory, { recursive: true, force: true })
  }
})

test('sidebar preserves nested labels and opens every Pro link externally', async () => {
  const { createProSidebar, sidebarProEn } =
    await import('../../.vitepress/configs/sidebar/pro-navigation.ts')
  const localized = createProSidebar([
    { label: 'Fonctionnalités', items: [{ label: 'Planification', href: '/guides/gantt/' }] },
  ])
  assert.equal(localized[0].text, 'Fonctionnalités')
  assert.equal(localized[0].collapsed, true)
  assert.equal(localized[0].items[0].text, 'Planification')
  let links = 0
  function visit(items) {
    for (const item of items) {
      if (item.link) {
        assert.equal(new URL(item.link).origin, 'https://pro.rv-grid.com')
        assert.equal(item.target, '_blank')
        assert.equal(item.rel, 'noopener noreferrer')
        links++
      }
      if (item.items) visit(item.items)
    }
  }
  visit(sidebarProEn)
  assert.ok(links > 300)
})

test('unified Data Grid comes first and combines local and Pro categories without losing links', async () => {
  const { sidebarGuideEn } = await import('../../.vitepress/configs/sidebar/en.guide.ts')
  const grid = sidebarGuideEn[0]
  assert.equal(grid.text, 'Data Grid')
  assert.equal(grid.collapsed, false)
  assert.equal(grid.items[0].text, 'Getting Started')
  const flatten = items => items.flatMap(item => [item, ...flatten(item.items ?? [])])
  const entries = flatten(grid.items)
  for (const [name, local, remote] of [
    ['Rows', '/guide/row', 'https://pro.rv-grid.com/guides/rows/row-status/'],
    ['Columns', '/guide/column/', 'https://pro.rv-grid.com/guides/columns/column-hide/'],
    ['Cells', '/guide/cell/', 'https://pro.rv-grid.com/guides/cells/cell-merge/'],
    ['Filtering', '/guide/filters', 'https://pro.rv-grid.com/guides/data-filter/filter-basics/'],
    [
      'Export Excel',
      '/guide/data-grid-export-excel',
      'https://pro.rv-grid.com/guides/excel-export/providers/',
    ],
    [
      'Server-Side Data',
      '/guide/server-side-data',
      'https://pro.rv-grid.com/guides/pagination-remote/',
    ],
  ]) {
    const matches = entries.filter(item => item.text === name && item.items)
    assert.equal(matches.length, 1, name)
    const links = flatten(matches).map(item => item.link)
    assert.ok(links.includes(local), `${name} retains the local guide`)
    assert.ok(links.includes(remote), `${name} includes the Pro feature`)
  }
  const expected = flatten(snapshot.items)
    .filter(item => item.href && item.label.trim().toLowerCase() !== 'overview')
    .map(item => new URL(item.href, 'https://pro.rv-grid.com').href)
  const actual = new Set(flatten(sidebarGuideEn).map(item => item.link))
  assert.deepEqual(
    expected.filter(link => !actual.has(link)),
    [],
  )
  assert.ok(sidebarGuideEn.some(item => item.text === 'Frameworks'))
})

test('merging supports localized category aliases and preserves the input trees', async () => {
  const { mergeGridSidebar } =
    await import('../../.vitepress/configs/sidebar/merge-grid-sidebar.ts')
  const local = [{ text: 'Lignes', items: [{ text: 'Guide', link: '/guide/row' }] }]
  const remote = [
    {
      text: 'Rows',
      items: [{ text: 'Status', link: 'https://pro.rv-grid.com/guides/rows/row-status/' }],
    },
  ]
  const before = JSON.stringify({ local, remote })
  const result = mergeGridSidebar(local, remote, { Rows: 'Lignes' })
  assert.equal(result.length, 1)
  assert.equal(result[0].items.length, 2)
  assert.equal(JSON.stringify({ local, remote }), before)
})

test('Pro links and Pro-only categories have badges while mixed and local categories do not', async () => {
  const { sidebarGuideEn } = await import('../../.vitepress/configs/sidebar/en.guide.ts')
  function visit(items) {
    for (const item of items) {
      if (item.link) {
        const pro = new URL(item.link, 'https://rv-grid.com').origin === 'https://pro.rv-grid.com'
        assert.equal(item.text.includes('pro-sidebar-badge'), pro, item.link)
      }
      if (item.items) visit(item.items)
    }
  }
  visit(sidebarGuideEn)
  assert.equal(sidebarGuideEn[0].text, 'Data Grid')
  const gantt = sidebarGuideEn.find(item => item.text.startsWith('<span>Gantt</span>'))
  assert.match(gantt.text, /pro-sidebar-badge/)
  const { withProBadges } = await import('../../.vitepress/configs/sidebar/pro-navigation.ts')
  assert.match(
    withProBadges(
      [{ text: 'Planification', link: 'https://pro.rv-grid.com/guides/gantt/' }],
      'Professionnel',
    )[0].text,
    />Professionnel<\/span>/,
  )
})

test('omits imported overviews and promotes overview-group children without affecting local overviews', async () => {
  const { createProSidebar } = await import('../../.vitepress/configs/sidebar/pro-navigation.ts')
  assert.deepEqual(
    createProSidebar([
      { label: 'Overview', href: '/guides/gantt/' },
      {
        label: 'Overview',
        items: [{ label: 'Number editor', href: '/guides/editors/number/number-editor/' }],
      },
      { label: 'Empty', items: [{ label: 'Overview', href: '/guides/empty/' }] },
    ]).map(item => item.text),
    ['Number editor'],
  )
  assert.deepEqual(
    createProSidebar([{ label: 'Présentation', href: '/guides/gantt/' }], 'Présentation'),
    [],
  )
  const { sidebarGuideEn } = await import('../../.vitepress/configs/sidebar/en.guide.ts')
  const filtering = sidebarGuideEn[0].items.find(item => item.text === 'Filtering')
  assert.deepEqual(filtering.items[0], { text: 'Overview', link: '/guide/filters' })
  assert.equal(filtering.items.filter(item => /Overview/.test(item.text)).length, 1)
})
