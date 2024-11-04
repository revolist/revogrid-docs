[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:536](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L536) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:540](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L540) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:544](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L544) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:548](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L548) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:549](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L549) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:550](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L550) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:554](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L554) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:555](https://github.com/revolist/revogrid/blob/339b58d64f0e4822db63d040318421d77ef85671/src/components.d.ts#L555) |
