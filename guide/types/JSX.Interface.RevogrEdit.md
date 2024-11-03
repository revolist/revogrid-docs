[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1762](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1762) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1766](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1766) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1770](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1770) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1774](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1774) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1778](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1778) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1782](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1782) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1786](https://github.com/revolist/revogrid/blob/d240e7e144f55d013a7a7b8d313a97b83af7bd06/src/components.d.ts#L1786) |
