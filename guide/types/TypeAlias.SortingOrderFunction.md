[RevoGrid Documentation v4.23.7](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/790a26bfcfb8e83715d2bd150c6eae6ffbcedf9d/src/plugins/sorting/sorting.types.ts#L13)
