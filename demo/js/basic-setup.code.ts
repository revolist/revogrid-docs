// Snag your grid element from the DOM
const grid = document.querySelector('revo-grid');

// Let the grid know about your columns and data
grid.columns = [
  { prop: 'first', name: 'First column' },
  {
    prop: 'second',
    name: 'Second column',
    // Spice up your cell with a custom template
    cellTemplate: (h, { value }) => h('div', {
      style: { backgroundColor: 'red' }, // Because red is fast
    }, value || '')
  }
];
// Here's your data, ready to be displayed
grid.source = [{
  first: 'New item',
  second: 'Item description'
  //... Add more rows as needed
}];
