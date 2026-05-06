export type AggMode = 'sum' | 'avg' | 'count'

export const RV_GRID_BASE_URL = import.meta.env.VITE_RV_GRID_BASE_URL || 'https://rv-grid.com'
export const RV_GRID_PRO_BASE_URL = import.meta.env.VITE_RV_GRID_PRO_BASE_URL || 'https://pro.rv-grid.com'

export type PivotRawRow = {
  region: string
  product: string
  quarter: string
  rev: number
}

export const AGG_MODES: AggMode[] = ['sum', 'avg', 'count']
export const QUARTERS = ['Q1', 'Q2', 'Q3', 'Q4']
export const REGIONS = ['EMEA', 'Americas', 'APAC']
export const PRODUCTS = ['Pro', 'Advanced']

export const PIVOT_DOCS_URL = `${RV_GRID_PRO_BASE_URL}/guides/pivot/`

export const RAW: PivotRawRow[] = [
  { region: 'EMEA', product: 'Pro', quarter: 'Q1', rev: 84200 },
  { region: 'EMEA', product: 'Pro', quarter: 'Q2', rev: 91400 },
  { region: 'EMEA', product: 'Pro', quarter: 'Q3', rev: 76800 },
  { region: 'EMEA', product: 'Pro', quarter: 'Q4', rev: 102300 },
  { region: 'EMEA', product: 'Advanced', quarter: 'Q1', rev: 124500 },
  { region: 'EMEA', product: 'Advanced', quarter: 'Q2', rev: 138700 },
  { region: 'EMEA', product: 'Advanced', quarter: 'Q3', rev: 119200 },
  { region: 'EMEA', product: 'Advanced', quarter: 'Q4', rev: 157800 },
  { region: 'Americas', product: 'Pro', quarter: 'Q1', rev: 93600 },
  { region: 'Americas', product: 'Pro', quarter: 'Q2', rev: 88200 },
  { region: 'Americas', product: 'Pro', quarter: 'Q3', rev: 105700 },
  { region: 'Americas', product: 'Pro', quarter: 'Q4', rev: 118400 },
  { region: 'Americas', product: 'Advanced', quarter: 'Q1', rev: 201400 },
  { region: 'Americas', product: 'Advanced', quarter: 'Q2', rev: 188900 },
  { region: 'Americas', product: 'Advanced', quarter: 'Q3', rev: 224600 },
  { region: 'Americas', product: 'Advanced', quarter: 'Q4', rev: 267300 },
  { region: 'APAC', product: 'Pro', quarter: 'Q1', rev: 54100 },
  { region: 'APAC', product: 'Pro', quarter: 'Q2', rev: 61700 },
  { region: 'APAC', product: 'Pro', quarter: 'Q3', rev: 58400 },
  { region: 'APAC', product: 'Pro', quarter: 'Q4', rev: 72900 },
  { region: 'APAC', product: 'Advanced', quarter: 'Q1', rev: 98700 },
  { region: 'APAC', product: 'Advanced', quarter: 'Q2', rev: 112300 },
  { region: 'APAC', product: 'Advanced', quarter: 'Q3', rev: 94500 },
  { region: 'APAC', product: 'Advanced', quarter: 'Q4', rev: 128600 },
]

