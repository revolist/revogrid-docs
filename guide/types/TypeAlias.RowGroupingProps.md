[RevoGrid Documentation v4.28.4](README.md) / RowGroupingProps

# Type Alias: RowGroupingProps

```ts
type RowGroupingProps: GroupRowPros & PositionItem & {
  columnItems: VirtualPositionItem[];
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnItems` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md)[] | Visible columns in the grid, can be used to get the width of the column and position of the column to calculate the position of the cells in the grouping row | [src/plugins/groupingRow/grouping.row.types.ts:55](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/groupingRow/grouping.row.types.ts#L55) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:50](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/groupingRow/grouping.row.types.ts#L50)
