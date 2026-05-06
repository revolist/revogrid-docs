[RevoGrid Documentation v4.21.7](README.md) / DragStartEvent

# Interface: DragStartEvent\<TModel, TColumn\>

Represents the event object that is emitted when the drag operation starts.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |
| `TColumn` *extends* [`ColumnRegular`](Interface.ColumnRegular.md) | [`ColumnRegular`](Interface.ColumnRegular.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `model` | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)\<`TModel`, `TColumn`, `TColumn`\[`"prop"`\]\> | Represents the model of the column being dragged. | [src/types/interfaces.ts:746](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L746) |
| `originalEvent` | `MouseEvent` | Represents the original mouse event that triggered the drag operation. | [src/types/interfaces.ts:741](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L741) |
