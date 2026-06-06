[RevoGrid Documentation v4.23.10](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/90b91787366997fc2dd0d419e5fc00e9e9b74f80/src/plugins/sorting/sorting.types.ts#L13)
