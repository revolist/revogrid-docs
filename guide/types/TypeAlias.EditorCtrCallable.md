[RevoGrid Documentation v4.22.1](README.md) / EditorCtrCallable

# Type Alias: EditorCtrCallable()

```ts
type EditorCtrCallable: (column: ColumnDataSchemaModel<DataType<any, ColumnProp>, ColumnRegular<ColumnProp, DataType<any, ColumnProp>>, ColumnProp>, save: (value?: any, preventFocus?: boolean) => void, close: (focusNext?: boolean) => void) => EditorBase;
```

Editor component callable function

## Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`ColumnProp`](TypeAlias.ColumnProp.md)\> |
| `save` | (`value`?: `any`, `preventFocus`?: `boolean`) => `void` |
| `close` | (`focusNext`?: `boolean`) => `void` |

## Returns

[`EditorBase`](Interface.EditorBase.md)

## Defined in

[src/types/selection.ts:169](https://github.com/revolist/revogrid/blob/bce42ab6540458f2c36ae8753100657c474422a3/src/types/selection.ts#L169)
