[RevoGrid Documentation v4.23.16](README.md) / ReadOnlyFormat

# Type Alias: ReadOnlyFormat\<TModel, TColumn\>

```ts
type ReadOnlyFormat<TModel, TColumn>: boolean | (params: ColumnDataSchemaModel<TModel, TColumn>) => boolean;
```

The ReadOnlyFormat type is a boolean value or a function that takes ColumnDataSchemaModel
as a parameter and returns a boolean value.

If it is a boolean value, it represents whether the cell in question is read-only.
If it is a function, it returns whether the cell in question is read-only based on the provided
ColumnDataSchemaModel.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |
| `TColumn` *extends* [`ColumnRegular`](Interface.ColumnRegular.md) | [`ColumnRegular`](Interface.ColumnRegular.md) |

## Defined in

[src/types/interfaces.ts:101](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/types/interfaces.ts#L101)
