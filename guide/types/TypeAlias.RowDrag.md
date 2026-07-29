[RevoGrid Documentation v4.24.1](README.md) / RowDrag

# Type Alias: RowDrag\<TModel, TColumn\>

```ts
type RowDrag<TModel, TColumn>: boolean | (params: ColumnDataSchemaModel<TModel, TColumn>) => boolean;
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |
| `TColumn` *extends* [`ColumnRegular`](Interface.ColumnRegular.md) | [`ColumnRegular`](Interface.ColumnRegular.md) |

## Defined in

[src/types/interfaces.ts:107](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/types/interfaces.ts#L107)
