<template>
    <div class="revo-grid-wrapper">
        <div class="mock-panel">
            <div class="mock-header">
                <span class="mock-dot" style="background:#ff5f57"></span>
                <span class="mock-dot" style="background:#febc2e"></span>
                <span class="mock-dot" style="background:#28c840"></span>
                <span class="mock-title">Market Data · RevoGrid</span>
                <div class="mock-options">
                    <span class="mock-option active">Live</span>
                </div>
            </div>
            <div class="mock-body">
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
            </div>
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
.revo-grid-wrapper {
    flex-grow: 1;
    align-self: stretch;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    max-width: 100%;
}
.mock-panel {
    background: var(--vp-c-bg-elv);
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    margin: 40px 40px 0;
    margin-top: 40px;

    &::before {
        content: '';
        display: block;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--vp-c-brand-1), transparent);
    }
}
.mock-header {
    background: var(--vp-c-bg-soft);
    padding: 9px 14px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-bottom: 1px solid var(--vp-c-divider);
}
.mock-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    flex: 0 0 auto;
}
.mock-title {
    font-size: 11px;
    font-family: var(--vp-font-family-mono);
    color: var(--vp-c-text-3);
    margin-left: 6px;
    white-space: nowrap;
}
.mock-options {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
}
.mock-option {
    border: 1px solid var(--vp-c-divider);
    border-radius: 999px;
    color: var(--vp-c-text-3);
    background: var(--vp-c-bg);
    font-family: var(--vp-font-family-mono);
    font-size: 10px;
    line-height: 1;
    padding: 5px 8px;

    &.active {
        border-color: var(--vp-c-brand-2);
        color: var(--vp-c-brand-1);
        background: var(--vp-c-brand-soft);
    }
}
.mock-body {
    padding: 0;
}
.grid-demo {
    display: block;
    height: min(490px, calc(58vh + 40px));
    min-height: 340px;
    border: 0;
    overflow: hidden;
}
@media (max-width: 640px) {
    .mock-options {
        display: none;
    }

    .grid-demo {
        height: 380px;
        min-height: 380px;
    }
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
