[@revolist/revogrid](README.md) / BeforeCellRenderEvent

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:731](https://github.com/revolist/revogrid/blob/a4b231d71029faeb28d2b2f5098e6a96aa320bc0/src/types/interfaces.ts#L731) |
| `column` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the column being rendered. | - | [src/types/interfaces.ts:674](https://github.com/revolist/revogrid/blob/a4b231d71029faeb28d2b2f5098e6a96aa320bc0/src/types/interfaces.ts#L674) |
| `model` | `T` | Represents the model being rendered. | - | [src/types/interfaces.ts:684](https://github.com/revolist/revogrid/blob/a4b231d71029faeb28d2b2f5098e6a96aa320bc0/src/types/interfaces.ts#L684) |
| `row` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the row being rendered. | - | [src/types/interfaces.ts:679](https://github.com/revolist/revogrid/blob/a4b231d71029faeb28d2b2f5098e6a96aa320bc0/src/types/interfaces.ts#L679) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:726](https://github.com/revolist/revogrid/blob/a4b231d71029faeb28d2b2f5098e6a96aa320bc0/src/types/interfaces.ts#L726) |
