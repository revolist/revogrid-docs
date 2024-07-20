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
| `edit` | [`EditCellStore`](Interface.EditCellStore.md) \| `null` | Editing cell store | [src/types/selection.ts:36](https://github.com/revolist/revogrid/blob/60f69439a769536c61ed98c75e87e11124ee6c9c/src/types/selection.ts#L36) |
| `focus` | [`Cell`](Interface.Cell.md) \| `null` | Focused cell coordinate | [src/types/selection.ts:32](https://github.com/revolist/revogrid/blob/60f69439a769536c61ed98c75e87e11124ee6c9c/src/types/selection.ts#L32) |
| `lastCell` | [`Cell`](Interface.Cell.md) \| `null` | Last cell which was focused | [src/types/selection.ts:40](https://github.com/revolist/revogrid/blob/60f69439a769536c61ed98c75e87e11124ee6c9c/src/types/selection.ts#L40) |
| `nextFocus` | [`Cell`](Interface.Cell.md) \| `null` | Next cell to focus | [src/types/selection.ts:44](https://github.com/revolist/revogrid/blob/60f69439a769536c61ed98c75e87e11124ee6c9c/src/types/selection.ts#L44) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | - | [src/types/selection.ts:20](https://github.com/revolist/revogrid/blob/60f69439a769536c61ed98c75e87e11124ee6c9c/src/types/selection.ts#L20) |
| `tempRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | Temporary range selection area | [src/types/selection.ts:24](https://github.com/revolist/revogrid/blob/60f69439a769536c61ed98c75e87e11124ee6c9c/src/types/selection.ts#L24) |
| `tempRangeType` | `string` \| `null` | Type of the temporary range selection | [src/types/selection.ts:28](https://github.com/revolist/revogrid/blob/60f69439a769536c61ed98c75e87e11124ee6c9c/src/types/selection.ts#L28) |

## Defined in

[src/types/selection.ts:19](https://github.com/revolist/revogrid/blob/60f69439a769536c61ed98c75e87e11124ee6c9c/src/types/selection.ts#L19)
