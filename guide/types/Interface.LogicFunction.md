[RevoGrid Documentation v4.26.2](README.md) / LogicFunction

# Interface: LogicFunction()\<T1, T2\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T1` | [`LogicFunctionParam`](TypeAlias.LogicFunctionParam.md) |
| `T2` | [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md) |

```ts
interface LogicFunction(
   value: T1, 
   extra?: T2, 
   context?: FilterEvaluationContext<DataType, ColumnRegular<ColumnProp, DataType<any, ColumnProp>>>): boolean
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `T1` |
| `extra`? | `T2` |
| `context`? | [`FilterEvaluationContext`](Interface.FilterEvaluationContext.md)\<[`DataType`](TypeAlias.DataType.md), [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>\> |

## Returns

`boolean`

## Defined in

[src/plugins/filter/filter.types.ts:84](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/plugins/filter/filter.types.ts#L84)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `extra?` | [`ExtraField`](TypeAlias.ExtraField.md) | [src/plugins/filter/filter.types.ts:85](https://github.com/revolist/revogrid/blob/3228e771269f05d2ed0b0d9b7dd71866fcd26d2d/src/plugins/filter/filter.types.ts#L85) |
