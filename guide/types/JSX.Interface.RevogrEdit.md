[RevoGrid Documentation v4.31.6](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1998](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L1998) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`ColumnProp`](TypeAlias.ColumnProp.md)\> | Column data for editor. | [src/components.d.ts:2002](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L2002) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:2006](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L2006) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:2010](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L2010) |
| `onCelleditinit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event initiator, first in the cellEdit event chain | [src/components.d.ts:2014](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L2014) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:2018](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L2018) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. **Default** `false` | [src/components.d.ts:2023](https://github.com/revolist/revogrid/blob/207fe878a466cd40e518ada12817ce5a41f860c2/src/components.d.ts#L2023) |
