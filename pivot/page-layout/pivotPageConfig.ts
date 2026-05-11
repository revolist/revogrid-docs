import type { PivotLandingPage, PivotLandingPageConfig } from './types'

const DEFAULT_PAGE: PivotLandingPage = {
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
    eyebrow: 'RevoGrid Pro / Pivot',
    titleHighlightParts: ['Multi', 'dimensional'],
    titleSuffix: 'analytics, embedded.',
    description: 'Drag-and-drop pivot tables for web apps. Slice any dataset by rows, columns, aggregations, and filters without leaving the page.',
    actions: [
      { label: 'Try live demo', href: '/demo/pivot', arrow: true },
      { label: 'Read docs', href: 'https://pro.rv-grid.com/guides/pivot/', variant: 'secondary', target: '_blank', rel: 'noopener' },
    ],
    badges: [
      'Drag-and-drop dimensions',
      'Multi-level aggregation',
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
    title: 'Everything a production\npivot table needs.',
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
        icon: 'MAP',
        title: 'Heatmap Cell Rendering',
        description: 'Built-in value-based color coding with configurable thresholds and custom color scales for fast outlier detection.',
        tags: ['Heatmap cells', 'Color scales', 'Threshold config'],
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
    title: 'Embed pivot analytics\nin your product.',
    description: 'Client-side pivot tables for React, Vue, Angular, Svelte, and vanilla JS. Included in Pro Advanced.',
    primaryHref: '/demo/pivot',
    primaryLabel: 'Try live demo',
    secondaryHref: '/pricing',
    secondaryLabel: 'View Pro pricing',
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
