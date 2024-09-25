import { defineCustomElements } from '@revolist/revogrid/loader'
// This function can be used to quickly define all Revogrid components in a project on the custom elements registry.
defineCustomElements()

// #region snippet
import { makeData } from '@/demo/makeData'
import type { ColumnRegular } from '@revolist/revogrid'

// Define columns
const columns: ColumnRegular[] = [
  { name: 'First Name', prop: 'firstName', size: 300, },
  { name: 'Status', prop: 'status', pin: 'colPinStart', size: 200 },
  { name: 'Age', prop: 'age', pin: 'colPinEnd', size: 135 },
]

// Render grid
function render() {
    // Create grid element
    const grid = document.createElement('revo-grid')
    document.getElementById('demo-overview')?.appendChild(grid)


    grid.columns = columns
    grid.source = makeData(10)
    grid.theme = 'compact'
    grid.stretch = true
}

// #endregion snippet

export {
    render
}