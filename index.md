---
layout: revogrid-home
title: JavaScript Data Grid for Complex Web Apps
navbar: true
sidebar: false
aside: false
footer: true
commercialFaqKeys:
  - deployment-fees
  - plan-difference
  - trial
  - application-limits

head:
  - - meta
    - name: description
      content: Build spreadsheet-grade data grids with Vue, React, Angular, Svelte, Dash, Python, and JavaScript apps.
  - - meta
    - name: keywords
      content: RevoGrid, JavaScript Data Grid, React Data Grid, Vue Data Grid, Angular Data Grid, Svelte Data Grid, Dash Data Grid, Python Data Grid, Virtual Scrolling, Editable Grid, Data Table, JavaScript Pivot Table Component, Pivot Grid, Gantt Grid, Excel
hero:
  eyebrow: High-performance data grid
  title: JavaScript Data Grid for complex web apps
  emphasis: JavaScript Data Grid
  tagline: The world's fastest JavaScript data grid. 60fps, 3x less memory. Inline editing, virtual scroll, and custom cells for every major framework.
  primaryAction:
    text: View demos
    link: /demo/
    # target: _self
  secondaryAction:
    text: RevoGrid Pro
    link: /pro/
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

trust:
  kicker: Used by teams at
  title: Companies using RevoGrid

recommended:
  title: Engineered for
  details: Every Challenge.
  features:
    - title: Individuals
      icon:
        src: individual.svg
      details: Quickly build elegant and efficient data grids. Lightweight yet powerful architecture lets you easily scale as your needs grow.
    - title: Startups and Innovators
      icon:
        src: startup.svg
      details: Rapid prototyping with intuitive and extendable codebase. Agility to build robust data-driven applications in no time.
    - title: Enterprise Solutions
      icon:
        src: org.svg
      details: For large organizations managing massive datasets. Performance and scalability to handle even the most complex data tables.

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
  title: Build data products people love to use.
  emphasis: people love
  description: Create focused tools, customer-facing apps, and enterprise platforms with spreadsheet-grade editing, advanced filtering, rich formatting, and flexible hierarchy.
  items:
    - id: editing
      title: Spreadsheet-grade editing
      icon: edit
      link: "/guide/editing"
      description: Familiar inline editing, selection, navigation, and paste.
    - id: control
      title: Data control built in
      icon: columns
      link: "/guide/column/"
      description: Sorting, resizing, selection, and column movement.
    - id: filtering
      title: Advanced filtering
      tag: Pro
      icon: filter
      link: "/demo/filtering"
      description: Owner selection, formatted cells, and spreadsheet actions.
    - id: formatting
      title: Spreadsheet formatting
      tag: Pro
      icon: palette
      link: "/demo/context-menu"
      description: Progress bars, currency, and reusable presentation rules.
    - id: tree
      title: Tree data
      tag: Pro
      icon: tree
      link: "/demo/tree-data"
      description: Filterable hierarchy with persistent parent context.

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

feedback:
  label: What builders say
  title: Built into products. Praised in practice.
  description: From open-source adopters to Pro teams, builders call out the speed, flexibility, value, and people behind RevoGrid.
  items:
    - quote: One of the best value grid solutions compared to other grid libraries, especially in terms of pricing, performance, and large dataset handling.
      attribution: RevoGrid Pro customer
      source: Customer email
      size: featured
      tone: green
    - quote: Thank you for this amazing library, we are really impressed about the performance of the grid component.
      attribution: RevoGrid user
      source: GitHub
      link: https://github.com/revolist/revogrid/issues/141
      size: wide
      tone: blue
    - quote: Makes development a lot easier.
      attribution: RevoGrid Advanced customer
      source: Customer email
      size: compact
      tone: violet
    - quote: I have to add my voice that it is truly wonderful. Building it with StencilJS was a very smart strategy!
      attribution: RevoGrid user
      source: GitHub
      link: https://github.com/revolist/revogrid/issues/193
      size: medium
      tone: amber
    - quote: We are VERY happy with the PivotGrid.
      attribution: PivotGrid customer
      source: Customer email
      size: compact
      tone: green
    - quote: Thank you for this great revolutionary grid.
      attribution: RevoGrid user
      source: GitHub
      link: https://github.com/revolist/revogrid/issues/211
      size: medium
      tone: blue
    - quote: Very happy I upgraded, happy to support companies that listen and implement feedback.
      attribution: RevoGrid Advanced customer
      source: Customer email
      size: wide
      tone: violet
    - quote: Thanks for all the hard work on this great component!
      attribution: RevoGrid user
      source: GitHub
      link: https://github.com/revolist/revogrid/issues/129
      size: medium
      tone: amber
    - quote: Everything works great.
      attribution: RevoGrid user
      source: GitHub
      link: https://github.com/revolist/revogrid/issues/344
      size: compact
      tone: green
    - quote: You have a great product, RevoGrid.
      attribution: RevoGrid Pro customer
      source: Customer email
      size: medium
      tone: blue
    - quote: Awesome library!!
      attribution: RevoGrid user
      source: GitHub
      link: https://github.com/revolist/revogrid/issues/52
      size: compact
      tone: violet
    - quote: Congratulations for RevoGrid. It's really amazing.
      attribution: RevoGrid user
      source: GitHub
      link: https://github.com/revolist/revogrid/issues/172
      size: medium
      tone: amber