export const FRAMEWORKS = [
  { name: 'Vue', color: '#41B883' },
  { name: 'Angular', color: '#DD0031' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Svelte', color: '#FF3E00' },
  { name: 'JavaScript', color: '#F7DF1E' },
]

export const STATS = [
  { value: '900K<span>+</span>', label: 'JSDELIVR downloads / mo' },
  { value: '3.4K<span>+</span>', label: 'GitHub stars' },
  { value: '8K<span>+</span>', label: 'Developers using RevoGrid' },
  { value: 'v4<span>.x</span>', label: 'Latest stable release' },
]

export const CAPABILITIES = [
  { icon: 'DND', tone: 'blue', title: 'Drag-and-drop field config', text: 'Move fields between rows, columns, and values at runtime. Updates are diffed and applied incrementally - no full re-render.' },
  { icon: 'SUM', tone: 'green', title: 'Client-side aggregation', text: 'Sum, average, count, min, max - computed in the browser. Zero latency, zero server round-trip.' },
  { icon: '100K', tone: 'amber', title: 'Large dataset support', text: "RevoGrid's virtual rendering keeps 100k+ row pivot computation smooth. Only visible cells are in the DOM." },
  { icon: 'RT', tone: 'red', title: 'Instant recalculation', text: 'Source data updates recalculate pivot results without grid teardown. Built for live data subscriptions and dashboards.' },
  { icon: 'FN', tone: 'purple', title: 'Custom aggregation functions', text: 'Pass any reduce function - weighted averages, percentile ranks, custom business metrics. No library patching.' },
  { icon: 'COL', tone: 'gray', title: 'Flexible column structure', text: "Dynamic column generation from data values. Fully compatible with RevoGrid's column type system." },
]

export const TYPICAL = [
  'Pivot runs server-side - every filter change triggers a network request and full reload',
  'Browser rendering degrades beyond 10k rows - virtualization is bolted on, not native',
  'Custom cell renderers require patching or forking internal library code',
  'Separate component means separate styling, separate event model, separate state',
  'Enterprise licensing spikes with per-row, per-app, or per-deployment models',
]

export const REVO = [
  { title: 'Fully client-side.', text: 'Aggregation runs locally - UI stays responsive at scale.' },
  { title: 'Native virtual rendering.', text: 'Only visible cells touch the DOM.' },
  { title: 'First-class cells.', text: 'Every pivot cell is a RevoGrid cell.' },
  { title: 'One grid, all modes.', text: 'Pivot, flat, and group view via configuration.' },
  { title: 'Per-seat pricing.', text: 'No row limits, deployment restrictions, or per-app fees.' },
]

export const COMPARE = [
  { feature: 'Client-side aggregation', revo: '✓ Smart Cache', ag: '✓', generic: '✓' },
  { feature: 'Virtual row + column rendering', revo: '✓ Native', ag: '✓', generic: '✕ DOM-heavy' },
  { feature: 'Custom cell renderers in pivot', revo: '✓ Full access', ag: '~ Limited', generic: '✕' },
  { feature: 'Switch pivot / flat / group at runtime', revo: '✓ Config flag', ag: '~ Separate', generic: '✕' },
  { feature: 'Framework support', revo: 'React, Vue, Angular, Svelte, JS', ag: 'React, Vue, Angular', generic: 'Varies' },
  { feature: 'Open-source base layer', revo: '✓ MIT core', ag: '✕ Fully commercial', generic: '✓' },
  { feature: 'Pricing model', revo: 'Per-seat, no row/app limits', ag: 'Per-dev, costly at scale', generic: 'Free / inconsistent' },
]

export const USE_CASES = [
  { num: '01', title: 'Financial analytics', text: 'P&L tables, budget-vs-actual comparisons, multi-dimensional cost rollups with instant recalculation.', tag: 'finance · ERP · planning' },
  { num: '02', title: 'Reporting dashboards', text: 'Embed pivot directly in your SaaS product so users configure their own breakdown.', tag: 'SaaS · embedded analytics' },
  { num: '03', title: 'Internal tooling', text: 'Ops dashboards, support ticket breakdowns, sales pipeline by rep and stage.', tag: 'ops · admin panels · CRM' },
  { num: '04', title: 'Business intelligence UI', text: 'Replace a BI iframe with a native pivot that matches your design system.', tag: 'BI · data product · analytics' },
]

export const REVO_FEATURES = [
  'Framework-agnostic - React, Vue, Angular, Svelte, vanilla JS',
  'Virtualized rendering - rows and columns',
  'Spreadsheet-like UX - inline editing, multi-select, clipboard',
  'Plugin architecture - custom column types, editors, renderers',
  'Open-core - MIT base layer + Pro plugin tier',
]
