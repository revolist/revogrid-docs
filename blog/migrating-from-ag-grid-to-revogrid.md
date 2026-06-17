---
title: "Migrating from AG Grid to RevoGrid"
description: "A practical AG Grid to RevoGrid migration guide for JavaScript, React, Vue, Angular, and Svelte teams moving rowData, columnDefs, renderers, editors, events, filtering, sorting, selection, and advanced grid workflows."
outline: deep
date: 2026-06-17
author: RevoGrid Team
category: Data Grid
tags:
  - Migration
  - AG Grid
  - RevoGrid
  - JavaScript
  - Data Grid
image: /blog/aggrid.png
imageAlt: RevoGrid JavaScript data grid migration preview
head:
  - - meta
    - name: keywords
      content: migrate from AG Grid to RevoGrid, AG Grid migration, AG Grid alternative, RevoGrid migration guide, JavaScript data grid migration, React data grid migration, Vue data grid migration, Angular data grid migration, Svelte data grid, columnDefs rowData source columns
  - - meta
    - property: og:title
      content: Migrating from AG Grid to RevoGrid
  - - meta
    - property: og:description
      content: A practical developer guide for moving from AG Grid to RevoGrid with API mapping, JavaScript and framework examples, migration checklist, and common pitfalls.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://rv-grid.com/blog/migrating-from-ag-grid-to-revogrid
  - - meta
    - property: og:image
      content: https://rv-grid.com/blog/daragrid.png
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - link
    - rel: canonical
      href: https://rv-grid.com/blog/migrating-from-ag-grid-to-revogrid
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Migrating from AG Grid to RevoGrid",
        "description": "A practical AG Grid to RevoGrid migration guide for JavaScript, React, Vue, Angular, and Svelte teams moving rowData, columnDefs, renderers, editors, events, filtering, sorting, selection, and advanced grid workflows.",
        "author": {
          "@type": "Organization",
          "name": "RevoGrid"
        },
        "publisher": {
          "@type": "Organization",
          "name": "RevoGrid",
          "url": "https://rv-grid.com/"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://rv-grid.com/blog/migrating-from-ag-grid-to-revogrid"
        },
        "datePublished": "2026-06-17",
        "dateModified": "2026-06-17"
      }
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can RevoGrid replace AG Grid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RevoGrid can replace AG Grid in many JavaScript, React, Vue, Angular, Svelte, and Web Component applications that need virtualized rows and columns, editing, sorting, filtering, custom cells, events, and advanced Pro workflows. Highly AG Grid-specific Enterprise implementations should be migrated workflow by workflow."
            }
          },
          {
            "@type": "Question",
            "name": "What is the biggest API difference when migrating from AG Grid to RevoGrid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The biggest first step is mapping AG Grid rowData and columnDefs to RevoGrid source and columns. AG Grid field becomes RevoGrid prop, while headerName usually becomes name."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to rewrite my data model for RevoGrid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually no. Most AG Grid rowData arrays can become RevoGrid source arrays directly. The main work is adapting column definitions, renderers, editors, events, selection behavior, and advanced grid features."
            }
          },
          {
            "@type": "Question",
            "name": "Should I migrate custom renderers first?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The safest migration is to render plain data first, then add formatting, custom cell templates, framework renderers, and editors after the basic rows, columns, sizing, and scrolling behavior are correct."
            }
          }
        ]
      }
---

# Migrating from AG Grid to RevoGrid

Migrating from AG Grid to RevoGrid is usually a migration of **grid configuration and user workflows**, not a rewrite of your business data.

If your current AG Grid implementation uses plain row objects and column definitions, your first RevoGrid version can often keep the same row array, map `columnDefs` to `columns`, and replace `rowData` with `source`. After that, migrate editing, validation, renderers, filtering, sorting, selection, export, and advanced grid workflows in controlled steps.

This guide is written for developers who already have an AG Grid screen and want a practical migration path to [RevoGrid](/), a high-performance JavaScript data grid with an MIT-licensed core, Web Component architecture, framework wrappers, virtual rows and columns, editing, custom cells, and a path into [RevoGrid Pro](/pro/) features.

If you are still comparing vendors, start with the [AG Grid Alternative](/compare/ag-grid-alternative/) page. If you are ready to port code, use this migration guide.

::: tip Migration principle
Do not try to make RevoGrid look like AG Grid internally. Keep the same product workflow, but map it to RevoGrid's API, event model, and Web Component foundation.
:::

## What changes during migration?

The first migration layer is simple:

