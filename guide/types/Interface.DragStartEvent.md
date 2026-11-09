[RevoGrid Documentation v4.31.4](README.md) / DragStartEvent

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
| `model` | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)\<`TModel`, `TColumn`, `TColumn`\[`"prop"`\]\> | Represents the model of the column being dragged. | [src/types/interfaces.ts:780](https://github.com/revolist/revogrid/blob/b3d9880a0035c924499cf91e20d48823fa9d5faa/src/types/interfaces.ts#L780) |
| `originalEvent` | `MouseEvent` | Represents the original mouse event that triggered the drag operation. | [src/types/interfaces.ts:775](https://github.com/revolist/revogrid/blob/b3d9880a0035c924499cf91e20d48823fa9d5faa/src/types/interfaces.ts#L775) |
