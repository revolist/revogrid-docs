[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1643](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1643) |
| `column?` | [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1647](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1647) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1651](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1651) |
| `editor?` | [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1655](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1655) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1659](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1659) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1663](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1663) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1667](https://github.com/revolist/revogrid/blob/69db770b4dd0e83354c8d987e03567beaf944291/src/components.d.ts#L1667) |
