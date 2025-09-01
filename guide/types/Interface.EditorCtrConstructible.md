[RevoGrid Documentation v4.17.0](README.md) / EditorCtrConstructible

# Interface: EditorCtrConstructible

Editor component constructible class

## Constructors

### new EditorCtrConstructible()

```ts
new EditorCtrConstructible(
   column: ColumnDataSchemaModel, 
   save: (value: any, preventFocus?: boolean) => void, 
   close: (focusNext?: boolean) => void): EditorBase
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `column` | [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md) |
| `save` | (`value`: `any`, `preventFocus`?: `boolean`) => `void` |
| `close` | (`focusNext`?: `boolean`) => `void` |

#### Returns

[`EditorBase`](Interface.EditorBase.md)

#### Defined in

[src/types/selection.ts:174](https://github.com/revolist/revogrid/blob/4911b401b4ed4a1ad4f684e9c38c48b1c7ad2346/src/types/selection.ts#L174)
