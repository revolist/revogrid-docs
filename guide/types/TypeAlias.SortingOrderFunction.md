[RevoGrid Documentation v4.23.12](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/plugins/sorting/sorting.types.ts#L13)
