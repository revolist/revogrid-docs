---
title: RevoGrid Filtering
description: Enable built-in filtering in RevoGrid, configure per-column filter types, preserve filter state, customize filter logic, and upgrade to RevoGrid Pro advanced filtering.
head:
  - - meta
    - name: keywords
      content: RevoGrid filtering, JavaScript data grid filter, custom grid filters, ColumnFilterConfig, filter collection, multi filter, custom filter function, RevoGrid Pro filtering
---

# RevoGrid Filtering

<DemoWidgetFrame
  demo="clear-filtering"
  framework="ts"
  title="RevoGrid Filtering"
  minHeight="600"
/>

Filtering lets users narrow the visible rows without changing the original `source`. RevoGrid keeps the full dataset available and hides non-matching physical row indexes through the trimming pipeline, so filtering works together with virtual scrolling, sorting, editing, and `getVisibleSource()`.

## Enable filtering

Turn on the built-in filter plugin with the grid-level `filter` prop:

```ts
const grid = document.querySelector('revo-grid');

grid.source = [
  { name: 'Steve', role: 'Admin', score: 92 },
  { name: 'Anna', role: 'Editor', score: 76 },
  { name: 'John', role: 'Viewer', score: 61 },
];

grid.columns = [
  { prop: 'name', name: 'Name' },
  { prop: 'role', name: 'Role' },
  { prop: 'score', name: 'Score', filter: 'number' },
];

grid.filter = true;
```

The grid-level `filter` value enables the plugin. The column-level `filter` value decides whether a column has a filter button and which filter family the panel should use.

