<!--@include: ../parts/editor.header.md-->

```vue
// App.vue

<template>
    <!-- Use the VGrid component and bind the data source and columns -->
    <v-grid :source="rows" :columns="columns" />
</template>

<script>
import Grid, { VGridVueEditor } from '@revolist/vue-datagrid' // Import the VGrid component
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

```vue
// Editor.vue
<template>
    <button @click="onBtn">Finish edit</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
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

Check [Sandbox](https://codesandbox.io/s/Revogrid-vueeditor-bxpq0?file=/src/App.vue) for real live sample.
<ClientOnly>

  <div class="tile">
    <iframe src="https://codesandbox.io/embed/Revogrid-vueeditor-bxpq0?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
      title="Revogrid-VueEditor"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </div>
</ClientOnly>
