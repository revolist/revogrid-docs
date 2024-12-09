[@revolist/revogrid](README.md) / EditorBase

# Interface: EditorBase

Editor interface

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | [src/types/selection.ts:182](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/selection.ts#L182) |
| `element?` | `null` \| `Element` | [src/types/selection.ts:181](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/selection.ts#L181) |

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

[src/types/selection.ts:191](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/selection.ts#L191)

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

[src/types/selection.ts:197](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/selection.ts#L197)

***

### beforeUpdate()?

```ts
optional beforeUpdate(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:192](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/selection.ts#L192)

***

### componentDidRender()?

```ts
optional componentDidRender(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:198](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/selection.ts#L198)

***

### disconnectedCallback()?

```ts
optional disconnectedCallback(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:199](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/selection.ts#L199)

***

### getValue()?

```ts
optional getValue(): any
```

Autosave usage when you want to return value for models.

#### Returns

`any`

#### Defined in

[src/types/selection.ts:186](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/selection.ts#L186)

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

[src/types/selection.ts:200](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/types/selection.ts#L200)