advanced:
  label: Advanced modules
  title: Same grid engine. Bigger product surfaces.
  description: Extend one typed data model into analytics, workflow, scheduling, and spreadsheet-grade tools.
  action:
    text: Explore modules
    link: /pro/#catalog
  items:
    - title: Spreadsheet Formatting
      catalogFeatureId: multi-cell-formatting
      type: spreadsheet
      link: /demo/excel
      thumbnail: /img/spreadsheet.png
      videoUrl: /video/spreadhsheet.mp4
      description: Present live data with formats, progress bars, status styles, ranges, and spreadsheet-grade selection.
    - title: Master Detail
      catalogFeatureId: master-detail
      type: master-detail
      link: /demo/row-master
      thumbnail: /img/master-detail.png
      videoUrl: /video/master-detail.mp4
      description: Expand any row into a nested grid, form, or custom product view.
    - title: Formula Engine
      catalogFeatureId: formula
      type: formula
      link: /guide/cell/formula
      thumbnail: /img/formula.png
      videoUrl: /video/formula.mp4
      description: Evaluate spreadsheet formulas and grouping aggregations over live grid data.
    - title: History
      catalogFeatureId: history
      type: history
      link: /pro/
      thumbnail: /img/history-undo.png
      videoUrl: /video/history.mp4
      description: Add dependable undo and redo across cell edits and multi-cell operations.
    - title: Advanced Filter
      catalogFeatureId: advanced-selection-filtering
      type: filter
      link: /demo/filtering
      thumbnail: /img/advanced-filter.png
      videoUrl: /video/filter-advance.mp4
      description: Combine value selection and conditions in one fast, scalable filtering workflow.
    - title: Pivot Table
      catalogProductId: pivot
      type: pivot
      link: /pivot
      thumbnail: /img/pivot.png
      videoUrl: /video/pivot.mp4
      description: Analyze live grid data with drag-and-drop dimensions, aggregation, drill-down, filters, and totals.
    - title: Event Scheduler
      catalogProductId: scheduler
      type: scheduler
      link: /jsscheduler
      thumbnail: /img/event-scheduler.png
      videoUrl: /video/event-scheduler.mp4
      description: Schedule people, rooms, and equipment with resource timelines, conflicts, and drag-to-reschedule.
    - title: Kanban Board
      catalogProductId: kanban
      type: kanban
      link: /kanban
      thumbnail: /blog/kanban-product-development-polished.png
      videoUrl: /video/kanban-demo.mp4
      description: Project shared data into virtualized workflow columns, swimlanes, and WIP rules.
    - title: Gantt Charts
      catalogProductId: gantt
      type: gantt
      link: /gantt
      thumbnail: /img/gantt-preview.png
      videoUrl: /video/gantt-demo.mp4
      description: Coordinate timelines, dependencies, milestones, and resources on the same data model.

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
    - [Advanced modules, no, Pro plans, yes, no]
    - [Simple per-developer licensing, not applicable, yes, complex, not applicable]
    - [Self-serve purchase, yes, yes, sales-led, not applicable]
    - [Time to first grid, minutes, minutes, days, weeks]

faq:
  label: FAQ
  title: Common questions
  items:
    - q: Can I use RevoGrid in a SaaS product?
      a: Yes. Commercial plans cover production SaaS applications. Your end users can use the product without any additional licensing.
    - q: Which frontend frameworks does RevoGrid support?
      a: RevoGrid supports React, Vue, Angular, Svelte, JavaScript, and TypeScript-oriented projects from the same grid foundation.
    - q: Is RevoGrid a good JavaScript data grid for AI-assisted coding?
      a: Yes. RevoGrid uses typed configuration, framework examples, FAQ-style docs, and Pro MCP access so coding agents can retrieve real grid context before generating JavaScript grid code.

finalCta:
  title: Build your next complex data interface with RevoGrid.
  description: Start with the core grid today. Add Pivot, Gantt, and advanced modules as your product grows.
  note: Per-developer licensing. No deployment counting. Upgrade anytime.
  actions:
    - text: View demos
      link: /demo/
      variant: primary
      # target: _self
    - text: View pricing
      link: /pricing
      variant: secondary
    - text: Request Pro Trial
      link: /trial
      variant: secondary
    - text: View docs
      link: /guide/
      variant: ghost
---
