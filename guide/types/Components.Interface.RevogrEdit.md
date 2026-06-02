[RevoGrid Documentation v4.23.6](README.md) / [Components](Namespace.Components.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData` | `any` | Additional data to pass to renderer | [src/components.d.ts:436](https://github.com/revolist/revogrid/blob/fe0566a7e854f330e949303c09600d0c320f2290/src/components.d.ts#L436) |
| `beforeDisconnect` | () => `Promise`\<`void`\> | Before editor got disconnected. Can be triggered multiple times before actual disconnect. | [src/components.d.ts:440](https://github.com/revolist/revogrid/blob/fe0566a7e854f330e949303c09600d0c320f2290/src/components.d.ts#L440) |
| `cancelChanges` | () => `Promise`\<`void`\> | Cancel pending changes flag. Editor will be closed without autosave. | [src/components.d.ts:444](https://github.com/revolist/revogrid/blob/fe0566a7e854f330e949303c09600d0c320f2290/src/components.d.ts#L444) |
| `column` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`ColumnProp`](TypeAlias.ColumnProp.md)\> | Column data for editor. | [src/components.d.ts:448](https://github.com/revolist/revogrid/blob/fe0566a7e854f330e949303c09600d0c320f2290/src/components.d.ts#L448) |
| `editCell` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:452](https://github.com/revolist/revogrid/blob/fe0566a7e854f330e949303c09600d0c320f2290/src/components.d.ts#L452) |
| `editor` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:456](https://github.com/revolist/revogrid/blob/fe0566a7e854f330e949303c09600d0c320f2290/src/components.d.ts#L456) |
| `saveOnClose` | `boolean` | Save on editor close. Defines if data should be saved on editor close. **Default** `false` | [src/components.d.ts:461](https://github.com/revolist/revogrid/blob/fe0566a7e854f330e949303c09600d0c320f2290/src/components.d.ts#L461) |
