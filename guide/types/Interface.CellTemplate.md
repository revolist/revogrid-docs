[RevoGrid Documentation v4.15.8](README.md) / CellTemplate

# Interface: CellTemplate()

Interface for custom cell renderer.

```ts
interface CellTemplate(
   createElement: HyperFunc<VNode>, 
   props: CellTemplateProp, 
   additionalData?: any): any
```

Interface for custom cell renderer.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `createElement` | [`HyperFunc`](Interface.HyperFunc.md)\<[`VNode`](Interface.VNode.md)\> |
| `props` | [`CellTemplateProp`](Interface.CellTemplateProp.md) |
| `additionalData`? | `any` |

## Returns

`any`

## Defined in

[src/types/interfaces.ts:140](https://github.com/revolist/revogrid/blob/2ac43d2713c9d394ff33675f959c6432bf5aa023/src/types/interfaces.ts#L140)
