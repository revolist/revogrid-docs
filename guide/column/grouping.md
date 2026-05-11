# Column Grouping

[<Badge type="tip">Interface: ColumnGrouping</Badge>](../types/Interface.ColumnGrouping)

Column grouping creates stacked headers by placing related columns under a shared parent header. Use it when several fields belong to the same business concept, for example `Personal` details with `First Name`, `Last Name`, and `Age` below it.

Groups are declared directly in the `columns` array. A regular column has a `prop`; a grouped column has `children`. Grouped columns can be nested, so the header can have as many levels as your layout needs.

<!--@include: ../../demo/js/js.column.group.md-->

## Basic structure

```ts
import type { ColumnGrouping, ColumnRegular } from '@revolist/revogrid'

const columns: (ColumnGrouping | ColumnRegular)[] = [
    {
        name: 'Personal',
        children: [
            { name: 'First Name', prop: 'firstName' },
            { name: 'Last Name', prop: 'lastName' },
        ],
    },
    { name: 'Project', prop: 'project' },
]
```

In this example `Personal` is only a header group. The leaf columns, `First Name` and `Last Name`, are still the columns bound to row data.

## Nested groups

Use nested `children` arrays when a header needs more than one grouping level. RevoGrid calculates the header depth from the column tree and aligns regular columns with grouped columns automatically.

<<< @/demo/js/js.column.group.example.ts#columns

## When to use column groups

- Group related fields so wide datasets are easier to scan.
- Create multi-level headers for reports, financial tables, schedules, and operational dashboards.
- Keep column definitions declarative instead of manually composing header rows.
- Combine groups with regular column features such as sizing, sorting, pinning, templates, and filtering on the leaf columns.

## Notes

- A grouped column should use `children`; a leaf column should use `prop`.
- Sorting, filtering, editing, and data mapping apply to leaf columns.
- Header templates can still be used on regular leaf columns. For group header customization, use the group/header render hooks exposed by the header API.
- Column groups are a core feature and work in Community, Pro Lite, and Pro Advanced.

<!--@include: ./_grouping.pro.md-->
