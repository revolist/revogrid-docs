---
title: TypeScript Tree Data Grid
description: Build a TypeScript tree data grid with RevoGrid core cell templates, then upgrade to RevoGrid Pro TreeDataPlugin for expand/collapse controls, sticky parents, and hierarchy-aware behavior.
head:
  - - meta
    - name: keywords
      content: TypeScript tree data grid, RevoGrid TypeScript tree, free tree data grid, hierarchical data grid TypeScript, RevoGrid Pro TreeDataPlugin
---

# TypeScript Tree Data Grid

Use the TypeScript integration when you want direct control over the underlying `revo-grid` element. Start with the free/core tree pattern: flatten your hierarchy into display order and indent a cell template by row level.

<DemoWidgetFrame
  demo="core-tree"
  framework="ts"
  title="RevoGrid TypeScript core tree demo"
  minHeight="520"
/>

<!--@include: ../parts/_tree-data-core.md-->

## TypeScript notes

- Assign the flattened `source` directly to the grid element.
- Keep the hierarchy transformation in application code so it can be tested independently.
- Use normal grid APIs for sorting, editing, and virtualization because the output is still a flat row array.

```ts
grid.columns = columns;
grid.source = buildTreeData(inputData);
grid.readonly = true;
```

<!--@include: ../parts/_tree-data-pro.md-->
