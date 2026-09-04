[RevoGrid Documentation v4.27.6](README.md) / RowResizeEventDetail

# Type Alias: RowResizeEventDetail

```ts
type RowResizeEventDetail: {
  index: number;
  indexes: number[];
  originalEvent: PointerEvent;
  previousSizes: ViewSettingSizeProp;
  rowType: DimensionRows;
  size: number;
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `index` | `number` | Boundary row whose handle started the gesture. | [src/plugins/row-resize/row-resize.types.ts:22](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/row-resize/row-resize.types.ts#L22) |
| `indexes` | `number`[] | All virtual row indexes affected by this gesture. | [src/plugins/row-resize/row-resize.types.ts:24](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/row-resize/row-resize.types.ts#L24) |
| `originalEvent` | `PointerEvent` | Most recent pointer event associated with this lifecycle event. | [src/plugins/row-resize/row-resize.types.ts:30](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/row-resize/row-resize.types.ts#L30) |
| `previousSizes` | [`ViewSettingSizeProp`](TypeAlias.ViewSettingSizeProp.md) | Heights at the start of the gesture. | [src/plugins/row-resize/row-resize.types.ts:28](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/row-resize/row-resize.types.ts#L28) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Row dimension containing the resized rows. | [src/plugins/row-resize/row-resize.types.ts:20](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/row-resize/row-resize.types.ts#L20) |
| `size` | `number` | Current absolute height applied to every affected row. | [src/plugins/row-resize/row-resize.types.ts:26](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/row-resize/row-resize.types.ts#L26) |

## Defined in

[src/plugins/row-resize/row-resize.types.ts:18](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/row-resize/row-resize.types.ts#L18)