| AG Grid | RevoGrid | Meaning |
| --- | --- | --- |
| `rowData` | `source` | The data array rendered by the grid. |
| `columnDefs` | `columns` | The column model. |
| `field` | `prop` | The row key used by a column. |
| `headerName` | `name` | The visible column header. |
| `gridOptions` | Element props / wrapper props | Configuration passed to `<revo-grid>` or a framework wrapper. |
| `createGrid(element, gridOptions)` | `<revo-grid>` / framework wrapper | RevoGrid is rendered as a Web Component or through a wrapper. |

The second migration layer is where most real work happens:

| Workflow | Why it needs attention |
| --- | --- |
| Custom renderers | Component contracts differ. Port behavior, not renderer classes. |
| Custom editors | Editor registration and lifecycle hooks differ. |
| Value formatting | Decide whether formatting belongs in a template, parser, or column type. |
| Editing rules | AG Grid often enables editing with `editable`; RevoGrid locks columns with `readonly`. |
| Events | AG Grid callback props become RevoGrid DOM custom events. |
| Selection and clipboard | Spreadsheet-like workflows should be tested as user journeys. |
| Enterprise workflows | Pivot, grouping, tree, export, server-side data, and tool panels should be migrated one by one. |

## The migration in one table

| AG Grid concept | RevoGrid concept | Migration note |
| --- | --- | --- |
| `rowData` | `source` | Usually the same array of row objects. |
| `columnDefs` | `columns` | Map `field` to `prop`, and `headerName` to `name`. |
| `defaultColDef` | Shared column normalization or `columnTypes` | Use reusable RevoGrid column types for repeated sizing, formatting, parsing, and editor behavior. |
| `gridOptions` | Element props or wrapper props | Assign properties to `<revo-grid>` or pass props through React, Vue, Angular, or Svelte. |
| `createGrid(element, gridOptions)` | `<revo-grid>` element | RevoGrid is a Web Component; initialize it by defining the custom element and assigning props. |
| `field` | `prop` | `prop` is the row key used by a RevoGrid column. |
| `headerName` | `name` | `name` controls the displayed column header. |
| `width` | `size` | Column width in pixels. |
| `minWidth` | `minSize` | Minimum column width. |
| `maxWidth` | `maxSize` | Maximum column width. |
| `pinned: 'left'` | `pin: 'colPinStart'` | Use RevoGrid column pinning semantics. |
| `pinned: 'right'` | `pin: 'colPinEnd'` | Use for right-side pinned columns. |
| `editable: false` | `readonly: true` | Audit editability carefully during migration. |
| `valueFormatter` | `cellTemplate`, `cellParser`, or `columnTypes` | Keep raw row data clean and format display in the column layer. |
| `valueGetter` | Derived row field, custom cell logic, or parser | Prefer precomputed values for heavy calculations. |
| `valueSetter` | `beforeedit` / `afteredit` plus app state update | Keep business writes in your application state layer when possible. |
| `cellRenderer` | `cellTemplate` or framework renderer | RevoGrid supports custom cell rendering and framework-specific renderers. |
| `cellEditor` | `editors` and column editor config | Register editors and assign them to columns or column types. |
| `sortable` | `sortable` | RevoGrid can sort columns with `sortable`, `order`, and optional `cellCompare`. |
| `filter` | `filter` grid prop plus column filter config | Enable filtering at grid level, then configure columns. |
| `onCellValueChanged` | `afteredit` | Use edit lifecycle events to sync application state. |
| `onCellClicked` | Cell/focus events | Listen to RevoGrid DOM custom events. |
| `api` / `columnApi` | Grid element public methods | Use the underlying grid element for methods such as `setCellEdit`, `scrollToRow`, and `getVisibleSource`. |
| AG Grid modules | RevoGrid plugins and Pro modules | Migrate advanced features by workflow, not by trying to match every module name. |

The most important change is mental: AG Grid is commonly configured through one large `gridOptions` object. RevoGrid can be configured directly as a browser-native element:

```ts
const grid = document.querySelector('revo-grid');

if (grid) {
  grid.columns = columns;
  grid.source = rows;
  grid.filter = true;
}
```

Framework wrappers use the same core model. React, Vue, Angular, and Svelte pass `columns` and `source` into the same Web Component foundation.

## Recommended migration strategy

A successful grid migration should avoid a large rewrite. Treat it as a set of small, testable layers.

| Phase | Goal | Output |
| --- | --- | --- |
| 1. Inventory | Understand how AG Grid is used today. | List of columns, renderers, editors, events, selection rules, export flows, and Enterprise features. |
| 2. Data and columns | Render the same data in RevoGrid. | `source` and `columns` working without custom UI. |
| 3. Sizing and layout | Match viewport, pinned columns, column widths, row height, and theme basics. | Grid looks structurally correct. |
| 4. Editing and validation | Reconnect user edits to application state. | `beforeedit` / `afteredit` handlers and locked columns. |
| 5. Formatting and renderers | Port custom display logic. | Cell templates, framework renderers, and reusable column types. |
| 6. Filtering and sorting | Rebuild search and ordering behavior. | Built-in or custom filtering/sorting behavior. |
| 7. Selection and clipboard | Recreate spreadsheet-like UX. | Tested keyboard, range, copy/paste, and selection flows. |
| 8. Advanced workflows | Move grouping, tree, pivot, export, server-side, Gantt, or scheduler features. | One workflow migrated at a time. |
| 9. Acceptance tests | Prove behavior with real user journeys. | Regression tests before removing AG Grid. |

