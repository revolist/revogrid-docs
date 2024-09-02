<template>
    <ClientOnly>
        <VGrid
            tabindex="0"
            class="grid"
            ref="grid"
            :theme="isDark ? 'darkMaterial' : 'compact'"
            :source="gridData"
            :columns="gridColumns"
            :column-types="gridColumnTypes"
            :plugins="plugins"
            :pinnedBottomSource="pinnedBottomSource"
            hide-attribution
            :additionalData="{
                stretch: 3,
                cellMerge: [
                    {
                        row: 0,
                        column: 0,
                        rowSpan: 1,
                        colSpan: 2,
                        rowType: 'rowPinEnd',
                        colType: 'colPinStart',
                    },
                ],
                eventManager: {
                    applyEventsToSource: true,
                },
                rowSelect: {
                    prop: 'selection',
                },
                masterRow: {
                    prop: 'master',
                    template: masterRowTemplate,
                }
            }"
            range
            resize
            :row-headers="rowHeaders"
        />
    </ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import {
    VGrid,
    type ColumnGrouping,
    type ColumnRegular,
    type HyperFunc,
    type VNode,
    FilterButton,
    dispatchByEvent,
} from '@revolist/vue3-datagrid'

// @ts-ignore
import { data } from './demoNobel.data.ts'

import { CellFlashPlugin } from '../../pro-pages/src/plugins/cell-flash'
import { cellFlashArrowTemplate } from '../../pro-pages/src/plugins/cell-flash/cell-flash-arrow.template.ts'
import { CellMergePlugin } from '../../pro-pages/src/plugins/cell-merge'
import { EventManagerPlugin } from '../../pro-pages/src/plugins/event-manager'
import { ColumnSelectionPlugin } from '../../pro-pages/src/plugins/column-selection'
import { ExportExcelPlugin } from '../../pro-pages/src/plugins/export-excel'
import { FormulaPlugin } from '../../pro-pages/src/plugins/formula'
import { RowHeaderPlugin } from '../../pro-pages/src/plugins/row-header'
import { RowOrderPlugin } from '../../pro-pages/src/plugins/row-order'
import { RowOddPlugin } from '../../pro-pages/src/plugins/row-odd'
import { AdvanceFilterPlugin } from '../../pro-pages/src/plugins/filter'
import {
    RowSelectPlugin,
    RowSelectColumnType,
} from '../../pro-pages/src/plugins/row-select'
import { RowKeyboardNextLineFocusPlugin } from '../../pro-pages/src/plugins/row-next-focus'
import { MasterRowPlugin } from '../../pro-pages/src/plugins/row-master'
import { OverlayPlugin } from '../../pro-pages/src/plugins/overlay'

const { isDark } = useData()

const gridColumns = ref<(ColumnGrouping | ColumnRegular)[]>([])
const gridColumnTypes = ref<{ [name: string]: any }>({})
const gridData = ref<any>([])
const pinnedBottomSource = ref<any>([
    {
        share: '=SUM(D1:D670)',
        amount: '=SUM(E1:E670)',
        category: '⚗️ Formula SUM()',
    },
])

const plugins = [
    AdvanceFilterPlugin,
    RowSelectPlugin,
    CellFlashPlugin,
    CellMergePlugin,
    EventManagerPlugin,
    ColumnSelectionPlugin,
    ExportExcelPlugin,
    FormulaPlugin,
    RowHeaderPlugin,
    RowOrderPlugin,
    RowOddPlugin,
    RowKeyboardNextLineFocusPlugin,
    MasterRowPlugin,
    OverlayPlugin,
]

const rowHeaders = ref<Partial<ColumnRegular> | boolean>({
    cellProperties: (params) => ({
        class: `group-${params.model.group}`,
    }),
})

const masterRowTemplate = (h: HyperFunc<VNode>, props: any, additionalData?: any) => {
    return h('div', {
        class: { 'master-row': true, },
    }, 'Master Row');
};

