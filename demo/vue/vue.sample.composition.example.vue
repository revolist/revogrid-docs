<template>
    <VGrid theme="material" hide-attribution :columns="columns" :source="rows" />
</template>

<script setup>
import { ref } from 'vue'
import VGrid from '@revolist/vue3-datagrid'
const columns = ref([
    { prop: 'name', name: 'A' },
    { prop: 'details', name: 'B' },
])
const rows = ref([
    {
        name: '1',
        details: 'Item 1',
    },
])
</script>
