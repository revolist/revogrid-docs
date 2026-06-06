[RevoGrid Documentation v4.23.12](README.md) / RowDragStartDetails

# Type Alias: RowDragStartDetails\<TModel\>

```ts
type RowDragStartDetails<TModel>: {
  cell: Cell;
  event: MouseEvent;
  model: TModel;
  pos: PositionItem;
  rowType: DimensionRows;
  text: string;
};
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `cell` | [`Cell`](Interface.Cell.md) | [src/types/selection.ts:126](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L126) |
| `event` | `MouseEvent` | [src/types/selection.ts:129](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L129) |
| `model` | `TModel` | [src/types/selection.ts:131](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L131) |
| `pos` | [`PositionItem`](Interface.PositionItem.md) | [src/types/selection.ts:128](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L128) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | [src/types/selection.ts:130](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L130) |
| `text` | `string` | [src/types/selection.ts:127](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L127) |

## Defined in

[src/types/selection.ts:125](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L125)
