[@revolist/revogrid](README.md) / Providers

# Type Alias: Providers\<T\>

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

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | [`DimensionRows`](TypeAlias.DimensionRows.md) |

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `data` | [`Observable`](TypeAlias.Observable.md)\<[`DataSourceState`](TypeAlias.DataSourceState.md)\<`any`, `any`\>\> \| [`ColumnRegular`](Interface.ColumnRegular.md)[] | Data source store | [src/types/interfaces.ts:293](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/types/interfaces.ts#L293) |
| `dimension` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension store | [src/types/interfaces.ts:301](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/types/interfaces.ts#L301) |
| `readonly` | `boolean` | Flag indicating if grid is in readonly mode | [src/types/interfaces.ts:289](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/types/interfaces.ts#L289) |
| `selection` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection store | [src/types/interfaces.ts:305](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/types/interfaces.ts#L305) |
| `type` | `T` | Dimension type (e.g. row or column) | [src/types/interfaces.ts:285](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/types/interfaces.ts#L285) |
| `viewport` | [`Observable`](TypeAlias.Observable.md)\<[`ViewportState`](Interface.ViewportState.md)\> | Viewport store | [src/types/interfaces.ts:297](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/types/interfaces.ts#L297) |

## Defined in

[src/types/interfaces.ts:281](https://github.com/revolist/revogrid/blob/38c381e080d7e0c5d988f8833cd99eec7cce206d/src/types/interfaces.ts#L281)
