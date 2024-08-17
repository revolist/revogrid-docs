---
sidebar: false
aside: false
editLink: false
footer: true
prev: false
next: false
pageClass: proPage
---

<style lang="scss">
  
  .plans-container {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    justify-content: center;

    .vp-card {
      &.free {
        background-color: var(--vp-c-bg-soft);
        border: 1px solid var(--vp-c-divider-light);
      }
      &.pro {
        .plan-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 50px;
        }
      }
    }
  }


  @media (min-width: 1440px) {
    .plans-container {
        margin: 0 -200px;
        max-width: 1104px;
    }
  }
  @media (min-width: 960px) {
    .plans-container {
        margin: 0 -100px;
        max-width: 992px;
        flex-direction: row;
    }

     .vp-card {
      &.free {
        max-width: 350px;
      }
     }
  }
figure.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;


  .avatar-img {
      position: initial;
      object-fit: initial;
      max-width: 60%;
      max-height: 60%;
      border-radius: 0;
  }
}

.sp-icon {
  display: none;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import Plan from './Plan.vue'
import ContactForm from './ContactForm.vue'

import type { DefaultTheme } from 'vitepress/theme'
import VPTeamMembers from 'vitepress/dist/client/theme-default/components/VPTeamMembers.vue'

let showForm = ref(false) // isVisible

const actionText = 'Read more'
const features = [{
  name: 'Formula',
  avatar: '/formula.svg',
  desc: 'Complex formulas similar to Excel. Provides dynamic calculations & data manipulation.',
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
    name: 'Clipboard with JSON and Advanced Objects',
    avatar: '/clipboard.svg',
    desc: 'Support for JSON and other objects. Copy and paste complex data structures explained.',
    sponsor: '/guide/clipboard.pro',
    actionText,
  },
  {
    name: 'Plugin Explained',
    avatar: '/plugin.svg',
    desc: 'Documentation and examples explaining how to create and use plugins to extend the functionality of the grid.',
    sponsor: '/guide/plugin',
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
  //   name: 'Advanced Drag and Drop',
  //   avatar: '/drag-and-drop.svg',
  //   desc: 'Implement sophisticated drag-and-drop functionality within your grid, including custom drag-and-drop behavior and interactions, enhancing the grid\'s interactivity and usability.',
  //   sponsor: '/guide/drag-and-drop',
  //   actionText,
  // },
  // {
  //   name: 'Event Manager Explanation',
  //   avatar: '/event-manager.svg',
  //   desc: 'Get comprehensive documentation on the event management system within RevoGrid. Learn how to handle, customize, and optimize events to create complex interactions and workflows.',
  //   sponsor: '/guide/event-manager',
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
  //   name: 'Advanced Filtering',
  //   avatar: '/filtering.svg',
  //   desc: 'Apply advanced filtering options to your data grid, such as multi-condition filters, date range filters, and custom filter logic to refine and display your data more effectively.',
  //   sponsor: '/guide/advanced-filtering',
  //   actionText,
  // },
  // {
  //   name: 'Conditional Formatting Explained',
  //   avatar: '/conditional-formatting.svg',
  //   desc: 'Customize cell styles based on specific conditions, similar to Excel’s conditional formatting. Highlight important data, create visual cues, and improve the readability of your data grid.',
  //   sponsor: '/guide/conditional-formatting',
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
  //   name: 'Data Validation',
  //   avatar: '/data-validation.svg',
  //   desc: 'Implement built-in data validation to ensure data integrity. Define customizable validation rules and error handling to maintain high-quality data.',
  //   sponsor: '/guide/data-validation',
  //   actionText,
  // },
  // {
  //   name: 'Hierarchical Data Support',
  //   avatar: '/hierarchical-data.svg',
  //   desc: 'Support nested rows and tree structures to represent hierarchical data within your grid. Easily manage and display parent-child relationships and complex data structures.',
  //   sponsor: '/guide/hierarchical-data',
  //   actionText,
  // },
];

</script>

# Build next level apps as a Pro

Maintaining and developing Revogrid, along with its documentation and community, is a big job. It demands time and resources—none of which would be possible without your incredible support.

We are excited to introduce the Pro version, aimed at supporting the future growth of the library and providing you with the exclusive benefits like direct support, prioritized feature requests, and unique insights into our latest offerings. 🌟

<div class="plans-container">

<Plan
title="Forever free"
class="free"
description="RevoGrid is open-source MIT-licensed software, and it will be forever."
buttonText="Get Started"
buttonTheme="sponsor"
href="/guide"
icon="✔️"
:features="[
'Perpetual access to Extended Grid Core functionality.',
'Frequent product updates.',
'Documentation and community support.',
'Continuous Technical team insights.',
]"
@open="showForm = true"
/>

<Plan
title="Professional"
class="pro"
description="Best for companies and individuals that want a direct wire to the Revogrid team experience."
buttonText="Request a Quote"
:features="[
'Access to all Pro Examples, Plugins and Documentation.',
'Up to 1 hour of individual support via email per month.',
'Prioritized Github Issues and Pull Requests.',
'Prioritized Roadmap Item and Feature Requests.',
'Introduction call with one of the creators.',
'Keep the library running and maintained under an MIT License.',
]"
@open="showForm = true"
/>
<ContactForm :isVisible="showForm" @close="showForm = false"/>

</div>

Thank you for being an essential part of our community and for helping us make Revogrid better every day. 🌟

Warm regards,
<br/>The Revolist Team

<br/>
<br/>

-----

<br/>
<br/>

### The most popular Pro Features

<VPTeamMembers :members="features" size="small" />
