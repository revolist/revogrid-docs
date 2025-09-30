[RevoGrid Documentation v4.17.3](README.md) / EditorCtrConstructible

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

[src/types/selection.ts:175](https://github.com/revolist/revogrid/blob/3aa06b5b2b2375c31a2a8275a0aefcbc04de60c5/src/types/selection.ts#L175)