::: warning Do not start with renderers
If the first migration commit includes every renderer, editor, filter, and Enterprise workflow, it becomes hard to debug. Start with plain text cells. Once rows, columns, sizing, and scrolling work, add custom behavior back.
:::

## Step 1: Move rows from `rowData` to `source`

AG Grid examples typically start with `rowData`:

```ts
const rowData = [
  { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
  { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
  { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
];
```

In RevoGrid, the equivalent property is `source`:

```ts
const source = [
  { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
  { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
  { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
];
```

For most client-side grids, this is a rename. You do not need to reshape records just because you are changing grid libraries.

You should review the row model only if your AG Grid implementation depends heavily on:

- row nodes;
- transaction APIs;
- generated group rows;
- server-side row models;
- tree paths;
- value getters that derive fields at render time;
- row IDs used by selection, update, or backend synchronization.

Those should be migrated as explicit workflows instead of hidden inside the first rendering pass.

### Keep your domain model separate

A grid migration is a good time to separate **domain data** from **grid state**.

Good domain row:

```ts
const order = {
  id: 'ORD-1001',
  customer: 'Acme Manufacturing',
  status: 'approved',
  total: 12800,
  currency: 'USD',
};
```

Grid state that should usually live outside the row:

```ts
const gridState = {
  selectedOrderIds: ['ORD-1001'],
  sort: [{ prop: 'total', order: 'desc' }],
  filters: {
    status: { type: 'eq', value: 'approved' },
  },
};
```

This makes the migration easier because RevoGrid receives clean `source` data while your application remains responsible for persistence, permissions, and workflow state.

## Step 2: Move `columnDefs` to `columns`

AG Grid column definitions often look like this:

```ts
const columnDefs = [
  { field: 'make', headerName: 'Make', sortable: true, filter: true },
  { field: 'model', headerName: 'Model', sortable: true },
  { field: 'price', headerName: 'Price', editable: true },
  { field: 'electric', headerName: 'Electric' },
];
```

The RevoGrid version uses `prop` and `name`:

```ts
const columns = [
  { prop: 'make', name: 'Make', sortable: true, filter: true },
  { prop: 'model', name: 'Model', sortable: true },
  { prop: 'price', name: 'Price' },
  { prop: 'electric', name: 'Electric' },
];
```

Use this as the first pass:

| AG Grid column property | RevoGrid column property | Notes |
| --- | --- | --- |
| `field` | `prop` | Required for binding a column to a row property. |
| `headerName` | `name` | Header label. |
| `width` | `size` | Column width in pixels. |
| `minWidth` | `minSize` | Minimum column width. |
| `maxWidth` | `maxSize` | Maximum column width. |
| `pinned: 'left'` | `pin: 'colPinStart'` | Left/start pinned viewport. |
| `pinned: 'right'` | `pin: 'colPinEnd'` | Right/end pinned viewport. |
| `editable: false` | `readonly: true` | Use `readonly` to lock a column. |
| `sortable: true` | `sortable: true` | Then use `order` for default sort if needed. |
| `filter: true` | `filter: true` | Also enable filtering on the grid. |
| `cellRenderer` | `cellTemplate` or framework renderer | Port rendering logic after the base grid works. |
| `valueFormatter` | `cellTemplate` or column type | Keep formatting near the column. |

Start by migrating only field binding, labels, sizes, pinning, sorting flags, filtering flags, and read-only rules. Then port renderers and editors once the basic grid is visible.

### A small column conversion helper

For large grids, create a temporary converter that handles the mechanical part of the migration. Keep it intentionally limited. It should not try to port renderers, editors, value getters, or Enterprise-only behavior automatically.

```ts
type AgColumnDefLike = {
  field?: string;
  headerName?: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  pinned?: 'left' | 'right' | boolean;
  editable?: boolean;
  sortable?: boolean;
  filter?: boolean | string;
};

export function toRevoColumn(col: AgColumnDefLike) {
  const next: Record<string, unknown> = {
    prop: col.field,
    name: col.headerName ?? col.field,
  };

  if (col.width) next.size = col.width;
  if (col.minWidth) next.minSize = col.minWidth;
  if (col.maxWidth) next.maxSize = col.maxWidth;

  if (col.pinned === 'left') next.pin = 'colPinStart';
  if (col.pinned === 'right') next.pin = 'colPinEnd';

  if (col.editable === false) next.readonly = true;
  if (col.sortable) next.sortable = true;

  if (col.filter === false) next.filter = false;
  if (col.filter === true) next.filter = true;
  if (col.filter === 'agNumberColumnFilter') next.filter = 'number';

  return next;
}
```

