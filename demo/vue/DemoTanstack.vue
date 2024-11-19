<template>
    <VGrid
        :source="source"
        :columns="rvColumns"
        hide-attribution
        @beforeedit="handleEdit"
    />
</template>

<script setup lang="ts">
import { VGrid, type ColumnProp } from '@revolist/vue3-datagrid'

import {
    useVueTable,
    getCoreRowModel,
    type ColumnDef,
    type RowData,
} from '@tanstack/vue-table'

import { computed, ref } from 'vue'
import { tanstackToRvGridColumns } from '../tanstack/utils'
import { makeData, type Person } from '../makeData'

declare module '@tanstack/vue-table' {
    interface TableMeta<TData extends RowData> {
        updateData: (
            rowIndex: number,
            columnId: ColumnProp,
            value: unknown
        ) => void
    }
}

// Define columns according tanstack guide
const columns: ColumnDef<Person>[] = [
    {
        header: 'Name',
        columns: [
            {
                accessorKey: 'firstName',
                header: 'First Name',
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
            },
        ],
    },
]
const data = ref<Person[]>(makeData(5))

// define tanstack table
const table = useVueTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
        updateData: (rowIndex: number, columnId: ColumnProp, value: any) => {
            data.value = data.value.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...data.value[rowIndex]!,
                        [columnId]: value,
                    }
                }
                return row
            })
        },
    },
})

// get data from tanstack table
const source = computed(() => {
    const rows = table.getRowModel().flatRows
    return rows
})

const rvColumns = computed(() => {
    // transform tanstack to revogrid format
    return tanstackToRvGridColumns(table.getAllColumns())
})

function handleEdit(e: CustomEvent<HTMLRevoGridElementEventMap['beforeedit']>) {
    e.preventDefault()
    table.options.meta?.updateData(
        e.detail.model.index,
        e.detail.prop,
        e.detail.val
    )
}
</script>
