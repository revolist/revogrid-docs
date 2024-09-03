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

[src/types/interfaces.ts:85](https://github.com/revolist/revogrid/blob/20b33a0db6e2f2e1c06bc58b03fe68189a928a64/src/types/interfaces.ts#L85)
