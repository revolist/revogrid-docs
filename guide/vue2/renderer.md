---
title: Vue 2 Native Cell Render Support in RevoGrid
description: Explore native cell rendering support in RevoGrid for Vue 2, enabling seamless integration of custom Vue components inside grid cells.
head:
  - - meta
    - name: keywords
      content: RevoGrid, Vue 2, native cell rendering, custom cell rendering, Vue components in grid, data grid rendering, Vue 2 grid integration, RevoGrid Vue 2 cells, grid component render, Vue grid custom cells
---

<!--@include: ../parts/renderer.header.md-->

Create component which you would like to be presented as cell.
You can use `props` to access row model object, column property or other props described in `ColumnDataSchemaModel`.
<br>Check [interfaces](https://github.com/revolist/revogrid/blob/master/src/interfaces.d.ts) for mode information about types.


## App
```vue
// App.vue
// App.vue

<template>
  <!-- Use the VGrid component and bind the data source and columns -->
  <v-grid :source="rows" :columns="columns" />
</template>

<script>
import VGrid, { VGridVueTemplate } from "@revolist/vue-datagrid"; // Import the VGrid component
import Cell from "./Cell.vue"; // Custom cell template

export default {
  name: "App",
  data() {
    return {
      // Define the columns for the grid
      columns: [
        { prop: "name", name: "First" }, // Simple column definition
        { prop: "details", cellTemplate: VGridVueTemplate(Cell) }, // Another column definition
      ],
      // Define the data source for the grid
      rows: [{ name: "1", details: "Item 1" }],
    };
  },
  components: {
    VGrid, // Register the VGrid component
  },
};
</script>

```

## Cell template
```vue
// Cell.vue
<template><span>Custom cell</span></template>
<script>
import Vue, { PropType } from "vue";
export default {
  props: [
    "prop",
    "model",
    "column",
    "rowIndex",
    "colIndex",
    "colType",
    "type",
    "data",
  ],
};
</script>

```



<!--@include: ../../demo/vue/vue2.cell.md-->