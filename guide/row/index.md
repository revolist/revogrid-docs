# Data & Rows in Data Grids

<!--@include: ../parts/_row.md-->

RevoGrid offers extensive capabilities for managing rows and the data they contain. From customizing row appearances with class bindings to handling complex data structures, RevoGrid provides the tools you need to create dynamic and responsive data grids.

## Row Class Binding

Row class binding allows you to dynamically apply CSS classes to individual rows based on the data they contain. This feature is useful for visually distinguishing rows that meet certain criteria, such as highlighting rows with specific statuses or applying alternate row colors.

### Using Row Class Binding

To bind a CSS class to rows, you first need to define a property in your data source that will determine the row's class.

You then use the `rowClass` attribute to tell RevoGrid which property to use for this purpose.

### Example: Applying Row Classes

Here’s an example that demonstrates how to apply different CSS classes to rows based on the data:

```tsx
// Define columns
const columns = [{
  name: 'Person',
  prop: 'name'
}];

// Define data source with row classes
const source = [
  { name: 'Steve', myRowClass: 'blue' },
  { name: 'John', myRowClass: 'green' }
];

// Render RevoGrid with row class binding
return '<revo-grid rowClass="myRowClass" source={source} columns={columns}/>';
```

In this example:

- The `myRowClass` property in the data source determines the CSS class applied to each row.
- The `rowClass="myRowClass"` attribute in the RevoGrid component binds the `myRowClass` property to the rows, causing the grid to render rows with the corresponding classes.

### Customizing Row Styles

You can define the styles for these classes in your CSS:

```css
.blue {
  background-color: lightblue;
}

.green {
  background-color: lightgreen;
}
```

With these styles applied, rows with `myRowClass: 'blue'` will have a light blue background, and rows with `myRowClass: 'green'` will have a light green background.

## Handling Complex Row Data

RevoGrid can handle complex data structures, allowing you to manage rows that contain nested data, custom templates, or dynamic content. This flexibility is essential for creating grids that need to display diverse data types or require custom rendering logic.

If your data contains nested objects or arrays, you can still bind this data to your grid's rows. Here’s an example:

```tsx
const columns = [{
  name: 'Person',
  prop: 'name'
}, {
  name: 'Details',
  prop: 'details',
  cellTemplate: (h, data) => {
    return h('span', `Age: ${data.value.age}`);
  }
}];

const source = [
  { name: 'Steve', details: { age: 30 }, myRowClass: 'blue' },
  { name: 'John', details: { age: 25 }, myRowClass: 'green' }
];

return '<revo-grid rowClass="myRowClass" source={source} columns={columns}/>';
```

In this example:

- The `details.age` property accesses nested data within the `details` object for each row.
- RevoGrid will correctly render the `age` property from the nested `details` object in the grid.


## Managing Row Visibility

You may also want to manage the visibility of certain rows based on specific conditions. RevoGrid allows you to easily show or hide rows programmatically.

```tsx
const grid = document.querySelector('revo-grid');

// Hide rows where the name is 'John'
const filteredSource = source.filter(row => row.name !== 'John');
grid.source = filteredSource;
```

In this example:

- The grid's data source is filtered to exclude rows where the `name` is 'John'.
- The grid is then updated to display only the remaining rows.

### Trimmed Rows

**Description:**
The **Trimmed Rows** feature enables selective hiding of rows from the main dataset using physical `rgRow` indexes. By defining `trimmedRows` as a record of row indexes with boolean values, you can dynamically control which rows are visible in the grid. This is particularly useful for managing large datasets, where certain rows can be hidden based on conditions or user interactions, enhancing both performance and usability.

**Example Usage:**

```tsx
const grid = document.querySelector('revo-grid');

// Define rows to be hidden
const trimmedRows = {
  1: true, // Hides the row with index 1
  5: true  // Hides the row with index 5
};

// Apply trimmed rows to the grid
grid.trimmedRows = trimmedRows;
```

**Explanation:**
- **`trimmedRows`**: A record where each key represents the index of a row to hide (`true` indicates the row is hidden).
- **Dynamic Visibility**: Adjust which rows are visible by updating the `trimmedRows` record as needed.

## Odd Row Highlighting

The [`RowOddPlugin`](./odd.pro.md) allows you to automatically highlight odd-numbered rows in your data grid, enhancing the visual clarity and readability of your data.

**Benefits:**

- **Performance Optimization**: Reduces the amount of visible data, which can enhance grid performance.
- **Improved Usability**: Allows for better management of large datasets by hiding irrelevant or unneeded rows.
