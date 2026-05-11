---
title: Svelte Tree Data Grid
description: Build a Svelte tree data grid with the free RevoGrid core tree pattern, then use RevoGrid Pro TreeDataPlugin for expandable hierarchy controls and sticky parent rows.
head:
  - - meta
    - name: keywords
      content: Svelte tree data grid, Svelte tree table, free Svelte tree grid, RevoGrid Svelte tree, Svelte hierarchical data grid, expandable rows Svelte data grid
---

# Svelte Tree Data Grid

Svelte can use the free/core tree pattern with the same RevoGrid Web Component API: flatten your hierarchy, keep a `level` field, and render indentation in a cell template.

::: info
The shared live core tree demo is currently published for TypeScript, React, Vue 3, and Angular. Svelte uses the same flat `source` and cell-template approach.
:::

<!--@include: ../parts/_tree-data-core.md-->

## Svelte notes

- Keep the input hierarchy and flattened `treeData` in component state or a store.
- Reassign `treeData` when the hierarchy changes.
- In SvelteKit, render RevoGrid only on the client, as described in the main Svelte guide.

```svelte
<RevoGrid
  columns={columns}
  source={treeData}
  readonly
/>
```

<!--@include: ../parts/_tree-data-pro.md-->
