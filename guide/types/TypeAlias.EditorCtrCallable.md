[RevoGrid Documentation v4.16.0](README.md) / EditorCtrCallable

# Type Alias: EditorCtrCallable()

```ts
type EditorCtrCallable: (column: ColumnDataSchemaModel, save: (value?: any, preventFocus?: boolean) => void, close: (focusNext?: boolean) => void) => EditorBase;
```

Editor component callable function

## Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md) |
| `save` | (`value`?: `any`, `preventFocus`?: `boolean`) => `void` |
| `close` | (`focusNext`?: `boolean`) => `void` |

## Returns

[`EditorBase`](Interface.EditorBase.md)

## Defined in

[src/types/selection.ts:163](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/types/selection.ts#L163)
