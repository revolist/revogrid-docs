<template>
    <div ref="cell" @click="customCellClickEvent">Custom Cell: {{ value }}</div>
</template>

<script lang="ts" setup>
import { defineProps, ref, inject } from 'vue'
import { type ColumnDataSchemaModel } from '@revolist/vue3-datagrid'

// You can use defineProps<ColumnDataSchemaModel> directly in your project
interface MyType extends ColumnDataSchemaModel {
    rowIndex: number
    value: any
}
const props = defineProps<MyType>()
const cell = ref<HTMLElement>()

const message = inject('sample')
function customCellClickEvent() {
    console.log('Custom cell click > Injected message:', message)
    const event = new CustomEvent('cell-custom-action', {
        bubbles: true,
        detail: { row: props.model },
    })
    cell.value?.dispatchEvent(event)
}
</script>
