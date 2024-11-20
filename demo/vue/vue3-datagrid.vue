<template>
    <RevoGrid
        hide-attribution
        :columns="columns"
        :source="rows"
        :theme="isDark ? 'darkCompact' : 'compact'"
    />
</template>

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()

import { ref } from 'vue'
import RevoGrid from '@revolist/vue3-datagrid'
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
