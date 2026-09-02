[RevoGrid Documentation v4.27.0](README.md) / CustomFilter

# Interface: CustomFilter\<T1, T2\>

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T1` | [`LogicFunctionParam`](TypeAlias.LogicFunctionParam.md) |
| `T2` | [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnFilterType` | `string` | Property defined in column { filter: string/number/abstract/enum...etc } | [src/plugins/filter/filter.types.ts:92](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L92) |
| `func` | [`LogicFunction`](Interface.LogicFunction.md)\<`T1`, `T2`\> | Function to apply the filter | [src/plugins/filter/filter.types.ts:100](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L100) |
| `name` | `string` | Filter name | [src/plugins/filter/filter.types.ts:96](https://github.com/revolist/revogrid/blob/136a2f6099b1cbf94140f404d687dcb241c08093/src/plugins/filter/filter.types.ts#L96) |
