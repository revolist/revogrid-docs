export function buildVirtualPipelineRows(seedRows, totalRows) {
  if (totalRows <= seedRows.length) return seedRows.slice(0, Math.max(0, totalRows))

  const accounts = ['Nordlys Telecom', 'Brightwater Utilities', 'Peregrine Insurance', 'Aperture Systems', 'Bluehaven Foods', 'Stonebridge Labs', 'Redwood Mobility', 'Silverline Health']
  const owners = ['M. Halvorsen', 'R. Okafor', 'S. Lindqvist', 'A. Brenner', 'K. Duarte', 'D. Okonjo']
  const stages = ['Negotiation', 'Discovery', 'Proposal']
  const regions = ['EMEA', 'AMER', 'APAC']
  const closeDates = ['2026-09-24', '2026-10-16', '2026-11-08', '2026-12-12', '2027-01-18', '2027-02-26']
  const generatedRows = Array.from({ length: totalRows - seedRows.length }, (_, offset) => {
    const index = seedRows.length + offset
    const arr = 60_000 + ((index * 7_919) % 380_000)
    return {
      account: `${accounts[index % accounts.length]} ${String(Math.floor(index / accounts.length) + 1).padStart(4, '0')}`,
      owner: owners[index % owners.length],
      stage: stages[index % stages.length],
      arr,
      probability: (25 + ((index * 5) % 60)) / 100,
      closeDate: closeDates[index % closeDates.length],
      region: regions[index % regions.length],
    }
  })

  return [...seedRows, ...generatedRows]
}

export function summarizePipelineRows(rows) {
  const values = rows
    .map((row) => Number(row.arr))
    .filter(Number.isFinite)
  const sum = values.reduce((total, value) => total + value, 0)

  return {
    count: rows.length,
    sum,
    average: values.length ? Math.round(sum / values.length) : 0,
  }
}

export function applyClipboardSample(rows, sample) {
  return sample.map((row, index) => ({ ...row, id: rows[index]?.id ?? `paste-${index + 1}` }))
}

function escapeClipboardHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export function buildExcelClipboardPayload(columns, rows) {
  const plainRows = [
    columns.map((column) => column.name ?? column.prop),
    ...rows.map((row) => columns.map((column) => row[column.prop] ?? '')),
  ]
  const plainText = plainRows.map((row) => row.join('\t')).join('\n')
  const border = 'border:1px solid #b8c2bd;'
  const cellStyle = `${border}padding:5px 9px;font-family:Arial,sans-serif;font-size:11pt;`
  const headerCells = columns.map((column) => (
    `<th style="${cellStyle}background:#e2f0d9;color:#1f3328;font-weight:700;text-align:left;">${escapeClipboardHtml(column.name ?? column.prop)}</th>`
  )).join('')
  const bodyRows = rows.map((row) => {
    const cells = columns.map((column) => {
      const rawValue = row[column.prop] ?? ''
      const numericValue = typeof rawValue === 'number'
        ? rawValue
        : Number(String(rawValue).replaceAll(',', ''))
      const hasNumberFormat = column.excelNumberFormat && Number.isFinite(numericValue)
      const numberStyle = hasNumberFormat
        ? `text-align:right;mso-number-format:&quot;${escapeClipboardHtml(column.excelNumberFormat)}&quot;;`
        : ''
      const value = hasNumberFormat ? numericValue : rawValue
      return `<td style="${cellStyle}${numberStyle}">${escapeClipboardHtml(value)}</td>`
    }).join('')
    return `<tr>${cells}</tr>`
  }).join('')
  const html = `<html><head><meta charset="utf-8"></head><body><table style="border-collapse:collapse;"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></body></html>`

  return { plainText, html }
}

export function filterAndSortCustomers(rows, region, statuses, sortDirection = 'desc') {
  const enabledStatuses = new Set(statuses)
  return rows
    .filter((row) => (region === 'All' || row.region === region) && enabledStatuses.has(row.status))
    .slice()
    .sort((a, b) => sortDirection === 'desc' ? b.arr - a.arr : a.arr - b.arr)
}

function normalizeCustomerFilterOption(value) {
  return String(value).toLowerCase().trim()
}

function createSelectionExclusion(options, activeOptions, id) {
  const included = new Set(activeOptions.map(normalizeCustomerFilterOption))
  const excluded = options
    .map(normalizeCustomerFilterOption)
    .filter((option) => !included.has(option))

  if (!excluded.length) return undefined
  return {
    id,
    type: 'selection',
    value: new Set(excluded),
    relation: 'and',
    hidden: true,
  }
}

export function createCustomerAdvancedFilter({ regions, statuses, activeRegions, activeStatuses }) {
  const regionFilter = createSelectionExclusion(regions, activeRegions, 101)
  const statusFilter = createSelectionExclusion(statuses, activeStatuses, 201)
  return {
    disableDynamicFiltering: false,
    multiFilterItems: {
      ...(regionFilter ? { region: [regionFilter] } : {}),
      ...(statusFilter ? { status: [statusFilter] } : {}),
    },
    selection: {
      sortDirection: 'asc',
      sourceRowTypes: ['rgRow'],
    },
  }
}

function includedSelectionOptions(filterItems, prop, options) {
  const selectionFilter = filterItems?.[prop]?.find((item) => item.type === 'selection')
  if (!selectionFilter) return [...options]
  const excluded = new Set(
    [...(selectionFilter.value instanceof Set ? selectionFilter.value : selectionFilter.value ?? [])]
      .map(normalizeCustomerFilterOption),
  )
  return options.filter((option) => !excluded.has(normalizeCustomerFilterOption(option)))
}

