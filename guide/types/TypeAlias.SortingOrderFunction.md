[RevoGrid Documentation v4.27.6](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/sorting/sorting.types.ts#L13)
