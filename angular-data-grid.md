---
layout: revogrid-home
title: Angular Data Grid - Fast, Editable, Virtual Scroll | RevoGrid
titleTemplate: false
description: A high-performance Angular data grid with virtual scrolling, inline editing, and custom Angular cell renderers. Open-source core, per-developer licensing, built for data-heavy Angular apps.
navbar: true
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
head:
  - - link
    - rel: canonical
      href: https://rv-grid.com/angular-data-grid
  - - meta
    - property: og:title
      content: Angular Data Grid - Fast, Editable, Virtual Scroll | RevoGrid
  - - meta
    - property: og:description
      content: A high-performance Angular data grid with virtual scrolling, inline editing, and custom Angular cell renderers.
  - - meta
    - property: og:url
      content: https://rv-grid.com/angular-data-grid
  - - meta
    - property: og:image
      content: https://rv-grid.com/og-image.jpg
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "RevoGrid",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "url": "https://rv-grid.com/angular-data-grid",
        "offers": {
          "@type": "Offer",
          "price": "200",
          "priceCurrency": "EUR",
          "url": "https://rv-grid.com/pricing"
        }
      }
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does RevoGrid work with Angular standalone components?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Import RevoGrid from @revolist/angular-datagrid into a standalone component and bind columns and source directly in the template."
            }
          },
          {
            "@type": "Question",
            "name": "Does RevoGrid support TypeScript in Angular?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The Angular package exposes typed wrapper APIs and works with core RevoGrid column, editor, and event types."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use existing Angular components as cells?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Wrap an Angular component with Template(Component) and assign it to a column's cellTemplate property."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use the open-source core in production?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The MIT core can be used in production, including commercial apps, subject to the attribution requirements in the RevoGrid docs."
            }
          }
        ]
      }
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://rv-grid.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Angular Data Grid",
            "item": "https://rv-grid.com/angular-data-grid"
          }
        ]
      }

hero:
  eyebrow: Angular data grid
  title: The Angular Data Grid for complex, data-heavy apps
  emphasis: Angular Data Grid
  tagline: Fast virtual scrolling, inline editing, custom Angular cell renderers, and TypeScript-first APIs for dashboards, admin tools, and production SaaS.
  primaryAction:
    text: Explore 1M-row demo
    link: /demo/
  secondaryAction:
    text: Read Angular docs
    link: /guide/angular/
  tertiaryAction:
    text: View pricing
    link: /pricing
  installCommand: npm i @revolist/angular-datagrid

capabilities:
  label: Angular grid capabilities
  title: Everything Angular teams need in a data grid
  description: RevoGrid keeps large Angular data surfaces fast while giving developers direct control over templates, editors, events, and standalone component setup.
  items:
    - title: Virtual scroll at scale
      icon: pulse
      link: /guide/performance
      description: Render large row sets smoothly while Angular owns application state and RevoGrid handles the grid viewport.
    - title: Spreadsheet-grade editing
      icon: grid
      link: /guide/editing
      description: Inline editing, keyboard navigation, range selection, and lifecycle events are built into the core grid.
    - title: Angular cell renderers
      icon: star
      link: /guide/angular/renderer
      description: Wrap Angular components with Template(Component) for badges, controls, status chips, and custom cell UI.
    - title: Custom Angular editors
      icon: edit
      link: /guide/angular/editor
      description: Register Angular editors with Editor(Component), then attach them to editable columns by name.
    - title: Standalone component setup
      icon: code
      link: /guide/angular/
      description: Import RevoGrid directly into standalone components or existing Angular modules.
    - title: Production licensing
      icon: plugin
      link: /pricing
      description: Start with the MIT core, then add Pro licensing per developer when your app needs advanced modules.