Use this helper to get the first screen running. Then replace the generated columns with a clean, explicit RevoGrid column model.

::: warning Audit editability
In many AG Grid screens, columns are read-only unless `editable: true` is configured. In RevoGrid, make your intended editing policy explicit. For system fields, IDs, calculated totals, and permission-controlled cells, set `readonly: true` or block writes in `beforeedit`.
:::

## Step 3: Replace grid creation

AG Grid JavaScript setup commonly creates a grid from a container element and `gridOptions`.

RevoGrid uses a custom element:

```html
<revo-grid style="height: 500px"></revo-grid>
```

Then assign grid properties:

```ts
import { defineCustomElements } from '@revolist/revogrid/loader';

defineCustomElements();

const grid = document.querySelector('revo-grid');

if (grid) {
  grid.columns = [
    { prop: 'make', name: 'Make' },
    { prop: 'model', name: 'Model' },
    { prop: 'price', name: 'Price' },
    { prop: 'electric', name: 'Electric' },
  ];

  grid.source = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ];
}
```

Keep the element height explicit. Like other virtualized grids, RevoGrid needs a real viewport size so it can calculate visible rows and columns.

For setup details, use the [JavaScript quick start](/guide/) and [installation guide](/guide/installation).

## Step 4: Migrate framework wrappers

The RevoGrid API stays close across frameworks because the grid foundation is the same Web Component.

### React

AG Grid React code often centralizes configuration in `gridOptions` or `<AgGridReact>` props. With RevoGrid, pass `columns` and `source` to the React wrapper:

```tsx
import { RevoGrid } from '@revolist/react-datagrid';
import { useMemo, useState } from 'react';

export default function OrdersGrid() {
  const [source] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950 },
    { make: 'Ford', model: 'F-Series', price: 33850 },
  ]);

  const columns = useMemo(() => [
    { prop: 'make', name: 'Make' },
    { prop: 'model', name: 'Model' },
    { prop: 'price', name: 'Price' },
  ], []);

  return <RevoGrid columns={columns} source={source} />;
}
```

Keep `columns` stable with `useMemo` unless the column model really changes. This avoids unnecessary wrapper updates and matches the [React Data Grid](/guide/react/) guide.

### Vue 3

Vue apps can bind the same `columns` and `source` props:

```vue
<template>
  <RevoGrid :columns="columns" :source="source" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RevoGrid from '@revolist/vue3-datagrid';

const source = ref([
  { make: 'Tesla', model: 'Model Y', price: 64950 },
  { make: 'Ford', model: 'F-Series', price: 33850 },
]);

const columns = ref([
  { prop: 'make', name: 'Make' },
  { prop: 'model', name: 'Model' },
  { prop: 'price', name: 'Price' },
]);
</script>
```

Use the [Vue 3 guide](/guide/vue3/) for Composition API and renderer examples.

### Angular

Angular bindings use property binding:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'orders-grid',
  template: `<revo-grid [columns]="columns" [source]="source"></revo-grid>`,
})
export class OrdersGridComponent {
  source = [
    { make: 'Tesla', model: 'Model Y', price: 64950 },
    { make: 'Ford', model: 'F-Series', price: 33850 },
  ];

  columns = [
    { prop: 'make', name: 'Make' },
    { prop: 'model', name: 'Model' },
    { prop: 'price', name: 'Price' },
  ];
}
```

Use the [Angular Data Grid](/guide/angular/) guide for wrapper setup and framework renderer patterns.

### Svelte

Svelte can pass the same props directly:

```svelte
<script lang="ts">
  import { RevoGrid } from '@revolist/svelte-datagrid';

  const source = [
    { make: 'Tesla', model: 'Model Y', price: 64950 },
    { make: 'Ford', model: 'F-Series', price: 33850 },
  ];

  const columns = [
    { prop: 'make', name: 'Make' },
    { prop: 'model', name: 'Model' },
    { prop: 'price', name: 'Price' },
  ];
</script>

