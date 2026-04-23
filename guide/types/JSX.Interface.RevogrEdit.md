[RevoGrid Documentation v4.21.4](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1925](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L1925) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1929](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L1929) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1933](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L1933) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1937](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L1937) |
| `onCelleditinit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event initiator, first in the cellEdit event chain | [src/components.d.ts:1941](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L1941) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1945](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L1945) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. **Default** `false` | [src/components.d.ts:1950](https://github.com/revolist/revogrid/blob/61d11b4be1c8426731b4a2f79964d078c5954e18/src/components.d.ts#L1950) |
