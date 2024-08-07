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

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `columnByProp` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> | [src/services/column.data.provider.ts:31](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/services/column.data.provider.ts#L31) |
| `columnGrouping` | `ColumnGroupingCollection` | [src/services/column.data.provider.ts:32](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/services/column.data.provider.ts#L32) |
| `columns` | `Record`\<[`DimensionCols`](TypeAlias.DimensionCols.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> | [src/services/column.data.provider.ts:30](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/services/column.data.provider.ts#L30) |
| `maxLevel` | `number` | [src/services/column.data.provider.ts:33](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/services/column.data.provider.ts#L33) |
| `sort` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)\> | [src/services/column.data.provider.ts:34](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/services/column.data.provider.ts#L34) |

## Defined in

[src/services/column.data.provider.ts:29](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/services/column.data.provider.ts#L29)
