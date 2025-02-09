[RevoGrid Documentation v4.12.0](README.md) / GroupingOptions

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
| `expandedAll` | `boolean` | Is expanded by default | [src/plugins/groupingRow/grouping.row.types.ts:24](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/plugins/groupingRow/grouping.row.types.ts#L24) |
| `groupLabelTemplate` | `GroupLabelTemplateFunc` | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:34](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/plugins/groupingRow/grouping.row.types.ts#L34) |
| `preserveGroupingOnUpdate` | `boolean` | Should grouping be preserved on source update. default: true | [src/plugins/groupingRow/grouping.row.types.ts:30](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/plugins/groupingRow/grouping.row.types.ts#L30) |
| `prevExpanded` | `Record`\<`string`, `boolean`\> | Currently expanded items. Corresponds to prop values as: source = [{ me: 'a' }, { me: 'b' }, { me: 'c' }], to set expanded: { a: true } | [src/plugins/groupingRow/grouping.row.types.ts:19](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/plugins/groupingRow/grouping.row.types.ts#L19) |
| `props` | [`ColumnProp`](TypeAlias.ColumnProp.md)[] | Column props to which grouping will be applied | [src/plugins/groupingRow/grouping.row.types.ts:13](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/plugins/groupingRow/grouping.row.types.ts#L13) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:9](https://github.com/revolist/revogrid/blob/282605c6faa8e6a115a4a8c5b8668e14fed605a0/src/plugins/groupingRow/grouping.row.types.ts#L9)
