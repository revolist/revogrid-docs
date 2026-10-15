[RevoGrid Documentation v4.28.4](README.md) / BeforeFilterApplyEventProps

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
| `collection` | `Record`\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`FilterCollectionItem`](TypeAlias.FilterCollectionItem.md)\> | First condition for each column. | [src/plugins/filter/filter.types.ts:226](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L226) |
| `columns` | `TColumn`[] | Regular grid columns. | [src/plugins/filter/filter.types.ts:232](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L232) |
| `filterItems` | [`MultiFilterItem`](Interface.MultiFilterItem.md) | Complete multi-condition filter model. | [src/plugins/filter/filter.types.ts:228](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L228) |
| `source` | `TModel`[] | Source rows being filtered. | [src/plugins/filter/filter.types.ts:230](https://github.com/revolist/revogrid/blob/a793ded3ebc70e0728f055d3eda88c1f1c34da54/src/plugins/filter/filter.types.ts#L230) |