[<Badge type="tip">RevoGrid filter prop</Badge>](/guide/types/JSX.Interface.RevoGrid#properties)
[<Badge type="tip">Column filter option</Badge>](/guide/types/Interface.ColumnRegular#properties)

## Column filter options

Use `filter` on a column when you need to override the default behavior.

```ts
const columns = [
  { prop: 'name', name: 'Name' },
  { prop: 'internalId', name: 'Internal ID', filter: false },
  { prop: 'score', name: 'Score', filter: 'number' },
  { prop: 'status', name: 'Status', filter: ['string', 'selection'] },
];
```

| Value | Use it for |
| --- | --- |
| `true` | Enable the default filter family for the column. |
| `false` | Hide the filter UI for the column. |
| `'string'` | Text matching such as contains, starts with, and equals. |
| `'number'` | Numeric comparisons such as greater than and less than. |
| `string[]` | Multiple filter families, often used by Pro or custom filters. |

## Built-in filter operations

String columns support `notEmpty`, `empty`, `eq`, `notEq`, `begins`, `contains`, and `notContains`.

Number columns support `notEmpty`, `empty`, `eqN`, `neqN`, `gt`, `gte`, `lt`, and `lte`.

These operation ids are the values used in saved filter state, `include`, localization, and event payloads.

[<Badge type="tip">FilterItem</Badge>](/guide/types/Interface.FilterItem)
[<Badge type="tip">FilterType</Badge>](/guide/types/TypeAlias.FilterType)

## Configure `ColumnFilterConfig`

Pass an object to `grid.filter` when you need controlled behavior instead of the default plugin setup.

```ts
grid.filter = {
  include: ['contains', 'eq', 'notEmpty', 'gt', 'gte', 'lt', 'lte'],
  disableDynamicFiltering: true,
  closeFilterPanelOnOutsideClick: false,
};
```

Important options:

| Option | Purpose |
| --- | --- |
| `collection` | Restores single-filter state by column prop. |
| `multiFilterItems` | Restores multiple filters per column, including `and` / `or` relations. |
| `include` | Limits the operations shown in the dropdown. |
| `customFilters` | Registers custom operations. |
| `filterProp` | Uses a custom column property instead of `filter` to decide whether a column is filterable. |
| `localization` | Replaces filter captions and operation names. |
| `disableDynamicFiltering` | Applies changes only when the user confirms. |
| `closeFilterPanelOnOutsideClick` | Controls whether outside clicks close the filter panel. |

[<Badge type="tip">ColumnFilterConfig</Badge>](/guide/types/Interface.ColumnFilterConfig)
[<Badge type="tip">FilterCollectionItem</Badge>](/guide/types/TypeAlias.FilterCollectionItem)
[<Badge type="tip">MultiFilterItem</Badge>](/guide/types/Interface.MultiFilterItem)

## Restore saved filters

Use `collection` for simple saved filters:

```ts
grid.filter = {
  collection: {
    role: { type: 'eq', value: 'Admin' },
    score: { type: 'gte', value: 80 },
  },
};
```

Use `multiFilterItems` when a column needs several conditions:

```ts
grid.filter = {
  multiFilterItems: {
    score: [
      { id: 1, type: 'gte', value: 70 },
      { id: 2, type: 'lt', value: 95, relation: 'and' },
    ],
    role: [
      { id: 3, type: 'eq', value: 'Admin' },
      { id: 4, type: 'eq', value: 'Editor', relation: 'or' },
    ],
  },
};
```

## Filter parsed values

If a cell displays formatted text but filtering should use normalized data, add `cellParser` to the column or column type.

```ts
const columns = [
  {
    prop: 'total',
    name: 'Total',
    filter: 'number',
    cellTemplate: (h, { model, prop }) =>
      h('span', `$${Number(model[prop]).toLocaleString()}`),
    cellParser: (model, column) => Number(model[column.prop] ?? 0),
  },
];
```

See [Column Types and Formats](/guide/column/types) and [Custom Cell Formats](/guide/cell/custom-formats) for reusable parser patterns.

## Create a custom filter

Register custom operations through `customFilters`. The `columnFilterType` must match the column's `filter` value.

```ts
const matchesPriority = (value, expected = 'critical') =>
  String(value).toLowerCase() === String(expected).toLowerCase();
matchesPriority.extra = 'input';

grid.columns = [
  { prop: 'ticket', name: 'Ticket' },
  { prop: 'priority', name: 'Priority', filter: 'ticketPriority' },
];

grid.filter = {
  include: ['isHighPriority'],
  customFilters: {
    isHighPriority: {
      columnFilterType: 'ticketPriority',
      name: 'High priority',
      func: matchesPriority,
    },
  },
};
```

The filter function receives the parsed cell value and the extra value from the filter panel. `func.extra = 'input'` asks the panel to render an input for that operation. The filter API also supports `datepicker` or a custom extra-field renderer for specialized UIs.

[<Badge type="tip">CustomFilter</Badge>](/guide/types/Interface.CustomFilter)

## Event hooks

Filtering is event-driven. Use these hooks when your app needs to observe, rewrite, or replace filtering behavior.

```ts
grid.addEventListener('beforefilterapply', event => {
  const { collection } = event.detail;

  for (const prop of Object.keys(collection)) {
    if (collection[prop].value === '') {
      delete collection[prop];
    }
  }
});

grid.addEventListener('beforefiltertrimmed', event => {
  console.log('Rows about to be hidden', event.detail.itemsToFilter);
});
```

Useful events:

| Event | When to use it |
| --- | --- |
| `beforefilterapply` | Inspect or modify the filter collection before rows are evaluated. |
| `beforefiltertrimmed` | Inspect or replace the physical row indexes that will be hidden. |
| `beforetrimmed` | Intercept trimming generally, including filtering-driven trimming. |
| `aftertrimmed` | React after visible rows have changed. |
| `filterconfigchanged` | Persist new filter config when the `filter` prop changes. |

For the full event table, see [API: Events](/guide/api/events) and [API: RevoGrid](/guide/api/revoGrid). For the filtering event flow, see [Event Patterns and Lifecycles](/guide/events-guide#filtering).

## Read filtered rows

After a filter is applied, use `getVisibleSource()` when the application needs the current visible dataset.

```ts
const visibleRows = await grid.getVisibleSource();
const visibleEmails = visibleRows.map(row => row.email);
```

See [Programmatic Control](/guide/programmatic-control#read-visible-rows).

## Pro filtering

The open-source filter plugin is a strong base: text and number operations, custom functions, localization, saved state, and event hooks are all available in the Community package. RevoGrid Pro builds on the same API and makes filtering feel closer to a full spreadsheet or back-office data product.

Import the Pro plugins and stylesheet, then add the plugins to the grid `plugins` list. `AdvanceFilterPlugin` adds selection, slider, quick-search, and date filter operations; `FilterHeaderPlugin` adds always-visible header inputs.

```ts
import {
  AdvanceFilterPlugin,
  FilterHeaderPlugin,
  FIlTER_SELECTION,
  FIlTER_SLIDER,
} from '@revolist/revogrid-pro';
import '@revolist/revogrid-pro/dist/revogrid-pro.css';

const plugins = [AdvanceFilterPlugin, FilterHeaderPlugin];

const columns = [
  { prop: 'city', name: 'City', filter: ['string', FIlTER_SELECTION] },
  { prop: 'status', name: 'Status', filter: [FIlTER_SELECTION] },
  { prop: 'createdAt', name: 'Created', filter: ['date'] },
  { prop: 'amount', name: 'Amount', filter: ['number', FIlTER_SLIDER] },
  { prop: 'owner', name: 'Owner', filter: ['input'] },
];

grid.plugins = plugins;
grid.columns = columns;
grid.filter = true;
```

### Advanced Selection Filtering

Selection filtering gives users a fast pick-list for repeated values such as status, city, category, owner, country, or product type. It is ideal for operational grids where users already know the value they want and should not have to type exact text into a generic input.

### Advanced Slider Filtering

Slider filtering adds a range-based control for numeric columns. It works well for prices, quantities, ratings, scores, budgets, and other bounded numeric values where users want to narrow a dataset visually instead of entering `gte` and `lte` values manually.

### Header Input Filtering

Header input filtering keeps filter inputs visible directly in the header row. This is useful for dense back-office screens where filtering is a constant workflow and users need to scan, type, adjust, and compare without opening a popup for every column.

### Date Filter

Date filtering adds date-aware operations for temporal data such as schedules, orders, logs, audit records, deadlines, and activity history. Users can filter by exact dates, ranges, and common date windows without writing custom date parsing logic.

### Multi-Filtering

Multi-filtering lets users combine several conditions per field with clearer `and` / `or` workflows. It is especially useful when a single column needs layered logic, for example "amount is greater than 100 and less than 500" or "status is open or pending".

These Pro filters are valuable when users live in the grid all day: they can narrow a large dataset from several angles, combine filters without leaving the table, and keep the interaction fast because the Pro features plug into RevoGrid's existing virtualized rendering and filter events.

## Pro demos

Start with [RevoGrid Pro features](/pro/#features), or open the business demos that use Pro workflows:

- [HR workspace demo](/demo/hr)
- [Ecommerce and ERP demo](/demo/ecommerce)
- [Pivot analytics demo](/pivot/)

<div class="filter-pro-grid">
  <a class="filter-pro-card" href="/pro/#features">
    <img src="/img/filter-select.png" alt="Advanced selection filtering preview" />
    <strong>Advanced Selection Filtering</strong>
    <span>Selection-based filtering for repeated values.</span>
  </a>
  <a class="filter-pro-card" href="/pro/#features">
    <img src="/img/filter-slider.png" alt="Advanced slider filtering preview" />
    <strong>Advanced Slider Filtering</strong>
    <span>Numeric range filtering with a slider control.</span>
  </a>
  <a class="filter-pro-card" href="/pro/#features">
    <img src="/img/filter-header.png" alt="Header input filtering preview" />
    <strong>Header Input Filtering</strong>
    <span>Filter from persistent header-row inputs.</span>
  </a>
  <a class="filter-pro-card" href="/pro/#features">
    <img src="/img/filter-date.png" alt="Date filtering preview" />
    <strong>Date Filter</strong>
    <span>Filter temporal data by exact dates and ranges.</span>
  </a>
  <a class="filter-pro-card" href="/pro/#features">
    <img src="/img/filter-multi.png" alt="Multi-filtering preview" />
    <strong>Multi-Filtering</strong>
    <span>Combine multiple conditions per column.</span>
  </a>
</div>

## Related docs

- [JavaScript filtering demo](/demo/js/js.filtering)
- [Column Types and Formats](/guide/column/types)
- [Programmatic Control](/guide/programmatic-control)
- [Event Patterns and Lifecycles](/guide/events-guide#filtering)
- [API: Events](/guide/api/events)
- [API: RevoGrid](/guide/api/revoGrid)
- [API: ColumnFilterConfig](/guide/types/Interface.ColumnFilterConfig)

<style>
.filter-pro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 14px;
  margin: 18px 0 28px;
}

.filter-pro-card {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  background: var(--vp-c-bg-soft);
}

.filter-pro-card:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}

.filter-pro-card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 6px;
  background: var(--vp-c-bg);
}

.filter-pro-card strong {
  font-size: 14px;
  line-height: 1.35;
}

.filter-pro-card span {
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.45;
}
</style>
