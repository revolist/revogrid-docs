---
title: Dash Edit Synchronization
description: Choose compact edit events or full source synchronization for RevoGrid in Plotly Dash.
---

# Edit synchronization

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


