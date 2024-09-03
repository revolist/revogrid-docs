<template>
    <ClientOnly>
        <VGrid
            tabindex="0"
            class="grid"
            ref="grid"
            :theme="isDark ? 'darkMaterial' : 'material'"
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
                    rowHeight: 200,
                    template: masterRowTemplate,
                },
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
    dispatchByEvent,
    type BeforeRowRenderEvent,
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
        share: '=SUM(G1:G5)',
        amount: '=SUM(E1:E5)',
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

const masterRowTemplate = (
    h: HyperFunc<VNode>,
    props: BeforeRowRenderEvent
) => {
    return h(
        'div',
        {
            class: { 'master-row': true },
        },
        [
            h('revo-grid', {
                key: 1,
                theme: isDark.value ? 'darkMaterial' : 'compact',
                rowHeight: 28,
                hideAttribution: true,
                columns: [
                    {
                        prop: 'id',
                        name: 'ID',
                    },
                    {
                        prop: 'firstname',
                        name: 'First Name',
                        size: 180,
                    },
                    {
                        prop: 'surname',
                        name: 'Last Name',
                        size: 180,
                    },
                    {
                        prop: 'share',
                        name: 'Share',
                        size: 100,
                    },
                    {
                        prop: 'motivation',
                        name: 'Motivation',
                        size: 300,
                    },
                ],
                source: props.model?.laureates || [],
                style: {
                    minHeight: '100px',
                },
            }),
        ]
    )
}

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
    gridData.value = [...data.prizes].splice(0, 10)
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
                    readonly: true,
                    cellTemplate: (h, data) => {
                        if (data.type === 'rowPinEnd') {
                            return;
                        }
                        return gridColumnTypes.value.select.cellTemplate(h, data)
                    }
                },
                {
                    pin: 'colPinStart',
                    prop: 'master',
                    size: 30,
                    readonly: true,
                    cellTemplate: (h, data) => {
                        return h(
                            'button',
                            {
                                onClick: (e) => {
                                    dispatchByEvent(e, 'row-master', data)
                                },
                            },
                            '▶️'
                        )
                    },
                },
                {
                    name: 'Date',
                    prop: 'date',
                    columnType: 'date',
                    order: 'desc',
                    size: 150,
                    readonly: (v) => v.type === 'rowPinEnd',
                    pin: 'colPinStart',
                    filter: true,
                    cellTemplate: (h, data) => {
                        if (data.type === 'rowPinEnd') {
                            return;
                        }
                        return gridColumnTypes.value.date.cellTemplate(h, data)
                    }
                },
            ],
        },
        {
            name: 'Category',
            prop: 'category',
            size: 200,
            filter: true,
            readonly: (v) => v.type === 'rowPinEnd',
            cellTemplate: (h, { value }) => {
                if (!value) return
                return `${data.categories[value]?.label ?? value}`
            },
            columnType: 'dropdown',
            labelKey: 'label',
            valueKey: 'value',
            source: data.categories,
        },
        {
            name: '🌡️ Prize Share',
            prop: 'share',
            pin: 'colPinEnd',
            filter: true,
            size: 130,
            flash: () => {
                // Handle cell flash event, you can define your flash logic here per cell if needed
                return true
            },
            cellProperties: (params) => {
                return {
                    style: {
                        fontWeight: params.type === 'rowPinEnd' ? 'bold' : 'normal',
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
            filter: true,
            size: 150,
            cellProperties: (params) => {
              return {
                  style: {
                    fontWeight: params.type === 'rowPinEnd' ? 'bold' : 'normal',
                  }
              }  
            },
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
    ]

    gridColumns.value = columns
})
</script>

<style lang="scss" scoped>
.grid {
    min-height: initial;
    height: calc(100vh - 250px);
    max-height: calc(100vh - 250px);
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
    .revo-master-row {
        .master-row {
            background-color: var(--vp-c-bg);
            position: absolute;
            top: 10px;
            left: 20px;
            right: 20px;
            bottom: 10px;
            width: auto;
            border-radius: 10px;
            box-shadow: 0 0 0  1px rgba(black, 5%);
        }
        .header-rgRow {
            height: 34px !important;
        }
    }
}
</style>
