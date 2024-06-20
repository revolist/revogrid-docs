[@revolist/revogrid](README.md) / SelectionStoreState

# Type alias: SelectionStoreState

```ts
type SelectionStoreState: {
  edit: EditCellStore | null;
  focus: Cell | null;
  lastCell: Cell | null;
  range: RangeArea | null;
  tempRange: RangeArea | null;
  tempRangeType: string | null;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `edit` | [`EditCellStore`](Interface.EditCellStore.md) \| `null` |
| `focus` | [`Cell`](Interface.Cell.md) \| `null` |
| `lastCell` | [`Cell`](Interface.Cell.md) \| `null` |
| `range` | [`RangeArea`](Type.RangeArea.md) \| `null` |
| `tempRange` | [`RangeArea`](Type.RangeArea.md) \| `null` |
| `tempRangeType` | `string` \| `null` |

## Source

[src/types/selection.ts:13](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/selection.ts#L13)
