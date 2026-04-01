---
title: JavaScript Data Grid Quick Start
description: Learn how to install RevoGrid, render your first JavaScript data grid, and move from a basic setup to filtering, editing, and framework integrations.
head:
  - - meta
    - name: keywords
      content: JavaScript data grid, TypeScript data grid, RevoGrid quick start, virtual scrolling grid, editable data grid, web component data table
---

# JavaScript Data Grid Quick Start

RevoGrid is a high-performance [MIT-licensed](/guide/licensing) JavaScript data grid built for large datasets, fast scrolling, and spreadsheet-like interactions. It works as a Web Component, so the same core grid can be used in JavaScript, TypeScript, React, Angular, Vue, Svelte, and other modern frontends.

This page is the fastest way to get a grid on the screen. From here you can move into feature guides, framework-specific setup, and the full API.

## Why teams use RevoGrid

- Virtual rows and columns keep rendering fast as datasets grow.
- Built-in focus, range selection, editing, sorting, filtering, and pinning cover common grid workflows.
- The same `<revo-grid>` core works across multiple frameworks.
- Public methods and events make it possible to build custom workflows without forking the grid.

<!--@include: ./parts/_framework.md-->

## Play online

If you want to try the grid before installing anything locally, start with the live example:

<!--@include: ../demo/js/js.overview.md-->

## Quick start in 60 seconds

For prototypes, internal tools, or plain HTML pages, load RevoGrid directly from a CDN:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/@revolist/revogrid@latest/dist/revo-grid/revo-grid.js"></script>
  </head>
  <body>
    <revo-grid style="height: 220px"></revo-grid>
  </body>
</html>
```

Then define columns and pass a source array:

```typescript
<!--@include: ../demo/js/basic-quick.ts-->
```

## Basic setup with a custom cell template

RevoGrid can stay simple for read-only tables, or become interactive with custom renderers, editors, and events. This example adds a richer cell template while keeping the same grid setup:

```typescript
<!--@include: ../demo/js/basic-setup.code.ts-->
```

## Next steps

Choose the path that matches what you are building:

- [Installation](/guide/installation): package managers, CDN usage, and loader setup.
- [Overview](/guide/overview): how the grid is structured and when to use it.
- [AI Agents and MCP](/guide/mcp): connect Codex, Cursor, Claude Code, or VS Code to version-aware RevoGrid docs, examples, migrations, and typed API context.
- [Filtering](/guide/filters): enable built-in filtering and custom filter logic.
- [Editing](/guide/editing): inline editing, events, and read-only behavior.
- [Understanding Viewports](/guide/viewports): physical vs virtual indexes, pinned areas, and event coordinates.
- [Programmatic Grid Control](/guide/programmatic-control): methods such as `setDataAt`, `setCellEdit`, and `scrollToRow`.
- [Advanced Configuration](/guide/advanced-configuration): `columnTypes`, `rowDefinitions`, `trimmedRows`, `additionalData`, and plugin-oriented hooks.

## Framework guides

If you are integrating RevoGrid into an application framework, start with the wrapper guide for your stack:

- [TypeScript](/guide/ts/)
- [React](/guide/react/)
- [Angular](/guide/angular/)
- [Vue 3](/guide/vue3/)
- [Svelte](/guide/svelte/)

## Example

[![Edit RevoGrid - Quick Start](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/revogrid-60s-tlxgwn)

<ClientOnly>
  <iframe src="https://codesandbox.io/embed/tlxgwn?view=Editor+%2B+Preview&module=%2Findex.html&hidenavigation=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="DataGrid in 60s"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</ClientOnly>
