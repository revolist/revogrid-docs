[@revolist/revogrid](README.md) / DSourceState

# Type alias: DSourceState\<T1, T2\>

```ts
type DSourceState<T1, T2>: DataSourceState<T1, T2> & {
  groupingCustomRenderer: GroupLabelTemplateFunc | null;
};
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `groupingCustomRenderer` | `GroupLabelTemplateFunc` \| `null` |

## Type parameters

| Type parameter |
| :------ |
| `T1` *extends* [`GDataType`](Type.GDataType.md) |
| `T2` *extends* [`GDimension`](Type.GDimension.md) |

## Source

[src/store/dataSource/data.store.ts:29](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/store/dataSource/data.store.ts#L29)
