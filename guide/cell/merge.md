---
title: Data Grid Cell Merge
description: Merge cells in Data Grid.
head:
  - - meta
    - name: keywords
      content: RevoGrid, data grid, virtual grid, virtual rows, virtual columns,angular data grid, grid performance, large data sets, customizable grid, cell properties, row span, column span, cell merge, data grid cell
---

# Merge cells in Data Grid

The Cell Merge feature in [Pro Version](../../pro/index.md) allows you to combine adjacent cells into a single, larger cell, much like Excel's merge functionality. This feature is particularly useful for creating headers that span multiple columns or rows and for visually grouping related data within your grid. 

### What is Cell Merge?

Cell Merge is a powerful tool that can help you:

- **Create Merged Headers**: Design headers that span across several columns or rows, making it easier to categorize and organize related data.
- **Group Data Visually**: Highlight or group related data by merging cells, which improves the readability and interpretability of your grid.

### Use Cases

- **Merged Headers**: Combine cells to create a single header that covers multiple columns. This is ideal for providing overarching categories or labels for grouped columns.
- **Data Grouping**: Use cell merging to visually segment related data or to emphasize specific sections of your grid.

### How does it work

The Cell Merge feature enables you to specify which cells should be merged into a larger cell. This larger cell will span across multiple columns and/or rows. The content of the merged cell will be centrally displayed, enhancing the layout of your grid.

Since this is a Pro feature, ensure that you have access to the Pro version of RevoGrid to utilize this functionality.

### Getting Started

To implement the Cell Merge feature, you'll need to configure it through your grid’s column or row definitions. Below is a step-by-step guide to setting up cell merging.

#### Example

```typescript

<!--@include: ../../demo/js/merge.pro.ts-->

```

In this example, the `cellMerge` configuration merges cells starting from row 0, column 0, spanning 2 rows and 2 columns. Adjust these parameters to fit your specific grid layout requirements.

### Conclusion

The Cell Merge (Column/Row Span) feature in RevoGrid Pro offers an advanced way to enhance the layout and organization of your data grids. By merging cells, you can create cleaner headers and visually group data, improving the overall readability and usability of your grid. Ensure you have access to RevoGrid Pro to leverage this feature and explore its powerful customization capabilities.

For more details on how to use Column Span and other Pro features, visit the [RevoGrid Pro documentation](https://docs.revogrid.com/pro).
