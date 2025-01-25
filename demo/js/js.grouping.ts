import { defineCustomElements } from '@revolist/revogrid/loader'
import { type DataType } from '@revolist/revogrid'
defineCustomElements()

// Create grid element
const grid = document.createElement('revo-grid')
document.body.appendChild(grid)

// Define columns
const columns = [
    {
        name: '🎰',
        prop: 'a',
    },
]

grid.columns = columns
grid.source = ((rowsNumber) => {
    const result: DataType[] = []
    const all = rowsNumber
    for (let j = 0; j < all; j++) {
        let row = j
        if (!result[row]) {
            result[row] = {
                id: row,
                projectName: j % 2 ? 'yes' : 'no',
            }
        }
        result[row]['a'] = `I am row ${row}`
    }
    return result
})(100)

grid.grouping = { props: ['projectName'] }
