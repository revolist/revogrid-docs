[RevoGrid Documentation v4.27.8](README.md) / EditorCtrCallable

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

[src/types/selection.ts:187](https://github.com/revolist/revogrid/blob/eab8bb4b11fd25779732f8d09f424d108c801b86/src/types/selection.ts#L187)
