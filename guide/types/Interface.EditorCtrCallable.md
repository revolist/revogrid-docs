[@revolist/revogrid](README.md) / EditorCtrCallable

# Interface: EditorCtrCallable()

```ts
interface EditorCtrCallable(
   column: ColumnDataSchemaModel, 
   save: (value: string, preventFocus?: boolean) => void, 
   close: (focusNext?: boolean) => void): EditorBase
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `column` | [`ColumnDataSchemaModel`](Type.ColumnDataSchemaModel.md) |
| `save` | (`value`: `string`, `preventFocus`?: `boolean`) => `void` |
| `close` | (`focusNext`?: `boolean`) => `void` |

## Returns

[`EditorBase`](Interface.EditorBase.md)

## Source

[src/types/selection.ts:106](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/selection.ts#L106)
