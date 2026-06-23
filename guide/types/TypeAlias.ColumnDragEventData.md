[RevoGrid Documentation v4.23.16](README.md) / ColumnDragEventData

# Type Alias: ColumnDragEventData

```ts
type ColumnDragEventData: {
  columns: ColumnRegular[];
  elRect: DOMRect;
  gridRect: DOMRect;
  order: number[];
  scrollOffset: number;
  type: DimensionCols;
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columns` | [`ColumnRegular`](Interface.ColumnRegular.md)[] | Reordered columns for the affected column viewport. | [src/plugins/moveColumn/column.drag.plugin.ts:57](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/moveColumn/column.drag.plugin.ts#L57) |
| `elRect` | `DOMRect` | - | [src/plugins/moveColumn/column.drag.plugin.ts:58](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/moveColumn/column.drag.plugin.ts#L58) |
| `gridRect` | `DOMRect` | - | [src/plugins/moveColumn/column.drag.plugin.ts:59](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/moveColumn/column.drag.plugin.ts#L59) |
| `order` | `number`[] | Physical column indexes in their current visual order. | [src/plugins/moveColumn/column.drag.plugin.ts:63](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/moveColumn/column.drag.plugin.ts#L63) |
| `scrollOffset` | `number` | - | [src/plugins/moveColumn/column.drag.plugin.ts:64](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/moveColumn/column.drag.plugin.ts#L64) |
| `type` | [`DimensionCols`](TypeAlias.DimensionCols.md) | - | [src/plugins/moveColumn/column.drag.plugin.ts:65](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/moveColumn/column.drag.plugin.ts#L65) |

## Defined in

[src/plugins/moveColumn/column.drag.plugin.ts:53](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/moveColumn/column.drag.plugin.ts#L53)
