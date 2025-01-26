[RevoGrid Documentation v4.11.18](README.md) / AutoSizeColumnConfig

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
| `allColumns` | `boolean` | autoSize for all columns if allColumnes true all columns treated as autoSize, worse for performance false by default | [src/plugins/column.auto-size.plugin.ts:42](https://github.com/revolist/revogrid/blob/1653ad6831cb8c4a18b49e381a14df0c317a2084/src/plugins/column.auto-size.plugin.ts#L42) |
| `letterBlockSize` | `number` | assumption per characted size by default defined as 8, can be changed in this config | [src/plugins/column.auto-size.plugin.ts:47](https://github.com/revolist/revogrid/blob/1653ad6831cb8c4a18b49e381a14df0c317a2084/src/plugins/column.auto-size.plugin.ts#L47) |
| `mode` | `ColumnAutoSizeMode` | - | [src/plugins/column.auto-size.plugin.ts:36](https://github.com/revolist/revogrid/blob/1653ad6831cb8c4a18b49e381a14df0c317a2084/src/plugins/column.auto-size.plugin.ts#L36) |
| `preciseSize` | `boolean` | make size calculation exact by default it based on assumption each character takes some space defined in letterBlockSize | [src/plugins/column.auto-size.plugin.ts:50](https://github.com/revolist/revogrid/blob/1653ad6831cb8c4a18b49e381a14df0c317a2084/src/plugins/column.auto-size.plugin.ts#L50) |

## Defined in

[src/plugins/column.auto-size.plugin.ts:34](https://github.com/revolist/revogrid/blob/1653ad6831cb8c4a18b49e381a14df0c317a2084/src/plugins/column.auto-size.plugin.ts#L34)
