[RevoGrid Documentation v4.13.2](README.md) / ReadOnlyFormat

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

[src/types/interfaces.ts:86](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/types/interfaces.ts#L86)
