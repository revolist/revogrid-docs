---
layout: revogrid-home
title: RevoGrid - The Extensible Data Grid for Complex Web Apps
navbar: true
sidebar: false
aside: false
footer: true

head:
  - - meta
    - name: description
      content: Build spreadsheet-grade data grids with RevoGrid for Vue, React, Angular, Svelte, and JavaScript apps.
  - - meta
    - name: keywords
      content: RevoGrid, JavaScript Data Grid, React Data Grid, Vue Data Grid, Angular Data Grid, Svelte Data Grid, Virtual Scrolling, Editable Grid, Data Table, Pivot Grid, Gantt Grid

hero:
  eyebrow: High-performance data grid
  title: The extensible data grid for complex web apps
  emphasis: extensible
  tagline: Build spreadsheet-grade tables with fast rendering, custom cells, inline editing, keyboard navigation, and framework-friendly APIs. Start with the core grid. Add Pivot and Gantt when your product needs them.
  primaryAction:
    text: Try live demo
    link: /demo
    target: _self
  secondaryAction:
    text: View docs
    link: /guide/
  frameworks:
    - name: Vue
      color: '#4FC08D'
      link: /guide/vue3/
    - name: Angular
      color: '#DD0031'
      link: /guide/angular/
    - name: React
      color: '#61DAFB'
      link: /guide/react/
    - name: Svelte
      color: '#FF3E00'
      link: /guide/svelte/
    - name: JavaScript
      color: '#F7DF1E'
      link: /guide/

stats:
  - num: 900K+
    label: jsDelivr downloads/mo
    link: https://www.jsdelivr.com/package/npm/@revolist/revogrid
  - num: 3.4K+
    label: GitHub stars
    link: https://github.com/revolist/revogrid
  - num: 8K+
    label: Developers using RevoGrid
  - num: v4.x
    label: Latest stable release
    link: https://github.com/revolist/revogrid/releases
trustText: Used by engineering teams at Fortune 500 companies in automotive, pharma, finance, and enterprise software
trustBadges:
  - Production-ready
  - Virtualized rendering
  - Custom cells and editors
  - Framework-agnostic
  - Commercial licensing
  - No deployment counting

# demos:
#   label: Live demos
#   title: Touch the product before you read about it
#   description: Every demo is interactive. Try editing cells, filtering data, resizing columns, and scrolling through large datasets.
#   items:
#     - title: Large Dataset
#       description: 100,000+ rows with smooth scrolling.
#       link: /demo/hr
#       type: dataset
#       target: _self
#     - title: Spreadsheet Editing
#       description: Selection, copy/paste, keyboard navigation, and inline editors.
#       link: /demo/color
#       type: editing
#       target: _self
#     - title: Custom Cell Types
#       description: Build badges, progress bars, ratings, dropdowns, and any custom renderer.
#       target: _self
#       link: /guide/column/types
#       type: custom
#     - title: Tree Data
#       description: Hierarchical rows with expandable children and nested aggregation.
#       link: /guide/tree-data
#       type: tree
#     - title: Column Grouping
#       description: Organize columns under multi-level group headers for complex data structures.
#       link: /guide/column/grouping
#       type: grouping
#     - title: Real-time Updates
#       description: Streaming data updates without full re-renders. Built for live dashboards.
#       link: /guide/realtime-updates
#       type: realtime

capabilities:
  label: Core capabilities
  title: A grid engine, not a fixed component
  description: RevoGrid is built for applications that outgrow simple table libraries.
  items:
    - title: Performance at scale
      icon: pulse
      link: "/guide/performance"
      description: Virtualized rendering keeps large datasets responsive without sacrificing spreadsheet-like interaction.
    - title: Spreadsheet-grade editing
      icon: grid
      link: "/guide/editing"
      description: Selection ranges, keyboard navigation, copy/paste, and inline editing that match the UX users expect.
    - title: Custom cells and renderers
      icon: star
      link: "/guide/cell/renderer"
      description: Build your own cell types, editors, and validators. Any framework component can become a grid cell.
    - title: Plugin architecture
      icon: plugin
      link: "/guide/plugin/"
      description: Extend the grid with modular plugins instead of forking a fixed component.
    - title: Framework integrations
      icon: links
      link: "/guide/installation"
      description: First-class support for React, Angular, Vue, Svelte, and vanilla JavaScript.
    - title: Production licensing
      icon: lock
      link: "/guide/licensing"
      description: Per-developer licensing designed for teams building real products.

