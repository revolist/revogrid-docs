import type { PivotLandingPage, PivotLandingPageConfig } from './types'

const DEFAULT_PAGE: PivotLandingPage = {
  catalogProductId: 'pivot',
  colors: {
    accent: '#0f766e',
    accentMid: '#0d9488',
    accentVivid: '#10b981',
    soft: 'rgba(15, 118, 110, 0.09)',
    border: 'rgba(15, 118, 110, 0.22)',
    darkAccent: 'oklch(0.72 0.18 185)',
    darkAccentMid: 'oklch(0.76 0.18 185)',
    darkAccentVivid: 'oklch(0.78 0.18 175)',
    darkSoft: 'oklch(0.72 0.18 185 / 0.14)',
    darkBorder: 'oklch(0.72 0.18 185 / 0.28)',
  },
  hero: {
    eyebrow: 'RevoGrid Pivot',
    titleHighlightParts: ['JavaScript', 'Pivot Table'],
    titleSuffix: 'component',
    description: 'Embed a high-performance pivot table with linked charts in your application. Let users group, filter, aggregate, visualize, drill into, and export large datasets without leaving the page.',
    actions: [
      { label: 'View Demo', href: 'https://rv-grid.com/demo/pivot', arrow: true },
      { label: 'Request Pro Trial', href: 'https://rv-grid.com/trial', variant: 'secondary' },
    ],
    frameworkLinks: [
      { label: 'React', href: '/blog/react-pivot-table-large-datasets', variant: 'secondary' },
      { label: 'Vue', href: '/blog/vue-pivot-table-large-datasets', variant: 'secondary' },
      { label: 'Angular', href: '/blog/angular-pivot-table-large-datasets', variant: 'secondary' },
      { label: 'JavaScript', href: '/blog/javascript-pivot-table-large-datasets', variant: 'secondary' },
    ],
    badges: [
      'Drag-and-drop dimensions',
      'Multi-level aggregation',
      'Linked Pivot charts',
      'Heatmap cell rendering',
      'Client-side on 350K+ rows',
    ],
  },
  preview: {
    enabled: true,
  },
  statsAriaLabel: 'Pivot product stats',
  stats: [
    { value: '350K+', label: 'rows client-side' },
    { value: 'Any', label: 'dimension combination' },
    { value: '8', label: 'aggregation types' },
    { value: '0', label: 'server round-trips' },
  ],
  features: {
    id: 'features',
    kicker: 'Features',
    title: 'A production-ready JavaScript\npivot table component.',
    description: 'Not a summary view bolted on top. A full-featured pivot engine built on RevoGrid\'s high-performance rendering core.',
    items: [
      {
        icon: 'DnD',
        title: 'Drag-and-Drop Dimensions',
        description: 'Move fields between Rows, Columns, Data, and Filters slots at runtime. The pivot table updates instantly.',
        tags: ['Drag fields', 'Runtime pivot', 'Zero reload'],
      },
      {
        icon: 'SUM',
        title: 'Multi-Level Aggregation',
        description: 'Sum, average, count, min/max, median, or bring your own aggregation function. Use multiple aggregations on the same field.',
        tags: ['SUM / AVG / CNT', 'Custom agg fn', 'Multi-agg'],
      },
      {
        icon: 'CHRT',
        title: 'Linked Pivot Charts & Heatmaps',
        description: 'Create interactive column, line, area, pie, and other charts from the active Pivot result. Charts stay linked as fields, filters, and drill state change, while heatmap cells highlight trends and outliers in the grid.',
        tags: ['Linked charts', 'Chart drill-down', 'Heatmap cells'],
      },
      {
        icon: 'ROW',
        title: 'Row & Column Grouping',
        description: 'Drag any dimension field to Rows or Columns. Subtotals and grand totals are computed automatically at every group level.',
        tags: ['Subtotals', 'Grand total', 'Nested groups'],
      },
      {
        icon: 'CPU',
        title: 'Client-Side at Scale',
        description: 'No server round-trip on pivot operations. Bind the pivot config directly and run aggregations against the grid source.',
        tags: ['350K rows', 'In-memory', 'PivotPlugin'],
        codeExample: 'pivot',
      },
      {
        icon: 'CSV',
        title: 'Export to Excel / CSV',
        description: 'Export pivot tables with headers, subtotals, and formatted values. Works with filtered or fully pivoted views.',
        tags: ['XLSX export', 'CSV export', 'Formatted values'],
      },
    ],
  },
  useCases: {
    enabled: true,
  },
  advancedCallout: {
    title: 'Pivot is part of the Pro Advanced bundle.',
  },
  cta: {
    title: 'Embed a pivot table component\nin your product.',
    description: 'Client-side pivot tables with linked charts for React, Vue, Angular, Svelte, and vanilla JS. Included in Pro Advanced.',
    primaryHref: 'https://rv-grid.com/demo/pivot',
    primaryLabel: 'View Demo',
    secondaryHref: 'https://rv-grid.com/trial',
    secondaryLabel: 'Request Pro Trial',
  },
}

export function mergePivotPageConfig(config: PivotLandingPageConfig = {}): PivotLandingPage {
  return {
    ...DEFAULT_PAGE,
    ...config,
    colors: { ...DEFAULT_PAGE.colors, ...config.colors },
    hero: { ...DEFAULT_PAGE.hero, ...config.hero },
    preview: { ...DEFAULT_PAGE.preview, ...config.preview },
    features: { ...DEFAULT_PAGE.features, ...config.features },
    useCases: { ...DEFAULT_PAGE.useCases, ...config.useCases },
    advancedCallout: config.advancedCallout === null
      ? undefined
      : { ...DEFAULT_PAGE.advancedCallout, ...config.advancedCallout },
    cta: config.cta === null
      ? undefined
      : { ...DEFAULT_PAGE.cta, ...config.cta },
  }
}
