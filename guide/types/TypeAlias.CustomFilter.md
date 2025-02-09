[RevoGrid Documentation v4.12.0](README.md) / CustomFilter

# Type Alias: CustomFilter\<T1, T2\>

```ts
type CustomFilter<T1, T2>: {
  columnFilterType: string;
  func: LogicFunction<T1, T2>;
  name: string;
};
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T1` | [`LogicFunctionParam`](TypeAlias.LogicFunctionParam.md) |
| `T2` | [`LogicFunctionExtraParam`](TypeAlias.LogicFunctionExtraParam.md) |

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `columnFilterType` | `string` | Property defined in column { filter: string/number/abstract/enum...etc } | [src/plugins/filter/filter.types.ts:45](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/plugins/filter/filter.types.ts#L45) |
| `func` | [`LogicFunction`](TypeAlias.LogicFunction.md)\<`T1`, `T2`\> | Function to apply the filter | [src/plugins/filter/filter.types.ts:53](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/plugins/filter/filter.types.ts#L53) |
| `name` | `string` | Filter name | [src/plugins/filter/filter.types.ts:49](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/plugins/filter/filter.types.ts#L49) |

## Defined in

[src/plugins/filter/filter.types.ts:41](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/plugins/filter/filter.types.ts#L41)
