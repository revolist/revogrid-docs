[RevoGrid Documentation v4.23.1](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/ecd87cafef00335964bf62b5550ca31914bb6ae2/src/plugins/sorting/sorting.types.ts#L13)
