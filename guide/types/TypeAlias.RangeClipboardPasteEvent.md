[RevoGrid Documentation v4.12.4](README.md) / RangeClipboardPasteEvent

# Type Alias: RangeClipboardPasteEvent

```ts
type RangeClipboardPasteEvent: {
  data: DataLookup;
  models: Partial<DataLookup>;
  range: RangeArea | null;
 } & AllDimensionType;
```

Range paste.

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `data` | [`DataLookup`](TypeAlias.DataLookup.md) | [src/types/interfaces.ts:831](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/types/interfaces.ts#L831) |
| `models` | `Partial`\<[`DataLookup`](TypeAlias.DataLookup.md)\> | [src/types/interfaces.ts:832](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/types/interfaces.ts#L832) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/interfaces.ts:833](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/types/interfaces.ts#L833) |

## Defined in

[src/types/interfaces.ts:830](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/types/interfaces.ts#L830)
