[RevoGrid Documentation v4.12.12](README.md) / BeforeCellRenderEvent

# Interface: BeforeCellRenderEvent\<T\>

Represents the event object that is emitted before cell rendering.
It includes information about the dimension type, column, row, and model.

## Extends

- [`AllDimensionType`](Interface.AllDimensionType.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:769](https://github.com/revolist/revogrid/blob/ecd92bead8bd3117a71a9fcab227f9b0f91c2edf/src/types/interfaces.ts#L769) |
| `column` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the column being rendered. | - | [src/types/interfaces.ts:712](https://github.com/revolist/revogrid/blob/ecd92bead8bd3117a71a9fcab227f9b0f91c2edf/src/types/interfaces.ts#L712) |
| `model` | `T` | Represents the model being rendered. | - | [src/types/interfaces.ts:722](https://github.com/revolist/revogrid/blob/ecd92bead8bd3117a71a9fcab227f9b0f91c2edf/src/types/interfaces.ts#L722) |
| `row` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the row being rendered. | - | [src/types/interfaces.ts:717](https://github.com/revolist/revogrid/blob/ecd92bead8bd3117a71a9fcab227f9b0f91c2edf/src/types/interfaces.ts#L717) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:764](https://github.com/revolist/revogrid/blob/ecd92bead8bd3117a71a9fcab227f9b0f91c2edf/src/types/interfaces.ts#L764) |