export function readCustomerAdvancedFilterState(filterItems, { regions, statuses }) {
  return {
    activeRegions: includedSelectionOptions(filterItems, 'region', regions),
    activeStatuses: includedSelectionOptions(filterItems, 'status', statuses),
  }
}

export function flattenGroups(groups, collapsed) {
  return groups.flatMap((group) => [
    { ...group, kind: 'group' },
    ...(collapsed[group.id] ? [] : group.children.map((row) => ({ ...row, kind: 'row', groupId: group.id }))),
  ])
}

export function flattenTree(nodes, expanded, parentId = null, depth = 0) {
  return nodes
    .filter((node) => (node.parentId ?? null) === parentId)
    .flatMap((node) => [
      { ...node, depth },
      ...(expanded[node.id] ? flattenTree(nodes, expanded, node.id, depth + 1) : []),
    ])
}

export function summarizeGridSelection(range, visibleRows, regionProp = 'region') {
  if (!range) return { count: 0, region: '—' }

  const startX = Math.min(range.x, range.x1)
  const endX = Math.max(range.x, range.x1)
  const startY = Math.min(range.y, range.y1)
  const endY = Math.max(range.y, range.y1)
  const count = (endX - startX + 1) * (endY - startY + 1)
  const regions = new Set(
    visibleRows
      .slice(startY, endY + 1)
      .map((row) => row?.[regionProp])
      .filter(Boolean),
  )

  return {
    count,
    region: regions.size === 1 ? [...regions][0] : regions.size > 1 ? 'Mixed' : '—',
  }
}

function spreadsheetColumnLabel(index) {
  let label = ''
  let value = index + 1
  while (value > 0) {
    const remainder = (value - 1) % 26
    label = String.fromCharCode(65 + remainder) + label
    value = Math.floor((value - 1) / 26)
  }
  return label
}

export function summarizeNumericGridSelection(range, visibleRows, visibleColumns, columnOffset = 0) {
  if (!range) return { range: '—', sum: 0 }

  const startX = Math.min(range.x, range.x1)
  const endX = Math.max(range.x, range.x1)
  const startY = Math.min(range.y, range.y1)
  const endY = Math.max(range.y, range.y1)
  let sum = 0

  for (let rowIndex = startY; rowIndex <= endY; rowIndex += 1) {
    const row = visibleRows[rowIndex]
    if (!row) continue
    for (let columnIndex = startX; columnIndex <= endX; columnIndex += 1) {
      const prop = visibleColumns[columnIndex]?.prop
      if (prop === undefined) continue
      const rawValue = row[prop]
      const numericValue = typeof rawValue === 'number' ? rawValue : Number(String(rawValue ?? '').replaceAll(',', ''))
      if (Number.isFinite(numericValue)) sum += numericValue
    }
  }

  return {
    range: `${spreadsheetColumnLabel(startX + columnOffset)}${startY + 1}:${spreadsheetColumnLabel(endX + columnOffset)}${endY + 1}`,
    sum,
  }
}

export function summarizeHierarchyRows(rows) {
  return rows.reduce((counts, row) => {
    const depth = Number(row.depth)
    if (Number.isInteger(depth) && depth >= 0) counts[depth] = (counts[depth] ?? 0) + 1
    return counts
  }, [])
}

export function queryRemoteRows(rows, {
  query = '',
  sortDirection = 'desc',
  page = 0,
  pageSize = 24,
} = {}) {
  const normalizedQuery = query.trim().toLocaleLowerCase()
  const filteredRows = normalizedQuery
    ? rows.filter((row) => [row.id, row.customer, row.region, row.status]
      .some((value) => String(value ?? '').toLocaleLowerCase().includes(normalizedQuery)))
    : [...rows]
  const sortedRows = filteredRows.sort((left, right) => {
    const difference = Number(left.amount ?? 0) - Number(right.amount ?? 0)
    return sortDirection === 'asc' ? difference : -difference
  })
  const pageCount = Math.max(1, Math.ceil(sortedRows.length / pageSize))
  const safePage = Math.min(Math.max(0, page), pageCount - 1)
  const start = safePage * pageSize

  return {
    rows: sortedRows.slice(start, start + pageSize),
    total: sortedRows.length,
    page: safePage,
    pageCount,
  }
}

export const FRAMEWORK_SAMPLES = {
  React: `import { RevoGrid } from '@revolist/react-datagrid'

const plugins = [FormulaPlugin, HistoryPlugin]

export function Workbook({ rows }) {
  return <RevoGrid source={rows} columns={columns}
    plugins={plugins} range rowHeaders />
}`,
  Vue: `<script setup>
import VGrid from '@revolist/vue3-datagrid'

const plugins = [FormulaPlugin, HistoryPlugin]
</script>

<template>
  <VGrid :source="rows" :columns="columns"
    :plugins="plugins" range row-headers />
</template>`,
  Angular: `@Component({
  standalone: true,
  imports: [RevoGrid],
  template: \`<revo-grid [source]="rows"
    [columns]="columns" [plugins]="plugins"
    [range]="true" [rowHeaders]="true" />\`
})
export class WorkbookComponent {}`,
  JavaScript: `import { defineCustomElements } from '@revolist/revogrid/loader'

defineCustomElements()
const grid = document.querySelector('revo-grid')
grid.columns = columns
grid.source = rows
grid.range = true
grid.rowHeaders = true`,
  TypeScript: `import type { ColumnRegular } from '@revolist/revogrid'

const columns: ColumnRegular[] = [
  { name: 'Account', prop: 'account' },
  { name: 'Revenue', prop: 'revenue' }
]

grid.columns = columns
grid.source = rows`,
}
