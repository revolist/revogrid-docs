---
title: RevoGrid Features and Definitions
description: A practical glossary for RevoGrid concepts, including cells, columns, rows, ranges, viewports, plugins, props, methods, and virtual scrolling.
head:
  - - meta
    - name: keywords
      content: RevoGrid glossary, data grid definitions, virtual scrolling terms, grid rows columns cells, RevoGrid concepts
---

# RevoGrid Features and Definitions

This page is a quick glossary for the concepts used throughout the RevoGrid docs. It is especially useful when you are moving between high-level guides, framework wrappers, and the API reference.

<!--@include: ./parts/_lifecycle.md-->

## API

The public API is the combination of:

- props such as `columns`, `source`, `filter`, `grouping`, and `additionalData`
- methods such as `setDataAt`, `scrollToRow`, `setCellsFocus`, and `getVisibleSource`
- events such as `beforeedit`, `afteredit`, `beforefilterapply`, and `beforesourceset`

Start at [RevoGrid API](/guide/api/revoGrid).

## Cell

<!--@include: ./parts/_cell.md-->

### Cell editor

A cell editor is the UI used to modify a value. RevoGrid ships with a core editor flow and supports custom editor registration through the `editors` prop.

### Cell template

A cell template is a custom renderer for displaying richer cell content while keeping the grid virtualized.

### Cell merge

Cell merging refers to combining adjacent cells into a larger visual area. This is available in RevoGrid Pro.

## Clipboard

Clipboard support enables copy, cut, and paste workflows. It is controlled by `useClipboard` and range selection behavior. See [Clipboard Operations](/guide/clipboard).

## Column

Columns define how the grid reads and displays row data. A column can configure:

- `prop` mapping
- `name`
- `size`, `minSize`, `maxSize`
- `sortable`
- `filter`
- `editor`
- `cellTemplate`
- `cellProperties`
- `readonly`
- `pin`
- `columnType`

Related guides:

- [Column Definitions](/guide/column/)
- [Custom Columns](/guide/column/types)
- [Column Groups](/guide/column/grouping)

## Data source

The data source is the row array shown by the grid. The main dataset is assigned through `source`, while pinned row regions use `pinnedTopSource` and `pinnedBottomSource`.

## Data model

The data model is the shape of each row object inside your source array.

```typescript
interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
}
```

## Event

Events are how RevoGrid exposes lifecycle and interaction hooks. Many events are cancelable and let you change the behavior before the grid commits it.

Examples:

- editing: `beforeedit`, `afteredit`
- data updates: `beforesourceset`, `aftersourceset`
- filtering: `beforefilterapply`, `beforefiltertrimmed`
- focus: `beforecellfocus`, `beforefocuslost`, `afterfocus`

See [Event Patterns and Lifecycles](/guide/events-guide) and [Hooks and Events API](/guide/api/events).

## Export

The core export plugin supports file export workflows from the grid surface. See [Export Data](/guide/export.plugin). Excel-focused export workflows are available in Pro.

## Focus

Focus is the active cell target used for keyboard navigation, editing, and selection overlays. It can be enabled or disabled with `canFocus`.

Useful methods:

- `setCellsFocus`
- `clearFocus`
- `getFocused`

## Range

A range is a rectangular selection of cells. Range selection is enabled with the `range` prop and exposed through `getSelectedRange`.

### Range autofill

Autofill extends a selected value or pattern across a dragged range. Advanced autofill workflows are available in RevoGrid Pro.

## Keyboard support

RevoGrid includes keyboard navigation for moving focus, editing cells, selecting ranges, and copying or pasting data. Custom features should integrate with keyboard behavior rather than bypassing it.

## Method

Methods are imperative APIs exposed on the grid instance. They are useful when application state or external controls need to drive the grid directly.

Examples:

- `scrollToRow`
- `scrollToColumnProp`
- `setCellEdit`
- `setDataAt`
- `getVisibleSource`

## Plugin

Plugins extend grid behavior without changing the core component. RevoGrid includes built-in plugins for filtering, sorting, exporting, grouping, stretching, accessibility, and more.

The `plugins` prop can also receive custom plugin classes. For plugin-oriented props and provider access, see [Advanced Configuration](/guide/advanced-configuration).

### Filtering

The filtering plugin hides rows that do not match the selected criteria.

### Sorting

The sorting plugin updates column order state and applies sorted row order to the source.

### Pagination

Pagination is not part of the OSS core guide surface today. It is available through RevoGrid Pro workflows.

## Performance

Performance in RevoGrid comes from virtual rendering, viewport separation, lightweight renderers, and explicit data update methods. Read [Grid Performance and Virtualization](/guide/performance).

## Prop

A prop is a public configuration field passed to the grid, such as `columns`, `source`, `filter`, `readonly`, `stretch`, or `grouping`.

## Row

Rows represent records in the source dataset and can be customized through pinned regions, row headers, row definitions, grouping, and trimming.

### Row grouping

Row grouping groups records under shared labels based on selected props. See [Row Grouping](/guide/row/grouping).

### Row headers

Row headers add an index or custom left-hand row area. See [Row Headers](/guide/row/headers).

### Row pinning

Pinned rows stay visible in `pinnedTopSource` or `pinnedBottomSource` while the main dataset scrolls.

### Trimmed rows

Trimmed rows are source rows that exist but are currently hidden from the visible viewport. Filtering uses trimming internally, and you can also control trimming directly with `trimmedRows` or `addTrimmed`.

## Viewport

A viewport is one rendered region of the grid. RevoGrid uses separate viewports for:

- main rows: `rgRow`
- pinned top rows: `rowPinStart`
- pinned bottom rows: `rowPinEnd`
- main columns: `rgCol`
- pinned start columns: `colPinStart`
- pinned end columns: `colPinEnd`

Events often expose indexes relative to a viewport, not the original array position. See [Understanding Viewports](/guide/viewports).

### Virtual scrolling

Virtual scrolling means the grid renders only what is visible, plus a small rendering frame. This keeps large grids usable and responsive.

<!--@include: ../guide/parts/_reactive.md-->

## Web Component

RevoGrid is implemented as a Web Component, which is why it can be used directly in JavaScript and wrapped by multiple frameworks without changing the core implementation.

## Related guides

- [Overview](/guide/overview)
- [Grid Performance and Virtualization](/guide/performance)
- [Programmatic Grid Control](/guide/programmatic-control)
- [Advanced Configuration](/guide/advanced-configuration)
