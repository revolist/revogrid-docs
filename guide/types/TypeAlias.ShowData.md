[RevoGrid Documentation v4.12.4](README.md) / ShowData

# Type Alias: ShowData

```ts
type ShowData: {
  autoCorrect: boolean;
  extraContent: (data: ShowData) => any;
  filterItems: MultiFilterItem;
  filterTypes: Record<string, string[]>;
  hideDefaultFilters: boolean;
  x: number;
  y: number;
} & FilterItem & Omit<ColumnRegular, "filter">;
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `autoCorrect` | `boolean` | Auto correct position if it is out of document bounds | [src/plugins/filter/filter.types.ts:152](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L152) |
| `extraContent` | (`data`: [`ShowData`](TypeAlias.ShowData.md)) => `any` | - | [src/plugins/filter/filter.types.ts:158](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L158) |
| `filterItems` | [`MultiFilterItem`](TypeAlias.MultiFilterItem.md) | - | [src/plugins/filter/filter.types.ts:154](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L154) |
| `filterTypes` | `Record`\<`string`, `string`[]\> | - | [src/plugins/filter/filter.types.ts:153](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L153) |
| `hideDefaultFilters` | `boolean` | - | [src/plugins/filter/filter.types.ts:156](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L156) |
| `x` | `number` | - | [src/plugins/filter/filter.types.ts:147](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L147) |
| `y` | `number` | - | [src/plugins/filter/filter.types.ts:148](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L148) |

## Defined in

[src/plugins/filter/filter.types.ts:146](https://github.com/revolist/revogrid/blob/648f56ecfc5430eb0184373ea33dd565a6a33bb9/src/plugins/filter/filter.types.ts#L146)
