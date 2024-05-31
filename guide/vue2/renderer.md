<!--@include: ../parts/renderer.header.md-->

Create component which you would like to be presented as cell.
You can use `props` to access row model object, column property or other props described in `ColumnDataSchemaModel`.
<br>Check [interfaces](https://github.com/revolist/Revogrid/blob/master/src/interfaces.d.ts) for mode information about types.

```vue
// App.vue

<template>
  <!-- Use the VGrid component and bind the data source and columns -->
  <v-grid :source="rows" :columns="columns" />
</template>

<script>
import Grid, { VGridVueTemplate } from '@revolist/vue-datagrid'; // Import the VGrid component
import Cell from './Cell.vue'; // Custom cell template

export default {
  name: 'App',
  data() {
    return {
      // Define the columns for the grid
      columns: [
        { prop: 'name', name: 'First' }, // Simple column definition
        { prop: 'details', cellTemplate: VGridVueTemplate(Cell) }, // Another column definition
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
```vue
// Cell.vue
<template>Custom cell</template>
<script>
import Vue, { PropType } from 'vue';
export default {
  props: ['prop', 'model', 'column', 'rowIndex', 'colIndex', 'colType', 'type', 'data'],
};
</script>
```



Check [Sandbox](https://codesandbox.io/s/Revogrid-vuecomponent-9yh0o?file=/src/App.vue) for real live sample.
<ClientOnly>
  <div class="tile">
    <iframe src="https://codesandbox.io/embed/Revogrid-vuecomponent-9yh0o?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
      title="Revogrid-VueComponent"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
  </div>
</ClientOnly>
