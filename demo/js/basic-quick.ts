// Snag your grid element from the DOM
const grid = document.querySelector('revo-grid');
// Let the grid know about your columns and data
grid.columns = [{ prop: 'first', name: 'First column' }];
// Here's your data, ready to be displayed
grid.source = [{ first: 'New item', second: 'Item description' }];
