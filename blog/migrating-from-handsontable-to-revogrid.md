---
title: "Migrating from Handsontable to RevoGrid"
description: "A practical Handsontable to RevoGrid migration guide for JavaScript, React, Vue, Angular, and Svelte teams moving data, columns, headers, hooks, renderers, editors, validation, formulas, clipboard, plugins, RevoGrid Pro modules, and advanced spreadsheet-like workflows."
outline: deep
date: 2026-06-13
author: RevoGrid Team
category: Data Grid
tags:
  - Migration
  - Handsontable
  - RevoGrid
  - JavaScript
  - Data Grid
image: /blog/handsontable.png
imageAlt: RevoGrid JavaScript data grid migration preview
head:
  - - meta
    - name: keywords
      content: migrate from Handsontable to RevoGrid, Handsontable migration, Handsontable alternative, RevoGrid migration guide, JavaScript data grid migration, React data grid migration, Vue data grid migration, Angular data grid migration, Svelte data grid, RevoGrid Pro, RevoGrid formulas, data source columns colHeaders hooks renderers editors validators formulas HyperFormula
  - - meta
    - property: og:title
      content: Migrating from Handsontable to RevoGrid
  - - meta
    - property: og:description
      content: A practical developer guide for moving from Handsontable to RevoGrid with API mapping, JavaScript and framework examples, migration checklist, and common pitfalls.
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:url
      content: https://rv-grid.com/blog/migrating-from-handsontable-to-revogrid
  - - meta
    - property: og:image
      content: https://rv-grid.com/blog/handsontable.png
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - link
    - rel: canonical
      href: https://rv-grid.com/blog/migrating-from-handsontable-to-revogrid
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Migrating from Handsontable to RevoGrid",
        "description": "A practical Handsontable to RevoGrid migration guide for JavaScript, React, Vue, Angular, and Svelte teams moving data, columns, headers, hooks, renderers, editors, validation, formulas, clipboard, plugins, RevoGrid Pro modules, and advanced spreadsheet-like workflows.",
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
          "@id": "https://rv-grid.com/blog/migrating-from-handsontable-to-revogrid"
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
            "name": "Can RevoGrid replace Handsontable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RevoGrid can replace Handsontable in many JavaScript, React, Vue, Angular, Svelte, and Web Component applications that need virtualized rows and columns, editing, sorting, filtering, custom cells, events, and advanced grid workflows. RevoGrid Pro also covers spreadsheet-style workflows such as formulas, advanced filtering, Excel import/export, history, context menus, hierarchy, grouping, Pivot, and Gantt. Spreadsheet-heavy Handsontable implementations should still be migrated workflow by workflow."
            }
          },
          {
            "@type": "Question",
            "name": "What is the biggest API difference when migrating from Handsontable to RevoGrid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The first API change is moving Handsontable data to RevoGrid source and mapping Handsontable column configuration to RevoGrid columns. Handsontable columns.data usually becomes RevoGrid prop, while colHeaders usually becomes RevoGrid name. If your Handsontable data is an array of arrays, create object rows before migrating."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to rewrite my data model for RevoGrid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually no if your Handsontable grid already uses an array of objects. If it uses an array of arrays, introduce a small adapter that converts each row array into an object with stable property names. Most migration work is in columns, hooks, renderers, editors, validation, plugins, and advanced spreadsheet-like workflows."
            }
          },
          {
            "@type": "Question",
            "name": "Should I migrate Handsontable renderers first?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The safest migration is to render plain data first, then add formatting, cell templates, framework renderers, editors, validation, clipboard behavior, and plugin workflows after the basic rows, columns, sizing, and scrolling behavior are correct."
            }
          }
        ]
      }
---

# Migrating from Handsontable to RevoGrid

![RevoGrid JavaScript data grid migration preview](/blog/handsontable.png)

Migrating from Handsontable to RevoGrid is usually a migration of **grid configuration and spreadsheet-like workflows**, not a rewrite of your business data.

If your current Handsontable implementation uses an array of objects, the first RevoGrid version can often keep the same records and move them from `data` to `source`. The first column pass is also straightforward: map Handsontable `columns.data` to RevoGrid `prop`, and map `colHeaders` to RevoGrid `name`.

If your Handsontable grid uses an array of arrays, add one extra step before migration: convert row arrays into object rows with stable property names. That makes the grid easier to type, easier to validate, and easier to connect to your application state.

The real migration work starts after the first render. Handsontable applications often rely on hooks, renderers, editors, validators, cell types, context menus, copy/paste, autofill, formulas, comments, hidden columns, nested rows, and custom plugins. Those should not be copied one by one. They should be migrated as product workflows: editing, validation, formatting, selection, clipboard, filtering, sorting, formulas, export, hierarchy, and data synchronization.

This guide is written for developers who already have a Handsontable screen and want a practical migration path to [RevoGrid](/), a high-performance JavaScript data grid with an MIT-licensed core, Web Component architecture, framework wrappers, virtual rows and columns, editing, custom cells, and a path into [RevoGrid Pro](/pro/) features.

That Pro path matters for Handsontable migrations. RevoGrid core covers the fast grid foundation, while Pro adds many spreadsheet and enterprise workflows that Handsontable teams often depend on: [formulas](/guide/cell/formula), advanced filtering, Excel import/export, JSON clipboard support, autofill, validation, history/undo-redo, context menus, hierarchy/tree data, row grouping, aggregation, Pivot, and Gantt. Decide early which workflows belong in core RevoGrid, which should stay in your application layer, and which can move to a Pro module.

If you are still comparing vendors, create a dedicated comparison page for Handsontable later. If you are ready to port code, use this migration guide.

::: tip Migration principle
Do not try to make RevoGrid look like Handsontable internally. Keep the same product workflow, but map it to RevoGrid's data model, column model, event model, and Web Component foundation.
:::

## What changes during migration?

The first migration layer is simple when your Handsontable data is already object-based:

| Handsontable | RevoGrid | Meaning |
| --- | --- | --- |
| `data` | `source` | The data array rendered by the grid. |
| `columns` | `columns` | The column model. |
| `columns.data` | `prop` | The row key used by a column. |
| `colHeaders` | `name` | The visible column header. |
| `new Handsontable(container, options)` | `<revo-grid>` / framework wrapper | RevoGrid renders as a Web Component or wrapper. |
| `readOnly` | `readonly` | Lock editing at grid or column level. |
| `width` | `size` | Column width in pixels. |

