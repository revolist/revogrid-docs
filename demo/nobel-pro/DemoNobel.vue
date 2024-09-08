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
                    rowHeight: 150,
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
    type BeforeRowRenderEvent,
} from '@revolist/vue3-datagrid'

// @ts-ignore
import { data } from './demoNobel.data.js'

import { CellFlashPlugin } from '@revolist/revogrid-pro/src/plugins/cell-flash'
import { CellValidatePlugin } from '@revolist/revogrid-pro/src/plugins/cell-validate'
import { cellFlashArrowTemplate } from '@revolist/revogrid-pro/src/plugins/cell-flash/cell-flash-arrow.template'
import { CellMergePlugin } from '@revolist/revogrid-pro/src/plugins/cell-merge'
import { EventManagerPlugin } from '@revolist/revogrid-pro/src/plugins/event-manager'
import { ColumnSelectionPlugin } from '@revolist/revogrid-pro/src/plugins/column-selection'
import { ExportExcelPlugin } from '@revolist/revogrid-pro/src/plugins/export-excel'
import { FormulaPlugin } from '@revolist/revogrid-pro/src/plugins/formula'
import { RowHeaderPlugin } from '@revolist/revogrid-pro/src/plugins/row-header'
import { RowOrderPlugin } from '@revolist/revogrid-pro/src/plugins/row-order'
import { rowHeaders as rowHeadersTemplate } from '@revolist/revogrid-pro/src/plugins/row-header'
import { RowOddPlugin } from '@revolist/revogrid-pro/src/plugins/row-odd'
import { AdvanceFilterPlugin } from '@revolist/revogrid-pro/src/plugins/filter'
import {
    RowSelectPlugin,
    RowSelectColumnType,
} from '@revolist/revogrid-pro/src/plugins/row-select'
import { RowKeyboardNextLineFocusPlugin } from '@revolist/revogrid-pro/src/plugins/row-next-focus'
import { MasterRowPlugin, EXPAND_COLUMN } from '@revolist/revogrid-pro/src/plugins/row-master'
import { OverlayPlugin } from '@revolist/revogrid-pro/src/plugins/overlay'
import { RatingColumnType } from '@revolist/revogrid-pro/src/plugins/column-type-rate'
import { ProgressColumnType } from '@revolist/revogrid-pro/src/plugins/column-type-progress'

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
    CellValidatePlugin,
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

const draggableHeaders = rowHeadersTemplate({ showHeaderFocusBtn: false, allowDrag: true, });
const rowHeaders = ref<Partial<ColumnRegular> | boolean>({
    ...draggableHeaders,
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
        rating: new RatingColumnType(),
        progress: new ProgressColumnType(),
    }
    gridData.value = [...data.prizes] //.splice(0, 20)
    const columns: (ColumnGrouping | ColumnRegular)[] = [
        {
            name: `Total Prizes Won: ${data.prizes.length}`,
            children: [
                {
                    prop: 'selection',
                    size: 40,
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
                    ...EXPAND_COLUMN,
                    pin: 'colPinStart',
                    prop: 'master',
                },
                {
                    name: 'Date',
                    prop: 'date',
                    pin: 'colPinStart',
                    columnType: 'date',
                    sortable: true,
                    size: 130,
                    readonly: (v) => v.type === 'rowPinEnd',
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
                return [h('span', null, `${data.categories[value]?.label ?? value}`), h('span', { class: { 'arrow-down': true } }, '▼')]
            },
            columnType: 'dropdown',
            labelKey: 'label',
            valueKey: 'value',
            source: data.categories,
        },
        {
            name: '🌡️ Share',
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
            name: 'Years Until Nobel',
            prop: 'progress',
            columnType: 'progress',
            size: 150,
        },
        {
            name: 'Prize',
            prop: 'amount',
            filter: true,
            size: 100,
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
            name: 'Legacy Rating',
            prop: 'rate',
            size: 140,
            columnType: 'rating',
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
    max-height: 800px;
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
    .rowHeaders revogr-data .rgCell {
        color: inherit !important;
    }
    i {
        font-style: normal;
    }
    .cell-checkbox {
        padding: 0 !important;
        text-align: center;
    }
    .arrow-down {
        font-size: 9px;
        opacity: 0.5;
    }
    .revo-master-row {
        revo-grid {
            height: 100%;
            min-height: initial;
        }
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
