[RevoGrid Documentation v4.23.3](README.md) / PropertiesFunc

# Type Alias: PropertiesFunc()\<TModel\>

```ts
type PropertiesFunc<TModel>: (props: CellTemplateProp<TModel>) => CellProps | void | undefined;
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`CellTemplateProp`](Interface.CellTemplateProp.md)\<`TModel`\> |

## Returns

[`CellProps`](TypeAlias.CellProps.md) \| `void` \| `undefined`

## Defined in

[src/types/interfaces.ts:451](https://github.com/revolist/revogrid/blob/70bb45efb434905fefaf72f1148974b6ef74baa4/src/types/interfaces.ts#L451)
