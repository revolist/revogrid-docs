[RevoGrid Documentation v4.27.9](README.md) / SortingColumnMap

# Type Alias: SortingColumnMap

```ts
type SortingColumnMap: Record<ColumnProp, Partial<ColumnRegular> | undefined>;
```

Column metadata indexed by column property.

This is an internal companion map for `SortingOrderFunction`. It lets the
sorting helper detect the default comparer path without mutating
`CellCompareFunc` instances or changing the public comparator contract.

## Defined in

[src/plugins/sorting/sorting.types.ts:25](https://github.com/revolist/revogrid/blob/454d5862c03c84c4e0967bdb49edf69110897611/src/plugins/sorting/sorting.types.ts#L25)
