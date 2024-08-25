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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:730](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L730) |
| `column` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the column being rendered. | - | [src/types/interfaces.ts:673](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L673) |
| `model` | `T` | Represents the model being rendered. | - | [src/types/interfaces.ts:683](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L683) |
| `row` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the row being rendered. | - | [src/types/interfaces.ts:678](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L678) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:725](https://github.com/revolist/revogrid/blob/703fa47ec13d35676d07f3192b2741384647a863/src/types/interfaces.ts#L725) |
