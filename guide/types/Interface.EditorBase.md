[@revolist/revogrid](README.md) / EditorBase

# Interface: EditorBase

Editor interface

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | [src/types/selection.ts:175](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/selection.ts#L175) |
| `element?` | `Element` | [src/types/selection.ts:174](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/selection.ts#L174) |

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

[src/types/selection.ts:184](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/selection.ts#L184)

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

[src/types/selection.ts:190](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/selection.ts#L190)

***

### beforeUpdate()?

```ts
optional beforeUpdate(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:185](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/selection.ts#L185)

***

### componentDidRender()?

```ts
optional componentDidRender(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:191](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/selection.ts#L191)

***

### disconnectedCallback()?

```ts
optional disconnectedCallback(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:192](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/selection.ts#L192)

***

### getValue()?

```ts
optional getValue(): any
```

Autosave usage when you want to return value for models.

#### Returns

`any`

#### Defined in

[src/types/selection.ts:179](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/selection.ts#L179)

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

[src/types/selection.ts:193](https://github.com/revolist/revogrid/blob/169fb7626f86c9813d59597eddde6f6dd50e49a6/src/types/selection.ts#L193)
