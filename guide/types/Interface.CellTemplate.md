[RevoGrid Documentation v4.23.15](README.md) / CellTemplate

# Interface: CellTemplate()\<TModel\>

Interface for custom cell renderer.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |

```ts
interface CellTemplate(
   createElement: HyperFunc<VNode>, 
   props: CellTemplateProp<TModel, ColumnRegular<ColumnProp, DataType<any, ColumnProp>>, ColumnProp>, 
   additionalData?: any): any
```

Interface for custom cell renderer.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `createElement` | [`HyperFunc`](Interface.HyperFunc.md)\<[`VNode`](Interface.VNode.md)\> |
| `props` | [`CellTemplateProp`](Interface.CellTemplateProp.md)\<`TModel`, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`ColumnProp`](TypeAlias.ColumnProp.md)\> |
| `additionalData`? | `any` |

## Returns

`any`

## Defined in

[src/types/interfaces.ts:157](https://github.com/revolist/revogrid/blob/5e190883a9b9ce9cbf8619639d2d2c839a2214b2/src/types/interfaces.ts#L157)