<RevoGrid {columns} {source} />
```

Use the [Svelte Data Grid](/guide/svelte/) guide for installation and framework details.

## Step 5: Migrate events and application state

AG Grid callbacks are often configured as `gridOptions` functions, such as `onCellValueChanged`.

RevoGrid emits DOM custom events from the grid element. The most common migration is to replace AG Grid edit callbacks with RevoGrid edit lifecycle events:

```ts
grid.addEventListener('afteredit', (event) => {
  const { prop, val, model } = event.detail;

  console.log('Edited column', prop);
  console.log('New value', val);
  console.log('Row model', model);
});
```

Use these event groups as a starting point:

| Workflow | AG Grid example | RevoGrid events to inspect |
| --- | --- | --- |
| Start editing | `onCellEditingStarted` | `beforeeditstart` |
| Validate or cancel an edit | `valueSetter`, validation callback, app logic | `beforeedit` |
| Sync committed edits | `onCellValueChanged` | `afteredit` |
| Filter changes | Filter events | `beforefilterapply` |
| Source replacement | Row data update / transaction flows | `beforesourceset`, `aftersourceset` |
| Sorting | Sort events | `beforesorting`, `beforesortingapply`, `aftersortingapply` |
| Focus and selection | Cell focus / selection callbacks | Focus and selection events from the grid API docs |

For more detail, use [Event Patterns and Lifecycles](/guide/events-guide), [Editing](/guide/editing), and [Programmatic Grid Control](/guide/programmatic-control).

### Keep writes in one place

A common migration bug is updating data twice: once inside the grid and once inside application state.

Pick one clear owner:

```ts
grid.addEventListener('afteredit', (event) => {
  const { model, prop, val } = event.detail;

  updateOrderInStore({
    id: model.id,
    changes: {
      [prop]: val,
    },
  });
});
```

If your application uses Redux, Zustand, Pinia, RxJS, Vuex, NgRx, or another state layer, treat RevoGrid events as UI events that dispatch state updates. That keeps the migration easier to test.

## Step 6: Migrate renderers and formatters

Do not copy AG Grid renderer classes or component contracts directly. RevoGrid renderers receive RevoGrid cell props, so the clean path is:

1. Keep raw data in `source`.
2. Move display-only formatting into a cell template or column type.
3. Move interactive UI into a framework renderer only when the cell really needs framework state.
4. Keep expensive calculations out of per-cell render functions.

### Replace simple `valueFormatter` with `cellTemplate`

AG Grid formatter example:

```ts
const columnDefs = [
  {
    field: 'price',
    headerName: 'Price',
    valueFormatter: (params) => `$${Number(params.value).toLocaleString()}`,
  },
];
```

RevoGrid cell template version:

```ts
const currencyCell = (h, props) => {
  const value = Number(props.model[props.prop] ?? 0);

  return h(
    'span',
    { class: { 'cell-money': true } },
    `$${value.toLocaleString()}`
  );
};

grid.columns = [
  { prop: 'product', name: 'Product' },
  { prop: 'price', name: 'Price', cellTemplate: currencyCell },
];
```

### Use `columnTypes` for repeated formats

If several columns use the same formatter, parser, editor, or sizing rules, create a reusable column type:

```ts
grid.columnTypes = {
  money: {
    size: 140,
    cellTemplate: (h, props) => {
      const value = Number(props.model[props.prop] ?? 0);

      return h(
        'span',
        { class: { 'money-cell': true, 'money-negative': value < 0 } },
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(value)
      );
    },
    cellParser: (model, column) => Number(model[column.prop] ?? 0),
  },
};

grid.columns = [
  { prop: 'revenue', name: 'Revenue', columnType: 'money' },
  { prop: 'cost', name: 'Cost', columnType: 'money' },
];
```

This is usually cleaner than repeating the same `cellTemplate` across many columns.

### Renderer migration checklist

For each AG Grid renderer, ask:

| Question | Recommended RevoGrid path |
| --- | --- |
| Is it only text formatting? | Use `cellTemplate` or `columnTypes`. |
| Does it display status, badges, icons, or links? | Use `cellTemplate`; keep it lightweight. |
| Does it need React/Vue/Angular/Svelte state? | Use the framework-specific renderer guide. |
| Does it open menus, dialogs, or tooltips? | Keep the cell renderer small and delegate state to the application. |
| Does it calculate a derived value? | Prefer a derived row field or parser if the calculation is reused. |
| Does it render unsafe HTML? | Escape user-provided content before rendering. |

Use native cell templates for simple formatting. Use framework renderers when you need React, Vue, Angular, or Svelte components inside cells. The [Cell Renderer](/guide/cell/renderer), [React Cell Template](/guide/react/renderer), and [Vue renderer examples](/guide/vue3/renderer) are the best next pages.

## Step 7: Migrate editing

AG Grid commonly uses `editable`, `cellEditor`, value parsers, and value setters.

In RevoGrid:

- `readonly` can lock the whole grid, a specific column, or individual cells through a function;
- `editors` registers custom editor implementations;
- `beforeeditstart` can stop the editor from opening;
- `beforeedit` can validate, cancel, or rewrite edits before commit;
- `afteredit` can synchronize committed changes with application state.

```ts
grid.columns = [
  { prop: 'id', name: 'ID', readonly: true },
  { prop: 'name', name: 'Name' },
  { prop: 'price', name: 'Price' },
];

