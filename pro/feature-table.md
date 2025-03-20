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
import { featuresPro } from './features.pro'

let showForm = ref(false) // isVisible
const plans = [
  {
    name: 'Basic',
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

// Convert featuresPro array into the format needed for comparison table
const features = Object.entries(
  featuresPro.reduce((acc, feature) => {
    if (!acc[feature.group]) {
      acc[feature.group] = {
        name: feature.group,
        expanded: true,
        features: []
      };
    }
    acc[feature.group].features.push({
      name: feature.title,
      supported: ['Pro Lite', 'Pro Advanced'],
      nesting: 1,
      link: feature.link,
      video: feature.videoUrl
    });
    return acc;
  }, {})
).map(([_, value]) => value);


// Add chart components
const dataVisualizationGroup = features.find(g => g.name === 'Data Visualization');
if (dataVisualizationGroup) {
  dataVisualizationGroup.features.push(
    { name: 'Charts', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1 },
    { name: 'Progress Line', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Progress Line with Value', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Sparkline', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Bar Chart', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Timeline', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Rating Star', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Badge', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Change', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Thumbs', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Pie Chart', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2 }
  );
}

// Add basic column features
features.push({
  name: 'Core Features',
  expanded: true,
  features: [
    // Add basic cell formats
    { name: 'Basic Cell Formats', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
    { name: 'Text Format', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/types#String' },
    { name: 'Number Format', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/types#Number' },
    { name: 'Date Format', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/types#Date' },
    { name: 'Selection Format', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/types#Select-Dropdown' },

    // Column features
    { name: 'Column Features', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
    { name: 'Last Column Stretch', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/stretch' },
    { name: 'Column Groups', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/grouping' },
    { name: 'Column Resizing', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/resize' },
    { name: 'Column Autosizing', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/autosize' },
    { name: 'Column Ordering', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/order' },
    { name: 'Column Pinning', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/pin' },

    // Add selection features
    { name: 'Selection Features', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
    { name: 'Cell Range Selection', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Fill Handle', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2 },

    // Add core features
    { name: 'Core Features', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
    { name: 'Column Virtualization', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/viewports' },
    { name: 'Row Virtualization', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/viewports' },
    { name: 'Keyboard Support', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/defs#Keyboard' },
    { name: 'Intelligent Virtual DOM', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/overview#VNode-Reactive-DOM' },
    { name: 'Basic Sorting', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/sorting' },
    { name: 'Theme Support', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/theme' },
    { name: 'Plugin System', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/plugin/' },
    { name: 'Trimmed Rows', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/row/#Trimmed-Rows' },
    { name: 'Custom Header Templates', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/header.template' },
    { name: 'Custom Cell Properties', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/cell/' },
    { name: 'Accessibility', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Localization', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2 },
  ]
});

// Add Support section which isn't in featuresPro
features.push({
  name: 'Advanced Support',
  expanded: true,
  features: [
    { name: 'AI Agent Support', supported: ['Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/pro/ai' },
    { name: 'Support via GitHub', supported: ['Pro Advanced'], nesting: 1 },
    { name: 'Support via Email', supported: ['Pro Advanced'], nesting: 1 },
  ]
});
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
