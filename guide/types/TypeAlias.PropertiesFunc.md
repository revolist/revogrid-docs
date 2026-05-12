[RevoGrid Documentation v4.21.8](README.md) / PropertiesFunc

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

[src/types/interfaces.ts:451](https://github.com/revolist/revogrid/blob/cbcc53d7f9ef48561119d817a57d178f94244e50/src/types/interfaces.ts#L451)
