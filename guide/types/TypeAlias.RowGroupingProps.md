[RevoGrid Documentation v4.17.2](README.md) / RowGroupingProps

# Type Alias: RowGroupingProps

```ts
type RowGroupingProps: GroupRowPros & PositionItem & {
  columnItems: VirtualPositionItem[];
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnItems` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | Visible columns in the grid, can be used to get the width of the column and position of the column to calculate the position of the cells in the grouping row | [src/plugins/groupingRow/grouping.row.types.ts:54](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/plugins/groupingRow/grouping.row.types.ts#L54) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:49](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/plugins/groupingRow/grouping.row.types.ts#L49)
