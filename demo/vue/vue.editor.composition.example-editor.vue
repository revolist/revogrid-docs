// Editor.vue
<template>
    <button @click="onBtn">Finish edit</button>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { type EditorType, dispatchByEvent } from '@revolist/vue3-datagrid'
interface MyType extends EditorType {
    close(): void
}
const props = defineProps<MyType>()

const onBtn = (e: MouseEvent) => {
    // create and dispatch event
    dispatchByEvent(e, 'cell', { row: props.model })

    e.stopPropagation()
    if (typeof props.close === 'function') {
        ;(props.close as () => void)()
    }
}
</script>
