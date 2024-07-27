[@revolist/revogrid](README.md) / EditorCtrConstructible

# Interface: EditorCtrConstructible

Editor component constructible class

## Constructors

### new EditorCtrConstructible()

```ts
new EditorCtrConstructible(
   column: ColumnDataSchemaModel, 
   save: (value: string, preventFocus?: boolean) => void, 
   close: (focusNext?: boolean) => void): EditorBase
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) |
| `save` | (`value`: `string`, `preventFocus`?: `boolean`) => `void` |
| `close` | (`focusNext`?: `boolean`) => `void` |

#### Returns

[`EditorBase`](Interface.EditorBase.md)

#### Defined in

[src/types/selection.ts:163](https://github.com/revolist/revogrid/blob/a849a2bedd405f9be6994ce2465b998f17fd214c/src/types/selection.ts#L163)
