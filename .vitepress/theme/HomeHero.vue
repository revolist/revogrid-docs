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
                :stretch="true"
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
// @ts-ignore
import { stocks } from '@/json/stock.json'

const { isDark } = useData()
const gridColumns: ColumnRegular[] = [
    {
        name: '🎰 Ticker',
        prop: 'symbol',
        sortable: true,
        order: 'asc',
        prevPrice: {},
        cellTemplate(h, { value, column, model }) {
            const changeColor = column.prevPrice[value] > model.price ? 'red' : 'green'
            column.prevPrice[value] = model.price
            return h('strong', {
                class: {
                    badge: true,
                    [`${changeColor}`]: true,
                },
            }, value)
        },
    },
    {
        name: '🔠 Company Name',
        prop: 'company_name',
        size: 250,
        sortable: true,
    },
    {
        name: '',
        prop: '📉 graph',
        readonly: true,
        cellProperties: () => ({
            class: { disabled: false },
        }),
        prevPrice: 0,
        cellTemplate(h) {
            const barWidth = 8
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
                    rx: 2,
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
        prevPrice: {},
        cellTemplate(h, { value, model, column }) {
            const change = column.prevPrice[model.symbol] > value ? ' ▼' : ' ▲'
            const changeColor = column.prevPrice[model.symbol] > value ? 'red' : 'green'
            column.prevPrice[model.symbol] = value
            return h('span', null, [value, h('span', { class: 'change', style: { color: changeColor } }, change)])
        },
    },
]
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
    max-width: 100%;
}
.grid-demo {
    border-radius: 10px;
    border: 1px solid var(--vp-c-border);
    overflow: hidden;
}
:deep(.badge) {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--vp-c-gutter);
    color: var(--vp-c-text-1);

    &.red {
        background-color: var(--vp-badge-danger-bg);
        color: var(--vp-c-text-1);
    }
    &.green {
        background-color: var(--vp-c-green-soft);
    }
}
</style>
