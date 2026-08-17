[RevoGrid Documentation v4.26.0](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/plugins/sorting/sorting.types.ts#L13)
