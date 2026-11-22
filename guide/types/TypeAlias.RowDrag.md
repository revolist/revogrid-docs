[RevoGrid Documentation v4.31.8](README.md) / RowDrag

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

[src/types/interfaces.ts:108](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/types/interfaces.ts#L108)
