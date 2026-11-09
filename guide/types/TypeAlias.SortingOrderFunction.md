[RevoGrid Documentation v4.31.4](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/b3d9880a0035c924499cf91e20d48823fa9d5faa/src/plugins/sorting/sorting.types.ts#L13)
