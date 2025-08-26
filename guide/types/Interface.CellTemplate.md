[RevoGrid Documentation v4.16.0](README.md) / CellTemplate

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

[src/types/interfaces.ts:140](https://github.com/revolist/revogrid/blob/09cdc1e0b86c0627e1eaa752c7fd0bb1b7b42330/src/types/interfaces.ts#L140)
