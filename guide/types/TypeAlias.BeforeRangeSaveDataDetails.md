[RevoGrid Documentation v4.25.1](README.md) / BeforeRangeSaveDataDetails

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
| `data` | \{\} | [src/types/selection.ts:149](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/types/selection.ts#L149) |
| `models` | \{\} | [src/types/selection.ts:150](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/types/selection.ts#L150) |
| `newRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:152](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/types/selection.ts#L152) |
| `oldRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:153](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/types/selection.ts#L153) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | [src/types/selection.ts:151](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/types/selection.ts#L151) |

## Defined in

[src/types/selection.ts:148](https://github.com/revolist/revogrid/blob/d06ea5b7beb9764dab968fd781d3f71fda941337/src/types/selection.ts#L148)
