[@revolist/revogrid](README.md) / ViewportData

# Type alias: ViewportData

```ts
type ViewportData: {
  segmentSelectionStore: Observable<SelectionStoreState>;
  slot: SlotType;
  style: {};
  uuid: string;
 } & RevogrOverlaySelection & RevogrData;
```

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `segmentSelectionStore` | [`Observable`](Type.Observable.md)\<[`SelectionStoreState`](Type.SelectionStoreState.md)\> | Selection connection |
| `slot` | [`SlotType`](Type.SlotType.md) | Slot to put data |
| `style` | \{\} | - |
| `uuid` | `string` | Current grid uniq Id |

## Source

[src/types/viewport.interfaces.ts:37](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/viewport.interfaces.ts#L37)
