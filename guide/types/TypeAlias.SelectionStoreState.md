[@revolist/revogrid](README.md) / SelectionStoreState

# Type Alias: SelectionStoreState

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

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `edit` | [`EditCellStore`](Interface.EditCellStore.md) \| `null` | [src/types/selection.ts:18](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/selection.ts#L18) |
| `focus` | [`Cell`](Interface.Cell.md) \| `null` | [src/types/selection.ts:17](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/selection.ts#L17) |
| `lastCell` | [`Cell`](Interface.Cell.md) \| `null` | [src/types/selection.ts:19](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/selection.ts#L19) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:14](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/selection.ts#L14) |
| `tempRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:15](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/selection.ts#L15) |
| `tempRangeType` | `string` \| `null` | [src/types/selection.ts:16](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/selection.ts#L16) |

## Defined in

[src/types/selection.ts:13](https://github.com/revolist/revogrid/blob/08de4537b2052abd86ff4eb5461780401e3c4fcb/src/types/selection.ts#L13)
