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

## Performance by design

RevoGrid filters the data model, not the rendered DOM. It keeps the original `source` intact, calculates which rows should be visible, and lets row virtualization render only the small portion currently in the viewport. This makes filtering suitable for large, interactive datasets without creating a DOM element for every matching row.

Large local filter operations automatically run in short batches so the browser can stay responsive between slices of work. When an active filter is reapplied after replacing `source`, RevoGrid keeps the new rows hidden until the result is ready, then publishes the filtered view once. Users see an empty pending view followed by the correct result—not a flash of the complete unfiltered dataset.

- Small datasets keep the immediate synchronous path.
- Large datasets use a responsive, cancellable path, so a newer filter or source can replace stale work.
- Filtering composes with sorting, grouping, tree visibility, and other row trims before rows become visible.

Client-side filtering still evaluates the local records and any active conditions. Keep custom filter functions lightweight; for datasets that should not live entirely in the browser, use [server-side filtering](/guide/server-side-data#remote-filtering). See [Performance and Virtualization](/guide/performance) for broader large-data guidance.

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
  {
    prop: 'reference',
    name: 'Reference',
    filter: { type: 'string', default: 'eq' },
  },
  {
    prop: 'notes',
    name: 'Notes',
    filter: { type: 'string', default: false },
  },
];
```

| Value | Use it for |
| --- | --- |
| `true` | Enable the default filter family for the column. |
| `false` | Hide the filter UI for the column. |
| `'string'` | Text matching such as contains, starts with, and equals. |
| `'number'` | Numeric comparisons such as greater than and less than. |
| `string[]` | Multiple filter families, often used by Pro or custom filters. |
| `{ type, default }` | Select one or more filter families and optionally override the initial operator, or set `default: false` to open this column's panel empty. |

## Default filter conditions

When a column has no saved or active conditions, opening its filter panel shows
one removable draft condition. String columns start with **Contains** and number
columns start with **=**. Boolean, array, and custom filter families use their
first available operator.

The draft is ready for input but is not an applied filter. Opening or closing
the panel does not filter rows, activate the header filter icon, emit filtering
events, or add the draft to persisted filter state. Entering a value or
explicitly selecting an operator promotes it to a normal condition. If dynamic
filtering is disabled, the promoted condition remains local until **Save**.

Use the structured column form to choose a different initial operator:

```ts
grid.columns = [
  {
    prop: 'name',
    name: 'Name',
    filter: { type: 'string', default: 'eq' },
  },
  {
    prop: 'score',
    name: 'Score',
    filter: { type: ['number', 'string'], default: 'gte' },
  },
];
```

To keep the original empty-panel behavior everywhere, disable default drafts in
the grid filter configuration. A column can opt out independently with
`default: false`. Conversely, an explicit operator on a column opts that column
back in when the grid-wide setting is disabled.

```ts
grid.filter = { defaultFilter: false };

