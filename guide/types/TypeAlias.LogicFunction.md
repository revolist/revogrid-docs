[RevoGrid Documentation v4.11.21](README.md) / LogicFunction

# Type Alias: LogicFunction()\<T1, T2\>

```ts
type LogicFunction<T1, T2>: (value: T1, extra?: T2) => boolean;
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T1` | [`LogicFunctionParam`](TypeAlias.LogicFunctionParam.md) |
| `T2` | [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T1` |
| `extra`? | `T2` |

## Returns

`boolean`

## Type declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `extra` | [`ExtraField`](TypeAlias.ExtraField.md) | [src/plugins/filter/filter.types.ts:38](https://github.com/revolist/revogrid/blob/a0e7ff1e32285a85a0644789b55a183ad196d0cf/src/plugins/filter/filter.types.ts#L38) |

## Defined in

[src/plugins/filter/filter.types.ts:36](https://github.com/revolist/revogrid/blob/a0e7ff1e32285a85a0644789b55a183ad196d0cf/src/plugins/filter/filter.types.ts#L36)
