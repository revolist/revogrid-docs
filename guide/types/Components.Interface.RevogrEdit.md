[RevoGrid Documentation v4.19.2](README.md) / [Components](Namespace.Components.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:431](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L431) |
| `beforeDisconnect` | () => `Promise`\<`void`\> | Before editor got disconnected. Can be triggered multiple times before actual disconnect. | [src/components.d.ts:435](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L435) |
| `cancelChanges` | () => `Promise`\<`void`\> | Cancel pending changes flag. Editor will be closed without autosave. | [src/components.d.ts:439](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L439) |
| `column` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:443](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L443) |
| `editCell` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:447](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L447) |
| `editor` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:451](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L451) |
| `saveOnClose` | `boolean` | Save on editor close. Defines if data should be saved on editor close. **Default** `false` | [src/components.d.ts:456](https://github.com/revolist/revogrid/blob/7388e547230456f2843749ba32fcb5583ae0fea2/src/components.d.ts#L456) |
