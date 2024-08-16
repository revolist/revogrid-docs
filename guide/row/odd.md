# Highlighting Odd Rows in RevoGrid Pro

Styling odd rows differently from even rows is a common practice in data grids to improve readability and visual clarity. RevoGrid Pro offers a convenient way to achieve this through the `RowOddPlugin`, which allows you to automatically apply custom styles to odd-numbered rows in your grid.

## Enabling Odd Row Highlighting

To enable the highlighting of odd rows in your grid, you can use the `RowOddPlugin`. This plugin makes it easy to apply distinct styles to odd rows without having to manually manage row classes or custom styles.

### Example Setup

Here’s how you can set up and enable odd row highlighting in your grid:

### Step 1: Import Necessary Modules

First, import the necessary modules, including the `RowOddPlugin` and the `defineCustomElement` function from RevoGrid:

```javascript
import { defineCustomElement } from '@revolist/revogrid/standalone';
import { RowOddPlugin } from '../plugins/row-odd';
defineCustomElement();
```

### Step 2: Generate Data and Define Columns

Next, generate some random data and define the columns for your grid:

```javascript
import { useRandomData, currentTheme } from '../composables/useRandomData';
const { createRandomData } = useRandomData();
const { isDark } = currentTheme();

const columns = [
  { name: '🆔 ID', prop: 'id' },
  { name: '🍎 Fruit', prop: 'name' },
  { name: '💰 Price', prop: 'price' },
];
```

### Step 3: Configure the Grid and Enable Odd Row Highlighting

Finally, configure the grid, set the data source, and apply the `RowOddPlugin` to automatically style the odd rows:

```javascript
const grid = document.querySelector('revo-grid');
if (grid) {
  grid.source = createRandomData(100);
  grid.columns = columns;
  // Enable the Row Odd Plugin
  grid.plugins = [RowOddPlugin];
}
```

### How It Works

With the `RowOddPlugin` enabled:

- Odd-numbered rows are automatically styled differently from even rows, making it easier to distinguish between rows when scanning large datasets.
- The plugin works seamlessly with any theme you apply to the grid, ensuring consistent styling across your application.

### Customizing Odd Row Styles

You can customize the appearance of odd rows by modifying the styles associated with the odd row class. This allows you to tailor the look and feel of your grid to match your application's design guidelines.

```css
/* Example CSS for custom odd row styling */
.revo-grid .rgRow.odd {
  background-color: #f9f9f9;
  color: #333;
}
```

### Benefits of Highlighting Odd Rows

- **Improved Readability**: Alternating row styles make it easier for users to read and compare data across rows.
- **Enhanced Visual Clarity**: Distinguishing odd rows helps in quickly identifying and locating specific data points within the grid.
- **Seamless Integration**: The plugin integrates effortlessly with your existing grid setup, requiring minimal configuration.

## Conclusion

The `RowOddPlugin` in RevoGrid Pro offers a simple yet effective way to enhance the visual clarity of your data grids by automatically highlighting odd rows. By enabling this feature, you can improve the readability of your grid and provide a better user experience. Whether you're dealing with large datasets or simply want to add a touch of polish to your grid, odd row highlighting is a valuable tool in your RevoGrid toolkit.