The second migration layer is where most real work happens:

| Workflow | Why it needs attention |
| --- | --- |
| Array-of-arrays data | RevoGrid migration is cleaner with object rows and stable `prop` values. |
| Hooks | Handsontable hooks such as `afterChange` and `beforeChange` become RevoGrid custom events and application state updates. |
| Renderers | Handsontable renderers mutate cell DOM. RevoGrid templates and framework renderers should be rebuilt around RevoGrid cell props. |
| Editors | Handsontable editors and cell types do not map 1:1. Port the editing experience, not the editor class. |
| Validators | Move validation into `beforeedit`, application services, or column-specific rules. |
| Clipboard and autofill | Spreadsheet-like copy, paste, range, and fill behavior should be tested as user journeys; Pro modules can cover JSON clipboard and smart autofill workflows. |
| Formulas | Treat formulas as a calculation workflow, not a display formatter. HyperFormula, backend calculation, or the RevoGrid Pro formula plugin should be planned separately. |
| Plugins | Context menu, comments, hidden columns, nested rows, filters, sorting, and summaries should be migrated workflow by workflow; many of these have RevoGrid Pro equivalents. |
| State persistence | Move column order, size, visibility, sorting, filters, and selection state into your application state model. |

## The migration in one table

| Handsontable concept | RevoGrid concept | Migration note |
| --- | --- | --- |
| `data` | `source` | Usually the same array if rows are objects. |
| `data: Array<Array>` | Object rows in `source` | Convert arrays into objects with stable property names. |
| `data: Array<Object>` | `source` | Usually can be reused directly. |
| `colHeaders: true` | Generated `name` values | Create explicit RevoGrid column names instead of relying on A/B/C labels. |
| `colHeaders: ['A', 'B']` | `name` | Map each header label to the matching column. |
| `columns` | `columns` | Rebuild as RevoGrid column objects. |
| `columns.data` | `prop` | Use the row property as the column key. |
| `columns.type` | Column type, template, editor, validation | Migrate the cell behavior intentionally. |
| `columns.readOnly` | `readonly: true` | Lock a RevoGrid column. |
| `readOnly` top-level option | `readonly` grid prop | Lock the whole grid if needed. |
| `renderer` | `cellTemplate` or framework renderer | Port display logic, not DOM mutation logic. |
| `editor` | Custom editor | Register and assign RevoGrid editors where needed. |
| `validator` | `beforeedit` or app validation | Validate before committing edits. |
| `beforeChange` | `beforeedit` and app validation | Prevent invalid edits before they are applied. |
| `afterChange` | `afteredit` plus source/update events | Sync committed edits to app state. |
| `loadData()` / `updateData()` | Update `source` | Replace the grid source from app state. |
| `setDataAtCell()` / `setDataAtRowProp()` | Update source or use RevoGrid methods | Prefer app state updates for business logic. |
| `getData()` / `getSourceData()` | App source or grid methods | Keep canonical data outside the grid. |
| `rowHeaders` | Row header column or row header workflow | Rebuild if users depend on row numbers or row actions. |
| `fixedColumnsStart` | `pin: 'colPinStart'` | Pin columns at the start. |
| `fixedColumnsEnd` | `pin: 'colPinEnd'` | Pin columns at the end. |
| `manualColumnResize` | Column sizing state | Store user sizes in your column model. |
| `manualColumnMove` | Column order state | Store user order in app state or a plugin workflow. |
| `hiddenColumns` | Visible column state | Omit or hide columns through your column model. |
| `columnSorting` | RevoGrid sorting | Start with simple sorting, then port custom rules. |
| `filters` | RevoGrid filtering | Enable filtering and configure per-column behavior. |
| `dropdownMenu` | Column menu / filter UI | Rebuild menu UX around RevoGrid. |
| `contextMenu` | App context menu or plugin | Keep commands outside cell rendering when possible. |
| `copyPaste` | Clipboard workflow | Test paste, multi-cell edits, readonly cells, and validation. |
| `autoFill` | Fill workflow | Rebuild only if users depend on fill handle behavior. |
| `comments` | Cell metadata and custom UI | Store comments in row/cell metadata and render indicators. |
| `nestedRows` | Tree / hierarchy workflow | Migrate hierarchy separately. |
| `formulas` | Formula/calculation workflow | Keep HyperFormula, move to a backend, or use the RevoGrid Pro formula plugin depending on requirements. |
| `persistentState` | App-level grid state | Persist column order, widths, filters, sorting, and selection yourself. |
| Handsontable plugins | RevoGrid props, events, plugins, and Pro modules | Migrate behavior, not plugin names. |

The most important change is mental: Handsontable is commonly configured as one spreadsheet-like instance with many hooks and plugins. RevoGrid can be configured directly as a browser-native element:

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
| 1. Inventory | Understand how Handsontable is used today. | List of data shape, columns, headers, hooks, renderers, editors, validators, plugins, formulas, clipboard behavior, and saved state. |
| 2. Data adapter | Normalize rows. | Object-based `source` with stable property names. |
| 3. Columns and headers | Render the same values in RevoGrid. | `columns` with `prop`, `name`, width, pinning, and readonly rules. |
| 4. Sizing and layout | Match viewport, row height, column sizes, pinned columns, and theme basics. | Grid looks structurally correct. |
| 5. Editing and validation | Reconnect user edits to application state. | `beforeedit` / `afteredit` handlers and validation services. |
| 6. Renderers and cell types | Port display and editor behavior. | Cell templates, framework renderers, editors, and reusable column types. |
| 7. Filtering and sorting | Rebuild data operations. | Built-in or custom filtering/sorting behavior. |
| 8. Selection and clipboard | Recreate spreadsheet-like UX. | Tested keyboard, range, copy/paste, readonly, and validation flows. |
| 9. Formulas and advanced plugins | Move formulas, comments, nested rows, summaries, and menus. | One workflow migrated at a time. |
| 10. Acceptance tests | Prove behavior with real user journeys. | Regression tests before removing Handsontable. |

