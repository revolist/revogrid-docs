[@revolist/revogrid](README.md) / EditorBase

# Interface: EditorBase

Editor interface

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | [src/types/selection.ts:180](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/types/selection.ts#L180) |
| `element?` | `null` \| `Element` | [src/types/selection.ts:179](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/types/selection.ts#L179) |

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

[src/types/selection.ts:189](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/types/selection.ts#L189)

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

[src/types/selection.ts:195](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/types/selection.ts#L195)

***

### beforeUpdate()?

```ts
optional beforeUpdate(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:190](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/types/selection.ts#L190)

***

### componentDidRender()?

```ts
optional componentDidRender(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:196](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/types/selection.ts#L196)

***

### disconnectedCallback()?

```ts
optional disconnectedCallback(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:197](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/types/selection.ts#L197)

***

### getValue()?

```ts
optional getValue(): any
```

Autosave usage when you want to return value for models.

#### Returns

`any`

#### Defined in

[src/types/selection.ts:184](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/types/selection.ts#L184)

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

[src/types/selection.ts:198](https://github.com/revolist/revogrid/blob/029346d93426056ab8f85e88430904164676d501/src/types/selection.ts#L198)
