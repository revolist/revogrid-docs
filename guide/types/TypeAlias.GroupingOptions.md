[RevoGrid Documentation v4.12.2](README.md) / GroupingOptions

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
| `expandedAll` | `boolean` | Is expanded by default | [src/plugins/groupingRow/grouping.row.types.ts:40](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/plugins/groupingRow/grouping.row.types.ts#L40) |
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:50](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/plugins/groupingRow/grouping.row.types.ts#L50) |
| `preserveGroupingOnUpdate` | `boolean` | Should grouping be preserved on source update. default: true | [src/plugins/groupingRow/grouping.row.types.ts:46](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/plugins/groupingRow/grouping.row.types.ts#L46) |
| `prevExpanded` | `Record`\<`string`, `boolean`\> | Currently expanded items. Corresponds to prop values as: source = [{ me: 'a' }, { me: 'b' }, { me: 'c' }], to set expanded: { a: true } | [src/plugins/groupingRow/grouping.row.types.ts:35](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/plugins/groupingRow/grouping.row.types.ts#L35) |
| `props` | [`ColumnProp`](TypeAlias.ColumnProp.md)[] | Column props to which grouping will be applied | [src/plugins/groupingRow/grouping.row.types.ts:29](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/plugins/groupingRow/grouping.row.types.ts#L29) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:25](https://github.com/revolist/revogrid/blob/e582d99bf63e98e148b1cd4edfa5db75a0a4d1b7/src/plugins/groupingRow/grouping.row.types.ts#L25)
