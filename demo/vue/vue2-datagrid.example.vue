// App.vue

<template>
    <!-- Use the VGrid component and bind the data source and columns -->
    <v-grid :source="rows" :columns="columns" />
</template>

<script>
import VGrid from '@revolist/vue-datagrid' // Import the VGrid component

export default {
    name: 'App',
    data() {
        return {
            // Define the columns for the grid
            columns: [
                { prop: 'name', name: 'First' }, // Simple column definition
            ],
            // Define the data source for the grid
            rows: [{ name: '1', details: 'Item 1' }],
        }
    },
    components: {
        VGrid, // Register the VGrid component
    },
}
</script>