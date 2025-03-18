[RevoGrid Documentation v4.13.5](README.md) / CellTemplate

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

[src/types/interfaces.ts:138](https://github.com/revolist/revogrid/blob/f32590b4b251a55e7610f26e48cd67947bdd6441/src/types/interfaces.ts#L138)
