---
title: Excel Data Grid for JavaScript Applications
titleTemplate: false
description: Add Excel-like formulas, editing, copy and paste, formatting, filtering, workbook import and export, and virtualized scale to React, Vue, Angular, Svelte, or JavaScript applications with RevoGrid.
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
pageClass: excel-data-grid-doc
layout: custom
breadcrumbs: false
commercialFaqKeys:
  - plan-difference
  - trial
  - source-access
  - application-limits
excelLanding:
  hero:
    product: RevoGrid Pro
    eyebrow: The grid for spreadsheet-heavy apps
    titleAccent: Excel data grid
    titleLine: just like that
    snap: Snap!
    description: Formulas, editing, copy & paste, filtering, formatting, and workbook controls — all inside a virtualized JavaScript data grid.
    primary: { label: Demos, href: /demo/ }
    secondary: { label: Read documentation →, href: /guide/cell/formula }
    facts:
      - { value: 100+, label: Excel-like functions }
      - { value: Unlimited, label: virtualized rows }
      - { value: 5, label: integration examples }
    aside: Spreadsheet fluency without turning your application into a file editor. Your database, validation, permissions, and product workflow stay in charge.
    previewLabel: RevoGrid preview below
  workflowNav:
    title: The workflows your users already know
    description: One continuous interaction model.
    items:
      - { number: '01', id: copy-paste, title: Copy & Paste, detail: Paste tabular data directly from Excel. }
      - { number: '02', id: editing, title: Fast Editing, detail: Edit cells naturally with keyboard and mouse. }
      - { number: '03', id: filtering, title: Filtering & Sorting, detail: Work through large datasets with familiar controls. }
      - { number: '04', id: structure, title: Rows & Columns, detail: "Resize, reorder and pin the grid structure." }
      - { number: '05', id: grouping, title: Grouping, detail: Organise complex datasets into readable groups. }
      - { number: '06', id: tree, title: Tree Data, detail: Represent hierarchical business data natively. }
  clipboard:
    index: 01 · Clipboard
    title: Paste directly from Excel.
    description: Paste a multi-cell range from Excel into RevoGrid so people can keep the spreadsheet workflow they already know. Selected RevoGrid ranges can also be copied back into Excel when your product needs it.
    action: Excel → RevoGrid
    notes:
      - { title: Multi-cell ranges, detail: "Clipboard content is parsed as a range and written across rows and columns, not into a single cell." }
      - { title: Excel styles preserved, detail: "The Pro formatting stack carries supported fonts, fills, borders, alignment, and number formats through the clipboard." }
      - { title: Your rules still apply, detail: "Paste events are observable — validate, transform or reject values before they reach your store." }
  editing:
    index: 02 · Editing
    title: Editing that feels familiar
    description: Click to focus, type to replace, Enter to commit, Tab to move on. Text, numeric, date and select-style values each get an appropriate editor, and every commit is an event your application can intercept.
    keyboardTitle: Keyboard model
    keys:
      - { key: Enter, detail: commit & move down }
      - { key: Tab, detail: commit & move right }
      - { key: Esc, detail: cancel edit }
      - { key: ↑ ↓ ← →, detail: move focus }
      - { key: ⇧ + ↓, detail: extend range }
      - { key: ⌫, detail: clear range }
    eventTitle: Every edit is an event
    eventDetail: Reject invalid input, write to your API, or run business logic before the value lands.
  filtering:
    index: 03 · Exploration
    title: Find the data you need
    description: Column filters and sorting operate over the full dataset, not just the rendered page. Filter state is readable and settable from your code, so saved views and deep links stay in sync.
    modeLabel: Pro advanced filters
    caption: Top chips and advanced header filters share one model — use either to refine the dataset.
  structure:
    index: 04 · Structure
    title: Let users shape their own view
    description: Resize and reorder columns, drag rows, pin what must stay visible, and select ranges across the sheet.
    notes:
      - { title: Column resize, detail: Drag edges or auto-size to content. }
      - { title: Column reorder, detail: Drag headers into a new order. }
      - { title: Row reorder, detail: Drag handles to move rows. }
      - { title: Pinned areas, detail: "Freeze columns left or right, rows top or bottom." }
      - { title: Range selection, detail: "Select, copy and clear rectangular ranges." }
  grouping:
    index: 05 · Grouping
    title: Turn large datasets into understandable structures
    description: Group flat rows by one or more columns and collapse what isn't relevant right now. Grouping is a view over your data — the underlying rows stay exactly as your application supplied them.
    caption: Click any group row to collapse or expand it.
  tree:
    index: 06 · Hierarchy
    title: Display hierarchical data
    description: Grouping derives structure from values. Tree data is the structure — parents and children come from your model, stay readable at every level, and expand in place.
    sourceTitle: Your shape, unchanged
    sourceDetail: Nodes at any depth stay readable, selectable and copyable — a parent row is a real row, not a header.
  scale:
    index: 07 · Scale
    title: Spreadsheet-like UX.
    titleLine: Data-grid architecture.
    description: Familiar interaction is only half of it. RevoGrid virtualizes rows and columns — the same grid that feels like a spreadsheet at 50 rows behaves the same at hundreds of thousands.
    metrics:
      - { value: Unlimited, label: rows and millions of cells rendered with no hard row limit }
      - { value: 60fps, label: scrolling with row and column virtualization on both axes }
    controlTitle: Programmatic control
    controls:
      - Set source, columns and filters from code
      - Plugin system for behaviour you own
      - Typed configuration and events
      - Custom renderers and editors per column
  remote:
    index: 08 · Remote data
    title: Load only what users need
    description: Keep data on your server and let RevoGrid request it as the viewport, page, filter, or sort changes. The grid stays responsive without downloading the full dataset first.
    notes:
      - { title: Infinite loading, detail: Append the next result window as users approach the loaded edge. }
      - { title: Remote filtering, detail: Send filter state to your API and replace the visible source with matching rows. }
      - { title: Remote sorting, detail: Sort the full server dataset instead of only the rows currently in memory. }
      - { title: Server paging, detail: Use explicit pages when stable result windows fit the product workflow better. }
  positioning:
    index: 09 · Positioning
    title: Your application, not a spreadsheet clone
    description: Spreadsheets are excellent at what they do — that's exactly why the interaction patterns are worth borrowing. RevoGrid takes those patterns and puts them under your application's control.
    spreadsheet:
      label: Spreadsheet application
      title: Built around the spreadsheet itself
      items:
        - The document is the product; data lives in the file
        - Logic expressed as formulas inside cells
        - Layout and behaviour are the user's responsibility
        - Integration happens through exports and imports
        - General-purpose by design
    revogrid:
      label: RevoGrid
      title: A data interaction layer inside your product
      items:
        - Your database and API own the data
        - Your business logic runs on every change
        - Custom editors and renderers per column
        - Native inside React, Vue, Angular, Svelte or plain JS
        - Shaped around one product workflow, not all of them
  developer:
    index: 10 · Integration
    title: A component you can actually drop into your stack
    description: One grid core, delivered through typed wrappers for the frameworks product teams already use. Start with source and columns, then add spreadsheet modules as the workflow grows.
    gettingStarted: View getting started →
    extensions:
      - { icon: palette, title: Cell templates, detail: Render product-specific components in any cell. }
      - { icon: edit, title: Cell editors, detail: Use built-in types or fully custom editors. }
      - { icon: plugin, title: Plugins, detail: Extend grid behavior through maintained modules. }
      - { icon: code, title: Typed events, detail: "Own edits, ranges, validation, and persistence." }
  useCases:
    title: Where teams put it to work
    description: Four product shapes that keep showing up.
    items:
      - { id: ops, title: Internal operations tools, detail: "Replace the spreadsheet that ops actually runs on, without giving up bulk editing and paste." }
      - { id: report, title: Reporting applications, detail: "Filter, sort and correct figures in place instead of exporting to a file and re-uploading." }
      - { id: plan, title: Planning tools, detail: Hierarchical budgets and structured editing across parent and child rows. }
      - { id: saas, title: SaaS products, detail: Ship spreadsheet-grade data interaction as a feature of your own product. }
  capability:
    index: 11 · Capability matrix
    title: What ships in the grid today
    description: Start with the MIT Core, then add maintained Pro modules for deeper spreadsheet and workbook workflows.
    groups:
      - { tier: MIT Core, title: Editing foundation, items: [Cell editing, Keyboard navigation, Range selection, Clipboard copy and paste, Sorting and filtering, Virtualized rows and columns] }
      - { tier: MIT Core, title: Application control, items: [Custom renderers, Custom editors, Pinned rows and columns, Column resizing and movement, Typed configuration, Lifecycle events] }
      - { tier: RevoGrid Pro, title: Spreadsheet workflow, items: [100+ Excel-like functions, Formula bar and named ranges, Smart autofill and preview, Multi-range selection, Undo and redo, Cell validation and formatting] }
      - { tier: RevoGrid Pro, title: Workbook operations, items: [Excel import and export, Collaborative presence, Advanced filters, Merged cells, Context menus, Column collapse and visibility] }
    noteTitle: Clear capability boundary.
    noteDetail: Core covers the fast grid foundation and familiar editing model. Formula evaluation, workbook import/export, collaboration, formatting, and advanced range workflows are maintained RevoGrid Pro modules.
  closing:
    eyebrow: Build spreadsheet-grade product workflows
    title: Give users the data workflows they already know
    description: Evaluate formulas, editing, workbook export, filtering, formatting, and virtualized scale inside your own application.
    primary: { label: Demos, href: /demo/ }
    secondary: { label: Read documentation →, href: /guide/cell/formula }
    footnote: MIT Core · Pro modules available · No per-deployment fee
head:
  - - link
    - rel: canonical
      href: https://rv-grid.com/excel-data-grid
  - - meta
    - name: keywords
      content: Excel data grid, JavaScript Excel grid, spreadsheet data grid, React Excel grid, Vue Excel grid, Angular Excel grid, Excel-like data grid, formulas data grid, workbook import export, virtualized spreadsheet component
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: RevoGrid Excel Data Grid for JavaScript Applications
  - - meta
    - property: og:description
      content: Bring spreadsheet-grade editing, formulas, formatting, Excel import and export, and virtualized scale into your application.
  - - meta
    - property: og:image
      content: https://rv-grid.com/img/spreadsheet.png
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:image
      content: https://rv-grid.com/img/spreadsheet.png
---

<script setup lang="ts">
import { useData } from 'vitepress'
import ExcelDataGridLanding from './excel-data-grid/ExcelDataGridLanding.vue'

const { frontmatter } = useData()
</script>

<ExcelDataGridLanding :content="frontmatter.excelLanding" />
