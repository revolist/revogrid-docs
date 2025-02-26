<template>
    <RevoGrid :columns="columns" :source="rows" />
</template>

<script setup>
import { ref } from 'vue'
import RevoGrid from '@revolist/vue3-datagrid'
const columns = ref([{ prop: 'name' }])
const rows = ref([{ name: '1' }, { name: '2' }, { name: '3' }])
</script>
