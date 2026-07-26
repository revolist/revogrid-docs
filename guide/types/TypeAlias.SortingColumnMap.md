[RevoGrid Documentation v4.23.23](README.md) / SortingColumnMap

# Type Alias: SortingColumnMap

```ts
type SortingColumnMap: Record<ColumnProp, Partial<ColumnRegular> | undefined>;
```

Column metadata indexed by column property.

This is an internal companion map for `SortingOrderFunction`. It lets the
sorting helper detect the default comparer path without mutating
`CellCompareFunc` instances or changing the public comparator contract.

## Defined in

[src/plugins/sorting/sorting.types.ts:25](https://github.com/revolist/revogrid/blob/d86bc879402becda10cf23ab9a60c0932f7589d3/src/plugins/sorting/sorting.types.ts#L25)
