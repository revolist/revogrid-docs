[RevoGrid Documentation v4.29.0](README.md) / DSourceState

# Type Alias: DSourceState\<T1, T2\>

```ts
type DSourceState<T1, T2>: DataSourceState<T1, T2> & {
  groupingCellRenderer: GroupCellTemplateFunc | null;
  groupingCustomRenderer: GroupLabelTemplateFunc | null;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `groupingCellRenderer` | [`GroupCellTemplateFunc`](TypeAlias.GroupCellTemplateFunc.md) \| `null` | [src/store/dataSource/data.store.ts:42](https://github.com/revolist/revogrid/blob/9827a26b6eac72857b5b257738fc44efe7783da3/src/store/dataSource/data.store.ts#L42) |
| `groupingCustomRenderer` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) \| `null` | [src/store/dataSource/data.store.ts:41](https://github.com/revolist/revogrid/blob/9827a26b6eac72857b5b257738fc44efe7783da3/src/store/dataSource/data.store.ts#L41) |

## Type Parameters

| Type Parameter |
| ------ |
| `T1` *extends* [`GDataType`](TypeAlias.GDataType.md) |
| `T2` *extends* [`GDimension`](TypeAlias.GDimension.md) |

## Defined in

[src/store/dataSource/data.store.ts:37](https://github.com/revolist/revogrid/blob/9827a26b6eac72857b5b257738fc44efe7783da3/src/store/dataSource/data.store.ts#L37)
