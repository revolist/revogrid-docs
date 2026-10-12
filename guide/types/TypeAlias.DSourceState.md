[RevoGrid Documentation v4.28.3](README.md) / DSourceState

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
| `groupingCellRenderer` | [`GroupCellTemplateFunc`](TypeAlias.GroupCellTemplateFunc.md) \| `null` | [src/store/dataSource/data.store.ts:42](https://github.com/revolist/revogrid/blob/237f5d7f5379065aebb85b7a81753679e1b45365/src/store/dataSource/data.store.ts#L42) |
| `groupingCustomRenderer` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) \| `null` | [src/store/dataSource/data.store.ts:41](https://github.com/revolist/revogrid/blob/237f5d7f5379065aebb85b7a81753679e1b45365/src/store/dataSource/data.store.ts#L41) |

## Type Parameters

| Type Parameter |
| ------ |
| `T1` *extends* [`GDataType`](TypeAlias.GDataType.md) |
| `T2` *extends* [`GDimension`](TypeAlias.GDimension.md) |

## Defined in

[src/store/dataSource/data.store.ts:37](https://github.com/revolist/revogrid/blob/237f5d7f5379065aebb85b7a81753679e1b45365/src/store/dataSource/data.store.ts#L37)
