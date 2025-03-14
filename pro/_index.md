---
title: Pricing
description: Start using RevoGrid for free! Switch to a commercial plan to access advanced features & technical support.
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
layout: custom
breadcrumbs: false
---

<script lang="ts" setup>

import { ref } from 'vue'
import { PRICES } from './prices'
import ContactForm from './ContactForm.vue'
import Table from './FeaturesCompareTable.vue'

let showForm = ref(false) // isVisible
const plans = [
  {
    name: 'Free',

    link: '/guide/',
    buttonText: 'Get Started',
    buttonTheme: 'sponsor'
  },
  {
    name: 'Pro Lite',
    price: PRICES.light.month,
    pricePeriod: 'month',
    buttonText: 'Buy Now',
    link: 'https://buy.stripe.com/dR6cPS98V8Xn90IaEI',
  },
  {
    name: 'Pro Advanced',
    link: 'https://buy.stripe.com/aEUcPS0Cpb5v3Go149',
    price:  PRICES.advanced.month,
    pricePeriod: 'month',
    buttonText: 'Buy Now',
    buttonTheme: 'alt',
    ai: true,
  },
];

const features = [
  {
    name: 'Data Management & Pivot',
    expanded: true,
    features: [
      { name: 'Tree Data', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/tree', video: '/video/tree-data.mp4' },
      { name: 'Master Detail', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/row-master', video: '/video/master-detail.mp4' },
      { name: 'Smart Data Auto Fill', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/autofill',
        video: '/video/autofill.mp4', },
      { name: 'Formula', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/formula-excel',
        video: '/video/formula.mp4', },
      { name: 'Pagination', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/pagination-remote', video: '/video/pagination.mp4', },
      { name: 'Audit Trail History', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/features/history', video: '/video/history.mp4', },
      { name: 'Pivoting', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Aggregation', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
    ],
  },
  {
    name: 'Dynamic Cell Formats',
    expanded: true,
    features: [
      { name: 'Text Format', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types#String' },
      { name: 'Checkbox Format', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/editor-checkbox' },
      { name: 'Large Text Format', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/editor-textarea' },
      { name: 'Number Format', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types#Number' },
      { name: 'Date Format', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types#Date' },
      { name: 'Selection Format', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types#Select-Dropdown' },

      { name: 'Heat & Cool Maps', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/heatmap',
        "video": "/video/heatmap.mp4", },
        
      { name: 'Chart Format', video: '/video/renders.mp4', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/charts' },
      { 
        "name": "Progress Line", 
        "supported": ["Pro Lite", "Pro Advanced"], 
        "nesting": 2,
      },
      { 
        "name": "Progress Line with Value", 
        "supported": ["Pro Lite", "Pro Advanced"], 
        "nesting": 2,
      },
      { 
        "name": "Sparkline", 
        "supported": ["Pro Lite", "Pro Advanced"], 
        "nesting": 2,
      },
      { 
        "name": "Bar Chart", 
        "supported": ["Pro Lite", "Pro Advanced"], 
        "nesting": 2,
      },
      { 
        "name": "Timeline", 
        "supported": ["Pro Lite", "Pro Advanced"], 
        "nesting": 2,
      },
      { 
        "name": "Rating Star", 
        "supported": ["Pro Lite", "Pro Advanced"], 
        "nesting": 2,
      },
      { 
        "name": "Badge", 
        "supported": ["Pro Lite", "Pro Advanced"], 
        "nesting": 2,
      },
      { 
        "name": "Change", 
        "supported": ["Pro Lite", "Pro Advanced"], 
        "nesting": 2,
      },
      { 
        "name": "Thumbs", 
        "supported": ["Pro Lite", "Pro Advanced"], 
        "nesting": 2,
      },
      { 
        "name": "Pie Chart", 
        "supported": ["Pro Lite", "Pro Advanced"], 
        "nesting": 2,
      },
      
      // { name: 'Link Format', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types#Link' },
      // { name: 'Email Format', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/editor-email' }
      // { name: 'Time Format', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types#Time' },
      // { name: 'Percentage Format', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types#Percentage' },
      // { name: 'Currency Format', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types#Currency' },
      // { name: 'Image Format', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types#Image' },
      // { name: 'Color Format', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/types#Color' },
    ]
  },
  // {
  //   name: 'Charting Features',
  //   expanded: true,
  //   features: [
  //   ],
  // },
  {
    name: 'Column Features',
    expanded: true,
    features: [
      // { name: 'Column Menu', supported: ['Pro Advanced'], nesting: 1 },
      // { name: 'Columns Tool Panel', supported: ['Pro Advanced'], nesting: 1 },
      { name: 'Column Spanning', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/cell-merge',
        video: '/video/merge.mp4', },
      { name: 'Column Selection', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/column-selection', video: '/video/column-selection.mp4', },
      { name: 'Column Type Icons', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/demo/ecommerce' },
      { name: 'Column Header Summary', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/demo/ecommerce' },
      { name: 'Column Stretching', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/column-stretch', video: '/video/column-stretch.mp4', },
      { name: 'Last Column Stretch', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/column/stretch' },
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
      { name: 'Row Spanning', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/cell-merge',
        video: '/video/merge.mp4', },
      { name: 'Row Grouping', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/row/grouping' },
      { name: 'Row Grouping with drag to panel', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://pro.rv-grid.com/demo/ecommerce' },
      { name: 'Row Odd Plugin', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/row-odd', video: '/video/row-odd.mp4', },
      { name: 'Row Transpose', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/row-transpose', video: '/video/row-transpose.mp4', },
      { name: 'Row Height', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/row/height' },
      { name: 'Row Reordering', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/row/order' },
      { name: 'Multiple Row Reordering', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://pro.rv-grid.com/guides/row-advanced-drag-drop', video: '/video/drag-and-drop.mp4', },
      { name: 'Row Pinning', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/row/pin' },
    ],
  },
  {
    name: 'Selection Features',
    expanded: true,
      features: [
        { name: 'Row Selection and Check', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/row-select', video: '/video/row-selection.mp4', },
        { name: 'Cell Range Selection', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
        { name: 'Fill Handle', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      ],
  },
  {
    name: 'Filtering Features',
    expanded: true,
    features: [
      { name: 'Header Filters', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/filter-header', video: '/video/filter-header.mp4', },
      { name: 'Quick Filter (Search)', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/filter-showcase' },
      { name: 'Slider Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/filter-slider', video: '/video/filter-advance-slider.mp4', },
      { name: 'Selection Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/filter-selection', video: '/video/filter-advance.mp4', },
      { name: 'Column Filters', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/filters' },
      { name: 'Multi Column Filters', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/filters' },
    ],
  },
  {
    name: 'Editing Features',
    expanded: true,
    features: [
      { name: 'Row Editing', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/editor-row' },
      { name: 'Validation', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/validate-basic', video: '/video/data-validation-input.mp4', },
      { name: 'Cell Tooltips', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/validate-basic', video: '/video/data-validation.mp4', },
      { name: 'Flashing Cells', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/cell-flash', video: '/video/cell-flash.mp4', },
      { name: 'Cell Editing', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/editing' },
    ],
  },
  {
    name: 'Import & Export',
    expanded: true,
    features: [
      { name: 'Excel Export', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/excel-export', video: '/video/excel-export.mp4', },
      { name: 'Drag & Drop Import', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://pro.rv-grid.com/guides/excel-export' },
      { name: 'Clipboard Operations', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/guide/clipboard' },
      { name: 'Clipboard JSON', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://pro.rv-grid.com/guides/clipboard-json', video: '/video/clipboard.mp4', },
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
      { name: 'Context Menu', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, video: '/video/row-heading.mp4', },
      { name: 'Accessibility', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
      { name: 'Localization', supported: ['Free', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
    ],
  },
]
</script>

<div style="text-align: center">

<Badge type="tip" text="Pricing" />

# Build next level apps as a Pro

[Watch our videos](./videos)

</div>

<Table  :plans="plans" :features="features" />

<br />

### Useful links

[Privacy Policy](./policies/privacy) | [Terms of Service](./policies/terms) | [License](./policies/license) | <a href="#contact" @click="showForm = true">Contact us</a>

<ContactForm :isVisible="showForm" @close="showForm = false"/>

<br />

<!--@include: ./_frequent-questions.md -->
