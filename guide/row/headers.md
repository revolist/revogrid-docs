# Row Headers

Row headers are an Excel-like feature that displays row numbers or other custom content on the left side of your grid. This feature is particularly useful for providing context and improving navigation within your data grid. By default, row headers are disabled, but they can be easily enabled and customized to fit your needs.

## Enabling Row Headers

To enable row headers in RevoGrid, you can set the `row-headers` attribute to `true`. This will display a simple row number at the left side of each row, much like in Excel.

### Enabling in HTML

You can enable row headers directly in your HTML:

```html
<revo-grid row-headers="true"></revo-grid>
```

This will add row numbers to the left side of your grid, enhancing the usability of your data presentation.

### Enabling via JavaScript

Alternatively, you can enable row headers programmatically using JavaScript:

```js
const grid = document.querySelector('revo-grid');
grid.rowHeaders = true;
```

This method is useful if you need to enable row headers dynamically based on user interaction or other conditions in your application.

## Customizing Row Headers

In addition to simply displaying row numbers, RevoGrid allows you to customize row headers by treating them as additional fixed columns on the left side of the grid. This gives you full control over their appearance and behavior, similar to any other column in the grid.

### Customization Options

When customizing row headers, you can use the same properties available for regular columns, such as `size`, `cellTemplate`, and more.

#### Example: Setting Row Header Size

You can set the size of the row headers to accommodate more content or to align with the overall design of your grid:

```js
const grid = document.querySelector('revo-grid');
grid.rowHeaders = {
  size: 200 // Set the width of the row header column to 200px
};
```

#### Example: Customizing Row Header Content

You can also use a custom cell template to display content other than just row numbers. This allows you to add icons, text, or even interactive elements to the row headers:

```js
const grid = document.querySelector('revo-grid');
grid.rowHeaders = {
  size: 200,
  cellTemplate: (h, props) => h('div', `Row ${props.model[props.rowIndex].id}`)
};
```

In this example:

- The `size` property sets the width of the row header column.
- The `cellTemplate` function customizes the content of each row header, displaying "Row" followed by the ID of the row's data.

## Best Practices for Using Row Headers

- **Use for Navigation**: Row headers make it easier for users to navigate large datasets by providing a constant reference point.
- **Customize for Clarity**: If your grid contains complex data, consider customizing the row headers to display more than just row numbers, such as row identifiers or other relevant information.
- **Balance with Grid Layout**: Ensure that the size and content of row headers do not overwhelm the main content of your grid. Adjust the size and styling to maintain a clean and functional layout.

## Conclusion

Row headers provide an Excel-like feature that enhances the usability of your data grid by offering a clear reference point on the left side of the table. Whether you need simple row numbers or more customized content, datagrid's row header functionality is flexible and easy to implement.

By enabling and customizing row headers, you can improve the overall user experience, making your data grid more intuitive and easier to navigate. Try incorporating row headers into your grid setup to see how they can benefit your application.
