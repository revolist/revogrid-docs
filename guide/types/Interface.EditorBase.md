[@revolist/revogrid](README.md) / EditorBase

# Interface: EditorBase

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | [src/types/selection.ts:123](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/selection.ts#L123) |
| `element?` | `Element` | [src/types/selection.ts:122](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/selection.ts#L122) |

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

[src/types/selection.ts:132](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/selection.ts#L132)

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

[src/types/selection.ts:138](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/selection.ts#L138)

***

### beforeUpdate()?

```ts
optional beforeUpdate(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:133](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/selection.ts#L133)

***

### componentDidRender()?

```ts
optional componentDidRender(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:139](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/selection.ts#L139)

***

### disconnectedCallback()?

```ts
optional disconnectedCallback(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:140](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/selection.ts#L140)

***

### getValue()?

```ts
optional getValue(): any
```

Autosave usage when you want to return value for models.

#### Returns

`any`

#### Defined in

[src/types/selection.ts:127](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/selection.ts#L127)

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

[src/types/selection.ts:141](https://github.com/revolist/revogrid/blob/41a50f3812b438de1179c5db15e284c71422e9de/src/types/selection.ts#L141)
