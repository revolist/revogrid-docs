[@revolist/revogrid](README.md) / EditorCtrCallable

# Interface: EditorCtrCallable()

Editor component callable function

```ts
interface EditorCtrCallable(
   column: ColumnDataSchemaModel, 
   save: (value: string, preventFocus?: boolean) => void, 
   close: (focusNext?: boolean) => void): EditorBase
```

Editor component callable function

## Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) |
| `save` | (`value`: `string`, `preventFocus`?: `boolean`) => `void` |
| `close` | (`focusNext`?: `boolean`) => `void` |

## Returns

[`EditorBase`](Interface.EditorBase.md)

## Defined in

[src/types/selection.ts:127](https://github.com/revolist/revogrid/blob/32c6316d328fcc561520e19c2a4b987d1e8a85d2/src/types/selection.ts#L127)
