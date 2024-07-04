<!--@include: ../parts/editor.header.md-->


## App
```vue
// App.vue

<template>
    <!-- Use the VGrid component and bind the data source and columns -->
    <v-grid :source="rows" :columns="columns" />
</template>

<script>
import VGrid, { VGridVueEditor } from '@revolist/vue-datagrid' // Import the VGrid component
import Editor from './Editor.vue' // Custom editor template
const MY_EDITOR = 'custom-editor'

export default {
    name: 'App',
    data() {
        return {
            // Define the columns for the grid
            columns: [
                {
                  prop: 'name',
                  name: 'First',
                  editor: MY_EDITOR, // Use the custom editor
                },
            ],
            // Define the data source for the grid
            rows: [{ name: '1', details: 'Item 1' }],
            gridEditors: { [MY_EDITOR]: Editor },
        }
    },
    components: {
        VGrid, // Register the VGrid component
    },
}
</script>
```

## Editor

```vue
// Editor.vue
<template>
    <button @click="onBtn">Finish edit</button>
</template>
<script lang="ts">
export default {
    props: ['rowIndex', 'model', 'save', 'close'],
    methods: {
        onBtn(e: MouseEvent) {
            const event = new CustomEvent('cell', {
                bubbles: true,
                detail: { row: this.model },
            })
            this.$el.dispatchEvent(event)
            e.stopPropagation()
            if (typeof this.close === 'function') {
                (this.close as () => void)()
            }
        },
    },
}
</script>
```


<!--@include: ../../demo/vue/vue2.editor.md-->