---
title: Dash Columns
description: Configure RevoGrid columns and common grid features in Plotly Dash.
---

# Columns

A column is a plain dictionary. `prop` is required and selects the value from
each source row.

```python
columns = [
    {
        "prop": "id",
        "name": "ID",
        "readonly": True,
        "pin": "colPinStart",
        "size": 90,
    },
    {
        "prop": "customer",
        "name": "Customer",
        "sortable": True,
        "minSize": 140,
    },
    {
        "prop": "amount",
        "name": "Amount",
        "sortable": True,
        "filter": "number",
        "order": "desc",
    },
]
```

Common JSON-safe column fields are:

| Field | Purpose |
| --- | --- |
| `prop` | Row key used by the column |
| `name` | Header label |
| `size`, `minSize`, `maxSize` | Width constraints in pixels |
| `readonly` | Disable editing for the column |
| `sortable`, `order` | Enable sorting and set `asc` or `desc` order |
| `filter` | Enable a string, number, or other built-in filter family |
| `pin` | Use `colPinStart` or `colPinEnd` |
| `rowDrag` | Add a row-drag handle |
| `columnType` | Apply a preset from the grid-level `columnTypes` prop |

Function-valued column members are not supported in v1. This includes
`cellTemplate`, `columnTemplate`, `cellProperties`, `columnProperties`,
`cellCompare`, `cellParser`, constructor-based `editor` values, function-based
`readonly`, and function-based `rowDrag`.

Use the [Column Configuration guide](/guide/column), the complete
[`ColumnRegular` interface](/guide/types/Interface.ColumnRegular), and the
[`ColumnGrouping` interface](/guide/types/Interface.ColumnGrouping) to inspect
the Core schema. When reading those pages, remember that Dash can use only
primitive and plain-object members.

### Column groups

Nested header groups are plain objects and therefore work across the Dash
boundary:

```python
columns = [
    {
        "name": "Customer",
        "children": [
            {"prop": "first_name", "name": "First name"},
            {"prop": "last_name", "name": "Last name"},
        ],
    },
    {
        "name": "Order",
        "children": [
            {"prop": "status", "name": "Status"},
            {"prop": "amount", "name": "Amount", "filter": "number"},
        ],
    },
]
```

See [Column Grouping](/guide/column/grouping).

### Reusable column types

`columnTypes` can hold JSON-safe presets:

```python
RevoGrid(
    columnTypes={
        "identifier": {"readonly": True, "size": 120},
        "money": {"size": 140, "sortable": True, "filter": "number"},
    },
    columns=[
        {"prop": "id", "name": "ID", "columnType": "identifier"},
        {"prop": "amount", "name": "Amount", "columnType": "money"},
    ],
    source=rows,
    style={"height": 420},
)
```

See [Column Types and Formats](/guide/column/types) and
[Advanced Configuration](/guide/advanced-configuration#columntypes).

## Common feature recipes

### Editing, range selection, and clipboard

```python
RevoGrid(
    source=rows,
    columns=columns,
    readonly=False,
    range=True,
    useClipboard={"rangeFill": True},
    applyOnClose=True,
    style={"height": 420},
)
```

- `readonly=True` makes the complete grid read-only.
- A column-level `readonly=True` locks only that column.
- `range=True` enables multi-cell selection.
- `useClipboard=True` enables the built-in copy/paste behavior.
- `rangeFill` requires range selection.

References: [Editing](/guide/editing), [Clipboard](/guide/clipboard),
[`ClipboardConfig`](/guide/types/Interface.ClipboardConfig), and
[Selection API](/guide/api/selectionFocus).

### Filtering and sorting

Enable the filter plugin at grid level, then opt columns into a filter family:

```python
RevoGrid(
    filter={
        "collection": {
            "status": {"type": "eq", "value": "Open"},
        }
    },
    sorting={
        "columns": [
            {"prop": "amount", "order": "desc"},
        ],
        "additive": False,
    },
    columns=[
        {"prop": "status", "name": "Status", "filter": "string"},
        {
            "prop": "amount",
            "name": "Amount",
            "filter": "number",
            "sortable": True,
        },
    ],
    source=rows,
    style={"height": 420},
)
```

Custom filter functions and custom sorting comparators are JavaScript
functions, so they are not supported through Python in v1.

References: [Filtering](/guide/filters),
[`ColumnFilterConfig`](/guide/types/Interface.ColumnFilterConfig),
[Sorting](/guide/sorting), and
[`SortingConfig`](/guide/types/TypeAlias.SortingConfig).

### Row grouping

```python
RevoGrid(
    grouping={
        "props": ["region", "team"],
        "expandedAll": True,
        "preserveGroupingOnUpdate": True,
    },
    columns=columns,
    source=rows,
    style={"height": 420},
)
```

`groupLabelTemplate` and `getGroupValue` are functions and cannot cross the
Python boundary. The plain-object grouping options work.

References: [Row Grouping](/guide/row/grouping) and
[`GroupingOptions`](/guide/types/TypeAlias.GroupingOptions).

### Sizing, pinned rows, and column movement

```python
RevoGrid(
    colSize=120,
    rowSize=34,
    rowHeaders={"size": 56},
    resize=True,
    autoSizeColumn=True,
    stretch="last",
    canMoveColumns=True,
    pinnedTopSource=[{"name": "Current selection"}],
    pinnedBottomSource=[{"name": "Total"}],
    columns=columns,
    source=rows,
    style={"height": 500},
)
```

References: [Grid Size](/guide/grid.size), [Column Resize](/guide/column/resize),
[Column Autosize](/guide/column/autosize),
[Column Stretch](/guide/column/stretch),
[Column Ordering](/guide/column/order), [Row Headers](/guide/row/headers), and
[Pinned Rows](/guide/row/pin).

### Themes, RTL, accessibility, and virtualization

```python
RevoGrid(
    theme="compact",
    rtl=False,
    accessible=True,
    frameSize=1,
    disableVirtualX=False,
    disableVirtualY=False,
    columns=columns,
    source=rows,
    style={"height": 420},
)
```

Virtual rendering is enabled by default. Leave it enabled for large sources.
`virtualX` can restrict which column dimensions use X-axis virtualization; its
values come from [`DimensionCols`](/guide/types/TypeAlias.DimensionCols).

References: [Themes](/guide/theme), [RTL](/guide/rtl),
[Accessibility](/guide/wcag), [Performance and Virtualization](/guide/performance),
and [Viewports](/guide/viewports).


