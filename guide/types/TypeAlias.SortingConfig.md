[RevoGrid Documentation v4.14.7](README.md) / SortingConfig

# Type Alias: SortingConfig

```ts
type SortingConfig: {
  additive: boolean;
  columns: {
     cellCompare: CellCompareFunc;
     order: Order;
     prop: ColumnProp;
    }[];
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `additive` | `boolean` | [src/plugins/sorting/sorting.types.ts:14](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/plugins/sorting/sorting.types.ts#L14) |
| `columns` | \{ `cellCompare`: [`CellCompareFunc`](TypeAlias.CellCompareFunc.md); `order`: [`Order`](TypeAlias.Order.md); `prop`: [`ColumnProp`](TypeAlias.ColumnProp.md); \}[] | [src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/plugins/sorting/sorting.types.ts#L13) |

## Defined in

[src/plugins/sorting/sorting.types.ts:12](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/plugins/sorting/sorting.types.ts#L12)
