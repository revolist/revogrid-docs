---
title: RevoGrid Migration Guides
description: Review RevoGrid version changes and upgrade notes, including migration guidance for v2, v3, and v4 projects.
---

# RevoGrid Migration Guides

## Version 4.28.0

### Breaking change: Default filter conditions are now visible

Opening an empty column filter panel now displays one removable draft condition.
String columns start with **Contains**, number columns start with **=**, and other
filter families use their first available operator. The draft does not filter
rows, emit filtering events, or mark the column as filtered until the user
enters a value or explicitly selects an operator.

To preserve the previous empty-panel behavior for the whole grid, disable
default filter drafts in the filter configuration:

```ts
grid.filter = { defaultFilter: false };
```

To disable the draft for only one column, use the structured column filter
configuration:

```ts
grid.columns = [
  {
    prop: 'name',
    filter: { type: 'string', default: false },
  },
];
```

See [Filtering](./filters#default-filter-conditions) for column overrides and
the complete draft lifecycle.

## Version 2.0+

-   Introduced the plugin system, grouping, sorting, and filtering.

## Version 3.0+

-   **Breaking Changes**:
    -   Removed the redundant viewport component.
    -   Renamed classes to support Bootstrap and other libraries:
        -   `row` -> `rgRow`
        -   `col` -> `rgCol`
        -   `data-cell` -> `rgCell`
        -   `data-header-cell` -> `rgHeaderCell`
    -   Migrated all method names to lowercase to align with modern event naming conventions. For example, `afterEdit` is now `afteredit`. Check the API for details.
    -   Added support for pure ESM modules to enable the use of the grid in all modern frontend tooling like Vite, Parcel, etc. You can now import custom elements without lazy loading. Note that you are responsible for polyfills.

## Version 4.0+

:::tip
For a comprehensive migration guide check the [migration guide](./migrations/v4).
:::


<!--@include: ./migrations/_v4-summary.md-->
