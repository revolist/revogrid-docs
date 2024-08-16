# Row Span

The **Row Span** feature in RevoGrid Pro allows you to combine adjacent cells vertically into a single, larger cell, similar to the merge functionality found in Excel. This feature is exclusive to the Pro version of RevoGrid and is not available in the main grid code.

## Why Use Row Span?

Row Span is particularly useful for creating headers or data cells that span multiple rows. It helps in organizing and presenting data more effectively by merging cells vertically, which can enhance readability and visual structure within your grid.

## Example Use Cases

- **Merged Headers**: Create a header that spans multiple rows, useful for grouping related data under a single category.
- **Data Grouping**: Combine cells across rows to visually group related information, making the grid easier to interpret and manage.

## How It Works

With Row Span, you can specify which cells should be merged vertically into a single cell. This merged cell will cover multiple rows, and the content will be centered within the merged area.

Since Row Span is a Pro feature, you need to ensure that you have access to the Pro version of RevoGrid to utilize this functionality.

## Getting Started

To use the Row Span feature, configure it through the grid's row or column definitions in your RevoGrid setup. Define which cells should be merged and how they should span across rows.

```javascript
// Example configuration for row span
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
  // This cell spans 2 rows
  const cellMerge: MergeData[] = [
    {
      row: 0,
      column: 0,
      rowSpan: 2,
      colSpan: 1,
      rowType: 'rgRow',
      colType: 'rgCol',
    },
  ];
  grid.additionalData = {
    cellMerge,
  };
}
```

Remember, Row Span is a Pro feature, so ensure your project includes RevoGrid Pro to make use of this advanced functionality.