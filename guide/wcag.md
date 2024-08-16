# Accessibility

RevoGrid is committed to making data grids accessible to everyone, following international accessibility standards and best practices. This includes implementing keyboard navigation, support for screen readers, and ensuring that all interactive elements are easy to use for people with disabilities.

## Accessibility Guidelines

RevoGrid adheres to globally accepted accessibility standards such as WCAG (Web Content Accessibility Guidelines) and other regional regulations like ADA (Americans with Disabilities Act) and Section 508 in the US, as well as the European Accessibility Act (EAA). The aim is to support WCAG 2.1 Level AA, which is the most common target for organizations seeking to ensure their web applications are accessible.

### Key Guidelines Followed:

- **WCAG (Web Content Accessibility Guidelines)**: Provides a comprehensive set of criteria for making web content accessible to a wide range of users, including those with disabilities.
- **WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)**: Offers best practices for making web applications like RevoGrid accessible, particularly when it comes to complex interactive components like data grids.

## Keyboard Navigation

Comprehensive keyboard navigation ensures that all users, including those who rely on keyboards instead of a mouse, can interact with the grid seamlessly.

### Key Navigation Features:

- **Tab Sequence Management**: Following WAI-ARIA practices, grid ensures that only the relevant focusable elements are included in the tab sequence, making navigation intuitive.
- **Arrow Keys**: Navigate between cell elements using the arrow keys, ensuring that users can move horizontally and vertically across the grid.
- **Home/End Keys**: Quickly navigate to the first or last cell of the current row, or use `Ctrl+Home` and `Ctrl+End` to jump to the first or last cell of the entire grid.
- **Page Up/Page Down**: Scroll through pages of data, ensuring users can easily navigate through large datasets.
- **Enter/Escape**: Select a cell or row for editing, or exit the edit mode using `Enter` or `Escape`.

## Customizing Accessibility Features

Grid events allow developers to customize and enhance the accessibility features to better suit their application’s needs.

## Density and Accessibility

Themes are also provide options to adjust the density of rows and columns, making it easier to read and interact with the grid for users with different needs.

### Setting Density

You can set the density of the grid using the `row-size` prop. This can be controlled programmatically or through the UI, providing flexibility based on user preferences.

- **Standard Density 27px**: The default setting, offering standard Excel view.
- **Compact Theme Density 32px**: Reduces the space between rows and columns for users who need to view more data at once.
- **Material Theme Density 42px**: Increases spacing for easier reading, useful for users with visual impairments.
