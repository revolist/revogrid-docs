import { defineCustomElements } from '@revolist/revogrid/loader'
defineCustomElements()

const grid = document.querySelector('revo-grid')
if (grid) {
    grid.columns = [
        { prop: 'id', name: 'ID', size: 100 },
        { prop: 'name', name: 'Name', size: 150 },
        { prop: 'age', name: 'Age', size: 80 },
    ]
    grid.source = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 },
    ]
}
