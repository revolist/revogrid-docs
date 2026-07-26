---
title: Dash Data Grid
description: Install and use RevoGrid Core in Plotly Dash with typed Python props, DataFrame records, editing, sorting, filtering, and JSON-safe callbacks.
head:
  - - meta
    - name: keywords
      content: Dash data grid, Plotly Dash grid, Python data grid, RevoGrid Python, Dash DataFrame table, dash-datagrid
---

# Dash Data Grid

[`dash-datagrid`](https://github.com/revolist/dash-datagrid) is the official RevoGrid Core integration for
[Plotly Dash](https://dash.plotly.com/). It exposes the grid as the generated
Python component `dash_datagrid.RevoGrid` and packages the required JavaScript
with the Python distribution.

Use this integration when the application layout and callbacks are written in
Python, while the virtualized grid runs in the browser.

## Guides

- [Getting Started](/guide/dash/getting-started) — install the package and run your first grid.
- [DataFrames](/guide/dash/dataframes) — load JSON-safe rows and pandas DataFrames.
- [Columns](/guide/dash/columns) — configure columns and common grid features.
- [Callbacks and Events](/guide/dash/callbacks-and-events) — receive grid events in Dash callbacks.
- [Edit Synchronization](/guide/dash/edit-synchronization) — choose compact edit deltas or complete source synchronization.
- [Property Reference](/guide/dash/property-reference) — review supported properties and Python boundary limitations.
- [Core API Reference](/guide/dash/core-api-reference) — find the complete RevoGrid API documentation.

## Packages and compatibility

| Distribution | Name | Purpose |
| --- | --- | --- |
| PyPI | [`dash-datagrid`](https://github.com/revolist/dash-datagrid) | Normal installation for a Dash application |
| Python import | `dash_datagrid` | Exports `RevoGrid` |
| npm | [`@revolist/dash-datagrid`](https://github.com/revolist/dash-datagrid) | JavaScript distribution used by the generated Dash component |

The Python package supports Python 3.10 or newer and Dash 3.x or 4.x. A normal
Python application only installs [`dash-datagrid`](https://github.com/revolist/dash-datagrid); Dash serves the packaged
JavaScript locally, so a separate npm install is not required.

Version 1 covers RevoGrid Core. Pro and Enterprise plugin activation, custom
JavaScript renderers or editors, imperative methods, and synchronous
client-side cancellation are not exposed through the Python component.
