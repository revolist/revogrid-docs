[RevoGrid Documentation v4.24.2](README.md) / [Components](Namespace.Components.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:441](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L441) |
| `beforeDisconnect` | () => `Promise`\<`void`\> | Before editor got disconnected. Can be triggered multiple times before actual disconnect. | [src/components.d.ts:445](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L445) |
| `cancelChanges` | () => `Promise`\<`void`\> | Cancel pending changes flag. Editor will be closed without autosave. | [src/components.d.ts:449](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L449) |
| `column` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`ColumnProp`](TypeAlias.ColumnProp.md)\> | Column data for editor. | [src/components.d.ts:453](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L453) |
| `editCell` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:457](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L457) |
| `editor` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:461](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L461) |
| `saveOnClose` | `boolean` | Save on editor close. Defines if data should be saved on editor close. **Default** `false` | [src/components.d.ts:466](https://github.com/revolist/revogrid/blob/41e30fc48198c08baf2552eb224ddb438d8ce9f0/src/components.d.ts#L466) |
