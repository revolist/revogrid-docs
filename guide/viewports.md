<script lang="ts" setup>
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
</script>

# Understanding Viewports

RevoGrid has pinned rows (top and bottom) and pinned columns (left and right), which leads to three different viewports for each type:

---
<br />
<VPImage image="viewports.svg" />
<br />

---

For rows, the viewports are: 
- `rowPinStart`
- `rgRow`
- `rowPinEnd`

For columns, the viewports are: 
- `colPinStart`
- `rgCol`
- `colPinEnd`

This structure was designed for a unified grid architecture, making the code easier to read and understand. However, this introduces some advanced concepts that need to be supported. Specifically, it means that different events will return virtual indexes instead of real ones.


## Understanding Virtual Indexes

In RevoGrid, the concept of virtual indexes is crucial for efficiently managing the layout of the grid, especially when working with pinned rows and columns. These indexes allow the grid to optimize rendering and event handling, ensuring that the user experience remains smooth even with large datasets.

### Row Virtual Indexes

For rows, the virtual indexes are structured as follows:

- The first array represents the pinned rows at the top (`rowPinStart`).
- The second array represents the main body of the grid rows (`rgRow`).
- The third array represents the pinned rows at the bottom (`rowPinEnd`).

For example, the virtual row indexes might look like this:

```
[
 [0, 1, 2, ...],             // Pinned rows at the top
 [0, 1, 2, 3, 4, ...],      // Main body of the grid
 [0, 1, ...]                // Pinned rows at the bottom
]
```

This structure indicates that when you interact with a cell in the grid, the event handling will refer to these virtual indexes instead of the actual indexes in your data source. 

For instance, if you are working with the main body of the grid and you access the first row, you will receive `rowIndex` of `0` from the second array, but this corresponds to the actual data index in your dataset.

### Column Virtual Indexes

Similarly, for columns, the virtual indexes are organized to account for pinned columns:

- The first set of indexes represents the pinned columns on the left (`colPinStart`).
- The second set represents the main grid columns (`rgCol`).
- The last set represents the pinned columns on the right (`colPinEnd`).

The structure for columns would look like this:

```
[
 [0, 1, ...],            // Pinned columns on the left
 [0, 1, 2, 3, ...],     // Main grid columns
 [0, 1, ...]            // Pinned columns on the right
]
```

### Implications of Using Virtual Indexes

When working with events, it’s important to remember that every event dispatched from the grid will return these virtual indexes instead of the actual indexes from your dataset. This design choice simplifies event management but also requires developers to consider how they map these indexes back to their underlying data model.

For example, if you have an event such as `beforeedit`, the event details may look like this:

```typescript
export type BeforeSaveDataDetails = {
  prop: ColumnProp;
  model: DataType;
  val?: SaveData;
  rowIndex: number; // virtual row index
  colIndex: number; // virtual column index
  colType: DimensionCols;
  type: DimensionRows;
};
```

Here, `rowIndex` and `colIndex` refer to the virtual indexes, which means that if you want to retrieve the actual data from your source, you may need to perform additional calculations or mappings based on the grid’s layout.

## Practical Example

Let’s say you have a grid with pinned rows and columns, and a user interacts with a cell in the main grid. 

When you handle the `beforeedit` event:

```ts
revogrid.addEventListener('beforeedit', (event: HTMLRevoGridElementEventMap['beforeedit']) => {
  const { rowIndex, colIndex } = event.detail;
  console.log(rowIndex, colIndex);
})
```

You might receive:

```ts
{
  rowIndex: 0, // This refers to the first row in the main grid (rgRow)
  colIndex: 1, // This refers to the second column in the main grid (rgCol)
}
```

But physically it could be 2, 3, or 4 row and column indexes. If you want to get the actual data from your dataset, you would need to translate these virtual indexes back to your data model, taking into account any pinned rows or columns.

In this type definition, `BeforeSaveDataDetails` includes information about the dimension type for both rows and columns, with indexes provided in a virtual coordinate system per viewport. While you typically won’t encounter this in standard usage, it's crucial to understand if you’re developing advanced plugins.


```ts
interface HTMLRevoGridElementEventMap {
    //...
        "beforeedit": BeforeSaveDataDetails;
    //...
}
type BeforeSaveDataDetails = {
  prop: ColumnProp;
  model: DataType;
  val?: SaveData;
  rowIndex: number; // virtual row index
  colIndex: number; // virtual column index
  colType: DimensionCols;
  type: DimensionRows;
};
```



### Dimension Types

To clarify the dimension types used in RevoGrid, consider the following type definitions:

```typescript
export type DimensionTypeRow = 'rgRow';
export type DimensionTypeCol = 'rgCol';
export type DimensionColPin = 'colPinStart' | 'colPinEnd';
export type DimensionRowPin = 'rowPinStart' | 'rowPinEnd';
export type DimensionType = DimensionTypeCol | DimensionTypeRow;
export type DimensionCols = DimensionColPin | DimensionTypeCol;
export type DimensionRows = DimensionTypeRow | DimensionRowPin;
export type MultiDimensionType = DimensionCols | DimensionRows;
```

These types help in managing the various dimensions and their respective states within the grid, ensuring that your code can effectively handle both pinned and unpinned rows and columns.

Understanding the viewport system in RevoGrid Pro is vital for developers looking to implement advanced features and plugins. By familiarizing yourself with the virtual indexes and the corresponding dimension types, you can ensure that your implementation remains robust and effective. 

As you develop your applications, keep these concepts in mind to harness the full potential of RevoGrid's capabilities.

Read more about render in proxy items [here](./proxy-items.md)
