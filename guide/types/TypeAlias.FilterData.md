[RevoGrid Documentation v4.11.17](README.md) / FilterData

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
| `hidden` | `boolean` | Filter invisible in filter panel | [src/plugins/filter/filter.types.ts:134](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/plugins/filter/filter.types.ts#L134) |
| `id` | `number` | - | [src/plugins/filter/filter.types.ts:122](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/plugins/filter/filter.types.ts#L122) |
| `relation` | `"and"` \| `"or"` | Filter relation | [src/plugins/filter/filter.types.ts:138](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/plugins/filter/filter.types.ts#L138) |
| `type` | [`FilterType`](TypeAlias.FilterType.md) | Filter type | [src/plugins/filter/filter.types.ts:126](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/plugins/filter/filter.types.ts#L126) |
| `value` | `any` | Filter value | [src/plugins/filter/filter.types.ts:130](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/plugins/filter/filter.types.ts#L130) |

## Defined in

[src/plugins/filter/filter.types.ts:121](https://github.com/revolist/revogrid/blob/0844b37dbe4827c0b3ffa78b88f276b83e0fed00/src/plugins/filter/filter.types.ts#L121)
