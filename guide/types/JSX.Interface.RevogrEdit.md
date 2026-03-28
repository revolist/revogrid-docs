[RevoGrid Documentation v4.21.1](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1898](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L1898) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1902](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L1902) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1906](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L1906) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1910](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L1910) |
| `onCelleditinit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event initiator, first in the cellEdit event chain | [src/components.d.ts:1914](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L1914) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1918](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L1918) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. **Default** `false` | [src/components.d.ts:1923](https://github.com/revolist/revogrid/blob/96ed9346553c6c7183fca30c7e8c7f1c5025e6da/src/components.d.ts#L1923) |
