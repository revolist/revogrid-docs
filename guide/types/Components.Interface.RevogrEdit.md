[RevoGrid Documentation v4.13.4](README.md) / [Components](Namespace.Components.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:390](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L390) |
| `beforeDisconnect` | () => `Promise`\<`void`\> | Before editor got disconnected. Can be triggered multiple times before actual disconnect. | [src/components.d.ts:394](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L394) |
| `cancelChanges` | () => `Promise`\<`void`\> | Cancel pending changes flag. Editor will be closed without autosave. | [src/components.d.ts:398](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L398) |
| `column` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:402](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L402) |
| `editCell` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:406](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L406) |
| `editor` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:410](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L410) |
| `saveOnClose` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:414](https://github.com/revolist/revogrid/blob/325e86c31155d90566dec588c08b121b0ae7657a/src/components.d.ts#L414) |
