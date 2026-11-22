[RevoGrid Documentation v4.31.8](README.md) / SortingColumnMap

# Type Alias: SortingColumnMap

```ts
type SortingColumnMap: Record<ColumnProp, Partial<ColumnRegular> | undefined>;
```

Column metadata indexed by column property.

This is an internal companion map for `SortingOrderFunction`. It lets the
sorting helper detect the default comparer path without mutating
`CellCompareFunc` instances or changing the public comparator contract.

## Defined in

[src/plugins/sorting/sorting.types.ts:25](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/sorting/sorting.types.ts#L25)
