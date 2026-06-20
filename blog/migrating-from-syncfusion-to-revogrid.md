---
title: Migrating from Syncfusion Grid to RevoGrid
description: "A practical Syncfusion Grid to RevoGrid migration guide for JavaScript, React, Vue, Angular, and Svelte teams moving dataSource, columns, templates, editing, filtering, sorting, paging, virtualization, and advanced grid workflows."
outline: deep
date: 2026-06-17
author: RevoGrid Team
category: Data Grid
tags:
  - Migration
  - Syncfusion
  - RevoGrid
  - JavaScript
  - Data Grid
image: /blog/syncfusion.png
imageAlt: RevoGrid JavaScript data grid migration preview
head:
  - - meta
    - name: keywords
      content: migrate from Syncfusion Grid to RevoGrid, Syncfusion Grid migration, Syncfusion DataGrid alternative, Syncfusion EJ2 Grid alternative, RevoGrid migration guide, JavaScript data grid migration, React data grid migration, Vue data grid migration, Angular data grid migration, Svelte data grid, dataSource source columns field headerText prop name
  - - meta
    - property: og:title
      content: Migrating from Syncfusion Grid to RevoGrid
  - - meta
    - property: og:description
      content: A practical developer guide for moving from Syncfusion Grid to RevoGrid with API mapping, JavaScript and framework examples, migration checklist, and common pitfalls.
  - - meta
    - property: og:type
      content: article
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Migrating from Syncfusion Grid to RevoGrid",
        "description": "A practical Syncfusion Grid to RevoGrid migration guide for JavaScript, React, Vue, Angular, and Svelte teams moving dataSource, columns, templates, editing, filtering, sorting, paging, virtualization, and advanced grid workflows.",
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
          "@id": "https://rv-grid.com/blog/migrating-from-syncfusion-to-revogrid"
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
            "name": "Can RevoGrid replace Syncfusion Grid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RevoGrid can replace Syncfusion Grid in many JavaScript, React, Vue, Angular, Svelte, and Web Component applications that need virtualized rows and columns, editing, sorting, filtering, custom cells, events, and advanced Pro workflows. Deep Syncfusion-specific DataManager, toolbar, export, grouping, or template implementations should be migrated workflow by workflow."
            }
          },
          {
            "@type": "Question",
            "name": "What is the biggest API difference when migrating from Syncfusion Grid to RevoGrid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The first API change is mapping Syncfusion dataSource to RevoGrid source and Syncfusion column definitions to RevoGrid columns. Syncfusion field becomes RevoGrid prop, while headerText usually becomes name."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to rewrite my data model for RevoGrid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually no. Most Syncfusion dataSource arrays can become RevoGrid source arrays directly. The main work is adapting column definitions, templates, editors, event handlers, selection behavior, and advanced grid workflows."
            }
          },
          {
            "@type": "Question",
            "name": "Should I migrate Syncfusion templates first?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The safest migration is to render plain data first, then add formatting, cell templates, framework renderers, and editors after the basic rows, columns, sizing, and scrolling behavior are correct."
            }
          }
        ]
      }
---

# Migrating from Syncfusion Grid to RevoGrid

![RevoGrid JavaScript data grid migration preview](/blog/syncfusion.png)

Migrating from Syncfusion Grid to RevoGrid is usually a migration of **grid configuration and user workflows**, not a rewrite of your business data.

If your current Syncfusion Grid implementation uses a plain array of records in `dataSource`, your first RevoGrid version can often keep the same records and move them to `source`. The first column pass is also straightforward: map Syncfusion `field` to RevoGrid `prop`, and Syncfusion `headerText` to RevoGrid `name`.

The real migration work starts after the first render. Syncfusion applications often use framework-specific components, feature services, `DataManager`, toolbar commands, edit modes, templates, and event hooks. Those should not be copied one by one. They should be migrated as product workflows: editing, validation, filtering, sorting, paging, selection, export, remote data, grouping, hierarchy, and advanced analytics.

This guide is written for developers who already have a Syncfusion Grid screen and want a practical migration path to [RevoGrid](/), a high-performance JavaScript data grid with an MIT-licensed core, Web Component architecture, framework wrappers, virtual rows and columns, editing, custom cells, and a path into [RevoGrid Pro](/pro/) features.

If you are still comparing vendors, start with the [Syncfusion Alternative](/compare/syncfusion-alternative/) page. If you are ready to port code, use this migration guide.

::: tip Migration principle
Do not try to make RevoGrid look like Syncfusion internally. Keep the same product workflow, but map it to RevoGrid's API, event model, and Web Component foundation.
:::

## What changes during migration?

The first migration layer is simple:

| Syncfusion Grid | RevoGrid | Meaning |
| --- | --- | --- |
| `dataSource` | `source` | The data array rendered by the grid. |
| `columns` / `ColumnDirective` | `columns` | The column model. |
| `field` | `prop` | The row key used by a column. |
| `headerText` | `name` | The visible column header. |
| `width` | `size` | Column width in pixels. |
| `GridComponent` / `new Grid()` | `<revo-grid>` / framework wrapper | RevoGrid renders as a Web Component or wrapper. |

The second migration layer is where most real work happens:

