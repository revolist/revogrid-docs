[RevoGrid Documentation v4.29.0](README.md) / SortingColumnOrder

# Type Alias: SortingColumnOrder

```ts
type SortingColumnOrder: ColumnProp[];
```

Active sorting priority in click/config insertion order.

This is stored separately from `SortingOrder` because JavaScript object keys
that look like integers are enumerated in numeric order, not insertion order.

## Defined in

[src/plugins/sorting/sorting.types.ts:36](https://github.com/revolist/revogrid/blob/9827a26b6eac72857b5b257738fc44efe7783da3/src/plugins/sorting/sorting.types.ts#L36)
