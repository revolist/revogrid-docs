[RevoGrid Documentation v4.23.15](README.md) / DragStartEvent

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
| `model` | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)\<`TModel`, `TColumn`, `TColumn`\[`"prop"`\]\> | Represents the model of the column being dragged. | [src/types/interfaces.ts:777](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/types/interfaces.ts#L777) |
| `originalEvent` | `MouseEvent` | Represents the original mouse event that triggered the drag operation. | [src/types/interfaces.ts:772](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/types/interfaces.ts#L772) |