| Workflow | Why it needs attention |
| --- | --- |
| Feature modules and services | Syncfusion often enables features with injected services such as paging, sorting, filtering, editing, toolbar, and virtual scroll. RevoGrid uses its own props, events, plugins, and Pro modules. |
| `DataManager` and adaptors | RevoGrid does not need Syncfusion's data abstraction. Move remote data loading into your application layer or RevoGrid-specific remote workflow. |
| Templates | Syncfusion templates and RevoGrid cell templates have different contracts. Port display behavior, not template syntax. |
| Edit modes | Syncfusion `Inline`, `Batch`, and `Dialog` modes need separate migration decisions. |
| Toolbar CRUD | Syncfusion toolbar actions should usually become application-level buttons or commands around RevoGrid. |
| Events | Syncfusion event props and callback names become RevoGrid DOM custom events. |
| Selection and clipboard | Spreadsheet-like UX should be tested as user journeys, not prop renames. |
| Advanced workflows | Grouping, hierarchy, aggregates, export, server-side operations, pivot, Gantt, and scheduling should be migrated one by one. |

## The migration in one table

| Syncfusion concept | RevoGrid concept | Migration note |
| --- | --- | --- |
| `dataSource` | `source` | Usually the same array of row objects. |
| `columns` | `columns` | Map `field` to `prop`, and `headerText` to `name`. |
| `ColumnDirective` | Plain column object | In RevoGrid, columns are objects passed to the grid. |
| `field` | `prop` | `prop` is the row key used by a RevoGrid column. |
| `headerText` | `name` | `name` controls the displayed column header. |
| `width` | `size` | Column width in pixels. |
| `minWidth` | `minSize` | Minimum column width. |
| `maxWidth` | `maxSize` | Maximum column width. |
| `visible: false` | Omit column or hide through app state | Keep a clean visible column model. |
| `allowEditing: false` | `readonly: true` | RevoGrid columns are editable unless locked. |
| `allowSorting` | `sortable` | Enable sorting per column where needed. |
| `allowFiltering` | Column `filter` plus grid `filter` prop | Enable filtering at grid level, then configure columns. |
| `format` | `cellTemplate`, parser, or column type | Keep raw values clean and format display in the column layer. |
| `template` | `cellTemplate` or framework renderer | Port the rendered UI, not the Syncfusion template contract. |
| `headerTemplate` | Header template / custom header workflow | Rebuild custom headers in RevoGrid's header model. |
| `editTemplate` | Custom editor | Register and assign RevoGrid editors where needed. |
| `editSettings` | Editability, events, and app state | Use `readonly`, `beforeedit`, and `afteredit`. |
| `allowPaging` / `pageSettings` | App-level pagination or remote source | RevoGrid can render large data virtually; add a pager only if the product needs one. |
| `allowSorting` / `sortSettings` | RevoGrid sorting config | Start with simple sorting, then port custom sort logic. |
| `allowFiltering` / `filterSettings` | RevoGrid filtering | Start with built-in filters, then port custom filter UI/logic. |
| `selectionSettings` | RevoGrid selection workflows | Test row, cell, range, and keyboard behavior explicitly. |
| `toolbar` | App toolbar + grid methods/events | Keep toolbar UI outside the grid unless it is truly cell content. |
| `DataManager` / adaptors | Application data service | Fetch, page, sort, and filter in your app or a RevoGrid remote workflow. |
| `queryCellInfo` | `cellTemplate`, column types, or events | Prefer declarative templates for display logic. |
| `actionBegin` / `actionComplete` | RevoGrid lifecycle events | Map by workflow: edit, filter, sort, source update, scroll, export. |
| Syncfusion modules/services | RevoGrid props, events, plugins, and Pro modules | Migrate behavior, not service names. |

The most important change is mental: Syncfusion Grid is commonly assembled from framework components and injected feature services. RevoGrid can be configured directly as a browser-native element:

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
| 1. Inventory | Understand how Syncfusion is used today. | List of columns, templates, edit settings, events, toolbar actions, data manager usage, selection rules, export flows, and advanced features. |
| 2. Data and columns | Render the same data in RevoGrid. | `source` and `columns` working without custom UI. |
| 3. Sizing and layout | Match viewport, widths, pinned/frozen columns, row height, and theme basics. | Grid looks structurally correct. |
| 4. Editing and validation | Reconnect user edits to application state. | `beforeedit` / `afteredit` handlers and locked columns. |
| 5. Templates and formatting | Port custom display logic. | Cell templates, framework renderers, and reusable column types. |
| 6. Filtering, sorting, and paging | Rebuild data operations. | Built-in or custom filtering/sorting behavior and optional pagination. |
| 7. Selection and clipboard | Recreate spreadsheet-like UX. | Tested keyboard, range, copy/paste, and row selection flows. |
| 8. Remote data | Replace `DataManager` and adaptors intentionally. | Application data service or RevoGrid remote workflow. |
| 9. Advanced workflows | Move grouping, hierarchy, aggregate, pivot, export, Gantt, or scheduler features. | One workflow migrated at a time. |
| 10. Acceptance tests | Prove behavior with real user journeys. | Regression tests before removing Syncfusion. |

::: warning Do not start with templates
If the first migration commit includes every template, editor, toolbar action, `DataManager` adaptor, and advanced workflow, it becomes hard to debug. Start with plain text cells. Once rows, columns, sizing, and scrolling work, add custom behavior back.
:::

## Step 1: Move rows from `dataSource` to `source`

Syncfusion examples commonly start with `dataSource`:

