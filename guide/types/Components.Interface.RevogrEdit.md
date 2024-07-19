[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:365](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L365) |
| `beforeDisconnect` | () => `Promise`\<`void`\> | Before editor got disconnected. Can be triggered multiple times before actual disconnect. | [src/components.d.ts:369](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L369) |
| `cancelChanges` | () => `Promise`\<`void`\> | Cancel pending changes flag. Editor will be closed without autosave. | [src/components.d.ts:373](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L373) |
| `column` | [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:377](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L377) |
| `editCell` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:381](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L381) |
| `editor` | [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:385](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L385) |
| `saveOnClose` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:389](https://github.com/revolist/revogrid/blob/74012ec30398bf39d0acc929bd7f7963856aba4e/src/components.d.ts#L389) |
