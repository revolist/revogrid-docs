[RevoGrid Documentation v4.21.7](README.md) / CellTemplate

# Interface: CellTemplate()

Interface for custom cell renderer.

```ts
interface CellTemplate(
   createElement: HyperFunc<VNode>, 
   props: CellTemplateProp<DataType<any, ColumnProp>, ColumnRegular<ColumnProp>, ColumnProp>, 
   additionalData?: any): any
```

Interface for custom cell renderer.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `createElement` | [`HyperFunc`](Interface.HyperFunc.md)\<[`VNode`](Interface.VNode.md)\> |
| `props` | [`CellTemplateProp`](Interface.CellTemplateProp.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnProp`](TypeAlias.ColumnProp.md)\> |
| `additionalData`? | `any` |

## Returns

`any`

## Defined in

[src/types/interfaces.ts:157](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/types/interfaces.ts#L157)
