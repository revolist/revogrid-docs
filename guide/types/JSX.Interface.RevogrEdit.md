[RevoGrid Documentation v4.29.0](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1966](https://github.com/revolist/revogrid/blob/9827a26b6eac72857b5b257738fc44efe7783da3/src/components.d.ts#L1966) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](Interface.ColumnDataSchemaModel.md)\<[`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>, [`ColumnRegular`](Interface.ColumnRegular.md)\<[`ColumnProp`](TypeAlias.ColumnProp.md), [`DataType`](TypeAlias.DataType.md)\<`any`, [`ColumnProp`](TypeAlias.ColumnProp.md)\>\>, [`ColumnProp`](TypeAlias.ColumnProp.md)\> | Column data for editor. | [src/components.d.ts:1970](https://github.com/revolist/revogrid/blob/9827a26b6eac72857b5b257738fc44efe7783da3/src/components.d.ts#L1970) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1974](https://github.com/revolist/revogrid/blob/9827a26b6eac72857b5b257738fc44efe7783da3/src/components.d.ts#L1974) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1978](https://github.com/revolist/revogrid/blob/9827a26b6eac72857b5b257738fc44efe7783da3/src/components.d.ts#L1978) |
| `onCelleditinit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event initiator, first in the cellEdit event chain | [src/components.d.ts:1982](https://github.com/revolist/revogrid/blob/9827a26b6eac72857b5b257738fc44efe7783da3/src/components.d.ts#L1982) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1986](https://github.com/revolist/revogrid/blob/9827a26b6eac72857b5b257738fc44efe7783da3/src/components.d.ts#L1986) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. **Default** `false` | [src/components.d.ts:1991](https://github.com/revolist/revogrid/blob/9827a26b6eac72857b5b257738fc44efe7783da3/src/components.d.ts#L1991) |
