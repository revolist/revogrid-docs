[RevoGrid Documentation v4.23.4](README.md) / PendingColumnFocusRestore

# Type Alias: PendingColumnFocusRestore

```ts
type PendingColumnFocusRestore: {
  colIndex: ColIndex;
  colType: DimensionCols;
  prevStoreX: ColIndex;
  prop: ColumnProp;
  rowIndex: RowIndex;
  rowType: DimensionRows;
};
```

Logical focus marker captured before column viewport ownership changes.
Used when a selected column is pinned/unpinned so focus can be restored by
column prop after the column moves between rgCol, colPinStart, or colPinEnd.

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `colIndex` | [`ColIndex`](TypeAlias.ColIndex.md) | [src/types/selection.ts:90](https://github.com/revolist/revogrid/blob/c2fda5674b1ac002b69cd436fd16b39afbcbc99d/src/types/selection.ts#L90) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | [src/types/selection.ts:89](https://github.com/revolist/revogrid/blob/c2fda5674b1ac002b69cd436fd16b39afbcbc99d/src/types/selection.ts#L89) |
| `prevStoreX` | [`ColIndex`](TypeAlias.ColIndex.md) | [src/types/selection.ts:91](https://github.com/revolist/revogrid/blob/c2fda5674b1ac002b69cd436fd16b39afbcbc99d/src/types/selection.ts#L91) |
| `prop` | [`ColumnProp`](TypeAlias.ColumnProp.md) | [src/types/selection.ts:88](https://github.com/revolist/revogrid/blob/c2fda5674b1ac002b69cd436fd16b39afbcbc99d/src/types/selection.ts#L88) |
| `rowIndex` | [`RowIndex`](TypeAlias.RowIndex.md) | [src/types/selection.ts:93](https://github.com/revolist/revogrid/blob/c2fda5674b1ac002b69cd436fd16b39afbcbc99d/src/types/selection.ts#L93) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | [src/types/selection.ts:92](https://github.com/revolist/revogrid/blob/c2fda5674b1ac002b69cd436fd16b39afbcbc99d/src/types/selection.ts#L92) |

## Defined in

[src/types/selection.ts:87](https://github.com/revolist/revogrid/blob/c2fda5674b1ac002b69cd436fd16b39afbcbc99d/src/types/selection.ts#L87)
