[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1645](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1645) |
| `column?` | [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1649](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1649) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1653](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1653) |
| `editor?` | [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1657](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1657) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1661](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1661) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1665](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1665) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1669](https://github.com/revolist/revogrid/blob/c9c4fc1791ac452c4c9470419263ce544ebb624f/src/components.d.ts#L1669) |
