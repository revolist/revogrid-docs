[RevoGrid Documentation v4.31.3](README.md) / SortingConfig

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
| `additive` | `boolean` | If true, merge provided columns with the current sorting state. If false or omitted, replace current sorting state. | [src/plugins/sorting/sorting.types.ts:89](https://github.com/revolist/revogrid/blob/6b4ba162d7e1e59d273a181170ca4cef92eec123/src/plugins/sorting/sorting.types.ts#L89) |
| `columns` | \{ `cellCompare`: [`CellCompareFunc`](TypeAlias.CellCompareFunc.md); `order`: [`Order`](TypeAlias.Order.md); `prop`: [`ColumnProp`](TypeAlias.ColumnProp.md); \}[] | Columns to sort by. | [src/plugins/sorting/sorting.types.ts:84](https://github.com/revolist/revogrid/blob/6b4ba162d7e1e59d273a181170ca4cef92eec123/src/plugins/sorting/sorting.types.ts#L84) |

## Defined in

[src/plugins/sorting/sorting.types.ts:80](https://github.com/revolist/revogrid/blob/6b4ba162d7e1e59d273a181170ca4cef92eec123/src/plugins/sorting/sorting.types.ts#L80)
