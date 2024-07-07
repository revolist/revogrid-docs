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
| `columnByProp` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> | [src/services/column.data.provider.ts:30](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/services/column.data.provider.ts#L30) |
| `columnGrouping` | `ColumnGroupingCollection` | [src/services/column.data.provider.ts:31](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/services/column.data.provider.ts#L31) |
| `columns` | `Record`\<[`DimensionCols`](TypeAlias.DimensionCols.md), [`ColumnRegular`](Interface.ColumnRegular.md)[]\> | [src/services/column.data.provider.ts:29](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/services/column.data.provider.ts#L29) |
| `maxLevel` | `number` | [src/services/column.data.provider.ts:32](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/services/column.data.provider.ts#L32) |
| `sort` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`ColumnRegular`](Interface.ColumnRegular.md)\> | [src/services/column.data.provider.ts:33](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/services/column.data.provider.ts#L33) |

## Defined in

[src/services/column.data.provider.ts:28](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/services/column.data.provider.ts#L28)
