# Column Spanning in Data Grid

The Column Span feature in [Pro Version](../../pro) allows you to combine adjacent cells into a single, larger cell, much like the merge functionality in Excel. This powerful feature is not available in the main grid code and is exclusive to the Pro version of RevoGrid.

## Why Use Column Span?

Column Span is particularly useful when you need to create headers that span multiple columns or rows, providing a cleaner and more organized layout for your data grid. This feature can also be used to highlight or group related data visually within your grid.

## Example Use Cases

-   **Merged Headers**: Create a single header that spans several columns, useful for categorizing related columns under one umbrella.
-   **Grouping Data**: Visually group related data by merging cells, making the grid easier to read and interpret.

## How It Works

With Column Span, you can specify which cells should be merged into a single cell. The resulting cell can cover multiple columns and/or rows, and the content of the merged cell will be displayed centrally.

Since this is a [Pro Version](../../pro) feature, you’ll need to ensure you have access to the Pro version of RevoGrid to use this functionality.

## Getting Started

To use the Column Span feature, you'll typically configure it through the grid's column or row definitions in your RevoGrid setup. This allows you to define which cells should be merged and how they should span across your grid.

```typescript

<!--@include: ../../demo/js/merge.pro.ts-->

```

Remember, Column Span is a Pro feature, so make sure your project has access to [Pro Version](../../pro) to take advantage of this powerful functionality.