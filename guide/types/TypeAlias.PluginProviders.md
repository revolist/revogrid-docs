[@revolist/revogrid](README.md) / PluginProviders

# Type Alias: PluginProviders

```ts
type PluginProviders: {
  column: ColumnDataProvider;
  data: DataProvider;
  dimension: DimensionProvider;
  selection: SelectionStoreConnector;
  viewport: ViewportProvider;
};
```

Services that are provided by the various plugins for use by the grid. Each plugin
is responsible for providing a specific service, and the `PluginProviders` type collects all the services provided
by the plugins.

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `column` | `ColumnDataProvider` | The column service provides access to the grid's column data. | [src/types/plugin.types.ts:28](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/plugin.types.ts#L28) |
| `data` | `DataProvider` | The data service provides access to the grid data. | [src/types/plugin.types.ts:16](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/plugin.types.ts#L16) |
| `dimension` | `DimensionProvider` | The dimension service provides access to the grid's dimensions and settings. | [src/types/plugin.types.ts:20](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/plugin.types.ts#L20) |
| `selection` | `SelectionStoreConnector` | The selection service provides access to the grid's selection state. | [src/types/plugin.types.ts:24](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/plugin.types.ts#L24) |
| `viewport` | `ViewportProvider` | The viewport service provides access to the grid's viewport state. | [src/types/plugin.types.ts:32](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/plugin.types.ts#L32) |

## Defined in

[src/types/plugin.types.ts:12](https://github.com/revolist/revogrid/blob/3cf03d1039e53d8581c1791130c13324e129dd40/src/types/plugin.types.ts#L12)