```ts
const dataSource = [
  { orderId: 10248, customer: 'VINET', freight: 32.38, shipped: true },
  { orderId: 10249, customer: 'TOMSP', freight: 11.61, shipped: false },
  { orderId: 10250, customer: 'HANAR', freight: 65.83, shipped: true },
];
```

In RevoGrid, the equivalent property is `source`:

```ts
const source = [
  { orderId: 10248, customer: 'VINET', freight: 32.38, shipped: true },
  { orderId: 10249, customer: 'TOMSP', freight: 11.61, shipped: false },
  { orderId: 10250, customer: 'HANAR', freight: 65.83, shipped: true },
];
```

For most client-side grids, this is a rename. You do not need to reshape records just because you are changing grid libraries.

You should review your row model only if your Syncfusion implementation depends heavily on `DataManager`, remote adaptors, generated group rows, aggregate rows, hierarchy rows, batch edit state, or server-side query objects. Those should be migrated as explicit workflows instead of hidden inside the first rendering pass.

## Step 2: Move Syncfusion columns to RevoGrid columns

Syncfusion React columns often look like this:

```tsx
<GridComponent dataSource={orders} allowSorting={true} allowFiltering={true}>
  <ColumnsDirective>
    <ColumnDirective
      field="orderId"
      headerText="Order ID"
      width="120"
      textAlign="Right"
      isPrimaryKey={true}
    />
    <ColumnDirective field="customer" headerText="Customer" width="160" />
    <ColumnDirective field="freight" headerText="Freight" width="120" format="C2" />
    <ColumnDirective field="shipped" headerText="Shipped" width="120" displayAsCheckBox={true} />
  </ColumnsDirective>
</GridComponent>
```

The first RevoGrid version should be plain and direct:

```ts
const columns = [
  { prop: 'orderId', name: 'Order ID', size: 120, readonly: true },
  { prop: 'customer', name: 'Customer', size: 160 },
  { prop: 'freight', name: 'Freight', size: 120 },
  { prop: 'shipped', name: 'Shipped', size: 120 },
];
```

Use this as the first pass:

| Syncfusion column property | RevoGrid column property | Notes |
| --- | --- | --- |
| `field` | `prop` | Required for binding a column to a row property. |
| `headerText` | `name` | Header label. |
| `width` | `size` | Column width in pixels. |
| `minWidth` | `minSize` | Minimum column width. |
| `maxWidth` | `maxSize` | Maximum column width. |
| `allowEditing: false` | `readonly: true` | Use for locked columns. |
| `isPrimaryKey: true` | `readonly: true` plus app identity logic | Keep identity fields stable. |
| `allowSorting` | `sortable` | Enable sorting where needed. |
| `allowFiltering` | `filter` | Enable grid filtering first, then configure column filters. |
| `format` | `cellTemplate` or column type | Move display-only formatting into the column layer. |
| `template` | `cellTemplate` or framework renderer | Port the UI behavior, not Syncfusion syntax. |
| `editType` / `editTemplate` | Custom editor | Rebuild as a RevoGrid editor when needed. |
| `visible: false` | Exclude from visible `columns` | Keep hidden columns in app metadata if needed. |

Start by migrating only field binding, labels, widths, and read-only rules. Then port templates and editors once the basic grid is visible.

## A temporary column converter

For larger migrations, it can help to write a temporary converter. This lets you render a first RevoGrid version before manually refining every column.

```ts
type SyncfusionColumn = {
  field?: string;
  headerText?: string;
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  visible?: boolean;
  allowEditing?: boolean;
  allowSorting?: boolean;
  allowFiltering?: boolean;
  isPrimaryKey?: boolean;
  type?: string;
  format?: string | object;
  template?: unknown;
};

const toNumber = (value?: number | string) => {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = Number(value.replace('px', ''));
    return Number.isFinite(parsed) ? parsed : undefined;
  }
  return undefined;
};

const filterByType = (type?: string) => {
  if (type === 'number') return 'number';
  if (type === 'date' || type === 'datetime') return 'date';
  return 'string';
};

export function syncfusionColumnsToRevo(columns: SyncfusionColumn[]) {
  return columns
    .filter((column) => column.visible !== false && column.field)
    .map((column) => ({
      prop: column.field,
      name: column.headerText || column.field,
      size: toNumber(column.width),
      minSize: toNumber(column.minWidth),
      maxSize: toNumber(column.maxWidth),
      readonly: column.allowEditing === false || column.isPrimaryKey === true || undefined,
      sortable: column.allowSorting === false ? false : undefined,
      filter: column.allowFiltering === false ? undefined : filterByType(column.type),
    }));
}
```

Use this only as a bridge. It should not become your final abstraction. The final RevoGrid column model should be explicit, typed, and adapted to your product behavior.

## Step 3: Replace grid creation

Syncfusion JavaScript setup often creates a grid with a configuration object and appends it to a container:

```ts
import { Grid, Page, Sort, Filter, Edit, Toolbar } from '@syncfusion/ej2-grids';

Grid.Inject(Page, Sort, Filter, Edit, Toolbar);

const grid = new Grid({
  dataSource: orders,
  allowPaging: true,
  allowSorting: true,
  allowFiltering: true,
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Normal',
  },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  columns: [
    { field: 'orderId', headerText: 'Order ID', width: 120, isPrimaryKey: true },
    { field: 'customer', headerText: 'Customer', width: 160 },
    { field: 'freight', headerText: 'Freight', width: 120 },
  ],
});

grid.appendTo('#Grid');
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
    { prop: 'orderId', name: 'Order ID', size: 120, readonly: true },
    { prop: 'customer', name: 'Customer', size: 160 },
    { prop: 'freight', name: 'Freight', size: 120 },
  ];

  grid.source = [
    { orderId: 10248, customer: 'VINET', freight: 32.38 },
    { orderId: 10249, customer: 'TOMSP', freight: 11.61 },
    { orderId: 10250, customer: 'HANAR', freight: 65.83 },
  ];

  grid.filter = true;
}
```

