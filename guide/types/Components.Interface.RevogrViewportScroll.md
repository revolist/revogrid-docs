[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:659](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/components.d.ts#L659) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:664](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/components.d.ts#L664) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:665](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/components.d.ts#L665) |
| `contentHeight` | `number` | Height of inner content | [src/components.d.ts:669](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/components.d.ts#L669) |
| `contentWidth` | `number` | Width of inner content | [src/components.d.ts:673](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/components.d.ts#L673) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:677](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/components.d.ts#L677) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:678](https://github.com/revolist/revogrid/blob/08f5cc514b9bc1666dd85d20f560c0e9b7c7af14/src/components.d.ts#L678) |
