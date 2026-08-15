[RevoGrid Documentation v4.25.2](README.md) / DSourceState

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
| `groupingCellRenderer` | [`GroupCellTemplateFunc`](TypeAlias.GroupCellTemplateFunc.md) \| `null` | [src/store/dataSource/data.store.ts:37](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/store/dataSource/data.store.ts#L37) |
| `groupingCustomRenderer` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) \| `null` | [src/store/dataSource/data.store.ts:36](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/store/dataSource/data.store.ts#L36) |

## Type Parameters

| Type Parameter |
| ------ |
| `T1` *extends* [`GDataType`](TypeAlias.GDataType.md) |
| `T2` *extends* [`GDimension`](TypeAlias.GDimension.md) |

## Defined in

[src/store/dataSource/data.store.ts:32](https://github.com/revolist/revogrid/blob/fca5b14ac1357d688bed3bd16568bc5e98622ae8/src/store/dataSource/data.store.ts#L32)
