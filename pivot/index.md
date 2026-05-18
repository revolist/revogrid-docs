---
title: JavaScript Pivot Table for Embedded Web Analytics | RevoGrid Pivot
description: Add fast, drag-and-drop pivot table analytics to React, Vue, Angular, Svelte, or vanilla JavaScript apps with client-side grouping, aggregations, filters, heatmaps, and Excel/CSV export.
head:
  - - meta
    - name: keywords
      content: JavaScript pivot table, web pivot grid, embedded analytics, React pivot table, Vue pivot table, Angular pivot table, client-side pivot table, data grid pivot, pivot table component, RevoGrid Pivot
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
pageClass: pivot-page-doc
layout: custom
breadcrumbs: false
pivotLanding:
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
    eyebrow: RevoGrid Pro / Pivot
    titleHighlightParts: [Multi, dimensional]
    titleSuffix: analytics, embedded.
    description: Ship spreadsheet-style pivot analysis inside your application. Let users group, filter, aggregate, visualize, and export large datasets without leaving the page.
    actions:
      - label: Explore the live pivot demo
        href: https://rv-grid.com/demo/pivot
        arrow: true
      - label: Read implementation docs
        href: https://pro.rv-grid.com/guides/pivot/
        variant: secondary
        target: _blank
        rel: noopener
    badges:
      - Drag-and-drop dimensions
      - Multi-level aggregation
      - Heatmap cell rendering
      - Client-side on 350K+ rows
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
      A production-ready
      pivot table for web apps.
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
      - icon: MAP
        title: Heatmap Cell Rendering
        description: Highlight trends and outliers with built-in value-based color coding, configurable thresholds, and custom color scales.
        tags: [Heatmap cells, Color scales, Threshold config]
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
      Embed pivot analytics
      in your product.
    description: Add a client-side pivot table component to React, Vue, Angular, Svelte, or vanilla JavaScript apps. Included in Pro Advanced.
    primaryHref: https://rv-grid.com/demo/pivot
    primaryLabel: Open pivot demo
    secondaryHref: /pricing
    secondaryLabel: View Pro pricing
---

<script lang="ts" setup>
import PivotPageLayout from './PivotPageLayout.vue'
</script>

<PivotPageLayout />
