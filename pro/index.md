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

  @media (min-width: 1440px) {
    .proPage .content .plans-container {
        margin: 0 -200px;
        max-width: 1104px;
    }
  }
  @media (min-width: 960px) {
    .proPage .content .plans-container {
        margin: 0 -100px;
        max-width: 992px;
    }
  }
</style>

<style lang="scss" scoped>
:deep(.plans-container) {
  display: flex;
  gap: 1.5em;
  justify-content: center;

  .vp-card {
    &.free {
      max-width: 350px;
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

</style>

<script setup>
import { ref } from 'vue'
import Plan from './Plan.vue'
import ContactForm from './ContactForm.vue'

let showForm = ref(false) // isVisible
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

---

<br/>
<br/>
<br/>

# Pro Version Features

### 📊 Formula Excel-like <Badge type="warning" text="Coming soon" />

Implement and use complex formulas similar to Excel, allowing for dynamic calculations and data manipulation within your grid cells.

### 📥 Excel Export <Badge type="warning" text="Coming soon" />

Easily export your grid data to Excel format, providing a seamless way to share and analyze data outside of the web application.

### 🔗 Merge Cells <Badge type="warning" text="Coming soon" />

Combine adjacent cells into a single cell, similar to Excel’s merge functionality. This is useful for creating headers that span multiple columns or rows.

### 📄 Pagination <Badge type="warning" text="Coming soon" />

Enable pagination to efficiently manage large datasets by breaking them into smaller, more manageable pages, enhancing both performance and user experience.

### 📄 SSR render <Badge type="warning" text="Coming soon" />

Pro examples on how to render Revogrid in SSR applications accross frameworks.

### 🔌 Plugin Explained <Badge type="warning" text="Coming soon" />

Access detailed documentation and examples explaining how to create and use plugins to extend the functionality of RevoGrid. This allows for custom features and integrations tailored to specific needs.


### 🕒 Audit Trail/History <Badge type="warning" text="Coming soon" />

Track changes made to the grid data with a detailed history of edits. Maintain an audit trail for data modifications, enabling review and accountability.

### 📋 Clipboard with JSON Support and Advanced Objects <Badge type="warning" text="Coming soon" />

Enable clipboard functionality with support for JSON and advanced objects. Easily copy and paste complex data structures within your grid and between applications.

### ⬛ Advanced Multiple Selection with Ctrl (CMD) Key <Badge type="warning" text="Coming soon" />

Implement advanced multiple selection capabilities using the Ctrl (CMD) key. This allows users to select multiple, non-adjacent cells or rows, enhancing data manipulation and interaction within the grid.


### 🖱️ Advanced Drag and Drop <Badge type="warning" text="Coming soon" />

Implement sophisticated drag-and-drop functionality within your grid, including custom drag-and-drop behavior and interactions, enhancing the grid's interactivity and usability.

### ⚙️ Event Manager Explanation <Badge type="warning" text="Coming soon" />

Get comprehensive documentation on the event management system within RevoGrid. Learn how to handle, customize, and optimize events to create complex interactions and workflows.

### 🔍 Advanced Filtering

Apply advanced filtering options to your data grid, such as multi-condition filters, date range filters, and custom filter logic to refine and display your data more effectively.

### 🎨 Conditional Formatting Explained <Badge type="warning" text="Coming soon" />

Customize cell styles based on specific conditions, similar to Excel’s conditional formatting. Highlight important data, create visual cues, and improve the readability of your data grid.

### ✏️ Inline Editing Enhancements <Badge type="warning" text="Coming soon" />

Enhance inline editing capabilities with custom editors, validation rules, and real-time data updates.

### 🎨 Custom Themes and Styling <Badge type="warning" text="Coming soon" />

Create and apply custom themes to your grid, allowing extensive styling and branding options. Customize the appearance of your grid to match your application's design.

### ✅ Data Validation <Badge type="warning" text="Coming soon" />

Implement built-in data validation to ensure data integrity. Define customizable validation rules and error handling to maintain high-quality data.

### 🌲 Hierarchical Data Support <Badge type="warning" text="Coming soon" />

Support nested rows and tree structures to represent hierarchical data within your grid. Easily manage and display parent-child relationships and complex data structures.
