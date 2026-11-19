[RevoGrid Documentation v4.31.6](README.md) / PropertiesFunc

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

[src/types/interfaces.ts:454](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/types/interfaces.ts#L454)
