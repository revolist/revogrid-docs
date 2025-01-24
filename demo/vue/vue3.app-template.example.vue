// vue3.app-template.example.vue
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
 * This is an example of a Vue3 component using RevoGrid
 */
import { provide, readonly, ref } from 'vue';
/**
 * Import RevoGrid, Renderer and Editor for Vue
 */
import Grid, { VGridVueTemplate } from '@revolist/vue3-datagrid';
import Cell from './vue3.cell-template.example.vue';

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