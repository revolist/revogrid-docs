# Column Ordering

The Column Ordering plugin allows users to reorder columns through a simple drag-and-drop interface, providing enhanced control over grid layout. This feature can be enabled by setting the `canMoveColumns` property to `true`.

## Key Events:

- **`columndragstart`**: Triggered when a column drag operation starts. You can use this event to conditionally prevent certain columns from being moved.
- **`columndragmousemove`**: Fired during the drag operation, allowing you to track the movement of the column.
- **`beforecolumndragend`**: This event is fired before the drag operation ends, giving you the opportunity to perform any last-minute adjustments or validations.
- **`columndragend`**: Fired when the column drag operation is completed.

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
    if (detail.data.prop === 'id') {
      e.preventDefault(); // Prevent moving the 'ID' column
    }
  });

  // Optional: Handle column drag end
  grid.addEventListener('columndragend', (e) => {
    console.log('Column drag ended:', e.detail);
  });
}
```

## Customization and Control

In the example above:

- The `canMoveColumns` property is set to `true` to enable the column drag-and-drop feature.
- The `columndragstart` event listener checks if the column being dragged is the 'ID' column. If it is, the drag operation is prevented by calling `e.preventDefault()`.
- You can also handle the `columndragend` event to take action after the column has been moved, such as updating the state or saving the new column order.