::: warning Do not start with renderers
If the first migration commit includes every renderer, editor, validator, plugin, formula, context menu command, and clipboard edge case, it becomes hard to debug. Start with plain cells. Once rows, columns, sizing, and scrolling work, add custom behavior back.
:::

## Step 1: Inventory your Handsontable usage

Before writing RevoGrid code, inspect how the current Handsontable instance is used.

Create a short migration inventory:

| Area | Questions to answer |
| --- | --- |
| Data shape | Is `data` an array of arrays, array of objects, function source, or server-backed data? |
| Column mapping | Do columns use `columns.data`, nested paths, functions, or implicit indexes? |
| Headers | Are `colHeaders` generated, custom strings, or functions? Do users depend on row headers? |
| Editability | Is `readOnly` configured globally, per column, or per cell? |
| Hooks | Which hooks update app state, save data, validate edits, or trigger side effects? |
| Renderers | Which renderers only format text, and which render interactive UI? |
| Editors | Which columns use custom editors, dropdowns, autocomplete, dates, checkboxes, or nested grids? |
| Validators | Which validators block edits, mark invalid cells, or allow invalid values? |
| Clipboard | Do users rely on multi-cell paste, fill handle, formulas, readonly paste protection, or copy formatting? |
| Plugins | Which plugins are enabled: filters, dropdown menu, context menu, comments, hidden columns, nested rows, column summary, formulas, undo/redo? |
| State | What grid state is saved: column order, column widths, filters, sorting, hidden columns, selection? |

This inventory decides the migration order. A simple editable table can move quickly. A spreadsheet-like app with formulas, custom validators, comments, and heavy clipboard behavior needs a workflow-by-workflow migration plan.

## Step 2: Move object rows from `data` to `source`

A Handsontable setup with object rows usually looks like this:

```ts
const data = [
  { product: 'Widget A', category: 'Hardware', quantity: 12, price: 49.9 },
  { product: 'Widget B', category: 'Software', quantity: 4, price: 129 },
  { product: 'Widget C', category: 'Hardware', quantity: 18, price: 19.5 },
];

new Handsontable(container, {
  data,
  colHeaders: ['Product', 'Category', 'Quantity', 'Price'],
  columns: [
    { data: 'product' },
    { data: 'category' },
    { data: 'quantity', type: 'numeric' },
    { data: 'price', type: 'numeric' },
  ],
  rowHeaders: true,
  height: 500,
  licenseKey: 'your-license-key',
});
```

In RevoGrid, move the records to `source`:

```ts
const source = [
  { product: 'Widget A', category: 'Hardware', quantity: 12, price: 49.9 },
  { product: 'Widget B', category: 'Software', quantity: 4, price: 129 },
  { product: 'Widget C', category: 'Hardware', quantity: 18, price: 19.5 },
];

const columns = [
  { prop: 'product', name: 'Product' },
  { prop: 'category', name: 'Category' },
  { prop: 'quantity', name: 'Quantity' },
  { prop: 'price', name: 'Price' },
];
```

For object rows, this is mostly a rename and column mapping. You do not need to reshape records just because you are changing grid libraries.

You should review your row model if the Handsontable implementation depends on visual row indexes, physical row indexes, spare rows, nested rows, formula sheets, or plugin-generated rows. Those should be migrated as explicit workflows.

## Step 3: Convert array rows into object rows

Handsontable is often used with array-of-arrays data:

```ts
const data = [
  ['Widget A', 'Hardware', 12, 49.9],
  ['Widget B', 'Software', 4, 129],
  ['Widget C', 'Hardware', 18, 19.5],
];

new Handsontable(container, {
  data,
  colHeaders: ['Product', 'Category', 'Quantity', 'Price'],
  rowHeaders: true,
});
```

For RevoGrid, create stable property names:

```ts
const source = data.map(([product, category, quantity, price]) => ({
  product,
  category,
  quantity,
  price,
}));

const columns = [
  { prop: 'product', name: 'Product' },
  { prop: 'category', name: 'Category' },
  { prop: 'quantity', name: 'Quantity' },
  { prop: 'price', name: 'Price' },
];
```

For larger grids, keep a reusable adapter:

```ts
type RowArray = Array<string | number | boolean | null>;

type ColumnSchema = {
  prop: string;
  name: string;
  index: number;
};

const schema: ColumnSchema[] = [
  { prop: 'product', name: 'Product', index: 0 },
  { prop: 'category', name: 'Category', index: 1 },
  { prop: 'quantity', name: 'Quantity', index: 2 },
  { prop: 'price', name: 'Price', index: 3 },
];

function arrayRowsToObjects(rows: RowArray[], schema: ColumnSchema[]) {
  return rows.map((row) => {
    const model: Record<string, unknown> = {};

    for (const column of schema) {
      model[column.prop] = row[column.index];
    }

    return model;
  });
}

const source = arrayRowsToObjects(data, schema);
const columns = schema.map(({ prop, name }) => ({ prop, name }));
```

This also gives you a cleaner place to handle parsing, defaults, and validation.

::: tip Prefer named properties
Array indexes are convenient in spreadsheet prototypes. Named properties are better for long-lived product code because they make rendering, validation, typing, and API integration easier to maintain.
:::

## Step 4: Move `columns` and `colHeaders` to RevoGrid `columns`

Handsontable often splits binding and header text:

```ts
new Handsontable(container, {
  data,
  colHeaders: ['Product', 'Category', 'Quantity', 'Price'],
  columns: [
    { data: 'product' },
    { data: 'category' },
    { data: 'quantity', type: 'numeric' },
    { data: 'price', type: 'numeric', readOnly: true },
  ],
});
```

In RevoGrid, each column usually carries both the binding and the header label:

```ts
const columns = [
  { prop: 'product', name: 'Product' },
  { prop: 'category', name: 'Category' },
  { prop: 'quantity', name: 'Quantity' },
  { prop: 'price', name: 'Price', readonly: true },
];
```

Use this as the first pass:

