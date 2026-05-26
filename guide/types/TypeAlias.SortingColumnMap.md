[RevoGrid Documentation v4.23.0](README.md) / SortingColumnMap

# Type Alias: SortingColumnMap

```ts
type SortingColumnMap: Record<ColumnProp, Partial<ColumnRegular> | undefined>;
```

Column metadata indexed by column property.

This is an internal companion map for `SortingOrderFunction`. It lets the
sorting helper detect the default comparer path without mutating
`CellCompareFunc` instances or changing the public comparator contract.

## Defined in

[src/plugins/sorting/sorting.types.ts:25](https://github.com/revolist/revogrid/blob/98dd59e63a465ae157bf91fcd65f36f501e77722/src/plugins/sorting/sorting.types.ts#L25)
