[RevoGrid Documentation v4.21.5](README.md) / SortingConfig

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
| `additive` | `boolean` | [src/plugins/sorting/sorting.types.ts:14](https://github.com/revolist/revogrid/blob/99195a6cfd53147e252a186750e43ef2e04c1929/src/plugins/sorting/sorting.types.ts#L14) |
| `columns` | \{ `cellCompare`: [`CellCompareFunc`](TypeAlias.CellCompareFunc.md); `order`: [`Order`](TypeAlias.Order.md); `prop`: [`ColumnProp`](TypeAlias.ColumnProp.md); \}[] | [src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/99195a6cfd53147e252a186750e43ef2e04c1929/src/plugins/sorting/sorting.types.ts#L13) |

## Defined in

[src/plugins/sorting/sorting.types.ts:12](https://github.com/revolist/revogrid/blob/99195a6cfd53147e252a186750e43ef2e04c1929/src/plugins/sorting/sorting.types.ts#L12)
