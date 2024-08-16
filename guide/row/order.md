# Row Ordering: Drag and Drop to Reorder Rows

**Introduction:**
The **Row Ordering** feature created to rearrange rows dynamically through a drag-and-drop interface. This functionality enhances the interactivity of your grid by allowing users to reorder rows easily, improving data organization and management.

**Key Features:**

- **Drag-and-Drop Reordering**:
  - **Purpose**: Enables users to reorder rows by dragging a designated reordering cell.
  - **Benefit**: Provides an intuitive and interactive way to rearrange row positions within the grid.

- **Special Reordering Cell**:
  - **Purpose**: Utilizes a specific cell to facilitate the dragging and dropping of rows.
  - **Benefit**: Simplifies the reordering process by clearly indicating the draggable area.

- **Configuration**:
  - **Default State**: Row reordering is disabled by default to maintain initial grid configurations.
  - **Enable Reordering**: To activate row reordering, configure the `rowDrag` property in the column settings.

**Example Usage:**

To enable row reordering in your grid, set the `rowDrag` property in the column configuration:

```tsx
const grid = document.querySelector('revo-grid');

// Configure column property to enable row reordering
grid.columns = [
  { title: 'Name', field: 'name' },
  { title: 'Age', field: 'age' },
  { title: 'Actions', field: 'actions', rowDrag: true } // Enables row reordering
];
```

**Explanation:**
- **`rowDrag` Property**: Set to `true` in the column configuration where the reordering cell is specified. This activates the drag-and-drop functionality for rows.

**Benefits:**

- **Enhanced Interactivity**: Allows users to rearrange rows according to their preferences, making data management more flexible.
- **Improved Usability**: Offers an intuitive way for users to organize data without needing complex controls or additional tools.

**Implementation Tips:**

- Ensure that the `rowDrag` property is set appropriately in your column configuration to enable the feature.
- Customize the appearance and behavior of the reordering cell to match your grid’s design and user experience goals.

**Limitations & Pro Version:**

- **Basic Functionality**: The standard row ordering feature provides fundamental drag-and-drop capabilities.
- **Advanced Features**: For more advanced row ordering options, such as custom drag handles, advanced visual cues, or additional configuration settings, consider upgrading to the Pro version of RevoGrid.

