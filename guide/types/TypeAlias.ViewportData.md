[@revolist/revogrid](README.md) / ViewportData

# Type Alias: ViewportData

```ts
type ViewportData: {
  segmentSelectionStore: Observable<SelectionStoreState>;
  slot: SlotType;
  style: {};
 } & RevogrOverlaySelection & Pick<JSXBase.HTMLAttributes<HTMLRevogrOverlaySelectionElement>, "ref"> & Pick<JSXBase.HTMLAttributes<HTMLRevogrDataElement>, "ref"> & RevogrData;
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `segmentSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection connection | [src/types/viewport.interfaces.ts:51](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/types/viewport.interfaces.ts#L51) |
| `slot` | [`SlotType`](TypeAlias.SlotType.md) | Slot to put data | [src/types/viewport.interfaces.ts:54](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/types/viewport.interfaces.ts#L54) |
| `style` | \{\} | - | [src/types/viewport.interfaces.ts:55](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/types/viewport.interfaces.ts#L55) |

## Defined in

[src/types/viewport.interfaces.ts:49](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/types/viewport.interfaces.ts#L49)
