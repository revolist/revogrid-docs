[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1753](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1753) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1757](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1757) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1761](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1761) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1765](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1765) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1769](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1769) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1773](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1773) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1777](https://github.com/revolist/revogrid/blob/80825bf77a49d260f052f2584a0efe930c2da0d3/src/components.d.ts#L1777) |
