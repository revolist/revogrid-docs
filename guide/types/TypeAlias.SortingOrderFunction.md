[RevoGrid Documentation v4.31.3](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/6b4ba162d7e1e59d273a181170ca4cef92eec123/src/plugins/sorting/sorting.types.ts#L13)
