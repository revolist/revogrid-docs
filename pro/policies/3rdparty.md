---
title: RevoGrid Pro Third-Party Tools and Libraries
description: Learn which third-party libraries RevoGrid Pro and its companion products use, why they are used, and which licenses apply.
sidebar: false
footer: true
---

# Third-Party Tools and Libraries
> Last updated: November 09, 2026

RevoGrid Pro and its companion products use third-party libraries for focused tasks such as spreadsheet files, formula functions, UI rendering, remote data, and document conversion. We use these libraries to reuse specialized implementations while keeping grid behavior and product-specific logic in RevoGrid.

This page summarizes the main direct libraries identified in the current package manifests and source. It distinguishes product dependencies, optional integrations, and development tools. It is not a complete inventory of transitive dependencies, and a library listed here is not necessarily included in every product or application bundle. Exact versions and dependencies depend on the packages and release you install.

## Product Libraries

| Library | Where we use it | Why we use it | License |
| --- | --- | --- | --- |
| [write-excel-file](https://gitlab.com/catamphetamine/write-excel-file) | Pro Excel export | Generates XLSX workbooks from the export model, so the plugin can focus on mapping grid values, styles, and layout instead of implementing the workbook file format. | MIT |
| [@formulajs/formulajs](https://github.com/formulajs/formulajs) | Pro Formula plugin | Supplies spreadsheet-style function implementations. RevoGrid adds cell references, dependency tracking, and grid integration around those functions. | MIT |
| [Preact](https://github.com/preactjs/preact) | Pro plugin UI, Pivot, and Charts | Provides component rendering and UI updates for interactive panels and controls without requiring the host application to use React. | MIT |
| [@tanstack/query-core](https://github.com/TanStack/query/tree/main/packages/query-core) | Shared data-query layer and consuming product packages | Provides framework-independent query caching and observation, including infinite-query support, so remote data integrations can share request state and loading behavior. | MIT |
| [d3-shape](https://github.com/d3/d3-shape) | Charts geometry | Generates line and area curves, pie arcs, and symbol paths. RevoGrid owns the surrounding chart model, rendering, and interaction. | [ISC](https://github.com/d3/d3-shape/blob/main/LICENSE) |
| [fflate](https://github.com/101arrowz/fflate) | Pivot XLSX export; also declared by Charts | Packages workbook XML files into a ZIP-based XLSX archive, avoiding a separate archive implementation in Pivot. | MIT |
| [Lodash / lodash-es](https://github.com/lodash/lodash) | RevoGrid Core; also declared by the documentation site | Supplies utilities used for indexed dimensions, row data, and throttled interactions. The ES module distribution supports selective imports. | MIT |
| [Happy DOM](https://github.com/capricorn86/happy-dom) | Charts server rendering | Supplies a DOM environment for generating chart SVG on the server, reusing the chart renderer outside a browser. | MIT |
| [pdfmake](https://github.com/bpampuch/pdfmake) | Scheduler PDF export | Builds PDF documents from the scheduler's export layout, keeping PDF generation separate from scheduling behavior. | MIT |
| [Font Awesome Free](https://fontawesome.com/license/free) | Product interfaces and examples, including Gantt, Scheduler, Kanban, and Pivot | Provides reusable action and status icons with a consistent visual vocabulary. | Icons: CC BY 4.0; fonts: SIL OFL 1.1; code: MIT |

## Optional Integrations

These libraries serve specific packages or components. Their inclusion here does not make the corresponding feature part of every Pro installation.

| Library | Where we use it | Why we use it | License |
| --- | --- | --- | --- |
| [Yjs](https://github.com/yjs/yjs) | Collaborative Editing package | Provides shared data structures for synchronizing concurrent edits between users. | MIT |
| [y-websocket](https://github.com/yjs/y-websocket) and [y-webrtc](https://github.com/yjs/y-webrtc) | Collaborative Editing transports | Connect the Yjs document through a WebSocket server or WebRTC peers, depending on the configured transport. | MIT |
| [@svar-ui/lib-mspx](https://www.npmjs.com/package/@svar-ui/lib-mspx) | Gantt Microsoft Project adapter | Converts Microsoft Project XML to and from an intermediate Gantt representation; the adapter maps that representation to RevoGrid tasks and dependencies. | MIT |
| [cfb](https://github.com/SheetJS/js-cfb) | Gantt Microsoft Project adapter's MPP reader | Reads the compound-file container used by binary MPP files, while RevoGrid handles the project-specific parsing. | Apache 2.0 |
| [pdfjs-dist (PDF.js)](https://github.com/mozilla/pdf.js) | Shared UI PDF viewer; optional peer dependency | Provides PDF parsing, page rendering, and viewer facilities rather than implementing a PDF reader in the UI package. | [Apache 2.0](https://github.com/mozilla/pdf.js/blob/master/LICENSE) |

## Examples and Documentation

Example and documentation dependencies support the website and individual demos. They are not all requirements for using the grid.

| Library | Where we use it | Why we use it | License |
| --- | --- | --- | --- |
| [read-excel-file](https://gitlab.com/catamphetamine/read-excel-file) | Pivot import example | Reads uploaded XLSX data in a worker before the example maps it into a dataset. | MIT |
| [Numeral.js](https://github.com/adamwdraper/Numeral-js) | Number-column integration | Formats numeric values, such as quantities and currency, consistently through the numeral column package. | MIT |
| [Vue](https://github.com/vuejs/core) and [VitePress](https://github.com/vuejs/vitepress) | Documentation website | Build the documentation pages and interactive Vue examples from Markdown and components. | MIT |

Framework-specific examples and adapters also use their corresponding framework: React, Vue, Angular, or Svelte. Choose the adapter for your application; these frameworks are not all required together.

## Build and Test Tools

Development dependencies compile, package, and verify the products. A tool used during development is distinct from a library imported by a shipped feature.

| Tool | Why we use it | License |
| --- | --- | --- |
| [Stencil](https://github.com/ionic-team/stencil) | Compiles RevoGrid Core into reusable Web Components and generates component integration metadata. | MIT |
| [TypeScript](https://github.com/microsoft/TypeScript) | Checks public contracts and implementation types and supports the JavaScript build pipeline. | Apache 2.0 |
| [Vite](https://github.com/vitejs/vite) and [Turborepo](https://github.com/vercel/turborepo) | Bundle packages and demos and coordinate builds across the monorepo. | MIT |
| [Vitest](https://github.com/vitest-dev/vitest) and [Playwright](https://github.com/microsoft/playwright) | Verify logic with unit tests and browser behavior with end-to-end tests. | MIT / Apache 2.0, respectively |
| [ESLint](https://github.com/eslint/eslint) and [Prettier](https://github.com/prettier/prettier) | Check code quality and keep formatting consistent. | MIT |

## Earlier Releases

The Excel Export plugin used SheetJS Community Edition, licensed under Apache 2.0, through RevoGrid Pro 2.0.8. The current Pro Excel export provider uses `write-excel-file`. The separate `cfb` dependency in the Gantt Microsoft Project adapter is also a SheetJS project; it serves a different purpose from the former Excel export dependency.

## Dependency Updates

Dependencies can change as features and integrations evolve. For an exact inventory, review the installed packages, your lockfile, and the license and notice files distributed with that release, including transitive dependencies.

## Third-Party Licenses

Third-party components retain their own licenses. The license labels above summarize package metadata and upstream license information; the distributed license texts and notices govern the components you receive. Font Awesome Free has separate terms for icons, fonts, and code, as described in its [license documentation](https://fontawesome.com/license/free).

Review the components used by your application and retain the notices required by their licenses. RevoGrid's commercial license does not replace third-party license terms.
