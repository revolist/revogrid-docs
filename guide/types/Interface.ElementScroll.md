[@revolist/revogrid](README.md) / ElementScroll

# Interface: ElementScroll

## Methods

### changeScroll()?

```ts
optional changeScroll(e: ViewPortScrollEvent, silent?: boolean): Promise<ViewPortScrollEvent>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `e` | [`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md) |
| `silent`? | `boolean` |

#### Returns

`Promise`\<[`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md)\>

#### Source

[src/types/viewport.interfaces.ts:14](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/viewport.interfaces.ts#L14)

***

### setScroll()?

```ts
optional setScroll(e: ViewPortScrollEvent): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `e` | [`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[src/types/viewport.interfaces.ts:15](https://github.com/revolist/revogrid/blob/ace6403c43f42f0eb026a7e73c0ae179d3a4c66f/src/types/viewport.interfaces.ts#L15)
