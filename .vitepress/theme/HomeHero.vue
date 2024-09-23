<template>
    <ClientOnly>
        <VGrid
            readonly
            :theme="isDark ? 'darkMaterial' : 'material'"
            :range="true"
            :row-size="40"
            :resize="true"
            :source="gridData"
            :columns="gridColumns"
            hide-attribution
        />
    </ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useData } from 'vitepress'
import VGrid, { type ColumnRegular, type VNode } from '@revolist/vue3-datagrid'
import { stocks } from '@/json/stock.json'

const { isDark } = useData()
const gridColumns = ref<ColumnRegular[]>([])
const gridData = ref<any>([])

let interval;

onMounted(() => {
    gridData.value = stocks
    interval = setInterval(() => {
        gridData.value = gridData.value.map((stock) => {
            return {
                ...stock,
                price: (Math.random() * 4000).toFixed(2),
                change: (Math.random() * (20 - -5) + -5).toFixed(2),
            }
        })
    }, 1000)

    gridColumns.value = [
        {
            name: '🎰 Ticker',
            prop: 'symbol',
            sortable: true,
            // order: 'asc',
            pin: 'colPinStart',
            cellTemplate(h, { model, prop }) {
                return h('strong', null, model[prop])
            },
        },
        {
            name: '🔠 Company Name',
            prop: 'company_name',
            size: 250,
        },
        {
            name: '',
            prop: '📉 graph',
            readonly: true,
            cellTemplate(h) {
                const barWidth = 5
                const barSpacing = 5
                const maxHeight = 30
                const bars: VNode[] = []

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
            name: '💰 Price',
            prop: 'price',
            size: 100,
        },
    ]
})

onBeforeUnmount(() => {
    clearInterval(interval)
})
</script>
