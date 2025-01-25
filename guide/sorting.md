# Data Grid Sorting

Adding sorting to your data grid is quite straightforward:

- **Add `sortable` property to the column**: Enables sorting to be triggered on header click.
- **Add `order` property to the column**: Specifies the default sorting order, either `asc` (ascending) or `desc` (descending).
- **(Optional) Add `cellCompare` method to the column**: Provides custom sorting logic.

### Example

Here’s an example of how to add sorting to your columns:

```javascript
const columns = [
  {
    name: 'Name',
    prop: 'name',
    sortable: true,  // Enables sorting
    order: 'asc',     // Default sorting order
    cellCompare: (prop, a, b) => { // Custom sorting logic
      const av = a[prop]?.toString().toLowerCase();
      const bv = b[prop]?.toString().toLowerCase();
      return av - bv;
    }
  },
];

const items = [
  { name: 'John Doe', age: 30 },
  { name: 'Jane Smith', age: 25 }
];

grid.columns = columns;
grid.source = items;
```



## Sorting Events

:::tip
For more details, please refer to the API section and the column data schema interfaces.
:::


- **`beforesorting`** - `CustomEvent<{ column: ColumnRegular, order: 'desc' | 'asc' }>` - Triggered after a header click and before sorting starts. Use `e.preventDefault()` to prevent any further sorting chain. If this event is prevented, `beforesortingapply` will not be triggered.

- **`beforesortingapply`** - `CustomEvent<{ column: ColumnRegular, order: 'desc' | 'asc' }>` - Triggered before the sorting data is applied. Use `e.preventDefault()` to avoid the default data sorting and implement your own sorting logic.

- **`aftersortingapply`** - Triggered after sorting has been applied and completed. This event occurs for both row and column sorting.



## Lifecycle

1. **`@event` `beforesorting`** - Triggered when sorting is initiated. At this point, no changes have been made yet. This event can be triggered by sorting from a column or from the source. If the sorting type is from rows, the column will be undefined.
2. **`@method` `updateColumnSorting`** - This method updates the column sorting icon on the grid and the column itself, but the data remains unchanged.
3. **`@event` `beforesortingapply`** - Triggered before the sorting data is applied to the data source. You can prevent this event to stop the data from being sorted. This event is only called when sorting is initiated from a column click.
4. **`@event` `aftersortingapply`** - Triggered after the sorting has been applied and completed. This event occurs for both row and column sorting. If you prevent this event, the subsequent steps will not be executed.