developer:
  label: For developers
  title: Start simple. Customize deeply when you need it.
  description: RevoGrid is a single npm install away. A working grid takes a few lines of markup. Custom cells, virtual rows, column types, and row editing layer in as your application grows.
  actions:
    - text: Read docs
      link: /guide/
    - text: View examples
      link: /demo/demo/hr
      target: _self
  tabs:
    - id: angular
      label: Angular
      icon: /angular.svg
      lang: ts
      code: |
        # Install
        npm install @revolist/angular-datagrid

        // app.component.ts
        import { Component } from '@angular/core'
        import { RevoGrid } from '@revolist/angular-datagrid'

        @Component({
          selector: 'app-root',
          standalone: true,
          imports: [RevoGrid],
          template: `
            <revo-grid
              [columns]="columns"
              [source]="rows"
            ></revo-grid>
          `
        })
        export class AppComponent {
          columns = [
            { prop: 'name' },
            { prop: 'value' },
          ]

          rows = [
            { name: 'Northwind', value: 120000 },
            { name: 'Contoso', value: 98000 },
          ]
        }
    - id: react
      label: React
      icon: /react.svg
      lang: tsx
      code: |
        # Install
        npm install @revolist/react-datagrid

        // App.tsx
        import { RevoGrid } from '@revolist/react-datagrid'

        const columns = [
          { prop: 'name', name: 'Name' },
          { prop: 'revenue', name: 'Revenue' },
        ]

        const rows = [
          { name: 'Northwind', revenue: 120000 },
          { name: 'Contoso', revenue: 98000 },
        ]

        export default function App() {
          return <RevoGrid source={rows} columns={columns} />
        }
    - id: vue
      label: Vue
      icon: /vuejs.svg
      lang: vue
      code: |
        __LT__!-- npm install @revolist/vue3-datagrid --__GT__
        __LT__!-- Grid.vue --__GT__
        __LT__template__GT__
          __LT__RevoGrid :source="rows" :columns="columns" /__GT__
        __LT__/template__GT__

        __LT__script setup__GT__
        import RevoGrid from '@revolist/vue3-datagrid'

        const columns = [
          { prop: 'name', name: 'Name' },
          { prop: 'value', name: 'Value' },
        ]

        const rows = [
          { name: 'Northwind', value: 120000 },
          { name: 'Contoso', value: 98000 },
        ]
        __LT__/script__GT__
    - id: js
      label: JavaScript
      icon: /js.svg
      lang: js
      code: |
        # Install
        npm install @revolist/revogrid

        <!-- index.html -->
        <revo-grid style="height: 220px"></revo-grid>

        // index.js
        import { defineCustomElements } from '@revolist/revogrid/loader'

        defineCustomElements()

        const grid = document.querySelector('revo-grid')
        grid.columns = [
          { prop: 'name', name: 'Name' },
          { prop: 'value', name: 'Value' },
        ]
        const rows = [
          { name: 'Northwind', value: 120000 },
          { name: 'Contoso', value: 98000 },
        ]
        grid.source = rows

advanced:
  label: Advanced modules
  title: Start with the grid. Add modules when you need them.
  description: RevoGrid scales from a fast editable grid to advanced product workflows without switching tools or rewriting integrations.
  action:
    text: Explore advanced modules
    link: /pro/
  items:
    - title: Pivot Grid
      tag: Pro Advanced
      type: pivot
      link: /pivot
      description: Analyze and summarize complex datasets directly inside your application with aggregation, reordering, and drill-down.
    - title: Gantt Chart
      tag: Pro Advanced
      type: gantt
      link: /gantt
      description: Build planning and timeline views with drag-and-resize tasks, dependencies, milestones, and resource views.
    - title: ERP Workflows
      tag: Pro Advanced
      type: erp
      link: /demo/ecommerce
      description: Use RevoGrid as the interface layer for inventory, finance, admin, and operations workflows.
      target: _self

useCases:
  label: Use cases
  title: Built for real product interfaces
  description: RevoGrid is used wherever complex structured data meets user interaction.
  items:
    - title: Admin Panels
      icon: chart
      description: Fast, editable data tables for internal management interfaces with sorting, filtering, and bulk actions.
    - title: SaaS Dashboards
      icon: app
      description: Customer-facing data views in production SaaS apps. High performance without compromising UX.
    - title: Internal Tools
      icon: tool
      description: Operations, support, and back-office tools that require inline editing and complex workflows.
    - title: Finance and Trading
      icon: money
      description: Real-time market data grids, portfolio managers, and financial reporting interfaces.
    - title: Inventory Systems
      icon: box
      description: Large product catalogs, stock management, and warehouse operations with live edits.
    - title: ERP Interfaces
      icon: factory
      description: Complex multi-step data entry forms and grid-based operations for ERP and manufacturing software.
    - title: Analytics Tools
      icon: trend
      description: Deep data exploration with pivot, grouping, and drill-down capabilities for analytical interfaces.
    - title: Project Planning
      icon: calendar
      description: Resource allocation, scheduling, and timeline views with drag-and-drop task management.

