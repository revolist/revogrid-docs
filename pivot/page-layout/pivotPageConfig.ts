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
    titleHighlightParts: ['JavaScript'],
    titleSuffix: 'Pivot Table',
    description: 'Feature-rich JavaScript Pivot Table with linked charts. Group, filter, aggregate, visualize, drill into, and export large datasets without leaving the page.',
    actions: [
      { label: 'View Demo', href: 'https://rv-grid.com/demo/pivot', arrow: true },
      { label: 'Get Pro Trial', href: 'https://rv-grid.com/trial', variant: 'secondary' },
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
    title: 'A production-ready \nJavaScript Pivot Table',
    description: 'Not a summary view bolted on top. A full-featured pivot engine built on RevoGrid\'s high-performance rendering core.',
    items: [
      {
        icon: 'DnD',
        title: 'Drag-and-Drop Dimensions',
        description: 'Move fields between Rows, Columns, Data, and Filters slots at runtime. The pivot table updates instantly.',
        tags: ['Drag fields', 'Runtime pivot', 'Zero reload'],
        media: {
          src: '/img/pivot-features/fields-panel.png',
          alt: 'RevoGrid Pivot Fields Panel with Region, Channel, Product, and Internal Segment arranged into analysis roles',
          caption: 'Live demo · Fields Panel',
          width: 1280,
          height: 672,
          position: 'center 58%',
        },
        href: 'https://demo.rv-grid.com/pivot-fields-panel/ts?theme=light',
        cta: 'Try the Fields Panel',
        featured: true,
      },
      {
        icon: 'SUM',
        title: 'Multi-Level Aggregation',
        description: 'Sum, average, count, min/max, median, or bring your own aggregation function. Use multiple aggregations on the same field.',
        tags: ['SUM / AVG / CNT', 'Custom agg fn', 'Multi-agg'],
        media: {
          src: '/img/pivot-feature.png',
          alt: 'Pivot result with filtered membership values, nested city rows, subtotals, grand totals, and formatted measures',
          caption: 'Pivot result · Filters and multi-level totals',
          width: 2870,
          height: 1094,
          position: '58% center',
        },
        href: '/demo/pivot',
        cta: 'Open the Pivot workspace',
      },
      {
        icon: 'CHRT',
        title: 'Linked Pivot Charts & Heatmaps',
        description: 'Create interactive column, line, area, pie, and other charts from the active Pivot result. Charts stay linked as fields, filters, and drill state change, while heatmap cells highlight trends and outliers in the grid.',
        tags: ['Linked charts', 'Chart drill-down', 'Heatmap cells'],
        media: {
          src: '/img/pivot-features/linked-chart.png',
          alt: 'A linked treemap opened from a RevoGrid Pivot value cell and drilled to France',
          caption: 'Live demo · Pivot Charts',
          width: 844,
          height: 475,
          position: 'center',
        },
        href: 'https://demo.rv-grid.com/pivot-fields-panel/ts?theme=light',
        cta: 'Create a linked chart',
      },
      {
        icon: 'ROW',
        title: 'Row & Column Grouping',
        description: 'Drag any dimension field to Rows or Columns. Subtotals and grand totals are computed automatically at every group level.',
        tags: ['Subtotals', 'Grand total', 'Nested groups'],
        media: {
          src: '/img/pivot-preview.jpg',
          alt: 'RevoGrid Pivot with City and Age row groups, Time column groups, and expandable hierarchical results',
          caption: 'Pivot hierarchy · Rows, columns and measures',
          width: 2036,
          height: 852,
          position: '54% center',
        },
        href: '/demo/pivot',
        cta: 'Explore Pivot grouping',
      },
      {
        icon: 'CPU',
        title: 'Client-Side at Scale',
        description: 'No server round-trip on pivot operations. Bind the pivot config directly and run aggregations against the grid source.',
        tags: ['350K rows', 'In-memory', 'PivotPlugin'],
        media: {
          src: '/img/react-pivot-table-large-datasets.webp',
          alt: 'Expanded RevoGrid financial Pivot workspace with fields, grouped sales totals, heatmap formatting, and large analytical result sets',
          caption: 'Performance demo · 10K / 100K / 350K rows',
          width: 1440,
          height: 900,
          position: 'center',
        },
        href: '/demo/pivot',
        cta: 'Test the full Pivot demo',
      },
      {
        icon: 'CSV',
        title: 'Export & Saved Views',
        description: 'Export the visible Pivot result to CSV or TSV, and round-trip the active analytical layout as versioned state JSON.',
        tags: ['CSV / TSV', 'State JSON', 'Saved layouts'],
        media: {
          src: '/img/pivot-features/export-state.png',
          alt: 'RevoGrid Pivot Export and State demo with CSV, TSV, State JSON, and Apply JSON controls above the analytical result',
          caption: 'Live demo · Export and State',
          width: 1280,
          height: 672,
          position: 'center 46%',
        },
        href: 'https://demo.rv-grid.com/pivot-export-state/ts?theme=light',
        cta: 'Try export and state',
      },
    ],
  },
  integrations: {
    id: 'integrations',
    kicker: 'Integrations',
    title: 'Pivot analytics for your frontend stack',
    description: 'Ship the same embedded analytics experience across JavaScript, React, Vue, Angular, and Svelte applications.',
    items: [],
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
    secondaryLabel: 'Get Pro Trial',
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
    integrations: { ...DEFAULT_PAGE.integrations, ...config.integrations },
    useCases: { ...DEFAULT_PAGE.useCases, ...config.useCases },
    advancedCallout: config.advancedCallout === null
      ? undefined
      : { ...DEFAULT_PAGE.advancedCallout, ...config.advancedCallout },
    cta: config.cta === null
      ? undefined
      : { ...DEFAULT_PAGE.cta, ...config.cta },
  }
}
