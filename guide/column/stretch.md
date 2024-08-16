# Column Stretching

The Column Stretch feature allows you to automatically expand the last column to fill any remaining space in your grid. This ensures that your grid fully utilizes the available width, providing a more polished and professional appearance.

## Enabling Column Stretch

To enable column stretching, simply set the `stretch` attribute to `"true"`. This will activate the feature, causing the last column to stretch and fill any unused space in the grid.

### Example Usage

Here’s how to enable column stretching:

```html
<revo-grid stretch="true"></revo-grid>
```

### How It Works

With the `stretch` attribute enabled:

- The last column will automatically adjust its width to fill the remaining space in the grid.
- This feature is particularly useful when the total width of your columns doesn't match the width of the grid, ensuring that there are no gaps at the end.

### Benefits of Column Stretching

- **Improved Aesthetics**: The grid appears fully utilized, eliminating any unnecessary white space.
- **Responsive Design**: Automatically adapts to different screen sizes or container widths, making your grid more flexible.
- **Simple Implementation**: Easily enable this feature with a single attribute, requiring no complex configuration.

## Conclusion

The Column Stretch feature is a simple yet effective way to enhance the layout of your grid by ensuring the last column always fills the available space. By using the `stretch="true"` attribute, you can create grids that look clean, professional, and responsive with minimal effort.
