[RevoGrid Documentation v4.14.7](README.md) / GroupingOptions

# Type Alias: GroupingOptions

```ts
type GroupingOptions: {
  expandedAll: boolean;
  groupLabelTemplate: GroupLabelTemplateFunc;
  preserveGroupingOnUpdate: boolean;
  prevExpanded: Record<string, boolean>;
  props: ColumnProp[];
 } & ExpandedOptions;
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `expandedAll` | `boolean` | Is expanded by default | [src/plugins/groupingRow/grouping.row.types.ts:65](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/plugins/groupingRow/grouping.row.types.ts#L65) |
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:75](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/plugins/groupingRow/grouping.row.types.ts#L75) |
| `preserveGroupingOnUpdate` | `boolean` | Should grouping be preserved on source update. default: true | [src/plugins/groupingRow/grouping.row.types.ts:71](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/plugins/groupingRow/grouping.row.types.ts#L71) |
| `prevExpanded` | `Record`\<`string`, `boolean`\> | Currently expanded items. Corresponds to prop values as: source = [{ me: 'a' }, { me: 'b' }, { me: 'c' }] to set expanded: { a: true } for nested groups: to set expanded: { 'a': true, 'a,c': true } to set expanded: { 'a': true, 'a,b': true, 'a,b,c': true } | [src/plugins/groupingRow/grouping.row.types.ts:60](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/plugins/groupingRow/grouping.row.types.ts#L60) |
| `props` | [`ColumnProp`](TypeAlias.ColumnProp.md)[] | Column props to which grouping will be applied | [src/plugins/groupingRow/grouping.row.types.ts:48](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/plugins/groupingRow/grouping.row.types.ts#L48) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:44](https://github.com/revolist/revogrid/blob/1dd2182aeba2c7ed876161836e4edd5b0fccb479/src/plugins/groupingRow/grouping.row.types.ts#L44)
