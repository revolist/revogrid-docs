[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:371](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L371) |
| `beforeDisconnect` | () => `Promise`\<`void`\> | Before editor got disconnected. Can be triggered multiple times before actual disconnect. | [src/components.d.ts:375](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L375) |
| `cancelChanges` | () => `Promise`\<`void`\> | Cancel pending changes flag. Editor will be closed without autosave. | [src/components.d.ts:379](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L379) |
| `column` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:383](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L383) |
| `editCell` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:387](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L387) |
| `editor` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:391](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L391) |
| `saveOnClose` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:395](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L395) |
