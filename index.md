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
  tagline: The world's fastest data grid. Inline editing, virtual scroll, custom cells — works everywhere. Go Pro for advanced features.
  primaryAction:
    text: Explore 1M-row demo
    link: /demo/hr
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
      description: Renders millions of rows at 60 fps. Virtual scrolling, frozen columns, and pinned rows — no pagination required.
    - title: Spreadsheet-grade editing
      icon: grid
      link: "/guide/editing"
      description: Range selection, keyboard navigation, copy/paste, and inline editing. The UX your users already know.
    - title: Advanced filtering and sorting
      icon: tool
      link: "/guide/filters"
      description: AND/OR condition trees across multiple filters per column. Additive multi-column sorting. All built into the core.
    - title: Grouping and row ordering
      icon: app
      link: "/guide/row/grouping"
      description: Group rows by any column. Drag to reorder. Full tree and nested data support included.
    - title: Custom cells and editors
      icon: star
      link: "/guide/cell/renderer"
      description: Any Vue, React, Angular, or Svelte component becomes a cell. Build pickers, badges, sparklines — whatever you need.
    - title: Plugin architecture
      icon: plugin
      link: "/guide/plugin/"
      description: Add column menus, export, history, or build your own. Extend without forking.

nativeCells:
  label: No context switch
  title: Full native framework support
  description: RevoGrid supports React, Vue, Angular, and Svelte at the core JavaScript DataGrid level, so developers can build data-heavy apps with native components, familiar framework patterns, and virtualized grid rendering.
  links:
    - text: React cells
      href: /guide/react/renderer
    - text: Vue cells
      href: /guide/vue3/renderer
    - text: Angular cells
      href: /guide/angular/renderer
    - text: Svelte cells
      href: /guide/svelte/renderer
  examples:
    - framework: React
      color: '#61DAFB'
      lang: tsx
      code: |
        const Cell = ({ value }) => (
          __LT__strong__GT__{value}__LT__/strong__GT__
        )

        const columns = [
          { prop: 'value', cellTemplate: Template(Cell) },
        ]

        __LT__RevoGrid columns={columns} source={rows} /__GT__
    - framework: Vue
      color: '#4FC08D'
      lang: vue
      code: |
        __LT__script setup__GT__
        import Cell from './Cell.vue'
        const columns = [{
          prop: 'value',
          cellTemplate: VGridVueTemplate(Cell),
        }]
        __LT__/script__GT__

        __LT__template__GT__
          __LT__RevoGrid :columns="columns" :source="rows" /__GT__
        __LT__/template__GT__
    - framework: Angular
      color: '#DD0031'
      lang: ts
      code: |
        @Component({
          template: '{{ props.model.value }}',
        })
        class CellComponent {}

        columns = [
          { prop: 'value', cellTemplate: Template(CellComponent) },
        ]
    - framework: Svelte
      color: '#FF3E00'
      lang: svelte
      code: |
        __LT__script lang="ts"__GT__
          import Cell from './Cell.svelte'
          import { RevoGrid, Template } from '@revolist/svelte-datagrid'

          const columns = [
            { prop: 'value', cellTemplate: Template(Cell) },
          ]
        __LT__/script__GT__

        __LT__RevoGrid {columns} source={rows} /__GT__