Keep the element height explicit. Like other virtualized grids, RevoGrid needs a real viewport size so it can calculate visible rows and columns.

For setup details, use the [JavaScript quick start](/guide/) and [installation guide](/guide/installation).

## Step 4: Migrate framework wrappers

The RevoGrid API stays close across frameworks because the grid foundation is the same Web Component.

### React

Syncfusion React code often combines `GridComponent`, `ColumnsDirective`, `ColumnDirective`, and injected services:

```tsx
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Inject,
  Page,
  Sort,
} from '@syncfusion/ej2-react-grids';

export function OrdersGrid({ orders }) {
  return (
    <GridComponent
      dataSource={orders}
      allowPaging={true}
      allowSorting={true}
      allowFiltering={true}
    >
      <ColumnsDirective>
        <ColumnDirective field="orderId" headerText="Order ID" width="120" />
        <ColumnDirective field="customer" headerText="Customer" width="160" />
        <ColumnDirective field="freight" headerText="Freight" width="120" />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter]} />
    </GridComponent>
  );
}
```

With RevoGrid, pass `columns` and `source` to the React wrapper:

```tsx
import RevoGrid from '@revolist/react-datagrid';
import { useMemo } from 'react';

export function OrdersGrid({ orders }) {
  const columns = useMemo(
    () => [
      { prop: 'orderId', name: 'Order ID', size: 120, readonly: true },
      { prop: 'customer', name: 'Customer', size: 160 },
      { prop: 'freight', name: 'Freight', size: 120, filter: 'number' },
    ],
    []
  );

  return <RevoGrid columns={columns} source={orders} filter={true} />;
}
```

Keep `columns` stable with `useMemo` unless the column model really changes. This avoids unnecessary wrapper updates and matches the [React Data Grid](/guide/react/) guide.

### Vue

Syncfusion Vue code often uses `ejs-grid`, `e-columns`, and injected services:

```vue
<template>
  <ejs-grid
    :dataSource="orders"
    :allowPaging="true"
    :allowSorting="true"
    :allowFiltering="true"
  >
    <e-columns>
      <e-column field="orderId" headerText="Order ID" width="120" />
      <e-column field="customer" headerText="Customer" width="160" />
      <e-column field="freight" headerText="Freight" width="120" />
    </e-columns>
  </ejs-grid>
</template>
```

Vue apps can bind the same RevoGrid `columns` and `source` props:

```vue
<script setup lang="ts">
import { ref } from 'vue';

const source = ref([
  { orderId: 10248, customer: 'VINET', freight: 32.38 },
  { orderId: 10249, customer: 'TOMSP', freight: 11.61 },
]);

const columns = [
  { prop: 'orderId', name: 'Order ID', size: 120, readonly: true },
  { prop: 'customer', name: 'Customer', size: 160 },
  { prop: 'freight', name: 'Freight', size: 120, filter: 'number' },
];
</script>

<template>
  <revo-grid :columns="columns" :source="source" :filter="true" />
</template>
```

Use the [Vue 3 guide](/guide/vue3/) for Composition API and renderer examples.

### Angular

Syncfusion Angular code often uses `ejs-grid`, `e-columns`, and provider services:

```html
<ejs-grid
  [dataSource]="orders"
  [allowPaging]="true"
  [allowSorting]="true"
  [allowFiltering]="true"
>
  <e-columns>
    <e-column field="orderId" headerText="Order ID" width="120"></e-column>
    <e-column field="customer" headerText="Customer" width="160"></e-column>
    <e-column field="freight" headerText="Freight" width="120"></e-column>
  </e-columns>
</ejs-grid>
```

Angular bindings for RevoGrid use property binding:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'orders-grid',
  template: `
    <revo-grid
      [columns]="columns"
      [source]="source"
      [filter]="true"
    ></revo-grid>
  `,
})
export class OrdersGridComponent {
  source = [
    { orderId: 10248, customer: 'VINET', freight: 32.38 },
    { orderId: 10249, customer: 'TOMSP', freight: 11.61 },
  ];

  columns = [
    { prop: 'orderId', name: 'Order ID', size: 120, readonly: true },
    { prop: 'customer', name: 'Customer', size: 160 },
    { prop: 'freight', name: 'Freight', size: 120, filter: 'number' },
  ];
}
```

Use the [Angular Data Grid](/guide/angular/) guide for wrapper setup and framework renderer patterns.

### Svelte

Many Syncfusion Svelte/SvelteKit setups use EJ2 JavaScript components directly or custom wrappers. RevoGrid has a direct Svelte path, so the migration can usually be simplified:

```svelte
<script lang="ts">
  const source = [
    { orderId: 10248, customer: 'VINET', freight: 32.38 },
    { orderId: 10249, customer: 'TOMSP', freight: 11.61 },
  ];

  const columns = [
    { prop: 'orderId', name: 'Order ID', size: 120, readonly: true },
    { prop: 'customer', name: 'Customer', size: 160 },
    { prop: 'freight', name: 'Freight', size: 120, filter: 'number' },
  ];
