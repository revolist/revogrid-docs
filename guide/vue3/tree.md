---
title: Vue 3 Tree Data Grid
description: Build a Vue 3 tree data grid with the free RevoGrid core tree pattern, then upgrade to RevoGrid Pro TreeDataPlugin for expandable hierarchy controls and sticky parent rows.
head:
  - - meta
    - name: keywords
      content: Vue 3 tree data grid, Vue tree table, free Vue tree grid, RevoGrid Vue tree, RevoGrid Vue TreeDataPlugin, expandable rows Vue data grid
---

# Vue 3 Tree Data Grid

Vue 3 applications can start with the free/core tree pattern by deriving a flat `treeData` array and rendering indentation through a cell template.

<DemoWidgetFrame
  demo="core-tree"
  framework="vue"
  title="RevoGrid Vue 3 core tree demo"
  minHeight="520"
/>

<!--@include: ../parts/_tree-data-core.md-->

## Vue 3 notes

- Store the input hierarchy in a `ref` or `shallowRef`.
- Use `computed` for flattened tree rows when the source changes.
- Use the Vue wrapper as usual; the core tree output is just a flat `source`.

```vue
<template>
  <VGrid
    :columns="columns"
    :source="treeData"
    readonly
    hide-attribution
  />
</template>
```

<!--@include: ../parts/_tree-data-pro.md-->
