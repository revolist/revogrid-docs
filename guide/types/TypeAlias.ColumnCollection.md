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
| `columnByProp` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> | Columns indexed by prop for quick access, it's possible to have multiple columns with same prop but not recommended | [src/utils/column.utils.ts:56](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/utils/column.utils.ts#L56) |
| `columnGrouping` | [`ColumnGroupingCollection`](TypeAlias.ColumnGroupingCollection.md) | Grouped columns | [src/utils/column.utils.ts:60](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/utils/column.utils.ts#L60) |
| `columns` | `Record`\<[`DimensionCols`](TypeAlias.DimensionCols.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> | Columns as they are in stores | [src/utils/column.utils.ts:52](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/utils/column.utils.ts#L52) |
| `maxLevel` | `number` | Max level of grouping | [src/utils/column.utils.ts:64](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/utils/column.utils.ts#L64) |
| `sort` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)\> | Sorting | [src/utils/column.utils.ts:68](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/utils/column.utils.ts#L68) |

## Defined in

[src/utils/column.utils.ts:48](https://github.com/revolist/revogrid/blob/65763a3c3cbba79c84cbcd4109976d8fec48b078/src/utils/column.utils.ts#L48)
