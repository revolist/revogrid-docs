[RevoGrid Documentation v4.27.11](README.md) / EditorBase

# Interface: EditorBase

Editor interface

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | [src/types/selection.ts:210](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/types/selection.ts#L210) |
| `element?` | `null` \| `Element` | [src/types/selection.ts:209](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/types/selection.ts#L209) |

## Methods

### appendPendingInput()?

```ts
optional appendPendingInput(value: string): boolean
```

Consume printable input that reached the grid while the editor mounted.
Return true when the editor handled the value.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`boolean`

#### Defined in

[src/types/selection.ts:215](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/types/selection.ts#L215)

***

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

[src/types/selection.ts:224](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/types/selection.ts#L224)

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

[src/types/selection.ts:230](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/types/selection.ts#L230)

***

### beforeUpdate()?

```ts
optional beforeUpdate(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:225](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/types/selection.ts#L225)

***

### componentDidRender()?

```ts
optional componentDidRender(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:231](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/types/selection.ts#L231)

***

### disconnectedCallback()?

```ts
optional disconnectedCallback(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:232](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/types/selection.ts#L232)

***

### getValue()?

```ts
optional getValue(): any
```

Autosave usage when you want to return value for models.

#### Returns

`any`

#### Defined in

[src/types/selection.ts:219](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/types/selection.ts#L219)

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

[src/types/selection.ts:233](https://github.com/revolist/revogrid/blob/0073d9092659c188bf5ac35709bef2c2ae0275f3/src/types/selection.ts#L233)
