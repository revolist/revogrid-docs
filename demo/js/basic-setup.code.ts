// Snag your grid element from the DOM
const grid = document.querySelector('revo-grid');

// Let the grid know about your columns and data
grid.columns = [
  {
      prop: 'first', // This is the key in your data array
      name: 'First column' // This is the name that will appear in the header
  },
  {
      prop: 'second',
      name: 'Second column', // Another column for good measure
      // Spice up your cell with a custom template
      cellTemplate: (createElement, props) => {
        return createElement('div', {
          style: { backgroundColor: 'red' }, // Because red is fast
          class: { 'inner-cell': true } // A touch of styling
        }, props.model[props.prop] || ''); // Display the data, or nothing at all
      }
  }
];
// Here's your data, ready to be displayed
grid.source = [{
  first: 'New item', // Matches the 'first' prop in columns
  second: 'Item description' // Ditto for 'second'
  // Add more rows as needed
}];