</script>

<revo-grid {columns} {source} filter={true} />
```

Use the [Svelte Data Grid](/guide/svelte/) guide for installation and framework details.

## Step 5: Replace feature injection with RevoGrid configuration

Syncfusion features are often enabled with modules or services. For example, React code may inject `Page`, `Sort`, `Filter`, `Edit`, `Toolbar`, and `VirtualScroll` into the grid.

In RevoGrid, you should not try to recreate a service injection layer. Instead, migrate each feature to the RevoGrid property, event, plugin, or Pro module that matches the user workflow.

| Syncfusion service/module | RevoGrid migration path |
| --- | --- |
| `Page` | Use app-level pagination or remote data. Only add a pager if the product needs pages. |
| `Sort` | Use RevoGrid sortable columns and sorting events. |
| `Filter` | Enable `filter` and configure column filters. |
| `Edit` | Use RevoGrid editing, `readonly`, `beforeedit`, and `afteredit`. |
| `Toolbar` | Move toolbar UI to the application layer. |
| `VirtualScroll` | RevoGrid virtualizes rows and columns as a core rendering model. |
| `Group` | Migrate grouping as a separate workflow. |
| `Aggregate` | Rebuild summaries as app-level computed rows, custom footer UI, or Pro workflows. |
| `Resize` / `Reorder` | Rebuild column sizing and ordering behavior with RevoGrid column APIs. |
| `ExcelExport` / `PdfExport` | Use RevoGrid export workflows or custom server-side export where needed. |

This step is important because Syncfusion's API is feature-service oriented, while RevoGrid's mental model is grid props, events, plugins, and application composition.

## Step 6: Migrate events and application state

Syncfusion event handlers often look like this:

```tsx
<GridComponent
  dataSource={orders}
  actionBegin={handleActionBegin}
  actionComplete={handleActionComplete}
  cellSave={handleCellSave}
  rowSelected={handleRowSelected}
/>
```

RevoGrid emits DOM custom events from the grid element. The most common migration is to replace Syncfusion edit callbacks with RevoGrid edit lifecycle events:

```ts
const grid = document.querySelector('revo-grid');

grid?.addEventListener('afteredit', (event) => {
  const { prop, val, model } = event.detail;

  console.log('Edited column', prop);
  console.log('New value', val);
  console.log('Row model', model);
});
```

Use these event groups as a starting point:

| Syncfusion workflow | RevoGrid events to inspect |
| --- | --- |
| Before edit starts | `beforeeditstart` |
| Validate or cancel an edit | `beforeedit` |
| Sync committed edits | `afteredit` |
| Filter changes | `beforefilterapply`, `filterconfigchanged` |
| Sort changes | `beforesorting`, `beforesortingapply`, `sortingconfigchanged` |
| Source replacement | `beforesourceset`, `aftersourceset` |
| Column changes | `beforecolumnsset`, `aftercolumnsset` |
| Scroll-driven loading | `viewportscroll` |
| Export customization | `beforeexport` |
| Selection and focus workflows | Selection and focus events from the grid API docs |

For more detail, use [Event Patterns and Lifecycles](/guide/events-guide), [Editing](/guide/editing), and [Programmatic Grid Control](/guide/programmatic-control).

## Step 7: Migrate templates, formatters, and custom cells

Do not copy Syncfusion templates directly into RevoGrid. Syncfusion templates, `valueAccessor`, `queryCellInfo`, and `format` are built around Syncfusion's rendering lifecycle. RevoGrid cell templates receive RevoGrid cell props and should be written for RevoGrid directly.

The clean path is:

1. Keep raw data in `source`.
2. Move display-only formatting into a `cellTemplate` or column type.
3. Move interactive UI into a framework renderer only when the cell really needs framework state.
4. Keep heavy calculations outside the cell render path.

Example Syncfusion formatting:

```tsx
<ColumnDirective
  field="freight"
  headerText="Freight"
  width="120"
  format="C2"
  textAlign="Right"
/>
```

RevoGrid display formatter:

```ts
const currencyCell = (h, { value }) => {
  const amount = Number(value || 0);
  return h('span', null, `$${amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`);
};

const columns = [
  { prop: 'customer', name: 'Customer' },
  { prop: 'freight', name: 'Freight', cellTemplate: currencyCell },
];
```

Example boolean display:

```ts
const shippedCell = (h, { value }) => h('span', null, value ? 'Yes' : 'No');

const columns = [
  { prop: 'shipped', name: 'Shipped', cellTemplate: shippedCell },
];
```

Use native cell templates for simple formatting. Use framework renderers when you need React, Vue, Angular, or Svelte components inside cells. The [Cell Renderer](/guide/cell/renderer), [React Cell Template](/guide/react/renderer), and [Vue renderer examples](/guide/vue3/renderer) are the best next pages.

## Step 8: Migrate editing

Syncfusion editing often starts with `editSettings`:

```tsx
<GridComponent
  dataSource={orders}
  editSettings={{
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Batch',
  }}
  toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
/>
```

In RevoGrid:

- columns are editable by default unless the grid or column is read-only;
- use `readonly: true` to lock a column;
- register custom editors through `editors`;
- use `beforeedit` to validate, cancel, or rewrite edits;
- use `afteredit` to synchronize committed changes;
- implement add/delete/batch save as application-level commands when needed.

```ts
const columns = [
  { prop: 'orderId', name: 'Order ID', readonly: true },
  { prop: 'customer', name: 'Customer' },
  { prop: 'freight', name: 'Freight' },
];

