# Excel Formulas in Data Grid

Feature in [Pro Version](../../pro/index.md) that allows users to implement and use complex Excel-like formulas directly within their data grids. The Formula Plugin enables dynamic calculations and data manipulation, providing an advanced tool for users who need to process and analyze data efficiently.

## How does it work

The Formula Plugin allows you to enter and manage formulas in grid cells just as you would in Excel. Formulas are entered using an equal sign (`=`) followed by the desired calculation or function (e.g., `=SUM(A1:B2)`). The plugin then parses the formula, computes the result, and displays it in the cell. Moreover, the result is automatically updated whenever the referenced cells change, ensuring that your data remains accurate and up-to-date.

This feature is particularly beneficial for users who require on-the-fly data analysis or who need to perform complex calculations within the grid without exporting data to external tools like Excel.

## Supported Formulas

The Formula Plugin is built on top of the `formulajs` engine, which provides extensive support for a wide variety of functions and formulas. Below is a comprehensive list of supported formulas, showcasing the breadth of operations you can perform directly within the grid.


### Key Features

- **Dynamic Calculation**: The plugin ensures that all formula results are automatically recalculated whenever any of the input data changes.
- **Wide Formula Support**: With `formulajs` at its core, the plugin supports a vast array of Excel-like functions, including mathematical, statistical, and text functions.


## Conclusion

The Formula Plugin in transforms your data grid into a powerful calculation engine, allowing you to perform advanced data processing tasks directly within the grid. Whether you're summing up rows of data, calculating averages, or performing complex statistical analysis, this plugin provides the tools you need to handle data with the sophistication of Excel.
