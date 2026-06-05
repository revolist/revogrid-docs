[RevoGrid Documentation v4.23.9](README.md) / CustomFilter

# Interface: CustomFilter\<T1, T2\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T1` | [`LogicFunctionParam`](TypeAlias.LogicFunctionParam.md) |
| `T2` | [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnFilterType` | `string` | Property defined in column { filter: string/number/abstract/enum...etc } | [src/plugins/filter/filter.types.ts:54](https://github.com/revolist/revogrid/blob/7210be05d48d189d4cce2e41db0fe306da2f48fe/src/plugins/filter/filter.types.ts#L54) |
| `func` | [`LogicFunction`](Interface.LogicFunction.md)\<`T1`, `T2`\> | Function to apply the filter | [src/plugins/filter/filter.types.ts:62](https://github.com/revolist/revogrid/blob/7210be05d48d189d4cce2e41db0fe306da2f48fe/src/plugins/filter/filter.types.ts#L62) |
| `name` | `string` | Filter name | [src/plugins/filter/filter.types.ts:58](https://github.com/revolist/revogrid/blob/7210be05d48d189d4cce2e41db0fe306da2f48fe/src/plugins/filter/filter.types.ts#L58) |
