[@revolist/revogrid](README.md) / LogicFunction

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
| `extra` | [`ExtraField`](TypeAlias.ExtraField.md) | [src/plugins/filter/filter.types.ts:36](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/plugins/filter/filter.types.ts#L36) |

## Defined in

[src/plugins/filter/filter.types.ts:34](https://github.com/revolist/revogrid/blob/1d0ce44a71b6b80efaa7b83dae9a188a9f2de653/src/plugins/filter/filter.types.ts#L34)
