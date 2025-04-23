[RevoGrid Documentation v4.15.6](README.md) / [Components](Namespace.Components.md) / RevogrOrderEditor

# Interface: RevogrOrderEditor

Component for handling row order editor.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `clearOrder` | () => `Promise`\<`void`\> | - | [src/components.d.ts:553](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L553) |
| `dataStore` | [`Observable`](TypeAlias.Observable.md)\<[`DSourceState`](TypeAlias.DSourceState.md)\<[`DataType`](TypeAlias.DataType.md), [`DimensionRows`](TypeAlias.DimensionRows.md)\>\> | Static stores, not expected to change during component lifetime | [src/components.d.ts:557](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L557) |
| `dimensionCol` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings X | [src/components.d.ts:561](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L561) |
| `dimensionRow` | [`Observable`](TypeAlias.Observable.md)\<[`DimensionSettingsState`](Interface.DimensionSettingsState.md)\> | Dimension settings Y | [src/components.d.ts:565](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L565) |
| `dragStart` | (`e`: [`DragStartEvent`](Interface.DragStartEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:566](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L566) |
| `endOrder` | (`e`: `MouseEvent`) => `Promise`\<`void`\> | - | [src/components.d.ts:567](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L567) |
| `parent` | `HTMLElement` | Parent element | [src/components.d.ts:571](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L571) |
| `rowType` | [`DimensionRows`](TypeAlias.DimensionRows.md) | - | [src/components.d.ts:572](https://github.com/revolist/revogrid/blob/8ab186c1ae2faee97d25784acff6dbf4187524f8/src/components.d.ts#L572) |
