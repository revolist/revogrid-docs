[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:679](https://github.com/revolist/revogrid/blob/5e3002471d0c6a5af7f60949f39b6639df457ad1/src/components.d.ts#L679) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<`undefined` \| [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:684](https://github.com/revolist/revogrid/blob/5e3002471d0c6a5af7f60949f39b6639df457ad1/src/components.d.ts#L684) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:685](https://github.com/revolist/revogrid/blob/5e3002471d0c6a5af7f60949f39b6639df457ad1/src/components.d.ts#L685) |
| `contentHeight` | `number` | Height of inner content | [src/components.d.ts:689](https://github.com/revolist/revogrid/blob/5e3002471d0c6a5af7f60949f39b6639df457ad1/src/components.d.ts#L689) |
| `contentWidth` | `number` | Width of inner content | [src/components.d.ts:693](https://github.com/revolist/revogrid/blob/5e3002471d0c6a5af7f60949f39b6639df457ad1/src/components.d.ts#L693) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:697](https://github.com/revolist/revogrid/blob/5e3002471d0c6a5af7f60949f39b6639df457ad1/src/components.d.ts#L697) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:698](https://github.com/revolist/revogrid/blob/5e3002471d0c6a5af7f60949f39b6639df457ad1/src/components.d.ts#L698) |
