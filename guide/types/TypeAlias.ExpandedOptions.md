[RevoGrid Documentation v4.13.2](README.md) / ExpandedOptions

# Type Alias: ExpandedOptions

```ts
type ExpandedOptions: {
  expandedAll: boolean;
  groupLabelTemplate: GroupLabelTemplateFunc;
  prevExpanded: Record<string, boolean>;
  getGroupValue: any;
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `expandedAll` | `boolean` | Is expanded by default | [src/plugins/groupingRow/grouping.row.types.ts:75](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.types.ts#L75) |
| `groupLabelTemplate` | [`GroupLabelTemplateFunc`](TypeAlias.GroupLabelTemplateFunc.md) | Custom group label template | [src/plugins/groupingRow/grouping.row.types.ts:84](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.types.ts#L84) |
| `prevExpanded` | `Record`\<`string`, `boolean`\> | - | [src/plugins/groupingRow/grouping.row.types.ts:71](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.types.ts#L71) |
| `getGroupValue` | `any` | Custom group label value parser | [src/plugins/groupingRow/grouping.row.types.ts:80](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.types.ts#L80) |

## Defined in

[src/plugins/groupingRow/grouping.row.types.ts:70](https://github.com/revolist/revogrid/blob/4615a8613a8ac5464daeb17d7062361e3e3aa5d1/src/plugins/groupingRow/grouping.row.types.ts#L70)
