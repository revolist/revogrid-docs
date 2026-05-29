[RevoGrid Documentation v4.23.5](README.md) / RowGroupingProps

# Type Alias: RowGroupingProps

```ts
type RowGroupingProps: GroupRowPros & PositionItem & {
  columnItems: VirtualPositionItem[];
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnItems` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | Visible columns in the grid, can be used to get the width of the column and position of the column to calculate the position of the cells in the grouping row | [src/plugins/groupingRow/grouping.row.types.ts:54](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/plugins/groupingRow/grouping.row.types.ts#L54) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:49](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/plugins/groupingRow/grouping.row.types.ts#L49)
