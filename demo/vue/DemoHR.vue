<template>
    <ClientOnly>
        <div class="panel">
            Data source:
            <ElSelectV2
                class="source-select"
                v-model:model-value="currentSourceSize"
                :options="options"
                :disabled="selectLoading"
                :loading="selectLoading"
                placeholder="Select"
                style="width: 260px"
            />
            <span v-loading="selectLoading"></span>
        </div>

        <br />

        <div class="demo-page-wrapper">
            <div class="demo-container">
                <VGrid
                    v-loading="selectLoading"
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
            </div>
        </div>

        <br />
        <div class="performance-metrics VPCard">
            <strong class="VPCard__title">Performance Metrics</strong>
            <div class="VPCard__body">
                    <el-tooltip
                        raw-content
                        :content="`Time taken to render the grid and update its content.
                    <br/> Helps to understand how quickly the grid is displayed after a change or initial load.`"
                        placement="right-start"
                    >
                        <span
                            >Render Time:
                            <code>{{
                                renderTime
                                    ? `${renderTime.toFixed(2)} ms`
                                    : 'N/A'
                            }}</code></span
                        >
                    </el-tooltip>
                    <el-tooltip
                        raw-content
                        :content="`Frames per second while scrolling the grid. Keep scrolling to see the FPS.
                <br/> The most common refresh rate for monitors is 60Hz, meaning the screen refreshes 60 times per second, limiting the observable FPS to 60.`"
                        placement="right-start"
                    >
                        <span
                            >Scroll FPS: <code>{{ scrollFPS }}</code></span
                        >
                    </el-tooltip>
                    <el-tooltip
                        content="Amount of memory currently being used by this site."
                        placement="right-start"
                    >
                        <span>
                            Memory:
                            <span v-if="memoryUsage">
                                <code
                                    >Used:
                                    {{
                                        (
                                            memoryUsage.usedJSHeapSize /
                                            1024 /
                                            1024
                                        ).toFixed(2)
                                    }}
                                    MB</code
                                > <code
                                    >Total:
                                    {{
                                        (
                                            memoryUsage.totalJSHeapSize /
                                            1024 /
                                            1024
                                        ).toFixed(2)
                                    }}
                                    MB</code
                                >
                            </span>
                            <span v-else><code>N/A</code></span>
                        </span>
                    </el-tooltip>
            </div>
        </div>
    </ClientOnly>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import VGrid, {
    BasePlugin,
    type ColumnGrouping,
    type ColumnRegular,
    type PluginProviders,
} from '@revolist/vue3-datagrid'

import { ElSelectV2 } from 'element-plus'
import 'element-plus/es/components/select-v2/style/css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { getHRData } from './demoHR.api'
import type { OptionType } from 'element-plus/es/components/select-v2/src/select.types.mjs'

import { usePerformance } from './usePerformance'

const {
    renderTime,
    scrollFPS,
    memoryUsage,
    measureRenderTime,
    measureScrollFPS,
    startMemoryMonitor,
} = usePerformance()

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

const selectLoading = ref(false)

let size = ref(0)
const currentSourceSize = computed({
    get() {
        return size.value
    },
    set(value) {
        selectLoading.value = true
        size.value = value
        getHRData(value).then(
            async (data) => {
                gridData.value = data
                selectLoading.value = false
            },
            () => {
                selectLoading.value = false
            }
        )
    },
})

const options: OptionType[] = [
    { value: 0, label: '100 rows, 100 columns 🔋️️️' },
    { value: 1, label: '1,000 rows, 100 columns ⚡️' },
    { value: 2, label: '10,000 rows, 100 columns 🏎️' },
    { value: 3, label: '100,000 rows, 100 columns 🚀' },
    { value: 4, label: '200,000 rows, 100 columns 💥' },
]

const gridColumnTypes = ref<{ [name: string]: any }>({})
const gridColumns = ref<(ColumnGrouping | ColumnRegular)[]>([])
const gridData = ref<any>([])
const colsNumber = 100
const plugins = [
    class Plugin extends BasePlugin {
        constructor(r: HTMLRevoGridElement, p: PluginProviders) {
            super(r, p)
            this.addEventListener('rowdragstart', (e) => {
                e.detail.text = e.detail.model['name']
            })
        }
    },
]

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
    gridData.value = []

    // @ts-ignore
    const { people } = await import('@/json/people.json')
    const dropdownSource = Object.keys(
        people.reduce((r: Record<string, string>, p: Record<string, any>) => {
            r[p.company] = p.company
            return r
        }, {})
    )
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
                    sortable: false,
                    readonly: true,
                    cellProperties: () => ({
                        class: {
                            'drag-icon': true,
                        },
                    }),
                },
                {
                    name: '🎰 Name',
                    prop: 'name',
                    pin: 'colPinStart',
                    sortable: true,
                    size: 200,
                    cellTemplate: (h, props) =>
                        h('span', undefined, [
                            h(
                                'span',
                                {
                                    class: {
                                        avatar: true,
                                    },
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
                                    circle: true,
                                },
                                style: {
                                    borderColor: getColorByAge(props.value),
                                },
                            }),
                            props.value,
                        ]
                    },
                },
                {
                    sortable: true,
                    name: 'Company',
                    prop: 'company',
                    size: 200,
                    columnType: 'select',
                    source: dropdownSource,
                },
                {
                    name: 'Eyes',
                    prop: 'eyeColor',
                    size: 200,
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
                    source: [
                        'blue',
                        'green',
                        'brown',
                        'dimgrey',
                        'dodgerblue',
                        'deeppink',
                        'maroon',
                    ],
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
    setData(currentSourceSize.value)

    measureRenderTime('revo-grid')
    measureScrollFPS('revo-grid')
    startMemoryMonitor()
})

const setData = async (mode: number) => {
    selectLoading.value = true
    gridData.value = await getHRData(mode)
    selectLoading.value = false
}
</script>

<style lang="scss" scoped>
.panel {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 auto;
}

.VPCard__body {
    align-items: center;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
}

.performance-metrics {
    max-width: 800px;
}

.VPCard {
    border: 1px solid var(--vp-c-gutter);
    border-radius: 10px;
    overflow: hidden;
    padding: 0.5rem 1.5rem;

    .VPCard__title {
      display: inline-block;
      padding-bottom: 10px;
    }
}

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
