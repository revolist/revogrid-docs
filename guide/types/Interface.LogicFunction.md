[RevoGrid Documentation v4.14.4](README.md) / LogicFunction

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

[src/plugins/filter/filter.types.ts:46](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/plugins/filter/filter.types.ts#L46)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `extra?` | [`ExtraField`](TypeAlias.ExtraField.md) | [src/plugins/filter/filter.types.ts:47](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/plugins/filter/filter.types.ts#L47) |
