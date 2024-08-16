# Column Spanning

The Column Span feature in RevoGrid Pro allows you to combine adjacent cells into a single, larger cell, much like the merge functionality in Excel. This powerful feature is not available in the main grid code and is exclusive to the Pro version of RevoGrid.

## Why Use Column Span?

Column Span is particularly useful when you need to create headers that span multiple columns or rows, providing a cleaner and more organized layout for your data grid. This feature can also be used to highlight or group related data visually within your grid.

## Example Use Cases

-   **Merged Headers**: Create a single header that spans several columns, useful for categorizing related columns under one umbrella.
-   **Grouping Data**: Visually group related data by merging cells, making the grid easier to read and interpret.

## How It Works

With Column Span, you can specify which cells should be merged into a single cell. The resulting cell can cover multiple columns and/or rows, and the content of the merged cell will be displayed centrally.

Since this is a Pro feature, you’ll need to ensure you have access to the Pro version of RevoGrid to use this functionality.

## Getting Started

To use the Column Span feature, you'll typically configure it through the grid's column or row definitions in your RevoGrid setup. This allows you to define which cells should be merged and how they should span across your grid.

```javascript
// Example configuration for column span
const columns = [
  { name: 'ID', prop: 'id' },
  { name: 'Category', prop: 'category' },
  { name: 'Item', prop: 'item' },
  { name: 'Price', prop: 'price' }
];

// Initialize RevoGrid with Pro features enabled
const grid = document.querySelector('revo-grid');
if (grid) {
  grid.columns = columns;
  grid.source = [
    { id: 1, category: 'Fruits', item: 'Apple', price: 1.2 },
    { id: 2, category: 'Fruits', item: 'Banana', price: 0.5 },
    { id: 3, category: 'Vegetables', item: 'Carrot', price: 0.7 }
  ];
  // This column spans 2 columns
  const cellMerge: MergeData[] = [
    {
      row: 0,
      column: 0,
      rowSpan: 2,
      colSpan: 2,
      rowType: 'rgRow',
      colType: 'rgCol',
    },
  ];
  grid.additionalData = {
    cellMerge,
  };
}
```

Remember, Column Span is a Pro feature, so make sure your project has access to RevoGrid Pro to take advantage of this powerful functionality.