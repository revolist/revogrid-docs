[RevoGrid Documentation v4.21.7](README.md) / GroupingOptions

# Type Alias: GroupingOptions

```ts
type GroupingOptions: {
  groupLabelTemplate: GroupLabelTemplateFunc;
  preserveGroupingOnUpdate: boolean;
  props: ColumnProp[];
 } & ExpandedOptions;
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:83](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/plugins/groupingRow/grouping.row.types.ts#L83) |
| `preserveGroupingOnUpdate` | `boolean` | Should grouping be preserved on source update. default: true | [src/plugins/groupingRow/grouping.row.types.ts:79](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/plugins/groupingRow/grouping.row.types.ts#L79) |
| `props` | [`ColumnProp`](TypeAlias.ColumnProp.md)[] | Column props to which grouping will be applied | [src/plugins/groupingRow/grouping.row.types.ts:73](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/plugins/groupingRow/grouping.row.types.ts#L73) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:69](https://github.com/revolist/revogrid/blob/905a49acb6dd170162e7afe2dc62a77b40102b21/src/plugins/groupingRow/grouping.row.types.ts#L69)
