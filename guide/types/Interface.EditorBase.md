[@revolist/revogrid](README.md) / EditorBase

# Interface: EditorBase

Editor interface

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | [src/types/selection.ts:173](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/selection.ts#L173) |
| `element?` | `null` \| `Element` | [src/types/selection.ts:172](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/selection.ts#L172) |

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

[src/types/selection.ts:182](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/selection.ts#L182)

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

[src/types/selection.ts:188](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/selection.ts#L188)

***

### beforeUpdate()?

```ts
optional beforeUpdate(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:183](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/selection.ts#L183)

***

### componentDidRender()?

```ts
optional componentDidRender(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:189](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/selection.ts#L189)

***

### disconnectedCallback()?

```ts
optional disconnectedCallback(): void
```

#### Returns

`void`

#### Defined in

[src/types/selection.ts:190](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/selection.ts#L190)

***

### getValue()?

```ts
optional getValue(): any
```

Autosave usage when you want to return value for models.

#### Returns

`any`

#### Defined in

[src/types/selection.ts:177](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/selection.ts#L177)

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

[src/types/selection.ts:191](https://github.com/revolist/revogrid/blob/15bed16e98b0807fadb0bfdae87d4c121f88e09e/src/types/selection.ts#L191)
