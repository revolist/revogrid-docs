[@revolist/revogrid](README.md) / ColumnCollection

# Type Alias: ColumnCollection

```ts
type ColumnCollection: {
  columnByProp: Record<ColumnProp, ColumnRegular[]>;
  columnGrouping: ColumnGroupingCollection;
  columns: Record<DimensionCols, ColumnRegular[]>;
  maxLevel: number;
  sort: Record<ColumnProp, ColumnRegular>;
};
```

Column collection definition.
Used to access indexed data for columns.
Can be accessed via different events.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnByProp` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> | Columns indexed by prop for quick access, it's possible to have multiple columns with same prop but not recommended | [src/utils/column.utils.ts:34](https://github.com/revolist/revogrid/blob/2a9402fdf050fa45d175b041168181a63cd72777/src/utils/column.utils.ts#L34) |
| `columnGrouping` | [`ColumnGroupingCollection`](TypeAlias.ColumnGroupingCollection.md) | Grouped columns | [src/utils/column.utils.ts:38](https://github.com/revolist/revogrid/blob/2a9402fdf050fa45d175b041168181a63cd72777/src/utils/column.utils.ts#L38) |
| `columns` | `Record`\<[`DimensionCols`](TypeAlias.DimensionCols.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> | Columns as they are in stores | [src/utils/column.utils.ts:30](https://github.com/revolist/revogrid/blob/2a9402fdf050fa45d175b041168181a63cd72777/src/utils/column.utils.ts#L30) |
| `maxLevel` | `number` | Max level of grouping | [src/utils/column.utils.ts:42](https://github.com/revolist/revogrid/blob/2a9402fdf050fa45d175b041168181a63cd72777/src/utils/column.utils.ts#L42) |
| `sort` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)\> | Sorting | [src/utils/column.utils.ts:46](https://github.com/revolist/revogrid/blob/2a9402fdf050fa45d175b041168181a63cd72777/src/utils/column.utils.ts#L46) |

## Defined in

[src/utils/column.utils.ts:26](https://github.com/revolist/revogrid/blob/2a9402fdf050fa45d175b041168181a63cd72777/src/utils/column.utils.ts#L26)
