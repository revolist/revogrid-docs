# Getting Started


Revogrid provide special wrapper based on [stenciljs vue adapter](https://www.npmjs.com/package/@revolist/vue-datagrid). Just import it to your project and it can be used as part of vue system.

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
npm i @revolist/vue-datagrid
```
:::

```vue
// App.vue

<template>
  <!-- Use the VGrid component and bind the data source and columns -->
  <v-grid :source="rows" :columns="columns" />
</template>

<script>
import Grid from '@revolist/vue-datagrid'; // Import the VGrid component

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
    };
  },
  components: {
    VGrid, // Register the VGrid component
  },
};
</script>
```

Check [Sandbox](https://codesandbox.io/s/data-vue-test-3wkzi?file=/src/App.vue) for real live sample.
<ClientOnly>
  <div class="tile">
    <iframe src="https://codesandbox.io/embed/data-vue-test-3wkzi?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="data-vue-test"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
  </div>
</ClientOnly>
