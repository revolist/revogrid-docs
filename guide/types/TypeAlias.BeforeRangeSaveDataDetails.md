[RevoGrid Documentation v4.23.12](README.md) / BeforeRangeSaveDataDetails

# Type Alias: BeforeRangeSaveDataDetails\<TModel\>

```ts
type BeforeRangeSaveDataDetails<TModel>: {
  data: {};
  models: {};
  newRange: RangeArea | null;
  oldRange: RangeArea | null;
  type: DimensionRows;
};
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `data` | \{\} | [src/types/selection.ts:145](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L145) |
| `models` | \{\} | [src/types/selection.ts:146](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L146) |
| `newRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:148](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L148) |
| `oldRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:149](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L149) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | [src/types/selection.ts:147](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L147) |

## Defined in

[src/types/selection.ts:144](https://github.com/revolist/revogrid/blob/7fc867bc90c8b537f3fb6e2e371773377b4fb177/src/types/selection.ts#L144)
