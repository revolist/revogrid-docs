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
| `columnByProp` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> | Columns indexed by prop for quick access, it's possible to have multiple columns with same prop but not recommended | [src/utils/column.utils.ts:53](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/utils/column.utils.ts#L53) |
| `columnGrouping` | [`ColumnGroupingCollection`](TypeAlias.ColumnGroupingCollection.md) | Grouped columns | [src/utils/column.utils.ts:57](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/utils/column.utils.ts#L57) |
| `columns` | `Record`\<[`DimensionCols`](TypeAlias.DimensionCols.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> | Columns as they are in stores | [src/utils/column.utils.ts:49](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/utils/column.utils.ts#L49) |
| `maxLevel` | `number` | Max level of grouping | [src/utils/column.utils.ts:61](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/utils/column.utils.ts#L61) |
| `sort` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)\> | Sorting | [src/utils/column.utils.ts:65](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/utils/column.utils.ts#L65) |

## Defined in

[src/utils/column.utils.ts:45](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/utils/column.utils.ts#L45)
