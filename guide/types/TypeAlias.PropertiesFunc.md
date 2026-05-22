[RevoGrid Documentation v4.21.11](README.md) / PropertiesFunc

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

[src/types/interfaces.ts:451](https://github.com/revolist/revogrid/blob/a761193a7b5041ca04115de4e1eceb6ed9b2b905/src/types/interfaces.ts#L451)
