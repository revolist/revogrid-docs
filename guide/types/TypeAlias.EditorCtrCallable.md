[RevoGrid Documentation v4.26.0](README.md) / EditorCtrCallable

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

[src/types/selection.ts:187](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/types/selection.ts#L187)
