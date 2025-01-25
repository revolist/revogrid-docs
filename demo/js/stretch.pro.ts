import { defineCustomElements } from '@revolist/revogrid/loader'
defineCustomElements()
// begin by importing ColumnStretchPlugin
import { ColumnStretchPlugin } from '@revolist/revogrid-pro'

const grid = document.querySelector('revo-grid')
if (grid) {
    // generate random data
    grid.source = [
        { id: 1, name: 'Apple', price: 100 },
        { id: 2, name: 'Banana', price: 200 },
        { id: 3, name: 'Orange', price: 300 },
    ]
    // define the columns for your grid
    grid.columns = [
        { name: '🆔 ID', prop: 'id' },
        { name: '🍎 Fruit', prop: 'name' },
        { name: '💰 Price', prop: 'price' },
    ]
    grid.additionalData = { stretch: 'all' } // Stretch all columns
    // apply the ColumnStretchPlugin
    grid.plugins = [ColumnStretchPlugin]
}
