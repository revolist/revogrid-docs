---
title: Row Header in Data Grid
description: Learn how to customize row headers in Data Grid to display row numbers or use a fully custom template for advanced row header rendering.
head:
  - - meta
    - name: keywords
      content: Data Grid, row headers, custom row header, row header template, Data Grid customization, row numbers, data grid row headers
---

# Row Header in Data Grid
[<Badge type="tip">Interface: RowHeaders</Badge>](../types/Interface.RowHeaders)

Row headers in RevoGrid are versatile and can be used to display row numbers, custom data, or even completely customized templates. This feature enables you to create an Excel-like grid with row numbers or to add meaningful row indicators to your grid.

Row headers are an Excel-like feature that displays row numbers or other custom content on the left side of your grid. This feature is particularly useful for providing context and improving navigation within your data grid. By default, row headers are disabled, but they can be easily enabled and customized to fit your needs.

## Enabling Row Headers


To enable row headers, set the `rowHeaders` property on the data table element. You can use a boolean to show row numbers or pass a custom `RowHeaders` object to define a template.

### Example: Default Row Headers

```typescript
grid.rowHeaders = true; // Enable default row numbers
grid.source = [
  { name: 'Row 1' },
  { name: 'Row 2' },
  { name: 'Row 3' },
];
```


Or you can enable row headers directly in your HTML:

```html
<revo-grid row-headers="true"></revo-grid>
```

In this configuration, the row headers will display default row numbers (e.g., 1, 2, 3).


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


## Dynamic Row Header Updates

The rowHeaders property can be dynamically updated at runtime. For example:

```typescript
grid.rowHeaders = {
  size: 50,
  template: (h, { rowIndex }) => `Row ${rowIndex + 1}`,
};
```

## Best Practices for Using Row Headers

- **Use for Navigation**: Row headers make it easier for users to navigate large datasets by providing a constant reference point.
- **Customize for Clarity**: If your grid contains complex data, consider customizing the row headers to display more than just row numbers, such as row identifiers or other relevant information.
- **Balance with Grid Layout**: Ensure that the size and content of row headers do not overwhelm the main content of your grid. Adjust the size and styling to maintain a clean and functional layout.


## When to Use Custom Row Headers

Custom row headers are ideal for:
- Excel-like Numbering: Displaying row numbers to mimic Excel.
- Status Indicators: Showing icons, badges, or status indicators.
- Advanced Customization: Adding dynamic content like row metadata or progress indicators.


## Conclusion

Row headers provide an Excel-like feature that enhances the usability of your data grid by offering a clear reference point on the left side of the table. Whether you need simple row numbers or more customized content, datagrid's row header functionality is flexible and easy to implement.

By enabling and customizing row headers, you can improve the overall user experience, making your data grid more intuitive and easier to navigate. Try incorporating row headers into your grid setup to see how they can benefit your application.


Learn more about the [RowHeaders interface](../types/Interface.RowHeaders).

