[RevoGrid Documentation v4.26.1](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/plugins/sorting/sorting.types.ts#L13)
