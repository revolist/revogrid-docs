[RevoGrid Documentation v4.11.20](README.md) / [Components](Namespace.Components.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:384](https://github.com/revolist/revogrid/blob/4b7a998aefffde7f50261e3e7336253a89c4c269/src/components.d.ts#L384) |
| `beforeDisconnect` | () => `Promise`\<`void`\> | Before editor got disconnected. Can be triggered multiple times before actual disconnect. | [src/components.d.ts:388](https://github.com/revolist/revogrid/blob/4b7a998aefffde7f50261e3e7336253a89c4c269/src/components.d.ts#L388) |
| `cancelChanges` | () => `Promise`\<`void`\> | Cancel pending changes flag. Editor will be closed without autosave. | [src/components.d.ts:392](https://github.com/revolist/revogrid/blob/4b7a998aefffde7f50261e3e7336253a89c4c269/src/components.d.ts#L392) |
| `column` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:396](https://github.com/revolist/revogrid/blob/4b7a998aefffde7f50261e3e7336253a89c4c269/src/components.d.ts#L396) |
| `editCell` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:400](https://github.com/revolist/revogrid/blob/4b7a998aefffde7f50261e3e7336253a89c4c269/src/components.d.ts#L400) |
| `editor` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:404](https://github.com/revolist/revogrid/blob/4b7a998aefffde7f50261e3e7336253a89c4c269/src/components.d.ts#L404) |
| `saveOnClose` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:408](https://github.com/revolist/revogrid/blob/4b7a998aefffde7f50261e3e7336253a89c4c269/src/components.d.ts#L408) |