developer:
  label: Angular quick start
  title: A working Angular grid in one component
  description: Install the Angular package, import RevoGrid into a standalone component, then add renderers, editors, and edit events as your product grows.
  actions:
    - text: Read Angular docs
      link: /guide/angular/
    - text: View Angular examples
      link: /guide/demos/angular/angular-datagrid
  tabs:
    - id: angular
      label: Data Grid
      icon: /angular.svg
      lang: ts
      code: |
        import { Component } from '@angular/core'
        import { RevoGrid } from '@revolist/angular-datagrid'

        @Component({
          selector: 'app-grid',
          standalone: true,
          imports: [RevoGrid],
          template: `__LT__revo-grid [columns]="columns" [source]="rows"__GT____LT__/revo-grid__GT__`,
        })
        export class GridComponent {
          columns = [
            { prop: 'ticker', name: 'Ticker', readonly: true },
            { prop: 'price', name: 'Price' },
            { prop: 'change', name: 'Change %' },
          ]

          rows = [
            { ticker: 'NVDA', price: 126.4, change: 2.1 },
            { ticker: 'MSFT', price: 421.3, change: 0.8 },
          ]
        }
    - id: renderer
      label: Cell
      icon: /angular.svg
      lang: ts
      code: |
        import { Component } from '@angular/core'
        import { RevoGrid, Template } from '@revolist/angular-datagrid'
        import { ChangeBadgeComponent } from './change-badge.component'

        @Component({
          standalone: true,
          imports: [RevoGrid, ChangeBadgeComponent],
          template: `__LT__revo-grid [columns]="columns" [source]="rows"__GT____LT__/revo-grid__GT__`,
        })
        export class GridComponent {
          columns = [
            { prop: 'ticker', name: 'Ticker' },
            { prop: 'change', name: 'Change %', cellTemplate: Template(ChangeBadgeComponent) },
          ]
        }
    - id: editor
      label: Editor
      icon: /angular.svg
      lang: ts
      code: |
        import { Component } from '@angular/core'
        import { RevoGrid, Editor, type Editors } from '@revolist/angular-datagrid'
        import { PriceEditorComponent } from './price-editor.component'

        @Component({
          standalone: true,
          imports: [RevoGrid, PriceEditorComponent],
          template: `__LT__revo-grid [columns]="columns" [source]="rows" [editors]="editors"__GT____LT__/revo-grid__GT__`,
        })
        export class GridComponent {
          editors: Editors = { priceEditor: Editor(PriceEditorComponent) }
          columns = [{ prop: 'price', name: 'Price', editor: 'priceEditor' }]
        }
    - id: state
      label: State
      icon: /angular.svg
      lang: ts
      code: |
        import { Component } from '@angular/core'
        import { RevoGrid } from '@revolist/angular-datagrid'

        @Component({
          standalone: true,
          imports: [RevoGrid],
          template: `
            __LT__revo-grid
              [columns]="columns"
              [source]="rows"
              (beforeedit)="beforeEdit($event)"
            __GT____LT__/revo-grid__GT__
          `,
        })
        export class GridComponent {
          rows = initialRows

          beforeEdit(event: CustomEvent) {
            const { model, prop, val } = event.detail
            this.rows = this.rows.map((row) =__GT__
              row === model ? { ...row, [prop]: val } : row
            )
          }
        }

nativeCells:
  label: Angular customization
  title: Use your Angular components inside the grid
  description: RevoGrid's Angular package supports native Angular cell renderers and editors, so your product UI can live directly inside a fast virtualized grid.
  links:
    - text: Angular cell template guide
      href: /guide/angular/renderer
    - text: Angular editor guide
      href: /guide/angular/editor
    - text: Angular dynamic loading note
      href: /guide/angular/
    - text: Angular examples
      href: /guide/demos/angular/angular-datagrid
  examples:
    - framework: Renderer
      color: '#DD0031'
      lang: ts
      code: |
        import { Template } from '@revolist/angular-datagrid'
        import { StatusCellComponent } from './status-cell.component'

        columns = [
          { prop: 'status', cellTemplate: Template(StatusCellComponent) },
        ]
    - framework: Editor
      color: '#DD0031'
      lang: ts
      code: |
        import { Editor, type Editors } from '@revolist/angular-datagrid'
        import { QuantityEditorComponent } from './quantity-editor.component'

        editors: Editors = { qty: Editor(QuantityEditorComponent) }
    - framework: Events
      color: '#DD0031'
      lang: ts
      code: |
        beforeEdit(event: CustomEvent) {
          if (event.detail.prop === 'price' && event.detail.val __LT__ 0) {
            event.preventDefault()
          }
        }
    - framework: Setup
      color: '#DD0031'
      lang: ts
      code: |
        @Component({
          standalone: true,
          imports: [RevoGrid],
          template: `__LT__revo-grid [columns]="columns" [source]="rows"__GT____LT__/revo-grid__GT__`,
        })

