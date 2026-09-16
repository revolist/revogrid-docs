[RevoGrid Documentation v4.27.11](README.md) / SortingColumnOrder

# Type Alias: SortingColumnOrder

```ts
type SortingColumnOrder: ColumnProp[];
```

Active sorting priority in click/config insertion order.

This is stored separately from `SortingOrder` because JavaScript object keys
that look like integers are enumerated in numeric order, not insertion order.

## Defined in

[src/plugins/sorting/sorting.types.ts:36](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/plugins/sorting/sorting.types.ts#L36)
