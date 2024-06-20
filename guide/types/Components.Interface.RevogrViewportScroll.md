[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `applyScroll` | (`type`: [`DimensionType`](Type.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<[`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change |
| `colType` | [`DimensionCols`](Type.DimensionCols.md) \| `"rowHeaders"` | - |
| `contentHeight` | `number` | Height of inner content |
| `contentWidth` | `number` | Width of inner content |
| `rowHeader` | `boolean` | Enable row header |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](Type.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - |
