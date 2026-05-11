---
title: Vue 2 Tree Data Grid
description: Build a Vue 2 tree data grid with the free RevoGrid core tree pattern, then use RevoGrid Pro TreeDataPlugin for expandable hierarchy controls and sticky parent rows.
head:
  - - meta
    - name: keywords
      content: Vue 2 tree data grid, Vue 2 tree table, free Vue 2 tree grid, RevoGrid Vue 2 tree, hierarchical data grid Vue 2, expandable rows Vue data grid
---

# Vue 2 Tree Data Grid

Vue 2 uses the same free/core tree concept: your component prepares a flat row list with a `level` field, and RevoGrid renders indentation through a cell template.

::: info
The live core tree demo is available in the Vue 3 wrapper, but the grid data shape and cell-template approach are the same for Vue 2.
:::

<DemoWidgetFrame
  demo="core-tree"
  framework="vue"
  title="RevoGrid Vue core tree demo"
  minHeight="520"
/>

<!--@include: ../parts/_tree-data-core.md-->

## Vue 2 notes

- Build `treeData` in component data, computed properties, or a store.
- Replace the `source` array when the hierarchy changes.
- Use `$refs.grid.$el` only when you need direct access to the underlying Web Component.

```vue
<revo-grid
  ref="grid"
  :columns="columns"
  :source="treeData"
  readonly
/>
```

<!--@include: ../parts/_tree-data-pro.md-->
