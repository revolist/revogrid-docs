[RevoGrid Documentation v4.31.1](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/e5ea71da84a5bfcacfb74d2f230cdffaebb47d28/src/plugins/sorting/sorting.types.ts#L13)
