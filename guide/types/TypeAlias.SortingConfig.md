[RevoGrid Documentation v4.23.15](README.md) / SortingConfig

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

External sorting configuration.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additive` | `boolean` | If true, merge provided columns with the current sorting state. If false or omitted, replace current sorting state. | [src/plugins/sorting/sorting.types.ts:67](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/plugins/sorting/sorting.types.ts#L67) |
| `columns` | \{ `cellCompare`: [`CellCompareFunc`](TypeAlias.CellCompareFunc.md); `order`: [`Order`](TypeAlias.Order.md); `prop`: [`ColumnProp`](TypeAlias.ColumnProp.md); \}[] | Columns to sort by. | [src/plugins/sorting/sorting.types.ts:62](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/plugins/sorting/sorting.types.ts#L62) |

## Defined in

[src/plugins/sorting/sorting.types.ts:58](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/plugins/sorting/sorting.types.ts#L58)
