[RevoGrid Documentation v4.14.6](README.md) / RowGroupingProps

# Type Alias: RowGroupingProps

```ts
type RowGroupingProps: GroupRowPros & PositionItem & {
  columnItems: VirtualPositionItem[];
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnItems` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | Visible columns in the grid, can be used to get the width of the column and position of the column to calculate the position of the cells in the grouping row | [src/plugins/groupingRow/grouping.row.types.ts:29](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/plugins/groupingRow/grouping.row.types.ts#L29) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:24](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/plugins/groupingRow/grouping.row.types.ts#L24)
