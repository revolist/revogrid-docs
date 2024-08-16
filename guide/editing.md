# Editing

RevoGrid is more than just a data visualization tool; it provides robust built-in support for editing, making it a powerful solution for managing your data. Whether you need to perform simple updates or implement full-featured CRUD (Create, Read, Update, Delete) operations.

## Full-Featured CRUD Operations

RevoGrid's editing capabilities allow you to manage your data set directly within the grid, enabling full-featured CRUD operations that are essential for enterprise applications. This means that users can:

- **Create** new rows of data
- **Read** and view existing data
- **Update** data in-place within the grid
- **Delete** rows of data as needed

### Example: CRUD Operations

Here’s how you might implement CRUD operations in RevoGrid:

```javascript
const grid = document.querySelector('revo-grid');

// Enable editing for specific columns
grid.columns = [
  { prop: 'id', name: 'ID', readonly: true },
  { prop: 'name', name: 'Name' },
  { prop: 'price', name: 'Price', editable: true },
];

// Set data source
grid.source = [
  { id: 1, name: 'Apple', price: 1.2 },
  { id: 2, name: 'Banana', price: 0.5 },
];

// Handle create, update, and delete operations via events
grid.addEventListener('beforeedit', (event) => {
  const { detail } = event;
  console.log('Before edit:', detail);
});

grid.addEventListener('afteredit', (event) => {
  const { detail } = event;
  console.log('After edit:', detail);
});
```

In this example:

- The `beforeedit` and `afteredit` events allow you to intercept and handle edits before and after they are committed.

## Read-Only Mode

While datagrid provides extensive editing capabilities, there are scenarios where you may want to display data without allowing modifications. For such cases, you can set the grid or specific columns to read-only mode.

### Setting the Grid as Read-Only

To make the entire grid read-only, simply set the `readonly` attribute:

```javascript
const grid = document.querySelector('revo-grid');
grid.readonly = true;
```

### Setting Specific Columns as Read-Only

You can also specify which columns should be read-only, allowing users to view data without making any changes:

```javascript
grid.columns = [
  { prop: 'id', name: 'ID', readonly: true },
  { prop: 'name', name: 'Name' },
  { prop: 'price', name: 'Price', readonly: true },
];
```

This flexibility allows you to control which parts of the grid are editable and which are not, ensuring that critical data remains protected from unintentional edits.
