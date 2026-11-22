[RevoGrid Documentation v4.31.8](README.md) / BeforeFilterApplyEventProps

# Interface: BeforeFilterApplyEventProps\<TModel, TColumn\>

Payload emitted before Core applies filters. `collection` is a view
containing only the first condition for each column; `filterItems` is the
complete multi-condition model.

## Example

```ts
grid.addEventListener('beforefilterapply', event => {
  event.preventDefault();
  const filters = event.detail.filterItems;
  // Send filters to the application's server-side query endpoint.
});
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TModel` *extends* [`DataType`](TypeAlias.DataType.md) | [`DataType`](TypeAlias.DataType.md) |
| `TColumn` *extends* [`ColumnRegular`](Interface.ColumnRegular.md) | [`ColumnRegular`](Interface.ColumnRegular.md) |

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `collection` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`FilterCollectionItem`](TypeAlias.FilterCollectionItem.md)\> | First condition for each column. | [src/plugins/filter/filter.types.ts:228](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L228) |
| `columns` | `TColumn`[] | Regular grid columns. | [src/plugins/filter/filter.types.ts:234](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L234) |
| `filterItems` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | Complete multi-condition filter model. | [src/plugins/filter/filter.types.ts:230](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L230) |
| `source` | `TModel`[] | Source rows being filtered. | [src/plugins/filter/filter.types.ts:232](https://github.com/revolist/revogrid/blob/d3fcbce83dfdc16a79a05fb2ad67e78e03bb7bb7/src/plugins/filter/filter.types.ts#L232) |
