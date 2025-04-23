[RevoGrid Documentation v4.15.6](README.md) / DSourceState

# Type Alias: DSourceState\<T1, T2\>

```ts
type DSourceState<T1, T2>: DataSourceState<T1, T2> & {
  groupingCustomRenderer: GroupLabelTemplateFunc | null;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `groupingCustomRenderer` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) \| `null` | [src/store/dataSource/data.store.ts:33](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/store/dataSource/data.store.ts#L33) |

## Type Parameters

| Type Parameter |
| ------ |
| `T1` *extends* [`GDataType`](TypeAlias.GDataType.md) |
| `T2` *extends* [`GDimension`](TypeAlias.GDimension.md) |

## Defined in

[src/store/dataSource/data.store.ts:29](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/store/dataSource/data.store.ts#L29)
