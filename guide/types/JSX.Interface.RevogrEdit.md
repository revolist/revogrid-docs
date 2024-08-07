[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1680](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L1680) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1684](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L1684) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1688](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L1688) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1692](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L1692) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1696](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L1696) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1700](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L1700) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1704](https://github.com/revolist/revogrid/blob/0ab93afcbb5b98b002edc76b162fc6cdefa047cd/src/components.d.ts#L1704) |
