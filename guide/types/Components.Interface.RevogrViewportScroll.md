[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:657](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L657) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:662](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L662) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:663](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L663) |
| `contentHeight` | `number` | Height of inner content | [src/components.d.ts:667](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L667) |
| `contentWidth` | `number` | Width of inner content | [src/components.d.ts:671](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L671) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:675](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L675) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:676](https://github.com/revolist/revogrid/blob/1ac09c9216d3d9dcf169b93db55034b60bfdcc8e/src/components.d.ts#L676) |
