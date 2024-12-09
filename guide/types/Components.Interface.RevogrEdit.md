[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:385](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/components.d.ts#L385) |
| `beforeDisconnect` | () => `Promise`\<`void`\> | Before editor got disconnected. Can be triggered multiple times before actual disconnect. | [src/components.d.ts:389](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/components.d.ts#L389) |
| `cancelChanges` | () => `Promise`\<`void`\> | Cancel pending changes flag. Editor will be closed without autosave. | [src/components.d.ts:393](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/components.d.ts#L393) |
| `column` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:397](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/components.d.ts#L397) |
| `editCell` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:401](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/components.d.ts#L401) |
| `editor` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:405](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/components.d.ts#L405) |
| `saveOnClose` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:409](https://github.com/revolist/revogrid/blob/6d16baf0ac19236f5511b0ce2aeccf75326e95c2/src/components.d.ts#L409) |
