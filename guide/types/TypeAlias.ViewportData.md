[@revolist/revogrid](README.md) / ViewportData

# Type Alias: ViewportData

```ts
type ViewportData: {
  segmentSelectionStore: Observable<SelectionStoreState>;
  slot: SlotType;
  style: {};
  uuid: string;
 } & RevogrOverlaySelection & RevogrData;
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `segmentSelectionStore` | [`Observable`](TypeAlias.Observable.md)\<[`SelectionStoreState`](TypeAlias.SelectionStoreState.md)\> | Selection connection | [src/types/viewport.interfaces.ts:51](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/types/viewport.interfaces.ts#L51) |
| `slot` | [`SlotType`](TypeAlias.SlotType.md) | Slot to put data | [src/types/viewport.interfaces.ts:54](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/types/viewport.interfaces.ts#L54) |
| `style` | \{\} | - | [src/types/viewport.interfaces.ts:58](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/types/viewport.interfaces.ts#L58) |
| `uuid` | `string` | Current grid uniq Id | [src/types/viewport.interfaces.ts:57](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/types/viewport.interfaces.ts#L57) |

## Defined in

[src/types/viewport.interfaces.ts:49](https://github.com/revolist/revogrid/blob/6957d67da887b25ac544cadb80669dc782e7d7d6/src/types/viewport.interfaces.ts#L49)
