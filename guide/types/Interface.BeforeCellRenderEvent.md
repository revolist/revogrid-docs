[RevoGrid Documentation v4.25.2](README.md) / BeforeCellRenderEvent

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:848](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L848) |
| `column` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the column being rendered. | - | [src/types/interfaces.ts:791](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L791) |
| `model` | `T` | Represents the model being rendered. | - | [src/types/interfaces.ts:801](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L801) |
| `row` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the row being rendered. | - | [src/types/interfaces.ts:796](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L796) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:843](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/types/interfaces.ts#L843) |
