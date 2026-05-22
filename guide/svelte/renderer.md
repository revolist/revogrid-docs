---
title: Svelte Data Grid Cell Template
description: Render native Svelte components inside RevoGrid cells with the Svelte Data Grid wrapper.
head:
  - - meta
    - name: keywords
      content: RevoGrid, Svelte, Svelte data grid cell template, Svelte component renderer, custom cell rendering, Svelte grid components
---

# Svelte Data Grid Cell Template

<!--@include: ../parts/_renderer.header.md-->

Use `Template(Component)` from `@revolist/svelte-datagrid` to render a Svelte component inside a `cellTemplate`.

::: tip
`Template(Component)` is explicit by design. Native RevoGrid templates like `cellTemplate(h, props)` are still supported, and compiled Svelte components are also functions at runtime, so raw `cellTemplate: Component` is not auto-detected.
:::

## Basic Setup

```svelte
<!--@include: ../../demo/svelte/svelte.cell.svelte-->
```

## Cell Component

```svelte
<!--@include: ../../demo/svelte/svelte.cell.template.svelte-->
```

The Svelte component receives flat cell props such as `value`, `model`, `prop`, `rowIndex`, `colIndex`, `column`, `data`, `providers`, and `addition`.

<!--@include: ../parts/_renderer.why.md-->
