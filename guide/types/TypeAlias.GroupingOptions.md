[RevoGrid Documentation v4.13.2](README.md) / GroupingOptions

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
| `expandedAll` | `boolean` | Is expanded by default | [src/plugins/groupingRow/grouping.row.types.ts:41](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.types.ts#L41) |
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:51](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.types.ts#L51) |
| `preserveGroupingOnUpdate` | `boolean` | Should grouping be preserved on source update. default: true | [src/plugins/groupingRow/grouping.row.types.ts:47](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.types.ts#L47) |
| `prevExpanded` | `Record`\<`string`, `boolean`\> | Currently expanded items. Corresponds to prop values as: source = [{ me: 'a' }, { me: 'b' }, { me: 'c' }], to set expanded: { a: true } | [src/plugins/groupingRow/grouping.row.types.ts:36](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.types.ts#L36) |
| `props` | [`ColumnProp`](TypeAlias.ColumnProp.md)[] | Column props to which grouping will be applied | [src/plugins/groupingRow/grouping.row.types.ts:30](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.types.ts#L30) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:26](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.types.ts#L26)
