[RevoGrid Documentation v4.23.16](README.md) / BeforeRangeSaveDataDetails

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
| `data` | \{\} | [src/types/selection.ts:145](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/types/selection.ts#L145) |
| `models` | \{\} | [src/types/selection.ts:146](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/types/selection.ts#L146) |
| `newRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:148](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/types/selection.ts#L148) |
| `oldRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:149](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/types/selection.ts#L149) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | [src/types/selection.ts:147](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/types/selection.ts#L147) |

## Defined in

[src/types/selection.ts:144](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/types/selection.ts#L144)
