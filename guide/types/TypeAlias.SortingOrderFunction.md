[RevoGrid Documentation v4.23.4](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/c2fda5674b1ac002b69cd436fd16b39afbcbc99d/src/plugins/sorting/sorting.types.ts#L13)
