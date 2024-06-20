
## Cell Properties [<Badge type="tip">Type: PropertiesFunc</Badge>](../types/Type.PropertiesFunc) 

What are cell properties in RevoGrid. You can add various properties to cells, including tags, styles, classes, and events like `onClick`.

## Adding Custom Properties

You can customize cells by defining properties within the `cellProperties` function. This function allows you to dynamically assign styles, classes, and events based on the cell's data.

### Example

Here's an example of how to use `cellProperties` to add custom styles, classes, and events to cells:

```js
const columns = [{
  name: 'Person Name',
  prop: 'name',

  // Apply custom properties
  cellProperties: ({prop, model, data, column}) => {
    return {
      // Custom styles
      style: {
        color: model[prop] === 'John Doe' ? 'red' : 'black'
      },
      // Custom classes
      class: {
        'bank': data.isBankCustomer,
        'vip': data.isVIP
      },
      // Custom events
      onClick: (event) => {
        console.log(`Cell clicked: ${model[prop]}`);
      },
      // Custom attributes (tags)
      attributes: {
        'data-tooltip': model[prop]
      }
    };
  },
}];

const items = [
  { name: 'John Doe', isBankCustomer: true, isVIP: false },
  { name: 'Jane Smith', isBankCustomer: false, isVIP: true }
];

// Applying the columns and data source to the grid
grid.columns = columns;
grid.source = items;
```