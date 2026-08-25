import assert from 'node:assert/strict'
import test from 'node:test'
import {
  FRAMEWORK_SAMPLES,
  applyClipboardSample,
  buildExcelClipboardPayload,
  buildVirtualPipelineRows,
  createCustomerAdvancedFilter,
  filterAndSortCustomers,
  flattenGroups,
  flattenTree,
  queryRemoteRows,
  summarizeHierarchyRows,
  summarizeNumericGridSelection,
  summarizeGridSelection,
  summarizePipelineRows,
  readCustomerAdvancedFilterState,
} from './excelLandingState.mjs'

test('remote row queries filter, sort, and page on the full server dataset', () => {
  const rows = [
    { id: 'A', customer: 'Northwind', region: 'EMEA', amount: 120 },
    { id: 'B', customer: 'Aurora', region: 'AMER', amount: 340 },
    { id: 'C', customer: 'Northwind Labs', region: 'APAC', amount: 220 },
  ]

  assert.deepEqual(queryRemoteRows(rows, { query: 'north', sortDirection: 'desc', page: 0, pageSize: 1 }), {
    rows: [rows[2]],
    total: 2,
    page: 0,
    pageCount: 2,
  })
  assert.deepEqual(queryRemoteRows(rows, { query: '', sortDirection: 'asc', page: 1, pageSize: 2 }), {
    rows: [rows[1]],
    total: 3,
    page: 1,
    pageCount: 2,
  })
})

