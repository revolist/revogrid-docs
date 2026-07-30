[RevoGrid Documentation v4.24.1](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:787](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L787) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:792](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L792) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:793](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L793) |
| `contentHeight` | `number` | Height of inner content **Default** `0` | [src/components.d.ts:798](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L798) |
| `contentWidth` | `number` | Width of inner content **Default** `0` | [src/components.d.ts:803](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L803) |
| `noHorizontalScrollTransfer` | `boolean` | **Default** `false` | [src/components.d.ts:807](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L807) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:811](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L811) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:812](https://github.com/revolist/revogrid/blob/988f05df30e815486c8b4467f75b54627b66b975/src/components.d.ts#L812) |