grid.addEventListener('beforeedit', (event) => {
  if (event.detail.prop === 'price' && Number(event.detail.val) < 0) {
    event.preventDefault();
  }
});
```

### Port conditional edit rules

AG Grid can use `editable` as a callback to decide whether a cell can enter edit mode:

```ts
const columnDefs = [
  {
    field: 'price',
    editable: (params) => params.data.status !== 'locked',
  },
];
```

In RevoGrid, the closest column-level equivalent is `readonly` as a function. Because the meanings are inverted, return `true` when the cell should be locked:

```ts
function canEditPrice(row) {
  return row.status !== 'locked';
}

grid.columns = [
  {
    prop: 'price',
    name: 'Price',
    readonly: ({ model }) => !canEditPrice(model),
  },
];
```

Use lifecycle events when the rule depends on transient application state, when you need to emit diagnostics, or when the edit should be blocked as part of a broader workflow:

```ts
grid.addEventListener('beforeeditstart', (event) => {
  const { model, prop } = event.detail;

  if (prop === 'price' && !canEditPrice(model)) {
    event.preventDefault();
  }
});
```

For most AG Grid `editable(params)` migrations, prefer column `readonly(params)` first. Add `beforeeditstart`, `beforeedit`, or `afteredit` when you need lifecycle control in addition to the static editability rule.

### Custom editors

Do not port AG Grid editor components one-to-one. First define the product behavior:

- What value type is stored?
- What label is displayed?
- Is the editor free text, select, date, autocomplete, lookup, or complex popup?
- Does it validate locally or through the backend?
- Should the value apply immediately or only after confirmation?

Then implement the RevoGrid editor or choose a reusable column type. Use [RevoGrid Editing](/guide/editing) when migrating edit rules, custom editors, validation, and programmatic edit workflows.

## Step 8: Migrate filtering, sorting, and selection

Start with the simplest RevoGrid equivalents, then rebuild advanced behavior.

### Filtering

Enable filtering at the grid level:

```ts
grid.filter = true;
```

Then configure columns:

```ts
grid.columns = [
  { prop: 'name', name: 'Name', filter: 'string' },
  { prop: 'price', name: 'Price', filter: 'number' },
  { prop: 'internalId', name: 'Internal ID', filter: false },
];
```

For saved filter state, custom filter operations, and multi-filter behavior, use [RevoGrid Filtering](/guide/filters).

### Sorting

RevoGrid supports sorting through column configuration:

```ts
grid.columns = [
  { prop: 'name', name: 'Name', sortable: true, order: 'asc' },
  { prop: 'price', name: 'Price', sortable: true },
];
```

If your AG Grid implementation uses custom comparators, migrate default sorting first, then add custom compare logic only where product behavior requires it.

```ts
grid.columns = [
  {
    prop: 'priority',
    name: 'Priority',
    sortable: true,
    cellCompare: (prop, a, b) => {
      const order = { critical: 3, high: 2, normal: 1, low: 0 };
      return (order[a[prop]] ?? 0) - (order[b[prop]] ?? 0);
    },
  },
];
```

Use [Sorting](/guide/sorting) for the current RevoGrid sorting API.

### Selection

AG Grid row selection and range selection can map to different RevoGrid workflows depending on your product:

- row selection for choosing records;
- cell/range selection for spreadsheet-like operations;
- multi-range selection and range tools in Pro workflows;
- keyboard navigation and clipboard workflows;
- selected-row actions in toolbars or context menus.

Do not treat selection as a simple prop rename if users rely on keyboard behavior, copy/paste, range handles, or custom selection summaries. Test those workflows explicitly.

## Step 9: Replace AG Grid Enterprise workflows intentionally

If your AG Grid implementation uses Enterprise features, migrate by user workflow rather than by module name.

| Existing workflow | RevoGrid path |
| --- | --- |
| Large local datasets | Core virtual rows and columns. |
| Advanced filtering | Core filtering plus Pro filter workflows where needed. |
| Excel-like editing | Core editing plus Pro spreadsheet workflows. |
| Row grouping | Core grouping patterns or Pro grouping depending on UX. |
| Tree data | Core tree pattern or Pro TreeDataPlugin for richer hierarchy controls. |
| Pivot analytics | [RevoGrid Pivot](/pivot/) and Pivot docs. |
| Gantt or scheduling | [RevoGrid Gantt](/gantt/) and scheduler pages. |
| Excel import/export | RevoGrid Pro import/export workflows. |
| Audit history | RevoGrid Pro audit history. |
| Server-side data | Remote pagination, infinite scroll, server-side grouping, or Pivot server-side contracts. |
| Master-detail | RevoGrid master-detail workflows or custom row/detail layouts. |

This is usually where a migration becomes product-specific. Get the basic grid running first, then migrate each advanced workflow with a focused acceptance test.

### Example acceptance criteria for advanced workflows

For each advanced feature, write acceptance criteria in product language:

```md
Feature: Order grouping

