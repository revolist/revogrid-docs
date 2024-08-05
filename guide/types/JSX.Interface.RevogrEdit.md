[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1658](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1658) |
| `column?` | [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1662](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1662) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1666](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1666) |
| `editor?` | [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1670](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1670) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1674](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1674) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1678](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1678) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1682](https://github.com/revolist/revogrid/blob/0b52000f7477669f9da5b2b768b7ac1b608db9f9/src/components.d.ts#L1682) |
