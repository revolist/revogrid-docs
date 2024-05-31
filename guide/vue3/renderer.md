<!--@include: ../parts/renderer.header.md-->



```vue
// App.vue
<template>
    <Grid
      :source="source"
      :columns="columns"
      @cell-custom-action="testCustomCellAction"
      @cell-click="testAction"
    />
</template>

<script lang="ts" setup>
/**
 * This is an example of a Vue3 component using Revogrid
 */
import { provide, readonly, ref } from 'vue';
/**
 * Import Revogrid, Renderer and Editor for Vue
 */
import Grid, { VGridVueTemplate } from '@revolist/vue3-datagrid';
import Cell from './Cell.vue';

const count = ref(0)
provide('read-only-count', readonly(count));

// Define columns
const columns = [
  {
    prop: 'name',
    name: 'First',
    // vue cell component register
    cellTemplate: VGridVueTemplate(Cell),
  },
  {
    prop: 'details',
    name: 'Second',
  },
];
// Define source
const source = [
  {
    name: '1',
    details: 'Item 1',
  },
];

// For testing events
function testCustomCellAction(e: CustomEvent) {
  console.log('Custom cell action', e);
}
function testAction(e: CustomEvent) {
  console.log('Editor action', e);
}
</script>
```


```vue
// Cell.vue
<template>
  <div ref="cell" @click="customCellClickEvent">{{ rowIndex }}</div>
</template>

<script lang="ts" setup>
import { defineProps, ref, inject } from 'vue';
import type { ColumnDataSchemaModel } from '@revolist/revogrid';

const props = defineProps<ColumnDataSchemaModel>();
const cell = ref<HTMLElement>();

const message = inject('sample');
function customCellClickEvent() {
  console.log('Custom cell click > Injected message:', message);
  const event = new CustomEvent('cell-custom-action', {
      bubbles: true,
      detail: { row: props.model },
  });
  cell.value?.dispatchEvent(event);
}
</script>
```


Check [Sandbox](https://codesandbox.io/s/Revogrid-react-component-hrgrx?file=/src/App.js:0-247) for real live sample.
<ClientOnly>
  <div class="tile">
    <iframe src="https://codesandbox.io/embed/Revogrid-react-component-hrgrx?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
      title="Revogrid-React-Component"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
  </div>
</ClientOnly>