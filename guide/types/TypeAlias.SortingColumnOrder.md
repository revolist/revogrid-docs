[RevoGrid Documentation v4.23.15](README.md) / SortingColumnOrder

# Type Alias: SortingColumnOrder

```ts
type SortingColumnOrder: ColumnProp[];
```

Active sorting priority in click/config insertion order.

This is stored separately from `SortingOrder` because JavaScript object keys
that look like integers are enumerated in numeric order, not insertion order.

## Defined in

[src/plugins/sorting/sorting.types.ts:36](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/plugins/sorting/sorting.types.ts#L36)
