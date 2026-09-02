[RevoGrid Documentation v4.27.0](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/sorting/sorting.types.ts#L13)
