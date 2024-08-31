
## Key Concepts

1. **Grid** `<revo-grid />`: The grid (or data grid) is the main component that displays [data](./defs#Data-Source) in a tabular format. It consists of [rows](./row) and [columns](./column), where each intersection represents a [cell](./cell).
2. **[Columns](./column)**: Columns define the structure of the data grid. Each [column](./defs#Column) typically represents a specific data field and has properties such as header name, data type, and custom renderers.
3. **[Rows](./row)**: Rows represent the individual records of data within the grid. Each [row](./defs#Row) is an object containing data fields that correspond to the columns.
4. **[Cells](./cell)**: Cells are the individual units of the grid where a row and column intersect. Each cell displays a specific data value.
5. **[Data Model](./defs#Data-Model)**: The data model is a schema that defines the structure of the [data](./defs#Data-Source) to be displayed in the grid, including the fields and their types.
6. **[Viewports](./viewports)**: Viewports are the main sections of the grid that display data. They are responsible for displaying the data in the grid based on the current scroll position.

![Grid Structure](/data-explained.png)
