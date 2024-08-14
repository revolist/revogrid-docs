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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:738](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L738) |
| `column` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the column being rendered. | - | [src/types/interfaces.ts:681](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L681) |
| `model` | `T` | Represents the model being rendered. | - | [src/types/interfaces.ts:691](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L691) |
| `row` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the row being rendered. | - | [src/types/interfaces.ts:686](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L686) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:733](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L733) |
