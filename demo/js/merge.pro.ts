import { defineCustomElements } from '@revolist/revogrid/loader'
defineCustomElements()
// begin by importing CellMergePlugin
import { CellMergePlugin } from '@revolist/revogrid-pro'

// Initialize RevoGrid with Pro features enabled
const grid = document.querySelector('revo-grid')
if (grid) {
    // Define the columns for your grid
    grid.columns = [
        { name: 'ID', prop: 'id' },
        { name: 'Category', prop: 'category' },
        { name: 'Item', prop: 'item' },
        { name: 'Price', prop: 'price' },
    ]
    grid.source = [
        { id: 1, category: 'Fruits', item: 'Apple', price: 1.2 },
        { id: 2, category: 'Fruits', item: 'Banana', price: 0.5 },
        { id: 3, category: 'Vegetables', item: 'Carrot', price: 0.7 },
    ]

    // Define the cell merge configuration
    const cellMerge = [
        {
            row: 0, // Starting row of the merged cell
            column: 0, // Starting column of the merged cell
            rowSpan: 2, // Number of rows the cell spans
            colSpan: 2, // Number of columns the cell spans
            rowType: 'rgRow',
            colType: 'rgCol',
        },
    ]

    // Apply cell merge settings to the grid
    grid.additionalData = {
        cellMerge,
    }
    grid.plugins = [CellMergePlugin]
}
