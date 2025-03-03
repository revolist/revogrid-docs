[RevoGrid Documentation v4.12.9](README.md) / CustomFilter

# Interface: CustomFilter\<T1, T2\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T1` | [`LogicFunctionParam`](TypeAlias.LogicFunctionParam.md) |
| `T2` | [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnFilterType` | `string` | Property defined in column { filter: string/number/abstract/enum...etc } | [src/plugins/filter/filter.types.ts:45](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/plugins/filter/filter.types.ts#L45) |
| `func` | [`LogicFunction`](Interface.LogicFunction.md)\<`T1`, `T2`\> | Function to apply the filter | [src/plugins/filter/filter.types.ts:53](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/plugins/filter/filter.types.ts#L53) |
| `name` | `string` | Filter name | [src/plugins/filter/filter.types.ts:49](https://github.com/revolist/revogrid/blob/5b626b1ece93ea60f82047d059b8a2635455feb4/src/plugins/filter/filter.types.ts#L49) |
