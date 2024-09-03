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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:731](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/types/interfaces.ts#L731) |
| `item` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the item being rendered. | - | [src/types/interfaces.ts:700](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/types/interfaces.ts#L700) |
| `model` | `T` | Represents the data item being rendered. | - | [src/types/interfaces.ts:695](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/types/interfaces.ts#L695) |
| `node` | [`VNode`](Interface.VNode.md) | Represents the node being rendered. | - | [src/types/interfaces.ts:705](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/types/interfaces.ts#L705) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:726](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/types/interfaces.ts#L726) |
