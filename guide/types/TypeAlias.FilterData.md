[RevoGrid Documentation v4.11.16](README.md) / FilterData

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
| `hidden` | `boolean` | Filter invisible in filter panel | [src/plugins/filter/filter.types.ts:134](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/plugins/filter/filter.types.ts#L134) |
| `id` | `number` | - | [src/plugins/filter/filter.types.ts:122](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/plugins/filter/filter.types.ts#L122) |
| `relation` | `"and"` \| `"or"` | Filter relation | [src/plugins/filter/filter.types.ts:138](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/plugins/filter/filter.types.ts#L138) |
| `type` | [`FilterType`](TypeAlias.FilterType.md) | Filter type | [src/plugins/filter/filter.types.ts:126](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/plugins/filter/filter.types.ts#L126) |
| `value` | `any` | Filter value | [src/plugins/filter/filter.types.ts:130](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/plugins/filter/filter.types.ts#L130) |

## Defined in

[src/plugins/filter/filter.types.ts:121](https://github.com/revolist/revogrid/blob/4a2e1c34e7e1a3d80ec42c0347cc2f82d785aa84/src/plugins/filter/filter.types.ts#L121)
