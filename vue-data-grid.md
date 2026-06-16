---
layout: revogrid-home
title: Vue Data Grid - Fast, Editable, Virtual Scroll | RevoGrid
titleTemplate: false
description: A high-performance Vue data grid with virtual scrolling, inline editing, and custom Vue cell renderers. Open-source core, per-developer licensing, built for data-heavy Vue 3 apps.
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
      href: https://rv-grid.com/vue-data-grid
  - - meta
    - property: og:title
      content: Vue Data Grid - Fast, Editable, Virtual Scroll | RevoGrid
  - - meta
    - property: og:description
      content: A high-performance Vue data grid with virtual scrolling, inline editing, and custom Vue cell renderers.
  - - meta
    - property: og:url
      content: https://rv-grid.com/vue-data-grid
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
        "url": "https://rv-grid.com/vue-data-grid",
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
            "name": "Does RevoGrid work with Nuxt and SSR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. RevoGrid depends on browser APIs, so render the grid on the client side or guard the component load while keeping surrounding Vue page content server-rendered."
            }
          },
          {
            "@type": "Question",
            "name": "Does RevoGrid support TypeScript in Vue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The Vue package exports RevoGrid helpers and core RevoGrid types so columns, rows, editors, renderers, and grid methods can be typed."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use existing Vue components as cells?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Wrap a Vue component with VGridVueTemplate(Component) and assign it to a column's cellTemplate property."
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
            "name": "Vue Data Grid",
            "item": "https://rv-grid.com/vue-data-grid"
          }
        ]
      }

hero:
  eyebrow: Vue data grid
  title: The Vue Data Grid for complex, data-heavy apps
  emphasis: Vue Data Grid
  tagline: Fast virtual scrolling, inline editing, custom Vue cell renderers, and TypeScript-friendly APIs for dashboards, admin tools, and production SaaS.
  primaryAction:
    text: Explore 1M-row demo
    link: /demo/
  secondaryAction:
    text: Read Vue docs
    link: /guide/vue3/
  tertiaryAction:
    text: View pricing
    link: /pricing
  installCommand: npm i @revolist/vue3-datagrid

capabilities:
  label: Vue grid capabilities
  title: Everything Vue teams need in a data grid
  description: RevoGrid keeps large Vue data surfaces fast while giving developers direct control over reactive source data, cell renderers, editors, events, and grid methods.
  items:
    - title: Virtual scroll at scale
      icon: pulse
      link: /guide/performance
      description: Render large row sets smoothly while Vue owns your application state and RevoGrid handles the grid viewport.
    - title: Spreadsheet-grade editing
      icon: grid
      link: /guide/editing
      description: Inline editing, keyboard navigation, range selection, and lifecycle events are built into the core grid.
    - title: Vue cell renderers
      icon: star
      link: /guide/vue3/renderer
      description: Wrap Vue components with VGridVueTemplate(Component) for badges, controls, status chips, and custom cell UI.
    - title: Custom Vue editors
      icon: edit
      link: /guide/vue3/editor
      description: Register Vue editors with VGridVueEditor(Component), then attach them to editable columns by name.
    - title: Composition API ready
      icon: code
      link: /guide/vue3/
      description: Keep columns and source in refs, use component state naturally, and call grid methods through the wrapped element.
    - title: Production licensing
      icon: plugin
      link: /pricing
      description: Start with the MIT core, then add Pro licensing per developer when your app needs advanced modules.

developer:
  label: Vue quick start
  title: A working Vue grid in one component
  description: Install the Vue package, keep columns and source reactive, then add renderers, editors, and edit events as your product grows.
  actions:
    - text: Read Vue docs
      link: /guide/vue3/
    - text: View Vue examples
      link: /guide/demos/vue/vue3-datagrid
  tabs:
    - id: vue
      label: Data Grid
      icon: /vuejs.svg
      lang: vue
      code: |
        __LT__template__GT__
          __LT__RevoGrid :columns="columns" :source="rows" /__GT__
        __LT__/template__GT__

        __LT__script setup lang="ts"__GT__
        import { ref } from 'vue'
        import RevoGrid from '@revolist/vue3-datagrid'

        const columns = ref([
          { prop: 'ticker', name: 'Ticker', readonly: true },
          { prop: 'price', name: 'Price' },
          { prop: 'change', name: 'Change %' },
        ])

        const rows = ref([
          { ticker: 'NVDA', price: 126.4, change: 2.1 },
          { ticker: 'MSFT', price: 421.3, change: 0.8 },
        ])
        __LT__/script__GT__
    - id: renderer
      label: Cell
      icon: /vuejs.svg
      lang: vue
      code: |
        __LT__script setup lang="ts"__GT__
        import RevoGrid, { VGridVueTemplate } from '@revolist/vue3-datagrid'
        import ChangeBadge from './ChangeBadge.vue'

        const columns = [
          { prop: 'ticker', name: 'Ticker' },
          { prop: 'change', name: 'Change %', cellTemplate: VGridVueTemplate(ChangeBadge) },
        ]
        __LT__/script__GT__

        __LT__template__GT__
          __LT__RevoGrid :columns="columns" :source="rows" /__GT__
        __LT__/template__GT__
    - id: editor
      label: Editor
      icon: /vuejs.svg
      lang: vue
      code: |
        __LT__script setup lang="ts"__GT__
        import RevoGrid, { VGridVueEditor, type Editors } from '@revolist/vue3-datagrid'
        import PriceEditor from './PriceEditor.vue'

        const PRICE_EDITOR = 'priceEditor'
        const editors: Editors = { [PRICE_EDITOR]: VGridVueEditor(PriceEditor) }
        const columns = [{ prop: 'price', name: 'Price', editor: PRICE_EDITOR }]
        __LT__/script__GT__

        __LT__template__GT__
          __LT__RevoGrid :columns="columns" :source="rows" :editors="editors" /__GT__
        __LT__/template__GT__
    - id: state
      label: State
      icon: /vuejs.svg
      lang: vue
      code: |
        __LT__script setup lang="ts"__GT__
        import { ref } from 'vue'
        import RevoGrid from '@revolist/vue3-datagrid'

        const rows = ref(initialRows)

        function beforeEdit(event) {
          const { model, prop, val } = event.detail
          rows.value = rows.value.map((row) =__GT__
            row === model ? { ...row, [prop]: val } : row
          )
        }
        __LT__/script__GT__

        __LT__template__GT__
          __LT__RevoGrid :columns="columns" :source="rows" @beforeedit="beforeEdit" /__GT__
        __LT__/template__GT__

