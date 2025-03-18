[RevoGrid Documentation v4.14.0](README.md) / ElementScroll

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

[src/types/viewport.interfaces.ts:22](https://github.com/revolist/revogrid/blob/2b1eda543a592a83efe8431f6a1b419eb9a6f193/src/types/viewport.interfaces.ts#L22)

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

[src/types/viewport.interfaces.ts:26](https://github.com/revolist/revogrid/blob/2b1eda543a592a83efe8431f6a1b419eb9a6f193/src/types/viewport.interfaces.ts#L26)
