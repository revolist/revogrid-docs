[RevoGrid Documentation v4.25.2](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/sorting/sorting.types.ts#L13)
