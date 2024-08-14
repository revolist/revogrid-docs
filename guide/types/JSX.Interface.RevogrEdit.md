[@revolist/revogrid](README.md) / [JSX](Namespace.JSX.md) / RevogrEdit

# Interface: RevogrEdit

Represents a cell editor in a grid.
It manages the editing of cells by handling events, saving data, rendering the editor UI,
and managing the lifecycle of the editor instance.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `additionalData?` | `any` | Additional data to pass to renderer | [src/components.d.ts:1682](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L1682) |
| `column?` | `null` \| [`ColumnDataSchemaModel`](TypeAlias.ColumnDataSchemaModel.md) | Column data for editor. | [src/components.d.ts:1686](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L1686) |
| `editCell?` | [`EditCell`](TypeAlias.EditCell.md) | Cell to edit data. | [src/components.d.ts:1690](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L1690) |
| `editor?` | `null` \| [`EditorCtr`](TypeAlias.EditorCtr.md) | Custom editors register | [src/components.d.ts:1694](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L1694) |
| `onCelledit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<[`SaveDataDetails`](TypeAlias.SaveDataDetails.md)\>) => `void` | Cell edit event | [src/components.d.ts:1698](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L1698) |
| `onCloseedit?` | (`event`: [`RevogrEditCustomEvent`](Interface.RevogrEditCustomEvent.md)\<`undefined` \| `boolean`\>) => `void` | Close editor event pass true if requires focus next | [src/components.d.ts:1702](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L1702) |
| `saveOnClose?` | `boolean` | Save on editor close. Defines if data should be saved on editor close. | [src/components.d.ts:1706](https://github.com/revolist/revogrid/blob/477507f867ff98f395e0119897545945e222b246/src/components.d.ts#L1706) |
