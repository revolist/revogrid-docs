---
title: RevoGrid Pro
description: Ship pivot analytics, gantt scheduling, spreadsheet formulas, master-detail grids, audit history, and advanced data-grid workflows without building the data layer from scratch.
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
pageClass: pro-landing-doc
layout: custom
breadcrumbs: false
head:
  - - link
    - rel: preconnect
      href: https://fonts.googleapis.com
  - - link
    - rel: preconnect
      href: https://fonts.gstatic.com
      crossorigin: ''
  - - link
    - rel: stylesheet
      href: https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap
proPage:
  hero:
    badge: RevoGrid Pro - v4.0
    title:
      prefix: Ship the data layer in
      highlight: days
      suffix: not quarters.
    subtitle: RevoGrid Pro turns months of grid engineering - pivots, gantt, formulas, master-detail, audit history - into a single dependency. Built on the same MIT core. Royalty-free. No deploy fees.
    actions:
      primary:
        label: Get Pro
        detail:
        href: /pricing
      secondary:
        label: Watch 90s demo
        href: '#features'
    meta:
      - MIT core, always free
      - 5 frameworks, one API
      - Royalty-free
    showcase:
      title: revogrid.app / q4-revenue.grid
      actions:
        - Undo
        - Export CSV
      toolbar:
        pill: 12 of 48,219 rows
        formula: =SUMIF(Region, "EMEA", MRR) -> EUR 56,090
      float:
        label: Q4 EMEA total
        value: EUR 56,090
        delta: "+14.2% vs Q3"
  trust:
    - value: "53"
      label: features
      description: Production-ready, across 13 categories
    - value: 1M+
      label: rows
      description: Virtualized rendering, no jank
    - value: "5"
      label: frameworks
      description: React, Vue, Angular, Svelte, vanilla
    - value: "0"
      label: royalties
      description: Per-dev license. Ship anywhere.
  ai:
    tag: works with AI coding tools
    codeTag: written with Claude
    title:
      prefix: AI writes the integration.
      suffix: Pro provides the
      highlight: capability.
    description: AI coding tools are excellent at wiring up APIs. RevoGrid Pro gives them a clear, typed, consistent surface to work with - so the integration that AI writes is built on a premium scheduling engine, a formula evaluator, or a pivot analytics layer.
    facts:
      - icon: Alt
        text: TypeScript-first APIs through typed events and plugin configuration. Claude, Copilot and Cursor get accurate completions on the first try.
      - icon: "=="
        text: Consistent data model from the feature - no separate Gantt library, no BI iframe, no second table engine.
      - icon: "O"
        text: AI can customize it; can't replace it. Ask your AI to embed a Gantt for roadmap or turn customer MRR data into a pivot table; the underlying engine understands it.
  features:
    tag: What's inside Pro
    title:
      prefix: Tools you
      highlight: don't have to build.
    subtitle: Each of these is a multi-month engineering project on its own. With Pro, they're already wired into your grid - same data model, same API, same renderer.
    items:
      - type: sheet
        tier: Pro
        title: Spreadsheet power
        titleSuffix: inside your app.
        description: 100+ Excel formulas, smart auto-fill, multi-range selection, range copy preview, JSON clipboard, .xlsx import and export. Your users get the Excel UX they already know - without leaving your product.
        saves: 10-14
        unit: wks
        savesAgainst: vs formula engine work
        replaces: Handsontable, Luckysheet, HyperFormula glue
        demoLabel: Open live demo
        demoUrl: /guide/cell/formula
      - type: tree
        tier: Pro
        title: Hierarchies & master-detail
        titleSuffix: done right.
        description: Tree views, server-side groups, drill-down, master-detail panels that expand inline. Built for org charts, BOMs, accounting plans, file trees - anywhere your data nests.
        saves: 6-10
        unit: wks
        savesAgainst: vs custom tree component
        replaces: React-arborist, custom expanders, nested grid hacks
        demoLabel: Open live demo
        demoUrl: /guide/row/master.pro
      - type: audit
        tier: Pro
        title: Audit-ready by default
        titleSuffix: history, validation, traceability.
        description: Every edit goes through the event manager - undo/redo, validation, audit trail, flash highlights, range previews. Hand it to your compliance team without writing a separate logger.
        saves: "8"
        unit: weeks
        savesAgainst: vs custom event pipeline
        replaces: Sentry-for-data, custom undo stacks, manual edit logs
        demoLabel: Open live demo
        demoUrl: /guide/events-guide
        wide: true
      - type: pivot
        tier: Enterprise
        title: Pivot Analytics
        titleSuffix: multidimensional reports without a BI tool.
        description: Drag dimensions into rows, columns, and values. Aggregations, subtotals, grand totals, drilldown, saved state. Client-side for snappy datasets, server-side for unbounded ones. Same component.
        saves: 3-6
        unit: months
        savesAgainst: vs in-house BI layer
        replaces: Tableau Embedded, Power BI Embedded, in-house OLAP layer
        demoLabel: Open live demo
        demoUrl: /demo/pivot
        wide: true
      - type: gantt
        tier: Enterprise
        title: Gantt & Scheduling
        titleSuffix: project planning, not a project.
        description: Task trees, dependencies, auto and manual scheduling, baselines, resources, critical path, capacity warnings. MS Project-style task editor included. All of it driven by the same grid data model.
        saves: 4-9
        unit: months
        savesAgainst: vs DIY scheduling engine
        replaces: SyncFusion Gantt, MS Project Online, Bryntum
        demoLabel: Open live demo
        demoUrl: /demo/gantt
        wide: true
  useCases:
    tag: Where teams use Pro
    title:
      prefix: Built for the apps that
      highlight: can't be slow.
    subtitle: RevoGrid Pro ships in fintech ops tools, healthcare back-offices, B2B SaaS dashboards, and internal data platforms - wherever the grid is the product.
    items:
      - icon: FX
        title: Fintech & trading desks
        description: Streaming P&L, position blotters, settlement boards. Cell flash, sticky rows, audit history, and clipboard JSON make it production-ready.
        tags: [Cell flash, Audit log, Multi-range, Formula engine]
      - icon: B2B
        title: B2B SaaS & internal tools
        description: Customer 360s, billing consoles, ops panels. Tree + master-detail + pivot replaces three custom components and a BI iframe.
        tags: [Pivot, Master-detail, Tree, Excel export]
      - icon: PM
        title: Project & resource planning
        description: Gantt + scheduling for PMO tools, agency ops, manufacturing. Dependencies, capacity, critical path - without a second SDK.
        tags: [Gantt, Scheduling, Resource view, Baselines]
    frameworks:
      title: One API. Every framework you'll ever pick.
      description: RevoGrid is built on web components, so the same Pro features run wherever you ship.
      items: [React, Vue, Angular, Svelte, Vanilla JS]
  catalog:
    tag: Full feature catalog
    title:
      countLabel: features
      highlight: thirteen categories,
      ending: one consistent API.
    subtitle: Everything is in the same component - no plugin sprawl, no separate bundles, no migration when you go from MIT to Pro.
    defaultIcon: +
    groupIcons:
      Data Management: DM
      Advanced Data Structures: AS
      Grid Structure: GS
      Data Filtering & Search: FS
      Data Quality & Validation: QV
      Layout & Styling: LS
      Data Visualization: DV
      Performance & Data Loading: PF
      Advanced Calculations: AC
      User Interaction: UI
      Data Entry & Automation: DE
      Development & Integration: DI
      Enterprise Tools: ET
    groupLabels:
      Advanced Data Structures: Advanced Structures
      Data Filtering & Search: Filtering & Search
      Data Quality & Validation: Quality & Validation
      Performance & Data Loading: Performance
      Advanced Calculations: Calculations
      User Interaction: Interaction
      Data Entry & Automation: Data Entry
      Development & Integration: Dev & Integration
  cta:
    title:
      prefix: Start with the
      highlight: MIT core.
      suffix: Upgrade when you're ready.
    subtitle: No credit card for the open-source build. Pro license activates instantly - same component, same data, just more capability switched on.
    actions:
      primary:
        label: Get Pro
        href: /pricing
      secondary:
        label: Read the docs
        href: /guide/
    note: Royalty-free - No deployment fee - Cancel anytime - 14-day trial
---

<script lang="ts" setup>
import ProLandingPage from './ProLandingPage.vue'
</script>

<ProLandingPage />
