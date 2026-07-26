---
title: Dash Callbacks and Events
description: Handle RevoGrid events with generated Plotly Dash callback properties.
---

# Callbacks and events

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


