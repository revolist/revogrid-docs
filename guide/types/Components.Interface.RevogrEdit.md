[RevoGrid Documentation v4.24.3](README.md) / [Components](Namespace.Components.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:446](https://github.com/revolist/revogrid/blob/3f18983837fc656b0d90eb4d55e52a605e13bd10/src/components.d.ts#L446) |
| `beforeDisconnect` | () => `Promise`\<`void`\> | Before editor got disconnected. Can be triggered multiple times before actual disconnect. | [src/components.d.ts:450](https://github.com/revolist/revogrid/blob/3f18983837fc656b0d90eb4d55e52a605e13bd10/src/components.d.ts#L450) |
| `cancelChanges` | () => `Promise`\<`void`\> | Cancel pending changes flag. Editor will be closed without autosave. | [src/components.d.ts:454](https://github.com/revolist/revogrid/blob/3f18983837fc656b0d90eb4d55e52a605e13bd10/src/components.d.ts#L454) |
| `column` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`ColumnProp`](TypeAlias.ColumnProp.md)\> | Column data for editor. | [src/components.d.ts:458](https://github.com/revolist/revogrid/blob/3f18983837fc656b0d90eb4d55e52a605e13bd10/src/components.d.ts#L458) |
| `editCell` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:462](https://github.com/revolist/revogrid/blob/3f18983837fc656b0d90eb4d55e52a605e13bd10/src/components.d.ts#L462) |
| `editor` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:466](https://github.com/revolist/revogrid/blob/3f18983837fc656b0d90eb4d55e52a605e13bd10/src/components.d.ts#L466) |
| `saveOnClose` | `boolean` | Save on editor close. Defines if data should be saved on editor close. **Default** `false` | [src/components.d.ts:471](https://github.com/revolist/revogrid/blob/3f18983837fc656b0d90eb4d55e52a605e13bd10/src/components.d.ts#L471) |
