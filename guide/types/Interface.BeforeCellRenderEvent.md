[RevoGrid Documentation v4.19.1](README.md) / BeforeCellRenderEvent

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:788](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/types/interfaces.ts#L788) |
| `column` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the column being rendered. | - | [src/types/interfaces.ts:731](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/types/interfaces.ts#L731) |
| `model` | `T` | Represents the model being rendered. | - | [src/types/interfaces.ts:741](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/types/interfaces.ts#L741) |
| `row` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the row being rendered. | - | [src/types/interfaces.ts:736](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/types/interfaces.ts#L736) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:783](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/types/interfaces.ts#L783) |
