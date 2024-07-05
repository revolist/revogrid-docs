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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:727](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L727) |
| `column` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the column being rendered. | - | [src/types/interfaces.ts:670](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L670) |
| `model` | `T` | Represents the model being rendered. | - | [src/types/interfaces.ts:680](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L680) |
| `row` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the row being rendered. | - | [src/types/interfaces.ts:675](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L675) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:722](https://github.com/revolist/revogrid/blob/832a695f4c49c94511535fe3aac75fac9a36ad76/src/types/interfaces.ts#L722) |
