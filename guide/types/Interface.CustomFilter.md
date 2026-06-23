[RevoGrid Documentation v4.23.16](README.md) / CustomFilter

# Interface: CustomFilter\<T1, T2\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T1` | [`LogicFunctionParam`](TypeAlias.LogicFunctionParam.md) |
| `T2` | [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnFilterType` | `string` | Property defined in column { filter: string/number/abstract/enum...etc } | [src/plugins/filter/filter.types.ts:54](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L54) |
| `func` | [`LogicFunction`](Interface.LogicFunction.md)\<`T1`, `T2`\> | Function to apply the filter | [src/plugins/filter/filter.types.ts:62](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L62) |
| `name` | `string` | Filter name | [src/plugins/filter/filter.types.ts:58](https://github.com/revolist/revogrid/blob/afa54ee5117a4202f152f3480ef450775449789b/src/plugins/filter/filter.types.ts#L58) |
