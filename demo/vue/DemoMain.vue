<template>
<ClientOnly>
    <VGrid
        class="grid"
        :theme="isDark ? 'darkMaterial' : 'compact'"
        :source="gridData"
        :columns="gridColumns"
        :column-types="gridColumnTypes"
        :filter="true"
        range
        resize
        row-headers
        :row-size="36"
    />
</ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import VGrid, { type ColumnGrouping, type ColumnRegular } from '@revolist/vue3-datagrid'
import { people } from './people.json'


const { isDark } = useData()
function generateHeader(index: number) {
    const asciiFirstLetter = 65
    const lettersCount = 26
    let div = index + 1
    let label = ''
    let pos
    while (div > 0) {
        pos = (div - 1) % lettersCount
        label = String.fromCharCode(asciiFirstLetter + pos) + label
        div = parseInt(((div - pos) / lettersCount).toString(), 10)
    }
    return label
}

function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min
}

const gridColumnTypes = ref<{ [name: string]: any }>({}); 
const gridColumns = ref<(ColumnGrouping | ColumnRegular)[]>([])
const gridData = ref<any>([])
const colsNumber = 100

onMounted(async() => {
    gridColumnTypes.value = {
        date: new (await import('@revolist/revogrid-column-date')).default(),
        number: new (await import('@revolist/revogrid-column-numeral')).default(),
        select: new (await import('@revolist/revogrid-column-select')).default(),
    };
    gridData.value = people.map((row) => {
        const newRow: Record<string, any> = {
            ...row,
            highlighted: row.eyeColor,
            date: '2020-08-24',
        }
        for (let j = 0; j < colsNumber; j++) {
            newRow[j] = getRandomArbitrary(0, 10000)
        }
        return newRow
    })
    const columns: (ColumnGrouping | ColumnRegular)[] = [
        {
            name: 'Name group',
            children: [
                {
                    name: '🎰 Name',
                    prop: 'name',
                    rowDrag: true,
                    sortable: true,
                    order: 'asc',
                    pin: 'colPinStart',
                    size: 200,
                },
            ] as ColumnRegular[],
        },
        {
            name: 'Personal',
            children: [
                {
                    sortable: true,
                    name: 'Age',
                    prop: 'age',
                },
                {
                    sortable: true,
                    name: 'Company',
                    prop: 'company',
                    size: 200,
                    columnType: 'select',
                    source: Object.keys(
                        people.reduce((r: Record<string, string>, p) => {
                            r[p.company] = p.company
                            return r
                        }, {})
                    ),
                },
                {
                    name: 'Eyes',
                    prop: 'eyeColor',
                    sortable: true,
                    cellTemplate: (createElement, props) =>
                        createElement(
                            'span',
                            {
                                class: 'bubble',
                                style: {
                                    backgroundColor: props.model[props.prop],
                                },
                            },
                            props.model[props.prop]
                        ),

                    columnType: 'select',
                    source: ['green', 'blue', 'brown', 'red', 'yellow'],
                },
            ] as ColumnRegular[],
        },
        {
            name: 'Birth date',
            prop: 'date',
            columnType: 'date',
            size: 150,
        },
    ]

    for (let j = 0; j < colsNumber; j++) {
        columns.push({
            name: generateHeader(j),
            prop: j,
            columnType: 'number',
        })
    }
    gridColumns.value = columns;
})
</script>

<style lang="scss" scoped>
:deep() {
    .bubble {
        display: inline-block;
        line-height: 24px;
        border-radius: 12px;
        padding: 0 10px;
        color: white;
    }
}
.grid {
    height: 500px;
}
</style>
