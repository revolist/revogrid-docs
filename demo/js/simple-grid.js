import { defineCustomElements } from '@revolist/revogrid/loader'
defineCustomElements()

const grid = document.createElement('revo-grid')
grid.columns = [{ prop: 'name' }]
grid.source = [{ name: '1' }, { name: '2' }, { name: '3' }]

document.getElementById('app').appendChild(grid)