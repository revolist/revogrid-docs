[RevoGrid Documentation v4.14.12](README.md) / SelectionStoreState

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
| `edit` | [`EditCellStore`](Interface.EditCellStore.md) \| `null` | Editing cell store | [src/types/selection.ts:39](https://github.com/revolist/revogrid/blob/ee1081dbd910f211c490863a4b642535e5dce01e/src/types/selection.ts#L39) |
| `focus` | [`Cell`](Interface.Cell.md) \| `null` | Focused cell coordinate | [src/types/selection.ts:35](https://github.com/revolist/revogrid/blob/ee1081dbd910f211c490863a4b642535e5dce01e/src/types/selection.ts#L35) |
| `lastCell` | [`Cell`](Interface.Cell.md) \| `null` | Last cell which was focused | [src/types/selection.ts:43](https://github.com/revolist/revogrid/blob/ee1081dbd910f211c490863a4b642535e5dce01e/src/types/selection.ts#L43) |
| `nextFocus` | [`Cell`](Interface.Cell.md) \| `null` | Next cell to focus | [src/types/selection.ts:47](https://github.com/revolist/revogrid/blob/ee1081dbd910f211c490863a4b642535e5dce01e/src/types/selection.ts#L47) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | - | [src/types/selection.ts:23](https://github.com/revolist/revogrid/blob/ee1081dbd910f211c490863a4b642535e5dce01e/src/types/selection.ts#L23) |
| `tempRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | Temporary range selection area | [src/types/selection.ts:27](https://github.com/revolist/revogrid/blob/ee1081dbd910f211c490863a4b642535e5dce01e/src/types/selection.ts#L27) |
| `tempRangeType` | `string` \| `null` | Type of the temporary range selection | [src/types/selection.ts:31](https://github.com/revolist/revogrid/blob/ee1081dbd910f211c490863a4b642535e5dce01e/src/types/selection.ts#L31) |

## Defined in

[src/types/selection.ts:22](https://github.com/revolist/revogrid/blob/ee1081dbd910f211c490863a4b642535e5dce01e/src/types/selection.ts#L22)
