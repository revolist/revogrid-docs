[RevoGrid Documentation v4.27.6](README.md) / AfterSortingApplyEvent

# Type Alias: AfterSortingApplyEvent

```ts
type AfterSortingApplyEvent: {
  sorting: SortingOrder;
  sortingColumns: SortingColumnMap;
  sortingOrder: SortingColumnOrder;
  types: DimensionRows[];
};
```

Sorting information emitted after sorting is applied.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `sorting` | [`SortingOrder`](TypeAlias.SortingOrder.md) | Final active sorting order per column property. | [src/plugins/sorting/sorting.types.ts:55](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/sorting/sorting.types.ts#L55) |
| `sortingColumns` | [`SortingColumnMap`](TypeAlias.SortingColumnMap.md) | Column metadata indexed by sorted column property. | [src/plugins/sorting/sorting.types.ts:59](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/sorting/sorting.types.ts#L59) |
| `sortingOrder` | [`SortingColumnOrder`](TypeAlias.SortingColumnOrder.md) | Active sorting priority in click/config insertion order. | [src/plugins/sorting/sorting.types.ts:63](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/sorting/sorting.types.ts#L63) |
| `types` | [`DimensionRows`](TypeAlias.DimensionRows.md)[] | Row stores affected by the sorting run. | [src/plugins/sorting/sorting.types.ts:67](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/sorting/sorting.types.ts#L67) |

## Defined in

[src/plugins/sorting/sorting.types.ts:51](https://github.com/revolist/revogrid/blob/83088a5efb95df5d6b5a082ad10cadaa2bdcb42b/src/plugins/sorting/sorting.types.ts#L51)
