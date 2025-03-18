[RevoGrid Documentation v4.13.5](README.md) / BeforeRangeSaveDataDetails

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
| `data` | [`DataLookup`](TypeAlias.DataLookup.md) | [src/types/selection.ts:123](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/selection.ts#L123) |
| `models` | `Partial`\<[`DataLookup`](TypeAlias.DataLookup.md)\> | [src/types/selection.ts:124](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/selection.ts#L124) |
| `newRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:126](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/selection.ts#L126) |
| `oldRange` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/selection.ts:127](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/selection.ts#L127) |
| `type` | [`DimensionRows`](TypeAlias.DimensionRows.md) | [src/types/selection.ts:125](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/selection.ts#L125) |

## Defined in

[src/types/selection.ts:122](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/selection.ts#L122)
