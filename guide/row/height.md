# Row Height

Row height customization allows you to fine-tune the appearance of your data grid, ensuring that it fits your specific design and usability requirements. Whether you need to set a uniform row height across the entire grid or adjust the height of individual rows.

## Setting Uniform Row Height

If you want to apply the same height to all rows in your grid, you can use the `rowSize` property. This is a quick way to ensure consistency throughout your grid, making each row the same height.

### How to Set Uniform Row Height

You can set the `rowSize` property either directly in your HTML or via JavaScript:

#### In HTML

You can specify the row size directly in your HTML when defining the grid component:

```html
<revo-grid row-size="50"/>
```

This sets all rows in the grid to a height of 50 pixels.

#### In JavaScript

Alternatively, you can set the row size programmatically using JavaScript:

```js
const grid = div.querySelector('revo-grid');
grid.rowSize = 50;
```

This approach is useful if you need to set the row size dynamically based on conditions or user interactions.

## Customizing Individual Row Sizes

While setting a uniform row size is simple and effective, there are times when you might want to customize the height of individual rows. For example, you might want to highlight certain rows by making them larger, or you might need to adjust row heights to fit varying amounts of content.

### How to Set Individual Row Sizes

To define individual row sizes, you can use the `rowDefinitions` property. This property allows you to specify the height for specific rows, giving you granular control over your grid layout.

#### Example: Defining Individual Row Sizes

```js
const grid = div.querySelector('revo-grid');
const rowDefinitions = [{ type: 'rgRow', index: 0, size: 45 }]; // Row with index 0 will have a height of 45px.
grid.rowDefinitions = rowDefinitions;
```

In this example:

- The `rowDefinitions` array contains objects that define the properties of specific rows.
- Each object specifies the `type` (which is always `'rgRow'` for rows), the `index` (the row's position in the grid), and the `size` (the row's height in pixels).
- The row at index `0` will be set to a height of 45 pixels, while other rows will retain the default height unless otherwise specified.

### Combining Uniform and Individual Row Sizes

You can combine the `rowSize` property with individual `rowDefinitions` to create a grid where most rows have a consistent height, but certain rows are customized:

```js
const grid = div.querySelector('revo-grid');
grid.rowSize = 50; // Set all rows to 50px by default
const rowDefinitions = [
  { type: 'rgRow', index: 0, size: 70 },  // Make the first row larger
  { type: 'rgRow', index: 5, size: 30 }   // Make the sixth row smaller
];
grid.rowDefinitions = rowDefinitions;
```

In this scenario, all rows will default to a height of 50 pixels, except for the first row (which will be 70 pixels high) and the sixth row (which will be 30 pixels high).

## Best Practices for Row Height Management

- **Consistency**: For a clean and consistent grid appearance, use the `rowSize` property to set a uniform height for most rows.
- **Customization**: Use `rowDefinitions` to adjust the height of specific rows when necessary, such as for headers, summary rows, or rows containing large amounts of data.
- **Performance**: Be mindful of performance when customizing many rows, especially in large datasets. Try to balance the need for customization with the overall performance of the grid.

## Example

<!--@include: ../../demo/js/js.custom.rows.md-->


## Conclusion

Options for managing row heights allows you to create a grid layout that meets your specific needs. Whether you need uniform row sizes for a consistent look or custom heights for individual rows, these properties make it easy to control the presentation of your data.

By understanding and leveraging these row height features, you can enhance the usability and aesthetics of your data grid, ensuring it performs well and looks great in your application.
