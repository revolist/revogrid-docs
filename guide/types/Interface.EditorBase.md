[@revolist/revogrid](README.md) / EditorBase

# Interface: EditorBase

Editor interface

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | [src/types/selection.ts:150](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/types/selection.ts#L150) |
| `element?` | `Element` | [src/types/selection.ts:149](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/types/selection.ts#L149) |

## Methods

### beforeAutoSave()?

```ts
optional beforeAutoSave(val?: any): boolean
```

For Editor plugin internal usage.
Prevents Editor save. Manual save usage required.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `val`? | `any` |

#### Returns

`boolean`

#### Defined in

[src/types/selection.ts:159](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/types/selection.ts#L159)

***

### beforeDisconnect()?

```ts
optional beforeDisconnect(): void
```

Before editor got disconnected.
Can be triggered multiple times before actual disconnect.

#### Returns

`void`

#### Defined in

[src/types/selection.ts:165](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/types/selection.ts#L165)

***

### beforeUpdate()?

```ts
optional beforeUpdate(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:160](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/types/selection.ts#L160)

***

### componentDidRender()?

```ts
optional componentDidRender(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:166](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/types/selection.ts#L166)

***

### disconnectedCallback()?

```ts
optional disconnectedCallback(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:167](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/types/selection.ts#L167)

***

### getValue()?

```ts
optional getValue(): any
```

Autosave usage when you want to return value for models.

#### Returns

`any`

#### Defined in

[src/types/selection.ts:154](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/types/selection.ts#L154)

***

### render()

```ts
render(createElement?: HyperFunc<VNode>, additionalData?: any): string | void | VNode | VNode[]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `createElement`? | [`HyperFunc`](Interface.HyperFunc.md)\<[`VNode`](Interface.VNode.md)\> |
| `additionalData`? | `any` |

#### Returns

`string` \| `void` \| [`VNode`](Interface.VNode.md) \| [`VNode`](Interface.VNode.md)[]

#### Defined in

[src/types/selection.ts:168](https://github.com/revolist/revogrid/blob/ad41fd58f9a9de46c1cfbe02ca82c22180ee685c/src/types/selection.ts#L168)
