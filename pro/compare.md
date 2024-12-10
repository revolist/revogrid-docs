---
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
pageClass: proPage
---


<script lang="ts" setup>
import Table from './FeaturesCompareTable.vue'
const plans = [
  { name: 'Pro Lite', price: '€ per developer/year', details: ['Ideal for clients needing advanced tools'] },
  { name: 'Pro Advanced', price: '€ per developer/year', details: ['Includes everything in Pro Lite'] },
];

const features = [
  {
    name: 'Filtering',
    expanded: true,
    features: [
      { name: 'Quick Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'External Filter', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      {
        name: 'Advanced Options',
        supported: [],
        nesting: 0,
        children: [
          { name: 'Advanced Filter', supported: ['Pro Advanced'], nesting: 1 },
          { name: 'Custom Rules', supported: ['Pro Advanced'], nesting: 1 },
        ],
      },
    ],
  },
  {
    name: 'Another Feature Group',
    expanded: false,
    features: [
      { name: 'Feature 1', supported: ['Pro Lite', 'Pro Advanced'], nesting: 0 },
      { name: 'Feature 2', supported: ['Pro Advanced'], nesting: 0 },
    ],
  },
];
</script>


<Table  :plans="plans" :features="features" />