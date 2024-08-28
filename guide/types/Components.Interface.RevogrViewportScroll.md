[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:663](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L663) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:668](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L668) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:669](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L669) |
| `contentHeight` | `number` | Height of inner content | [src/components.d.ts:673](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L673) |
| `contentWidth` | `number` | Width of inner content | [src/components.d.ts:677](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L677) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:681](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L681) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:682](https://github.com/revolist/revogrid/blob/25ca3c23eae2ed21be1e6ef1fe2d086a3aef0cb1/src/components.d.ts#L682) |
