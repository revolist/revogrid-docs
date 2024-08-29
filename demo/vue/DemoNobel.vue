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
            :filter="true"
            :plugins="plugins"
            :pinnedTopSource="pinnedTopSource"
            hide-attribution
            :additionalData="{
                stretch: 3,
                cellMerge: [
                    {
                        row: 0,
                        column: 1,
                        rowSpan: 1,
                        colSpan: 2,
                        rowType: 'rowPinStart',
                        colType: 'rgCol',
                    },
                ],
                eventManager: {
                    applyEventsToSource: true,
                },
                rowSelect: {
                    prop: 'selection',
                },
            }"
            range
            resize
            :row-headers="rowHeaders"
            :editors="editors"
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
    type EditorCtrConstructible,
    type Editors,
    type HyperFunc,
    TextEditor,
    type VNode,
} from '@revolist/vue3-datagrid'
// @ts-ignore
import { data } from './demoNobel.data.ts'
import { ColumnStretchPlugin } from '../../pro-pages/src/plugins/column-stretch'
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
import {
    RowSelectPlugin,
    RowSelectColumnType,
} from '../../pro-pages/src/plugins/row-select'
import { RowKeyboardNextLineFocusPlugin } from '../../pro-pages/src/plugins/row-next-focus'

const { isDark } = useData()

const gridColumns = ref<(ColumnGrouping | ColumnRegular)[]>([])
const gridColumnTypes = ref<{ [name: string]: any }>({})
const gridData = ref<any>([])
const pinnedTopSource = ref<any>([])

// class PromptEditor extends TextEditor {
//     constructor(...args: any[]) {
//         super(args[0], args[1]);
//     }
//     render(h: HyperFunc<VNode>) {
//         return h?.('textarea', {
//             style: {
//                 width: '100%',
//                 height: '100%',
//                 resize: 'none',
//                 outline: 'none',
//                 border: 'none',
//                 padding: '10px',
//             },
//             class: 'prompt',
//             enterKeyHint: 'enter',
//             // set input value from cell data
//             value: this.editCell?.val ?? '',
//             // save input element as ref for further usage
//             ref: (el: HTMLInputElement | null) => {
//                 this.editInput = el;
//             },
//             // listen to keydown event on input element
//             onKeyDown: (e: KeyboardEvent) => this.onKeyDown(e),
//         })
//     }
// }

const editors = ref<Editors>({
    // prompt: PromptEditor as EditorCtrConstructible,
})

const plugins = [
    // ColumnStretchPlugin,
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
]

const rowHeaders = ref<Partial<ColumnRegular> | boolean>({
    cellProperties: (params) => ({
        class: `group-${params.model.group}`
    })
})

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
    pinnedTopSource.value = [
        // {
        //     share: '=SUM(E2:E671)',
        //     amount: '=SUM(F2:F671)',
        //     description: 'Totals',
        // },
    ]
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
                },
                {
                    name: 'Year',
                    prop: 'year',
                    columnType: 'date',
                    order: 'desc',
                    sortable: true,
                    size: 150,
                    readonly: (v) => v.type === 'rowPinStart',
                    pin: 'colPinStart',
                },
                {
                    name: 'Category',
                    prop: 'category',
                    size: 150,
                    cellTemplate: (h, { value }) => {
                        if (!value) return
                        return `${data.categories[value].label}`
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
                return true;
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
                };
            },
            cellTemplate: cellFlashArrowTemplate,
        },
        {
            name: '📟 Prize Amount',
            prop: 'amount',
            size: 150,
            flash: () => {
            // Handle cell flash event, you can define your flash logic here per cell if needed
                return true;
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
