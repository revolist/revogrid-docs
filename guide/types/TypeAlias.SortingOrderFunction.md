[RevoGrid Documentation v4.23.9](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/7210be05d48d189d4cce2e41db0fe306da2f48fe/src/plugins/sorting/sorting.types.ts#L13)