| Handsontable column property | RevoGrid column property | Notes |
| --- | --- | --- |
| `data` | `prop` | Required for binding a column to a row property. |
| `colHeaders[index]` | `name` | Header label for the matching column. |
| `width` | `size` | Column width in pixels. |
| `readOnly: true` | `readonly: true` | Locks editing. |
| `type: 'numeric'` | Column type, template, editor, or validation | Port type behavior intentionally. |
| `renderer` | `cellTemplate` or framework renderer | Rebuild display logic. |
| `editor` | Custom editor | Rebuild editor contract. |
| `validator` | `beforeedit` / app validation | Validate before committing the edit. |

Start by migrating only binding, labels, sizes, pinned columns, and read-only rules. Then port renderers and editors once the basic grid is visible.

## Step 5: Use a temporary column converter

For a large migration, a helper can speed up the first pass. Do not keep it as your final column architecture; use it to get the first RevoGrid screen rendering.

```ts
type HotColumn = {
  data?: string | number | ((row: unknown) => unknown);
  width?: number;
  readOnly?: boolean;
  type?: string;
  renderer?: unknown;
  editor?: unknown;
  validator?: unknown;
};

type RevoColumn = {
  prop: string;
  name: string;
  size?: number;
  readonly?: boolean;
};

function normalizeProp(data: HotColumn['data'], index: number) {
  if (typeof data === 'string') return data;
  if (typeof data === 'number') return String(data);

  // Function-based Handsontable columns need manual migration.
  return `col_${index}`;
}

function mapHandsontableColumns(
  hotColumns: HotColumn[],
  colHeaders: true | string[] | undefined,
): RevoColumn[] {
  return hotColumns.map((column, index) => {
    const prop = normalizeProp(column.data, index);
    const name = Array.isArray(colHeaders) ? colHeaders[index] || prop : prop;

    return {
      prop,
      name,
      size: column.width,
      readonly: column.readOnly || undefined,
    };
  });
}
```

Use it like this:

```ts
const hotColumns = [
  { data: 'product' },
  { data: 'category' },
  { data: 'quantity', type: 'numeric' },
  { data: 'price', type: 'numeric', readOnly: true },
];

const colHeaders = ['Product', 'Category', 'Quantity', 'Price'];

const columns = mapHandsontableColumns(hotColumns, colHeaders);
```

Then replace the generated columns with explicit RevoGrid columns over time. Explicit column definitions are easier to type, test, reuse, and document.

## Step 6: Replace grid creation

A plain JavaScript Handsontable setup usually creates an instance from a container and an options object:

```ts
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';

registerAllModules();

const container = document.querySelector('#orders-grid');

const hot = new Handsontable(container, {
  data,
  colHeaders: ['Product', 'Category', 'Quantity', 'Price'],
  columns: [
    { data: 'product' },
    { data: 'category' },
    { data: 'quantity', type: 'numeric' },
    { data: 'price', type: 'numeric' },
  ],
  rowHeaders: true,
  height: 500,
  licenseKey: 'your-license-key',
});
```

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
    { prop: 'product', name: 'Product' },
    { prop: 'category', name: 'Category' },
    { prop: 'quantity', name: 'Quantity' },
    { prop: 'price', name: 'Price' },
  ];

  grid.source = [
    { product: 'Widget A', category: 'Hardware', quantity: 12, price: 49.9 },
    { product: 'Widget B', category: 'Software', quantity: 4, price: 129 },
    { product: 'Widget C', category: 'Hardware', quantity: 18, price: 19.5 },
  ];
}
```

Keep the element height explicit. Like other virtualized grids, RevoGrid needs a real viewport size so it can calculate visible rows and columns.

For setup details, use the [JavaScript quick start](/guide/) and [installation guide](/guide/installation).

## Step 7: Migrate framework wrappers

The RevoGrid API stays close across frameworks because the grid foundation is the same Web Component.

### React

Handsontable React screens commonly render a `<HotTable>` component with `data`, `columns`, `colHeaders`, and hook props. With RevoGrid, pass `columns` and `source` to the React wrapper:

```tsx
import { RevoGrid } from '@revolist/react-datagrid';
import { useMemo, useState } from 'react';

type OrderRow = {
  product: string;
  category: string;
  quantity: number;
  price: number;
};

export default function OrdersGrid() {
  const [source] = useState<OrderRow[]>([
    { product: 'Widget A', category: 'Hardware', quantity: 12, price: 49.9 },
    { product: 'Widget B', category: 'Software', quantity: 4, price: 129 },
  ]);

  const columns = useMemo(() => [
    { prop: 'product', name: 'Product' },
    { prop: 'category', name: 'Category' },
    { prop: 'quantity', name: 'Quantity' },
    { prop: 'price', name: 'Price' },
  ], []);

  return <RevoGrid columns={columns} source={source} />;
}
```

Keep `columns` stable with `useMemo` unless the column model really changes. This avoids unnecessary wrapper updates and matches the [React Data Grid](/guide/react/) guide.

### Vue

Vue apps can bind the same `columns` and `source` props:

```vue
<script setup lang="ts">
import { ref } from 'vue';
import RevoGrid from '@revolist/vue3-datagrid';

const source = ref([
  { product: 'Widget A', category: 'Hardware', quantity: 12, price: 49.9 },
  { product: 'Widget B', category: 'Software', quantity: 4, price: 129 },
]);

const columns = ref([
  { prop: 'product', name: 'Product' },
  { prop: 'category', name: 'Category' },
  { prop: 'quantity', name: 'Quantity' },
  { prop: 'price', name: 'Price' },
]);
</script>

<template>
  <RevoGrid :columns="columns" :source="source" />
</template>
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
    { product: 'Widget A', category: 'Hardware', quantity: 12, price: 49.9 },
    { product: 'Widget B', category: 'Software', quantity: 4, price: 129 },
  ];

  columns = [
    { prop: 'product', name: 'Product' },
    { prop: 'category', name: 'Category' },
    { prop: 'quantity', name: 'Quantity' },
    { prop: 'price', name: 'Price' },
  ];
}
```

Use the [Angular Data Grid](/guide/angular/) guide for wrapper setup and framework renderer patterns.

### Svelte

Svelte can pass the same props directly:

```svelte
<script lang="ts">
  const source = [
    { product: 'Widget A', category: 'Hardware', quantity: 12, price: 49.9 },
    { product: 'Widget B', category: 'Software', quantity: 4, price: 129 },
  ];

  const columns = [
    { prop: 'product', name: 'Product' },
    { prop: 'category', name: 'Category' },
    { prop: 'quantity', name: 'Quantity' },
    { prop: 'price', name: 'Price' },
  ];
