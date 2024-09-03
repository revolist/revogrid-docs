[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1708](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1708) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1712](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1712) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1716](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1716) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1720](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1720) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1724](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1724) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1728](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1728) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1732](https://github.com/revolist/revogrid/blob/0787a2552cf5bbb21cb9aa4dbfa802d1d65b108b/src/components.d.ts#L1732) |
