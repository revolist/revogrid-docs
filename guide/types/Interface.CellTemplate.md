[RevoGrid Documentation v4.21.6](README.md) / CellTemplate

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

[src/types/interfaces.ts:140](https://github.com/revolist/revogrid/blob/a9ac74f43362117ea08122e5784fe4959d58ecdd/src/types/interfaces.ts#L140)
