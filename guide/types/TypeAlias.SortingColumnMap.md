[RevoGrid Documentation v4.29.1](README.md) / SortingColumnMap

# Type Alias: SortingColumnMap

```ts
type SortingColumnMap: Record<ColumnProp, Partial<ColumnRegular> | undefined>;
```

Column metadata indexed by column property.

This is an internal companion map for `SortingOrderFunction`. It lets the
sorting helper detect the default comparer path without mutating
`CellCompareFunc` instances or changing the public comparator contract.

## Defined in

[src/plugins/sorting/sorting.types.ts:25](https://github.com/revolist/revogrid/blob/1f7c482b96aad79e359f1050bd833540d262e156/src/plugins/sorting/sorting.types.ts#L25)
