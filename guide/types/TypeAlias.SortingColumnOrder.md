[RevoGrid Documentation v4.27.0](README.md) / SortingColumnOrder

# Type Alias: SortingColumnOrder

```ts
type SortingColumnOrder: ColumnProp[];
```

Active sorting priority in click/config insertion order.

This is stored separately from `SortingOrder` because JavaScript object keys
that look like integers are enumerated in numeric order, not insertion order.

## Defined in

[src/plugins/sorting/sorting.types.ts:36](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/sorting/sorting.types.ts#L36)
