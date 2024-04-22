# Terms and Definitions for Revogrid

Revogrid is a sophisticated, adaptable, and highly customizable grid component designed for efficiently managing and displaying large datasets. This document is intended to help both new and experienced developers familiarize themselves with the terminologies associated with Revogrid.

## API (Application Programming Interface)
Defines a set of rules and protocols for building and interacting with software applications. Revogrid's API allows for programmatic interaction with the grid, including methods for data manipulation, event handling, and customization.

## Cell
The intersection point of a row and a column in the grid, capable of displaying and editing data.

## Column
A vertical line in the grid that categorizes the data to be displayed. Columns in Revogrid can be configured with features like sorting, filtering, and custom cell rendering.

### Column Grouping
The capability to group columns under a shared header to organize data more effectively.

### Column Header Property
Configuration options for headers, such as text alignment, background color, and text style, enhancing the grid's visual organization and readability.

### Column Pin/Freeze
Allows columns to be fixed or "pinned" to one side of the grid, remaining visible as the user scrolls horizontally through other columns.

### Column Property
Attributes or settings applied to columns, influencing their behavior and presentation, such as width, visibility, and custom renderers.

## Conditional Formatting
Changes the appearance of cells based on specific conditions, such as values or ranges, to facilitate quick data analysis.

## Data Source
A collection of data items displayed by the grid, where each item represents a row.

## DOM (Document Object Model)
A programming interface for HTML and XML documents, allowing scripts to update the content, structure, and style of a document. Revogrid manipulates the DOM to render and dynamically update the grid.

## Editors
Customizable components that enable cell editing within the grid, allowing for a variety of data input methods, including text, date, select options, and more.

## ES Modules (ECMAScript Modules)
A module system for JavaScript, allowing developers to import Revogrid as an ES Module in modern JavaScript projects.

## Event
Custom events triggered by Revogrid, allowing developers to respond to various actions within the grid, such as cell editing, row selection, or data updates.

## Export to Excel, CSV
The functionality to export grid data to Excel or CSV formats, enabling users to share or analyze data outside the grid environment.

## Filtering
A feature that enables the grid to display only those rows that meet certain criteria, with support for custom filter functions.


## Focus
The action or state of a cell or range of cells being the active target for keyboard inputs or commands. Focus can be set programmatically or through user interaction, such as clicking or navigation keys.


### Range
Refers to a selection of multiple cells within the grid. Ranges can be used for operations like copying, pasting, applying formatting, or performing calculations on a group of cells.

### Range Autofill
A feature that allows users to automatically fill multiple cells with data by dragging the fill handle of a selected cell or range of cells. This can be used to copy data, fill series, and apply formulas to adjacent cells, simplifying data entry and manipulation.

## Merge Cells
Combines two or more adjacent cells into a single cell, used for creating spanning headers or emphasizing data.

## Method
Functions provided by Revogrid that can be called to perform actions or retrieve data from the grid, such as refreshing the grid or adding rows.

## Pagination
A method of dividing the dataset into separate pages, enhancing the user's ability to navigate through large datasets. Revogrid supports pagination natively.

## Performance
The efficiency of Revogrid in processing and rendering large datasets without compromising the responsiveness or user experience.


## Plugin

A modular extension designed to enhance or add new functionalities to the Revogrid component. Plugins allow developers to customize and extend the grid's capabilities beyond its core features. They can be used for integrating additional tools, improving user interaction, or automating tasks within the grid. By leveraging plugins, users can tailor the grid to meet specific requirements of their applications, ensuring a more versatile and adaptable data management solution.

## Prop
Short for "property," refers to the attributes that can be passed to customize and configure the Revogrid component, influencing its behavior and appearance.


## Renders
Custom functions or components that define how data is displayed in cells, allowing for the visualization of complex data types or the customization of cell appearance.

## Row
A horizontal line in the grid representing a single data item from the source.

### Row Grouping
The capability to group rows or columns under a shared header to organize data more effectively.

### Row Headers
Labels for rows, providing indices, identifiers, or categories for each row to improve readability and navigation.

## Sorting
A feature that orders the data rows based on one or more columns, with the ability to implement custom sorting logic.


## Virtual Scrolling
A performance optimization technique that renders only the rows and columns visible to the user, significantly enhancing performance for grids handling large datasets.

## Viewport
Refers to the currently visible portion of the grid to the user. Revogrid's virtual scrolling technology efficiently updates the viewport with visible rows and columns as the user scrolls, significantly improving the performance and user experience when navigating large datasets.

<!--@include: ../guide/parts/reactive.md-->

## Web Component
Revogrid is implemented as a Web Component, making it framework-agnostic and capable of being used in any web application, enhancing its versatility and ease of integration.
