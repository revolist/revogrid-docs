<template>
    <ClientOnly>
        <VGrid
            resize
            row-headers
            :theme="isDark ? 'darkMaterial' : 'compact'"
            :source="gridData"
            :columns="gridColumns"
            :column-types="gridColumnTypes"
            :filter="true"
            :range="true"
            row-size="36"
        />
    </ClientOnly>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import VGrid, { type ColumnDataSchema } from '@revolist/vue3-datagrid'
// import ColumnDate from '@revolist/revogrid-column-date'
// import ColumnNumeral from '@revolist/revogrid-column-numeral'
// import ColumnSelect from '@revolist/revogrid-column-select'
import { useData } from 'vitepress'
import { people } from './people.json'

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

const { isDark } = useData()
const gridColumnTypes: { [name: string]: any } = {
    // date: new ColumnDate(),
    // number: new ColumnNumeral(),
    // select: new ColumnSelect(),
}
const gridColumns: ColumnDataSchema[] = [
    {
        name: 'Autosize',
        children: [
            {
                name: '🎰 Name',
                prop: 'name',
                rowDrag: true,
                sortable: true,
                order: 'asc',
                pin: 'colPinStart',
                size: 200,
                autoSize: true,

                cellTemplate(h, { model, prop }) {
                    return h('strong', null, model[prop])
                },
            },
        ],
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
                    people.reduce((r, p) => {
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
        ],
    },
    {
        name: 'Birth date',
        prop: 'date',
        columnType: 'date',
        size: 150,
    },
]

const colsNumber = 100
for (let j = 0; j < colsNumber; j++) {
    gridColumns.push({
        name: generateHeader(j),
        prop: j,
        columnType: 'number',
    })
}

const gridData = ref(
    people.map((row) => {
        const newRow = { ...row, highlighted: row.eyeColor, date: '2020-08-24' }
        for (let j = 0; j < colsNumber; j++) {
            newRow[j] = getRandomArbitrary(0, 10000)
        }
        return newRow
    })
)
</script>

<style lang="scss" scoped>
revo-grid {
    min-height: 500px;
}
:deep() {
    .bubble {
        display: inline-block;
        line-height: 24px;
        border-radius: 12px;
        padding: 0 10px;
        color: white;
    }
}
</style>
