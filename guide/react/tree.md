---
title: React Tree Data Grid
description: Build a React tree data grid with the free RevoGrid core tree pattern, then upgrade to RevoGrid Pro TreeDataPlugin for expandable hierarchy controls, sticky parents, and row integration.
head:
  - - meta
    - name: keywords
      content: React tree data grid, React tree table, free React tree grid, RevoGrid React tree, RevoGrid React TreeDataPlugin, expandable rows React data grid
---

# React Tree Data Grid

React applications can start with a free/core tree table by deriving a flat display list in state and rendering indentation through a React cell template.

<DemoWidgetFrame
  demo="core-tree"
  framework="react"
  title="RevoGrid React core tree demo"
  minHeight="520"
/>

<!--@include: ../parts/_tree-data-core.md-->

## React notes

- Use `useMemo` for columns and derived tree rows when input data is stable.
- Use a React cell template for indentation in the core version.
- Keep expand/collapse state in React if you add your own free tree controls.

```tsx
<RevoGrid
  columns={columns}
  source={treeData}
  readonly
  canFocus={false}
  hideAttribution
/>
```

<!--@include: ../parts/_tree-data-pro.md-->
