---
title: Master Rows in Data Grid Pro
description: Learn how to implement Master Rows in Data Grid Pro for creating expandable rows that display additional hierarchical data or details within the grid.
head:
  - - meta
    - name: keywords
      content: RevoGrid Pro, Master Rows, Expandable Rows, Hierarchical Data, JavaScript Data Grid, viewports, dynamic updates, virtual rows, virtualization
---

# Master Rows in Data Grid

Master Rows in [Pro Version](../../pro) enable expandable rows within the grid, allowing you to display detailed or hierarchical data for each row. This is ideal for presenting nested information such as sub-rows, additional details, or hierarchical structures.

What is complex about Master Rows is that they require additional configuration to have a fully functional grid container across multiple [viewports](/guide/viewports).

## Example: Data Grid Master Rows in TypeScript

```typescript

<!--@include: ../../demo/js/js.row-master.pro.ts-->

```

## Master Row Configuration
- `rowHeight`: Defines the height of the expanded row.
- `template`: Custom HTML template to render the expanded row content. In the example, the template displays sub-rows under the main row.

## Key Features
- Expandable Rows: Allows rows to expand, revealing additional data or hierarchical structures.
- Custom Templates: Fully customizable row templates using template and h for dynamic rendering.
- Dynamic Updates: Master row configurations can be updated at runtime to reflect changes in data or layout.

## Next Steps
- Explore the [Pro Version](../../pro) of RevoGrid, which includes advanced features like cell merging, row reordering, and more.


