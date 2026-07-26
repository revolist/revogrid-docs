[RevoGrid Documentation v4.23.24](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/378ffaf8d0c296fdd666895c8f50ce7cb8d43e36/src/plugins/sorting/sorting.types.ts#L13)
