[RevoGrid Documentation v4.31.4](README.md) / CustomFilter

# Interface: CustomFilter\<T1, T2\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T1` | [`LogicFunctionParam`](TypeAlias.LogicFunctionParam.md) |
| `T2` | [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnFilterType` | `string` | Property defined in column { filter: string/number/abstract/enum...etc } | [src/plugins/filter/filter.types.ts:92](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/plugins/filter/filter.types.ts#L92) |
| `func` | [`LogicFunction`](Interface.LogicFunction.md)\<`T1`, `T2`\> | Function to apply the filter | [src/plugins/filter/filter.types.ts:100](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/plugins/filter/filter.types.ts#L100) |
| `name` | `string` | Filter name | [src/plugins/filter/filter.types.ts:96](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/plugins/filter/filter.types.ts#L96) |
