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
    badge: RevoGrid Pro - v2+
    title:
      prefix: Ship the data layer in
      highlight: days
      suffix: not quarters.
    subtitle: Formula engine, pivot analytics, Gantt scheduling, master-detail layouts, and audit trails — production-ready modules that drop into the grid you already use.
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
      - 5+ frameworks, one API
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
    - valueSource: featureCount
      label: features
      href: '#catalog'
      description: Production-ready, across {categoryCount} categories
    - value: 1M+
      label: rows
      description: Virtualized rendering, no jank
    - value: "5+"
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
      - icon: code
        text: TypeScript-first APIs through typed events and plugin configuration. Claude, Copilot and Cursor get accurate completions on the first try.
      - icon: layer-group
        text: Consistent data model from the feature - no separate Gantt library, no BI iframe, no second table engine.
      - icon: wand-magic-sparkles
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
        description: 100+ Excel formulas, smart auto-fill, multi-range selection, range copy preview, multiuser editing, filtering, cell merge, inline cell charts, a rich library of column types, column collapse/expand, .xlsx import and export matching the grid view. Your users get the UX they already know - without leaving your product.
        saves: 10-14
        unit: wks
        savesAgainst: vs formula engine work
        replaces: Handsontable, Luckysheet, HyperFormula glue
        demoLabel: Watch preview
        demoUrl: /guide/cell/formula
      - type: tree
        tier: Pro
        title: Hierarchies & master-detail
        titleSuffix: done right.
        description: Tree views, server-side groups, drill-down, master-detail panels, advanced reordering, sticky cells, multilevel columns, and advanced filters with selection and sliders. Built for org charts, BOMs, accounting plans, file trees - anywhere your data nests.
        saves: 6-10
        unit: wks
        savesAgainst: vs custom tree component
        replaces: React-arborist, custom expanders, nested grid hacks
        demoLabel: Watch preview
        demoUrl: /guide/row/master.pro
      - type: audit
        tier: Pro
        title: Audit-ready by default
        titleSuffix: history, validation, traceability.
        description: Every edit goes through the event manager - undo/redo, data validation, audit trail, flash highlights, range previews. Enforce rules at the cell level and hand it to your compliance team without writing a separate logger.
        saves: "8"
        unit: weeks
        savesAgainst: vs custom event pipeline
        replaces: Sentry-for-data, custom undo stacks, manual edit logs
        demoLabel: Watch preview
        demoUrl: /guide/events-guide
        wide: true
      - type: pivot
        tier: Enterprise
        title: Advanced Reporting
        titleSuffix: group, aggregate, and drill down without a BI tool.
        description: Drag dimensions into rows, columns, and values. Aggregations, subtotals, grand totals, drilldown, saved state. Client-side for snappy datasets, server-side for unbounded ones. Same component.
        saves: 3-6
        unit: months
        savesAgainst: vs in-house BI layer
        replaces: Tableau Embedded, Power BI Embedded, in-house OLAP layer
        demoLabel: Watch preview
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
        demoLabel: Watch preview
        demoUrl: /demo/gantt
        wide: true
  serverSide:
    tag: Server-side data workflows
    title:
      prefix: Render massive datasets from
      highlight: your server.
    subtitle: Keep the grid responsive while your backend owns the heavy work - paging, range loading, grouped branches, totals, and remote analytics contracts.
    pillars:
      - label: Infinite scroll
        value: viewport
        description: Request only the rows the user is approaching, append or replace slices, and keep total-based or open-ended scrolling smooth.
      - label: Server-side grouping
        value: grouped
        description: Let the API return group headers, child ranges, counts, and expanded branches without materializing every row in the browser.
      - label: Remote analytics
        value: pivot
        description: Pair Pivot with server-side row and column windows, deterministic cache keys, and drilldown responses for fact rows.
    flow:
      title: Grid request contract
      steps:
        - Viewport asks for rows 2,000-2,200
        - API applies filters, sort, grouping, and permissions
        - Grid receives rows, totals, and branch metadata
        - User expands a group; only that branch is fetched
    stats:
      - label: source rows
        value: unbounded
      - label: browser payload
        value: sliced
      - label: grouping work
        value: server
    cta:
      label: Explore infinite scroll
      href: /guide/demos/vue/vue2.list
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
      highlight: "{categoryCount} categories,"
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
