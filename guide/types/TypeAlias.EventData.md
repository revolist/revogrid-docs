[RevoGrid Documentation v4.12.2](README.md) / EventData

# Type Alias: EventData

```ts
type EventData: {
  cols: DimensionSettingsState;
  edit: EditCellStore | null;
  el: HTMLElement;
  focus: Cell | null;
  lastCell: Cell;
  range: RangeArea | null;
  rows: DimensionSettingsState;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `cols` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | [src/components/overlay/selection.utils.ts:24](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/components/overlay/selection.utils.ts#L24) |
| `edit` | [`EditCellStore`](Interface.EditCellStore.md) \| `null` | [src/components/overlay/selection.utils.ts:28](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/components/overlay/selection.utils.ts#L28) |
| `el` | `HTMLElement` | [src/components/overlay/selection.utils.ts:22](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/components/overlay/selection.utils.ts#L22) |
| `focus` | [`Cell`](Interface.Cell.md) \| `null` | [src/components/overlay/selection.utils.ts:26](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/components/overlay/selection.utils.ts#L26) |
| `lastCell` | [`Cell`](Interface.Cell.md) | [src/components/overlay/selection.utils.ts:25](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/components/overlay/selection.utils.ts#L25) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/components/overlay/selection.utils.ts:27](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/components/overlay/selection.utils.ts#L27) |
| `rows` | [`DimensionSettingsState`](Interface.DimensionSettingsState.md) | [src/components/overlay/selection.utils.ts:23](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/components/overlay/selection.utils.ts#L23) |

## Defined in

[src/components/overlay/selection.utils.ts:21](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/components/overlay/selection.utils.ts#L21)
