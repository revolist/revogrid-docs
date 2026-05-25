// Get the grid element from the page
const grid = document.querySelector('revo-grid');

// Define the columns users will see
grid.columns = [
  { prop: 'name', name: 'Name' },
  { prop: 'role', name: 'Role' },
];

// Provide the rows to render
grid.source = [
  { name: 'Ada Lovelace', role: 'Mathematician' },
  { name: 'Grace Hopper', role: 'Computer scientist' },
];
