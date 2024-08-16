# Pin/Freeze (Fixed rows)

Pinning or freezing rows in a data grid is a feature that allows you to keep specific rows always visible at the top or bottom of the grid, even when the user scrolls through the rest of the data. This is particularly useful for displaying headers, totals, or other key information that should remain accessible at all times.

## What Are Pinned Rows?

Pinned rows are rows that are fixed in place, separate from the main scrollable data set. You can pin rows to the top or bottom of your grid. These pinned rows are managed through separate data sources, which gives you full control over what is displayed in these fixed positions.

### Key Features:

- **Pinned Top Rows**: These rows are fixed at the top of the grid and remain visible as you scroll through the rest of the data.
- **Pinned Bottom Rows**: These rows are fixed at the bottom of the grid and also remain visible during scrolling.

## How to Implement Pinned Rows

Implementing pinned rows is straightforward. You define separate data sources for the rows you want to pin and then assign these data sources to the `pinnedTopSource` and `pinnedBottomSource` properties of the grid.

### Example

Here’s a simple example of how to pin rows at the top and bottom of your RevoGrid:

```javascript
// Define the data sources for pinned rows
const pinnedTopSource = [{ name: 'Dixon Hudson' }];
const pinnedBottomSource = [{ name: 'Weber Henderson' }];

// Initialize the RevoGrid
const grid = document.querySelector('revo-grid');

// Assign the pinned rows
grid.pinnedTopSource = pinnedTopSource;
grid.pinnedBottomSource = pinnedBottomSource;
```

In this example:

- The `pinnedTopSource` array contains the data for the row that will be pinned at the top of the grid.
- The `pinnedBottomSource` array contains the data for the row that will be pinned at the bottom of the grid.
- These rows will remain fixed in place while the rest of the grid's rows are scrollable.

## Use Cases for Pinned Rows

Pinned rows are useful in a variety of scenarios, including:

- **Headers and Labels**: Pinning headers or labels at the top of the grid to ensure that they are always visible.
- **Totals and Summaries**: Displaying totals, averages, or other summary information in a pinned bottom row to keep key metrics in view.
- **Sticky Notes or Comments**: Keeping important notes or comments accessible by pinning them to the top or bottom of the grid.

## Conclusion

The ability to pin or freeze rows adds a significant layer of functionality to your data grid, enhancing the user experience by keeping critical information always visible. Whether you're displaying headers, summaries, or other key data, pinned rows ensure that your most important content remains front and center.

Try implementing pinned rows in your grid setup today to see how they can improve your grid's usability and functionality.
