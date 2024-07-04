# Getting Started

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

<!--@include: ../../demo/vue/vue2.sample.md-->
