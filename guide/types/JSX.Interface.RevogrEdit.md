[RevoGrid Documentation v4.26.0](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1955](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/components.d.ts#L1955) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`ColumnProp`](TypeAlias.ColumnProp.md)\> | Column data for editor. | [src/components.d.ts:1959](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/components.d.ts#L1959) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1963](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/components.d.ts#L1963) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1967](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/components.d.ts#L1967) |
| `onCelleditinit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event initiator, first in the cellEdit event chain | [src/components.d.ts:1971](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/components.d.ts#L1971) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1975](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/components.d.ts#L1975) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. **Default** `false` | [src/components.d.ts:1980](https://github.com/revolist/revogrid/blob/ed4e703a0ef6a1db8113d868ffd81d53372a8861/src/components.d.ts#L1980) |
