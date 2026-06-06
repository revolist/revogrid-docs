[RevoGrid Documentation v4.23.11](README.md) / ElementScroll

# Interface: ElementScroll

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `noHorizontalScrollTransfer?` | `boolean` | [src/types/viewport.interfaces.ts:22](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/types/viewport.interfaces.ts#L22) |

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

[src/types/viewport.interfaces.ts:23](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/types/viewport.interfaces.ts#L23)

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

[src/types/viewport.interfaces.ts:27](https://github.com/revolist/revogrid/blob/f395a0413c5a19651688edda4523592251ea55cc/src/types/viewport.interfaces.ts#L27)
