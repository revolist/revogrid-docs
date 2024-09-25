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
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) | Represents the dimension type for columns. | [`AllDimensionType`](Interface.AllDimensionType.md).`colType` | [src/types/interfaces.ts:734](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/types/interfaces.ts#L734) |
| `item` | [`VirtualPositionItem`](Interface.VirtualPositionItem.md) | Represents the item being rendered. | - | [src/types/interfaces.ts:703](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/types/interfaces.ts#L703) |
| `model` | `T` | Represents the data item being rendered. | - | [src/types/interfaces.ts:698](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/types/interfaces.ts#L698) |
| `node` | [`VNode`](Interface.VNode.md) | Represents the node being rendered. | - | [src/types/interfaces.ts:708](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/types/interfaces.ts#L708) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | Represents the dimension type for rows. | [`AllDimensionType`](Interface.AllDimensionType.md).`rowType` | [src/types/interfaces.ts:729](https://github.com/revolist/revogrid/blob/33fdf87718e4421a1302a23338379f45f99055c0/src/types/interfaces.ts#L729) |
