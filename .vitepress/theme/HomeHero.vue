<template>
    <div class="revo-grid-wrapper">
        <ClientOnly>
            <VGrid
                class="grid-demo"
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
        <div class="revo-grid-badge">
            Trusted by thousands of developers
            <a
                class="badge"
                href="https://www.jsdelivr.com/package/npm/@revolist/revogrid"
                title="jsDelivr monthly hits"
            >
                <img
                    alt="jsDelivr monthly hits badge"
                    src="https://data.jsdelivr.com/v1/package/npm/@revolist/revogrid/badge"
                />
            </a>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useData } from 'vitepress'
import VGrid, { type ColumnRegular, type VNode } from '@revolist/vue3-datagrid'
import { stocks } from '@/json/stock.json'

const { isDark } = useData()
const gridColumns = ref<ColumnRegular[]>([])
const gridData = ref<any>([])

let interval

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
<style lang="scss" scoped>
.revo-grid-badge {
    display: flex;
    font-size: 12px;
    align-items: center;
    gap: 0.5rem;
    justify-content: end;
}
.revo-grid-wrapper {
    flex-grow: 1;
    align-self: stretch;
    display: flex;
    gap: 1rem;
    flex-direction: column;
}
.grid-demo {
    border-radius: 10px;
    border: 1px solid var(--vp-c-gutter);
    overflow: hidden;
}
</style>
