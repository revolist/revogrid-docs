---
title: Stencil Tree Data Grid
description: Build a Stencil tree data grid with the free RevoGrid core tree pattern, then use RevoGrid Pro TreeDataPlugin for expandable hierarchy controls and sticky parent rows.
head:
  - - meta
    - name: keywords
      content: Stencil tree data grid, Stencil tree table, free Stencil tree grid, RevoGrid Stencil tree, hierarchical data grid Stencil, expandable rows Web Component grid
---

# Stencil Tree Data Grid

Stencil can use the free/core tree pattern by assigning a flattened `source` and a cell template to the underlying `revo-grid` Web Component.

::: info
The shared live core tree demo is currently published for TypeScript, React, Vue 3, and Angular. Stencil uses the same Web Component properties as the TypeScript setup.
:::

<!--@include: ../parts/_tree-data-core.md-->

## Stencil notes

- Keep a reference to `HTMLRevoGridElement`.
- Assign `columns` and the flattened `source` after the grid element is available.
- Use Stencil state or stores to rebuild `treeData` when the hierarchy changes.

```tsx
<revo-grid
  ref={(el) => {
    this.grid = el;
  }}
/>
```

<!--@include: ../parts/_tree-data-pro.md-->
