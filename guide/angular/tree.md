---
title: Angular Tree Data Grid
description: Build an Angular tree data grid with the free RevoGrid core tree pattern, then upgrade to RevoGrid Pro TreeDataPlugin for expandable hierarchy controls, sticky parents, and drag-and-drop.
head:
  - - meta
    - name: keywords
      content: Angular tree data grid, Angular tree table, free Angular tree grid, RevoGrid Angular tree, RevoGrid Angular TreeDataPlugin, expandable rows Angular data grid
---

# Angular Tree Data Grid

Angular applications can start with the free/core tree pattern by preparing a flat `source` array in the component and rendering indentation through a cell template.

::: info
The core tree pattern does not require Pro plugins. The current live `core-tree` widget is published for TypeScript, React, and Vue; Angular uses the same flattened `source` and cell-template approach.
:::

<!--@include: ../parts/_tree-data-core.md-->

## Angular notes

- Build `source` from your component, service, signal, or store.
- Bind `[columns]` and `[source]` normally; no Pro plugin is needed for the core tree.
- Keep the tree transformation separate from the component template.

```ts
<revo-grid
  [columns]="columns"
  [source]="treeData"
  [readonly]="true"
  [canFocus]="false"
></revo-grid>
```

<!--@include: ../parts/_tree-data-pro.md-->
