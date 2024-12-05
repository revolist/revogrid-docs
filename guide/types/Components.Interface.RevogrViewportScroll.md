[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:707](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L707) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:712](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L712) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:713](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L713) |
| `contentHeight` | `number` | Height of inner content | [src/components.d.ts:717](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L717) |
| `contentWidth` | `number` | Width of inner content | [src/components.d.ts:721](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L721) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:725](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L725) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:726](https://github.com/revolist/revogrid/blob/fc07fa1dfd1d2d56902bfb887503d551faf5878d/src/components.d.ts#L726) |
