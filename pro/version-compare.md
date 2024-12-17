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
  { name: 'Pro Lite' },
  { name: 'Pro Advanced' },
];

const features = [
  {
    name: 'Column Features',
    expanded: true,
    features: [
      { name: 'Column Groups', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Column Spanning', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Column Resizing', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Column Autosizing', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Column Ordering', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Column Pinning', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      // { name: 'Column Menu', supported: ['Pro Advanced'], nesting: 1 },
      // { name: 'Columns Tool Panel', supported: ['Pro Advanced'], nesting: 1 },
    ],
  },
  {
    name: 'Row Features',
    expanded: false,
    features: [
      { name: 'Row Height', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Row Spanning', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Row Reordering', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Multiple Row Reordering', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 },
      { name: 'Row Pinning', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Row Grouping', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Row Grouping with drag to panel', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Row Spanning', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
    ],
  },
  {
    name: 'Selection Features',
    expanded: false,
    features: [
      { name: 'Cell Range Selection', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Fill Handle', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Row Selection and Check', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
    ],
  },
  {
    name: 'Filtering Features',
    expanded: true,
    features: [
      { name: 'Column Filters', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Header Filters', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Quick Filter (Search)', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Set Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Multi Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Slider Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 },
      { name: 'Selection Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 },
    ],
  },
  {
    name: 'Editing Features',
    expanded: false,
    features: [
      { name: 'Row Editing', supported: ['Pro Advanced'], nesting: 1 },
      { name: 'Cell Editing', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Text Editor', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Number Editor', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Date Editor', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Checkbox Editor', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Large Text Editor', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Select Editor', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Undo / Redo', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
    ],
  },
  {
    name: 'Import & Export',
    expanded: false,
    features: [
      { name: 'CSV Export', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Excel Export', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Clipboard Operations', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Drag & Drop', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
    ],
  },
  {
    name: 'Rendering Features',
    expanded: true,
    features: [
      { name: 'Customizable Components', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Column Virtualization', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Row Virtualization > 100 Rows', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
    ],
  },
  {
    name: 'Group & Pivot',
    expanded: false,
    features: [
      { name: 'Tree Data', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Master Detail', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Smart Data Auto Fill', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      // { name: 'Aggregation', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      // { name: 'Pivoting', supported: ['Pro Advanced'], nesting: 1 },
    ],
  },
  {
    name: 'Charting Features',
    expanded: false,
    features: [
      { name: 'Integrated Charts', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Sparklines', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Heat & Cool Maps', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
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
    name: 'Miscellaneous',
    expanded: false,
    features: [
      { name: 'Accessibility', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Context Menu', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Localization', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Support via GitHub', supported: ['Pro Advanced'], nesting: 1 },
      { name: 'Enterprise Support', supported: ['Pro Advanced'], nesting: 1 },
    ],
  },
]
</script>


<div style="text-align: center">

# Start using RevoGrid products for free!
Switch to a commercial plan to access advanced features & technical support.

</div>

<Table  :plans="plans" :features="features" />