onMounted(async () => {
    gridColumnTypes.value = {
        date: new (await import('@revolist/revogrid-column-date')).default(),
        number: new (
            await import('@revolist/revogrid-column-numeral')
        ).default(),
        dropdown: new (
            await import('@revolist/revogrid-column-select')
        ).default(),
        select: new RowSelectColumnType(),
    }
    gridData.value = [...data.prizes]
    const columns: (ColumnGrouping | ColumnRegular)[] = [
        {
            name: `Total Prizes Won: ${data.prizes.length}`,
            children: [
                {
                    prop: 'selection',
                    size: 50,
                    filter: false,
                    columnType: 'select',
                    pin: 'colPinStart',
                    readonly: (v) => v.type === 'rowPinEnd',
                },
                {
                    pin: 'colPinStart',
                    prop: 'master',
                    size: 30,
                    readonly: true,
                    cellTemplate: (h, data) => {
                        return h('button', {
                            onClick: (e) => {
                                dispatchByEvent(e, 'row-master', data)
                            },
                        }, '▶️')
                    }
                },
                {
                    name: 'Year',
                    prop: 'year',
                    columnType: 'date',
                    order: 'desc',
                    sortable: true,
                    size: 150,
                    readonly: (v) => v.type === 'rowPinEnd',
                    pin: 'colPinStart',
                    columnTemplate: (h, data) => {
                        return [data.name, FilterButton({ column: data })]
                    },
                },
                {
                    name: 'Category',
                    prop: 'category',
                    size: 150,
                    readonly: (v) => v.type === 'rowPinEnd',
                    cellTemplate: (h, { value }) => {
                        if (!value) return
                        return `${data.categories[value]?.label ?? value}`
                    },
                    columnType: 'dropdown',
                    labelKey: 'label',
                    valueKey: 'value',
                    source: data.categories,
                    pin: 'colPinStart',
                },
            ],
        },
        {
            name: '🌡️ Prize Share',
            prop: 'share',
            size: 150,
            flash: () => {
                // Handle cell flash event, you can define your flash logic here per cell if needed
                return true
            },
            cellProperties: (params) => {
                return {
                    style: {
                        color: 'white',
                        backgroundColor:
                            params.value < 30
                                ? 'rgb(87, 155, 252)'
                                : params.value < 70
                                  ? 'rgb(85, 89, 223)'
                                  : 'rgb(64, 22, 148)',
                    },
                }
            },
            cellTemplate: cellFlashArrowTemplate,
        },
        {
            name: '📟 Prize Amount',
            prop: 'amount',
            size: 150,
            flash: () => {
                // Handle cell flash event, you can define your flash logic here per cell if needed
                return true
            },
            cellTemplate: cellFlashArrowTemplate,
        },
        {
            name: 'Description',
            prop: 'description',
            size: 350,
        },
        {
            name: 'Motivation',
            prop: 'motivation',
        },
    ]

    gridColumns.value = columns
})
</script>

<style lang="scss" scoped>
.grid {
    min-height: initial;
    height: calc(100vh - 150px);
    max-height: calc(100vh - 150px);
    font-family: 'Figtree', sans-serif;
    font-weight: 400;
}

:deep() {
    .rgRow[odd]:not([selected]) {
        background-color: var(--vp-c-bg-alt);
    }
    .rgRow[selected] {
        background-color: var(--vp-c-brand-soft);
    }
    .rgRow.focused-rgRow {
        background-color: var(--vp-c-important-soft) !important;
    }
    .rgCell.disabled {
        background-color: transparent !important;
    }
    .rgCell.group- {
        &1 {
            box-shadow: 6px 0 0 rgb(87, 155, 252) inset;
        }
        &2 {
            box-shadow: 6px 0 0 rgb(0, 200, 117) inset;
        }
        &0 {
            box-shadow: 6px 0 0 rgb(162, 93, 220) inset;
        }
    }
    i {
        font-style: normal;
    }
}
</style>