</script>

<revo-grid {columns} {source} />
```

Use the [Svelte Data Grid](/guide/svelte/) guide for installation and framework details.

## Step 8: Migrate hooks and application state

Handsontable applications often use hooks as the main integration layer:

```ts
new Handsontable(container, {
  data,
  columns,
  colHeaders,
  afterChange(changes, source) {
    if (!changes || source === 'loadData') return;

    for (const [row, prop, oldValue, newValue] of changes) {
      saveCellChange({ row, prop, oldValue, newValue });
    }
  },
});
```

RevoGrid emits DOM custom events from the grid element. The common migration is to replace Handsontable edit hooks with RevoGrid edit lifecycle events:

```ts
grid.addEventListener('afteredit', (event) => {
  const { prop, rowIndex, val, model } = event.detail;

  saveCellChange({
    rowIndex,
    prop,
    value: val,
    row: model,
  });
});
```

Use these mappings as a starting point:

| Handsontable workflow | Handsontable hook/API | RevoGrid direction |
| --- | --- | --- |
| Start editing | `beforeBeginEditing`, editor hooks | `beforeeditstart` |
| Validate before commit | `beforeChange`, `validator` | `beforeedit` and app validation |
| Sync committed edit | `afterChange` | `afteredit` |
| React to data replacement | `afterLoadData`, `afterUpdateData` | source update workflow / `beforesourceset` |
| Save after user edits | `afterChange` with source filtering | `afteredit` plus app store action |
| Filter changes | filter plugin hooks | `beforefilterapply` |
| Sorting changes | sorting hooks/plugin events | sorting lifecycle events |
| Viewport/scroll | render/scroll hooks | viewport/scroll events |
| Copy/paste | copy/paste hooks and plugin | clipboard workflow and tests |

Do not keep business rules hidden inside grid event handlers. Move reusable validation, saving, parsing, permissions, and audit logic into application services, then call those services from RevoGrid events.

## Step 9: Migrate editing and validation

Handsontable editability can be configured globally, per column, or per cell:

```ts
new Handsontable(container, {
  data,
  readOnly: false,
  columns: [
    { data: 'id', readOnly: true },
    { data: 'product' },
    {
      data: 'quantity',
      type: 'numeric',
      validator(value, callback) {
        callback(Number(value) >= 0);
      },
    },
  ],
});
```

In RevoGrid:

- columns are editable unless the grid or column is read-only;
- use `readonly: true` to lock a column;
- use `beforeedit` to validate or cancel edits;
- use `afteredit` to synchronize committed changes;
- register custom editors when a cell needs specialized input UI.

```ts
grid.columns = [
  { prop: 'id', name: 'ID', readonly: true },
  { prop: 'product', name: 'Product' },
  { prop: 'quantity', name: 'Quantity' },
];

grid.addEventListener('beforeedit', (event) => {
  const { prop, val } = event.detail;

  if (prop === 'quantity' && Number(val) < 0) {
    event.preventDefault();
  }
});
```

For more complex validation, keep the rule outside the grid:

```ts
function validateOrderCell(prop: string, value: unknown) {
  if (prop === 'quantity') return Number(value) >= 0;
  if (prop === 'price') return Number(value) >= 0;
  return true;
}

grid.addEventListener('beforeedit', (event) => {
  const { prop, val } = event.detail;

  if (!validateOrderCell(String(prop), val)) {
    event.preventDefault();
  }
});
```

This keeps validation testable and prevents the new grid from becoming the only place where business rules exist.

## Step 10: Migrate renderers and formatters

Handsontable renderers are often imperative DOM functions:

```ts
function priceRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);

  td.textContent = `$${Number(value || 0).toFixed(2)}`;
  td.classList.add('price-cell');

  return td;
}
```

Do not copy this contract directly. RevoGrid renderers receive RevoGrid cell props, so the clean path is:

1. Keep raw data in `source`.
2. Move display-only formatting into a `cellTemplate` or reusable column type.
3. Move interactive UI into a framework renderer only when the cell really needs framework state.

Example display formatter:

```ts
const priceCell = ({ model, prop }) => {
  const value = Number(model[prop] || 0);
  return `$${value.toFixed(2)}`;
};

grid.columns = [
  { prop: 'product', name: 'Product' },
  { prop: 'price', name: 'Price', cellTemplate: priceCell },
];
```

Example status formatter:

```ts
const statusCell = ({ model, prop }) => {
  const status = String(model[prop] || 'unknown');
  return `<span class="status status-${status.toLowerCase()}">${status}</span>`;
};