- Users can group orders by customer.
- Group headers show customer name and order count.
- Group expand/collapse state is preserved when filters change.
- Sorting inside each group follows the selected date order.
- Export includes the visible grouped structure.
```

This is better than writing “replace AG Grid row grouping” because it describes the workflow your users care about.

## Step 10: Handle server-side and remote data carefully

Some AG Grid implementations use the grid as a client-side view over a remote dataset. Others rely heavily on AG Grid server-side row model behavior.

Before migration, classify your data strategy:

| Current behavior | Migration approach |
| --- | --- |
| Small/medium local array | Move directly to `source`. |
| Large local array | Move to `source`, then profile custom renderers and formatting. |
| Backend pagination | Keep pagination in the app and feed visible rows into RevoGrid. |
| Infinite loading | Keep a request/cache layer outside the grid and update `source` as pages load. |
| Remote filtering/sorting | Listen to grid events, send query to backend, replace `source`. |
| Server-side grouping or pivoting | Define a backend contract and migrate that workflow separately. |

Do not hide backend state inside cell renderers. Remote data is easier to maintain when request state, cache state, grid state, and row data are separate.

## Step 11: Theme and UX migration

After the data model works, review visual and interaction parity.

Check these items:

- grid height and responsive layout;
- row height;
- column widths and resizing;
- pinned columns;
- header labels and custom headers;
- hover and focus states;
- editable-cell indication;
- invalid-cell indication;
- empty state;
- loading state;
- toolbar actions;
- context menu actions;
- keyboard navigation;
- dark mode if your product supports it.

Do not aim for pixel-perfect parity with the old grid if the new grid can provide a cleaner UX. Aim for workflow parity first, then improve the UI.

## A minimal before and after

AG Grid:

```ts
const gridOptions = {
  rowData: [
    { make: 'Tesla', model: 'Model Y', price: 64950 },
    { make: 'Ford', model: 'F-Series', price: 33850 },
  ],
  columnDefs: [
    { field: 'make', headerName: 'Make' },
    { field: 'model', headerName: 'Model' },
    { field: 'price', headerName: 'Price' },
  ],
};

const element = document.querySelector('#myGrid');
agGrid.createGrid(element, gridOptions);
```

RevoGrid:

```ts
const grid = document.querySelector('revo-grid');

