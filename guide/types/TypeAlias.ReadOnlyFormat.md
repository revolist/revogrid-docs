[@revolist/revogrid](README.md) / ReadOnlyFormat

# Type Alias: ReadOnlyFormat

```ts
type ReadOnlyFormat: boolean | (params: ColumnDataSchemaModel) => boolean;
```

The ReadOnlyFormat type is a boolean value or a function that takes ColumnDataSchemaModel
as a parameter and returns a boolean value.

If it is a boolean value, it represents whether the cell in question is read-only.
If it is a function, it returns whether the cell in question is read-only based on the provided
ColumnDataSchemaModel.

## Defined in

[src/types/interfaces.ts:79](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/interfaces.ts#L79)
