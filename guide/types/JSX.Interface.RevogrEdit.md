[RevoGrid Documentation v4.11.16](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1776](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/components.d.ts#L1776) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1780](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/components.d.ts#L1780) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1784](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/components.d.ts#L1784) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1788](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/components.d.ts#L1788) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1792](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/components.d.ts#L1792) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1796](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/components.d.ts#L1796) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1800](https://github.com/revolist/revogrid/blob/763c92aaba8e74029a3eccde1c674251aae1a42c/src/components.d.ts#L1800) |
