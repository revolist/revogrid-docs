[RevoGrid Documentation v4.13.3](README.md) / BeforeRowRenderEvent

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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:769](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L769) |
| `item` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the item being rendered. | - | [src/types/interfaces.ts:738](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L738) |
| `model` | `T` | Represents the data item being rendered. | - | [src/types/interfaces.ts:733](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L733) |
| `node` | [`VNode`](Interface.VNode.md) | Represents the node being rendered. | - | [src/types/interfaces.ts:743](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L743) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:764](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/types/interfaces.ts#L764) |
