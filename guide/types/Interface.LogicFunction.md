[RevoGrid Documentation v4.13.3](README.md) / LogicFunction

# Interface: LogicFunction()\<T1, T2\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T1` | [`LogicFunctionParam`](TypeAlias.LogicFunctionParam.md) |
| `T2` | [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md) |

```ts
interface LogicFunction(value: T1, extra?: T2): boolean
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T1` |
| `extra`? | `T2` |

## Returns

`boolean`

## Defined in

[src/plugins/filter/filter.types.ts:37](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/plugins/filter/filter.types.ts#L37)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `extra?` | [`ExtraField`](TypeAlias.ExtraField.md) | [src/plugins/filter/filter.types.ts:38](https://github.com/revolist/revogrid/blob/827fce61250cb005ab132b3ed11b8ae836712e7b/src/plugins/filter/filter.types.ts#L38) |