nativeCells:
  label: Vue customization
  title: Use your Vue components inside the grid
  description: RevoGrid's Vue package supports native Vue cell renderers and editors, so your product UI can live directly inside a fast virtualized grid.
  links:
    - text: Vue cell template guide
      href: /guide/vue3/renderer
    - text: Vue editor guide
      href: /guide/vue3/editor
    - text: Vue examples
      href: /guide/demos/vue/vue3-datagrid
    - text: Editing lifecycle
      href: /guide/editing
  examples:
    - framework: Renderer
      color: '#4FC08D'
      lang: vue
      code: |
        import { VGridVueTemplate } from '@revolist/vue3-datagrid'
        import StatusCell from './StatusCell.vue'

        const columns = [
          { prop: 'status', cellTemplate: VGridVueTemplate(StatusCell) },
        ]
    - framework: Editor
      color: '#4FC08D'
      lang: vue
      code: |
        import { VGridVueEditor } from '@revolist/vue3-datagrid'
        import QuantityEditor from './QuantityEditor.vue'

        const editors = { qty: VGridVueEditor(QuantityEditor) }
    - framework: Events
      color: '#4FC08D'
      lang: vue
      code: |
        __LT__RevoGrid
          :columns="columns"
          :source="rows"
          @beforeedit="(event) =__GT__ {
            if (event.detail.prop === 'price' && event.detail.val __LT__ 0) {
              event.preventDefault()
            }
          }"
        /__GT__
    - framework: Ref
      color: '#4FC08D'
      lang: vue
      code: |
        const gridRef = ref()

        async function editFirstPrice() {
          await gridRef.value.$el.scrollToRow(0)
          await gridRef.value.$el.setCellEdit(0, 'price')
        }

advanced:
  label: When your Vue grid grows
  title: Add advanced modules without replacing the grid
  description: Start with the fast Vue data grid core, then add commercial workflows when users need more than a table.
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
      description: Turn Vue grid data into grouped, aggregated reporting views without embedding a separate BI surface.
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
      description: Add formulas, copy/paste, validation, history, and Excel-style workflows to Vue data products.

comparison:
  label: Vue data grid comparison
  title: Vue Data Grid vs AG Grid Vue, Syncfusion, and TanStack Table
  description: RevoGrid is strongest when your Vue app needs fast scrolling, editing, custom cells, and a clear commercial upgrade path.
  columns: [Capability, TanStack Table, RevoGrid, Syncfusion Vue Grid, AG Grid Vue]
  rows:
    - [Virtualized data grid, custom, yes, yes, yes]
    - [Inline editing, custom, yes, yes, yes]
    - [Custom Vue cells, yes, yes, yes, yes]
    - [Time to first grid, medium, minutes, medium, medium]
    - [Open-source core, yes, yes, no, yes]
    - [Production SaaS licensing, na, perDev, enterprise, enterprise]
    - [Advanced modules, no, yesPro, yes, yes]

faq:
  label: FAQ
  title: Vue data grid questions
  items:
    - q: Does RevoGrid work with Nuxt and SSR?
      a: Yes. RevoGrid depends on browser APIs, so render the grid on the client side or guard the component load while keeping surrounding Vue page content server-rendered.
    - q: Does RevoGrid support TypeScript in Vue?
      a: Yes. The Vue package exports RevoGrid helpers and core RevoGrid types so columns, rows, editors, renderers, and grid methods can be typed.
    - q: Can I use existing Vue components as cells?
      a: Yes. Wrap a Vue component with VGridVueTemplate(Component) and assign it to a column's cellTemplate property.
    - q: Can I use the open-source core in production?
      a: Yes. The MIT core can be used in production, including commercial apps, subject to the attribution requirements in the RevoGrid docs.

finalCta:
  title: Build a faster Vue data grid with RevoGrid.
  description: Start with the open-source Vue package, then upgrade when your product needs Pro modules, support, and production workflows.
  note: Open-source core. Per-developer Pro licensing from €200. No deployment counting.
  actions:
    - text: Explore 1M-row demo
      link: /demo/
      variant: primary
    - text: Install Vue package
      link: /guide/vue3/
      variant: secondary
    - text: View pricing
      link: /pricing
      variant: ghost
---
