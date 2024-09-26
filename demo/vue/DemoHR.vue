<template>
    <ClientOnly>
        <VGrid
            class="grid"
            :theme="isDark ? 'darkMaterial' : 'compact'"
            :source="gridData"
            :columns="gridColumns"
            :column-types="gridColumnTypes"
            :filter="true"
            :plugins="plugins"
            range
            resize
            row-headers
            hide-attribution
            :row-size="36"
        />
    </ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import VGrid, {
    BasePlugin,
    type ColumnGrouping,
    type ColumnRegular,
    type PluginProviders,
} from '@revolist/vue3-datagrid'
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

const gridColumnTypes = ref<{ [name: string]: any }>({})
const gridColumns = ref<(ColumnGrouping | ColumnRegular)[]>([])
const gridData = ref<any>([])
const colsNumber = 100
const plugins = [class Plugin extends BasePlugin {
    constructor(r: HTMLRevoGridElement, p: PluginProviders) {
        super(r, p)
        this.addEventListener('rowdragstart', (e) => {
            e.detail.text = e.detail.model['name']
        })
    }
}]

function getColorByAge(age: number): string {
  if (age <= 12) {
    return 'lightblue'
  } else if (age >= 13 && age <= 19) {
    return 'green'
  } else if (age >= 20 && age <= 35) {
    return 'orange'
  } else if (age >= 36 && age <= 60) {
    return 'purple'
  } else {
    return 'grey'
  }
}

onMounted(async () => {
    gridColumnTypes.value = {
        date: new (await import('@revolist/revogrid-column-date')).default(),
        number: new (
            await import('@revolist/revogrid-column-numeral')
        ).default(),
        select: new (
            await import('@revolist/revogrid-column-select')
        ).default(),
    }
    gridData.value = people.map((row, i) => {
        const newRow: Record<string, any> = {
            ...row,
            highlighted: row.eyeColor,
            date: '2020-08-24',
            avatar: `https://randomuser.me/api/portraits/${Math.floor(Math.random() * 2) ? 'men' : 'women'}/${Math.floor(Math.random() * 20) + 1}.jpg`
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
                    prop: 'sort',
                    size: 30,
                    pin: 'colPinStart',
                    filter: false,
                    rowDrag: true,
                    readonly: true,
                    cellProperties: () => ({
                        class: {
                            'drag-icon': true,
                        }
                    })
                },
                {
                    name: '🎰 Name',
                    prop: 'name',
                    sortable: true,
                    order: 'asc',
                    pin: 'colPinStart',
                    size: 200,
                    cellTemplate: (h, props) =>
                        h('span', undefined, [
                            h(
                                'span',
                                {
                                    class: {
                                        'avatar': true,
                                    }
                                },
                                h('img', {
                                    src: props.model.avatar,
                                })
                            ),
                            ,
                            props.value,
                        ]),
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
                    cellTemplate: (h, props) => {
                        return [
                            h('i', {
                                class: {
                                    'circle': true,
                                },
                                style: {
                                    borderColor: getColorByAge(props.value),
                                },
                            }),
                            props.value,
                        ]
                    }
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
    gridColumns.value = columns
})
</script>

<style lang="scss" scoped>
:deep() {
    .avatar {
        $s: 24px;
        display: inline-block;
        overflow: hidden;
        border-radius: 50%;
        width: $s;
        height: $s;
        margin-right: 5px;
        vertical-align: middle;
    }
    .bubble {
        display: inline-block;
        line-height: 24px;
        border-radius: 12px;
        padding: 0 10px;
        color: white;
    }
    
    .circle {
        $s: 12px;
        display: inline-block;
        vertical-align: middle;
        width: $s;
        height: $s;
        border-radius: 50%;
        border: 3px solid;
        margin-right: 5px;
    }

    revogr-data .rgCell.disabled.drag-icon {
        text-align: center;
        background-color: transparent;
        padding: 0;
    }
}
.grid {
    min-height: initial;
    height: calc(100vh - 250px);
    max-height: 800px;
}
</style>
