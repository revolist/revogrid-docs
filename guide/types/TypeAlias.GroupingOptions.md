[RevoGrid Documentation v4.14.11](README.md) / GroupingOptions

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
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:58](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/plugins/groupingRow/grouping.row.types.ts#L58) |
| `preserveGroupingOnUpdate` | `boolean` | Should grouping be preserved on source update. default: true | [src/plugins/groupingRow/grouping.row.types.ts:54](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/plugins/groupingRow/grouping.row.types.ts#L54) |
| `props` | [`ColumnProp`](TypeAlias.ColumnProp.md)[] | Column props to which grouping will be applied | [src/plugins/groupingRow/grouping.row.types.ts:48](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/plugins/groupingRow/grouping.row.types.ts#L48) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:44](https://github.com/revolist/revogrid/blob/8390153a63782c6f2a806fb42e5983525eb9dc87/src/plugins/groupingRow/grouping.row.types.ts#L44)
