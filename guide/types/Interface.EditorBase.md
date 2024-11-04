[@revolist/revogrid](README.md) / EditorBase

# Interface: EditorBase

Editor interface

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | [src/types/selection.ts:170](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/selection.ts#L170) |
| `element?` | `null` \| `Element` | [src/types/selection.ts:169](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/selection.ts#L169) |

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

[src/types/selection.ts:179](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/selection.ts#L179)

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

[src/types/selection.ts:185](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/selection.ts#L185)

***

### beforeUpdate()?

```ts
optional beforeUpdate(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:180](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/selection.ts#L180)

***

### componentDidRender()?

```ts
optional componentDidRender(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:186](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/selection.ts#L186)

***

### disconnectedCallback()?

```ts
optional disconnectedCallback(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:187](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/selection.ts#L187)

***

### getValue()?

```ts
optional getValue(): any
```

Autosave usage when you want to return value for models.

#### Returns

`any`

#### Defined in

[src/types/selection.ts:174](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/selection.ts#L174)

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

[src/types/selection.ts:188](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/types/selection.ts#L188)
