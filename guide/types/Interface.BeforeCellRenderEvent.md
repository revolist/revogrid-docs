[RevoGrid Documentation v4.12.1](README.md) / BeforeCellRenderEvent

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:756](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L756) |
| `column` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the column being rendered. | - | [src/types/interfaces.ts:699](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L699) |
| `model` | `T` | Represents the model being rendered. | - | [src/types/interfaces.ts:709](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L709) |
| `row` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the row being rendered. | - | [src/types/interfaces.ts:704](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L704) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:751](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L751) |
