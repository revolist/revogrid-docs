[RevoGrid Documentation v4.27.11](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/plugins/sorting/sorting.types.ts#L13)
