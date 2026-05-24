[RevoGrid Documentation v4.21.11](README.md) / RowDragStartDetails

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
| `cell` | [`Cell`](Interface.Cell.md) | [src/types/selection.ts:112](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/selection.ts#L112) |
| `event` | `MouseEvent` | [src/types/selection.ts:115](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/selection.ts#L115) |
| `model` | `TModel` | [src/types/selection.ts:117](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/selection.ts#L117) |
| `pos` | [`PositionItem`](Interface.PositionItem.md) | [src/types/selection.ts:114](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/selection.ts#L114) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | [src/types/selection.ts:116](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/selection.ts#L116) |
| `text` | `string` | [src/types/selection.ts:113](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/selection.ts#L113) |

## Defined in

[src/types/selection.ts:111](https://github.com/revolist/revogrid/blob/49e5e706d3314aa8ce35738e7006a9b755b0e7f0/src/types/selection.ts#L111)
