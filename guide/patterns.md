---
title: RevoGrid Best Practices
description: Learn the practical patterns that keep RevoGrid fast and maintainable, including virtualization-safe renderers, state handling, editing flows, and large dataset strategies.
head:
  - - meta
    - name: keywords
      content: RevoGrid best practices, virtual grid performance, data grid patterns, editable grid tips, large dataset grid
---

# RevoGrid Best Practices

RevoGrid is designed for large datasets and interactive workflows, but the best results still come from using the right patterns. This guide focuses on practices that align with how the grid actually renders, edits, filters, and updates data.

## Treat virtualization as the default

The core grid renders only the visible rows and columns plus a small frame around them. Build with that assumption:

- keep custom cell renderers light
- avoid expensive DOM work per cell
- avoid doing data transforms inside every render callback
- prefer precomputed values on the row model when a template is reused many times

Read more in [Grid Performance and Virtualization](/guide/performance).

## Separate source data from presentation concerns

Keep your source rows focused on business data, and use column config for presentation:

- `columns` define names, sorting, filters, templates, editors, and read-only rules
- `columnTypes` let you reuse configuration across many columns
- `rowDefinitions` are better than mutating row height logic into templates
- `additionalData` is useful for integration context, not as a second source of row data

## Prefer simple renderers first

Custom renderers are one of RevoGrid’s strengths, but the safest progression is:

1. plain column values
2. `cellProperties` for classes and attributes
3. `cellTemplate` for custom rendering
4. framework-native renderers only when the feature truly needs them

That keeps scroll performance predictable and makes debugging easier.

## Use stable keys in dynamic VNode output

When a renderer returns multiple nodes or list content, use stable keys based on your data model rather than array position. This helps the underlying VDOM reconcile updates correctly during filtering, sorting, and scrolling.

## Use methods for imperative workflows

If the UI needs to:

- focus a cell
- open an editor
- scroll to a row or column
- update a visible cell without rebuilding the whole grid

use the public methods instead of custom DOM hacks. Start with [Programmatic Grid Control](/guide/programmatic-control).

## Keep event handling intentional

RevoGrid emits many events. In application code, it helps to group them by purpose:

- validation and write control: `beforeedit`, `beforerangeedit`, `beforeeditstart`
- source synchronization: `beforesourceset`, `aftersourceset`, `afteranysource`
- filtering and sorting pipelines: `beforefilterapply`, `beforefiltertrimmed`, `beforesorting`
- focus and selection: `beforecellfocus`, `beforefocuslost`, `afterfocus`

Use cancelable events to enforce business rules and informative events for analytics, syncing, or UI side effects.

Read more in [Event Patterns and Lifecycles](/guide/events-guide).

## Use physical and virtual indexes correctly

A common source of bugs is mixing physical source indexes with viewport indexes:

- source arrays are physical data
- event coordinates are often viewport-specific virtual indexes
- pinned rows and columns create separate index spaces

If you are using `setDataAt`, `setCellsFocus`, custom plugins, or advanced event handling, read [Understanding Viewports](/guide/viewports).

## Choose the right loading strategy

For large or remote datasets:

- use built-in virtualization first
- use filtering and sorting carefully if the dataset must stay server-authoritative
- use incremental loading or pagination patterns when you do not want the full dataset in memory
- use `jobsBeforeRender` for initialization work that must finish before the first meaningful paint

## Keep editing rules close to the column

Editing behavior is easiest to maintain when it is defined where the user sees it:

- `readonly` at grid or column level for broad rules
- custom editors in `editors`
- `applyOnClose` when you want close-to-save behavior
- validation in `beforeedit` or related hooks

Read more in [Editing](/guide/editing).

## Make framework wrappers thin

Whether you use React, Angular, Vue 3, or Svelte, keep the wrapper layer focused on:

- providing props and events
- holding refs to the grid instance
- passing framework context through `additionalData` only when needed

The more business logic stays close to the shared RevoGrid API, the easier it is to keep behavior consistent across frameworks.

## Related guides

- [Grid Performance and Virtualization](/guide/performance)
- [Programmatic Grid Control](/guide/programmatic-control)
- [Advanced Configuration](/guide/advanced-configuration)
- [Editing](/guide/editing)
- [Filtering](/guide/filters)
