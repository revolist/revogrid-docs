---
title: Dash Property Reference
description: Review supported RevoGrid properties, Python boundary limitations, and troubleshooting for Plotly Dash.
---

# Complete property reference

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


