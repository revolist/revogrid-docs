---
title: Dash DataFrames
description: Load JSON-safe rows and pandas DataFrames into RevoGrid for Plotly Dash.
---

# Dash DataFrames

## Source rows

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

## pandas DataFrames

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

## Python-driven updates

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
described in [Edit synchronization](/guide/dash/edit-synchronization).

