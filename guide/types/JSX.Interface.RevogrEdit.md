[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1768](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L1768) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1772](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L1772) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1776](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L1776) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1780](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L1780) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1784](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L1784) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1788](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L1788) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1792](https://github.com/revolist/revogrid/blob/2ebd07d1ea2e60cec0c080f59af7557401bdcc98/src/components.d.ts#L1792) |