grid.columns = [
  { prop: 'product', name: 'Product' },
  { prop: 'status', name: 'Status', cellTemplate: statusCell },
];
```

Use native cell templates for simple formatting. Use framework renderers when you need React, Vue, Angular, or Svelte components inside cells. The [Cell Renderer](/guide/cell/renderer), [React Cell Template](/guide/react/renderer), and [Vue renderer examples](/guide/vue3/renderer) are the best next pages.

## Step 11: Migrate Handsontable cell types

Handsontable cell types bundle renderer, editor, validator, and formatting behavior. RevoGrid migration should split those responsibilities.

| Handsontable cell type | RevoGrid migration direction |
| --- | --- |
| `text` | Default text cell. |
| `numeric` | Display formatter plus numeric validation/parsing. |
| `date` | Date formatter plus date editor if needed. |
| `checkbox` | Checkbox cell template/editor. |
| `dropdown` | Select editor or framework editor. |
| `autocomplete` | Search/select editor or framework editor. |
| `password` | Masked display and editor rules. |
| `handsontable` | Custom lookup/editor workflow. |
| Custom type | Reusable RevoGrid column type, template, editor, and validator. |

A common mistake is trying to find one RevoGrid property that replaces a full Handsontable cell type. Instead, break the behavior into four questions:

| Question | Migration target |
| --- | --- |
| How is the value displayed? | `cellTemplate`, formatter, CSS, or framework renderer. |
| How is the value edited? | Built-in editor, custom editor, or framework editor. |
| How is the value validated? | `beforeedit` or application validation. |
| How is the value stored? | Raw `source` value and app state. |

This makes the migration more explicit and easier to test.

## Step 12: Migrate filtering, sorting, and column menus

Handsontable usually enables filtering and column menu behavior with plugins such as `filters`, `dropdownMenu`, and `columnSorting`.

In RevoGrid, start with the simplest equivalents, then rebuild advanced behavior.

### Filtering

Enable filtering at the grid level:

```ts
grid.filter = true;
```

Then configure columns:

```ts
grid.columns = [
  { prop: 'product', name: 'Product', filter: 'string' },
  { prop: 'category', name: 'Category', filter: 'string' },
  { prop: 'quantity', name: 'Quantity', filter: 'number' },
];
```

For saved filter state, custom operations, and advanced filter UI, use [RevoGrid Filtering](/guide/filters).

RevoGrid Pro also includes advanced filtering workflows such as selection filters, cascading selection filters, slider filters, date filters, and header input filters. If your Handsontable screen uses `filters` and `dropdownMenu` as a full analyst-style filter panel, evaluate those Pro filters before designing a custom menu from scratch.

### Sorting

RevoGrid supports sorting as part of the core grid workflow. Port Handsontable sorting carefully if your app depends on custom comparators, physical versus visual indexes, or server-side sorting.

Suggested order:

1. Enable basic sorting.
2. Confirm visual behavior.
3. Reconnect saved sort state.
4. Add custom compare logic only where product behavior requires it.

Use [Sorting](/guide/sorting) for the current RevoGrid sorting API.

### Column menu and context menu

Handsontable's `dropdownMenu` and `contextMenu` often mix grid operations with product commands. During migration, separate them:

| Command type | Recommended migration |
| --- | --- |
| Sort/filter command | RevoGrid column/filter/sorting workflow. |
| Insert/delete row command | App-level data mutation and `source` update. |
| Hide/show column command | App-level visible column state. |
| Export command | App toolbar or RevoGrid export workflow. |
| Product-specific command | External context menu connected to row/cell selection. |

Keep product commands outside cell renderers. A context menu should operate on selected row/cell metadata and call application actions.

## Step 13: Migrate selection, clipboard, and autofill

Handsontable users often expect spreadsheet-like behavior: range selection, keyboard navigation, copy/paste, fill handle, and multi-cell updates.

Do not migrate this as a simple option rename. Test the actual user journeys:

| Workflow | Test case |
| --- | --- |
| Single-cell edit | Edit a value, commit it, and confirm state sync. |
| Multi-cell paste | Paste a rectangle of data into editable cells. |
| Read-only protection | Paste over locked cells and confirm they are not changed. |
| Validation | Paste invalid values and confirm validation behavior. |
| Keyboard navigation | Use arrows, Tab, Enter, Escape, and selection shortcuts. |
| Copy from grid | Copy visible values and verify output format. |
| Fill behavior | Confirm whether users need fill handle or copy-down behavior. |
| Undo/redo | Decide whether this is grid-level, app-level, or Pro-level history. |

If your product depends heavily on spreadsheet operations, create acceptance tests before replacing Handsontable. Clipboard behavior is often where users notice small differences first.

For Pro migrations, check whether the existing workflow maps to RevoGrid Pro JSON clipboard support, range apply preview, smart autofill, column selection, multi-range selection, or history. These modules are useful when users expect spreadsheet-like bulk operations rather than a simple editable table.

## Step 14: Migrate formulas and HyperFormula workflows

Handsontable's `Formulas` plugin is powered by HyperFormula. If your grid uses formulas, treat that as a separate migration track.

Do not handle formulas as a renderer. A renderer can display a computed value, but it should not become your calculation engine.

RevoGrid Pro includes a [formula plugin](/guide/cell/formula) for Excel-like formulas, dynamic recalculation, cell references, and a broad set of functions through `formulajs`. Use it when users need to enter and maintain formulas directly in the grid. If your Handsontable formulas depend on HyperFormula-specific behavior such as named expressions, cross-sheet references, or custom dependency graph semantics, inventory those requirements before switching engines.

You have three common paths:

| Formula requirement | Migration direction |
| --- | --- |
| Formulas are only imported/exported values | Calculate outside the grid and render values in RevoGrid. |
| Users edit formulas directly | Keep a formula engine such as HyperFormula or use the RevoGrid Pro formula plugin. |
| Formulas affect multiple rows/sheets | Treat formulas as a workbook/domain model, not only a grid feature. |
| Backend owns calculations | Send edits to the backend and update `source` with calculated values. |

A practical migration pattern:

1. Keep raw inputs in `source`.
2. Keep formulas in a separate calculation model.
3. Recompute affected values after edits.
4. Push calculated values back into RevoGrid source.
5. Add formula editing UI only after basic edits are stable.

Example shape:

```ts
type OrderRow = {
  product: string;
  quantity: number;
  price: number;
  total: number;
};

function recalculate(row: OrderRow): OrderRow {
  return {
    ...row,
    total: row.quantity * row.price,
  };
}

grid.addEventListener('afteredit', (event) => {
  const { model } = event.detail;
  const updatedRow = recalculate(model);

  updateOrderRow(updatedRow);
});
```

If you currently use named expressions, cross-sheet references, custom functions, or formula dependency graphs, migrate those before migrating formula UI. Calculation correctness matters more than cell display.

## Step 15: Migrate comments and cell metadata

Handsontable's `comments` plugin lets users attach notes to cells. In a product migration, treat comments as business data or cell metadata.

Possible RevoGrid model:

```ts
type CellComment = {
  rowId: string;
  prop: string;
  text: string;
  authorId: string;
  updatedAt: string;
};

