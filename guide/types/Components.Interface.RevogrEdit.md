[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:379](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L379) |
| `beforeDisconnect` | () => `Promise`\<`void`\> | Before editor got disconnected. Can be triggered multiple times before actual disconnect. | [src/components.d.ts:383](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L383) |
| `cancelChanges` | () => `Promise`\<`void`\> | Cancel pending changes flag. Editor will be closed without autosave. | [src/components.d.ts:387](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L387) |
| `column` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:391](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L391) |
| `editCell` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:395](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L395) |
| `editor` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:399](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L399) |
| `saveOnClose` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:403](https://github.com/revolist/revogrid/blob/d396742969a06bfcb70f8e511e9e4fd6e640c7e3/src/components.d.ts#L403) |
