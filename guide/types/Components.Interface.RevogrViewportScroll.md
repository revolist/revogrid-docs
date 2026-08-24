[RevoGrid Documentation v4.26.1](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:797](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L797) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:802](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L802) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:803](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L803) |
| `contentHeight` | `number` | Height of inner content **Default** `0` | [src/components.d.ts:808](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L808) |
| `contentWidth` | `number` | Width of inner content **Default** `0` | [src/components.d.ts:813](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L813) |
| `noHorizontalScrollTransfer` | `boolean` | **Default** `false` | [src/components.d.ts:817](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L817) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:821](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L821) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:822](https://github.com/revolist/revogrid/blob/496e830978060b5e7c29c6643944dfebb0146d83/src/components.d.ts#L822) |
