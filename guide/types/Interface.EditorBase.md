[RevoGrid Documentation v4.23.3](README.md) / EditorBase

# Interface: EditorBase

Editor interface

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | [src/types/selection.ts:206](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/selection.ts#L206) |
| `element?` | `null` \| `Element` | [src/types/selection.ts:205](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/selection.ts#L205) |

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

[src/types/selection.ts:215](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/selection.ts#L215)

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

[src/types/selection.ts:221](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/selection.ts#L221)

***

### beforeUpdate()?

```ts
optional beforeUpdate(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:216](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/selection.ts#L216)

***

### componentDidRender()?

```ts
optional componentDidRender(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:222](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/selection.ts#L222)

***

### disconnectedCallback()?

```ts
optional disconnectedCallback(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:223](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/selection.ts#L223)

***

### getValue()?

```ts
optional getValue(): any
```

Autosave usage when you want to return value for models.

#### Returns

`any`

#### Defined in

[src/types/selection.ts:210](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/selection.ts#L210)

***

### render()

```ts
render(createElement: HyperFunc<VNode>, additionalData?: any): string | void | VNode | VNode[]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `createElement` | [`HyperFunc`](Interface.HyperFunc.md)\<[`VNode`](Interface.VNode.md)\> |
| `additionalData`? | `any` |

#### Returns

`string` \| `void` \| [`VNode`](Interface.VNode.md) \| [`VNode`](Interface.VNode.md)[]

#### Defined in

[src/types/selection.ts:224](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/selection.ts#L224)
