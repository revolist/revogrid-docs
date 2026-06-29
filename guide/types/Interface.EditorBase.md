[RevoGrid Documentation v4.23.19](README.md) / EditorBase

# Interface: EditorBase

Editor interface

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | [src/types/selection.ts:210](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/selection.ts#L210) |
| `element?` | `null` \| `Element` | [src/types/selection.ts:209](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/selection.ts#L209) |

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

[src/types/selection.ts:219](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/selection.ts#L219)

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

[src/types/selection.ts:225](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/selection.ts#L225)

***

### beforeUpdate()?

```ts
optional beforeUpdate(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:220](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/selection.ts#L220)

***

### componentDidRender()?

```ts
optional componentDidRender(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:226](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/selection.ts#L226)

***

### disconnectedCallback()?

```ts
optional disconnectedCallback(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:227](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/selection.ts#L227)

***

### getValue()?

```ts
optional getValue(): any
```

Autosave usage when you want to return value for models.

#### Returns

`any`

#### Defined in

[src/types/selection.ts:214](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/selection.ts#L214)

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

[src/types/selection.ts:228](https://github.com/revolist/revogrid/blob/a080105dad693a2fbe4cd16b67e10c68f28be446/src/types/selection.ts#L228)
