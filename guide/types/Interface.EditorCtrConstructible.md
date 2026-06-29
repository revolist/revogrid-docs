[RevoGrid Documentation v4.23.19](README.md) / EditorCtrConstructible

# Interface: EditorCtrConstructible

Editor component constructible class

## Constructors

### new EditorCtrConstructible()

```ts
new EditorCtrConstructible(
   column: ColumnDataSchemaModel<DataType<any, ColumnProp>, ColumnRegular<ColumnProp, DataType<any, ColumnProp>>, ColumnProp>, 
   save: (value: any, preventFocus?: boolean) => void, 
   close: (focusNext?: boolean) => void): EditorBase
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`ColumnProp`](TypeAlias.ColumnProp.md)\> |
| `save` | (`value`: `any`, `preventFocus`?: `boolean`) => `void` |
| `close` | (`focusNext`?: `boolean`) => `void` |

#### Returns

[`EditorBase`](Interface.EditorBase.md)

#### Defined in

[src/types/selection.ts:198](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/selection.ts#L198)
