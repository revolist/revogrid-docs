[RevoGrid Documentation v4.11.16](README.md) / RangeClipboardPasteEvent

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
| `data` | [`DataLookup`](TypeAlias.DataLookup.md) | [src/types/interfaces.ts:818](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/types/interfaces.ts#L818) |
| `models` | `Partial`\<[`DataLookup`](TypeAlias.DataLookup.md)\> | [src/types/interfaces.ts:819](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/types/interfaces.ts#L819) |
| `range` | [`RangeArea`](TypeAlias.RangeArea.md) \| `null` | [src/types/interfaces.ts:820](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/types/interfaces.ts#L820) |

## Defined in

[src/types/interfaces.ts:817](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/types/interfaces.ts#L817)
