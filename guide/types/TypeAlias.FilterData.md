[RevoGrid Documentation v4.12.4](README.md) / FilterData

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
| `hidden` | `boolean` | Filter invisible in filter panel | [src/plugins/filter/filter.types.ts:135](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L135) |
| `id` | `number` | - | [src/plugins/filter/filter.types.ts:123](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L123) |
| `relation` | `"and"` \| `"or"` | Filter relation | [src/plugins/filter/filter.types.ts:139](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L139) |
| `type` | [`FilterType`](TypeAlias.FilterType.md) | Filter type | [src/plugins/filter/filter.types.ts:127](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L127) |
| `value` | `any` | Filter value | [src/plugins/filter/filter.types.ts:131](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L131) |

## Defined in

[src/plugins/filter/filter.types.ts:122](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L122)