grid.addEventListener('beforeedit', (event) => {
  if (event.detail.prop === 'freight' && Number(event.detail.val) < 0) {
    event.preventDefault();
  }
});

grid.addEventListener('afteredit', (event) => {
  const { model, prop, val } = event.detail;
  saveDraftChange({ rowId: model.orderId, prop, value: val });
});
```

### Inline editing

If your Syncfusion grid uses normal inline editing, migrate to RevoGrid's cell editing first. Keep validation in `beforeedit` and state synchronization in `afteredit`.

### Batch editing

If your Syncfusion grid uses `mode: 'Batch'`, do not hide batch state inside the grid. Keep a draft change set in your application store:

```ts
const pendingChanges = new Map();

grid.addEventListener('afteredit', (event) => {
  const { model, prop, val } = event.detail;
  const rowId = model.orderId;

  pendingChanges.set(`${rowId}:${String(prop)}`, {
    rowId,
    prop,
    value: val,
  });
});

async function saveAllChanges() {
  await api.saveOrderChanges([...pendingChanges.values()]);
  pendingChanges.clear();
}
```

Then connect `saveAllChanges` to your own toolbar button.

### Dialog editing

If your Syncfusion grid uses `mode: 'Dialog'`, treat that dialog as application UI. Keep RevoGrid focused on displaying and selecting rows, then open your own modal or form to edit the selected record.

That approach is usually cleaner than trying to force a grid-level dialog editing model into a different grid library.

## Step 9: Migrate filtering, sorting, and paging

Start with the simplest RevoGrid equivalents, then rebuild advanced behavior.

### Filtering

Syncfusion filtering often starts with `allowFiltering` and `filterSettings`.

In RevoGrid, enable filtering at the grid level:

```ts
grid.filter = true;
```

Then configure columns:

```ts
grid.columns = [
  { prop: 'customer', name: 'Customer', filter: 'string' },
  { prop: 'freight', name: 'Freight', filter: 'number' },
];
```

For saved filter state, custom filter operations, and multi-filter behavior, use [RevoGrid Filtering](/guide/filters).

### Sorting

Syncfusion sorting often uses `allowSorting` and optional `sortSettings`.

In RevoGrid, start with sortable columns:

```ts
grid.columns = [
  { prop: 'customer', name: 'Customer', sortable: true },
  { prop: 'freight', name: 'Freight', sortable: true },
];
```

Port comparator-heavy implementations carefully. First migrate default sorting. Then reintroduce custom compare logic only where product behavior requires it.

Use [Sorting](/guide/sorting) for the current RevoGrid sorting API.

### Paging

Syncfusion grids often use `allowPaging` and `pageSettings`. RevoGrid is usually a better fit when you let the grid virtualize rows and columns rather than forcing a page-by-page UI for local data.

Keep pagination only if it is part of the product workflow, such as audit screens, server-side datasets, billing tables, or APIs that are page-based.

For client-side pagination, slice the source in your app:

```ts
const pageSize = 100;
let currentPage = 0;

function renderPage(allRows) {
  grid.source = allRows.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );
}
```

For remote pagination, keep page, sort, and filter state in your application layer, fetch the next segment from the server, then assign the result to `grid.source`.

## Step 10: Replace `DataManager` intentionally

Syncfusion projects often use `DataManager` and adaptors to connect the grid to OData, Web API, UrlAdaptor, or custom server-side operations.

Do not try to port `DataManager` itself. Instead, separate the problem into three parts:

1. What data does the grid need to display?
2. What query state does the server need: page, page size, sort, filters, grouping, search?
3. Which user actions should trigger a request?

A RevoGrid remote data loop can be simple:

```ts
type GridQuery = {
  page: number;
  pageSize: number;
  sort?: { prop: string; order: 'asc' | 'desc' };
  filters?: Record<string, unknown>;
};

let query: GridQuery = {
  page: 0,
  pageSize: 100,
};

async function loadOrders() {
  const response = await fetch('/api/orders/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
  });

  const result = await response.json();
  grid.source = result.items;
}

grid.addEventListener('sortingconfigchanged', (event) => {
  query = {
    ...query,
    sort: event.detail.columns?.[0]
      ? {
          prop: String(event.detail.columns[0].prop),
          order: event.detail.columns[0].order,
        }
      : undefined,
  };

  loadOrders();
});
```

The exact event strategy depends on whether you want local operations, remote operations, or a hybrid. The important point is architectural: keep server querying in your application data layer, not embedded in a vendor-specific data abstraction.

## Step 11: Migrate toolbar actions

Syncfusion toolbar configuration often contains built-in commands:

```tsx
<GridComponent
  dataSource={orders}
  toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExcelExport']}
