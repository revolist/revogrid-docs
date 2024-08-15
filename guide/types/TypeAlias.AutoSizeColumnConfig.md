[@revolist/revogrid](README.md) / AutoSizeColumnConfig

# Type Alias: AutoSizeColumnConfig

```ts
type AutoSizeColumnConfig: {
  allColumns: boolean;
  letterBlockSize: number;
  mode: ColumnAutoSizeMode;
  preciseSize: boolean;
};
```

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `allColumns` | `boolean` | autoSize for all columns if allColumnes true all columns treated as autoSize, worse for performance false by default | [src/plugins/column.auto-size.plugin.ts:41](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/plugins/column.auto-size.plugin.ts#L41) |
| `letterBlockSize` | `number` | assumption per characted size by default defined as 8, can be changed in this config | [src/plugins/column.auto-size.plugin.ts:46](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/plugins/column.auto-size.plugin.ts#L46) |
| `mode` | `ColumnAutoSizeMode` | - | [src/plugins/column.auto-size.plugin.ts:35](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/plugins/column.auto-size.plugin.ts#L35) |
| `preciseSize` | `boolean` | make size calculation exact by default it based on assumption each character takes some space defined in letterBlockSize | [src/plugins/column.auto-size.plugin.ts:49](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/plugins/column.auto-size.plugin.ts#L49) |

## Defined in

[src/plugins/column.auto-size.plugin.ts:33](https://github.com/revolist/revogrid/blob/684eab34b16e993178d736466d35507eda9850cd/src/plugins/column.auto-size.plugin.ts#L33)
