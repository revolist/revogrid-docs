[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1722](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1722) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1726](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1726) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1730](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1730) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1734](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1734) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1738](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1738) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1742](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1742) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1746](https://github.com/revolist/revogrid/blob/52c8861ed92574ba1d5817b32afec294ddb1f986/src/components.d.ts#L1746) |
