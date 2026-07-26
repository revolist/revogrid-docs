---
title: Dash Getting Started
description: Install Dash DataGrid and run your first RevoGrid application in Plotly Dash.
---

# Dash Getting Started

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

## Build your first grid

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

