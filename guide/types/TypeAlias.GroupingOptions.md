[RevoGrid Documentation v4.23.5](README.md) / GroupingOptions

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
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:83](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/plugins/groupingRow/grouping.row.types.ts#L83) |
| `preserveGroupingOnUpdate` | `boolean` | Should grouping be preserved on source update. default: true | [src/plugins/groupingRow/grouping.row.types.ts:79](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/plugins/groupingRow/grouping.row.types.ts#L79) |
| `props` | [`ColumnProp`](TypeAlias.ColumnProp.md)[] | Column props to which grouping will be applied | [src/plugins/groupingRow/grouping.row.types.ts:73](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/plugins/groupingRow/grouping.row.types.ts#L73) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:69](https://github.com/revolist/revogrid/blob/d5fe1d61d5b92cf947395e32d1c27654486cf79d/src/plugins/groupingRow/grouping.row.types.ts#L69)
