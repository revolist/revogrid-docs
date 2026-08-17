[RevoGrid Documentation v4.26.0](README.md) / GroupingOptions

# Type Alias: GroupingOptions

```ts
type GroupingOptions: {
  groupCellTemplate: GroupCellTemplateFunc;
  groupLabelTemplate: GroupLabelTemplateFunc;
  preserveGroupingOnUpdate: boolean;
  props: ColumnProp[];
 } & ExpandedOptions;
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `groupCellTemplate` | [`GroupCellTemplateFunc`](TypeAlias.GroupCellTemplateFunc.md) | Custom template for cells in synthetic group rows. When provided, group rows render only the columns in the current horizontal viewport and this template takes precedence over `groupLabelTemplate`. | [src/plugins/groupingRow/grouping.row.types.ts:127](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/plugins/groupingRow/grouping.row.types.ts#L127) |
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:121](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/plugins/groupingRow/grouping.row.types.ts#L121) |
| `preserveGroupingOnUpdate` | `boolean` | Should grouping be preserved on source update. default: true | [src/plugins/groupingRow/grouping.row.types.ts:117](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/plugins/groupingRow/grouping.row.types.ts#L117) |
| `props` | [`ColumnProp`](TypeAlias.ColumnProp.md)[] | Column props to which grouping will be applied | [src/plugins/groupingRow/grouping.row.types.ts:111](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/plugins/groupingRow/grouping.row.types.ts#L111) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:107](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/plugins/groupingRow/grouping.row.types.ts#L107)
