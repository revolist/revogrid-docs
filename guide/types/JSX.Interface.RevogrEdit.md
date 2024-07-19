[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1646](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1646) |
| `column?` | [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1650](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1650) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1654](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1654) |
| `editor?` | [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1658](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1658) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1662](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1662) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1666](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1666) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1670](https://github.com/revolist/revogrid/blob/04dd894203fb683ca28026a56e8b7c79feca958d/src/components.d.ts#L1670) |
