[RevoGrid Documentation v4.19.1](README.md) / BeforeRangeSaveDataDetails

# Type Alias: BeforeRangeSaveDataDetails

```ts
type BeforeRangeSaveDataDetails: {
  data: DataLookup;
  models: Partial<DataLookup>;
  newRange: RangeArea | null;
  oldRange: RangeArea | null;
  type: DimensionRows;
};
```

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `data` | [`DataLookup`](TypeAlias.DataLookup.md) | [src/types/selection.ts:128](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/types/selection.ts#L128) |
| `models` | `Partial`\<[`DataLookup`](TypeAlias.DataLookup.md)\> | [src/types/selection.ts:129](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/types/selection.ts#L129) |
| `newRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:131](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/types/selection.ts#L131) |
| `oldRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:132](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/types/selection.ts#L132) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | [src/types/selection.ts:130](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/types/selection.ts#L130) |

## Defined in

[src/types/selection.ts:127](https://github.com/revolist/revogrid/blob/eb2680918127e77fe450de6030c740504b9b25f8/src/types/selection.ts#L127)