advanced:
  label: When your Angular grid grows
  title: Add advanced modules without replacing the grid
  description: Start with the fast Angular data grid core, then add commercial workflows when users need more than a table.
  action:
    text: Explore Pro features
    link: /pro/
  items:
    - title: Pivot analytics
      tag: Pro Advanced
      type: pivot
      link: /demo/pivot
      thumbnail: /img/pivot.png
      videoUrl: /video/pivot.mp4
      description: Turn Angular grid data into grouped, aggregated reporting views without embedding a separate BI surface.
    - title: Gantt planning
      tag: Enterprise
      type: gantt
      link: /demo/gantt
      thumbnail: /img/gantt.png
      videoUrl: /video/gantt-demo.mp4
      description: Build project and resource planning screens with scheduling logic, dependencies, and grid-native editing.
    - title: Spreadsheet workflows
      tag: Pro
      type: sheet
      link: /pro/
      thumbnail: /img/spreadsheet.png
      videoUrl: /video/spreadhsheet.mp4
      description: Add formulas, copy/paste, validation, history, and Excel-style workflows to Angular data products.

comparison:
  label: Angular data grid comparison
  title: Angular Data Grid vs AG Grid Angular, Kendo UI, and Syncfusion
  description: RevoGrid is strongest when your Angular app needs fast scrolling, editing, custom components, and a clear commercial upgrade path.
  columns: [Capability, Kendo UI Angular Grid, RevoGrid, Syncfusion Angular Grid, AG Grid Angular]
  rows:
    - [Virtualized data grid, yes, yes, yes, yes]
    - [Inline editing, yes, yes, yes, yes]
    - [Custom Angular cells, yes, yes, yes, yes]
    - [Time to first grid, medium, minutes, medium, medium]
    - [Open-source core, no, yes, no, yes]
    - [Production SaaS licensing, enterprise, perDev, enterprise, enterprise]
    - [Advanced modules, yes, yesPro, yes, yes]

faq:
  label: FAQ
  title: Angular data grid questions
  items:
    - q: Does RevoGrid work with Angular standalone components?
      a: Yes. Import RevoGrid from @revolist/angular-datagrid into a standalone component and bind columns and source directly in the template.
    - q: Does RevoGrid support TypeScript in Angular?
      a: Yes. The Angular package exposes typed wrapper APIs and works with core RevoGrid column, editor, and event types.
    - q: Can I use existing Angular components as cells?
      a: Yes. Wrap an Angular component with Template(Component) and assign it to a column's cellTemplate property.
    - q: Can I use the open-source core in production?
      a: Yes. The MIT core can be used in production, including commercial apps, subject to the attribution requirements in the RevoGrid docs.
    - q: Which frameworks can share the same RevoGrid foundation?
      a: RevoGrid supports Angular, React, Vue, Svelte, JavaScript, and TypeScript-oriented projects, so teams can keep one grid model across multiple front-end stacks.
    - q: Does RevoGrid support AI-assisted grid development?
      a: Yes. RevoGrid has typed APIs, framework examples, and Pro MCP access for teams that want Claude, ChatGPT, Cursor, Codex, or other coding agents to retrieve real grid context.

finalCta:
  title: Build a faster Angular data grid with RevoGrid.
  description: Start with the open-source Angular package, then upgrade when your product needs Pro modules, support, and production workflows.
  note: Open-source core. Per-developer Pro licensing from €200. No deployment counting.
  actions:
    - text: Explore 1M-row demo
      link: /demo/
      variant: primary
    - text: Install Angular package
      link: /guide/angular/
      variant: secondary
    - text: View pricing
      link: /pricing
      variant: ghost
---
