[@revolist/revogrid](README.md) / ColumnCollection

# Type alias: ColumnCollection

```ts
type ColumnCollection: {
  columnByProp: Record<ColumnProp, ColumnRegular[]>;
  columnGrouping: ColumnGroupingCollection;
  columns: Record<DimensionCols, ColumnRegular[]>;
  maxLevel: number;
  sort: Record<ColumnProp, ColumnRegular>;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `columnByProp` | `Record`\<[`ColumnProp`](Type.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> |
| `columnGrouping` | `ColumnGroupingCollection` |
| `columns` | `Record`\<[`DimensionCols`](Type.DimensionCols.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> |
| `maxLevel` | `number` |
| `sort` | `Record`\<[`ColumnProp`](Type.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)\> |

## Source

[src/services/column.data.provider.ts:19](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/services/column.data.provider.ts#L19)
