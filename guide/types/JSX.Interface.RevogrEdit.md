[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `additionalData?` | `any` | Additional data to pass to renderer |
| `column?` | [`ColumnDataSchemaModel`](Type.ColumnDataSchemaModel.md) | Column data for editor. |
| `editCell?` | [`EditCell`](Type.EditCell.md) | Cell to edit data. |
| `editor?` | [`EditorCtr`](Type.EditorCtr.md) | Custom editors register |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](Type.SaveDataDetails.md)\>) => `void` | Cell edit event |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`boolean`\>) => `void` | Close editor event pass true if requires focus next |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. |
