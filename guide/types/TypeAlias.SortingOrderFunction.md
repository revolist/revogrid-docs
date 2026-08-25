[RevoGrid Documentation v4.26.2](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/plugins/sorting/sorting.types.ts#L13)
