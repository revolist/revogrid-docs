# Features and Definitions

This document is intended to help both new and experienced developers familiarize themselves with the terminologies associated with RevoGrid.

## API (Application Programming Interface)
Defines a set of rules and protocols for building and interacting with software applications. RevoGrid's API allows for programmatic interaction with the grid, including methods for data manipulation, event handling, and customization.


## Cell
<!--@include: ./parts/cell.md-->

### Cell Editors
Customizable components that enable cell editing within the grid, allowing for a variety of data input methods, including text, date, select options, and more.

### Cell Merge
Combines two or more adjacent cells into a single cell, used for creating spanning headers or emphasizing data.

### Cell Render/Template
Custom functions or components that define how data is displayed in cells, allowing for the visualization of complex data types or the customization of cell appearance.

## Clipboard
Clipboard operations like `copy`, `cut`, and `paste`. Users can easily manipulate grid data using standard clipboard shortcuts. [Read more in the API docs](./api/clipboard).

## Column

<!--@include: ./parts/column.md-->

### Column Grouping

<!--@include: ./parts/column.group.md-->


### Column Header Property

<!--@include: ./parts/column.props.md-->

### Column Pin/Freeze

<!--@include: ./parts/column.pin.md-->

### Column Property

<!--@include: ./parts/column.props.md-->

## Conditional Formatting
Changes the appearance of cells based on specific conditions, such as values or ranges, to facilitate quick data analysis.

## Data Source
A collection of data items displayed by the grid, where each item (Data Model) represents a row. Here is an example of a simple data source:

```typescript
type DataSource = Person[]; // or any other type
```


## Data Model

The data model defines the structure of the data (Data Source). Here is an example of a simple data model:

```typescript
interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
}
```


## DOM (Document Object Model)
A programming interface for HTML and XML documents, allowing scripts to update the content, structure, and style of a document. RevoGrid manipulates the DOM to render and dynamically update the grid.

## ES Modules (ECMAScript Modules)
A module system for JavaScript, allowing developers to import library as an ES Module in modern JavaScript projects.

## Event
Custom events triggered by RevoGrid, allowing developers to respond to various actions within the grid, such as cell editing, row selection, or data updates.

## Export to Excel, CSV
The functionality to export grid data to Excel or CSV formats, enabling users to share or analyze data outside the grid environment.

## Focus
The action or state of a cell or range of cells being the active target for keyboard inputs or commands. Focus can be set programmatically or through user interaction, such as clicking or using navigation keys. To disable or enable focus, use the `can-focus` property. For programmatic updates, use the `setCellsFocus`, `clearFocus`, and `getFocused` methods. [Read more in the API docs](./api/revoGrid). 

### Range
Refers to a selection of multiple cells within the grid. Ranges can be used for operations like copying, pasting, applying formatting, or performing calculations on a group of cells. To disable or enable range, use the `range` property. For programmatic updates, use the `getSelectedRange`, `clearFocus`, and `getFocused` methods. [Read more in the API docs](./api/revoGrid). 

### Range Autofill
A feature that allows users to automatically fill multiple cells with data by dragging the fill handle of a selected cell or range of cells. This can be used to copy data, fill series, and apply formulas to adjacent cells, simplifying data entry and manipulation.

## Keyboard
Keyboard support provided to enhance navigation and usability within the grid. This allows users to interact with the grid more efficiently using their keyboard.
- **Navigation**: Use arrow keys to navigate between cells.
- **Editing**: Press `Enter` to start editing a cell and `Esc` to cancel editing.
- **Selection**: Use `Shift + Arrow keys` to select a range of cells.
- **Copy/Paste**: Use `Ctrl+C` to copy and `Ctrl+V` to paste cell content.
- **Select all**: Use `Ctrl+A` to select all cells.
- **Focus**: Press `Tab` to move focus to the next cell.

## Customization

You can customize keyboard interactions using event listeners and RevoGrid’s API methods. 

## Method
Functions provided by component that can be called to perform actions or retrieve data from the grid, such as refreshing the grid or adding rows.

## Plugin

A modular extension designed to enhance or add new functionalities to the RevoGrid library. 

Plugins allow developers to customize and extend the grid's capabilities beyond its core features. They can be used for integrating additional tools, improving user interaction, or automating tasks within the grid. 

By leveraging plugins, users can update the grid to meet specific requirements of their applications, ensuring a more versatile and adaptable data management solution.

### Pagination
A method of dividing the dataset into separate pages, enhancing the user's ability to navigate through large datasets. RevoGrid supports pagination in a Pro version plugin.

### Filtering
The plugin that enables the grid to display only those rows that meet certain criteria, with support for custom filter functions.

### Sorting
A plugin that orders the data rows based on one or more columns, with the ability to implement custom sorting logic.


## Performance
The efficiency of the library in processing and rendering large datasets without compromising the responsiveness or user experience.


## Prop
Short for "property," refers to the attributes that can be passed to customize and configure component, influencing its behavior and appearance.

## Row

<!--@include: ../guide/parts/row.md-->

### Row Grouping
The capability to group rows or columns under a shared header to organize data more effectively. This feature enhances the readability and usability of large datasets by structuring them into meaningful groups.

### Row Headers
Labels for rows, providing indices, identifiers, or categories for each row to improve readability and navigation.

### Row Pin/Freeze
Allows rows to be fixed or "pinned" to one top/bottom of the grid, remaining visible as the user scrolls vertically through other rows.

### Trimmed Rows
Rows which are present in datasource but not visible in viewport. For example filtered values.

## Viewport
Refers to the currently visible portion of the grid to the user. RevoGrid's virtual scrolling technology efficiently updates the viewport with visible rows and columns as the user scrolls, significantly improving the performance and user experience when navigating large datasets.

### Virtual Scrolling
A performance optimization technique that renders only the rows and columns visible to the user, significantly enhancing performance for grids handling large datasets.

<!--@include: ../guide/parts/reactive.md-->

## Web Component
RevoGrid is implemented as a Web Component, making it framework-agnostic and capable of being used in any web application, enhancing its versatility and ease of integration.
