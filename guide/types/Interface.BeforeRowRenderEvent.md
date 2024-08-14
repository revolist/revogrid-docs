[@revolist/revogrid](README.md) / BeforeRowRenderEvent

# Interface: BeforeRowRenderEvent\<T\>

Represents the event object that is emitted before row rendering.
It includes information about the dimension type, data item, item, and node.

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
| `item` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the item being rendered. | - | [src/types/interfaces.ts:707](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L707) |
| `model` | `T` | Represents the data item being rendered. | - | [src/types/interfaces.ts:702](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L702) |
| `node` | [`VNode`](Interface.VNode.md) | Represents the node being rendered. | - | [src/types/interfaces.ts:712](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L712) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:733](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/types/interfaces.ts#L733) |
