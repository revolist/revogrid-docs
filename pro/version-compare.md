---
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
layout: custom
---


<script lang="ts" setup>
import Table from './FeaturesCompareTable.vue'
const plans = [
  { name: 'Free' },
  { name: 'Pro Lite', link: '/pro' },
  { name: 'Pro Advanced', link: '/pro' },
];

const features = [
  {
    name: 'Group & Pivot',
    expanded: true,
    features: [
      { name: 'Tree Data', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/tree' },
      { name: 'Master Detail', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/row-master' },
      { name: 'Smart Data Auto Fill', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/autofill' },
      { name: 'Formula', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/formula-excel' },
      { name: 'Pagination', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/pagination-remote' },
      // { name: 'Aggregation', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      // { name: 'Pivoting', supported: ['Pro Advanced'], nesting: 1 },
    ],
  },
  {
    name: 'Charting Features',
    expanded: true,
    features: [
      { name: 'Integrated Charts', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/charts' },
      { name: 'Sparklines', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/charts' },
      { name: 'Heat & Cool Maps', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/heatmap' },
    ],
  },
  // {
  //   name: 'Accessories',
  //   expanded: false,
  //   features: [
  //     // { name: 'Filters Tools', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
  //     // { name: 'Status Bar', supported: ['Pro Advanced'], nesting: 1 },
  //   ],
  // },
  {
    name: 'Column Features',
    expanded: true,
    features: [
      { name: 'Column Spanning', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/cell-merge' },
      { name: 'Column Selection', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/column-selection' },
      { name: 'Column Type Icons', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/demo/ecommerce' },
      { name: 'Column Header Summary', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/demo/ecommerce' },
      { name: 'Column Stretching', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/column-stretch' },
      { name: 'Last Column Stretch', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/stretch' },
      // { name: 'Column Menu', supported: ['Pro Advanced'], nesting: 1 },
      // { name: 'Columns Tool Panel', supported: ['Pro Advanced'], nesting: 1 },
      { name: 'Column Groups', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/grouping' },
      { name: 'Column Resizing', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/resize' },
      { name: 'Column Autosizing', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/autosize' },
      { name: 'Column Ordering', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/order' },
      { name: 'Column Pinning', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/pin' },
    ],
  },
  {
    name: 'Row Features',
    expanded: true,
    features: [
      { name: 'Row Spanning', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/cell-merge' },
      { name: 'Row Grouping', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Row Grouping with drag to panel', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://pro.rv-grid.com/demo/ecommerce' },
      { name: 'Row Odd Style', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/row-odd' },
      { name: 'Row Transpose', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/row-transpose' },
      { name: 'Row Height', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/row/height' },
      { name: 'Row Reordering', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/row/order' },
      { name: 'Multiple Row Reordering', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://pro.rv-grid.com/guides/row-advanced-drag-drop' },
      { name: 'Row Pinning', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/row/pin' },
    ],
  },
  {
    name: 'Selection Features',
    expanded: true,
      features: [
        { name: 'Row Selection and Check', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/row-select' },
        { name: 'Cell Range Selection', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
        { name: 'Fill Handle', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      ],
  },
  {
    name: 'Filtering Features',
    expanded: true,
    features: [
      { name: 'Header Filters', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/filter-header' },
      { name: 'Quick Filter (Search)', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/filter-showcase' },
      { name: 'Slider Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/filter-slider' },
      { name: 'Selection Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/filter-selection' },
      { name: 'Column Filters', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/filters' },
      { name: 'Multi Column Filters', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/filters' },
    ],
  },
  {
    name: 'Editing Features',
    expanded: true,
    features: [
      { name: 'Undo / Redo', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/features/history' },
      { name: 'Row Editing', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/editor-row' },
      { name: 'Checkbox Editor', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/editor-checkbox' },
      { name: 'Large Text Editor', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/editor-textarea' },
      { name: 'Validation', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/validate-basic' },
      { name: 'Cell Tooltips', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/validate-basic' },
      { name: 'Flashing Cells', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/cell-flash' },
      { name: 'Cell Editing', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/editing' },
      { name: 'Text Editor', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types.html#String' },
      { name: 'Number Editor', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types.html#Number' },
      { name: 'Date Editor', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types.html#Date' },
      { name: 'Select Editor', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types.html#Select-Dropdown' },
    ],
  },
  {
    name: 'Import & Export',
    expanded: true,
    features: [
      { name: 'Excel Export', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/excel-export' },
      { name: 'Drag & Drop Import', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/excel-export' },
      { name: 'Clipboard Operations', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/clipboard' },
      { name: 'Clipboard JSON', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://pro.rv-grid.com/guides/clipboard-json' },
      { name: 'CSV Export', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/export.plugin' },
    ],
  },
  {
    name: 'Rendering Features',
    expanded: true,
    features: [
      { name: 'Column Virtualization', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/viewports' },
      { name: 'Row Virtualization', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/viewports' },
    ],
  },
  {
    name: 'Support',
    expanded: true,
    features: [
      { name: 'AI Agent Support', supported: ['Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/pro/ai' },
      { name: 'Support via GitHub', supported: ['Pro Advanced'], nesting: 1 },
      { name: 'Support via Email', supported: ['Pro Advanced'], nesting: 1 },
    ]
  },
  {
    name: 'Miscellaneous',
    expanded: true,
    features: [
      { name: 'Event Manager', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/event-manager-explanation' },
      { name: 'Context Menu', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Accessibility', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Localization', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
    ],
  },
]
</script>


<div style="text-align: center">

# Start using RevoGrid
# products for free!
Switch to a [commercial plan](/pro)
<br/> to access advanced features & technical support.

</div>


<Table  :plans="plans" :features="features" />
