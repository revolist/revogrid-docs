[RevoGrid Documentation v4.25.2](README.md) / SortingColumnOrder

# Type Alias: SortingColumnOrder

```ts
type SortingColumnOrder: ColumnProp[];
```

Active sorting priority in click/config insertion order.

This is stored separately from `SortingOrder` because JavaScript object keys
that look like integers are enumerated in numeric order, not insertion order.

## Defined in

[src/plugins/sorting/sorting.types.ts:36](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/plugins/sorting/sorting.types.ts#L36)
