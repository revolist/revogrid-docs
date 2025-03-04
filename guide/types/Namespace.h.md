[RevoGrid Documentation v4.12.11](README.md) / h

# h

The "h" namespace is used to import JSX types for elements and attributes.
It is imported in order to avoid conflicting global JSX issues.

## Index

### Namespaces

| Namespace | Description |
| ------ | ------ |
| [JSX](h.Namespace.JSX.md) | - |

## h()

### h(sel)

```ts
function h(sel: any): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:539

### h(sel, data)

```ts
function h(sel: Node, data: null | VNodeData): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `Node` |
| `data` | `null` \| `VNodeData` |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:540

### h(sel, data)

```ts
function h(sel: any, data: null | VNodeData): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `data` | `null` \| `VNodeData` |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:541

### h(sel, text)

```ts
function h(sel: any, text: string): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `text` | `string` |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:542

### h(sel, children)

```ts
function h(sel: any, children: (undefined | null | VNode)[]): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `children` | (`undefined` \| `null` \| [`VNode`](Interface.VNode.md))[] |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:543

### h(sel, data, text)

```ts
function h(
   sel: any, 
   data: null | VNodeData, 
   text: string): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `data` | `null` \| `VNodeData` |
| `text` | `string` |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:544

### h(sel, data, children)

```ts
function h(
   sel: any, 
   data: null | VNodeData, 
   children: (undefined | null | VNode)[]): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `data` | `null` \| `VNodeData` |
| `children` | (`undefined` \| `null` \| [`VNode`](Interface.VNode.md))[] |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:545

### h(sel, data, children)

```ts
function h(
   sel: any, 
   data: null | VNodeData, 
   children: VNode): VNode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sel` | `any` |
| `data` | `null` \| `VNodeData` |
| `children` | [`VNode`](Interface.VNode.md) |

#### Returns

[`VNode`](Interface.VNode.md)

#### Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:546