comparison:
  label: Why RevoGrid
  title: More powerful than basic tables. Easier to adopt than heavy enterprise suites.
  columns:
    - Feature
    - Simple table libs
    - RevoGrid
    - Enterprise suites
    - Custom in-house
  rows:
    - [Virtualized row rendering, no, yes, yes, partial]
    - [Spreadsheet-style UX, no, yes, yes, partial]
    - [Custom cell renderers, partial, yes, yes, yes]
    - [Plugin architecture, no, yes, partial, partial]
    - [All major frameworks, partial, yes, yes, partial]
    - [Advanced modules, no, yesPro, yes, no]
    - [Simple per-developer licensing, na, yes, complex, na]
    - [Self-serve purchase, yes, yes, noSales, na]
    - [Time to first grid, minutes, minutes, days, weeks]

pricing:
  label: Pricing
  title: Start small. Scale when your app demands it.
  description: Per-developer licensing. No deployment counting. No server license. Upgrade as your product grows.
  note: Simple per-developer licensing. No deployment counting. No server license. Upgrade when your product needs more advanced modules.
  cards:
    - id: light
      name: Pro Light
      description: For individual developers and small teams building production data apps.
      action: Buy Pro Light
      features:
        - Commercial production use
        - text: Production-ready plugins and examples
          link: /pro/
        - Pro MCP (Model Context Protocol)
        - Includes one year of updates
      dim:
        - Pivot Grid module
        - Gantt Chart module
    - id: advanced
      name: Pro Advanced
      featured: true
      badge: Best for advanced workflows
      description: For product teams building Pivot, Gantt, and complex operational interfaces.
      action: Buy Pro Advanced
      features:
        - Everything in Pro Light
        - Pivot Grid module
        - Gantt Chart module
        - Roadmap influence
        - Priority support
        - Priority bug fix queue
        - Early access to new modules
    - id: enterprise
      name: Enterprise
      description: For larger teams with procurement, security review, and custom terms.
      price: Custom
      period: ''
      sub: ''
      action: Talk to sales
      link: mailto:hello@revolist.ee
      features:
        - Everything in Pro Advanced
        - Custom contracts & invoicing
        - Procurement onboarding assistance
        - Security review support & documentation
        - Dedicated engineering contact
        - Flexible licensing for contractor-based development teams
        - Enterprise integration guidance
        - Roadmap collaboration

faq:
  label: FAQ
  title: Common questions
  items:
    - q: Is RevoGrid only for ERP applications?
      a: No. RevoGrid is a high-performance data grid for any web application that works with structured data. ERP is one use case among many.
    - q: Can I use RevoGrid in a SaaS product?
      a: Yes. Commercial plans cover production SaaS applications. Your end users can use the product without any additional licensing.
    - q: How does licensing work? Do you charge per deployment?
      a: No. Licensing is based on the number of developers building with RevoGrid, not deployments, environments, or end users.
    - q: What is the difference between Pro Light and Pro Advanced?
      a: Pro Light gives production access to Pro workflows and examples. Pro Advanced adds premium modules such as Pivot Grid, Gantt Chart, and advanced operational patterns.
    - q: Can I evaluate RevoGrid before purchasing?
      a: Yes. The open-source core is available on npm and GitHub, and live interactive demos are available without signing up.
    - q: Can I upgrade my plan later?
      a: Yes. Start with the core grid or Pro Light and upgrade to Pro Advanced when your product requires Pivot, Gantt, or deeper workflow modules.
    - q: Does RevoGrid work with TypeScript?
      a: Yes. RevoGrid is built with TypeScript and ships type definitions for APIs, columns, events, and plugin interfaces.

finalCta:
  title: Build your next complex data interface with RevoGrid.
  description: Start with the core grid today. Add Pivot, Gantt, and advanced modules as your product grows.
  note: Per-developer licensing. No deployment counting. Upgrade anytime.
  actions:
    - text: Try live demo
      link: /demo
      variant: primary
      target: _self
    - text: View pricing
      link: /pricing
      variant: secondary
    - text: View docs
      link: /guide/
      variant: ghost
---

<!-- Optional Markdown content can be rendered by the custom layout if needed later. -->
