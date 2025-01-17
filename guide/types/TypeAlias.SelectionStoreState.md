[@revolist/revogrid](README.md) / SelectionStoreState

# Type Alias: SelectionStoreState

```ts
type SelectionStoreState: {
  edit: EditCellStore | null;
  focus: Cell | null;
  lastCell: Cell | null;
  nextFocus: Cell | null;
  range: RangeArea | null;
  tempRange: RangeArea | null;
  tempRangeType: string | null;
};
```

Represents the state of the selection store.
It contains information about the selection range, temporary range,
focused cell, editing cell, last focused cell, and next cell to focus.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `edit` | [`EditCellStore`](Interface.EditCellStore.md) \| `null` | Editing cell store | [src/types/selection.ts:37](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/types/selection.ts#L37) |
| `focus` | [`Cell`](Interface.Cell.md) \| `null` | Focused cell coordinate | [src/types/selection.ts:33](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/types/selection.ts#L33) |
| `lastCell` | [`Cell`](Interface.Cell.md) \| `null` | Last cell which was focused | [src/types/selection.ts:41](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/types/selection.ts#L41) |
| `nextFocus` | [`Cell`](Interface.Cell.md) \| `null` | Next cell to focus | [src/types/selection.ts:45](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/types/selection.ts#L45) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | - | [src/types/selection.ts:21](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/types/selection.ts#L21) |
| `tempRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | Temporary range selection area | [src/types/selection.ts:25](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/types/selection.ts#L25) |
| `tempRangeType` | `string` \| `null` | Type of the temporary range selection | [src/types/selection.ts:29](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/types/selection.ts#L29) |

## Defined in

[src/types/selection.ts:20](https://github.com/revolist/revogrid/blob/a05de3c33a7ba2a618c9fb3780f2f2c0197bcd28/src/types/selection.ts#L20)
