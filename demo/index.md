---
pageClass: demo-page-class
layout: doc
aside: false
---

<script setup>
import Grid from './vue/DemoMain.vue'
</script>

# Demo Page - Human HR Database

Welcome to the RevoGrid demo page! Here, you will find an example of a simple Human Resources (HR) database.


<!--@include: ../guide/parts/cross-framework-banner.md-->

<Grid />


## Key information


| Field               | Type                          |
|---------------------|-------------------------------|
| **Name**            | string                        |
| **Age**             | string                        |
| **Company**         | selection dropdown            |
| **Eye Color**       | selection dropdown (custom template) |
| **Birth Date**      | date                          |
| **Allocation by Column** | number[]                  |

This demo is implemented in Vue, showcasing the features in managing and displaying data efficiently. However, the example can be easily adapted to work with other frameworks such as React, Angular, and Svelte, thanks to RevoGrid's consistent API.

Feel free to explore the demo and see how RevoGrid can help you build responsive and dynamic data grids for your applications!
For more details on how to set up and customize this demo, check out our documentation.


