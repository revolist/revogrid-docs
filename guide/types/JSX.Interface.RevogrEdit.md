[RevoGrid Documentation v4.17.2](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1896](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L1896) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1900](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L1900) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1904](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L1904) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1908](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L1908) |
| `onCelleditinit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event initiator, first in the cellEdit event chain | [src/components.d.ts:1912](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L1912) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1916](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L1916) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. **Default** `false` | [src/components.d.ts:1921](https://github.com/revolist/revogrid/blob/ce71b2a267b00cca0f999dcb05c4c4637765259a/src/components.d.ts#L1921) |
