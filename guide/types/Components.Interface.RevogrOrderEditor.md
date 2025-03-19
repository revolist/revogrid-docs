[RevoGrid Documentation v4.14.1](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:545](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L545) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:549](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L549) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:553](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L553) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:557](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L557) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:558](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L558) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:559](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L559) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:563](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L563) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:564](https://github.com/revolist/revogrid/blob/925db466c3d20933669e374666cd0ddbe00cac19/src/components.d.ts#L564) |
