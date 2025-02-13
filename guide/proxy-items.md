# Understanding `proxyItems` in RevoGrid

In RevoGrid, managing large datasets efficiently is crucial for performance. One of the core concepts in achieving this is the use of `proxyItems`, a collection that stores all the items in their original order. This is especially important when dealing with dynamic grid content, where filtering, sorting, and drag-and-drop operations can change the order of visible items, but the underlying data order should be preserved.

## What are `proxyItems`?

`proxyItems` represent the full set of data that the grid operates on, including both visible and hidden items. Unlike the `items` collection, which reflects only the currently visible subset of data (after filtering, pagination, or any other transformations), `proxyItems` holds the complete set of items in their original order. This allows RevoGrid to maintain the integrity of the full dataset while still providing dynamic views to the user.

## Key Points:
1. **Full Data Representation**: `proxyItems` includes all items in the dataset, even those that are filtered out and not displayed.
2. **Efficient Data Handling**: It acts as a reference to the full data set, ensuring that operations like sorting, pagination, and filtering can be applied without losing track of the original data.
3. **Visible Subset**: The `items` collection reflects only the visible rows or columns based on the grid's current view (e.g., after applying a filter or sorting).

## How `proxyItems` Work with `items`

The `items` collection is always a subset of `proxyItems`. Whenever a user interacts with the grid, such as applying a filter or sorting, RevoGrid will adjust `items` to reflect the new visible dataset. However, `proxyItems` remains unchanged and holds the original order.

For example, when a user drags rows to reorder them in the grid, RevoGrid adjusts the order in `items` for the visible subset, but the full dataset in `proxyItems` remains intact. This allows for operations like restoring the original order, implementing drag-and-drop sorting, and synchronizing changes between visible and full datasets.

## Benefits of Using `proxyItems`
- **Performance Optimization**: By separating the full dataset from the visible subset, RevoGrid reduces the need to recompute or shuffle the entire data array when sorting or filtering.
- **Flexible Interactions**: Operations like drag-and-drop, sorting, and grouping can be performed on the visible items without affecting the underlying data order, which is crucial for maintaining consistency.
- **Full Data Integrity**: `proxyItems` guarantees that the original dataset is preserved, making it easy to apply operations like pagination or undo changes.


`proxyItems` provide an efficient way to handle large datasets in RevoGrid while allowing for flexible grid interactions. By maintaining a clear distinction between the visible subset (`items`) and the full dataset (`proxyItems`), RevoGrid enables powerful data management features, ensuring high performance and data integrity in complex grid-based applications.