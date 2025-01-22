import type { ColumnRegular } from '@revolist/revogrid';
import { defineCustomElements } from '@revolist/revogrid/loader';
import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  // Define the columns for the RevoGrid
  columns: ColumnRegular[] = [
    { prop: 'id', name: 'ID' },
    { prop: 'name', name: 'Name' },
    { prop: 'age', name: 'Age' },
    { prop: 'email', name: 'Email' },
  ];

  // Define the data source for the RevoGrid
  source: any[] = [
    { id: 1, name: 'John', age: 30, email: 'xxx@xxx.xxx' },
    { id: 2, name: 'Mike', age: 25, email: 'www@www.www' },
  ];

  componentWillLoad() {
    // Initialize RevoGrid custom elements
    return defineCustomElements();
  }

  render() {
    return (
      // Render the revo-grid component with filtering enabled
      <revo-grid filter={true} columns={this.columns} source={this.source} />
    );
  }
}
