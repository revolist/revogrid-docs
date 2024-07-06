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

[src/types/selection.ts:106](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/types/selection.ts#L106)
