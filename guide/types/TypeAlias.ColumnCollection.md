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
| `columnByProp` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> | Columns indexed by prop for quick access, it's possible to have multiple columns with same prop but not recommended | [src/utils/column.utils.ts:47](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/utils/column.utils.ts#L47) |
| `columnGrouping` | [`ColumnGroupingCollection`](TypeAlias.ColumnGroupingCollection.md) | Grouped columns | [src/utils/column.utils.ts:51](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/utils/column.utils.ts#L51) |
| `columns` | `Record`\<[`DimensionCols`](TypeAlias.DimensionCols.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> | Columns as they are in stores | [src/utils/column.utils.ts:43](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/utils/column.utils.ts#L43) |
| `maxLevel` | `number` | Max level of grouping | [src/utils/column.utils.ts:55](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/utils/column.utils.ts#L55) |
| `sort` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)\> | Sorting | [src/utils/column.utils.ts:59](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/utils/column.utils.ts#L59) |

## Defined in

[src/utils/column.utils.ts:39](https://github.com/revolist/revogrid/blob/73f8a5d0a8436a360d4f96a23968accd54f79b44/src/utils/column.utils.ts#L39)
