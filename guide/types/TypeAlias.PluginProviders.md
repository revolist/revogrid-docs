[RevoGrid Documentation v4.14.4](README.md) / PluginProviders

# Type Alias: PluginProviders

```ts
type PluginProviders: {
  column: ColumnDataProvider;
  data: DataProvider;
  dimension: DimensionProvider;
  plugins: PluginServiceBase;
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
| `column` | `ColumnDataProvider` | The column service provides access to the grid's column data. | [src/types/plugin.types.ts:38](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/types/plugin.types.ts#L38) |
| `data` | `DataProvider` | The data service provides access to the grid data. | [src/types/plugin.types.ts:26](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/types/plugin.types.ts#L26) |
| `dimension` | `DimensionProvider` | The dimension service provides access to the grid's dimensions and settings. | [src/types/plugin.types.ts:30](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/types/plugin.types.ts#L30) |
| `plugins` | [`PluginServiceBase`](Interface.PluginServiceBase.md) | Plugin services | [src/types/plugin.types.ts:48](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/types/plugin.types.ts#L48) |
| `selection` | `SelectionStoreConnector` | The selection service provides access to the grid's selection state. | [src/types/plugin.types.ts:34](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/types/plugin.types.ts#L34) |
| `viewport` | `ViewportProvider` | The viewport service provides access to the grid's viewport state. | [src/types/plugin.types.ts:42](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/types/plugin.types.ts#L42) |

## Defined in

[src/types/plugin.types.ts:22](https://github.com/revolist/revogrid/blob/a32d3a869ff2d770043cd2738815e885c8f5d1a9/src/types/plugin.types.ts#L22)
