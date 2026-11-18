[RevoGrid Documentation v4.31.5](README.md) / SortingOrderFunction

# Type Alias: SortingOrderFunction

```ts
type SortingOrderFunction: Record<ColumnProp, CellCompareFunc | undefined>;
```

Comparator functions indexed by column property.

Undefined comparator entries are treated as inactive sorting entries.

## Defined in

[src/plugins/sorting/sorting.types.ts:13](https://github.com/revolist/revogrid/blob/e9c07f63dbf4f45ec2f24fd771a247f1a20d1802/src/plugins/sorting/sorting.types.ts#L13)
