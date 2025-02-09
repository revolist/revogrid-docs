[RevoGrid Documentation v4.12.1](README.md) / RangeClipboardPasteEvent

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
| `data` | [`DataLookup`](TypeAlias.DataLookup.md) | [src/types/interfaces.ts:818](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L818) |
| `models` | `Partial`\<[`DataLookup`](TypeAlias.DataLookup.md)\> | [src/types/interfaces.ts:819](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L819) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/interfaces.ts:820](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L820) |

## Defined in

[src/types/interfaces.ts:817](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/types/interfaces.ts#L817)
