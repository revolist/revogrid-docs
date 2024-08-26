[@revolist/revogrid](README.md) / DSourceState

# Type Alias: DSourceState\<T1, T2\>

```ts
type DSourceState<T1, T2>: DataSourceState<T1, T2> & {
  groupingCustomRenderer: GroupLabelTemplateFunc | null;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `groupingCustomRenderer` | `GroupLabelTemplateFunc` \| `null` | [src/store/dataSource/data.store.ts:32](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/store/dataSource/data.store.ts#L32) |

## Type Parameters

| Type Parameter |
| ------ |
| `T1` *extends* [`GDataType`](TypeAlias.GDataType.md) |
| `T2` *extends* [`GDimension`](TypeAlias.GDimension.md) |

## Defined in

[src/store/dataSource/data.store.ts:28](https://github.com/revolist/revogrid/blob/c4e80f786890231c76aca88d327b090657d3fbb9/src/store/dataSource/data.store.ts#L28)
