const actionText = 'Read more'
export const features = [
    {
        name: 'Formula',
        avatar: '/formula.svg',
        desc: 'Complex formulas similar to Excel. Provides dynamic calculations & data manipulation.',
        sponsor: '/guide/formula',
        actionText,
    },
    {
        name: 'Master Detail',
        avatar: '/master-detail.svg',
        desc: 'Expand rows to  reveal detailed child information. Display additional data or build customizable subtables within the grid.',
        sponsor: '/guide/formula',
        actionText,
    },
    {
        name: 'Merge Cells',
        avatar: '/merge.svg',
        desc: 'Combine adjacent cells into a single cell.',
        sponsor: '/guide/cell/merge',
        actionText,
    },
    {
        name: 'Excel Export',
        avatar: '/export.svg',
        desc: 'Export data to Excel format. Supported types include `xlsx`, `xlsm`, `xlsb`, `xls`, and more.',
        sponsor: '/guide/export.excel',
        actionText,
    },
    {
        name: 'Pagination',
        avatar: '/pagination.svg',
        desc: 'Break larger datasets into smaller pages, enhancing both performance and user experience.',
        sponsor: '/guide/pagination',
        actionText,
    },
    {
        name: 'Event Manager',
        avatar: '/event-manager.svg',
        desc: 'Handles, customizes, and optimizes events. Creates complex interactions and workflows.',
        sponsor: '/guide/event-manager',
        actionText,
    },
    {
        name: 'Advanced Filtering',
        avatar: '/filtering.svg',
        desc: 'Advanced multi-condition filters and custom filter logic to refine and display your data more effectively.',
        sponsor: '/guide/advanced-filtering',
        actionText,
    },
    {
        name: 'Conditional Formatting',
        avatar: '/conditional-formatting.svg',
        desc: 'Customize cell styles based on specific conditions. Highlight important data, create visual cues, and improve the readability.',
        sponsor: '/guide/conditional-formatting',
        actionText,
    },
    {
        name: 'Cell Flash',
        avatar: '/cell-flash.svg',
        desc: 'Enable flashing cells to highlight updates, making it easy for users to spot changes in values.',
        sponsor: '/guide/cell/flash',
        actionText,
    },
    {
        name: 'Cell Animating Changes',
        avatar: '/cell-animate.svg',
        desc: 'Animate changes in cell values with directional arrows to indicate increases or decreases.',
        sponsor: '/guide/cell/animating-changes',
        actionText,
    },
    {
        name: 'Data Validation',
        avatar: '/data-validation.svg',
        desc: 'Built-in data validation to ensure data integrity. Define customizable validation rules and error handling to maintain high-quality data.',
        sponsor: '/guide/data-validation',
        actionText,
    },
    {
        name: 'Column Stretch',
        avatar: '/column-stretch.svg',
        desc: 'Automatically adjusts column widths to fit the grid layout efficiently.',
        sponsor: '/guide/column/stretch',
        actionText,
    },
    {
        name: 'Column Selection',
        avatar: '/column-selection.svg',
        desc: 'Enable easy selection of entire columns for enhanced data manipulation.',
        sponsor: '/guide/column/selection',
        actionText,
    },
    {
        name: 'Clipboard with JSON and Advanced Objects',
        avatar: '/clipboard.svg',
        desc: 'Support for JSON and other objects. Copy and paste complex data structures explained.',
        sponsor: '/guide/clipboard.pro',
        actionText,
    },
    {
        name: 'Advanced Drag and Drop',
        avatar: '/drag-and-drop.svg',
        desc: "Sophisticated drag-and-drop functionality with custom behavior and interactions, enhancing the grid's interactivity and usability.",
        sponsor: '/guide/drag-and-drop',
        actionText,
    },
    {
        name: 'Plugin Explained',
        avatar: '/plugin.svg',
        desc: 'Documentation and examples explaining how to create and use plugins to extend the functionality of the grid.',
        sponsor: '/guide/plugin',
        actionText,
    },
    {
        name: 'Data Processing',
        avatar: '/data-sync.svg',
        desc: 'Example of how to process data from/to external sources.',
        sponsor: '/guide/data-sync',
        actionText,
    },
    {
        name: 'Reference Data',
        avatar: '/reference-data.svg',
        desc: 'Manage static key/value pairs for displaying meaningful labels alongside coded values.',
        sponsor: '/guide/reference-data',
        actionText,
    },
    {
        name: 'Auto-Focus on Next Line',
        avatar: '/auto-focus.svg',
        desc: 'Automatically move focus to the next row for streamlined data entry and editing.',
        sponsor: '/guide/auto-focus',
        actionText,
    },
    {
        name: 'Odd Rows Styling',
        avatar: '/odd-rows.svg',
        desc: 'Apply distinct styles to odd rows for improved readability and data distinction.',
        sponsor: '/guide/odd-rows',
        actionText,
    },
    {
        name: 'Row Checkbox Selection',
        avatar: '/row-selection.svg',
        desc: 'Select rows using checkboxes and perform actions on selected data.',
        sponsor: '/guide/row/selection',
        actionText,
    },
    {
        name: 'Row Custom Heading',
        avatar: '/row-heading.svg',
        desc: 'Add custom heading to rows for improved readability and data distinction.',
        sponsor: '/guide/row/heading',
        actionText,
    },
    {
        name: 'Overlay layers',
        avatar: '/overlay.svg',
        desc: 'Push and pop layers on top of the grid to enhance the user experience.',
        actionText,
    },
    // {
    //   name: 'Audit Trail/History',
    //   avatar: '/audit-trail.svg',
    //   desc: 'Track changes made to the grid data with a detailed history of edits. Maintain an audit trail for data modifications, enabling review and accountability.',
    //   sponsor: '/guide/audit-trail',
    //   actionText,
    // },
    // {
    //   name: 'Advanced Multiple Selection with Ctrl (CMD) Key',
    //   avatar: '/multiple-selection.svg',
    //   desc: 'Implement advanced multiple selection capabilities using the Ctrl (CMD) key. This allows users to select multiple, non-adjacent cells or rows, enhancing data manipulation and interaction within the grid.',
    //   sponsor: '/guide/multiple-selection',
    //   actionText,
    // },

    // {
    //   name: 'SSR render',
    //   avatar: '/ssr-render.svg',
    //   desc: 'Pro examples on how to render Revogrid in SSR applications across frameworks.',
    //   sponsor: '/guide/ssr-render',
    //   actionText,
    // },
    // {
    //   name: 'Inline Editing Enhancements',
    //   avatar: '/inline-editing.svg',
    //   desc: 'Enhance inline editing capabilities with custom editors, validation rules, and real-time data updates.',
    //   sponsor: '/guide/inline-editing',
    //   actionText,
    // },
    // {
    //   name: 'Custom Themes and Styling',
    //   avatar: '/custom-themes.svg',
    //   desc: 'Create and apply custom themes to your grid, allowing extensive styling and branding options. Customize the appearance of your grid to match your application\'s design.',
    //   sponsor: '/guide/custom-themes',
    //   actionText,
    // },
    // {
    //   name: 'Hierarchical Data Support',
    //   avatar: '/hierarchical-data.svg',
    //   desc: 'Support nested rows and tree structures to represent hierarchical data within your grid. Easily manage and display parent-child relationships and complex data structures.',
    //   sponsor: '/guide/hierarchical-data',
    //   actionText,
    // },
]

export const proWhy = [
    {
        avatar: '/flash-circle.svg',
        name: 'Accelerate Time-to-Market',
        desc: 'Leverage our comprehensive toolset to rapidly implement complex functionality.',
    },
    {
        avatar: '/flash-circle.svg',
        name: 'Pro-Level Plugins for Extensibility',
        desc: 'Real-world examples that demonstrate how to implement complex features effectively.',
    },
    {
        avatar: '/flash-circle.svg',
        name: 'Gain Insights and Support',
        desc: 'Benefit from access to exclusive expert support that helps you troubleshoot complex issues quickly.',
    }
]
