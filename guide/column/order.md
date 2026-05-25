# Column Ordering

The Column Ordering plugin allows users to reorder columns through a simple drag-and-drop interface, providing enhanced control over grid layout. This feature can be enabled by setting the `canMoveColumns` property to `true`.

## Key Events:

- **`columndragstart`**: Triggered when a column drag operation starts. You can use this event to conditionally prevent certain columns from being moved. The event detail is the column definition being dragged.
- **`columndragmousemove`**: Fired during the drag operation, allowing you to track the movement of the column.
- **`beforecolumndragend`**: Fired before the drag operation is applied. This event is cancelable; call `event.preventDefault()` to reject the move.
- **`columndragend`**: Fired when the column drag operation is completed. Use `event.detail.columns` or `event.detail.order` to read and save the final column order for the affected viewport.

:::tip
`roworderchanged` is only for row drag-and-drop. Column drag-and-drop uses the `columndrag*` plugin events above.
:::

## Example Usage

Here’s an example of how to set up and use the Column Ordering plugin in RevoGrid:

```javascript
import { defineCustomElement } from '@revolist/revogrid/standalone';
defineCustomElement();

// Define your grid columns
const columns = [
  { name: 'ID', prop: 'id' },
  { name: 'Name', prop: 'name' },
  { name: 'Price', prop: 'price' }
];

// Initialize RevoGrid
const grid = document.querySelector('revo-grid');
if (grid) {
  grid.source = [
    { id: 1, name: 'Apple', price: 1.2 },
    { id: 2, name: 'Banana', price: 0.5 },
    { id: 3, name: 'Cherry', price: 2.0 }
  ];
  grid.columns = columns;

  // Enable column movement
  grid.canMoveColumns = true;

  // Event listener to prevent certain columns from being moved
  grid.addEventListener('columndragstart', (e) => {
    const { detail } = e;
    if (detail.prop === 'id') {
      e.preventDefault(); // Prevent moving the 'ID' column
    }
  });

  // Optional: validate the target before the move is applied
  grid.addEventListener('beforecolumndragend', (e) => {
    const { newItem, newPosition } = e.detail;

    if (newItem?.prop === 'id' || newPosition.itemIndex === 0) {
      e.preventDefault();
    }
  });

  // Save the final order after the move is applied
  grid.addEventListener('columndragend', (e) => {
    const order = e.detail.columns.map(({ prop }) => prop);

    localStorage.setItem('revogrid:column-order', JSON.stringify(order));
    console.log('Column order changed in viewport:', e.detail.type, order);
  });
}
```

## Customization and Control

In the example above:

- The `canMoveColumns` property is set to `true` to enable the column drag-and-drop feature.
- The `columndragstart` event listener checks if the column being dragged is the 'ID' column. If it is, the drag operation is prevented by calling `e.preventDefault()`.
- The `beforecolumndragend` event can cancel a specific drop target before the internal column order is updated.
- The `columndragend` event runs after the internal order is updated. Use `event.detail.columns` to get the reordered columns for the affected viewport and persist them to local storage, user settings, or your backend.

## Persisting and Restoring Order

A common pattern is to save only the `prop` sequence from `columndragend.detail.columns`, then sort your application-level column definitions before assigning them back to the grid on the next load.

```ts
const savedOrder = JSON.parse(
  localStorage.getItem('revogrid:column-order') || '[]',
) as string[];

const orderIndex = new Map(savedOrder.map((prop, index) => [prop, index]));

grid.columns = [...columns].sort((a, b) => {
  const left = orderIndex.get(String(a.prop)) ?? Number.MAX_SAFE_INTEGER;
  const right = orderIndex.get(String(b.prop)) ?? Number.MAX_SAFE_INTEGER;

  return left - right;
});
```

For pinned columns, `columndragend.detail.type` identifies the affected column viewport: `rgCol`, `colPinStart`, or `colPinEnd`. If your application stores pinned and regular column order separately, use that value to update only the affected region.
