[RevoGrid Documentation v4.14.6](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1791](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/components.d.ts#L1791) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1795](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/components.d.ts#L1795) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1799](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/components.d.ts#L1799) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1803](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/components.d.ts#L1803) |
| `onCelleditinit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event initiator, first in the cellEdit event chain | [src/components.d.ts:1807](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/components.d.ts#L1807) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1811](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/components.d.ts#L1811) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1815](https://github.com/revolist/revogrid/blob/62db573a68fb44a3482895267c8cda1c54f2f4d4/src/components.d.ts#L1815) |