grid.columns = [
  { prop: 'name', filter: 'string' }, // Opens empty.
  { prop: 'notes', filter: { type: 'string', default: false } }, // Opens empty.
  { prop: 'status', filter: { type: 'string', default: 'eq' } }, // Opens with Equal.
];
```

The override must name an operator available to one of the configured families.
It is resolved after `include` and custom filters are applied. If it is invalid
or excluded, RevoGrid uses the built-in family default when available, then the
first available operator from the first configured family.

Removing the draft or clicking **Reset** leaves the current panel empty. A new
draft is created the next time that column's panel is opened. Existing filters
loaded through `collection`, `multiFilterItems`, or the `filter` event are shown
as-is and never receive an extra draft.

## Built-in filter operations

String columns support `notEmpty`, `empty`, `eq`, `notEq`, `begins`, `contains`, and `notContains`.

Number columns support `notEmpty`, `empty`, `eqN`, `neqN`, `gt`, `gte`, `lt`, and `lte`.

Boolean and array columns support the blank operations `notEmpty` and `empty`.

In the filter panel, `empty` is labeled **Is blank** and `notEmpty` is labeled **Is not blank**. The operation ids have not changed, so existing saved filter state remains compatible. These ids are also the values used by `include`, localization, and event payloads.

[<Badge type="tip">FilterItem</Badge>](/guide/types/Interface.FilterItem)
[<Badge type="tip">FilterType</Badge>](/guide/types/TypeAlias.FilterType)

## Configure `ColumnFilterConfig`

Pass an object to `grid.filter` when you need controlled behavior instead of the default plugin setup.

```ts
grid.filter = {
  defaultFilter: false,
  include: ['contains', 'eq', 'notEmpty', 'gt', 'gte', 'lt', 'lte'],
  disableDynamicFiltering: true,
  closeFilterPanelOnOutsideClick: false,
  allowDuplicateOperators: false,
};
```

Important options:

| Option | Purpose |
| --- | --- |
| `blankSemantics` | Defines which source values the blank operators match across the grid. |
| `defaultFilter` | Controls whether empty panels start with a draft condition. Defaults to `true`. |
| `collection` | Restores single-filter state by column prop. |
| `multiFilterItems` | Restores multiple filters per column, including `and` / `or` relations. |
| `include` | Limits the operations shown in the dropdown. |
| `customFilters` | Registers custom operations. |
| `filterProp` | Uses a custom column property instead of `filter` to decide whether a column is filterable. |
| `localization` | Replaces filter captions and operation names. |
| `disableDynamicFiltering` | Applies changes only when the user confirms. |
| `closeFilterPanelOnOutsideClick` | Controls whether outside clicks close the filter panel. |
| `allowDuplicateOperators` | Allows the same operator to be selected more than once per column. Defaults to `true`; set to `false` to make visible operators mutually exclusive in the panel. |

When `allowDuplicateOperators` is `false`, the filter panel hides operators
already used by the current column from the **Add condition** dropdown. Existing
conditions remain editable, and programmatically supplied duplicate
`multiFilterItems` are preserved.

[<Badge type="tip">ColumnFilterConfig</Badge>](/guide/types/Interface.ColumnFilterConfig)
[<Badge type="tip">FilterCollectionItem</Badge>](/guide/types/TypeAlias.FilterCollectionItem)
[<Badge type="tip">MultiFilterItem</Badge>](/guide/types/Interface.MultiFilterItem)

## Configure blank values

The **Is blank** and **Is not blank** operations preserve the original source value instead of converting all falsy values to the same representation. The default policy is:

| Source value | Blank by default |
| --- | --- |
| `null` | Yes |
| An own property whose value is `undefined` | Yes |
| An empty string (`''`) | Yes |
| A missing own property | Yes |
| A whitespace-only string such as `'   '` | No |
| An empty array (`[]`) | No |
| `false`, `0`, or `NaN` | No |
| Non-empty arrays and objects | No |

Set `blankSemantics` on the grid filter config to change this policy. Every field is optional:

```ts
grid.filter = {
  blankSemantics: {
    whitespaceOnlyString: true,
    emptyArray: true,
    null: true,
    undefined: true,
    emptyString: true,
    missingProperty: true,
  },
};
```

A column can override individual fields without repeating the grid policy. Column settings are merged field-by-field over the grid settings and the defaults:

```ts
grid.columns = [
  {
    prop: 'tags',
    name: 'Tags',
    filter: 'array',
    // Keep [] as a non-blank value for this column only.
    blankSemantics: { emptyArray: false },
  },
  {
    prop: 'active',
    name: 'Active',
    filter: 'boolean',
  },
];
```

Use `isBlank` for application-specific values. It runs after the configured rules and receives their result as `fallbackResult`:

```ts
grid.filter = {
  blankSemantics: {
    isBlank(value, context, fallbackResult) {
      if (context.property === 'status' && value === 'N/A') {
        return true;
      }

      return fallbackResult;
    },
  },
};
```

The callback receives the unparsed source `value` plus a context containing `model`, `column`, `property`, `sourceValue`, `parsedValue`, `hasOwnProperty`, and the effective `blankSemantics`. Inherited properties count as missing because `hasOwnProperty` is `false`.

Blank checks always use `sourceValue`, even when the column has a `cellParser`. Other built-in and custom filter operations continue to receive `parsedValue`. Configuring blank semantics does not coerce values for typed comparisons, so number, string, boolean, and array operators keep their existing strict behavior.

**Is not blank** is the exact inverse of the resolved blank predicate, including the result returned by `isBlank`.

## Customize filter names

Use `localization.filterNames` to replace the labels shown for built-in filter operations. For example, you can use shorter labels for the default **Is blank** and **Is not blank** operations:

```ts
import { filterNames } from '@revolist/revogrid';

grid.filter = {
  localization: {
    captions: {},
    filterNames: {
      ...filterNames,
      empty: 'Blank',
      notEmpty: 'Not blank',
    },
  },
};
```

Spreading `filterNames` keeps all other built-in labels unchanged and satisfies the complete `FilterLocalization` mapping expected by TypeScript. Override any other operation id in the same object, such as `eq` for **Equal** or `contains` for **Contains**. The ids remain `empty` and `notEmpty` for compatibility with saved filters, regardless of the labels you display.

[<Badge type="tip">FilterLocalization</Badge>](/guide/types/Interface.FilterLocalization)

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

### Choose the right extension point

Filtering can be extended at several levels without replacing the whole plugin:

- Use `cellParser` to normalize a stored value before built-in or custom operations evaluate it.
- Use `customFilters` to add a reusable operation that returns `true` or `false` for each row.
- Use `beforefilterapply` to inspect, rewrite, or delegate the requested filter before evaluation starts.
- Use `beforefiltertrimmed` when your application needs final control over the physical row indexes that will be hidden.

Custom filter functions are synchronous predicates. RevoGrid may call them once per row for each active condition, so keep them pure and fast: avoid network requests, DOM work, large allocations, and shared-state mutations. Do not declare a custom predicate `async` or return a `Promise`; a promise is not a deferred boolean filter result.

### How asynchronous filtering works

For large local datasets, RevoGrid can yield between batches of synchronous predicate calls. The overall operation can continue across browser tasks while every individual custom predicate remains simple and synchronous. If a newer filter or source arrives, stale batched work can be discarded before it changes the visible result.

When filtering genuinely requires asynchronous work—such as an API request, database query, or permission service—prevent the local operation in `beforefilterapply` and let your data controller load the matching rows into `source`. The controller should cancel or ignore stale requests and guard against requesting the same filter again when the remote source is assigned. See [Remote filtering](/guide/server-side-data#remote-filtering) for the recommended flow.

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

When the backend must own the filtered dataset, intercept `beforefilterapply`, prevent local trimming, and reload `source` from your server. See [Server-side data, pagination, sorting, and filtering](/guide/server-side-data#remote-filtering).

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

Start with [RevoGrid Pro features](/pro/#features), or open the business demos that use Pro workflows:

- [Pivot analytics demo](/pivot/)


## Related docs

- [JavaScript filtering demo](/guide/demos/js/js.filtering)
- [Column Types and Formats](/guide/column/types)
- [Server-side data, pagination, sorting, and filtering](/guide/server-side-data)
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
