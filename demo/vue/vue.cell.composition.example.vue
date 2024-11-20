<template>
    <VGrid :columns="columns" :source="rows" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VGrid, {
    VGridVueTemplate,
    type ColumnRegular,
} from '@revolist/vue3-datagrid'
import Cell from './vue.cell.composition.example-cell.vue'
const columns = ref<ColumnRegular[]>([
    {
        prop: 'name',
        name: 'A',
        // vue cell component register
        cellTemplate: VGridVueTemplate(Cell),
    },
    { prop: 'details', name: 'B' },
])
const rows = ref<{ name: string; details: string }[]>([
    {
        name: '1',
        details: 'Item 1',
    },
])
</script>
