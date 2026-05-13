[RevoGrid Documentation v4.21.8](README.md) / ElementScroll

# Interface: ElementScroll

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `noHorizontalScrollTransfer?` | `boolean` | [src/types/viewport.interfaces.ts:22](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/types/viewport.interfaces.ts#L22) |

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

[src/types/viewport.interfaces.ts:23](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/types/viewport.interfaces.ts#L23)

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

[src/types/viewport.interfaces.ts:27](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/types/viewport.interfaces.ts#L27)
