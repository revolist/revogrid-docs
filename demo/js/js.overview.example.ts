import { defineCustomElements } from '@revolist/revogrid/loader'
// This function can be used to quickly define all RevoGrid components in a project on the custom elements registry.
defineCustomElements()

// #region snippet
import { stocks } from '@/json/stock.json'
import type { ColumnRegular } from '@revolist/revogrid'

// Define columns
const columns: ColumnRegular[] = [
    {
        name: '🎰 Ticker',
        prop: 'symbol',
        sortable: true,
        pin: 'colPinStart',
        cellTemplate: (h, { model, prop }) => h('strong', null, model[prop]),
    },
    {
        name: '🔠 Company Name',
        prop: 'company_name',
        size: 300,
    },
    {
        name: '',
        prop: '📉 graph',
        readonly: true,
        // Custom cell render
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
        name: '💰 Price',
        prop: 'price',
    },
    {
        name: '⬆️ Change',
        prop: 'change',
    },
    {
        name: '% Change',
        prop: 'percent_change',
    },
]

// Render grid
function render() {
    // Create grid element
    const grid = document.createElement('revo-grid')
    document.getElementById('demo-overview')?.appendChild(grid)


    const items = stocks
    grid.columns = columns
    grid.source = items
    grid.theme = 'compact'
    
    setInterval(() => {
        grid.source = items.map((stock) => {
            return {
                ...stock,
                price: (Math.random() * 4000).toFixed(2),
                change: (Math.random() * (20 - -5) + -5).toFixed(2),
            }
        })
    }, 1000)
}

// #endregion snippet

export {
    render
}