if (grid) {
  grid.source = [
    { make: 'Tesla', model: 'Model Y', price: 64950 },
    { make: 'Ford', model: 'F-Series', price: 33850 },
  ];

  grid.columns = [
    { prop: 'make', name: 'Make' },
    { prop: 'model', name: 'Model' },
    { prop: 'price', name: 'Price' },
  ];
}
```

That is the right first migration target. After that, add back the workflows that make your grid valuable: editing, validation, filtering, sorting, custom cells, selection, export, and advanced modules.

## Suggested migration checklist

Use this order to keep the migration controlled:

1. Create a RevoGrid screen next to the existing AG Grid screen.
2. Copy the same row array into `source`.
3. Convert `columnDefs` to `columns` with only `prop`, `name`, width, pinning, sorting, filtering, and read-only settings.
4. Confirm virtualization, sizing, scrolling, and first paint.
5. Decide the editing policy: default editable, default read-only, or permission-based.
6. Add `beforeeditstart`, `beforeedit`, and `afteredit` for edit workflows.
7. Add filtering and sorting.
8. Port simple formatters to `cellTemplate` or `columnTypes`.
9. Port framework renderers only where the cell really needs framework state.
10. Port custom editors.
11. Reconnect application state synchronization.
12. Migrate selection, clipboard, export, grouping, tree, pivot, and other advanced workflows.
13. Run browser tests around the real user flows before removing AG Grid.

The goal is not to make the first RevoGrid commit feature-complete. The goal is to get the same data on screen quickly, then move behavior in small, testable slices.

## Migration test plan

Before removing AG Grid, test real user journeys instead of only checking screenshots.

| Area | What to test |
| --- | --- |
| Data rendering | Correct row count, empty state, loading state, nested values, null values. |
| Column behavior | Widths, pinned columns, hidden columns, resizing, custom headers. |
| Editing | Editable columns, read-only columns, validation, cancel flow, save flow. |
| Formatting | Currency, dates, percentages, status badges, links, icons. |
| Sorting/filtering | Saved filters, multi-column sorting, numeric sorting, formatted values. |
| Selection | Row selection, cell selection, keyboard navigation, toolbar actions. |
| Clipboard | Copy, paste, multi-cell paste, invalid paste, paste into read-only cells. |
| Performance | Large data first paint, scroll performance, renderer cost. |
| Accessibility | Keyboard navigation, focus visibility, screen-reader labels if required. |
| Integration | Backend save, optimistic updates, permissions, audit logs, export. |

## Common pitfalls

### Porting renderer components too early

Render the grid with plain text first. Once rows, columns, and sizing are correct, migrate renderers. This makes it clear whether a problem belongs to data mapping or cell UI.

### Treating `editable` as a direct rename

AG Grid often marks editable columns with `editable: true`. RevoGrid uses `readonly` to lock columns or the whole grid. During migration, audit which columns should be editable, which should be locked, and which need permission-based logic.

### Recreating AG Grid internals instead of product behavior

Do not build an AG Grid compatibility layer unless you really need one temporarily. A compatibility layer can be useful for a first pass, but the final code should use RevoGrid concepts directly.

### Hiding too much logic in event handlers

AG Grid applications sometimes accumulate business rules inside grid callbacks. Move reusable rules into application services or store actions, then call them from RevoGrid events. That keeps the grid replaceable and easier to test.

### Migrating all Enterprise features at once

Pivoting, row grouping, server-side data, Excel export, and tool panels are different product workflows. Migrate them separately with clear acceptance criteria.

### Forgetting the Web Component boundary

RevoGrid works across frameworks because the core is a Web Component. That is an advantage, but it also means SSR and browser-only behavior should be handled intentionally. In SSR frameworks, load the grid on the client side.

### Doing heavy work inside every cell

Virtualization keeps the grid fast by rendering visible cells, but expensive custom renderers can still hurt performance. Precompute values when possible, keep templates small, and avoid heavy DOM work inside every cell.

## When RevoGrid is a good migration target

RevoGrid is a strong fit when your product needs:

- large data rendering with virtual rows and columns;
- spreadsheet-like editing;
- custom cells and editors;
- React, Vue, Angular, Svelte, or Web Component usage;
- a grid core that can be extended with plugins;
- advanced workflows such as pivot, Gantt, scheduling, tree, master-detail, audit history, or Excel-oriented workflows through RevoGrid Pro.

It is also a good fit when your team wants the grid to be a foundation for complex product UI rather than just a table replacement.

## What to read next

- [JavaScript Data Grid Quick Start](/guide/)
- [RevoGrid Installation](/guide/installation)
- [React Data Grid](/guide/react/)
- [Vue 3 Data Grid](/guide/vue3/)
- [Angular Data Grid](/guide/angular/)
- [Svelte Data Grid](/guide/svelte/)
- [RevoGrid Editing](/guide/editing)
- [RevoGrid Filtering](/guide/filters)
- [RevoGrid Sorting](/guide/sorting)
- [Column Types and Formats](/guide/column/types)
- [Programmatic Grid Control](/guide/programmatic-control)
- [AG Grid Alternative](/compare/ag-grid-alternative/)

## FAQ

### Can RevoGrid replace AG Grid?

Yes, for many applications. RevoGrid is a strong fit when you need a fast JavaScript data grid with virtualized rendering, editable cells, framework support, custom renderers, events, and a path to advanced Pro workflows. Highly AG Grid-specific Enterprise implementations should be migrated workflow by workflow.

### Do I need to rewrite my data?

Usually no. If your existing AG Grid uses an array of plain row objects, that array can usually become RevoGrid `source`. Most migration work is in columns, events, custom rendering, custom editing, selection behavior, and advanced grid features.

### What is the first thing to migrate?

Start with `rowData` to `source` and `columnDefs` to `columns`. Map `field` to `prop`, `headerName` to `name`, and basic width/read-only settings. Do not start with custom renderers or Enterprise workflows.

### Does RevoGrid work in React, Vue, Angular, and Svelte?

Yes. RevoGrid has a Web Component foundation and framework integration guides for React, Vue, Angular, Svelte, TypeScript, and plain JavaScript.

### Should I migrate all AG Grid features in one release?

No. Render the basic grid first, then migrate editing, filtering, sorting, selection, export, and advanced workflows in separate, testable steps.

### How should I migrate custom AG Grid cell renderers?

Start by classifying each renderer. Simple display formatting should become a `cellTemplate` or reusable `columnType`. Interactive framework components should be migrated with the framework-specific renderer APIs. Avoid moving heavy business logic into cell renderers.

### How should I migrate AG Grid Enterprise features?

Migrate them by workflow. For example, write acceptance criteria for pivot analytics, row grouping, tree data, Excel export, or server-side loading, then implement each workflow using the relevant RevoGrid core, plugin, or Pro feature.
