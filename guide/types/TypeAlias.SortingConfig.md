[RevoGrid Documentation v4.15.7](README.md) / SortingConfig

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
| `additive` | `boolean` | [src/plugins/sorting/sorting.types.ts:14](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/plugins/sorting/sorting.types.ts#L14) |
| `columns` | \{ `cellCompare`: [`CellCompareFunc`](TypeAlias.CellCompareFunc.md); `order`: [`Order`](TypeAlias.Order.md); `prop`: [`ColumnProp`](TypeAlias.ColumnProp.md); \}[] | [src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/plugins/sorting/sorting.types.ts#L13) |

## Defined in

[src/plugins/sorting/sorting.types.ts:12](https://github.com/revolist/revogrid/blob/4b66617ba213e84ecc08d523780ce49415de163a/src/plugins/sorting/sorting.types.ts#L12)
