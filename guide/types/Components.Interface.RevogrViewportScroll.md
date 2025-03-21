[RevoGrid Documentation v4.14.2](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:711](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L711) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:716](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L716) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:717](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L717) |
| `contentHeight` | `number` | Height of inner content | [src/components.d.ts:721](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L721) |
| `contentWidth` | `number` | Width of inner content | [src/components.d.ts:725](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L725) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:729](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L729) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:730](https://github.com/revolist/revogrid/blob/29f379095274a66a187c28b49fe0e1fb4170d3ea/src/components.d.ts#L730) |
