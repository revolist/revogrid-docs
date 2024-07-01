[@revolist/revogrid](README.md) / EditorCtrConstructible

# Interface: EditorCtrConstructible

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

[src/types/selection.ts:114](https://github.com/revolist/revogrid/blob/786bfc578aeb724125d022c69d878eb830c54a23/src/types/selection.ts#L114)
