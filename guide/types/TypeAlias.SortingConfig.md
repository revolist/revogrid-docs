[RevoGrid Documentation v4.12.9](README.md) / SortingConfig

# Type Alias: SortingConfig

```ts
type SortingConfig: {
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
| `columns` | \{ `cellCompare`: [`CellCompareFunc`](TypeAlias.CellCompareFunc.md); `order`: [`Order`](TypeAlias.Order.md); `prop`: [`ColumnProp`](TypeAlias.ColumnProp.md); \}[] | [src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/plugins/sorting/sorting.types.ts#L13) |

## Defined in

[src/plugins/sorting/sorting.types.ts:12](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/plugins/sorting/sorting.types.ts#L12)
