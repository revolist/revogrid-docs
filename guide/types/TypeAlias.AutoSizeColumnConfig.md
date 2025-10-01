[RevoGrid Documentation v4.17.3](README.md) / AutoSizeColumnConfig

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
| `allColumns` | `boolean` | autoSize for all columns if allColumnes true all columns treated as autoSize, worse for performance false by default | [src/plugins/column.auto-size.plugin.ts:42](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/plugins/column.auto-size.plugin.ts#L42) |
| `letterBlockSize` | `number` | assumption per characted size by default defined as 8, can be changed in this config | [src/plugins/column.auto-size.plugin.ts:47](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/plugins/column.auto-size.plugin.ts#L47) |
| `mode` | [`ColumnAutoSizeMode`](Enumeration.ColumnAutoSizeMode.md) | - | [src/plugins/column.auto-size.plugin.ts:36](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/plugins/column.auto-size.plugin.ts#L36) |
| `preciseSize` | `boolean` | make size calculation exact by default it based on assumption each character takes some space defined in letterBlockSize | [src/plugins/column.auto-size.plugin.ts:50](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/plugins/column.auto-size.plugin.ts#L50) |

## Defined in

[src/plugins/column.auto-size.plugin.ts:34](https://github.com/revolist/revogrid/blob/c9f40461b2daa14fb3a2e5f76080a8e7b65ce7ef/src/plugins/column.auto-size.plugin.ts#L34)
