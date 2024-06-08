# Slots

Revogrid uses slots, a feature of StencilJS, to allow you to inject custom content into specific parts of the grid. This provides flexibility for customizing the appearance and functionality of your grid.

## Available Slots

### Data Slots

Data slots allow you to add extra elements to the main data area of the grid.

- **Format**: `data-{column-type}-{row-type}`
- **Example**: `data-rgCol-rgRow`

This slot applies additional elements within the `<revogr-data />` component, which is responsible for rendering the main data cells.

```html
<revogr-grid>
  <div slot="data-rgCol-rgRow">Custom Content</div>
</revogr-grid>
```

### Focus Slots

Focus slots enable you to add elements to the focus layer of the grid, which is used to indicate the currently focused cell or range.

- **Format**: `focus-{column-type}-{row-type}`
- **Example**: `focus-rgCol-rgRow`

This slot applies extra elements within the `<revogr-focus />` component, enhancing the visual representation of the focused cells.

```html
<revogr-grid>
  <div slot="focus-rgCol-rgRow">Focused Content</div>
</revogr-grid>
```

## Examples

Here are some examples of how to use these slots:

### Data Slot Example

Add custom content to the main data cells:

```html
<revogr-grid>
  <div slot="data-rgCol-rgRow">Custom Data Element</div>
</revogr-grid>
```

### Focus Slot Example

Add custom content to the focus layer:

```html
<revogr-grid>
  <div slot="focus-rgCol-rgRow">Focus Element</div>
</revogr-grid>
```

By utilizing these slots, you can extend and customize the functionality and appearance of RevoGrid to better fit your application's needs.

For more details, please refer to the [API documentation](./api/revoGrid).
