<template>
    <VGrid
        :columns="columns"
        :source="rows"
        readonly
        :can-focus="false"
        hide-attribution
        theme="compact"
    />
</template>

<script setup>
import { ref, computed } from 'vue'
import VGrid from '@revolist/vue3-datagrid'

// mock data
function generateFakeDataRows(rowsNumber) {
    const result = []
    const all = rowsNumber
    for (let j = 0; j < all; j++) {
        let row = j
        if (!result[row]) {
            result[row] = {
                id: row,
            }
        }
        result[row]['myRow'] = `I am row ${row}`
    }
    return result
}

// select all checkbox click
function selectAll(ckecked = false) {
    rows.value.forEach((r) => updateSelectedRow(r, ckecked))
    rows.value = [...rows.value]
}
// regular row checkbox click
function selectSingle(row, checked) {
    updateSelectedRow(row, checked)
    updateSelectAllCheckbox()
    selected.value = new Set(selected.value)
}

function updateSelectAllCheckbox() {
    if (!selected.value.size) {
        allSelectedStatus.value = 0
    } else if (selected.value.size === rows.length) {
        allSelectedStatus.value = 2
    } else {
        allSelectedStatus.value = 1
    }
}

// internal update method
function updateSelectedRow(row, checked) {
    row.selected = checked
    if (checked) {
        selected.value.add(row.id)
    } else {
        selected.value.delete(row.id)
    }
}

const selected = ref(new Set())
const allSelectedStatus = ref(0) // 0 - unchecked, 1 - indeterminate, 2 - checked
const columns = computed(() => {
    // if select all status changed redraw columns
    const status = allSelectedStatus.value

    return [
        {
            prop: 'myRow',
            columnTemplate: (h) => {
                let inputVNode = h('input', {
                    type: 'checkbox',
                    indeterminate: status === 1,
                    checked: status > 1 || undefined,
                    onChange: (e) => selectAll(e.target.checked),
                })
                return [inputVNode, 'Select all']
            },
            cellTemplate: (h, { model, prop }) => {
                const inputVNode = h('input', {
                    type: 'checkbox',
                    checked: model.selected || undefined,
                    onChange: (e) => selectSingle(model, e.target.checked),
                })
                return h('label', undefined, inputVNode, model[prop])
            },
            size: 400,
        },
    ]
})
const rows = ref(generateFakeDataRows(10000))
</script>
