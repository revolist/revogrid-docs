[RevoGrid Documentation v4.31.4](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:809](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L809) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:814](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L814) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:815](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L815) |
| `contentHeight` | `number` | Height of inner content **Default** `0` | [src/components.d.ts:820](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L820) |
| `contentWidth` | `number` | Width of inner content **Default** `0` | [src/components.d.ts:825](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L825) |
| `noHorizontalScrollTransfer` | `boolean` | **Default** `false` | [src/components.d.ts:829](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L829) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:833](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L833) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:834](https://github.com/revolist/revogrid/blob/42b41cd481ad64baa397ad2e9d25fbbc0a40518f/src/components.d.ts#L834) |
