---
title: RevoGrid Performance and Virtualization
description: Learn how RevoGrid keeps large datasets fast with virtual rendering, frame sizing, viewport settings, and initialization strategies such as jobsBeforeRender.
head:
  - - meta
    - name: keywords
      content: RevoGrid performance, virtual scrolling grid, frameSize, disableVirtualX, disableVirtualY, jobsBeforeRender
---

# RevoGrid Performance and Virtualization

RevoGrid is designed to stay responsive with large datasets by rendering only what is needed. This guide explains the main performance-related props and when to use them.

## Virtual rendering is the default

The grid renders:

- visible rows and columns
- a small buffer outside the viewport
- pinned regions in coordinated viewports

This is why large datasets stay fast as long as cell templates and event handlers stay lightweight.

In practice, performance problems usually come from custom application code, not from the base grid itself. The most common causes are:

- expensive cell templates
- rebuilding `columns` too often
- pushing too much logic into per-cell render functions
- forcing full rerenders when a targeted update would be enough

## `frameSize`

`frameSize` defines how many extra rows and columns are rendered outside the visible area.

```ts
grid.frameSize = 1;
```

Use a higher value if:

- users scroll very quickly
- custom cells are visually expensive to mount
- you want a slightly larger pre-render buffer

Use a lower value if:

- you want to minimize off-screen rendering
- your templates are already cheap

Starting point:

- `1` is a good default for most apps
- increase it gradually if you see visible blanking during very fast scrolls

## `disableVirtualX`

`disableVirtualX` disables lazy rendering for columns.

```ts
grid.disableVirtualX = true;
```

This can help when:

- the grid has only a small number of columns
- you prefer stable DOM for horizontally visible cells
- initial rendering is more important than horizontal virtualization

Do not enable it by default for wide grids.

Example:

```ts
grid.disableVirtualX = grid.columns.length < 10;
```

## `disableVirtualY`

`disableVirtualY` disables lazy rendering for rows.

```ts
grid.disableVirtualY = true;
```

This is only appropriate when the row count is small enough that full vertical rendering is affordable.

Example:

```ts
grid.disableVirtualY = grid.source.length < 100;
```

## `jobsBeforeRender`

`jobsBeforeRender` lets you defer the first meaningful render until required async work is ready.

```ts
grid.jobsBeforeRender = [
  fetch('/api/schema').then(r => r.json()),
  fetch('/api/initial-grid-state').then(r => r.json()),
];
```

Good use cases:

- schema or permissions that must load before columns are built
- plugin bootstrapping that would otherwise cause immediate double rendering
- initial app state that must exist before the first visible grid

Typical setup:

```ts
const schemaJob = fetch('/api/columns').then(r => r.json());
const settingsJob = fetch('/api/grid-settings').then(r => r.json());

grid.jobsBeforeRender = [schemaJob, settingsJob];
```

## Renderer performance tips

- keep `cellTemplate` work small
- avoid network requests from inside renderers
- avoid rebuilding large arrays or objects on every cell render
- prefer data precomputation before assigning `source`

Bad pattern:

```ts
cellTemplate: () => {
  const expensive = largeArray.filter(x => x.active);
  return h('div', expensive.length);
}
```

Better pattern:

```ts
const activeCount = largeArray.filter(x => x.active).length;

cellTemplate: () => h('div', activeCount)
```

## Update methods for smoother UX

When you need to update a specific visible cell, `setDataAt` is often cheaper than rebuilding the entire grid state from scratch.

See [Programmatic Grid Control](/guide/programmatic-control).

## Performance checklist

- use plain values before custom templates
- keep row data normalized before it reaches the grid
- prefer `setDataAt` for targeted updates
- use `getVisibleSource()` when operations only need the currently visible rows
- leave virtualization enabled unless the dataset is genuinely small

## Related guides

- [Understanding Viewports](/guide/viewports)
- [Best Practices](/guide/patterns)
- [Programmatic Grid Control](/guide/programmatic-control)
- [API: RevoGrid](/guide/api/revoGrid)
