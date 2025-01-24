<template>
    <div id="app">
        <RevoGrid theme="compact" :source="rows" :columns="columns" />
    </div>
</template>

<script>
import RevoGrid from '@revolist/vue3-datagrid'
export default {
    name: 'App',
    data() {
        return {
            columns: [{ prop: 'name' }, { prop: 'details' }],
            rows: [
                {
                    name: '1',
                    details: 'Item 1',
                },
            ],
        }
    },
    components: {
        RevoGrid,
    },
}
</script>
