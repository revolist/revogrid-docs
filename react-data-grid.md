---
layout: revogrid-home
title: React Data Grid — Fast, Editable, Virtual Scroll | RevoGrid
titleTemplate: false
description: A high-performance React data grid with virtual scrolling, inline editing, and custom React cell renderers. Open-source core, per-developer licensing, built for data-heavy React apps.
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
      href: https://rv-grid.com/react-data-grid
  - - meta
    - property: og:title
      content: React Data Grid — Fast, Editable, Virtual Scroll | RevoGrid
  - - meta
    - property: og:description
      content: A high-performance React data grid with virtual scrolling, inline editing, and custom React cell renderers.
  - - meta
    - property: og:url
      content: https://rv-grid.com/react-data-grid
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
        "url": "https://rv-grid.com/react-data-grid",
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
            "name": "Does RevoGrid work with Next.js and SSR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. RevoGrid depends on browser APIs, so render the grid in a client component or dynamically load it on the client while keeping surrounding page copy server-rendered."
            }
          },
          {
            "@type": "Question",
            "name": "Does RevoGrid support TypeScript?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The React package exports RevoGrid, Template, Editor, and core RevoGrid types so columns, rows, editors, and event handlers can be typed."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use existing React components as cells?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Wrap a React component with Template(Component) and assign it to a column's cellTemplate property."
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
            "name": "React Data Grid",
            "item": "https://rv-grid.com/react-data-grid"
          }
        ]
      }

hero:
  eyebrow: React data grid
  title: The React Data Grid for complex, data-heavy apps
  emphasis: React Data Grid
  tagline: Fast virtual scrolling, inline editing, custom React cell renderers, and TypeScript-first APIs for dashboards, admin tools, and production SaaS.
  primaryAction:
    text: Explore 1M-row demo
    link: /demo/
  secondaryAction:
    text: Read React docs
    link: /guide/react/
  tertiaryAction:
    text: View pricing
    link: /pricing
  installCommand: npm i @revolist/react-datagrid

capabilities:
  label: React grid capabilities
  title: Everything React teams need in a data grid
  description: RevoGrid keeps large React data surfaces fast while giving developers direct control over cells, editors, events, and state synchronization.
  items:
    - title: Virtual scroll at scale
      icon: pulse
      link: /guide/performance
      description: Render large row sets smoothly without asking React to reconcile every visible cell during scroll.
    - title: Spreadsheet-grade editing
      icon: grid
      link: /guide/editing
      description: Inline editing, keyboard navigation, range selection, and lifecycle events are built into the core grid.
    - title: React cell renderers
      icon: star
      link: /guide/react/renderer
      description: Wrap existing React components with Template(Component) for badges, controls, status chips, and custom cell UI.
    - title: Custom React editors
      icon: edit
      link: /guide/react/editor
      description: Register React editors with Editor(Component), then attach them to editable columns by name.
    - title: TypeScript APIs
      icon: code
      link: /guide/react/
      description: Type rows, columns, renderer props, editors, refs, and edit events from the React package.
    - title: Production licensing
      icon: plugin
      link: /pricing
      description: Start with the MIT core, then add Pro licensing per developer when your app needs advanced modules.

developer:
  label: React quick start
  title: A working React grid in one component
  description: Install the React package, keep columns and source stable, then add renderers, editors, and edit events as your product grows.
  actions:
    - text: Read React docs
      link: /guide/react/
    - text: View React examples
      link: /guide/demos/react/react-datagrid
  tabs:
    - id: react
      label: Data Grid
      icon: /react.svg
      lang: tsx
      code: |
        # Install
        npm install @revolist/react-datagrid

        // Grid.tsx
        import { RevoGrid } from '@revolist/react-datagrid'

        const columns = [
          { prop: 'ticker', name: 'Ticker', readonly: true },
          { prop: 'price', name: 'Price' },
          { prop: 'change', name: 'Change %' },
        ]

        const rows = [
          { ticker: 'NVDA', price: 126.4, change: 2.1 },
          { ticker: 'MSFT', price: 421.3, change: 0.8 },
        ]

        export default function Grid() {
          return <RevoGrid columns={columns} source={rows} />
        }
    - id: renderer
      label: Cell
      icon: /react.svg
      lang: tsx
      code: |
        import { RevoGrid, Template } from '@revolist/react-datagrid'

        const ChangeBadge = ({ value }) => (
          <span className={value >= 0 ? 'up' : 'down'}>
            {value.toFixed(2)}%
          </span>
        )

        const columns = [
          { prop: 'ticker', name: 'Ticker' },
          { prop: 'change', name: 'Change %', cellTemplate: Template(ChangeBadge) },
        ]

        export default function Grid() {
          return <RevoGrid columns={columns} source={rows} />
        }
    - id: editor
      label: Editor
      icon: /react.svg
      lang: tsx
      code: |
        import { RevoGrid, Editor } from '@revolist/react-datagrid'

        const PriceEditor = ({ value, save, close }) => (
          <input
            autoFocus
            defaultValue={value}
            onBlur={(event) => save(Number(event.currentTarget.value))}
            onKeyDown={(event) => event.key === 'Escape' && close()}
          />
        )

        const editors = { priceEditor: Editor(PriceEditor) }
        const columns = [{ prop: 'price', name: 'Price', editor: 'priceEditor' }]

        export default function Grid() {
          return <RevoGrid columns={columns} source={rows} editors={editors} />
        }
    - id: state
      label: State
      icon: /react.svg
      lang: tsx
      code: |
        import { useMemo, useState } from 'react'
        import { RevoGrid } from '@revolist/react-datagrid'
        import type { ColumnRegular } from '@revolist/revogrid'

        export default function Grid() {
          const [rows, setRows] = useState(initialRows)
          const columns = useMemo<ColumnRegular[]>(
            () => [
              { prop: 'ticker', name: 'Ticker', readonly: true },
              { prop: 'price', name: 'Price' },
              { prop: 'change', name: 'Change %' },
            ],
            []
          )

          return (
            <RevoGrid
              columns={columns}
              source={rows}
              onBeforeedit={(event) => {
                const { model, prop, val } = event.detail
                setRows((current) =>
                  current.map((row) => row === model ? { ...row, [prop]: val } : row)
                )
              }}
            />
          )
        }

