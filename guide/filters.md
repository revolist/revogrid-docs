---
title: RevoGrid Filtering
description: Enable built-in filtering in RevoGrid, configure per-column filter types, and extend filtering with ColumnFilterConfig and custom filter functions.
head:
  - - meta
    - name: keywords
      content: RevoGrid filtering, JavaScript data grid filter, custom grid filters, ColumnFilterConfig, virtual grid filter
---

# RevoGrid Filtering

Filtering lets users narrow down the visible rows without changing the original dataset. In RevoGrid, filtering is powered by the built-in filter plugin and can be enabled globally with the `filter` prop.

## Enable filtering

Set `filter` to `true` on the grid:

```tsx
const columns = [{ prop: 'name', name: 'Name' }];
const source = [{ name: 'Steve' }, { name: 'John' }];

return '<revo-grid source={source} columns={columns} filter={true}/>';
```

With `filter={true}`, columns use their default filter behavior unless a column overrides it.

Typical first step:

```ts
grid.filter = true;
grid.columns = [
  { prop: 'name', name: 'Name' },
  { prop: 'age', name: 'Age', filter: 'number' },
];
```

## Built-in filter types

### String filters

- `notEmpty`
- `empty`
- `eq`
- `notEq`
- `begins`
- `contains`
- `notContains`

### Number filters

- `notEmpty`
- `empty`
- `eqN`
- `neqN`
- `gt`
- `gte`
- `lt`
- `lte`

These names can be localized or remapped through `ColumnFilterConfig.localization`.

## Configure filtering per column

You can disable filtering for a specific column:

```tsx
const columns = [
  { prop: 'name', name: 'Name', filter: false },
  { prop: 'score', name: 'Score' },
];
```

You can also force a specific filter family for a column:

```tsx
const columns = [
  { prop: 'name', name: 'Name' },
  { prop: 'score', name: 'Score', filter: 'number' },
];
```

The column-level `filter` property tells the filter UI which filter type should be offered for that column.

This is useful when the displayed value is text-like but should still use numeric or custom filtering rules.

## Advanced configuration with `ColumnFilterConfig`

When `filter` is an object instead of a boolean, you can preserve filter state, limit available operations, add custom filters, localize captions, and control dynamic filtering behavior.

```ts
type ColumnFilterConfig = {
  collection?: Record<ColumnProp, FilterCollectionItem>;
  include?: string[];
  customFilters?: Record<string, CustomFilter>;
  filterProp?: string;
  localization?: FilterLocalization;
  multiFilterItems?: MultiFilterItem;
  disableDynamicFiltering?: boolean;
  closeFilterPanelOnOutsideClick?: boolean;
};
```

Example configuration:

```ts
grid.filter = {
  include: ['contains', 'eq', 'gt'],
  disableDynamicFiltering: true,
};
```

With `disableDynamicFiltering`, the filter waits for user confirmation instead of updating on every change.

## Create a custom filter

Use `customFilters` when a business rule cannot be expressed with the built-in filter set:

```tsx
const columns = [{ prop: 'name', name: 'Name', filter: 'myFilterType' }];
const source = [{ name: 'Steve' }, { name: 'Anna' }];

const filterFunc = (cellValue, extraValue) => {
  if (!cellValue) {
    return false;
  }
  if (typeof cellValue !== 'string') {
    cellValue = JSON.stringify(cellValue);
  }
  return cellValue === extraValue;
};

filterFunc.extra = 'input';

const filterConfig = {
  include: ['newEqual'],
  customFilters: {
    newEqual: {
      columnFilterType: 'myFilterType',
      name: 'Equals value',
      func: filterFunc,
    },
  },
};

return '<revo-grid source={source} columns={columns} filter={filterConfig}/>';
```

If `func.extra = 'input'`, the filter panel renders an additional input for the extra value. Other extra field options are available in the filter types.

You can use this pattern for:

- exact business-status matching
- domain-specific validation states
- custom enum or range logic

## Practical event hooks

If your app needs to observe or modify filtering, the most useful events are:

- `beforefilterapply`: inspect or rewrite the filter collection before it is applied
- `beforefiltertrimmed`: intercept the set of source indexes about to be hidden
- `aftertrimmed`: react after filtered rows have been trimmed

Example:

```ts
grid.addEventListener('beforefiltertrimmed', event => {
  console.log('Indexes about to be hidden', event.detail.itemsToFilter);
});
```

After filtering, `getVisibleSource()` is often the easiest way to work with the filtered result set.

For event-oriented examples, see [Event Patterns and Lifecycles](/guide/events-guide).

## Related guides

- [Sorting](/guide/sorting)
- [Advanced Configuration](/guide/advanced-configuration)
- [API: Events](/guide/api/events)
- [API: RevoGrid](/guide/api/revoGrid)

## Related Pro features

Need more advanced filtering workflows? RevoGrid Pro expands the filtering toolbox with:

- [Date filtering](/pro/)
- [Header input filtering](/pro/)
- [Advanced selection filtering](/pro/)
- [Advanced slider filtering](/pro/)

<!--@include: ../demo/js/js.filtering.md-->
