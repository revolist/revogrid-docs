<template>
    <VGrid
        :theme="isDark ? 'darkMaterial' : 'material'"
        :source="gridData"
        :columns="gridColumns"
        :column-types="gridColumnTypes"
        :filter="true"
        :range="true"
        row-size="40"
    />
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import VGrid from '@revolist/vue3-datagrid'
import ColumnDate from '@revolist/revogrid-column-date'
import ColumnNumeral from '@revolist/revogrid-column-numeral'
import ColumnSelect from '@revolist/revogrid-column-select'
import { useData } from 'vitepress'
import { stocks } from './stock.json'

const { isDark } = useData()
const gridColumnTypes: { [name: string]: any } = {
    date: new ColumnDate(),
    number: new ColumnNumeral(),
    select: new ColumnSelect(),
}
const gridColumns = [
    {
        name: '🎰 Ticker',
        prop: 'symbol',
        sortable: true,
        order: 'asc',
        pin: 'colPinStart',
        size: 120,

        cellTemplate(h, { model, prop }) {
            return h('strong', null, model[prop])
        },
        labelKey: 'label',
        valueKey: 'value',
        source: [
            { label: 'According', value: 'According' },
            { label: 'Over', value: 'Over' },
            { label: 'Source', value: 'Source' },
        ],
        columnType: 'select',
    },
    {
        name: '🔠 Company',
        children: [
            {
                name: 'Name',
                prop: 'company_name',
                size: 300,
            },
        ],
    },
    {
        name: '',
        prop: '📉 graph',
        readonly: true,
        cellTemplate(h) {
            const barWidth = 5
            const barSpacing = 5
            const maxHeight = 30
            const bars = []

            // Draw 5 vertical bars with random heights
            for (let i = 0; i < 5; i++) {
                const barHeight = Math.random() * maxHeight
                const x = i * (barWidth + barSpacing)
                const y = maxHeight - barHeight + 5

                // Create the rectangle element for the bar
                const rect = h('rect', {
                    key: i,
                    x,
                    y,
                    width: barWidth,
                    height: barHeight,
                    fill: 'blue',
                    stroke: 'black',
                })

                // Append the rectangle to the group
                bars.push(rect)
            }
            return h(
                'svg',
                {
                    width: '100%',
                    height: maxHeight + 10,
                },
                h('g', {}, bars)
            )
        },
    },
    {
        name: 'Attributes',
        children: [
            {
                name: '💰 Price',
                prop: 'price',
                size: 120,
            },
            {
                name: '⬆️ Change',
                prop: 'change',
                size: 140,
            },
            {
                name: '% Change',
                prop: 'percent_change',
                size: 120,
            },
        ],
    },
]

const data = ref(stocks)
const gridData = computed(() => data.value)
setInterval(() => {
    data.value = data.value.map((stock) => {
        return {
            ...stock,
            price: (Math.random() * 4000).toFixed(2),
            change: (Math.random() * (20 - -5) + -5).toFixed(2),
        }
    })
}, 1000)
</script>

<style lang="scss">
revo-grid {
    min-height: 500px;
}
</style>
