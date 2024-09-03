[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1709](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L1709) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1713](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L1713) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1717](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L1717) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1721](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L1721) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1725](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L1725) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1729](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L1729) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1733](https://github.com/revolist/revogrid/blob/7d79cd09d43b75b81712fd40eaf892d3b6da4928/src/components.d.ts#L1733) |
