[RevoGrid Documentation v4.11.21](README.md) / FunctionalComponent

# Interface: FunctionalComponent()\<T\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | \{\} |

```ts
interface FunctionalComponent(
   props: T, 
   children: VNode[], 
   utils: FunctionalUtilities): VNode | VNode[]
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `T` |
| `children` | [`VNode`](Interface.VNode.md)[] |
| `utils` | `FunctionalUtilities` |

## Returns

[`VNode`](Interface.VNode.md) \| [`VNode`](Interface.VNode.md)[]

## Defined in

node\_modules/@stencil/core/internal/stencil-public-runtime.d.ts:505