/>
```

In RevoGrid, treat the toolbar as application UI:

```tsx
function OrdersScreen() {
  const [rows, setRows] = useState(initialRows);

  const addRow = () => {
    setRows((current) => [
      { orderId: crypto.randomUUID(), customer: '', freight: 0 },
      ...current,
    ]);
  };

  const deleteSelectedRows = () => {
    // Use your selected row state here.
  };

  const exportRows = () => {
    // Use RevoGrid export workflow or your server-side export endpoint.
  };

  return (
    <>
      <div className="grid-toolbar">
        <button onClick={addRow}>Add</button>
        <button onClick={deleteSelectedRows}>Delete</button>
        <button onClick={exportRows}>Export</button>
      </div>

      <RevoGrid columns={columns} source={rows} />
    </>
  );
}
```

This makes the migration cleaner because business commands stay in your application, while the grid focuses on rendering, editing, scrolling, selection, and cell-level interaction.

## Step 12: Migrate selection, clipboard, and keyboard behavior

Syncfusion `selectionSettings` can cover row selection, cell selection, checkbox selection, persistence, and multi-select behavior.

Do not treat this as a single prop rename. Selection is a user workflow.

Audit these questions before migrating:

- Does the user select rows, cells, ranges, or all three?
- Is selection controlled by application state?
- Are checkboxes used as data fields, selection controls, or both?
- Does selection persist across filtering, paging, or remote reloads?
- Does copy/paste include raw values, formatted values, or hidden columns?
- Are keyboard shortcuts part of the expected UX?

For simple row actions, keep selected row IDs in your application state. For spreadsheet-like behavior, test cell focus, range selection, copy/paste, keyboard navigation, and edit activation as acceptance criteria.

## Step 13: Replace Syncfusion advanced workflows intentionally

If your Syncfusion implementation uses advanced features, migrate by user workflow rather than by module name.

| Existing Syncfusion workflow | RevoGrid path |
| --- | --- |
| Large local datasets | Core virtual rows and columns. |
| Virtual scrolling | Core virtualized rendering. |
| Paging | App-level pager or remote source when pages are part of the product. |
| Sorting and filtering | Core sorting/filtering plus custom events where needed. |
| Inline editing | Core editing plus `beforeedit` / `afteredit`. |
| Batch editing | App-level draft changes plus RevoGrid edit events. |
| Dialog editing | External form/modal controlled by the app. |
| Toolbar CRUD | App toolbar plus grid methods/events. |
| Column templates | `cellTemplate`, column types, or framework renderers. |
| Header templates | Custom header workflow or column header templates. |
| Frozen columns | RevoGrid column pinning. |
| Grouping | Core grouping patterns or Pro grouping depending on UX. |
| Aggregates / summaries | App-computed summary rows, custom footer, or Pro workflows. |
| Hierarchy / detail template | Master-detail pattern, custom renderers, or Pro modules. |
| TreeGrid | Core tree pattern or Pro TreeDataPlugin for richer hierarchy controls. |
| Pivot analytics | [RevoGrid Pivot](/pivot/) and Pivot docs. |
| Gantt or scheduling | [RevoGrid Gantt](/gantt/) and scheduler pages. |
| Excel import/export | RevoGrid Pro import/export workflows. |
| Audit history | RevoGrid Pro audit history. |
| Server-side data | Remote pagination, infinite scroll, server-side grouping, or Pivot server-side contracts. |

This is usually where a migration becomes product-specific. Get the basic grid running first, then migrate each advanced workflow with a focused acceptance test.

## Suggested migration checklist

Use this order to keep the migration controlled:

1. Create a RevoGrid screen next to the existing Syncfusion Grid screen.
2. Copy the same data array into `source`.
3. Convert Syncfusion columns to RevoGrid `columns` with only `prop`, `name`, width, and read-only settings.
4. Confirm virtualization, sizing, scrolling, and first paint.
5. Enable editing and migrate edit validation.
6. Add filtering and sorting.
7. Decide whether paging is still needed or whether virtual scrolling is enough.
8. Replace `DataManager` with app-level data loading or RevoGrid remote workflows.
9. Port display templates and formatters.
10. Port custom editors.
11. Rebuild toolbar actions in the application layer.
12. Reconnect application state synchronization.
13. Migrate selection, clipboard, export, grouping, tree, pivot, and other advanced workflows.
14. Run browser tests around the real user flows before removing Syncfusion.

The goal is not to make the first RevoGrid commit feature-complete. The goal is to get the same data on screen quickly, then move behavior in small, testable slices.

## Acceptance tests before removing Syncfusion

Before removing the old grid, test the real user journeys that made the original grid valuable.

| Area | What to verify |
| --- | --- |
| Rendering | Same records, same important columns, correct hidden/visible columns. |
| Layout | Height, width, pinned columns, row height, responsive behavior, empty states. |
| Performance | Large dataset scrolling, frequent updates, browser memory, first render. |
| Editing | Read-only columns, invalid values, save/cancel behavior, batch save if used. |
| Filtering | Text, number, date, boolean, saved filters, empty filter state. |
| Sorting | Single sort, multi-sort if needed, custom sort rules, server sort state. |
| Remote data | Page changes, sort/filter reloads, loading state, errors, retries. |
| Selection | Row/cell/range selection, checkbox selection, persistence after data changes. |
| Clipboard | Copy, paste, formatted values, hidden columns, invalid pasted values. |
| Export | Exported columns, row order, filtered rows, formatting, server export if used. |
| Keyboard | Navigation, enter-to-edit, escape/cancel, tab behavior, shortcuts. |
| Accessibility | Focus order, screen reader labels where relevant, keyboard-only operation. |

## Common pitfalls

### Porting Syncfusion templates too early

Render the grid with plain text first. Once rows, columns, and sizing are correct, migrate templates. This makes it clear whether a problem belongs to data mapping or cell UI.

### Treating `editSettings` as a direct RevoGrid equivalent

Syncfusion enables editing through `editSettings`. RevoGrid columns are editable unless the grid or column is read-only. During migration, audit which columns should be locked and set `readonly: true` where needed.

### Trying to recreate `DataManager`

`DataManager` can hide a lot of server-side behavior: paging, sorting, filtering, search, CRUD, and request shaping. Rebuild that contract in your application data layer. Do not hide it inside a compatibility wrapper unless you are using the wrapper only temporarily.

### Migrating toolbar actions as grid configuration

In Syncfusion, toolbar commands often live inside grid configuration. In RevoGrid, keep toolbar actions in your product UI and connect them to grid state, selected rows, draft changes, export endpoints, or public grid methods.

### Forgetting that paging may no longer be needed

Many Syncfusion screens use paging because it was part of the original implementation. RevoGrid's virtualized rendering may make local paging unnecessary. Keep paging only if users expect pages or the backend requires page-based loading.

### Mixing formatted values with raw data

Keep `source` clean. Put display formatting in cell templates or column types. This makes filtering, sorting, editing, and export easier to reason about.

### Migrating all advanced features at once

Grouping, hierarchy, aggregates, batch editing, server-side data, export, and pivoting are different workflows. Migrate them separately with clear acceptance criteria.

### Forgetting the Web Component boundary

RevoGrid works across frameworks because the core is a Web Component. That is an advantage, but it also means SSR and browser-only behavior should be handled intentionally. In SSR frameworks, load the grid on the client side.

## A minimal before and after

Syncfusion JavaScript:

```ts
import { Grid, Sort, Filter } from '@syncfusion/ej2-grids';

