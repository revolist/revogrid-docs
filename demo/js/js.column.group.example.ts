import { defineCustomElements } from '@revolist/revogrid/loader'
// This function can be used to quickly define all Revogrid components in a project on the custom elements registry.
defineCustomElements()

// #region snippet
import { makeData } from '@/demo/makeData'
import type { ColumnGrouping, ColumnRegular } from '@revolist/revogrid'

// #region columns
const columns: (ColumnGrouping | ColumnRegular)[] = [
    // Stacked column group
    {
        name: 'Personal',
        children: [
            {
                name: 'Full Name',
                children: [
                    { name: 'First Name', prop: 'firstName', size: 200 }, // Regular column within the group
                    { name: 'Last Name', prop: 'lastName', size: 200 }, // Regular column within the group
                ],
            },
            {
                name: 'Info',
                children: [{ name: 'Age', prop: 'age' }], // Regular column
            },
        ],
    },
]
// #endregion columns

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

export { render }
