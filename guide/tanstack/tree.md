---
title: TanStack Tree Data Grid
description: Combine TanStack state management with the free RevoGrid core tree pattern, then use RevoGrid Pro TreeDataPlugin for expandable hierarchy controls and sticky parent rows.
head:
  - - meta
    - name: keywords
      content: TanStack tree data grid, TanStack tree table, free tree data grid, RevoGrid TreeDataPlugin, hierarchical data grid, expandable rows data grid
---

# TanStack Tree Data Grid

TanStack can own query, filter, sorting, and expansion state while RevoGrid renders the virtualized grid surface. Start with the free/core tree pattern by deriving a flat display list from TanStack-managed rows.

::: info
Tree rendering is still handled by RevoGrid. TanStack can own the application state around the tree, while RevoGrid receives a flat `source` and renders the cells.
:::

<!--@include: ../parts/_tree-data-core.md-->

## TanStack notes

- Keep row IDs and parent IDs stable in your TanStack data model.
- Derive the flattened tree rows from TanStack state.
- Persist custom expansion state beside table filters, sorting, or query state if you build free expand/collapse controls.
- Pass RevoGrid a flat `source`; do not render nested row components inside the grid.

```ts
const treeData = buildTreeData(rowsFromQuery);
```

<!--@include: ../parts/_tree-data-pro.md-->
