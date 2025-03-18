[RevoGrid Documentation v4.13.5](README.md) / ReadOnlyFormat

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

[src/types/interfaces.ts:86](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/interfaces.ts#L86)
