<template>
    <RevoGrid
        hide-attribution
        :columns="columns"
        :source="rows"
        :theme="isDark ? 'darkCompact' : 'compact'"
    />
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
const { isDark } = useData()

import { ref } from 'vue'
import RevoGrid, {
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