test('Excel clipboard payload preserves table structure and number formatting with a tabular fallback', () => {
  const payload = buildExcelClipboardPayload(
    [
      { prop: 'product', name: 'Product line' },
      { prop: 'units', name: 'Units', excelNumberFormat: '#,##0' },
    ],
    [
      { product: 'Core & Pro <bundle>', units: '2,310' },
      { product: 'Nimbus Edge', units: 620 },
    ],
  )

  assert.equal(payload.plainText, 'Product line\tUnits\nCore & Pro <bundle>\t2,310\nNimbus Edge\t620')
  assert.match(payload.html, /<table/)
  assert.match(payload.html, /<th[^>]*>Product line<\/th>/)
  assert.match(payload.html, /Core &amp; Pro &lt;bundle&gt;/)
  assert.match(payload.html, /border:1px solid/)
  assert.match(payload.html, /mso-number-format:&quot;#,##0&quot;/)
  assert.match(payload.html, />2310<\/td>/)
})

test('hero pipeline data expands to the advertised virtualized row count', () => {
  const seed = [{ account: 'Northwind Logistics', region: 'EMEA' }]
  const rows = buildVirtualPipelineRows(seed, 10_000)

  assert.equal(rows.length, 10_000)
  assert.deepEqual(rows[0], seed[0])
  assert.equal(typeof rows[1].account, 'string')
  assert.equal(typeof rows[1].arr, 'number')
  assert.equal(typeof rows[1].probability, 'number')
  assert.ok(rows[1].probability >= 0 && rows[1].probability <= 1)
})

test('hero pipeline statistics follow the current source after row mutations', () => {
  const rows = [{ arr: 100 }, { arr: 250 }, { arr: 400 }]

  assert.deepEqual(summarizePipelineRows(rows), {
    count: 3,
    sum: 750,
    average: 250,
  })
  assert.deepEqual(summarizePipelineRows(rows.slice(0, 2)), {
    count: 2,
    sum: 350,
    average: 175,
  })
  assert.deepEqual(summarizePipelineRows([]), {
    count: 0,
    sum: 0,
    average: 0,
  })
})

test('clipboard sample replaces visible rows while preserving stable row ids', () => {
  const result = applyClipboardSample(
    [{ id: 'a' }, { id: 'b' }],
    [{ product: 'Core' }, { product: 'Pro' }],
  )
  assert.deepEqual(result, [
    { id: 'a', product: 'Core' },
    { id: 'b', product: 'Pro' },
  ])
})

test('customer filtering applies region, status, and ARR sort state', () => {
  const rows = [
    { region: 'EMEA', status: 'Active', arr: 10 },
    { region: 'EMEA', status: 'At risk', arr: 30 },
    { region: 'AMER', status: 'Active', arr: 50 },
  ]
  assert.deepEqual(
    filterAndSortCustomers(rows, 'EMEA', ['Active', 'At risk']).map((row) => row.arr),
    [30, 10],
  )
})

test('customer advanced filters keep toolbar selections compatible with the grid model', () => {
  const regions = ['EMEA', 'AMER', 'APAC']
  const statuses = ['Active', 'At risk', 'Churned']
  const config = createCustomerAdvancedFilter({
    regions,
    statuses,
    activeRegions: ['EMEA', 'APAC'],
    activeStatuses: ['Active'],
  })

  assert.deepEqual(config.multiFilterItems.region[0].value, new Set(['amer']))
  assert.deepEqual(config.multiFilterItems.status[0].value, new Set(['at risk', 'churned']))
  assert.deepEqual(
    readCustomerAdvancedFilterState(config.multiFilterItems, { regions, statuses }),
    { activeRegions: ['EMEA', 'APAC'], activeStatuses: ['Active'] },
  )

  const allSelected = createCustomerAdvancedFilter({
    regions,
    statuses,
    activeRegions: regions,
    activeStatuses: statuses,
  })
  assert.deepEqual(allSelected.multiFilterItems, {})
})

test('groups and trees expose only expanded source-backed children', () => {
  const groups = [{ id: 'emea', label: 'EMEA', children: [{ id: 'p1' }] }]
  assert.equal(flattenGroups(groups, { emea: true }).length, 1)
  assert.equal(flattenGroups(groups, {}).length, 2)

  const nodes = [
    { id: 'root', parentId: null },
    { id: 'child', parentId: 'root' },
  ]
  assert.equal(flattenTree(nodes, {}).length, 1)
  assert.deepEqual(flattenTree(nodes, { root: true }).map((node) => node.depth), [0, 1])
})

test('framework integration samples cover every promised stack', () => {
  assert.deepEqual(Object.keys(FRAMEWORK_SAMPLES), ['React', 'Vue', 'Angular', 'JavaScript', 'TypeScript'])
  Object.values(FRAMEWORK_SAMPLES).forEach((sample) => assert.match(sample, /RevoGrid|revo-grid|VGrid|grid\./))
})

test('selection summary follows the selected grid range and visible row order', () => {
  const rows = [
    { region: 'EMEA' },
    { region: 'EMEA' },
    { region: 'AMER' },
  ]

  assert.deepEqual(summarizeGridSelection({ x: 3, y: 0, x1: 4, y1: 1 }, rows), {
    count: 4,
    region: 'EMEA',
  })
  assert.deepEqual(summarizeGridSelection({ x: 4, y: 2, x1: 3, y1: 1 }, rows), {
    count: 4,
    region: 'Mixed',
  })
  assert.deepEqual(summarizeGridSelection(null, rows), { count: 0, region: '—' })
})

test('numeric range summaries follow selected rows and the current column order', () => {
  const rows = [
    { store: 'Oslo', w32: '1,200', w33: '800' },
    { store: 'Bergen', w32: '900', w33: '1,100' },
  ]
  const columns = [{ prop: 'store' }, { prop: 'w33' }, { prop: 'w32' }]

  assert.deepEqual(
    summarizeNumericGridSelection({ x: 1, y: 0, x1: 2, y1: 1 }, rows, columns),
    { range: 'B1:C2', sum: 4000 },
  )
  assert.deepEqual(
    summarizeNumericGridSelection({ x: 1, y: 0, x1: 2, y1: 1 }, rows, columns, 1),
    { range: 'C1:D2', sum: 4000 },
  )
  assert.deepEqual(summarizeNumericGridSelection(null, rows, columns), { range: '—', sum: 0 })
})

test('hierarchy summaries count only rows currently rendered by the grid', () => {
  assert.deepEqual(summarizeHierarchyRows([
    { depth: 0 },
    { depth: 1 },
    { depth: 2 },
    { depth: 2 },
    { depth: 0 },
  ]), [2, 1, 2])
})
