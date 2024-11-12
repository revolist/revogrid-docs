[@revolist/revogrid](README.md) / FilterData

# Type Alias: FilterData

```ts
type FilterData: {
  hidden: boolean;
  id: number;
  relation: "and" | "or";
  type: FilterType;
  value: any;
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `hidden` | `boolean` | Filter invisible in filter panel | [src/plugins/filter/filter.types.ts:126](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/plugins/filter/filter.types.ts#L126) |
| `id` | `number` | - | [src/plugins/filter/filter.types.ts:114](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/plugins/filter/filter.types.ts#L114) |
| `relation` | `"and"` \| `"or"` | Filter relation | [src/plugins/filter/filter.types.ts:130](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/plugins/filter/filter.types.ts#L130) |
| `type` | [`FilterType`](TypeAlias.FilterType.md) | Filter type | [src/plugins/filter/filter.types.ts:118](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/plugins/filter/filter.types.ts#L118) |
| `value` | `any` | Filter value | [src/plugins/filter/filter.types.ts:122](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/plugins/filter/filter.types.ts#L122) |

## Defined in

[src/plugins/filter/filter.types.ts:113](https://github.com/revolist/revogrid/blob/7e29dfb64300e0258d5855b03e9cff9116f6c377/src/plugins/filter/filter.types.ts#L113)
