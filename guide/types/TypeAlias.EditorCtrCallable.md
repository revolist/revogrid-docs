[@revolist/revogrid](README.md) / EditorCtrCallable

# Type Alias: EditorCtrCallable()

```ts
type EditorCtrCallable: (column: ColumnDataSchemaModel, save: (value?: any, preventFocus?: boolean) => void, close: (focusNext?: boolean) => void) => EditorBase;
```

Editor component callable function

## Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) |
| `save` | (`value`?: `any`, `preventFocus`?: `boolean`) => `void` |
| `close` | (`focusNext`?: `boolean`) => `void` |

## Returns

[`EditorBase`](Interface.EditorBase.md)

## Defined in

[src/types/selection.ts:157](https://github.com/revolist/revogrid/blob/93978cbf92b3c4002586c5528517b1ce86d856d9/src/types/selection.ts#L157)
