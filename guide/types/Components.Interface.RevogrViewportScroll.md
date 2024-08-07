[@revolist/revogrid](README.md) / [Components](Namespace.Components.md) / RevogrViewportScroll

# Interface: RevogrViewportScroll

Viewport scroll component for RevoGrid

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `applyScroll` | (`type`: [`DimensionType`](TypeAlias.DimensionType.md), `e`: `UIEvent`) => `Promise`\<`void`\> | Extra layer for scroll event monitoring, where MouseWheel event is not passing We need to trigger scroll event in case there is no mousewheel event | [src/components.d.ts:660](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L660) |
| `changeScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md), `silent`?: `boolean`) => `Promise`\<[`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)\> | update on delta in case we don't know existing position or external change | [src/components.d.ts:665](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L665) |
| `colType` | [`DimensionCols`](TypeAlias.DimensionCols.md) \| `"rowHeaders"` | - | [src/components.d.ts:666](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L666) |
| `contentHeight` | `number` | Height of inner content | [src/components.d.ts:670](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L670) |
| `contentWidth` | `number` | Width of inner content | [src/components.d.ts:674](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L674) |
| `rowHeader` | `boolean` | Enable row header | [src/components.d.ts:678](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L678) |
| `setScroll` | (`e`: [`ViewPortScrollEvent`](TypeAlias.ViewPortScrollEvent.md)) => `Promise`\<`void`\> | - | [src/components.d.ts:679](https://github.com/revolist/revogrid/blob/e1595e2274ede0d95fc882d4d4e21ec46b508cad/src/components.d.ts#L679) |
