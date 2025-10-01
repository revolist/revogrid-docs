[RevoGrid Documentation v4.17.3](README.md) / ReadOnlyFormat

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

[src/types/interfaces.ts:88](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/types/interfaces.ts#L88)
