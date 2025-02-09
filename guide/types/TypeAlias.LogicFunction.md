[RevoGrid Documentation v4.12.1](README.md) / LogicFunction

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
| `extra` | [`ExtraField`](TypeAlias.ExtraField.md) | [src/plugins/filter/filter.types.ts:38](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/plugins/filter/filter.types.ts#L38) |

## Defined in

[src/plugins/filter/filter.types.ts:36](https://github.com/revolist/revogrid/blob/d509c0063a76a472726c991b21f1c163442771b4/src/plugins/filter/filter.types.ts#L36)
