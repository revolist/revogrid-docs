[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1761](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1761) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1765](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1765) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1769](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1769) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1773](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1773) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1777](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1777) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1781](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1781) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1785](https://github.com/revolist/revogrid/blob/8d359a6641aa3d85978ae1d816f404366e0fe6c4/src/components.d.ts#L1785) |
