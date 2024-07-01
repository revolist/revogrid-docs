[@revolist/revogrid](README.md) / EditorCtrCallable

# Interface: EditorCtrCallable()

```ts
interface EditorCtrCallable(
   column: ColumnDataSchemaModel, 
   save: (value: string, preventFocus?: boolean) => void, 
   close: (focusNext?: boolean) => void): EditorBase
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) |
| `save` | (`value`: `string`, `preventFocus`?: `boolean`) => `void` |
| `close` | (`focusNext`?: `boolean`) => `void` |

## Returns

[`EditorBase`](Interface.EditorBase.md)

## Defined in

[src/types/selection.ts:106](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/types/selection.ts#L106)
