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

[src/types/selection.ts:114](https://github.com/revolist/revogrid/blob/4056bfa6a410a4e819b4e23d2047ed6d5d60c1ea/src/types/selection.ts#L114)
