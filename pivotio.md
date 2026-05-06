---
title: RevoGrid PivotIO - Embedded Pivot Analytics for Web Apps
description: PivotIO pages for product teams embedding self-service analytics, pivot exploration, and export-ready reporting into web applications.
externalHomeLinks: true
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
    accent: '#2563eb'
    accentMid: '#3b82f6'
    accentVivid: '#06b6d4'
    soft: rgba(37, 99, 235, 0.09)
    border: rgba(37, 99, 235, 0.22)
    darkAccent: '#60a5fa'
    darkAccentMid: '#93c5fd'
    darkAccentVivid: '#67e8f9'
    darkSoft: rgba(96, 165, 250, 0.14)
    darkBorder: rgba(96, 165, 250, 0.28)
  hero:
    eyebrow: RevoGrid Pro / PivotIO
    titleHighlightParts: [Pivot, IO]
    titleSuffix: for embedded analytics.
    description: Give users a fast pivot workspace for slicing data, comparing dimensions, exporting results, and building self-service reports inside your product.
    actions:
      - label: Try live demo
        href: /demo/pivot
        arrow: true
      - label: Read docs
        href: https://pro.rv-grid.com/guides/pivot/
        variant: secondary
        target: _blank
        rel: noopener
    badges:
      - Self-service analytics
      - Export-ready reports
      - Dimension explorer
      - Client-side compute
  preview:
    enabled: true
  statsAriaLabel: PivotIO product stats
  stats:
    - value: 350K+
      label: rows explored client-side
    - value: Instant
      label: pivot recalculation
    - value: Any
      label: reporting dimension
    - value: XLSX
      label: export-ready output
  features:
    id: features
    kicker: Features
    title: |
      Pivot exploration
      for product analytics.
    description: PivotIO uses the same RevoGrid pivot engine with copy and positioning for embedded analytics, reporting workspaces, and self-service data products.
    items:
      - icon: IO
        title: Interactive Data Input
        description: Let users bring product data into a pivot workspace and reshape it by rows, columns, values, and filters.
        tags: [Data input, Dimensions, Filters]
      - icon: OUT
        title: Export-Ready Output
        description: Produce report-friendly pivot tables with headers, subtotals, formatted values, and spreadsheet exports.
        tags: [Reports, XLSX, CSV]
      - icon: UX
        title: Embedded Analytics UX
        description: Keep analytics native to your application instead of sending users to a separate BI iframe.
        tags: [Embedded BI, Native UX, SaaS]
      - icon: AGG
        title: Client-Side Aggregation
        description: Run sum, average, count, min/max, and custom metrics locally for responsive exploration.
        tags: [Aggregations, Metrics, Custom logic]
      - icon: MAP
        title: Visual Insight Cells
        description: Use heatmaps, custom renderers, and formatted cells to surface outliers and trends quickly.
        tags: [Heatmaps, Formatting, Renderers]
      - icon: API
        title: Product Integration API
        description: Wire PivotIO into your product state, permissions, saved reports, and framework components.
        tags: [Plugin API, Saved views, Frameworks]
  useCases:
    enabled: true
  advancedCallout:
    title: PivotIO is powered by the RevoGrid Pro Pivot plugin.
  cta:
    title: |
      Add PivotIO
      to your data product.
    description: Ship embedded pivot exploration with RevoGrid rendering, editing, exports, and framework adapters.
    primaryHref: /demo/pivot
    primaryLabel: Try live demo
    secondaryHref: /pro/prices
    secondaryLabel: View Pro pricing
---

<script lang="ts" setup>
import PivotPageLayout from './pivot/PivotPageLayout.vue'
</script>

<PivotPageLayout />
