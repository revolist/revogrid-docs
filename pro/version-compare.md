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
      { name: 'Column Groups', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Column Spanning', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Column Resizing', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Column Autosizing', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Column Ordering', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Column Pinning', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Column Menu', supported: ['Pro Advanced'], nesting: 0 },
      { name: 'Columns Tool Panel', supported: ['Pro Advanced'], nesting: 0 },
    ],
  },
  {
    name: 'Row Features',
    expanded: false,
    features: [
      { name: 'Row Height', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Row Spanning', supported: ['Pro Advanced'], nesting: 0 },
      { name: 'Row Reordering', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Row Pinning', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Row Grouping', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Row Grouping with drag to panel', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
    ],
  },
  {
    name: 'Selection Features',
    expanded: false,
    features: [
      { name: 'Row Selection', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Cell Range Selection', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Fill Handle', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
    ],
  },
  {
    name: 'Filtering Features',
    expanded: true,
    features: [
      { name: 'Column Filters', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Quick Filter (Search)', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Set Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Multi Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Advanced Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Header Filters', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
    ],
  },
  {
    name: 'Editing Features',
    expanded: false,
    features: [
      { name: 'Row Editing', supported: ['Pro Advanced'], nesting: 0 },
      { name: 'Cell Editing', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Text Editor', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Number Editor', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Date Editor', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Checkbox Editor', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Large Text Editor', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Select Editor', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Undo / Redo', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
    ],
  },
  {
    name: 'Import & Export',
    expanded: false,
    features: [
      { name: 'CSV Export', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Excel Export', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Clipboard Operations', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Drag & Drop', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
    ],
  },
  {
    name: 'Rendering Features',
    expanded: true,
    features: [
      { name: 'Customizable Components', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Column Virtualization', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Row Virtualization > 100 Rows', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
    ],
  },
  {
    name: 'Group & Pivot',
    expanded: false,
    features: [
      { name: 'Tree Data', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Master Detail', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Aggregation', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Pivoting', supported: ['Pro Advanced'], nesting: 0 },
    ],
  },
  {
    name: 'Charting Features',
    expanded: false,
    features: [
      { name: 'Integrated Charts', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Sparklines', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
    ],
  },
  {
    name: 'Accessories',
    expanded: false,
    features: [
      { name: 'Context Menu', supported: ['Pro Advanced'], nesting: 0 },
      { name: 'Filters Tool Panel', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Status Bar', supported: ['Pro Advanced'], nesting: 0 },
    ],
  },
  {
    name: 'Miscellaneous',
    expanded: false,
    features: [
      { name: 'Accessibility', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Localization', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Support via GitHub', supported: ['Pro Advanced'], nesting: 0 },
      { name: 'Enterprise Support', supported: ['Pro Advanced'], nesting: 0 },
    ],
  },
]
</script>

# Start using RevoGrid products for free!
Switch to a commercial plan to access advanced features & technical support.

<Table  :plans="plans" :features="features" />
