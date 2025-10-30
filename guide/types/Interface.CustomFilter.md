[RevoGrid Documentation v4.19.3](README.md) / CustomFilter

# Interface: CustomFilter\<T1, T2\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T1` | [`LogicFunctionParam`](TypeAlias.LogicFunctionParam.md) |
| `T2` | [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnFilterType` | `string` | Property defined in column { filter: string/number/abstract/enum...etc } | [src/plugins/filter/filter.types.ts:54](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/plugins/filter/filter.types.ts#L54) |
| `func` | [`LogicFunction`](Interface.LogicFunction.md)\<`T1`, `T2`\> | Function to apply the filter | [src/plugins/filter/filter.types.ts:62](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/plugins/filter/filter.types.ts#L62) |
| `name` | `string` | Filter name | [src/plugins/filter/filter.types.ts:58](https://github.com/revolist/revogrid/blob/6cc471b0ae5ca1f2f8457c9845bb21718b430cdf/src/plugins/filter/filter.types.ts#L58) |
