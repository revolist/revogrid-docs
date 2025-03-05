[RevoGrid Documentation v4.12.12](README.md) / ElementScroll

# Interface: ElementScroll

## Methods

### changeScroll()?

```ts
optional changeScroll(e: ViewPortScrollEvent, silent?: boolean): Promise<undefined | ViewPortScrollEvent>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md) |
| `silent`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\>

#### Defined in

[src/types/viewport.interfaces.ts:22](https://github.com/revolist/revogrid/blob/ecd92bead8bd3117a71a9fcab227f9b0f91c2edf/src/types/viewport.interfaces.ts#L22)

***

### setScroll()?

```ts
optional setScroll(e: ViewPortScrollEvent): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/types/viewport.interfaces.ts:26](https://github.com/revolist/revogrid/blob/ecd92bead8bd3117a71a9fcab227f9b0f91c2edf/src/types/viewport.interfaces.ts#L26)