Grid.Inject(Sort, Filter);

const grid = new Grid({
  dataSource: [
    { orderId: 10248, customer: 'VINET', freight: 32.38 },
    { orderId: 10249, customer: 'TOMSP', freight: 11.61 },
  ],
  allowSorting: true,
  allowFiltering: true,
  columns: [
    { field: 'orderId', headerText: 'Order ID', width: 120 },
    { field: 'customer', headerText: 'Customer', width: 160 },
    { field: 'freight', headerText: 'Freight', width: 120 },
  ],
});

grid.appendTo('#Grid');
```

RevoGrid:

```ts
const grid = document.querySelector('revo-grid');

if (grid) {
  grid.source = [
    { orderId: 10248, customer: 'VINET', freight: 32.38 },
    { orderId: 10249, customer: 'TOMSP', freight: 11.61 },
  ];

  grid.columns = [
    { prop: 'orderId', name: 'Order ID', size: 120, readonly: true },
    { prop: 'customer', name: 'Customer', size: 160, sortable: true },
    { prop: 'freight', name: 'Freight', size: 120, sortable: true, filter: 'number' },
  ];

  grid.filter = true;
}
```

That is the right first migration target. After that, add back the workflows that make your grid valuable: editing, validation, filtering, sorting, templates, selection, export, remote data, and advanced modules.

## What to read next

- [JavaScript Data Grid Quick Start](/guide/)
- [RevoGrid Installation](/guide/installation)
- [React Data Grid](/guide/react/)
- [Vue 3 Data Grid](/guide/vue3/)
- [Angular Data Grid](/guide/angular/)
- [Svelte Data Grid](/guide/svelte/)
- [RevoGrid Editing](/guide/editing)
- [RevoGrid Filtering](/guide/filters)
- [Programmatic Grid Control](/guide/programmatic-control)
- [Cell Renderer](/guide/cell/renderer)
- [Syncfusion Alternative](/compare/syncfusion-alternative/)

## FAQ

### Can RevoGrid replace Syncfusion Grid?

Yes, for many applications. RevoGrid is a strong fit when you need a fast JavaScript data grid with virtualized rendering, editable cells, framework support, custom renderers, events, and a path to advanced Pro workflows. Highly Syncfusion-specific implementations that depend on `DataManager`, toolbar CRUD, custom templates, grouping, hierarchy, export, or server-side operations should be migrated workflow by workflow.

### Do I need to rewrite my data?

Usually no. If your existing Syncfusion Grid uses an array of plain row objects in `dataSource`, that array can usually become RevoGrid `source`. Most migration work is in columns, templates, custom editing, event handling, selection behavior, and advanced grid features.

### What is the first thing to migrate?

Start with `dataSource` to `source` and Syncfusion columns to RevoGrid `columns`. Map `field` to `prop`, `headerText` to `name`, and basic width/read-only settings. Do not start with templates, `DataManager`, toolbar commands, or advanced workflows.

### Does RevoGrid work in React, Vue, Angular, and Svelte?

Yes. RevoGrid has a Web Component foundation and framework integration guides for React, Vue, Angular, Svelte, TypeScript, and plain JavaScript.

### How should I migrate Syncfusion `DataManager`?

Do not port `DataManager` directly. Move data fetching, sorting, filtering, paging, and CRUD requests into your application data layer. Then assign the loaded records to RevoGrid `source` and use RevoGrid events to update your query state.

### How should I migrate Syncfusion batch editing?

Keep draft changes in your application store. Listen to RevoGrid edit events, collect changed values, and save them when the user clicks your own Save or Update button. This keeps batch behavior explicit and testable.

### Should I migrate all Syncfusion features in one release?

No. Render the basic grid first, then migrate editing, filtering, sorting, templates, selection, export, remote data, and advanced workflows in separate, testable steps.
