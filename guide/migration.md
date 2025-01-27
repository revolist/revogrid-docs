# Versions

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
