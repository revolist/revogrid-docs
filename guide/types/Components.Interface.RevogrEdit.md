[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `additionalData` | `any` | Additional data to pass to renderer |
| `beforeDisconnect` | () => `Promise`\<`void`\> | Before editor got disconnected. Can be triggered multiple times before actual disconnect. |
| `cancelChanges` | () => `Promise`\<`void`\> | Cancel pending changes flag. Editor will be closed without autosave. |
| `column` | [`ColumnDataSchemaModel`](Type.ColumnDataSchemaModel.md) | Column data for editor. |
| `editCell` | [`EditCell`](Type.EditCell.md) | Cell to edit data. |
| `editor` | [`EditorCtr`](Type.EditorCtr.md) | Custom editors register |
| `saveOnClose` | `boolean` | Save on editor close. Defines if data should be saved on editor close. |
