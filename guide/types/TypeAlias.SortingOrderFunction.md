[RevoGrid Documentation v4.23.15](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/plugins/sorting/sorting.types.ts#L13)