type OrderRow = {
  id: string;
  product: string;
  quantity: number;
  price: number;
  comments?: Record<string, CellComment>;
};
```

Then render a cell indicator:

```ts
const commentIndicatorCell = ({ model, prop }) => {
  const value = model[prop];
  const hasComment = Boolean(model.comments?.[prop]);

  return hasComment
    ? `<span class="cell-with-comment">${value}</span>`
    : String(value ?? '');
};
```

Keep comment creation, editing, deletion, permissions, and audit history in your application layer. The grid should display and trigger the workflow, not own the entire comments model.

## Step 16: Migrate hidden columns, moving, resizing, and saved state

Handsontable plugins such as `hiddenColumns`, `manualColumnMove`, `manualColumnResize`, and `persistentState` often become application state in a RevoGrid migration.

A clean state model looks like this:

```ts
type GridColumnState = {
  prop: string;
  name: string;
  size?: number;
  hidden?: boolean;
  pinned?: 'start' | 'end';
  order: number;
};

const savedState: GridColumnState[] = [
  { prop: 'product', name: 'Product', order: 0, size: 220 },
  { prop: 'category', name: 'Category', order: 1, size: 160 },
  { prop: 'quantity', name: 'Quantity', order: 2, size: 120 },
  { prop: 'price', name: 'Price', order: 3, size: 120, hidden: false },
];

const columns = savedState
  .filter((column) => !column.hidden)
  .sort((a, b) => a.order - b.order)
  .map((column) => ({
    prop: column.prop,
    name: column.name,
    size: column.size,
    pin: column.pinned === 'start'
      ? 'colPinStart'
      : column.pinned === 'end'
        ? 'colPinEnd'
        : undefined,
  }));
```

This keeps user preferences portable. It also avoids coupling saved state to one grid library's internal state format.

## Step 17: Migrate nested rows and hierarchy

Handsontable's `nestedRows` plugin models parent-child rows and hierarchical UI behavior. In RevoGrid, migrate this as a tree or hierarchy workflow, not as a column mapping task.

Inventory first:

| Question | Why it matters |
| --- | --- |
| Are parent rows editable? | Parent rows may need different validation and rendering. |
| Are child rows loaded eagerly or lazily? | Lazy loading affects data source and expansion state. |
| Do users sort/filter across hierarchy? | Tree sorting/filtering rules need product decisions. |
| Do rows have stable IDs? | Expansion state and selection need stable IDs. |
| Are totals shown on parent rows? | Aggregates may be a separate workflow. |

A migration path:

1. Render flat data first.
2. Add stable row IDs and parent IDs.
3. Implement expansion state.
4. Add custom row/indent rendering.
5. Reconnect selection, editing, sorting, and filtering.
6. Add aggregates if needed.

If hierarchy is core to the product, migrate it after basic editing but before advanced clipboard and export behavior.

## Step 18: Replace plugin-heavy workflows intentionally

Handsontable plugins are useful because they bundle a lot of spreadsheet behavior. During migration, do not look for one plugin with the same name. Start from the user workflow.

| Existing Handsontable workflow | RevoGrid path |
| --- | --- |
| Large editable table | Core virtual rows and columns, editing, events. |
| Custom cell formatting | `cellTemplate`, CSS, framework renderers, column types. |
| Custom editors | RevoGrid editors or framework editor components. |
| Validation | `beforeedit` and application validation services. |
| Filters and dropdown menu | Core filtering plus custom menu UI where needed. |
| Sorting | Core sorting and saved state. |
| Context menu | App-level context menu connected to selection or RevoGrid Pro context menu workflow. |
| Copy/paste | RevoGrid clipboard workflow, Pro JSON clipboard where needed, and acceptance tests. |
| Autofill/fill handle | Rebuild only if product users depend on it, or use RevoGrid Pro smart autofill. |
| Comments | Cell metadata and custom comment UI. |
| Hidden columns | Column visibility state or RevoGrid Pro column hide workflow. |
| Column resize/move | Column state and user preferences. |
| Nested rows | Tree/hierarchy workflow or RevoGrid Pro hierarchical data view. |
| Column summary | Aggregation workflow, footer/summary row, or RevoGrid Pro grouping aggregation. |
| Formulas | Formula engine, backend calculation, or RevoGrid Pro formula plugin. |
| Export | RevoGrid export or Pro Excel import/export workflows. |
| Undo/redo | Application history or Pro history workflow. |
| Persistent state | App-level grid state storage. |

For larger migrations, build a Core/Pro decision table before implementation:

| Requirement | Start with core RevoGrid | Consider RevoGrid Pro |
| --- | --- | --- |
| Fast editable table | Virtual rows/columns, editing, sorting, filtering, custom cells. | Use Pro only if the workflow needs advanced modules. |
| Spreadsheet formulas | App/backend calculation for simple totals. | Formula plugin for user-authored Excel-like formulas. |
| Excel workflows | Basic export where sufficient. | Excel import/export with layout, visibility, frozen panes, and styling preservation. |
| Bulk spreadsheet operations | Core selection, clipboard, and fill behavior. | JSON clipboard, range apply preview, smart autofill, multi-range selection, and history. |
| Hierarchical analytics | Custom hierarchy or grouped data model. | Tree data, row grouping, grouping aggregation, Pivot, or Gantt depending on the product workflow. |

This is usually where a migration becomes product-specific. Get the basic grid running first, then migrate each advanced workflow with a focused acceptance test.

## Step 19: Replace grid API calls

Handsontable code often stores the instance and calls methods directly:

```ts
hot.setDataAtCell(0, 2, 10);
hot.loadData(nextData);
const selected = hot.getSelected();
const data = hot.getData();
```

In RevoGrid, prefer application state for business data and grid methods for UI control.

| Existing intent | Migration direction |
| --- | --- |
| Replace all data | Update `source` from application state. |
| Edit one business value | Update app state, then update `source`. |
| Start editing a cell | Use RevoGrid instance method such as `setCellEdit`. |
| Scroll to a row | Use RevoGrid instance method such as `scrollToRow`. |
| Read visible rows | Use RevoGrid method such as `getVisibleSource` or app state plus filter state. |
| Save changed data | Save from application state or `afteredit` event payload. |
| Read selection | Use RevoGrid selection/focus API. |

The rule of thumb: your application should own data truth; the grid should own viewport, focus, editing, and interaction.

## Suggested migration checklist

Use this order to keep the migration controlled:

1. Create a RevoGrid screen next to the existing Handsontable screen.
2. Inventory current `data`, `columns`, `colHeaders`, hooks, renderers, editors, validators, plugins, formulas, and saved state.
3. Convert array-of-arrays data to object rows if needed.
4. Copy object rows into RevoGrid `source`.
5. Convert Handsontable columns into RevoGrid `columns` with only `prop`, `name`, width, pinning, and read-only settings.
6. Confirm virtualization, sizing, scrolling, and first paint.
7. Enable editing and migrate validation.
8. Reconnect application state synchronization.
9. Add filtering and sorting.
10. Port renderers and display formatters.
11. Port custom editors and cell-type behavior.
12. Migrate selection, keyboard, clipboard, and paste workflows.
13. Migrate comments, hidden columns, resizing, moving, and saved state.
14. Migrate formulas, nested rows, summaries, export, undo/redo, and other advanced workflows separately.
15. Run browser tests around the real user flows before removing Handsontable.

The goal is not to make the first RevoGrid commit feature-complete. The goal is to get the same data on screen quickly, then move behavior in small, testable slices.

## Common pitfalls

### Keeping array indexes as the main data model

Handsontable makes array-of-arrays convenient. For long-lived product code, object rows with named properties are easier to validate, save, type, and test. Add an adapter early.

### Porting renderers too early

Render the grid with plain text first. Once rows, columns, and sizing are correct, migrate renderers. This makes it clear whether a problem belongs to data mapping or cell UI.

### Treating `type` as a direct replacement target

A Handsontable cell type can include display, editing, validation, and parsing. In RevoGrid, migrate those responsibilities separately.

### Recreating every plugin immediately

Context menu, comments, formulas, nested rows, hidden columns, and summaries are different user workflows. Migrate them separately with clear acceptance criteria.

### Hiding business rules inside grid events

Handsontable projects often accumulate business logic in hooks. During migration, move reusable rules into application services or store actions, then call them from RevoGrid events.

### Forgetting formula dependency behavior

If formulas exist, define where calculation lives before replacing the grid. Formula recalculation, named expressions, cross-sheet references, and custom functions are not just cell rendering problems.

### Ignoring visual versus physical indexes

Handsontable workflows may use visual row/column indexes after sorting, filtering, moving, or hiding. During migration, move business logic toward stable row IDs and column props.

### Forgetting the Web Component boundary

RevoGrid works across frameworks because the core is a Web Component. That is an advantage, but it also means SSR and browser-only behavior should be handled intentionally. In SSR frameworks, load the grid on the client side.

## A minimal before and after

Handsontable:

```ts
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';