nativeCells:
  label: React customization
  title: Use your React components inside the grid
  description: RevoGrid's React package supports native React cell renderers and editors, so your product UI can live directly inside a fast virtualized grid.
  links:
    - text: React cell template guide
      href: /guide/react/renderer
    - text: React editor guide
      href: /guide/react/editor
    - text: React examples
      href: /guide/demos/react/react-datagrid
    - text: Editing lifecycle
      href: /guide/editing
  examples:
    - framework: Renderer
      color: '#61DAFB'
      lang: tsx
      code: |
        const StatusCell = ({ value }) => (
          <strong className="status">{value}</strong>
        )

        const columns = [
          { prop: 'status', cellTemplate: Template(StatusCell) },
        ]
    - framework: Editor
      color: '#61DAFB'
      lang: tsx
      code: |
        const QuantityEditor = ({ value, save }) => (
          <input
            autoFocus
            defaultValue={value}
            onBlur={(event) => save(Number(event.currentTarget.value))}
          />
        )

        const editors = { qty: Editor(QuantityEditor) }
    - framework: Events
      color: '#61DAFB'
      lang: tsx
      code: |
        <RevoGrid
          columns={columns}
          source={rows}
          onBeforeedit={(event) => {
            if (event.detail.prop === 'price' && event.detail.val < 0) {
              event.preventDefault()
            }
          }}
        />
    - framework: Ref
      color: '#61DAFB'
      lang: tsx
      code: |
        const gridRef = useRef(null)

        async function editFirstPrice() {
          await gridRef.current?.scrollToRow?.(0)
          await gridRef.current?.setCellEdit?.(0, 'price')
        }

        <RevoGrid ref={gridRef} columns={columns} source={rows} />

advanced:
  label: When your React grid grows
  title: Add advanced modules without replacing the grid
  description: Start with the fast React data grid core, then add commercial workflows when users need more than a table.
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
      description: Turn React grid data into grouped, aggregated reporting views without embedding a separate BI surface.
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
      description: Add formulas, copy/paste, validation, history, and Excel-style workflows to React data products.

comparison:
  label: React data grid comparison
  title: Pick the grid that matches your React workload
  description: RevoGrid is strongest when your React app needs fast scrolling, editing, custom cells, and a clear commercial upgrade path.
  columns: [Capability, TanStack Table, RevoGrid, MUI X, AG Grid React]
  rows:
    - [Virtualized data grid, custom implementation, built in, built in, built in]
    - [Inline editing, custom implementation, built in, partial, built in]
    - [Custom React cells, yes, yes, yes, yes]
    - [Time to first grid, medium, minutes, minutes, medium]
    - [Open-source core, yes, yes, yes, yes]
    - [Production SaaS licensing, not applicable, per-developer Pro plans, per-developer paid tiers, Enterprise license]
    - [Advanced modules, no, Pro plans, paid tiers, Enterprise modules]

faq:
  label: FAQ
  title: React data grid questions
  items:
    - q: Does RevoGrid work with Next.js and SSR?
      a: Yes. RevoGrid depends on browser APIs, so render the grid in a client component or dynamically load it on the client while keeping surrounding page copy server-rendered.
    - q: Does RevoGrid support TypeScript?
      a: Yes. The React package exports RevoGrid, Template, Editor, and core RevoGrid types so columns, rows, editors, and event handlers can be typed.
    - q: Can I use existing React components as cells?
      a: Yes. Wrap a React component with Template(Component) and assign it to a column's cellTemplate property.
    - q: Can I use the open-source core in production?
      a: Yes. The MIT core can be used in production, including commercial apps, subject to the attribution requirements in the RevoGrid docs.
    - q: What is the best data grid for React apps with AI-assisted development?
      a: RevoGrid is a strong fit when React teams need virtual scrolling, inline editing, custom React cells, TypeScript, clear licensing, and Pro MCP context for coding agents.

finalCta:
  title: Build a faster React data grid with RevoGrid.
  description: Start with the open-source React package, then upgrade when your product needs Pro modules, support, and production workflows.
  note: Open-source core. Per-developer Pro licensing from €200. No deployment counting.
  actions:
    - text: Explore 1M-row demo
      link: /demo/
      variant: primary
    - text: Install React package
      link: /guide/react/
      variant: secondary
    - text: View pricing
      link: /pricing
      variant: ghost
    - text: Best React grid guide
      link: /best-data-grid-for-react
      variant: ghost
---