developer:
  label: For developers
  title: Start simple. Customize deeply when you need it.
  description: RevoGrid is a single npm install away. A working grid takes a few lines of markup. Custom cells, virtual rows, column types, and row editing layer in as your application grows.
  actions:
    - text: Read docs
      link: /guide/
    - text: View examples
      link: /demo/color
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
          template: `<revo-grid [columns]="columns" [source]="rows" />`
        })
        export class AppComponent {
          columns = [{ prop: 'value', name: 'Value' }]
          rows = [{ value: 120000 }, { value: 98000 }]
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

        const columns = [{ prop: 'value', name: 'Value' }]
        const rows = [{ value: 120000 }, { value: 98000 }]

        export default function App() {
          return <RevoGrid columns={columns} source={rows} />
        }
    - id: vue
      label: Vue
      icon: /vuejs.svg
      lang: vue
      code: |
        __LT__!-- npm install @revolist/vue3-datagrid --__GT__
        __LT__!-- Grid.vue --__GT__
        __LT__template__GT__
          __LT__RevoGrid :columns="columns" :source="rows" /__GT__
        __LT__/template__GT__

        __LT__script setup__GT__
        import RevoGrid from '@revolist/vue3-datagrid'

        const columns = [{ prop: 'value', name: 'Value' }]
        const rows = [{ value: 120000 }, { value: 98000 }]
        __LT__/script__GT__
    - id: js
      label: JavaScript
      icon: /js.svg
      lang: js
      code: |
        # Install
        npm install @revolist/revogrid

        <!-- index.html -->
        __LT__revo-grid style="height: 220px"__GT____LT__/revo-grid__GT__

        // index.js
        import { defineCustomElements } from '@revolist/revogrid/loader'

        defineCustomElements()
        const grid = document.querySelector('revo-grid')
        grid.columns = [{ prop: 'value', name: 'Value' }]
        grid.source = [{ value: 120000 }, { value: 98000 }]
    - id: svelte
      label: Svelte
      icon: /svelte.svg
      lang: svelte
      code: |
        __LT__!-- npm install @revolist/svelte-datagrid --__GT__
        __LT__!-- App.svelte --__GT__
        __LT__script lang="ts"__GT__
          import { RevoGrid } from '@revolist/svelte-datagrid'

          const columns = [{ prop: 'value', name: 'Value' }]
          const source = [{ value: 120000 }, { value: 98000 }]
        __LT__/script__GT__

        __LT__RevoGrid {source} {columns} /__GT__

advanced:
  label: Advanced modules
  title: Start with the core-grid. Add modules when you need them.
  description: RevoGrid scales from a fast editable grid to advanced product workflows without switching tools or rewriting integrations.
  action:
    text: Explore advanced modules
    link: /pro/#catalog
  items:
    - title: Advanced Reporting
      tag: Pro Advanced
      type: pivot
      link: /pivot
      thumbnail: /img/pivot.png
      videoUrl: /video/pivot.mp4
      description: Pivot, aggregate, and summarize complex datasets directly inside your app. Drag-and-drop dimensions, drill-down, and totals — no BI tool required.
    - title: Master Detail
      tag: Pro
      type: master-detail
      link: /pro/
      thumbnail: /img/master-detail.png
      videoUrl: /video/master-detail.mp4
      description: Expand any row into a nested grid, form, or custom view. The UX pattern your customers already expect in real product interfaces.
    - title: Audit Trail
      tag: Pro
      type: audit
      link: /pro/
      thumbnail: /img/audit-log.png
      videoUrl: /video/al-demo.mp4
      description: Record every cell change with who, what, and when. Filter, review, and export the full history. No DIY work required.

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
    - [Virtualized row rendering 1M+ Rows and Columns, no, yes, yes, partial]
    - [Spreadsheet-style UX, no, yes, yes, partial]
    - [Custom cell renderers, partial, yes, yes, yes]
    - [Plugin architecture, no, yes, partial, partial]
    - [All major frameworks, partial, yes, yes, partial]
    - [Advanced modules, no, yesPro, yes, no]
    - [Simple per-developer licensing, na, yes, complex, na]
    - [Self-serve purchase, yes, yes, noSales, na]
    - [Time to first grid, minutes, minutes, days, weeks]

faq:
  label: FAQ
  title: Common questions
  items:
    - q: Can I use RevoGrid in a SaaS product?
      a: Yes. Commercial plans cover production SaaS applications. Your end users can use the product without any additional licensing.
    - q: How does licensing work? Do you charge per deployment?
      a: No. Licensing is based on the number of developers building with RevoGrid, not deployments, environments, or end users.
    - q: What is the difference between Pro Light and Pro Advanced?
      a: Pro Light gives production access to Pro workflows and examples. Pro Advanced adds premium modules such as Pivot Grid, Gantt Chart, and support.
    - q: Can I evaluate RevoGrid before purchasing?
      a: Yes. The open-source core is available on npm and GitHub, and live interactive demos are available without signing up. Trial available upon request.
    - q: Can I upgrade my plan later?
      a: Yes. Start with the core grid or Pro Light and upgrade to Pro Advanced when your product requires Pivot, Gantt, or deeper workflow modules.

finalCta:
  title: Build your next complex data interface with RevoGrid.
  description: Start with the core grid today. Add Pivot, Gantt, and advanced modules as your product grows.
  note: Per-developer licensing. No deployment counting. Upgrade anytime.
  actions:
    - text: Explore 1M-row demo
      link: /demo/hr
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