registerAllModules();

const data = [
  { product: 'Widget A', quantity: 12, price: 49.9 },
  { product: 'Widget B', quantity: 4, price: 129 },
];

new Handsontable(document.querySelector('#orders-grid'), {
  data,
  colHeaders: ['Product', 'Quantity', 'Price'],
  columns: [
    { data: 'product' },
    { data: 'quantity', type: 'numeric' },
    { data: 'price', type: 'numeric' },
  ],
  rowHeaders: true,
  height: 500,
  licenseKey: 'your-license-key',
});
```

RevoGrid:

```ts
import { defineCustomElements } from '@revolist/revogrid/loader';

defineCustomElements();

const grid = document.querySelector('revo-grid');

if (grid) {
  grid.source = [
    { product: 'Widget A', quantity: 12, price: 49.9 },
    { product: 'Widget B', quantity: 4, price: 129 },
  ];

  grid.columns = [
    { prop: 'product', name: 'Product' },
    { prop: 'quantity', name: 'Quantity' },
    { prop: 'price', name: 'Price' },
  ];
}
```

That is the right first migration target. After that, add back the workflows that make your grid valuable: editing, validation, filtering, sorting, custom cells, selection, clipboard, comments, formulas, export, and advanced modules.

## What to read next

- [JavaScript Data Grid Quick Start](/guide/)
- [RevoGrid Installation](/guide/installation)
- [React Data Grid](/guide/react/)
- [Vue 3 Data Grid](/guide/vue3/)
- [Angular Data Grid](/guide/angular/)
- [Svelte Data Grid](/guide/svelte/)
- [RevoGrid Editing](/guide/editing)
- [RevoGrid Filtering](/guide/filters)
- [RevoGrid Formula Plugin](/guide/cell/formula)
- [RevoGrid Pro](/pro/)
- [Programmatic Grid Control](/guide/programmatic-control)
- [RevoGrid Export](/guide/export.plugin)

## FAQ

### Can RevoGrid replace Handsontable?

Yes, for many applications. RevoGrid is a strong fit when you need a fast JavaScript data grid with virtualized rendering, editable cells, framework support, custom renderers, events, and a path to advanced Pro workflows. RevoGrid Pro covers formulas, Excel import/export, advanced filtering, JSON clipboard, autofill, validation, history, hierarchy, grouping, Pivot, and Gantt for teams that need more than the core grid. Highly spreadsheet-specific Handsontable implementations should still be migrated workflow by workflow.

### Do I need to rewrite my data?

Usually no if your existing Handsontable grid uses an array of plain objects. If it uses an array of arrays, create a small adapter that converts each row into an object with stable property names. Most migration work is in columns, hooks, renderers, editors, validation, plugins, and advanced spreadsheet-like features.

### What is the first thing to migrate?

Start with `data` to `source` and Handsontable `columns` to RevoGrid `columns`. Map `columns.data` to `prop`, map `colHeaders` to `name`, and keep only basic width, pinning, and read-only settings. Do not start with custom renderers or formula workflows.

### Does RevoGrid work in React, Vue, Angular, and Svelte?

Yes. RevoGrid has a Web Component foundation and framework integration guides for React, Vue, Angular, Svelte, TypeScript, and plain JavaScript.

### How should I migrate Handsontable formulas?

Treat formulas as a separate calculation workflow. If formulas are simple, calculate values in your application or backend and render the result in RevoGrid. If users edit formulas directly, keep a formula engine such as HyperFormula or use the RevoGrid Pro formula plugin where appropriate.

### Should I migrate all Handsontable plugins in one release?

No. Render the basic grid first, then migrate editing, validation, renderers, filtering, sorting, selection, clipboard, comments, formulas, nested rows, export, and other advanced workflows in separate, testable steps.
