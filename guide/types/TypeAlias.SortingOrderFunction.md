[RevoGrid Documentation v4.31.0](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/5f0ca90a7ec9397a6b530ff404c0b3ff06e39076/src/plugins/sorting/sorting.types.ts#L13)
