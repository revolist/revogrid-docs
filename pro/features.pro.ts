const featuresProBase = [
    {
        title: 'Hierarchical Data View',
        thumbnail: '/img/tree.png',
        group: 'Advanced Data Structures',
        description:
            'Data tree structures visualization with advanced filtering, sorting, inline editing, intuitive drag-and-drop functionality. <br/> Perfect for managing organizational charts, file systems, or any nested data.',
        videoUrl: '/video/tree-data.mp4',
    },
    {
        thumbnail: '/img/transpose.png',
        title: 'Row Transpose',
        group: 'Advanced Data Structures',
        description:
            'Transform your grid to view data from a different angle by turning columns into rows and vice versa.',
        videoUrl: '/video/row-transpose.mp4',
    },
    {
        title: 'Merge Cells',
        thumbnail: '/img/merge.png',
        group: 'Grid Structure',
        description: 'Merge multiple cells, columns and rows into a single unified cell. Often used for creating headers, organizing data hierarchically, or emphasizing important information across columns.',
        videoUrl: '/video/merge.mp4',
    },
    {
        title: 'Auto Merge',
        thumbnail: '/img/merge-auto.png',
        group: 'Grid Structure',
        description: 'Automatically merges cells with identical values across columns. Supports group-aware merging with leading columns that act as visual anchors — perfect for hierarchical data, grouped rows, and report-style layouts. Hides duplicate values and borders while keeping the underlying data intact.',
        videoUrl: '/video/auto-merge.mp4',
    },
    {
        title: 'Column Collapse & Expand (Drill Down)',
        thumbnail: '/img/column-drill.png',
        group: 'Grid Structure',
        description:
            'Collapse/expand grouped columns, trimm away unnecessary data. Perfect for focusing on the information that matters most, while keeping your workspace clean and efficient.',
        videoUrl: '/video/column-collapse.mp4',
    },
    {
        title: 'Column Hide',
        thumbnail: '/img/column-hide.png',
        group: 'Grid Structure',
        description: 'Column hiding is a feature that allows you to hide specific columns in your grid, making them invisible to users. This is useful for focusing on specific data points, reducing visual clutter, creating different views of the same dataset, and implementing column visibility toggles.',
    },
    {
        title: 'Column Group Reorder',
        thumbnail: '/img/column-reorder.png',
        group: 'Grid Structure',
        description: 'Drag and reorder entire column groups as a single unit. Keeps multilevel column headers intact while letting users rearrange grouped sections to match their preferred layout.',
    },
    {
        title: 'Audit Trail History',
        thumbnail: '/img/audit-log.png',
        videoUrl: '/video/al-demo.mp4',
        group: 'Data Management',
        description:
            'Record and review detailed data-change history for audit workflows. Filter changes at the grid, row, or cell level to focus on exactly what changed, who changed it, and when. Export the full audit log to Excel for compliance reporting or offline review.',
    },
    {
        title: 'History',
        thumbnail: '/img/history.png',
        videoUrl: '/video/history.mp4',
        group: 'Data Management',
        description: 'Track your history of changes. Undo and redo operations.',
    },
    {
        title: 'Range Apply Preview',
        thumbnail: '/img/range-preview.png',
        group: 'Data Management',
        description:
            'Preview pending range copy, paste, or fill changes before applying them to the grid. Useful for validating target cells, confirming mapped values, and preventing accidental bulk updates.',
    },
    {
        title: 'Excel Export/Import',
        thumbnail: '/img/excel.png',
        group: 'Data Management',
        description:
            'Export data to Excel with the layout matching what the user sees in the grid — column order, visibility, frozen panes, and styling are all preserved. Supported formats include xlsx, xlsm, xlsb, xls, and more. Import flows through the same pipeline, keeping round-trips consistent.',
        videoUrl: '/video/excel-export.mp4',
    },
    {
        title: 'Infinite Scroll',
        thumbnail: '/img/pagination-infinity.png',
        group: 'Performance & Data Loading',
        description:
            'Remote-first infinite scrolling that loads server-side data as users scroll. Maintains optimal performance through intelligent data chunking and cleanup, with total-based or dynamic scrolling patterns to fit your use case.',
        videoUrl: '/video/infinite-scroll.mp4',
    },
    {
        title: 'Pagination',
        thumbnail: '/img/pagination.png',
        group: 'Performance & Data Loading',
        description:
            'Break larger datasets into smaller pages, enhancing both performance and user experience.',
        videoUrl: '/video/pagination.mp4',
    },
    {
        title: 'Pagination Remote',
        thumbnail: '/img/pagination.png',
        videoUrl: '/video/pagination.mp4',
        group: 'Performance & Data Loading',
        description:
            'Load page-sized data from a remote source while keeping pagination controls, total counts, and grid state in sync.',
    },
    {
        title: 'Server-side Grouping',
        thumbnail: '/img/server-grouping.png',
        videoUrl: '/video/server-grouping.mp4',
        group: 'Performance & Data Loading',
        description:
            'Delegate row grouping to the server so only the visible group level is fetched. Expand and collapse groups on demand without loading the full dataset — ideal for large hierarchical data where client-side grouping would be too slow.',
    },
    {
        title: 'Formula',
        thumbnail: '/img/formula.png',
        videoUrl: '/video/formula.mp4',
        group: 'Advanced Calculations',
        description:
            'Excel-like formula engine with over 100+ functions, dynamic calculations, cell references, and real-time data manipulation. Build complex financial models, data analysis, and automated workflows with ease.',
    },
    {
        title: 'Grouping Aggregation',
        thumbnail: '/img/aggregation.png',
        group: 'Advanced Calculations',
        description: 'Apply summary functions like sum, average, and more to grouped data.',
    },
    {
        title: 'Advanced Selection Filtering',
        thumbnail: '/img/filter-select.png',
        group: 'Data Filtering & Search',
        description: 'Advanced multi-condition filters based on selection.',
        videoUrl: '/video/filter-advance.mp4',
    },
    {
        title: 'Selection Filter Cascade',
        thumbnail: '/img/filter-cascade.png',
        group: 'Data Filtering & Search',
        description:
            'Cascade selection filters so each filter narrows the available options in the next one. This helps users drill into related dimensions without choosing impossible combinations.',
    },
    {
        title: 'Advanced Slider Filtering',
        thumbnail: '/img/filter-slider.png',
        group: 'Data Filtering & Search',
        description:
            'Slider filter, defining a range of values for filtering.',
        videoUrl: '/video/filter-advance-slider.mp4',
    },
    {
        title: 'Header Input Filtering',
        thumbnail: '/img/filter-header.png',
        group: 'Data Filtering & Search',
        description:
            'Header input filtering data based on user input in the first row. Perfect for filtering data based on user input.',
        videoUrl: '/video/filter-header.mp4',
    },
    {
        title: 'Date Filter',
        thumbnail: '/img/filter-date.png',
        group: 'Data Filtering & Search',
        description: `Filter data based on date ranges. Perfect for applications requiring precise temporal data filtering and analysis.`,
        videoUrl: '/video/filter-date.mp4',
    },
    {
        title: 'Column Stretch',
        thumbnail: '/img/column-stretch.png',
        group: 'Layout & Styling',
        description:
            'Automatically adjusts column widths to fit the grid layout efficiently.',
        videoUrl: '/video/column-stretch.mp4',
    },
    {
        title: 'Sticky Cells and Rows',
        thumbnail: '/img/overlay.png',
        group: 'Layout & Styling',
        description:
            'Keep important cells and rows visible while users scroll through large datasets. Use it for totals, labels, actions, or context rows that must stay available during navigation.',
    },
    {
        title: 'Charts',
        thumbnail: '/img/cell-charts.png',
        group: 'Data Visualization',
        videoUrl: '/video/renders.mp4',
        description:
            'Render compact visual summaries directly in cells, including progress lines, sparklines, bar charts, timelines, ratings, badges, change indicators, thumbs, and pie charts.',
    },
    {
        title: 'Multi-Cell Formatting',
        thumbnail: '/img/multi-cell-format.png',
        group: 'Data Visualization',
        description:
            'Apply different renderers and editors to cells within the same column based on user-defined conditions. Perfect for creating dynamic, context-aware data displays where each cell can have its own unique presentation and interaction model.',
    },
    {
        title: 'Heat&Cold Maps',
        thumbnail: '/img/heatmap.png',
        videoUrl: '/video/heatmap.mp4',
        group: 'Data Visualization',
        description:
            'Data interpretation with a gradient legend, displaying the value range for heatmaps and coldmaps. Perfect for giving users context on how colors map to values.',
    },
    {
        title: 'Conditional Formatting',
        thumbnail: '/img/condition.png',
        group: 'Data Visualization',
        description:
            'Customize cell styles based on specific conditions. Highlight important data, create visual cues, and improve the readability.',
        videoUrl: '/video/conditional-formatting.mp4',
    },
    {
        title: 'Nested Grid',
        thumbnail: '/img/nester-grid.png',
        group: 'Data Visualization',
        description: 'Build a grid inside a grid, showcasing advanced editing options and user interactions for a more dynamic data presentation.',
        videoUrl: '/video/nested-grid.mp4',
    },
    {
        title: 'Master Detail',
        thumbnail: '/img/master-detail.png',
        videoUrl: '/video/master-detail.mp4',
        group: 'Data Visualization',
        description:
            'Advanced master-detail grid implementation that spans across pinned columns, showcasing complex data relationships.',
    },
    {
        title: 'Cell Validation',
        thumbnail: '/img/data-validation.png',
        group: 'Data Quality & Validation',
        description:
            'Highlight erroneous cells and prevent invalid edits to ensure data integrity. Customizable validation rules and error handling to maintain high-quality data.',
        videoUrl: '/video/data-validation.mp4',
    },
    {
        title: 'Input Validation',
        thumbnail: '/img/validate-input.png',
        group: 'Data Quality & Validation',
        description:
            'Add validation to prevent invalid edits and highlight erroneous cells, ensuring data accuracy.',
        videoUrl: '/video/data-validation-input.mp4',
    },
    {
        title: 'Clipboard with JSON',
        thumbnail: '/img/clipboard.png',
        group: 'Data Quality & Validation',
        description:
            'Support for JSON and other objects. Copy and paste complex data structures explained.',
        videoUrl: '/video/clipboard.mp4',
    },
    {
        title: 'Cell Flash',
        thumbnail: '/img/cell-flash.png',
        group: 'Data Visualization',
        description:
            'Enable flashing cells to highlight updates, making it easy for users to spot changes in values.',
        videoUrl: '/video/cell-flash.mp4',
    },
    {
        title: 'Context Menu',
        thumbnail: '/img/context-menu.png',
        group: 'User Interaction',
        description:
            'Build context menus for any grid element - from cells to headers. Cut, copy, paste, add rows, modify columns, and more. Fully customizable with your own actions and behaviors.',
        videoUrl: '/video/row-context.mp4',
    },
    {
        title: 'Tooltip',
        thumbnail: '/img/tooltip.png',
        group: 'User Interaction',
        description:
            'Provides tooltips in the grid cells for extra information by displaying additional context on hover.',
    },
    {
        title: 'Row Grouping Drag and Drop',
        thumbnail: '/img/grouping.png',
        group: 'User Interaction',
        description:
            'Drag columns to the top panel to create grouped rows, improving data organization and visibility.',
        videoUrl: '/video/grouping.mp4',
    },
    {
        title: 'Row Auto Size',
        thumbnail: '/img/row-autosize.png',
        videoUrl: '/video/row-autosize.mp4',
        group: 'Layout & Styling',
        description:
            'Automatically adjust row heights based on cell content. This advanced feature dynamically sizes rows to perfectly fit multi-line text, rich content, and complex cell renders, ensuring optimal content visibility without manual resizing.',
    },
    {
        title: 'Row Odd Styling',
        thumbnail: '/img/row-odd.png',
        group: 'Layout & Styling',
        description:
            'Distinct styles to odd rows for improved readability and better data separation.',
        videoUrl: '/video/row-odd.mp4',
    },
    {
        title: 'Row Custom Heading',
        thumbnail: '/img/row-heading.png',
        group: 'Layout & Styling',
        description:
            'Add custom heading to rows for improved readability and data distinction.',
        videoUrl: '/video/row-heading.mp4',
    },
    {
        title: 'Row Advanced Drag and Drop',
        thumbnail: '/img/drag-and-drop.png',
        group: 'User Interaction',
        description:
            'Customizable drag-and-drop for multiple items with advanced behaviors like custom drop zones, drag handles, and item reordering. Drag rows between tree hierarchy nodes with built-in drop validation to enforce structure rules. Drag between group nodes with automatic group value updates so moved rows instantly reflect their new group.',
        videoUrl: '/video/drag-and-drop.mp4',
    },
    {
        title: 'Row Checkbox Selection',
        thumbnail: '/img/row-selection.png',
        group: 'User Interaction',
        description: 'Next generation plugin for row selection using checkboxes, with keyboard interactions for bulk selection and extra events for enhanced control.',
        videoUrl: '/video/row-selection.mp4',
    },
    {
        title: 'Column Selection',
        thumbnail: '/img/column-selection.png',
        group: 'User Interaction',
        description:
            'Enable easy selection of entire columns for enhanced data manipulation.',
        videoUrl: '/video/column-selection.mp4',
    },
    {
        title: 'Next Line Focus (WCAG)',
        thumbnail: '/img/auto-focus.png',
        group: 'User Interaction',
        description:
            'Automatically move focus to the next row for streamlined data entry and editing.',
        videoUrl: '/video/auto-focus.mp4',
    },
    {
        title: 'Overlay layers',
        thumbnail: '/img/overlay.png',
        group: 'Layout & Styling',
        description:
            'Push and pop layers on top of the grid to enhance the user experience.',
    },
    {
        title: 'Smart Auto Fill',
        thumbnail: '/img/autofill.png',
        videoUrl: '/video/autofill.mp4',
        group: 'Data Management',
        description:
            'Automatically populating cells with a series, pattern based on the initial input. Perfect for repetitive tasks, saving users time.',
    },
    {
        title: 'Dynamic Form Editing',
        thumbnail: '/img/form-edit.png',
        group: 'Data Entry & Automation',
        description: 'Form editing directly within the grid, featuring all necessary fields, including custom options and markdown support for a fast and enhanced data entry experience.',
        videoUrl: '/video/row-form.mp4',
    },
    {
        title: 'Full Row Editing',
        thumbnail: '/img/row-edit.png',
        group: 'Data Entry & Automation',
        description: 'Edit entire row in the grid with a simple API. Use when you need to edit multiple columns in a single row at once.',
        videoUrl: '/video/row-editing.mp4',
    },
    {
        title: 'Cell Checkbox Editors',
        thumbnail: '/img/checkbox-edit.png',
        group: 'Data Entry & Automation',
        description: 'Special cell type that combines editor and renderer into a single checkbox component.',
        videoUrl: '/video/checkbox-editor.mp4',
    },
    {
        title: 'Cell Slider Editor',
        thumbnail: '/img/slider-edit.png',
        group: 'Data Entry & Automation',
        description: 'Interactive slider component for intuitive numeric value editing directly within grid cells, featuring customizable ranges and real-time visual feedback. Perfect for applications requiring precise numeric input control or when dealing with bounded numeric ranges.',
        videoUrl: '/video/slider-editor.mp4',
    },
    {
        title: 'Cell Counter Editor',
        thumbnail: '/img/counter-edit.png',
        group: 'Data Entry & Automation',
        description: 'Elegant plus/minus counter interface for precise numeric value adjustments within grid cells, offering configurable step sizes and range limits. Ideal for applications requiring quick incremental changes or when dealing with bounded numeric values that need frequent small adjustments.',
        videoUrl: '/video/counter-editor.mp4',
    },
    {
        title: 'Timeline Editor',
        thumbnail: '/img/timeline-edit.png',
        group: 'Data Entry & Automation',
        description: 'Visual timeline editor featuring an intuitive progress bar and native date pickers for seamless date range selection within grid cells. Perfect for project management, scheduling, and any application requiring visual time tracking or date range manipulation.',
        videoUrl: '/video/timeline-editor.mp4',
    },
    {
        title: 'Event Manager',
        thumbnail: '/img/event-manager.png',
        group: 'Development & Integration',
        description:
            'Handles, customizes, and optimizes events. Use one event to process multiple actions.',
        sponsor: '/guide/event-manager',
        videoUrl: '/video/event-manager.mp4',
    },
    {
        title: 'Pivot Table',
        thumbnail: '/img/pivot.png',
        videoUrl: '/video/pivot.mp4',
        group: 'Enterprise Tools',
        description: `
        Production-ready Pivot grid for multidimensional analytics, reporting, and OLAP-style workflows. Includes client-side and server-side engines, interactive configuration, drill-down, totals, and advanced layout control.
        `,
        subFeatures: [
            { title: 'Dynamic row, column, and value dimensions' },
            { title: 'Built-in aggregations: sum, count, avg, min, max' },
            { title: 'Custom aggregators per dimension' },
            { title: 'Hierarchical Pivot rows and generated column groups' },
            { title: 'Flat header mode' },
            { title: 'Grand totals and subtotals' },
            { title: 'Custom total labels and duplicate-total suppression' },
            { title: 'Values-on-rows layout' },
            { title: 'Advanced rowTree and $values placement' },
            { title: 'Row drill-down expand/collapse with persisted state' },
            { title: 'Group-row aggregate values' },
            { title: 'Column drill-down/collapse with persisted state' },
            { title: 'Collapsed-column placeholder and aggregator overrides' },
            { title: 'Full drag-and-drop Pivot configurator' },
            { title: 'Compact in-grid Pivot field panel' },
            { title: 'Filter fields in configurator and field panel' },
            { title: 'Server-side Pivot engine/store contract' },
            { title: 'Remote row and column axis windowing' },
            { title: 'Remote sorting and filtering integration' },
            { title: 'Drilldown request/response contract for fact rows' },
            { title: 'Field registry validation for selectors, summaries, and intervals' },
            { title: 'Deterministic remote cache keys and serializable Pivot errors' },
            { title: 'Pivot state save/load contract' },
        ],
    },
    {
        title: 'Gantt & Scheduling',
        thumbnail: '/img/gantt.png',
        videoUrl: '/video/gantt-demo.mp4',
        group: 'Enterprise Tools',
        beta: true,
        description: 'Production-ready Gantt chart and scheduling view for project planning, dependency management, resource allocation, and timeline analysis.',
        subFeatures: [
            { title: 'Project, task, dependency, calendar, resource, assignment, and baseline data model' },
            { title: 'Summary tasks, regular tasks, and milestones' },
            { title: 'Tree hierarchy with WBS task structure' },
            { title: 'Automatic scheduling engine' },
            { title: 'Calendar-aware duration with working days and holidays' },
            { title: 'Manual, inactive, constrained, and deadline-aware task scheduling' },
            { title: 'Dependency graph validation and cycle detection' },
            { title: 'FS, SS, FF, and SF dependencies with lead/lag' },
            { title: 'Dependency arrows with hover, selection, keyboard delete, and drag-to-connect' },
            { title: 'Predecessor and successor field editing' },
            { title: 'Critical path and slack calculation' },
            { title: 'Baseline overlays and baseline selection' },
            { title: 'Resource and assignment modeling' },
            { title: 'Resource filtering and assignee field editing' },
            { title: 'Interactive task create, move, and resize controls' },
            { title: 'Progress drag/edit controls' },
            { title: 'Task indent and outdent actions' },
            { title: 'Cancelable before-change events for tasks, dependencies, and assignments' },
            { title: 'Built-in timeline zoom levels from day/week to multi-year' },
            { title: 'Wheel zoom, zoom anchors, locale formatting, and custom header formatting' },
            { title: 'Resizable task table and timeline panels' },
            { title: 'Today line, project line, milestone lines, and highlighted time ranges' },
            { title: 'Non-working time shading, task labels, and custom task markers' },
        ],
    },
]

export const featuresPro = featuresProBase
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
    },
]
