---
title: Vue 2 Integration Guide
description: Learn how to integrate RevoGrid with Vue 2 for creating high-performance, scalable data grids with support for virtual rows and columns.
head:
  - - meta
    - name: keywords
      content: RevoGrid, Vue 2, data grid, Vue 2 integration, virtual grid, virtual rows, virtual columns, reactive data grid, Vue data grid, Vue 2 grid example, grid performance, large data sets, customizable grid
---


<div style="text-align: center">


# Vue 2 Data Grid Getting Started

<img src="/vuejs.svg" alt="Vue logo" width="300" height="300" style="margin: 20px auto;" />

</div>

Revogrid provide special wrapper based on [stenciljs vue adapter](https://www.npmjs.com/package/@revolist/vue-datagrid). Just import it to your project and it can be used as part of vue system.

## Installation

::: code-group

```npm
npm i @revolist/vue-datagrid

```

```pnpm
pnpm add @revolist/vue-datagrid
```

```yarn
yarn add @revolist/vue-datagrid
```

```bun
bun add @revolist/vue-datagrid
```

:::

## Usage

### App.vue

```vue
// App.vue

<template>
    <!-- Use the VGrid component and bind the data source and columns -->
    <v-grid :source="rows" :columns="columns" />
</template>

<script>
import VGrid from '@revolist/vue-datagrid' // Import the VGrid component

export default {
    name: 'App',
    data() {
        return {
            // Define the columns for the grid
            columns: [
                { prop: 'name', name: 'First' }, // Simple column definition
            ],
            // Define the data source for the grid
            rows: [{ name: '1', details: 'Item 1' }],
        }
    },
    components: {
        VGrid, // Register the VGrid component
    },
}
</script>
```

<!--@include: ../../demo/vue/vue2-datagrid.md-->
