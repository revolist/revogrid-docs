[@revolist/revogrid](README.md) / Providers

# Type alias: Providers\<T\>

```ts
type Providers<T>: {
  data: Observable<DataSourceState<any, any>> | ColumnRegular[];
  dimension: Observable<DimensionSettingsState>;
  readonly: boolean;
  selection: Observable<SelectionStoreState>;
  type: T;
  viewport: Observable<ViewportState>;
};
```

Providers for grid which are going to be injected into each cell template

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | [`DimensionRows`](Type.DimensionRows.md) |

## Type declaration

| Member | Type |
| :------ | :------ |
| `data` | [`Observable`](Type.Observable.md)\<[`DataSourceState`](Type.DataSourceState.md)\<`any`, `any`\>\> \| [`ColumnRegular`](Interface.ColumnRegular.md)[] |
| `dimension` | [`Observable`](Type.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> |
| `readonly` | `boolean` |
| `selection` | [`Observable`](Type.Observable.md)\<[`SelectionStoreState`](Type.SelectionStoreState.md)\> |
| `type` | `T` |
| `viewport` | [`Observable`](Type.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> |

## Source

[src/types/interfaces.ts:148](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/interfaces.ts#L148)
