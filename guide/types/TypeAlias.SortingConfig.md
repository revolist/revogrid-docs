[RevoGrid Documentation v4.23.22](README.md) / SortingConfig

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
| `additive` | `boolean` | If true, merge provided columns with the current sorting state. If false or omitted, replace current sorting state. | [src/plugins/sorting/sorting.types.ts:89](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/plugins/sorting/sorting.types.ts#L89) |
| `columns` | \{ `cellCompare`: [`CellCompareFunc`](TypeAlias.CellCompareFunc.md); `order`: [`Order`](TypeAlias.Order.md); `prop`: [`ColumnProp`](TypeAlias.ColumnProp.md); \}[] | Columns to sort by. | [src/plugins/sorting/sorting.types.ts:84](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/plugins/sorting/sorting.types.ts#L84) |

## Defined in

[src/plugins/sorting/sorting.types.ts:80](https://github.com/revolist/revogrid/blob/7bcc5e9bd1eec761404fc48882953584821f05ce/src/plugins/sorting/sorting.types.ts#L80)
