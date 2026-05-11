---
title: Advanced Tree Data Grid with RevoGrid Pro
description: Build an advanced tree data grid with RevoGrid Pro, flat parent-child rows, expand and collapse controls, sticky parent rows, drag-and-drop, filtering, sorting, and virtualization across frameworks.
head:
  - - meta
    - name: keywords
      content: RevoGrid tree data, advanced tree data grid, JavaScript tree data grid, React tree grid, Vue tree grid, Angular tree grid, hierarchical data grid, tree table, expandable rows, RevoGrid Pro TreeDataPlugin
---

# Advanced Tree Data Grid

Tree Data is the grid pattern for hierarchical records that still need spreadsheet-grade behavior. A tree table should not force users to choose between hierarchy and data-grid features: they still need virtual scrolling, column resizing, sorting, filtering, row selection, editing, drag-and-drop, and controlled state.

<DemoWidgetFrame
  demo="tree"
  framework="ts"
  title="RevoGrid Pro Tree Data demo"
  minHeight="620"
/>

::: info Pro tree structure
RevoGrid Pro includes an advanced Tree Data plugin for parent-child row structures. It keeps your source data flat, computes hierarchy metadata internally, and renders the tree controls in the column marked with `tree: true`.
:::

## Why flat tree data works better

Deeply nested arrays are convenient for simple menus, but they become expensive in an editable data grid. Real applications need stable row IDs, row-level permissions, server updates, filtering, sorting, drag-and-drop, and partial refreshes. A flat tree model keeps each row addressable:

```ts
type WorkItem = {
  id: string;
  parentId: string | null;
  name: string;
  owner: string;
  status: 'Open' | 'Blocked' | 'Done';
};

const source: WorkItem[] = [
  { id: 'launch', parentId: null, name: 'Launch plan', owner: 'Maya', status: 'Open' },
  { id: 'design', parentId: 'launch', name: 'Design review', owner: 'Ivo', status: 'Done' },
  { id: 'docs', parentId: 'launch', name: 'Docs update', owner: 'Nia', status: 'Blocked' },
];
```

The hierarchy is defined by `id` and `parentId`, while the grid still receives a normal row array.

## Core setup

The Pro setup is the same across frameworks: register the plugins, mark the hierarchy column, pass a tree config, and keep the row source flat. React, Vue, Angular, Svelte, Stencil, and TypeScript examples differ only in how these objects are bound to the grid.

```ts
import {
  TreeDataPlugin,
  RowOrderPlugin,
  RowSelectPlugin,
  StickyCellsPlugin,
  TREE_EXPAND_ALL_EVENT,
  TREE_COLLAPSE_ALL_EVENT,
} from '@revolist/revogrid-pro';

const columns = [
  {
    prop: 'name',
    name: 'Task',
    size: 320,
    tree: true,
    rowSelect: true,
    rowDrag: true,
    sortable: true,
  },
  { prop: 'owner', name: 'Owner', size: 140 },
  { prop: 'status', name: 'Status', size: 140 },
];

const plugins = [
  TreeDataPlugin,
  RowOrderPlugin,
  RowSelectPlugin,
  StickyCellsPlugin,
];

const tree = {
  idField: 'id',
  parentIdField: 'parentId',
  rootParentId: null,
  expandedRowIds: new Set(['launch']),
  stickyParents: true,
};
```

Framework wrappers pass these values as props or bindings. Plain TypeScript assigns them to the `revo-grid` element:

```ts
grid.columns = columns;
grid.source = source;
grid.plugins = plugins;
grid.tree = tree;
```

## Expansion state

Use `expandedRowIds` when expansion should be restored from a route, local storage, or backend preference. Use `expandAll: true` for documentation, demos, or small trees where every branch should start open.

Toolbar actions can dispatch the public tree events:

```ts
grid.dispatchEvent(new CustomEvent(TREE_EXPAND_ALL_EVENT));
grid.dispatchEvent(new CustomEvent(TREE_COLLAPSE_ALL_EVENT));
```

## What the Pro plugin adds

RevoGrid Pro Tree Data is more than indentation. It is designed for advanced data grid tree structures:

| Capability | Why it matters |
| --- | --- |
| Flat source rows | Stable IDs, simple backend contracts, fast updates |
| `tree: true` column | Consistent expand controls and indentation in the data grid |
| Computed tree metadata | The original row objects stay clean |
| Expand and collapse events | External toolbars and saved state are straightforward |
| Row order integration | Dragging rows can update hierarchy relationships |
| Row selection integration | Parent and descendant selection can be coordinated |
| Sticky parent rows | Users keep branch context while scrolling long trees |
| Virtual rendering | Large hierarchies remain practical |

## Design recommendations

Use Tree Data when hierarchy is part of the record identity. Use row grouping when hierarchy is only a view over flat categories. Use master-detail rows when each parent opens a separate detail surface rather than a real branch of rows.

For production trees, keep the first tree column wide enough for indentation and labels, place status or numeric columns to the right, and avoid expensive templates in every tree cell. If the hierarchy can be very deep, set a clear maximum supported depth in your product UI and validate imported data before it reaches the grid.

## Framework examples

- [TypeScript Tree Data](/guide/ts/tree)
- [React Tree Data](/guide/react/tree)
- [Vue 3 Tree Data](/guide/vue3/tree)
- [Vue 2 Tree Data](/guide/vue2/tree)
- [Angular Tree Data](/guide/angular/tree)
- [Svelte Tree Data](/guide/svelte/tree)
- [Stencil Tree Data](/guide/stencil/tree)
- [TanStack Tree Data](/guide/tanstack/tree)
