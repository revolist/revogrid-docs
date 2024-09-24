[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1726](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/components.d.ts#L1726) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1730](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/components.d.ts#L1730) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1734](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/components.d.ts#L1734) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1738](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/components.d.ts#L1738) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1742](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/components.d.ts#L1742) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1746](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/components.d.ts#L1746) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1750](https://github.com/revolist/revogrid/blob/2ea7abe619348281bd56e0a8ea657ffef9c19154/src/components.d.ts#L1750) |
