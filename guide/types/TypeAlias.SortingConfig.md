[RevoGrid Documentation v4.20.2](README.md) / SortingConfig

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
| `additive` | `boolean` | [src/plugins/sorting/sorting.types.ts:14](https://github.com/revolist/revogrid/blob/71bd96b7ce813d8a294c3ab036825488de27ea6c/src/plugins/sorting/sorting.types.ts#L14) |
| `columns` | \{ `cellCompare`: [`CellCompareFunc`](TypeAlias.CellCompareFunc.md); `order`: [`Order`](TypeAlias.Order.md); `prop`: [`ColumnProp`](TypeAlias.ColumnProp.md); \}[] | [src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/71bd96b7ce813d8a294c3ab036825488de27ea6c/src/plugins/sorting/sorting.types.ts#L13) |

## Defined in

[src/plugins/sorting/sorting.types.ts:12](https://github.com/revolist/revogrid/blob/71bd96b7ce813d8a294c3ab036825488de27ea6c/src/plugins/sorting/sorting.types.ts#L12)
