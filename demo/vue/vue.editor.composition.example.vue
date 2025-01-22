// App.vue
<template>
    <RevoGrid
        hide-attribution
        :editors="gridEditors"
        :source="source"
        :columns="columns"
        @cell="testAction"
        style="height: 400px"
        :theme="isDark ? 'darkCompact' : 'compact'"
    />
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
const { isDark } = useData()
/**
 * This is an example of a Vue3 component using RevoGrid
 */
import { provide, readonly, ref } from 'vue'
/**
 * Import RevoGrid, Renderer and Editor for Vue
 */
import RevoGrid, { VGridVueEditor, type Editors } from '@revolist/vue3-datagrid'
import Editor from './vue.editor.composition.example-editor.vue'

const count = ref(0)
provide('read-only-count', readonly(count))

const MY_EDITOR = 'custom-editor'
// Vue column editor register
const gridEditors: Editors = { [MY_EDITOR]: VGridVueEditor(Editor) }
// Define columns
const columns = [
    {
        prop: 'name',
        name: 'First',
        // editor type
        editor: MY_EDITOR,
    },
]
// Define source
const source = [
    {
        name: '1',
        details: 'Item 1',
    },
]

// For testing events
function testAction(e: CustomEvent) {
    console.log('Editor action', e)
}
</script>
