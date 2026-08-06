---
title: Pivot Table Component for Web Applications
description: Add a fast Pivot Table Component with linked charts to React, Vue, Angular, or vanilla JavaScript applications. Includes drag-and-drop fields, filters, heatmaps, and Excel/CSV export.
head:
  - - meta
    - name: keywords
      content: pivot table component, pivot table with charts, pivot chart component, web pivot grid, embedded analytics, client-side pivot table, data grid pivot, RevoGrid Pivot
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
commercialFaqKeys:
  - plan-difference
  - trial
  - source-access
pageClass: pivot-page-doc
layout: custom
breadcrumbs: false
pivotLanding:
  catalogProductId: pivot
  colors:
    accent: '#0f766e'
    accentMid: '#0d9488'
    accentVivid: '#10b981'
    soft: rgba(15, 118, 110, 0.09)
    border: rgba(15, 118, 110, 0.22)
    darkAccent: oklch(0.72 0.18 185)
    darkAccentMid: oklch(0.76 0.18 185)
    darkAccentVivid: oklch(0.78 0.18 175)
    darkSoft: oklch(0.72 0.18 185 / 0.14)
    darkBorder: oklch(0.72 0.18 185 / 0.28)
  hero:
    eyebrow: RevoGrid Pivot
    titleHighlightParts: [Pivot Table]
    titleSuffix: component for Web
    description: Embed a high-performance pivot table with linked charts in your application. Let users group, filter, aggregate, visualize, drill into, and export large datasets without leaving the page.
    actions:
      - label: View Demo
        href: /demo/pivot
        arrow: true
        # target: _self
      - label: Request Pro Trial
        href: /trial
        variant: secondary
    frameworkLinks:
      - label: React
        href: /pivot/react-pivot-table
        variant: secondary
      - label: Vue
        href: /pivot/vue-pivot-table
        variant: secondary
      - label: Angular
        href: /pivot/angular-pivot-table
        variant: secondary
      - label: JavaScript
        href: /pivot/javascript-pivot-table
        variant: secondary
    badges:
      - D&D dimensions
      - Multi-level aggregation
      - Linked Pivot charts
      - Heatmap cells
      - Client-side on 350K+ rows
      - Server-side models
  preview:
    enabled: true
  statsAriaLabel: Pivot product stats
  stats:
    - value: 350K+
      label: rows client-side
    - value: Any
      label: dimension combination
    - value: '8'
      label: aggregation types
    - value: '0'
      label: server round-trips
  features:
    id: features
    kicker: Features
    title: |
      A production-ready web
      pivot table component.
    description: More than a summary panel. RevoGrid Pivot combines a full pivot engine with RevoGrid's high-performance rendering core for interactive product analytics.
    items:
      - icon: DnD
        title: Drag-and-Drop Dimensions
        description: Move fields between Rows, Columns, Data, and Filters slots at runtime so users can reshape reports instantly.
        tags: [Drag fields, Runtime pivot, Zero reload]
      - icon: SUM
        title: Multi-Level Aggregation
        description: Calculate sum, average, count, min/max, median, or custom metrics. Apply multiple aggregations to the same field.
        tags: [SUM / AVG / CNT, Custom agg fn, Multi-agg]
      - icon: CHRT
        title: Linked Pivot Charts & Heatmaps
        description: Create interactive column, line, area, pie, and other charts from the active Pivot result. Charts stay linked as fields, filters, and drill state change, while heatmap cells highlight trends and outliers in the grid.
        tags: [Linked charts, Chart drill-down, Heatmap cells]
      - icon: ROW
        title: Row & Column Grouping
        description: Build nested row and column hierarchies from any dimension field. Subtotals and grand totals are computed automatically.
        tags: [Subtotals, Grand total, Nested groups]
      - icon: CPU
        title: Client-Side at Scale
        description: Keep pivot interactions responsive without server round-trips. Bind the pivot config directly and aggregate against the grid source.
        tags: [350K rows, In-memory, PivotPlugin]
        codeExample: pivot
      - icon: CSV
        title: Export to Excel / CSV
        description: Give customers downloadable reports with headers, subtotals, and formatted values from filtered or fully pivoted views.
        tags: [XLSX export, CSV export, Formatted values]
  useCases:
    enabled: true
  advancedCallout:
    title: Pivot is part of the Pro Advanced bundle.
  cta:
    title: |
      Embed a pivot table component
      in your product.
    description: Add a client-side pivot table component with linked charts to React, Vue, Angular, Svelte, or vanilla JavaScript apps. Included in Pro Advanced.
    primaryHref: https://rv-grid.com/demo/pivot
    primaryLabel: View Demo
    # primaryTarget: _self
    secondaryHref: /trial
    secondaryLabel: Request Pro Trial
    # secondaryTarget: _self
---

<script lang="ts" setup>
import PivotPageLayout from './PivotPageLayout.vue'
</script>

<PivotPageLayout />
