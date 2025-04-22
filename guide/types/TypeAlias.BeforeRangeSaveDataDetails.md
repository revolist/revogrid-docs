[RevoGrid Documentation v4.15.5](README.md) / BeforeRangeSaveDataDetails

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
| `data` | [`DataLookup`](TypeAlias.DataLookup.md) | [src/types/selection.ts:127](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/selection.ts#L127) |
| `models` | `Partial`\<[`DataLookup`](TypeAlias.DataLookup.md)\> | [src/types/selection.ts:128](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/selection.ts#L128) |
| `newRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:130](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/selection.ts#L130) |
| `oldRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:131](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/selection.ts#L131) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | [src/types/selection.ts:129](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/selection.ts#L129) |

## Defined in

[src/types/selection.ts:126](https://github.com/revolist/revogrid/blob/e4de5901d3a858ae9e9a420f27ffcd2a33073a79/src/types/selection.ts#L126)
