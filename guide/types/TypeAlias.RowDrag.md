[RevoGrid Documentation v4.23.2](README.md) / RowDrag

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

[src/types/interfaces.ts:107](https://github.com/revolist/revogrid/blob/2ab297309bca72a9ee6de7e26f5f41940fbe0414/src/types/interfaces.ts#L107)
