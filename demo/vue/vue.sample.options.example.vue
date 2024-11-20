<template>
    <div id="app">
        <RevoGrid
            hide-attribution
            :source="rows"
            :columns="columns"
            :theme="isDark ? 'darkCompact' : 'compact'"
        />
    </div>
</template>

<script>
import { useData } from 'vitepress'
import RevoGrid from '@revolist/vue3-datagrid'
export default {
    name: 'App',
    data() {
        return {
            columns: [
                { prop: 'name', name: 'First' },
                { prop: 'details', name: 'Second' },
            ],
            rows: [
                {
                    name: '1',
                    details: 'Item 1',
                },
            ],
            isDark: useData().isDark,
        }
    },
    components: {
        RevoGrid,
    },
}
</script>
