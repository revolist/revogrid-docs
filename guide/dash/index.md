---
title: Dash Data Grid
description: Install and use RevoGrid Core in Plotly Dash with typed Python props, DataFrame records, editing, sorting, filtering, and JSON-safe callbacks.
head:
  - - meta
    - name: keywords
      content: Dash data grid, Plotly Dash grid, Python data grid, RevoGrid Python, Dash DataFrame table, dash-datagrid
---

# Dash Data Grid

`dash-datagrid` is the official RevoGrid Core integration for
[Plotly Dash](https://dash.plotly.com/). It exposes the grid as the generated
Python component `dash_datagrid.RevoGrid` and packages the required JavaScript
with the Python distribution.

Use this integration when the application layout and callbacks are written in
Python, while the virtualized grid runs in the browser.

## Quick links

- [Install and run your first grid](#getting-started)
- [Load a pandas DataFrame](#pandas-dataframes)
- [Configure columns](#columns)
- [Use Dash callbacks](#callbacks-and-events)
- [Choose an edit synchronization strategy](#edit-synchronization)
- [Browse every supported property](#complete-property-reference)
- [Understand Python boundary limitations](#python-boundary-limitations)
- [Open the complete RevoGrid API](#revoGrid-api-reference)

## Packages and compatibility

| Distribution | Name | Purpose |
| --- | --- | --- |
| PyPI | `dash-datagrid` | Normal installation for a Dash application |
| Python import | `dash_datagrid` | Exports `RevoGrid` |
| npm | `@revolist/dash-datagrid` | JavaScript distribution used by the generated Dash component |

The Python package supports Python 3.10 or newer and Dash 3.x or 4.x. A normal
Python application only installs `dash-datagrid`; Dash serves the packaged
JavaScript locally, so a separate npm install is not required.

Version 1 covers RevoGrid Core. Pro and Enterprise plugin activation, custom
JavaScript renderers or editors, imperative methods, and synchronous
client-side cancellation are not exposed through the Python component.

## Getting started

### 1. Create an environment

```bash
python -m venv .venv
source .venv/bin/activate
```

On Windows PowerShell, activate it with:

```powershell
.venv\Scripts\Activate.ps1
```

### 2. Install Dash DataGrid

```bash
python -m pip install dash-datagrid
```

To use the DataFrame examples, install pandas too:

```bash
python -m pip install pandas
```

### 3. Create `app.py`

```python
from dash import Dash, Input, Output, callback, html
from dash_datagrid import RevoGrid


app = Dash(__name__)

app.layout = html.Main(
    [
        html.H1("Orders"),
        RevoGrid(
            id="orders-grid",
            columns=[
                {
                    "prop": "order",
                    "name": "Order",
                    "readonly": True,
                    "size": 130,
                },
                {
                    "prop": "customer",
                    "name": "Customer",
                    "sortable": True,
                    "size": 180,
                },
                {
                    "prop": "amount",
                    "name": "Amount",
                    "sortable": True,
                    "filter": "number",
                },
            ],
            source=[
                {"order": "A-100", "customer": "Ada", "amount": 120},
                {"order": "A-101", "customer": "Grace", "amount": 85},
                {"order": "A-102", "customer": "Linus", "amount": 210},
            ],
            rowHeaders=True,
            resize=True,
            range=True,
            filter=True,
            style={"height": 420},
        ),
        html.Pre("Edit a cell to see its event.", id="edit-output"),
    ]
)


@callback(
    Output("edit-output", "children"),
    Input("orders-grid", "afteredit"),
    prevent_initial_call=True,
)
def show_edit(event):
    detail = event["detail"]
    if "prop" not in detail:
        return f"Range edit: {detail}"
    return (
        f'Row {detail["rowIndex"]}, {detail["prop"]} '
        f'changed to {detail["val"]!r}'
    )


if __name__ == "__main__":
    app.run(debug=True)
```

Every column `prop` maps to a key in each source row. Set an explicit component
height in `style`; the grid fills its Dash host, and the host needs a usable
height.

### 4. Run the application

```bash
python app.py
```

Open the local address printed by Dash, normally `http://127.0.0.1:8050`.

### Complete example project

The
[`examples/` project](https://github.com/revolist/dash-datagrid/tree/main/examples)
includes a dependency manifest, DataFrame normalization, responsive styling,
Python-driven source changes, dedicated callbacks, and generic event
listeners.

```bash
git clone https://github.com/revolist/dash-datagrid.git
cd dash-datagrid/examples
python -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python app.py
```

## Data model

### Source rows

`source`, `pinnedTopSource`, and `pinnedBottomSource` accept lists of
JSON-serializable row objects:

```python
rows = [
    {"id": 1, "product": "Keyboard", "price": 95.0},
    {"id": 2, "product": "Mouse", "price": 35.5},
]
```

Values that cross the Dash boundary should be strings, finite numbers,
booleans, `None`, lists, or dictionaries containing those values. Convert
`datetime`, `Decimal`, NumPy scalar, UUID, and other Python-specific values
before assigning a prop.

See [Data & Rows](/guide/row) for the Core row model and
[Data Source Loading and Syncing](/guide/data-sync) for source ownership
patterns.

### pandas DataFrames

For a DataFrame containing only JSON-native values, records are enough:

```python
rows = frame.to_dict("records")
grid = RevoGrid(columns=columns, source=rows, style={"height": 420})
```

For dates, missing values, NumPy values, or other pandas-specific types, use a
JSON round trip to normalize the records:

```python
import json

rows = json.loads(
    frame.to_json(
        orient="records",
        date_format="iso",
    )
)
```

This converts timestamps to ISO strings and missing values to JSON `null`,
which arrives in Python callbacks as `None`.

### Python-driven updates

Return a new `source` when the application intentionally loads a different
dataset:

```python
from dash import Input, Output, callback


@callback(
    Output("orders-grid", "source"),
    Input("reload-orders", "n_clicks"),
    prevent_initial_call=True,
)
def reload_orders(_clicks):
    return load_orders_from_database()
```

Full source replacement is appropriate for reloads, searches, pagination, or
dataset changes. For a normal cell edit, prefer the compact `afteredit` event
described in [Edit synchronization](#edit-synchronization).

## Columns

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

## Callbacks and events

### Generated callback properties

Every public RevoGrid event discovered in Stencil compiler metadata is generated
as a same-name Dash input property. The most common events are active by
default:

| Dash property | When it updates | Typical `detail` | Core reference |
| --- | --- | --- | --- |
| `afteredit` | A cell or selected range is changed | Compact cell delta, or range data and ranges | [`AfterEditEvent`](/guide/types/TypeAlias.AfterEditEvent) |
| `afterfocus` | Focus rendering completes | Focused cell/range information | [`FocusAfterRenderEvent`](/guide/types/Interface.FocusAfterRenderEvent) |
| `headerclick` | A column header is clicked | JSON-safe column definition | [`ColumnRegular`](/guide/types/Interface.ColumnRegular) |
| `roworderchanged` | A row reorder is requested | `from`, `to` | [Row Drag and Drop](/guide/row/order) |
| `aftersortingapply` | Sorting finishes | Final sorting state and affected row types | [`AfterSortingApplyEvent`](/guide/types/TypeAlias.AfterSortingApplyEvent) |
| `beforefilterapply` | Filtering is about to apply | Filter `collection` | [Filtering events](/guide/filters#event-hooks) |
| `aftercolumnresize` | Column resizing finishes | Resized columns keyed by index | [Column Resize](/guide/column/resize) |

All callback values use the same envelope:

```json
{
  "name": "afteredit",
  "detail": {
    "rowIndex": 0,
    "colIndex": 2,
    "prop": "amount",
    "val": 140,
    "type": "rgRow",
    "colType": "rgCol"
  },
  "timestamp": 1784980000000,
  "sequence": 1
}
```

- `name` is the lowercase RevoGrid DOM event name.
- `detail` contains the JSON-safe event payload.
- `timestamp` is the browser time in Unix milliseconds.
- `sequence` increases for every emitted bridge event, so two identical
  consecutive event payloads still trigger Dash.

For a single-cell edit, `afteredit.detail` keeps only `rowIndex`, `colIndex`,
`prop`, `val` or `value`, `type`, and `colType`. For a range edit, it keeps
`data`, `newRange`, `oldRange`, and `type`. Grid-owned models and collections
are intentionally removed.

### Observe several events

```python
from dash import Input, Output, callback, ctx
import json


@callback(
    Output("grid-events", "children"),
    Input("orders-grid", "afteredit"),
    Input("orders-grid", "afterfocus"),
    Input("orders-grid", "aftersortingapply"),
    prevent_initial_call=True,
)
def show_grid_event(afteredit, afterfocus, aftersorting):
    property_name = ctx.triggered[0]["prop_id"].rsplit(".", 1)[1]
    event = {
        "afteredit": afteredit,
        "afterfocus": afterfocus,
        "aftersortingapply": aftersorting,
    }[property_name]
    return json.dumps(event, indent=2)
```

For callbacks with several inputs, `dash.ctx` identifies exactly which
property triggered the callback.

### Subscribe to any other RevoGrid event

Use `eventListeners` to activate generated event properties that are not active
by default. Their latest payload is published through both the same-name
property and the backwards-compatible `eventData` property:

```python
grid = RevoGrid(
    id="orders-grid",
    eventListeners=[
        "aftergridinit",
        "filterconfigchanged",
        "sortingconfigchanged",
    ],
    columns=columns,
    source=rows,
    style={"height": 420},
)


@callback(
    Output("generic-event", "children"),
    Input("orders-grid", "eventData"),
    prevent_initial_call=True,
)
def show_generic_event(event):
    return f'{event["sequence"]}: {event["name"]}'
```

Names are deduplicated and listeners are updated when `eventListeners`
changes. Default event names do not need to be listed because their generated
Dash properties already receive them. Runtime plugin events absent from Stencil
metadata continue to update `eventData` only.

Do not subscribe to high-frequency events such as `viewportscroll` unless a
server round trip for every event is intentional.

Browse the [complete Core events table](/guide/api/events) and
[event lifecycle guide](/guide/events-guide) to choose names and understand
event order.

### JSON-safe event serialization

The bridge serializes event details before calling Dash `setProps`:

- strings, finite numbers, booleans, `null`, arrays, and plain objects remain;
- JavaScript `Date` values become ISO strings;
- non-finite numbers, cycles, DOM nodes, and class instances become `null`;
- unsupported object fields such as functions, symbols, and `undefined` are
  omitted;
- unsupported array entries become `null`.

This protects callbacks from DOM and grid-internal objects that Dash cannot
transport.

## Edit synchronization

Choose the source ownership model deliberately.

### Recommended default: compact edit deltas

`syncSourceOnEdit=False` is the default. RevoGrid applies the edit in the
browser and sends only `afteredit` to Python:

```text
edit in browser -> compact afteredit envelope -> Dash callback
```

This is the right default for large sources, autosave APIs, audit logs, patch
queues, and applications that can persist one changed field at a time.

```python
@callback(
    Output("save-status", "children"),
    Input("orders-grid", "afteredit"),
    prevent_initial_call=True,
)
def persist_edit(event):
    detail = event["detail"]
    if "prop" not in detail:
        return "A range edit was received"

    save_cell_change(
        row_index=detail["rowIndex"],
        field=detail["prop"],
        value=detail["val"],
    )
    return f'Saved row {detail["rowIndex"]}'
```

`save_cell_change` represents the application's persistence layer. In a real
multi-user application, include a stable row identifier in the source and map
the reported `rowIndex` to that identifier.

### Opt in to complete source synchronization

Set `syncSourceOnEdit=True` when a Dash callback genuinely needs the complete
edited source:

```python
RevoGrid(
    id="orders-grid",
    syncSourceOnEdit=True,
    columns=columns,
    source=rows,
    style={"height": 420},
)


@callback(
    Output("row-count", "children"),
    Input("orders-grid", "source"),
    prevent_initial_call=True,
)
def receive_complete_source(source):
    return f"{len(source)} rows received"
```

After each edit, the bridge creates a JSON-safe snapshot and updates `source`
together with `afteredit`. It also recognizes the immediate Dash echo of that
snapshot and does not assign it back to the grid a second time.

This mode costs memory, serialization time, and network bandwidth proportional
to the complete dataset. Leave it disabled when a compact delta is sufficient.

## Complete property reference

The table below is the complete public property surface of
`dash_datagrid.RevoGrid`.

### Dash host and bridge properties

| Property | Python shape | Purpose |
| --- | --- | --- |
| `id` | `str` or Dash pattern ID | Component identifier used by callbacks |
| `className` | `str` | CSS class on the Dash host element |
| `style` | `dict` | Inline host style; normally include a `height` |
| Every public Core event name | `dict` | Latest JSON-safe envelope; generated automatically from Stencil metadata |
| `eventListeners` | `list[str]` | Additional generated or runtime event names to activate |
| `eventData` | `dict` | Latest generic event envelope |
| `syncSourceOnEdit` | `bool`, default `False` | Also update the complete Dash `source` after edits |

### Core data and schema properties

| Property | Python shape | Purpose | Reference |
| --- | --- | --- | --- |
| `columns` | `list[dict]` | Regular and grouped column definitions | [Columns](/guide/column) |
| `source` | `list[dict]` | Main row source | [Rows](/guide/row) |
| `pinnedTopSource` | `list[dict]` | Rows in the top pinned viewport | [Pinned rows](/guide/row/pin) |
| `pinnedBottomSource` | `list[dict]` | Rows in the bottom pinned viewport | [Pinned rows](/guide/row/pin) |
| `columnTypes` | `dict` | Named JSON-safe column presets | [Column types](/guide/column/types) |
| `rowDefinitions` | `list[dict]` | Per-row sizes by type and index | [`RowDefinition`](/guide/types/TypeAlias.RowDefinition) |
| `additionalData` | `dict` | Extra plain JSON context | [Advanced configuration](/guide/advanced-configuration#additionaldata) |

### Core layout and interaction properties

| Property | Python shape | Purpose | Reference |
| --- | --- | --- | --- |
| `rowHeaders` | `bool` or `dict` | Row numbers or JSON-safe row-header options | [Row headers](/guide/row/headers) |
| `colSize` | number | Default column width | [Grid size](/guide/grid.size) |
| `rowSize` | number | Default row height | [Row height](/guide/row/height) |
| `rowClass` | `str` | Source field containing the row CSS class | [Rows](/guide/row#row-class-binding) |
| `resize` | `bool` | Allow column resizing | [Column resize](/guide/column/resize) |
| `autoSizeColumn` | `bool` or `dict` | Enable/configure automatic column sizing | [Column autosize](/guide/column/autosize) |
| `stretch` | `bool` or `str` | Fill remaining horizontal space | [Column stretch](/guide/column/stretch) |
| `readonly` | `bool` | Make the complete grid read-only | [Editing](/guide/editing) |
| `applyOnClose` | `bool` | Apply an editor value when the editor closes | [Editing](/guide/editing) |
| `range` | `bool` | Enable cell range selection | [Selection API](/guide/api/selectionFocus) |
| `useClipboard` | `bool` or `dict` | Enable/configure clipboard behavior | [Clipboard](/guide/clipboard) |
| `canFocus` | `bool` | Allow grid cell focus | [Advanced configuration](/guide/advanced-configuration#canfocus) |
| `canMoveColumns` | `bool` | Enable column reordering | [Column ordering](/guide/column/order) |
| `canDrag` | `bool` | Allow the native drag-and-drop path | [Row ordering](/guide/row/order) |

### Core data feature properties

| Property | Python shape | Purpose | Reference |
| --- | --- | --- | --- |
| `filter` | `bool` or `dict` | Enable/configure built-in filtering | [Filtering](/guide/filters) |
| `sorting` | `dict` | Apply external sorting configuration | [Sorting](/guide/sorting) |
| `grouping` | `dict` | Configure Core row grouping | [Row grouping](/guide/row/grouping) |
| `trimmedRows` | `dict` | Hide physical main-row indexes | [Rows and trimming](/guide/row#managing-row-visibility) |
| `exporting` | `bool` | Enable the Core export plugin | [Export plugin](/guide/export.plugin) |

### Core rendering and platform properties

| Property | Python shape | Purpose | Reference |
| --- | --- | --- | --- |
| `theme` | `str` | RevoGrid theme name | [Themes](/guide/theme) |
| `accessible` | `bool` | Enable accessibility behavior | [Accessibility](/guide/wcag) |
| `rtl` | `bool` | Use right-to-left layout | [RTL](/guide/rtl) |
| `frameSize` | number | Off-screen virtualization buffer | [Performance](/guide/performance#framesize) |
| `disableVirtualX` | `bool` | Disable column virtualization | [Performance](/guide/performance#disablevirtualx) |
| `disableVirtualY` | `bool` | Disable row virtualization | [Performance](/guide/performance#disablevirtualy) |
| `virtualX` | `list[str]` | Column dimensions using X virtualization | [Viewports](/guide/viewports) |
| `noHorizontalScrollTransfer` | `bool` | Do not mirror horizontal scroll between viewport sections | [RevoGrid API](/guide/api/revoGrid) |
| `hideAttribution` | `bool` | Hide attribution; use only with the required RevoGrid subscription | [Attribution](/guide/attribution) |

For exact Core defaults and TypeScript types, use the
[RevoGrid component API](/guide/api/revoGrid). The Python signature and
docstring are generated with the package, so `help(RevoGrid)` also lists every
Dash property:

```python
from dash_datagrid import RevoGrid

help(RevoGrid)
```

## Python boundary limitations

### Excluded grid properties

The wrapper intentionally excludes properties whose values require JavaScript
functions, classes, promises, or virtual DOM nodes:

| Excluded Core property | Why it is excluded |
| --- | --- |
| `editors` | Values are editor constructors/classes |
| `plugins` | Values are plugin classes |
| `focusTemplate` | Value is a render function |
| `jobsBeforeRender` | Values are browser promises |
| `registerVNode` | Values are virtual nodes or render functions |

Function-valued members nested inside otherwise supported objects are also
unsupported. Examples include custom cell/header templates, custom editor
constructors, custom comparison or parser functions, custom filter functions,
and custom grouping renderers.

### `before*` events cannot cancel server-side

Core `before*` DOM events may be cancelable in JavaScript because a browser
listener can call `preventDefault()` synchronously. A Python Dash callback runs
after a network round trip, so `beforefilterapply` and generic `before*` events
are notifications only. They cannot prevent or rewrite the browser action.

### Imperative methods

The Core API includes methods for selection, scrolling, data access, export,
and targeted updates. Those methods are documented for JavaScript consumers
but are not callable through `dash_datagrid.RevoGrid` in v1. Use declarative
Dash output properties for Python-driven changes.

## Troubleshooting

### The grid has no visible height

Give the component host an explicit height:

```python
RevoGrid(..., style={"height": "60vh", "minHeight": 320})
```

### A prop is not JSON serializable

Normalize DataFrame values, NumPy values, `Decimal`, timestamps, UUIDs, and
custom Python objects before assigning them. Dash must serialize props before
they reach RevoGrid.

### A custom renderer, editor, comparator, or filter does not work

Those APIs require JavaScript functions. They are part of the Core JavaScript
API but outside the v1 Python boundary.

### A `before*` callback did not prevent an action

Python callbacks cannot synchronously cancel browser events. Observe the
resulting event, or implement the behavior declaratively with a new prop value.

### Editing a large source causes large callback requests

Leave `syncSourceOnEdit=False` and consume the compact `afteredit` delta. Full
source synchronization is opt-in.

### A generic event does not update `eventData`

Use the lowercase event name shown in the
[Core events table](/guide/api/events). Auto-discovered events update their
named Dash property and `eventData`; runtime-only plugin events update
`eventData`.

## RevoGrid API reference

These pages are the source of truth behind the Dash wrapper:

| Area | Documentation |
| --- | --- |
| Complete component properties, events, and methods | [RevoGrid API](/guide/api/revoGrid) |
| Complete event name and payload table | [Events API](/guide/api/events) |
| Event ordering and lifecycle diagrams | [Event Patterns](/guide/events-guide) |
| Generated TypeScript type index | [Type reference](/guide/types/README) |
| Columns and column schema | [Columns](/guide/column), [`ColumnRegular`](/guide/types/Interface.ColumnRegular), [`ColumnGrouping`](/guide/types/Interface.ColumnGrouping) |
| Rows, row headers, row sizes, pinning, ordering | [Rows](/guide/row), [Row Headers](/guide/row/headers), [Row Height](/guide/row/height), [Pinned Rows](/guide/row/pin), [Row Order](/guide/row/order) |
| Editing, selection, clipboard | [Editing](/guide/editing), [Selection API](/guide/api/selectionFocus), [Clipboard](/guide/clipboard), [Clipboard API](/guide/api/clipboard) |
| Filtering, sorting, grouping | [Filtering](/guide/filters), [Sorting](/guide/sorting), [Row Grouping](/guide/row/grouping) |
| Sizing and column layout | [Grid Size](/guide/grid.size), [Autosize](/guide/column/autosize), [Resize](/guide/column/resize), [Stretch](/guide/column/stretch), [Pin Columns](/guide/column/pin), [Column Order](/guide/column/order) |
| Source ownership and remote data | [Data Sync](/guide/data-sync), [Server-side Data](/guide/server-side-data), [Real-time Updates](/guide/realtime-updates) |
| Virtualization and indexes | [Performance](/guide/performance), [Viewports](/guide/viewports) |
| Themes, accessibility, RTL | [Themes](/guide/theme), [Accessibility](/guide/wcag), [RTL](/guide/rtl) |
| Export | [Export Plugin](/guide/export.plugin), [Excel Export](/guide/data-grid-export-excel), [PDF Export](/guide/pdf-export) |

The Core API pages also document browser-only methods and function-valued
types. Use the [complete property reference](#complete-property-reference) and
[Python boundary limitations](#python-boundary-limitations) on this page to
determine which parts are available in Dash.
