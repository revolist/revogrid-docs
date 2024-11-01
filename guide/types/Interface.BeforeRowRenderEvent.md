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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:749](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/types/interfaces.ts#L749) |
| `item` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the item being rendered. | - | [src/types/interfaces.ts:718](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/types/interfaces.ts#L718) |
| `model` | `T` | Represents the data item being rendered. | - | [src/types/interfaces.ts:713](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/types/interfaces.ts#L713) |
| `node` | [`VNode`](Interface.VNode.md) | Represents the node being rendered. | - | [src/types/interfaces.ts:723](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/types/interfaces.ts#L723) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:744](https://github.com/revolist/revogrid/blob/ec98f5e49749ad8581a7f9ebef8e2f6167a106af/src/types/interfaces.ts#L744) |
